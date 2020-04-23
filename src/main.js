import './stylesheets/style.scss';

import Vue from 'vue'
import Jobs from './components/Jobs'

new Vue({
  el: '#app',
  render: h => h(Jobs)
})