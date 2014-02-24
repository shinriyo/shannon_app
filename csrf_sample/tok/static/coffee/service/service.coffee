SearchService = ()->

SearchService.prototype.getData = ()->
  # sentence 
  localStorage['opt'] = JSON.stringify([
    {
      "key": "中野",
      "id": 1,
      "name": "ドトール",
    },
    {
      "key": "中野",
      "id": 2,
      "name": "サンロード",
    },
    {
      "key": "中野",
      "id": 3,
      "name": "ブロードウェイ",
    },
    {
      "key": "中野",
      "id": 4,
      "name": "中野駅",
    },
    {
      "key": "中野",
      "id": 5,
      "name": "明治大学",
    },
    {
      "key": "中野",
      "id": 6,
      "name": "帝京平成大学",
    },
    {
      "key": "荻窪",
      "id": 7,
      "name": "ドトール",
    },
    {
      "key": "荻窪",
      "id": 8,
      "name": "チカラメシ",
    },
  ])

  options = JSON.parse(localStorage['opt']);
  return options 

SearchService.prototype.keywordJudge = (obj, keyword)->
  # obj is json
  self = this
  console.log("keyword: " + keyword)

  if angular.isArray(obj)
    # 配列の場合
    # 格納されている要素を順番にチェックし、ひとつでも部分一致した場合trueを返す
    console.log("array")
    return obj.some((child) ->
      return self.keywordJudge(child, keyword);
    )
  else if angular.isObject(obj)
    # オブジェクトの場合
    # 子要素を順番にチェックし、ひとつでも部分一致した場合trueを返す
    console.log("obj")
    properties = Object.getOwnPropertyNames(obj);
    return properties.some((property) ->
      #child = obj[property];
      child = obj["key"];
      return self.keywordJudge(child, keyword)
    )
  else if obj != null
    # オブジェクト、配列以外で、値がある場合
    # 文字列に変換し、部分一致した場合trueを返す
    console.log("other")
    return angular.toJson(obj).search(keyword) != -1

  # nullまたはundefinedの場合(子に行き切った)
  return false
