ShanonLabの課題
===

How to use
---

もし、virtualenvで"shanon"の環境を作ってた時

    source shanon/bin/activate

元にしたAngularJs
---

http://yutarotanaka.com/blog/angularjs-custom-filter/

検索システム jitter (CoffeeScriptをJSに自動変換)
---

    cd shannon_study/shannon_search/static/
    jitter coffee js --bare

フォルダ構成
--

* README.md 説明
* coffee CoffeeScriptが格納(ローカルでの練習用index.html用)
* css cssが格納(ローカルでの練習用index.html用)
* index.html ローカルでの練習用index.html
* js JSが格納(ローカルでの練習用index.html用)
* lib JSのライブラリが格納(ローカルでの練習用index.html用)
* shannon_study本体のフォルダ
  - shannnon_search 検索システム
  - ccchart グラフ 
  ※参考にしたサイトの名残だったtokとdecは意味がわからない名前なので名前を変更しました

Django (1.3でも動作確認済み)
---

    hg clone https://bitbucket.org/blaue_fuchs/shannon_search
    pip install Django==1.4.2

Djangoの起動(検索システム)
---
    python shannon_study/shannon_search/manage.py runserver 8080

Djangoの起動(グラフシステム)
---
    python shannon_study/ccchart/manage.py runserver 8080

JSONの仕組み
---
index.htmlテンプレートにて
<script type="text/javascript" src="/get_json_js"></script>

まずインストールしてくこと (pipで必要なもののインストール)
---
    pip install south
    pip install simplejson

southでのDB初期化 (※shannon_searchディレクトリ直下にdjango.dbがないときはsqlite3のDBが作成されてない場合)
---

    python shannon_study/shannon_search/manage.py schemamigration shannon_search --initial
    python shannon_study/shannon_search/manage.py syncdb --all

次回DBを更新時のsouthの処理
---

    python shannon_study/shannon_search/manage.py migrate

検索のサンプルInsert
---
shannon_search_searchsampleに入っている

    insert into shannon_search_searchsample (key, name) values('中野', '中野郵便局');
    insert into shannon_search_searchsample (key, name) values('荻窪', 'LUMINE荻窪店');

その他 無料サーバ一覧URL
---

http://freedjangohosting.com/


