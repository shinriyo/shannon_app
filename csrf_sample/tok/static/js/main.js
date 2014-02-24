angular.module("SearchApp", []).service("searchService", SearchService).filter("andSearchFilter", ANDSearchFilter).controller("searchController", SearchController).config(function($interpolateProvider) {
$interpolateProvider.startSymbol('{$');
$interpolateProvider.endSymbol('$}');
});
