(function(e){function t(t){for(var n,c,u=t[0],s=t[1],i=t[2],l=0,h=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&h.push(a[c][0]),a[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(h.length)h.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,c=1;c<r.length;c++){var s=r[c];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},o=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2925bc26":"0929ba9e","chunk-2d0c87c8":"0b09c2d3"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var i=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,r[1](i)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0b61":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a=Object(n["f"])("div",{id:"nav"},null,-1);function o(e,t){var r=Object(n["w"])("router-view");return Object(n["r"])(),Object(n["e"])(n["a"],null,[a,Object(n["h"])(r)],64)}var c=r("6b0d"),u=r.n(c);const s={},i=u()(s,[["render",o]]);var l=i,p=(r("d3b7"),r("3ca3"),r("ddb0"),r("6c02")),h=[{path:"/",name:"Home",component:function(){return r.e("chunk-2925bc26").then(r.bind(null,"bb51"))}},{path:"/whackamole",name:"Whackamole",component:function(){return r.e("chunk-2d0c87c8").then(r.bind(null,"54a4"))}}],f=Object(p["a"])({history:Object(p["b"])(),routes:h}),d=f,m=r("1da1"),y=(r("96cf"),r("5502")),b=r("0e44"),v=r("5530"),g=(r("fb6a"),r("99af"),r("b0c0"),r("d81d"),r("a4d3"),r("e01a"),r("ac1f"),r("5319"),r("bc3a")),w=r.n(g),R=r("2ef0"),x=r.n(R),j="be2853525b64df346a912d8d1642e889",O=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},F=function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e,t){navigator.geolocation.getCurrentPosition(e,t)}));case 3:return t=e.sent,e.abrupt("return",{lon:t.coords.longitude,lat:t.coords.latitude});case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("https://api.openweathermap.org/data/2.5/forecast/daily?cnt=1&q=".concat(t,"&appid=").concat(j));case 3:return r=e.sent,e.abrupt("return",{prettyCity:r.data.city.name,coordinates:r.data.city.coord});case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://api.openweathermap.org/data/2.5/forecast/daily?lat=".concat(t.lat,"&lon=").concat(t.lon,"&cnt=1&appid=").concat(j));case 2:return r=e.sent,e.abrupt("return",r.data.city.name);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(r,"&lon=").concat(t,"&exclude=minutely,current&units=imperial&appid=").concat(j));case 3:return n=e.sent,e.t0=v["a"],e.next=7,T({lon:t,lat:r});case 7:return e.t1=e.sent,e.t2={city:e.t1},e.t3=n.data,e.abrupt("return",(0,e.t0)(e.t2,e.t3));case 13:e.prev=13,e.t4=e["catch"](0),console.error(e.t4);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,r){return e.apply(this,arguments)}}(),S=function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.daily.slice(0,7).map((function(e){var t=new Date(1e3*e.dt),r=t.toLocaleString("en-US",{weekday:"short"}),n=t.toLocaleString("en-US",{weekday:"long"}),a=O(e.weather[0].description);return{id:x.a.uniqueId("dailyForecasts-"),weekDayNameLong:n,humidity:e.humidity,windSpeed:Math.round(e.wind_speed),description:a,weekDayName:r,minTemp:Math.round(e.temp.min),maxTemp:Math.round(e.temp.max)}})),n=t.hourly.slice(0,6).map((function(e){var t=new Date(1e3*e.dt),r=t.toLocaleString("en-US",{hour:"numeric",hour12:!0}),n=r.replace(/\s+/g,"").toLowerCase();return{id:x.a.uniqueId("hourlyForecasts-"),hourTime:n,temp:Math.round(e.temp)}})),a=Object(v["a"])(Object(v["a"])({},r[0]),{},{temp:n[0].temp}),e.abrupt("return",{city:t.city,hourlyForecasts:n,dailyForecasts:r,todaysWeather:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F();case 3:return t=e.sent,e.next=6,L(t.lon,t.lat);case 6:return r=e.sent,e.abrupt("return",S(r));case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(t);case 3:return r=e.sent,n=r.coordinates,a=r.prettyCity,e.next=8,L(n.lon,n.lat);case 8:return o=e.sent,e.abrupt("return",S(Object(v["a"])({city:a},o)));case 12:e.prev=12,e.t0=e["catch"](0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),P=function(e){var t=Math.round((new Date).getTime()/1e3),r=600,n=t-e;return n<r},D=Object(y["a"])({state:{city:null,dailyForecasts:null,hourlyForecasts:null,lastRefreshTime:null,isLastRefreshFromSearch:null,todaysWeather:null},mutations:{setCity:function(e,t){e.city=t},setIsLastRefreshFromSearch:function(e,t){e.isLastRefreshFromSearch=t},setLastRefreshTime:function(e){e.lastRefreshTime=Math.round((new Date).getTime()/1e3)},setTodaysWeather:function(e,t){e.todaysWeather=t},setDailyForecasts:function(e,t){e.dailyForecasts=t},setHourlyForecasts:function(e,t){e.hourlyForecasts=t}},getters:{getCity:function(e){return e.city},getTodaysWeather:function(e){return e.todaysWeather},getDailyForecasts:function(e){return e.dailyForecasts},getHourlyForecasts:function(e){return e.hourlyForecasts},getLastRefreshTime:function(e){return e.lastRefreshTime},getIsLastRefreshFromSearch:function(e){return e.isLastRefreshFromSearch}},actions:{refreshWeather:function(e){return Object(m["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.commit,n=e.getters,!n.getLastRefreshTime||n.getIsLastRefreshFromSearch){t.next=5;break}if(!P(n.getLastRefreshTime)){t.next=5;break}return a=!0,t.abrupt("return",a);case 5:return t.prev=5,t.next=8,W();case 8:o=t.sent,r("setCity",o.city),r("setTodaysWeather",o.todaysWeather),r("setDailyForecasts",o.dailyForecasts),r("setHourlyForecasts",o.hourlyForecasts),r("setLastRefreshTime"),r("setIsLastRefreshFromSearch",!1),a=!0,t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](5),a=!1;case 21:return t.abrupt("return",a);case 22:case"end":return t.stop()}}),t,null,[[5,18]])})))()},searchForCityWeather:function(e,t){return Object(m["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=e.commit,t){r.next=4;break}return a=!1,r.abrupt("return",a);case 4:return r.prev=4,r.next=7,C(t);case 7:o=r.sent,n("setCity",o.city),n("setTodaysWeather",o.todaysWeather),n("setDailyForecasts",o.dailyForecasts),n("setHourlyForecasts",o.hourlyForecasts),n("setLastRefreshTime"),n("setIsLastRefreshFromSearch",!0),a=!0,r.next=20;break;case 17:r.prev=17,r.t0=r["catch"](4),a=!1;case 20:return r.abrupt("return",a);case 21:case"end":return r.stop()}}),r,null,[[4,17]])})))()}},plugins:[Object(b["a"])()]});r("5363");r("0b61"),Object(n["c"])(l).use(D).use(d).mount("#app")}});
//# sourceMappingURL=app.e8cf7fc2.js.map