parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {var d={};function k(e){for(var r,o=/\+/g,n=/([^&=]+)=?([^&]*)/g,p=function(e){return decodeURIComponent(e.replace(o," "))},a={};r=n.exec(e);)a[p(r[1])]=p(r[2]);return a}function f(e){var r=[];for(var o in e)e.hasOwnProperty(o)&&e[o]&&r.push(encodeURIComponent(o)+"="+encodeURIComponent(e[o]));return r.join("&")}d.deparam=k,d.param=f;var w=window.matchMedia("(prefers-color-scheme: dark)").matches?"github-dark":"github-light";var x="preferred-color-scheme";var g=k(location.search.substr(1)),h=g.utterances;if(h){localStorage.setItem("utterances-session",h),delete g.utterances;var i=f(g);i.length&&(i="?"+i),history.replaceState(void 0,document.title,location.pathname+i+location.hash)}var c=document.currentScript;void 0===c&&(c=document.querySelector("script[src^=\"https://utterances.huey.xyz/client.js\"]"));for(var b={},j=0;j<c.attributes.length;j++){var l=c.attributes.item(j);b[l.name.replace(/^data-/,"")]=l.value}b.theme===x&&(b.theme=w);var m=document.querySelector("link[rel='canonical']");b.url=m?m.href:location.origin+location.pathname+location.search,b.origin=location.origin,b.pathname=location.pathname.length<2?"index":location.pathname.substr(1).replace(/\.\w+$/,""),b.title=document.title;var q=document.querySelector("meta[name='description']");b.description=q?q.content:"";var s=encodeURIComponent(b.description).length;s>1e3&&(b.description=b.description.substr(0,Math.floor(1e3*b.description.length/s)));var u=document.querySelector("meta[property='og:title'],meta[name='og:title']");b["og:title"]=u?u.content:"",b.session=h||localStorage.getItem("utterances-session")||"",document.head.insertAdjacentHTML("afterbegin","<style>\n    .utterances {\n      position: relative;\n      box-sizing: border-box;\n      width: 100%;\n      max-width: 760px;\n      margin-left: auto;\n      margin-right: auto;\n    }\n    .utterances-frame {\n      color-scheme: light;\n      position: absolute;\n      left: 0;\n      right: 0;\n      width: 1px;\n      min-width: 100%;\n      max-width: 100%;\n      height: 100%;\n      border: 0;\n    }\n  </style>");var v=c.src.match(/^https:\/\/utterances\.huey\.xyz|https:\/\/huey\.xyz|http:\/\/localhost:\d+/)[0],y=v+"/utterances.html";c.insertAdjacentHTML("afterend","<div class=\"utterances\">\n    <iframe class=\"utterances-frame\" title=\"Comments\" scrolling=\"no\" src=\""+y+"?"+f(b)+"\" loading=\"lazy\"></iframe>\n  </div>");var z=c.nextElementSibling;c.parentElement.removeChild(c),addEventListener("message",function(t){if(t.origin===v){var r=t.data;r&&"resize"===r.type&&r.height&&(z.style.height=r.height+"px")}});d.__esModule=true;return{"D53L":{},"ieWq":d};});