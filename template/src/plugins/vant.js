import { Button, Dialog, Icon, Popup, Tab, Tabs, Toast } from 'vant';
import Vue from 'vue';

[Button, Dialog, Icon, Popup, Tab, Tabs, Toast].forEach(item => Vue.use(item));
