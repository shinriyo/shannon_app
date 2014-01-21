SearchController = ($scope, searchService) ->
  $scope.users = searchService.getData("hoge")
  $scope.search = ""
