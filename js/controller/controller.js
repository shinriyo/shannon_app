var SearchController;

SearchController = function($scope, searchService) {
  $scope.users = searchService.getData("hoge");
  return $scope.search = "";
};
