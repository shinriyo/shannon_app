SearchController = ($scope, searchService) ->
  $scope.users = searchService.getData()
  $scope.search = ""