var SearchService;

SearchService = function() {};

SearchService.prototype.getData = function() {
  return [
    {
      id: 1,
      name: "ドトール"
    }, {
      id: 2,
      name: "サンロード"
    }, {
      id: 3,
      name: "ブロードウェイ"
    }, {
      id: 4,
      name: "hoge"
    }, {
      id: 5,
      name: "bar"
    }, {
      id: 6,
      name: "fuga"
    }
  ];
};

SearchService.prototype.keywordJudge = function(obj, keyword) {
  var properties, self;
  self = this;
  if (angular.isArray(obj)) {
    return obj.some(function(child) {
      return self.keywordJudge(child, keyword);
    });
  } else if (angular.isObject(obj)) {
    properties = Object.getOwnPropertyNames(obj);
    return properties.some(function(property) {
      var child;
      child = obj[property];
      return self.keywordJudge(child, keyword);
    });
  } else if (obj !== null) {
    return angular.toJson(obj).search(keyword) !== -1;
  }
  return false;
};
