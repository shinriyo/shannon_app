var disableSuggestion, enableSuggestion, go;

go = function(obj) {
  return alert(obj.innerText);
};

enableSuggestion = function() {
  return document.getElementById('suggestion').style.display = "block";
};

disableSuggestion = function(obj) {
  alert(obj);
  return document.getElementById('suggestion').style.display = "none";
};

angular.module("SearchApp", []).service("searchService", SearchService).filter("andSearchFilter", ANDSearchFilter).controller("searchController", SearchController);
