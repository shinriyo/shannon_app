#!/usr/env/python
# -*- encoding: utf-8 -*-

import sys
import urllib
import json

def main():
    print parse_text(u"今日はいい天気ですね。")
    return 0


def parse_text(text):
    """
    与えられたテキストから確率を推定します.
    対象のサーバがエラーを返した場合には
    ValueError例外を返します.

    引数:
        text: 対象のテキスト
              (与える文字列の型はunicode型である必要があります)
    返り値: 確率となる値
    """
    #main_url = "http://153.121.39.214:8000/simple_bayes/api/get_ttsurl?"
    main_url = "http://153.121.39.214:8000/simple_bayes/api/get_ttsurl"
    api_key = "0bd29e1d042a693bf86e5069bfb7b42b"

    query = {
        'api_key': api_key,
        'text': text.encode("utf-8")}
    #parse_url = main_url + urllib.urlencode(query)
    parse_url = urllib.urlencode(query)
    #opener = urllib.urlopen(parse_url)
    opener = urllib.urlopen(main_url, parse_url)
    print 'opener', opener.read()
    result = json.loads(opener.read())
    if result["status"] == "success":
        return float(result["url"])
    else:
        raise ValueError("status is error.")


if __name__ == "__main__":
    sys.exit(main())
