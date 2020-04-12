(function($) {
  'use strict';
  // Vueのインスタンスを作成
  var vm = new Vue({
    data: {
      customers: []
    },
  });

  kintone.events.on('app.record.index.show', function(event) {
    if (event.viewId !== 【メモしたIDを指定】) return event; // 作成したカスタマイズビューのIDを指定
    var customers = [
      {companyName: '株式会社A', tel: '0123-45-6789'},
      {companyName: '株式会社B', tel: '1123-45-6789'},
      {companyName: '株式会社C', tel: '2123-45-6789'},
      {companyName: '株式会社D', tel: '3123-45-6789'}
    ];
    // 作成されたVueインスタンスをカスタマイズビューで用意した #app にマウント
    vm.$mount('#app');

    // データをセット
    Vue.set(vm, 'customers', customers);
    return event;
  });
})();
