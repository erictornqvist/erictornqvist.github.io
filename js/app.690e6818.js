(function(t){function e(e){for(var a,s,i=e[0],l=e[1],c=e[2],h=0,d=[];h<i.length;h++)s=i[h],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,i=1;i<r.length;i++){var l=r[i];0!==o[l]&&(a=!1)}a&&(n.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},o={app:0},n=[];function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/ttlrs/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"app"}},[r("div",{staticClass:"wrapper"},[r("router-view",{attrs:{name:"header"}}),r("router-view",{attrs:{name:"drawer"}}),r("router-view"),r("router-view",{attrs:{name:"footer"}})],1)])},n=[],s={name:"App",components:{},created:function(){this.$vuetify.theme.dark=!0}},i=s,l=r("2877"),c=r("6544"),u=r.n(c),h=r("7496"),d=Object(l["a"])(i,o,n,!1,null,null,null),p=d.exports;u()(d,{VApp:h["a"]});var w=r("f309");a["a"].use(w["a"]);var g=new w["a"]({}),m=(r("4de4"),r("d81d"),r("2f62"));a["a"].use(m["a"]);var f=new m["a"].Store({state:{show_drawer:null,categories:[{text:"Show all categories",href:"www.google.com"},{text:"Rock",href:"www.google.com"},{text:"Pop",href:"www.google.com"},{text:"Synth",href:"www.google.com"},{text:"Country",href:"www.google.com"},{text:"Metal",href:"www.google.com"},{text:"Opera",href:"www.google.com"},{text:"Reggae",href:"www.google.com"},{text:"Rap",href:"www.google.com"},{text:"Techno",href:"www.google.com"},{text:"Classical",href:"www.google.com"},{text:"80's",href:"www.google.com"},{text:"90's",href:"www.google.com"},{text:"Euro",href:"www.google.com"},{text:"Dance",href:"www.google.com"}],active_categories:["Rock","Pop"],albums:[{type:"Rock",title:"Hard Rock",cover:"https://images.homedepot-static.com/productImages/94af8836-0338-4802-914e-04cc71e562ad/svn/backyard-x-scapes-fake-rocks-hdd-rof-rocsb-64_1000.jpg"},{type:"Rock",title:"Strong Rock",cover:"https://carolawetterholm.se/wp-content/uploads/2019/03/rock-workout-2.jpg"},{type:"Pop",title:"Old Pop",cover:"https://i.ebayimg.com/images/g/K4cAAOSwv0tVCFS6/s-l300.jpg"},{type:"Pop",title:"Sweet Pop",cover:"https://cdn.cdon.com/media-dynamic/images/product/toy/vidmatbordet/image740/intex_popsicle_badmadrass-43793210-45232351-org.jpg"}],drawer_pages:[{icon:"mdi-fire",text:"Most popular",route:"popular"},{icon:"mdi-clock",text:"Latest releases",route:"latest"},{icon:"mdi-email",text:"Contact us",route:"contact"},{icon:"mdi-information",text:"About",route:"about"},{icon:"mdi-star",text:"Partner sites",route:"partners"}]},mutations:{toggleDrawer:function(t){return t.show_drawer=!t.show_drawer},setActiveCategory:function(t,e){0==e.localeCompare("Show all categories")?(t.active_categories=t.categories.map((function(t){return t.text})),t.active_categories=t.active_categories.filter((function(t){return 0!=t.localeCompare("Show all categories")}))):t.active_categories=[e]},setDrawerState:function(t,e){t.show_drawer=e}},getters:{getCategories:function(t){return t.categories},getAlbums:function(t){return function(e){return t.albums.filter((function(t){return 0==e.localeCompare(t.type)}))}},getActiveCategories:function(t){return t.active_categories},getDrawerPages:function(t){return t.drawer_pages},getDrawerState:function(t){return t.show_drawer}}}),v=r("8c4f"),y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("v-container",{attrs:{fluid:""}},[r("v-row",{staticClass:"my-6",attrs:{justify:"center",align:"center"}},[r("h3",[t._v('This is the "About Us" page')])]),r("v-row",{staticClass:"ma-12"},[r("p",[t._v("Basically, I really don't want to style this.")])]),r("p",{staticClass:"ma-12"},[t._v("Here is some text:")]),r("p",{staticClass:"ma-12"},[t._v("There's a lady who's sure All that glitters is gold And she's buying a stairway to heaven When she gets there she knows If the stores are all closed With a word she can get what she came for Oh oh oh oh and she's buying a stairway to heaven There's a sign on the wall But she wants to be sure 'Cause you know sometimes words have two meanings In a tree by the brook There's a songbird who sings Sometimes all of our thoughts are misgiving Ooh, it makes me wonder Ooh, it makes me wonder There's a feeling I get When I look to the west And my spirit is crying for leaving In my thoughts I have seen Rings of smoke through the trees And the voices of those who standing looking Ooh, it makes me wonder Ooh, it really makes me wonder And it's whispered that soon, If we all call the tune Then the piper will lead us to reason And a new day will dawn For those who stand long And the forests will echo with laughter If there's a bustle in your hedgerow Don't be alarmed now It's just a spring clean for the May queen Yes, there are two paths you can go by But in the long run There's still time to change the road you're on And it makes me wonder Your head is humming and it won't go In case you don't know The piper's calling you to join him Dear lady, can you hear the wind blow And did you know Your stairway lies on the whispering wind And as we wind on down the road Our shadows taller than our soul There walks a lady we all know Who shines white light and wants to show How everything still turns to gold And if you listen very hard The tune will come to you at last When all are one and one is all To be a rock and not to roll And she's buying the stairway to heaven")])],1)],1)},b=[],_={name:"About"},k=_,C=r("a523"),x=r("a75b"),V=r("0fd9"),A=Object(l["a"])(k,y,b,!1,null,"1a472f79",null),j=A.exports;u()(A,{VContainer:C["a"],VContent:x["a"],VRow:V["a"]});var O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("v-container",{attrs:{fluid:""}},[r("v-row",{staticClass:"my-6",attrs:{justify:"center",align:"center"}},[r("h3",[t._v("This is the Contact page")])]),r("p",{staticClass:"ma-12"},[t._v("Contact us using carrier pigeon, please!")])],1)],1)},S=[],T={name:"Contact"},$=T,P=Object(l["a"])($,O,S,!1,null,"3a2189dd",null),R=P.exports;u()(P,{VContainer:C["a"],VContent:x["a"],VRow:V["a"]});var D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-footer",{attrs:{"data-background-color":t.backgroundColor,inset:"",app:"",absolute:"",display:"flex",width:"auto"}},[r("v-container",{attrs:{fluid:""}},[r("v-flex",{staticClass:"text-center"},[t._v(" Copyright © "+t._s(t.year)+" Twinkle Twinkle Little Rock Star. All Rights Reserved. ")])],1)],1)},I=[],E={name:"Footer",props:{backgroundColor:String,type:String},data:function(){return{year:(new Date).getFullYear()}}},L=E,M=r("0e8f"),z=r("553a"),B=Object(l["a"])(L,D,I,!1,null,null,null),F=B.exports;u()(B,{VContainer:C["a"],VFlex:M["a"],VFooter:z["a"]});var H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("v-container",{attrs:{fluid:""}},t._l(t.getActiveCategories,(function(t){return r("AlbumsType",{key:t,attrs:{category:t}})})),1)],1)},W=[],N=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center",align:"center"}},[r("h3",[t._v(t._s(t.category))]),r("v-col",{attrs:{cols:"12"}},[r("v-row",{staticClass:"justify-center"},t._l(t.getAlbums,(function(t){return r("Album",{key:t.title,attrs:{title:t.title,cover:t.cover}})})),1)],1)],1)},Y=[],J=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"my-4",attrs:{align:"center",height:"338px",width:"300px",color:"transparent",link:"",flat:""}},[r("v-img",{staticClass:"align-center",attrs:{height:"80%",width:"90%",src:t.cover}}),r("v-card-title",{staticClass:"justify-center"},[t._v(t._s(t.title))]),r("div")],1)},q=[],G={name:"Album",props:{title:{type:String,default:"Missing title"},cover:{type:String,default:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}}},Q=G,U=r("b0af"),K=r("99d9"),X=r("adda"),Z=Object(l["a"])(Q,J,q,!1,null,null,null),tt=Z.exports;u()(Z,{VCard:U["a"],VCardTitle:K["a"],VImg:X["a"]});var et={name:"AlbumsType",components:{Album:tt},computed:{getAlbums:function(){return this.$store.getters.getAlbums(this.category)}},props:{category:{type:String,default:"Missing category"}}},rt=et,at=r("62ad"),ot=Object(l["a"])(rt,N,Y,!1,null,null,null),nt=ot.exports;u()(ot,{VCol:at["a"],VRow:V["a"]});var st={name:"MainPage",components:{AlbumsType:nt},computed:{getActiveCategories:function(){return this.$store.getters.getActiveCategories}}},it=st,lt=Object(l["a"])(it,H,W,!1,null,null,null),ct=lt.exports;u()(lt,{VContainer:C["a"],VContent:x["a"]});var ut=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-navigation-drawer",{attrs:{value:t.showDrawer,width:"200",app:"",clipped:""},on:{input:function(e){return t.syncDrawer(e)}}},[r("v-subheader",{staticClass:"mt-4"},[t._v("Categories")]),r("v-list",{attrs:{dense:""}},t._l(t.getCategories,(function(e){return r("v-list-item",{key:e.text,attrs:{link:""},on:{click:function(r){t.setCategory(e.text),t.$router.push("/")}}},[r("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)})),1),r("v-divider",{staticClass:"mx-4"}),r("v-list",{attrs:{dense:""}},t._l(t.getDrawerPages,(function(e){return r("v-list-item",{key:e.text,attrs:{link:""},on:{click:function(r){return t.$router.push(e.route)}}},[r("v-list-item-action",[r("v-icon",[t._v(t._s(e.icon))])],1),r("v-list-item-content",[r("v-list-item-title",[t._v(" "+t._s(e.text)+" ")])],1)],1)})),1)],1)},ht=[],dt={name:"Drawer",computed:{showDrawer:function(){return this.$store.getters.getDrawerState},getCategories:function(){return this.$store.getters.getCategories},getDrawerPages:function(){return this.$store.getters.getDrawerPages}},methods:{setCategory:function(t){this.$store.commit("setActiveCategory",t)},syncDrawer:function(t){0==t?this.$store.commit("setDrawerState",!1):this.$store.commit("setDrawerState",!0)}}},pt=dt,wt=r("ce7e"),gt=r("132d"),mt=r("8860"),ft=r("da13"),vt=r("1800"),yt=r("5d23"),bt=r("f774"),_t=r("e0c7"),kt=Object(l["a"])(pt,ut,ht,!1,null,"1e369843",null),Ct=kt.exports;u()(kt,{VDivider:wt["a"],VIcon:gt["a"],VList:mt["a"],VListItem:ft["a"],VListItemAction:vt["a"],VListItemContent:yt["a"],VListItemTitle:yt["b"],VNavigationDrawer:bt["a"],VSubheader:_t["a"]});var xt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app-bar",{attrs:{app:"","clipped-left":"",color:"blue darken-4",dense:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){return e.stopPropagation(),t.$store.commit("toggleDrawer")}}}),r("v-icon",[t._v("mdi-music-note")]),r("v-toolbar-title",{staticClass:"align-center"},[r("span",{staticClass:"title d-none d-lg-flex d-sm-flex "},[t._v("TTLRS")])]),r("v-spacer"),r("v-row",{staticClass:"justify-end",staticStyle:{"min-width":"200px","max-width":"400px"}},[r("v-text-field",{staticClass:"align-center",attrs:{"append-icon-cb":function(){},placeholder:"Search...","single-line":"",color:"white","hide-details":""}}),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-magnify")])],1)],1),r("v-spacer"),r("v-row",{staticClass:"justify-end d-none d-md-flex "},t._l(t.logos,(function(e){return r("v-btn",{key:e.text,attrs:{icon:"",href:e.href,target:"_blank"}},[r("v-icon",[t._v(t._s(e.icon))])],1)})),1)],1)},Vt=[],At={name:"Header",data:function(){return{logos:[{text:"facebook",href:"https://www.facebook.com/twinkletwinklelittlerockstar",icon:"mdi-facebook"},{text:"instagram",href:"https://www.instagram.com/twinkletwinklelittlerockstar/",icon:"mdi-instagram"},{text:"twitter",href:"https://twitter.com/ttlrslullaby",icon:"mdi-twitter"},{text:"youtube",href:"https://www.youtube.com/channel/UCNseZOCieGO3mVz_-kcP4nQ",icon:"mdi-youtube"},{text:"itunes",href:"https://itunes.apple.com/us/artist/twinkle-twinkle-little-rock-star/id314333781",icon:"mdi-itunes"},{text:"amazon",href:"https://www.amazon.com/Twinkle-Twinkle-Little-Rock-Star/e/B0042XNL6Q/digital/ref=ep_artist_tab_digi",icon:"mdi-amazon"},{text:"spotify",href:"https://open.spotify.com/artist/3mGCLimuzOdod4Lnegny4d",icon:"mdi-spotify"},{text:"pandora",href:"https://www.pandora.com/artist/twinkle-twinkle-little-rock-star-childrens/ARzJv2htczd66Pg",icon:"mdi-pandora"},{text:"google",href:"https://play.google.com/store/music/artist/Twinkle_Twinkle_Little_Rock_Star?id=Ap2axgorwgbk4mwzvvmqwjtm2xm&hl=en",icon:"mdi-google-play"}]}}},jt=At,Ot=r("40dc"),St=r("5bc1"),Tt=r("8336"),$t=r("2fa4"),Pt=r("8654"),Rt=r("2a7f"),Dt=Object(l["a"])(jt,xt,Vt,!1,null,"3c53a78b",null),It=Dt.exports;u()(Dt,{VAppBar:Ot["a"],VAppBarNavIcon:St["a"],VBtn:Tt["a"],VIcon:gt["a"],VRow:V["a"],VSpacer:$t["a"],VTextField:Pt["a"],VToolbarTitle:Rt["a"]});var Et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("v-container",{attrs:{fluid:""}},[r("v-row",{staticClass:"my-6",attrs:{justify:"center",align:"center"}},[r("h3",[t._v("Our Partner Sites")])]),r("p",{staticClass:"ma-12"},[t._v("Here be partners, partners for all!")])],1)],1)},Lt=[],Mt={name:"Contact"},zt=Mt,Bt=Object(l["a"])(zt,Et,Lt,!1,null,"021574ae",null),Ft=Bt.exports;u()(Bt,{VContainer:C["a"],VContent:x["a"],VRow:V["a"]});var Ht=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("v-container",{attrs:{fluid:""}},[r("v-row",{staticClass:"my-6",attrs:{justify:"center",align:"center"}},[r("h3",[t._v("These are the Most popular albums")])]),r("p",{staticClass:"ma-12"},[t._v("If it's hot, it's here!")])],1)],1)},Wt=[],Nt={name:"Contact"},Yt=Nt,Jt=Object(l["a"])(Yt,Ht,Wt,!1,null,"4d5fdeda",null),qt=Jt.exports;u()(Jt,{VContainer:C["a"],VContent:x["a"],VRow:V["a"]});var Gt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("v-container",{attrs:{fluid:""}},[r("v-row",{staticClass:"my-6",attrs:{justify:"center",align:"center"}},[r("h3",[t._v("This is the Latest releases")])]),r("p",{staticClass:"ma-12"},[t._v("Find all the new stuff here!")])],1)],1)},Qt=[],Ut={name:"Contact"},Kt=Ut,Xt=Object(l["a"])(Kt,Gt,Qt,!1,null,"00c116a5",null),Zt=Xt.exports;u()(Xt,{VContainer:C["a"],VContent:x["a"],VRow:V["a"]}),a["a"].use(v["a"]);var te=new v["a"]({linkExactActiveClass:"active",routes:[{path:"/",name:"home",components:{default:ct,footer:F,header:It,drawer:Ct},props:{footer:{backgroundColor:"white"}}},{path:"/about",name:"about",components:{default:j,footer:F,header:It,drawer:Ct},props:{footer:{backgroundColor:"white"}}},{path:"/contact",name:"contact",components:{default:R,footer:F,header:It,drawer:Ct},props:{footer:{backgroundColor:"black"}}},{path:"/partners",name:"partners",components:{default:Ft,footer:F,header:It,drawer:Ct},props:{footer:{backgroundColor:"black"}}},{path:"/popular",name:"popular",components:{default:qt,footer:F,header:It,drawer:Ct},props:{footer:{backgroundColor:"black"}}},{path:"/latest",name:"latest",components:{default:Zt,footer:F,header:It,drawer:Ct},props:{footer:{backgroundColor:"black"}}}],scrollBehavior:function(t){return t.hash?{selector:t.hash}:{x:0,y:0}}});a["a"].config.productionTip=!1,new a["a"]({vuetify:g,router:te,store:f,icons:{iconfont:"mdi"},render:function(t){return t(p)}}).$mount("#app")}});
//# sourceMappingURL=app.690e6818.js.map