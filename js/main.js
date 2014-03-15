var disableSuggestion, enableSuggestion, go;

go = function(obj) {
  return disableSuggestion();
};

enableSuggestion = function() {
  return document.getElementById('suggestion').style.display = "block";
};

disableSuggestion = function() {
  return document.getElementById('suggestion').style.display = "none";
};

angular.module("SearchApp", []).service("searchService", SearchService).filter("andSearchFilter", ANDSearchFilter).controller("searchController", SearchController);
