!function(){var t=function(){return function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}({0:function(t,e,i){var n=i(133),o=i(134),p=i(135);$app_define$("@app-component/index",[],function(t,e,i){p(i,e,t),e.__esModule&&e.default&&(i.exports=e.default),i.exports.template=n,i.exports.style=o}),$app_bootstrap$("@app-component/index",{packagerVersion:"0.0.5"})},133:function(t,e){t.exports={type:"div",attr:{},classList:["container"],children:[{type:"div",attr:{},classList:["item-title"],children:[{type:"text",attr:{value:"webview"}}]},{type:"div",attr:{},classList:["item-content"],children:[{type:"input",attr:{type:"button",name:"webview",value:"打开DCloud官网"},classList:["item-group-button"],events:{click:"openWebview"}}]}]}},134:function(t,e){t.exports={text:{color:"#888888"},".container":{flexDirection:"column",flex:1},".item-title":{marginTop:"90px",marginRight:"0px",marginBottom:"90px",marginLeft:"0px",width:"750px",justifyContent:"center"},".item-title text":{paddingTop:"10px",paddingRight:"30px",paddingBottom:"10px",paddingLeft:"30px",borderBottomColor:"#D8D8D8",borderBottomWidth:"1px",textAlign:"center",color:"#BEBEBE",fontSize:"32px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"item-title"},{t:"d"},{t:"t",n:"text"}]}},".item-content":{marginTop:"0px",marginRight:"40px",marginBottom:"0px",marginLeft:"40px",flexDirection:"column"},".item-group":{flexDirection:"column",paddingTop:"10px",paddingRight:"20px",paddingBottom:"10px",paddingLeft:"20px",marginTop:"30px",marginRight:"0px",marginBottom:"30px",marginLeft:"0px",backgroundColor:"#ffffff"},".item-group-button":{height:"80px",backgroundColor:"#dd524d",marginTop:"20px",marginRight:"0px",marginBottom:"20px",marginLeft:"0px",color:"#ffffff",borderRadius:"8px"},".item-group-text":{paddingTop:"20px",paddingRight:"20px",paddingBottom:"20px",paddingLeft:"20px",color:"#888888"}}},135:function(t,e){t.exports=function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var o=i("@app-module/system.webview"),p=n(o);t.exports={onInit:function(t){this.$page.setTitleBar({text:"Webview"})},openWebview:function(){p.default.loadUrl({url:"http://www.dcloud.io/streamapp.html"})}}}}})};return"undefined"==typeof window?t():void(window.createPageHandler=t)}();