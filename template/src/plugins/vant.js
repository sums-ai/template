import { Popup, Toast } from 'vant';
import Vue from 'vue';

[Popup, Toast].forEach(item => Vue.use(item));
