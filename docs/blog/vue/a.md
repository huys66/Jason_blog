# Vue 图片懒加载原理和实现

## 原理分析

- 先将 img 标签的 src 链接设为同一张图片(默认图片)，当 js 监听到该图片进入可视窗口时，再将实际地址应用。

## 实现方法

- 判断元素是否在可视范围

```bash
  /**
 * 判断元素是否在可视范围
   */
  function isVisible(ele){
    let windowHeight = window.innerHeight
    let position = ele.getBoundingClientRect()
    // 当元素的top偏移量小于页面大小并且大于高度的负数
    if(position.top<windowHeight && position.top>-position.height){
      return true
    }
    return false
  }
```

- 对图片实现懒加载

```javascript
/**
 * 对图片进行懒加载
 */
function lazyLoad(img, src) {
  if (img && src && isVisible(img)) {
    // 元素存在，元素未被加载，元素可见
    setTimeout(function () {
      img.setAttribute('src', src)
    }, 1000) // 模拟网络请求
  }
}
```

- 添加滚动监听

```javascript
// 窗口滚动
window.addEventListener('scroll', function () {
  lazyLoad(img, src)
})
```

## Vue 插件实现代码

```javascript
/**
 * 判断元素可见
 */
function isVisible(el) {
  let windowHeight = window.innerHeight
  let position = el.getBoundingClientRect()
  // 当元素的top偏移量小于页面大小并且大于高度的负数
  if (position.top < windowHeight && position.top > -position.height) {
    return true
  }
  return false
}

/**
 * 对图片进行懒加载
 */
function lazyLoad(img, src) {
  if (img && src && isVisible(img)) {
    // 元素存在，元素未被加载，元素可见
    setTimeout(function () {
      img.setAttribute('src', src)
    }, 1000) // 模拟网络请求慢的情况
  }
}

export default {
  install(Vue, options) {
    Vue.directive('lazy', {
      bind: function (el, binding, vnode) {
        el.setAttribute('src', options.loading)
        window.addEventListener('scroll', function () {
          lazyLoad(el, binding.value)
        })
      },
      inserted: function (el, binding, vnode) {
        lazyLoad(el)
      },
    })
  },
}
```

原文链接：[https://www.jianshu.com/p/57e1055cc3fb](https://www.jianshu.com/p/57e1055cc3fb)
