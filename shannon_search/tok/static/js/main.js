var disableSuggestion, enableSuggestion, go;

go = function(obj) {
  return $("#inputbox")[0].value = obj.innerText;
};

enableSuggestion = function() {
  return $("#suggestion")[0].style.display = "block";
};

disableSuggestion = function() {
  return $("#suggestion")[0].style.display = "none";
};

angular.module("SearchApp", []).service("searchService", SearchService).filter("andSearchFilter", ANDSearchFilter).controller("searchController", SearchController).config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{$');
  return $interpolateProvider.endSymbol('$}');
});
