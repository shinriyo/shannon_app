SearchService = ()->

SearchService.prototype.getData = ()->
  localStorage['opt'] = JSON.stringify([
    {
      id: 1,
      name: "ドトール",
    },
    {
      id: 2,
      name: "サンロード",
    },
    {
      id: 3,
      name: "ブロードウェイ",
    },
    {
      id: 4,
      name: "中野駅",
    },
    {
      id: 5,
      name: "明治大学",
    },
    {
      id: 6,
      name: "帝京平成大学",
    }
  ])

  options = JSON.parse(localStorage['opt']);
  return options 

SearchService.prototype.keywordJudge = (obj, keyword)->
  self = this

  if angular.isArray(obj)
    # 配列の場合
    # 格納されている要素を順番にチェックし、ひとつでも部分一致した場合trueを返す
    return obj.some((child) ->
      return self.keywordJudge(child, keyword);
    )
  else if angular.isObject(obj)
    # オブジェクトの場合
    # 子要素を順番にチェックし、ひとつでも部分一致した場合trueを返す
    properties = Object.getOwnPropertyNames(obj);
    return properties.some((property) ->
      child = obj[property];
      return self.keywordJudge(child, keyword)
    )
  else if obj != null
    # オブジェクト、配列以外で、値がある場合
    # 文字列に変換し、部分一致した場合trueを返す
    return angular.toJson(obj).search(keyword) != -1

  # nullまたはundefinedの場合
  return false
