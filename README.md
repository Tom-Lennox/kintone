# kintone
kintoneに関するあれこれ。

# Vue.jsの導入
# kintone知識0から作成できる手順
（アプリ名、メニュー名等はこれから変わる場合があるので、行うべきことを中心に記載します。）

・サイボウズのサイトから開発者で登録を行う。

・任意のアプリで作成する。
ポータル＞アプリ＞＋
（この場合は「予算・実績管理」をインストール）

・アプリ、新規の一覧を作成 ⇒ 「一覧ID」をメモしておく。※１

・VueのCDNを追加する。
アプリ＞設定　から「Javascript / CSSでカスタマイズ」を選択
 ⇒ [URL指定で追加]：https://js.cybozu.com/vuejs/v2.6.11/vue.min.js
 ⇒ [アップロードして追加]：このrepoの「sample.js」を追加。
 ※１のIDを「sample.js」に転記。

【参考】
https://developer.cybozu.io/hc/ja/articles/200730174-JavaScript%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%9Fkintone%E3%81%AE%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%9E%E3%82%A4%E3%82%BA
