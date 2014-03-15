ShanonLabの課題

===
How to use
===
# virtualenvで shanon の環境を作ってたら
source shanon/bin/activate

jitter coffee js --bare

===
元にしたAngularJs
===
http://yutarotanaka.com/blog/angularjs-custom-filter/

jitter
=======
cd shannon_search/tok/static/
jitter coffee js --bare


=======
無料server
=======

http://freedjangohosting.com/

---
local Strage memo
---

http://dev.screw-axis.com/doc/chrome_extensions/tips/localstorage/
http://the-zombis.sakura.ne.jp/wp/?p=1347

フォルダ構成
--

README     coffee     css        index.html js         lib
shannon_search

---
Django
---
hg clone https://bitbucket.org/blaue_fuchs/shannon_search
pip install Django==1.4.2

起動
---
python shannon_search/tok/manage.py runserver 8080

インストール
---
pip install south
pip install simplejson

DBをmodelから作成

JSONの仕組み
---
index.htmlテンプレートにて
<script type="text/javascript" src="/get_json_js"></script>

# 最初
* 直下にdjango.dbがないとき
python shannon_search/tok/manage.py schemamigration tok --initial 
python shannon_search/tok/manage.py syncdb --all
# 次回
python shannon_search/tok/manage.py migrate
