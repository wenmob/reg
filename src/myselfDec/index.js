import Vue from 'vue'
// 只能输入数字
export const numOnly = Vue.directive('numberOnly', {
  bind: (el) => {
    el.handler = () => {
      el.value = el.value.replace(/\D+/, '')
    }
    el.addEventListener('input', el.handler)
  },
  unbind: (el) => {
    el.removeEventListener('input', el.handler)
  }
})

// 默认聚焦
export const focus = Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: (el) => {
    // 聚焦元素
    el.focus()
  }
})

// 只能输入金额
export const money = Vue.directive('moneyOnly', {
  bind: (el) => {
    el.handler = () => {
      let regStrs = [
        ['^0(\\d+)$', '$1'], // 禁止录入整数部分两位以上，但首位为0
        ['[^\\d\\.]+$', ''], // 禁止录入任何非数字和点
        ['\\.(\\d?)\\.+', '.$1'], // 禁止录入两个以上的点
        ['^(\\d+\\.\\d{2}).+', '$1'] // 禁止录入小数点后两位以上
      ]
      for(let i = 0; i < regStrs.length; i++) {
        let reg = new RegExp(regStrs[i][0])
        el.value = el.value.replace(reg, regStrs[i][1]);
      }
    }
    el.addEventListener('input', el.handler)
  },
  unbind: (el) => {
    el.removeEventListener('input', el.handler)
  }
})

// 只能输入手机号
export const phoneOnly = Vue.directive('phoneOnly', {
  bind: (el) => {
    el.handler = () => {
      el.value = el.value.replace(/\D/g, '').substring(0, 11);
      el.setAttribute('meta-value', el.value) //这才是真实的val
      let valueLen = el.value.length
      if (valueLen > 3 && valueLen < 8) {
        el.value = `${el.value.substr(0, 3)} ${el.value.substr(3)}`
      } else if (valueLen >= 8) {
        el.value = `${el.value.substr(0, 3)} ${el.value.substr(3, 4)} ${el.value.substr(7)}`
      }
    }
    el.addEventListener('input', el.handler)
  },
  unbind: (el) => {
    el.removeEventListener('input', el.handler)
  }
})

// 只能输入银行卡
export const bankOnly = Vue.directive('bankOnly', {
  bind: (el) => {
    el.handler = () => {
      el.value = el.value.replace(/\D/g, '')
      el.setAttribute('meta-value', el.value) //这才是真实的val
      el.value = el.value.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, "$1 ")
    }
    el.addEventListener('input', el.handler)
  },
  unbind: (el) => {
    el.removeEventListener('input', el.handler)
  }
})

// 只能输入正负整数
export const pnInt = Vue.directive('pnInt', {
  bind: (el) => {
    el.handler = () => {
      el.value = el.value.replace(/[^(\-?)\d+]/ig, '')
      if (el.value.length === 1) {
        el.value = el.value.replace(/[^(\-?)\d+]/ig, '')
      } else {
        el.value = el.value.substring(0, 1) + el.value.substring(1, el.value.length).replace(/[^\d+]/ig, '')
      }
    }
    el.addEventListener('input', el.handler)
  },
  unbind: (el) => {
    el.removeEventListener('input', el.handler)
  }
})
