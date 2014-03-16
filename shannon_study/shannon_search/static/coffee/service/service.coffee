SearchService = ()->

SearchService.prototype.getData = ()->
  return db_json 

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
