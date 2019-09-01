/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
* 获取localStorage
*/
export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
* 删除localStorage
*/
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}

/**
 * 产生随机整数，包含下限值，但不包括上限值
 * @param {Number} lower 下限
 * @param {Number} upper 上限
 * @return {Number} 返回在下限到上限之间的一个随机整数
 */
export const randomNum = (lower, upper) => {
  return Math.floor(Math.random() * (upper - lower)) + lower
}

/**
* 生成随机字符串(可指定长度)
* @param len
* @returns {string}
*/
export const randomString = (len) => {
  len = len || 8
  const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  /** **默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  const maxPos = $chars.length
  let pwd = ''
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}

/**
* randomWord 产生任意长度随机字母数字组合
* @param randomFlag 是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
* @param min
* @param max
* @returns {string}
* 调用方法:
* 生成 3 - 32 位随即字符串
* randomWord(true,3,32);    例如：olyOXUF5oDsuMmXl3Mi48
* 生成 32 位随机字符串
* randomWord(false,32);     例如：fjpnWj29Bb8boiXbLeDF0nxkR4aYcLRl
*/
export const randomWord = (randomFlag, min, max) => {
  let str = ''
  let range = min
  const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  // 随机产生
  if (randomFlag) {
    range = Math.round(Math.random() * (max - min)) + min
  }
  for (let i = 0; i < range; i++) {
    const pos = Math.round(Math.random() * (arr.length - 1))
    str += arr[pos]
  }
  return str
}

/**
* 获取url后参数
*/
export const GetRequest = () => {
  const url = location.search // 获取url中"?"符后的字串
  const theRequest = {}
  if (url.indexOf('?') !== -1) {
    const str = url.substr(1)
    const strs = str.split('&')
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = (strs[i].split('=')[1])
    }
  }
  return theRequest
}

/**
* 生成随机颜色值
*/
export const getRandomColor = () => {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length === 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

/**
* 验证身份证号
* @param el 号码输入input
* @returns {boolean}
*/
export const checkCardNo = (el) => {
  const txtval = el.value
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  return reg.test(txtval)
}

/**
* 获取字符串字节长度
* @param {String}
* @returns {Boolean}
*/
export const checkLength = (v) => {
  let realLength = 0
  const len = v.length
  for (let i = 0; i < len; i++) {
    const charCode = v.charCodeAt(i)
    if (charCode >= 0 && charCode <= 128) realLength += 1
    else realLength += 2
  }
  return realLength
}

/**
* 判断微信浏览器
* @returns {Boolean}
*/
export const isWeiXin = () => {
  const ua = window.navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) === 'micromessenger') {
    return true
  } else {
    return false
  }
}

/**
* 浏览器判断
* 用法示例——多套页面判断是否显示移动端：
*   let ua = parseUA();
*   if (!ua.mobile) {
*       location.href = './pc.html';
*   }
*/
export const parseUA = () => {
  const u = navigator.userAgent
  const u2 = navigator.userAgent.toLowerCase()
  return { // 移动终端浏览器版本信息
    trident: u.indexOf('Trident') > -1,
    // IE内核
    presto: u.indexOf('Presto') > -1,
    // opera内核
    webKit: u.indexOf('AppleWebKit') > -1,
    // 苹果、谷歌内核
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1,
    // 火狐内核
    mobile: !!u.match(/AppleWebKit.*Mobile.*/),
    // 是否为移动终端
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    // ios终端
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
    // android终端或uc浏览器
    iPhone: u.indexOf('iPhone') > -1,
    // 是否为iPhone或者QQHD浏览器
    iPad: u.indexOf('iPad') > -1,
    // 是否iPad
    webApp: u.indexOf('Safari') === -1,
    // 是否web应该程序，没有头部与底部
    iosv: u.substr(u.indexOf('iPhone OS') + 9, 3),
    weixin: u2.match(/MicroMessenger/i) === 'micromessenger',
    ali: u.indexOf('AliApp') > -1
  }
}

/**
* 生成UUID
* @returns {string}
*/
export const generateUUID = () => {
  let d = new Date().getTime()
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16)
  })
  return uuid
}

/**
* 删除左右两端的空格
* @param str
* @returns {string | * | void}
*/
export const trim = (str) => {
  return str.replace(/(^\s*)|(\s*$)/g, '')
}

/**
* 删除左边的空格
* @param str
* @returns {string | * | void}
*/
export const ltrim = (str) => {
  return str.replace(/(^\s*)/g, '')
}

/**
* 删除右边的空格
* @param str
* @returns {string | * | void}
*/
export const rtrim = (str) => {
  return str.replace(/(\s*$)/g, '')
}

/**
* 对象数组转二维数组
* @param objArr
*/
export const obj2Arr = (objArr) => {
  objArr.length > 0 && objArr.map(item => {
    return Object.values(item)
  })
}

/**
* 找出对象数组中某属性的最大值
* @param array
* @param item
* @returns val
*/
export const maxItemInObjArr = (array, item) => {
  const max = Math.max.apply(Math, array.map(function(obj) {
    return obj[item]
  }))
  return max
}

/**
* 判断当前网络环境
*/
export const isWifi = () => {
  try {
    let wifi = true
    const ua = window.navigator.userAgent
    const con = window.navigator.connection
    // 如果是微信
    if (/MicroMessenger/.test(ua)) {
      if (ua.indexOf('WIFI') >= 0) {
        return true
      } else {
        wifi = false
      }
      // 如果支持navigator.connection
    } else if (con) {
      const network = con.type
      if (network !== 'wifi' && network !== '2' && network !== 'unknown') {
        wifi = false
      }
    }
    return wifi
  } catch (e) {
    return false
  }
}

/**
* 首字母大写
* @param str
* @returns {string}
*/
export const fistLetterUpper = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
* 过滤非法字符串
*/
export const illegalFilter = (str) => {
  const regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im
  const regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im

  if (regEn.test(str) || regCn.test(str)) return false
  return true
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ') +
      '"}'
  )
}

/**
 * 格式化小数位
 * @param val 传入的值
 * @param pos 保留的小数位
 * @returns {*}
 */
export function formatFloat(val, pos = 2) {
  let f = parseFloat(val)
  if (isNaN(f)) {
    return false
  }
  f = Math.round(val * Math.pow(10, pos)) / Math.pow(10, pos) // pow 幂
  let s = f.toString()
  let rs = s.indexOf('.')
  if (rs < 0) {
    rs = s.length
    s += '.'
  }
  while (s.length <= rs + pos) {
    s += '0'
  }
  return s
}

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function getQueryObject(url) {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

/**
 * @param {string} input value
 * @returns {number} output value
 */
export function byteLength(str) {
  // returns the byte length of an utf8 string
  let s = str.length
  for (var i = str.length - 1; i >= 0; i--) {
    const code = str.charCodeAt(i)
    if (code > 0x7f && code <= 0x7ff) s++
    else if (code > 0x7ff && code <= 0xffff) s += 2
    if (code >= 0xDC00 && code <= 0xDFFF) i--
  }
  return s
}

/**
 * @param {Array} actual
 * @returns {Array}
 */
export function cleanArray(actual) {
  const newArray = []
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i])
    }
  }
  return newArray
}

/**
 * @param {Object} json
 * @returns {Array}
 */
export function param(json) {
  if (!json) return ''
  return cleanArray(
    Object.keys(json).map(key => {
      if (json[key] === undefined) return ''
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
    })
  ).join('&')
}

/**
 * @param {string} val
 * @returns {string}
 */
export function html2Text(val) {
  const div = document.createElement('div')
  div.innerHTML = val
  return div.textContent || div.innerText
}

/**
 * Merges two objects, giving the last one precedence
 * @param {Object} target
 * @param {(Object|Array)} source
 * @returns {Object}
 */
export function objectMerge(target, source) {
  if (typeof target !== 'object') {
    target = {}
  }
  if (Array.isArray(source)) {
    return source.slice()
  }
  Object.keys(source).forEach(property => {
    const sourceProperty = source[property]
    if (typeof sourceProperty === 'object') {
      target[property] = objectMerge(target[property], sourceProperty)
    } else {
      target[property] = sourceProperty
    }
  })
  return target
}

/**
 * @param {HTMLElement} element
 * @param {string} className
 */
export function toggleClass(element, className) {
  if (!element || !className) {
    return
  }
  let classString = element.className
  const nameIndex = classString.indexOf(className)
  if (nameIndex === -1) {
    classString += '' + className
  } else {
    classString =
      classString.substr(0, nameIndex) +
      classString.substr(nameIndex + className.length)
  }
  element.className = classString
}

/**
 * @param {string} type
 * @returns {Date}
 */
export function getTime(type) {
  if (type === 'start') {
    return new Date().getTime() - 3600 * 1000 * 24 * 90
  } else {
    return new Date(new Date().toDateString())
  }
}

/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function(...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}
