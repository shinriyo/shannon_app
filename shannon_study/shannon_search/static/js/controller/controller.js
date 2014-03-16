var SearchController;

SearchController = function($scope, searchService) {
  return $scope.users = searchService.getData();
};
