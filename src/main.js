// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Vue from 'vue'
import App from './App'
import { router } from './router/index'
import Vuex from 'vuex'
Vue.use(Vuex);


import store from './store/store'
import $ from 'jquery'



import './assets/base.css'
import './assets/base.js'
import './assets/animate.css'


//MintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Spinner } from 'mint-ui';
Vue.component(Spinner.name, Spinner);
import { Picker } from 'mint-ui';
Vue.component(Picker.name, Picker);
import { Range } from 'mint-ui';
Vue.component(Range.name, Range);
import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore)
Vue.use(MintUI)



//video
import VueVideoPlayer from 'vue-video-player';
import 'video.js/dist/video-js.css'
Vue.use(VueVideoPlayer)
Vue.config.productionTip = false


//VueClipboard
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)


//vue-touch
var VueTouch = require('vue-touch');
Vue.use(VueTouch, {name: 'v-touch'});



new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
