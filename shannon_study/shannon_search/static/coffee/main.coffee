go = (obj)->
    $("#inputbox")[0].value = obj.innerText

enableSuggestion = ()->
    $("#suggestion")[0].style.display = "block"

disableSuggestion = ()->
    $("#suggestion")[0].style.display = "none"

angular.module("SearchApp", [])
    .service("searchService", SearchService)
    .filter("andSearchFilter", ANDSearchFilter)
    .controller("searchController", SearchController)
    .config(($interpolateProvider) ->
        $interpolateProvider.startSymbol('{$')
        $interpolateProvider.endSymbol('$}')
    )
