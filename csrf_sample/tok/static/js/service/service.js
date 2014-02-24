var SearchService;

SearchService = function() {};

SearchService.prototype.getData = function() {
  var options;
  localStorage['opt'] = JSON.stringify([
    {
      "key": "中野",
      "id": 1,
      "name": "ドトール"
    }, {
      "key": "中野",
      "id": 2,
      "name": "サンロード"
    }, {
      "key": "中野",
      "id": 3,
      "name": "ブロードウェイ"
    }, {
      "key": "中野",
      "id": 4,
      "name": "中野駅"
    }, {
      "key": "中野",
      "id": 5,
      "name": "明治大学"
    }, {
      "key": "中野",
      "id": 6,
      "name": "帝京平成大学"
    }, {
      "key": "荻窪",
      "id": 7,
      "name": "ドトール"
    }, {
      "key": "荻窪",
      "id": 8,
      "name": "チカラメシ"
    }
  ]);
  options = JSON.parse(localStorage['opt']);
  return options;
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
