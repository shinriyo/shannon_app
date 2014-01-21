var ANDSearchFilter;

ANDSearchFilter = function(searchService) {
  return function(list, searchQuery) {
    var filteredList, query, queryWordArray;
    if (!searchQuery) {
      return;
    }
    if (searchQuery) {
      query = searchQuery.replace(/\　/g, " ");
    }
    if (query) {
      queryWordArray = query.split(" ");
      filteredList = [];
      list.forEach(function(obj) {
        var isMatch;
        isMatch = !queryWordArray.some(function(keyword) {
          return !searchService.keywordJudge(obj, keyword);
        });
        if (isMatch) {
          return filteredList.push(obj);
        }
      });
      return filteredList;
    }
    return list;
  };
};
