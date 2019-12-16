import Vue from 'vue';
import Loading from './Loading.vue';

const LoadingConstructor = Vue.extend();
const className = 's-loading-parent';
const defaultOptions = {
  visible: true,
  text: 'loading文本',
  icon: 'https://faceplus.vsuan.com/UI_daili/crush/icon.png',
};

LoadingConstructor.prototype.close = function() {
  const parent = this.$el.parentNode;
  if (parent) parent.removeChild(this.$el);
  this.$destroy();
  this.visible = false;
  if (parent) parent.classList.remove(className);
};

export default function(props = { ...defaultOptions }) {
  const parent = document.body;
  const instance = new LoadingConstructor({
    el: document.createElement('div'),
    render(h) {
      return h(Loading, { props });
    },
  });
  parent.classList.add(className);
  parent.appendChild(instance.$el);
  return instance;
}
