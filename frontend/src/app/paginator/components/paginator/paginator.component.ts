import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {PaginatorService} from "../../service/paginator.service";

@Component({
  selector: 'nb-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnChanges {
  @Input() pageSize:number = 10
  @Input() maxPages:number = 5
  @Input() endPoint:string
  @Input() filters:string[]
  @Output() resultsChange = new EventEmitter<any[]>();
  pageArray: number[] = []
  displayedPageArray: number[]
  currentPage:number = 1

  constructor(private paginatorService:PaginatorService) { }

  ngOnChanges(): void {
    this.currentPage = 1
    this.getPage(true)
  }

  getPage(refreshDisplay:boolean = false){
    this.paginatorService.getPage(this.endPoint, this.pageSize, this.currentPage, this.filters).subscribe({
      next: res => {
        this.resultsChange.emit(res.results)
        this.pageArray = Array.from({length: Math.ceil(res.count/this.pageSize)}, (_, i) => i + 1)
        if(refreshDisplay) this.setDisplayPages(this.currentPage)
      },
      error: res => console.log(res)
    })
  }

  onPageChange(selectedPage:number){
    this.setDisplayPages(selectedPage)
    this.currentPage = selectedPage
    this.getPage()
  }

  setDisplayPages(selectedPage:number){
    const maxPages = this.pageArray.length < this.maxPages ? this.pageArray.length : this.maxPages
    if (selectedPage <= maxPages/2) {
      this.displayedPageArray = this.pageArray.slice(0, maxPages)
      return
    }
    if (selectedPage > Math.ceil(this.pageArray.length - maxPages/2)) {
      this.displayedPageArray = this.pageArray.slice(this.pageArray.length - maxPages, this.pageArray.length)
      return
    }
    if (selectedPage > maxPages/2)
      this.displayedPageArray = this.pageArray
        .slice(selectedPage-Math.ceil(maxPages/2), selectedPage+Math.floor(maxPages/2))
  }

  onPreviousPage() {
    if (this.currentPage === 1 || this.pageArray.length <= 1) return
    this.onPageChange(this.currentPage - 1)
  }
  onNextPage() {
    console.log(this.pageArray)
    if (this.currentPage === this.pageArray.length) return
    this.onPageChange(this.currentPage + 1)
  }
}
