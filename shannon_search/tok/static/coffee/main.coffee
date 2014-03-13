go(obj)->
    $("#inputbox").value = obj.innerText;

enableSuggestion = ()->
    document.getElementById('suggestion').style.display = "block"

disableSuggestion = ()->
    #document.getElementById('suggestion').style.display = "none"

angular.module("SearchApp", [])
    .service("searchService", SearchService)
    .filter("andSearchFilter", ANDSearchFilter)
    .controller("searchController", SearchController)
    .config(($interpolateProvider) ->
        $interpolateProvider.startSymbol('{$')
        $interpolateProvider.endSymbol('$}')
    )
