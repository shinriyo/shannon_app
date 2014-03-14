var disableSuggestion, enableSuggestion, go;

go = function(obj) {
  return $("#inputbox").value = obj.innerText;
};

enableSuggestion = function() {
  return document.getElementById('suggestion').style.display = "block";
};

disableSuggestion = function() {};

angular.module("SearchApp", []).service("searchService", SearchService).filter("andSearchFilter", ANDSearchFilter).controller("searchController", SearchController).config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{$');
  return $interpolateProvider.endSymbol('$}');
});
