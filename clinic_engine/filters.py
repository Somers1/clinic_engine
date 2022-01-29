from rest_framework import filters


class AngularSmartTableSearchFilter(filters.SearchFilter):
    def get_search_fields(self, view, request):
        field = request.query_params.get('only')
        if field and field in getattr(view, 'search_fields', None):
            return [field]
        return super().get_search_fields(view, request)
