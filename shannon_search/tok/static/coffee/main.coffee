main(obj)->
    $("#inputbox").value = obj.innerText;

angular.module("SearchApp", [])
    .service("searchService", SearchService)
    .filter("andSearchFilter", ANDSearchFilter)
    .controller("searchController", SearchController)
    .config(($interpolateProvider) ->
        $interpolateProvider.startSymbol('{$')
        $interpolateProvider.endSymbol('$}')
    )
