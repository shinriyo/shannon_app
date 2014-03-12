var go = function (obj) {
  //$("#inputbox").value = obj.innerText;
  document.getElementById('inputbox').value = obj.innerText;
}

angular.module("SearchApp", []).service("searchService", SearchService).filter("andSearchFilter", ANDSearchFilter).controller("searchController", SearchController).config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{$');
  return $interpolateProvider.endSymbol('$}');
});
