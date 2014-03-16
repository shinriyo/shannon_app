ShanonLabの課題
===

How to use
---

もし、virtualenvで"shanon"の環境を作ってた時

    source shanon/bin/activate

元にしたAngularJs
---

http://yutarotanaka.com/blog/angularjs-custom-filter/

jitter (CoffeeScriptをJSに自動変換)
---

    cd shannon_search/tok/static/
    jitter coffee js --bare

CoffeeScriptを使用しているので変換するコマンド
---
    cd shannon_search/tok/static
    jitter coffee js --bare


無料server一覧URL
---

http://freedjangohosting.com/

フォルダ構成
--

* README.md 説明
* coffee CoffeeScriptが格納(ローカルでの練習用index.html用)
* css cssが格納(ローカルでの練習用index.html用)
* index.html ローカルでの練習用index.html
* js JSが格納(ローカルでの練習用index.html用)
* lib JSのライブラリが格納(ローカルでの練習用index.html用)
* shannon_search 本体のフォルダ(tokとdekがあるが、tokしか使用していません)

Django (1.3でも動作確認済み)
---

    hg clone https://bitbucket.org/blaue_fuchs/shannon_search
    pip install Django==1.4.2

起動
---
    python shannon_search/tok/manage.py runserver 8080

JSONの仕組み
---
index.htmlテンプレートにて
<script type="text/javascript" src="/get_json_js"></script>

まずインストールしてくこと (pipで必要なもののインストール)
---
    pip install south
    pip install simplejson

southでのDB初期化 (直下にdjango.dbがないときはsqlite3のDBが作成されてない)
---

    python shannon_search/tok/manage.py schemamigration tok --initial 
    python shannon_search/tok/manage.py syncdb --all

# 次回

    python shannon_search/tok/manage.py migrate

