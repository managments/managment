// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router/router'
import $ from 'jquery'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'
import store from './store/store'
//此部分引入的是我们所编写的mockjs文档
require ('./mock.js')


// 引入上拉刷新下来加载
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)


// 引入懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  error: '../static/error.jpg',//这个是请求失败后显示的图片
  loading: '../static/loading.gif',//这个是加载的loading过渡效果
  try: 2 // 这个是加载图片数量
})

// 引入swiper轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 注册
Vue.use(VueAwesomeSwiper)

//引入ue编辑器
import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.min.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'

import axios from 'axios'
Vue.prototype.$http = axios

// 全局引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

require('font-awesome-webpack')
import VueHtml5Editor from 'vue-html5-editor'

Vue.use(VueHtml5Editor, {
  // 全局组件名称，使用new VueHtml5Editor(options)时该选项无效
  // global component name
  name: "vue-html5-editor",
  // 是否显示模块名称，开启的话会在工具栏的图标后台直接显示名称
  // if set true,will append module name to toolbar after icon
  showModuleName: false,
  // 自定义各个图标的class，默认使用的是font-awesome提供的图标
  // custom icon class of built-in modules,default using font-awesome
  icons: {
      text: "fa fa-pencil",
      color: "fa fa-paint-brush",
      font: "fa fa-font",
      align: "fa fa-align-justify",
      list: "fa fa-list",
      link: "fa fa-chain",
      unlink: "fa fa-chain-broken",
      tabulation: "fa fa-table",
      image: "fa fa-file-image-o",
      hr: "fa fa-minus",
      eraser: "fa fa-eraser",
      undo: "fa-undo fa",
      "full-screen": "fa fa-arrows-alt",
      info: "fa fa-info",
  },
  // 配置图片模块
  // config image module
  image: {
      // 文件最大体积，单位字节  max file size
      sizeLimit: 512 * 1024,
      // 上传参数,默认把图片转为base64而不上传
      // upload config,default null and convert image to base64
      upload: {
          url: null,
          headers: {},
          params: {},
          fieldName: {}
      },
      // 压缩参数,默认使用localResizeIMG进行压缩,设置为null禁止压缩
      // compression config,default resize image by localResizeIMG (https://github.com/think2011/localResizeIMG)
      // set null to disable compression
      compress: {
          width: 1600,
          height: 1600,
          quality: 80
      },
      // 响应数据处理,最终返回图片链接
      // handle response data，return image url
      uploadHandler(responseText){
          //default accept json data like  {ok:false,msg:"unexpected"} or {ok:true,data:"image url"}
          var json = JSON.parse(responseText)
          if (!json.ok) {
              alert(json.msg)
          } else {
              return json.data
          }
      }
  },
  // 语言，内建的有英文（en-us）和中文（zh-cn）
  //default en-us, en-us and zh-cn are built-in
  language: "zh-cn",
  // 自定义语言
  i18n: {
      //specify your language here
      "zh-cn": {
          "align": "对齐方式",
          "image": "图片",
          "list": "列表",
          "link": "链接",
          "unlink": "去除链接",
          "table": "表格",
          "font": "文字",
          "full screen": "全屏",
          "text": "排版",
          "eraser": "格式清除",
          "info": "关于",
          "color": "颜色",
          "please enter a url": "请输入地址",
          "create link": "创建链接",
          "bold": "加粗",
          "italic": "倾斜",
          "underline": "下划线",
          "strike through": "删除线",
          "subscript": "上标",
          "superscript": "下标",
          "heading": "标题",
          "font name": "字体",
          "font size": "文字大小",
          "left justify": "左对齐",
          "center justify": "居中",
          "right justify": "右对齐",
          "ordered list": "有序列表",
          "unordered list": "无序列表",
          "fore color": "前景色",
          "background color": "背景色",
          "row count": "行数",
          "column count": "列数",
          "save": "确定",
          "upload": "上传",
          "progress": "进度",
          "unknown": "未知",
          "please wait": "请稍等",
          "error": "错误",
          "abort": "中断",
          "reset": "重置"
      }
  },
  // 隐藏不想要显示出来的模块
  // the modules you don't want
  hiddenModules: [],
  // 自定义要显示的模块，并控制顺序
  // keep only the modules you want and customize the order.
  // can be used with hiddenModules together
  visibleModules: [
      "text",
      "color",
      "font",
      "align",
      "list",
      "link",
      "unlink",
      "tabulation",
      "image",
      "hr",
      "eraser",
      "undo",
      "full-screen",
      "info",
  ],
  // 扩展模块，具体可以参考examples或查看源码
  // extended modules
  modules: {
      //omit,reference to source code of build-in modules
  }
})

Vue.config.productionTip = false
// login里的钩子函数
Vue.directive('demo', function (el, binding) {
  console.log(binding.value.color) // => "white"
  console.log(binding.value.text)  // => "hello!"
})

//render函数
Vue.component('anchored-heading', {
  render: function (createElement) {
    return createElement(
      'h' + this.level,   // tag name 标签名称
      this.$slots.default // 子组件中的阵列
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
