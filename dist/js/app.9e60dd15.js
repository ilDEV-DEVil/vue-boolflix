(function(t){function e(e){for(var s,r,i=e[0],c=e[1],l=e[2],f=0,p=[];f<i.length;f++)r=i[f],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},o=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00b2":function(t,e,a){},"07c1":function(t,e,a){"use strict";a("6c8e")},5618:function(t,e,a){"use strict";a("00b2")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.filmList&&t.tvShowList?"":"vh-100",attrs:{id:"app"}},[a("Nav",{on:{getListData:t.listenListData}}),a("div",{staticClass:"ms-3 me-0 p-0"},[a("h2",{staticClass:"text-white mt-5 ms-3"},[t._v("FILM")]),a("div",{staticClass:"d-flex flex-row flex-nowrap overflow-auto myRow"},t._l(t.filmList,(function(t){return a("Card",{key:t.id,attrs:{card:t}})})),1),a("h2",{staticClass:"text-white mt-5 ms-3"},[t._v("SERIE TV")]),a("div",{staticClass:"d-flex flex-row flex-nowrap overflow-auto myRow pb-5"},t._l(t.tvShowList,(function(t){return a("Card",{key:t.id,attrs:{card:t}})})),1)])],1)},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"background d-flex justify-content-between align-items-center pt-3 pb-3"},[a("h1",{staticClass:"ms-3"},[t._v("BOOLFLIX")]),a("div",{staticClass:"input-group w-25 me-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchData,expression:"searchData"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Cerca Film o Serie Tv...","aria-label":"Recipient's username","aria-describedby":"button-addon2"},domProps:{value:t.searchData},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.getCardData("/search/movie","filmList"),t.getCardData("/search/tv","tvShowList")},input:function(e){e.target.composing||(t.searchData=e.target.value)}}}),a("button",{staticClass:"btn btn-danger",attrs:{type:"button",id:"button-addon2"},on:{click:function(e){t.getCardData("/search/movie","filmList"),t.getCardData("/search/tv","tvShowList")}}},[t._v("Button")])])])},i=[],c=a("bc3a"),l=a.n(c),u={name:"Nav",data:function(){return{apiUrl:"https://api.themoviedb.org/3",apiKey:"113afd4e2596a1b537a7d1a2d3a3c2c0",searchData:"",filter:"",filmList:"",tvShowList:""}},methods:{getCardData:function(t,e){var a=this;l.a.get(this.apiUrl+t,{params:{api_key:this.apiKey,query:this.searchData}}).then((function(t){a[e]=t.data.results,a.$emit("getListData",a.filmList,a.tvShowList)}))}}},f=u,p=(a("5618"),a("2877")),h=Object(p["a"])(f,r,i,!1,null,"6f0d9a3f",null),d=h.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-auto text-white p-0 me-3 ms-3",on:{mouseleave:function(e){return t.focusingPoster()},mouseout:function(e){return t.notFocusingPoster()}}},[a("img",{staticClass:"poster",attrs:{src:t.imgPath(t.card.poster_path),alt:""}}),t.focusedPoster?a("div",{staticClass:"containerText d-flex flex-column justify-content-center"},[a("p",{staticClass:"fs-3 mb-3"},[t._v(" "+t._s(t.titleChoose.toUpperCase()))]),t.titleChoose!==t.originalTitleChoose?a("p",{staticClass:"my-1"},[t._v("titolo originale: "+t._s(t.originalTitleChoose))]):t._e(),a("p",{staticClass:"my-1"},[t._v(" lingua : "),a("img",{staticClass:"flags mx-1",attrs:{src:t.flags[t.card.original_language]?t.flags[t.card.original_language]:t.urlWorld,alt:""}})]),a("p",{staticClass:"my-1"},[t._v("voto : "),t._l(5,(function(e,s){return a("i",{key:s,staticClass:"fa  text-warning",class:s+1>Math.round(t.card.vote_average/2)?"fa-star-o":"fa-star",attrs:{"aria-hidden":"true"}})}))],2)]):t._e()])},m=[],v=(a("b0c0"),{name:"Card",data:function(){return{basePosterPath:"https://image.tmdb.org/t/p/",sizePosterPath:"w342",urlWorld:"https://images.emojiterra.com/twitter/v13.1/128px/1f310.png",flags:{it:"https://hotemoji.com/images/dl/9/flag-of-italy-emoji-by-twitter.png",en:"https://images.emojiterra.com/twitter/v12.1.5/512px/1f1ec-1f1e7.png",es:"https://images.emojiterra.com/twitter/v12.1.5/512px/1f1ea-1f1f8.png",de:"https://images.emojiterra.com/twitter/v13.1/512px/1f1e9-1f1ea.png"},focusedPoster:null}},props:{card:Object},methods:{imgPath:function(t){return t?this.basePosterPath+this.sizePosterPath+t:"data:image/png;base64,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"},focusingPoster:function(){console.log("ciao"),this.focusedPoster=!0},notFocusingPoster:function(){this.focusedPoster=!1}},computed:{titleChoose:function(){return this.card.title?this.card.title:this.card.name},originalTitleChoose:function(){return this.card.original_title?this.card.original_title:this.card.original_name}}}),y=v,b=(a("07c1"),Object(p["a"])(y,g,m,!1,null,"66cecb47",null)),C=b.exports,w={name:"App",components:{Nav:d,Card:C},data:function(){return{userSearch:"",filmList:"",tvShowList:""}},methods:{listenListData:function(t,e){console.log(t),console.log(e),this.filmList=t,this.tvShowList=e}}},A=w,S=(a("5c0b"),Object(p["a"])(A,n,o,!1,null,null,null)),I=S.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(I)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"6c8e":function(t,e,a){},"9c0c":function(t,e,a){}});
//# sourceMappingURL=app.9e60dd15.js.map