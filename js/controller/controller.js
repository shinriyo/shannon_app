var SearchController;

SearchController = function($scope, searchService) {
  $scope.users = searchService.getData();
  return $scope.search = "";
};
