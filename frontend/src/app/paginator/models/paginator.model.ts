export abstract class Paginator {
  count:number;
  next:string;
  previous:string;
}

export abstract class GenericPaginatedResponse extends Paginator{
  results: any[];
}
