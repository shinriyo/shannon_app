ShanonLabの課題
===

How to use
---

virtualenvで shanon の環境を作ってたら
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


無料server一覧
---

http://freedjangohosting.com/

local Strage memolize
---

http://dev.screw-axis.com/doc/chrome_extensions/tips/localstorage/
http://the-zombis.sakura.ne.jp/wp/?p=1347

フォルダ構成
--

README     coffee     css        index.html js         lib
shannon_search


Django
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

