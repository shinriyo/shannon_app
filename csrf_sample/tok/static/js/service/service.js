var SearchService;

SearchService = function() {};

SearchService.prototype.getData = function() {
  return db_json;
};

SearchService.prototype.keywordJudge = function(obj, keyword) {
  var properties, self;
  self = this;
  console.log("keyword: " + keyword);
  if (angular.isArray(obj)) {
    console.log("array");
    return obj.some(function(child) {
      return self.keywordJudge(child, keyword);
    });
  } else if (angular.isObject(obj)) {
    console.log("obj");
    properties = Object.getOwnPropertyNames(obj);
    return properties.some(function(property) {
      var child;
      child = obj["key"];
      return self.keywordJudge(child, keyword);
    });
  } else if (obj !== null) {
    console.log("other");
    return angular.toJson(obj).search(keyword) !== -1;
  }
  return false;
};
