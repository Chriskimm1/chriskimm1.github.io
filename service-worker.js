"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["./index.html","934e967a4d44e0ea84030963fa0c061a"],["./static/css/main.fcce41b8.css","f7e1ec1e3b3ff716535e1ff724dc9b9e"],["./static/js/main.9ba25729.js","4b6b6c52d2d28960e93a238bf9afc08e"],["./static/media/angular.db12f97b.svg","db12f97bda8cd0682f2c1daa1396daa3"],["./static/media/aws.0292ec4e.svg","0292ec4ebac41c7e4107e34474814eaa"],["./static/media/backbone.39eac6f4.svg","39eac6f48bf88a110cf4a56186a48c00"],["./static/media/css3.a70a7e3e.svg","a70a7e3e545f3ddc5707d4c4da8cfa17"],["./static/media/express.c3af8b67.svg","c3af8b67d896ace3528c7f109750e875"],["./static/media/grunt.bf05268b.svg","bf05268b34fdd6b846e676d220ba058e"],["./static/media/jasmine.87220f71.svg","87220f713630c403715767b24fd37dde"],["./static/media/java.66517ded.svg","66517ded2b3a6bef72a9c7fc9a1fc931"],["./static/media/javascript.de79c8f1.svg","de79c8f14c2b0d692ae215d7e6eccd54"],["./static/media/mocha.14785336.svg","1478533601c8d628375a8cbb63c3d84a"],["./static/media/mongo.52783a2f.svg","52783a2f8043e237279093badadc9cf1"],["./static/media/node.ccb43d34.svg","ccb43d3400fb05951c89ad3ba6acd9d5"],["./static/media/profile_pic.4bfeeefb.jpg","4bfeeefb0128021d5dd1b90ac830c15b"],["./static/media/protractor.a297bd83.svg","a297bd833416ec803d9ea62eaed65e43"],["./static/media/react.e9f3d01c.svg","e9f3d01c242e086f895bde131803b451"],["./static/media/sass.88c10477.svg","88c1047792044b547d1d3e066d3e18c4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("./index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});