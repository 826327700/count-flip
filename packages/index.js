
import CountFlip from './count-flip.vue'

// 定义 install 方法
const install = function (Vue) {
    if (install.installed) return
    install.installed = true
    Vue.component(CountFlip.name, CountFlip)
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install
}