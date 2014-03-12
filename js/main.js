function enableSuggestion() {
    document.getElementById("suggestion").style.display = "block";
}

function disableSuggestion() {
    document.getElementById("suggestion").style.display = "none";
}

angular.module("SearchApp", []).service("searchService", SearchService).filter("andSearchFilter", ANDSearchFilter).controller("searchController", SearchController);
