(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{56:function(e,n,t){e.exports=t(81)},78:function(e,n,t){},81:function(e,n,t){"use strict";t.r(n);var r,a=t(0),i=t.n(a),o=t(23),c=t.n(o),u=t(22),l=t(53),s=t(45),f=t(18),h=t.n(f),m=t(15),d=t(26);!function(e){e.SET_NAV_VISIBILITY="@@layout/SET_NAV_VISIBILITY"}(r||(r={}));var p,v=t(20),b={navVisible:!0};!function(e){e.FETCH_REQUEST="@@projects/FETCH_REQUEST",e.FETCH_SUCCESS="@@projects/FETCH_SUCCESS",e.FETCH_ERROR="@@projects/FETCH_ERROR",e.SELECT_PROJECT="@@projects/SELECT_PROJECT",e.SELECTED="@@projects/SELECTED"}(p||(p={}));var g=function(){return Object(d.action)(p.FETCH_REQUEST)},j=function(e){return Object(d.action)(p.FETCH_SUCCESS,e)},E=function(e){return Object(d.action)(p.FETCH_ERROR,e)};function O(e,n,t,r){return fetch(n+t,{method:e,headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(r)}).then(function(e){return e.json()})}var y=h.a.mark(S),w=h.a.mark(C),x=h.a.mark(T),k="https://api.jsonbin.io";function S(){var e;return h.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(m.b)(O,"get",k,"/b/5c3503ee05d34b26f2049f43/latest");case 3:if(!(e=n.sent).error){n.next=9;break}return n.next=7,Object(m.d)(E(e.error));case 7:n.next=11;break;case 9:return n.next=11,Object(m.d)(j(e));case 11:n.next=22;break;case 13:if(n.prev=13,n.t0=n.catch(0),!(n.t0 instanceof Error)){n.next=20;break}return n.next=18,Object(m.d)(E(n.t0.stack));case 18:n.next=22;break;case 20:return n.next=22,Object(m.d)(E("An unknown error occured."));case 22:case"end":return n.stop()}},y,this,[[0,13]])}function C(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.e)(p.FETCH_REQUEST,S);case 2:case"end":return e.stop()}},w,this)}function T(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)([Object(m.c)(C)]);case 2:case"end":return e.stop()}},x,this)}var R=T,I={data:[],errors:void 0,loading:!1},_=h.a.mark(V),F=Object(u.combineReducers)({layout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case r.SET_NAV_VISIBILITY:return Object(v.a)({},e,{navVisible:n.payload});default:return e}},projects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case p.FETCH_REQUEST:return Object(v.a)({},e,{loading:!0});case p.FETCH_SUCCESS:return Object(v.a)({},e,{loading:!1,data:n.payload});case p.FETCH_ERROR:return Object(v.a)({},e,{loading:!1,errors:n.payload});default:return e}}});function V(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)([Object(m.c)(R)]);case 2:case"end":return e.stop()}},_,this)}var H=t(7),L=t(8),N=t(11),D=t(9),U=t(10),A=t(17),B=t(47),M=B.default,z=B.css,P=(B.keyframes,B.ThemeProvider),J={bg0:"#0c0507",bg1:"#232323",bg2:"#1e0d12",fg0:"#f9f9f9",fg1:"#f5851f",fg2:"#f0780b",fg3:"#a9a9a9"},K={colors:J,fonts:{cursive:"'Kaushan Script', cursive"}},Q=M,W=t(87),Y=t(84),q=t(86),G=t(38),X=t(50),$=t.n(X),Z=t(4),ee=t(83),ne=t(85);function te(){var e=Object(Z.a)(["\n  img {\n    width: 32px;\n    fill: ",";\n    transition: all 0.2s ease;\n  }\n\n  text-decoration: none;\n  padding: 0 0.5rem;\n\n  &:hover {\n    img {\n      transform: translate(0, -5px);\n    }\n  }\n"]);return te=function(){return e},e}function re(){var e=Object(Z.a)(["\n  ","\n"]);return re=function(){return e},e}function ae(){var e=Object(Z.a)(["\n  ","\n"]);return ae=function(){return e},e}var ie="\n  display: inline-block;\n  position: relative;\n  text-decoration: none;\n  padding: 10px 0;\n  color: ".concat(J.fg1,";\n\n  &:after {\n    content:'';\n    position: absolute;\n    width: 100%;\n    height: 1px;\n    bottom: 0;\n    left: 0;\n    background-color: ").concat(J.fg2,";\n    transform: scaleX(0);\n    transform-origin: bottom right;\n    transition: transform 0.2s;\n  }\n\n  &:hover {\n    &:after {\n      transform-origin: bottom left;\n      transform: scaleX(1);\n    }\n  }\n"),oe=Q(ne.a)(ae(),ie),ce={External:Q.a(re(),ie),Router:oe,Icon:Q.a(te(),function(e){return e.theme.colors.fg0})},ue=t(6),le={reveal:function(e){var n=new ue.c({paused:!0});return e?(n.to(e,.5,{opacity:0,ease:ue.b.easeOut}).play(),n):n},hide:function(e){e&&ue.d.set(e,{opacity:1})}},se={hide:function(e){return ue.d.to(e,.4,{opacity:0,y:10,ease:ue.b.easeOut})},show:function(e){return ue.d.to(e,.4,{opacity:1,y:0,ease:ue.b.easeOut})},revealH:function(e){var n=e.line,t=e.leftSlider,r=e.rightSlider,a=new ue.c({paused:!0});return a.from(n,.5,{height:0,ease:ue.b.easeIn}).staggerFrom(t.children,.5,{x:10,opacity:0,ease:ue.a.easeOut},.1,"slide").staggerFrom(r.children,.5,{x:-10,opacity:0,ease:ue.a.easeOut},.1,"slide").to(n,.5,{opacity:.2}).play(),a},revealC:function(e){var n=e.img,t=e.text,r=new ue.c({paused:!0});return ue.d.set(n,{opacity:0}),ue.d.set(t.children,{opacity:0,y:-10}),r.to(n,1,{opacity:1,ease:ue.b.easeOut},"reveal").staggerTo(t.children,.5,{y:0,opacity:1,ease:ue.a.easeOut},.1,"reveal").delay(.05),r},revealV:function(e){var n=e.line,t=e.topSlider,r=e.bottomSlider,a=new ue.c({paused:!0});return n&&t&&r?(a.from(n,.5,{width:0,ease:ue.b.easeIn}).from(t,.5,{opacity:0,ease:ue.b.easeOut},"slide").staggerFrom(r.children,.5,{y:-10,opacity:0,ease:ue.a.easeOut},.1,"slide").to(n,.5,{opacity:.2}).play(),a):a},refreshV:function(e){var n=e.topSlider,t=e.bottomSlider,r=new ue.c({paused:!0});return n&&t?(r.staggerTo(n.children,.5,{opacity:0,ease:ue.a.easeIn},.1,"slide").staggerTo(t.children,.5,{y:-10,opacity:0,ease:ue.a.easeIn},.1,"slide"),r):r},curtain:le};function fe(){var e=Object(Z.a)(["\n  float: right;\n\n  "," {\n    font-size: 0.8rem;\n    margin-left: 1.5rem;\n    text-transform: uppercase;\n  }\n"]);return fe=function(){return e},e}function he(){var e=Object(Z.a)(["\n  font-family: ",";\n  font-size: 1.2rem;\n  float: left;\n\n  "," {\n    color: ","\n  }\n"]);return he=function(){return e},e}function me(){var e=Object(Z.a)(["\n  color: ","\n"]);return me=function(){return e},e}function de(){var e=Object(Z.a)(["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 64px;\n  line-height: 64px;\n  padding: 0 3rem;\n  z-index: 2;\n\n  @media(max-width: 420px) {\n    height: 32px;\n    line-height: 32px;\n    padding: 0 2rem;\n  }\n"]);return de=function(){return e},e}var pe=function(e){function n(){var e,t;Object(H.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(N.a)(this,(e=Object(D.a)(n)).call.apply(e,[this].concat(a)))).menuLinks=["about","portfolio"],t.ref=null,t}return Object(U.a)(n,e),Object(L.a)(n,[{key:"componentDidUpdate",value:function(){var e=this.props.navVisible;this.ref&&e&&se.show(this.ref),this.ref&&!e&&se.hide(this.ref)}},{key:"render",value:function(){var e=this;return i.a.createElement(ve,{ref:function(n){return e.ref=n}},i.a.createElement(ge,null,i.a.createElement(be,{to:"/"},"Khangarid")),i.a.createElement(je,null,this.menuLinks.map(function(e){return i.a.createElement(be,{key:e,active:location.pathname==="/".concat(e)?1:0,to:"/".concat(e)},e)})))}}]),n}(i.a.Component),ve=Q.div(de()),be=Q(ce.Router)(me(),function(e){return e.active?e.theme.colors.fg0:e.theme.colors.fg3}),ge=Q.div(he(),function(e){return e.theme.fonts.cursive},be,function(e){return e.theme.colors.fg0}),je=Q.div(fe(),be),Ee=Object(ee.a)(Object(A.b)(function(e){return{navVisible:e.layout.navVisible}})(pe));function Oe(){var e=Object(Z.a)(["\n  width: 100vw;\n  height: 1px;\n  background-color: ","\n"]);return Oe=function(){return e},e}function ye(){var e=Object(Z.a)(["\n  width: 100vw;\n  height: 1px;\n"]);return ye=function(){return e},e}function we(){var e=Object(Z.a)(["\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  justify-content: center;\n\n  &:before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0.1;\n    background: url('/images/waves.svg') repeat;\n\n    @media(max-width: 420px) {\n      opacity: 0.9;\n    }\n  }\n"]);return we=function(){return e},e}function xe(){var e=Object(Z.a)(["\n  height: 60vh;\n\n  @media(max-width: 420px) {\n    height: 50vh;\n  }\n"]);return xe=function(){return e},e}function ke(){var e=Object(Z.a)(["\n  height: 40vh;\n  overflow: auto;\n  width: 100%;\n  max-width: 800px;\n  padding: 1rem 1rem 3rem 1rem;\n\n  @media(max-width: 420px) {\n    height: 50vh;\n  }\n"]);return ke=function(){return e},e}function Se(){var e=Object(Z.a)(["\n  padding: 3rem 1rem 1rem 1rem;\n  width: 100%;\n  max-width: 800px;\n\n  @media(max-width: 420px) {\n    padding: 2.5rem 0.5rem 0.5rem 0.5rem;\n  }\n"]);return Se=function(){return e},e}function Ce(){var e=Object(Z.a)(["\n  display: flex;\n  justify-content: center;\n"]);return Ce=function(){return e},e}function Te(){var e=Object(Z.a)(["\n  position: absolute;\n  top: 0;\n  width: 100%;\n"]);return Te=function(){return e},e}var Re=function(e){function n(e){var t;return Object(H.a)(this,n),(t=Object(N.a)(this,Object(D.a)(n).call(this,e))).topSlider=void 0,t.bottomSlider=void 0,t.line=void 0,t.tl=void 0,t.getRefs=function(){return{topSlider:t.topSlider,bottomSlider:t.bottomSlider,line:t.line}},t.state=Object(v.a)({},t.props),t.topSlider=null,t.bottomSlider=null,t.line=null,t.tl=new ue.c,t}return Object(U.a)(n,e),Object(L.a)(n,[{key:"componentDidMount",value:function(){var e={topSlider:this.topSlider,bottomSlider:this.bottomSlider,line:this.line};se.revealV(e),this.tl=se.refreshV(e)}},{key:"shouldComponentUpdate",value:function(e){var n=this;return e.num===this.props.num||(this.tl.play(),this.tl.eventCallback("onComplete",function(){n.setState(Object(v.a)({},e)),n.tl.reverse()}),!1)}},{key:"render",value:function(){var e=this,n=this.props,t=n.top,r=n.bottom;return i.a.createElement(Ie,null,i.a.createElement(He,null,i.a.createElement(Le,{ref:function(n){return e.topSlider=n}},i.a.createElement(Fe,null,t))),i.a.createElement(Ne,null,i.a.createElement(De,{ref:function(n){return e.line=n}})),i.a.createElement(_e,null,i.a.createElement(Ve,{ref:function(n){return e.bottomSlider=n}},r)))}}]),n}(i.a.Component),Ie=Q.div(Te()),_e=Q.div(Ce()),Fe=Q.div(Se()),Ve=Q.div(ke()),He=Q.div(xe()),Le=Q.div(we()),Ne=Q.div(ye()),De=Q.div(Oe(),function(e){return e.theme.colors.fg1});function Ue(){var e=Object(Z.a)(["\n  display: table;\n  margin: 0 auto;\n  width: 1px;\n  height: 100vh;\n  background-color: ","\n"]);return Ue=function(){return e},e}function Ae(){var e=Object(Z.a)(["\n  position: fixed;\n  top: 0;\n  left: 50%;\n  width: 1px;\n  height: 100vh;\n"]);return Ae=function(){return e},e}function Be(){var e=Object(Z.a)(["\n  padding: 0 1rem;\n"]);return Be=function(){return e},e}function Me(){var e=Object(Z.a)(["\n  width: 50%;\n  float: left;\n  height: 100vh;\n  overflow: auto;\n  display: flex;\n  justify-content: ",";\n  align-items: center;\n"]);return Me=function(){return e},e}function ze(){var e=Object(Z.a)(["\n  position: absolute;\n  top: 0;\n  width: 100%;\n"]);return ze=function(){return e},e}var Pe=function(e){function n(e){var t;return Object(H.a)(this,n),(t=Object(N.a)(this,Object(D.a)(n).call(this,e))).leftSlider=void 0,t.rightSlider=void 0,t.line=void 0,t.leftSlider=null,t.rightSlider=null,t.line=null,t}return Object(U.a)(n,e),Object(L.a)(n,[{key:"componentDidMount",value:function(){this.line&&this.leftSlider&&this.rightSlider&&se.revealH({line:this.line,leftSlider:this.leftSlider,rightSlider:this.rightSlider})}},{key:"render",value:function(){var e=this,n=this.props,t=n.left,r=n.right;return i.a.createElement(Je,null,i.a.createElement(Ke,{align:"flex-end"},i.a.createElement(Qe,{ref:function(n){return e.leftSlider=n}},t)),i.a.createElement(We,{key:"divider"},i.a.createElement(Ye,{ref:function(n){return e.line=n}})),i.a.createElement(Ke,{align:"flex-start"},i.a.createElement(Qe,{ref:function(n){return e.rightSlider=n}},r)))}}]),n}(i.a.Component),Je=Q.div(ze()),Ke=Q.div(Me(),function(e){return e.align}),Qe=Q.div(Be()),We=Q.div(Ae()),Ye=Q.div(Ue(),function(e){return e.theme.colors.fg1});function qe(){var e=Object(Z.a)(["\n  background: ",";\n  height: 100vh;\n  overflow: hidden;\n  position: relative;\n  color: ",";\n"]);return qe=function(){return e},e}var Ge=Q.div(qe(),function(e){return e.theme.colors.bg0},function(e){return e.theme.colors.fg0});function Xe(){var e=Object(Z.a)(["\n  margin: auto;\n  position: relative;\n  width: 186px;\n  height: 186px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Xe=function(){return e},e}function $e(){var e=Object(Z.a)(["\n  border-radius: 50%;\n  overflow: hidden;\n  width: calc(100% - 2rem);\n  height: calc(100% - 2rem);\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n"]);return $e=function(){return e},e}function Ze(){var e=Object(Z.a)(["\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n"]);return Ze=function(){return e},e}function en(){var e=Object(Z.a)(["\n  position: absolute;\n  fill: transparent;\n  stroke-dasharray: 565.5;\n  stroke-dashoffset: 565.5;\n  stroke: #f5851f;\n  transform: rotate(-90deg);\n  transform-origin: 50% 50%;\n"]);return en=function(){return e},e}var nn=function(e){function n(){var e,t;Object(H.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(N.a)(this,(e=Object(D.a)(n)).call.apply(e,[this].concat(a)))).ellipse=null,t}return Object(U.a)(n,e),Object(L.a)(n,[{key:"componentDidMount",value:function(){var e=this,n=this.props.duration;this.ellipse&&new ue.c({paused:!0}).to(this.ellipse,n,{strokeDashoffset:0,ease:ue.b.easeIn}).to(this.ellipse,n,{opacity:.2,ease:ue.b.easeIn}).play();setTimeout(function(){e.props.onReady()},1e3*n)}},{key:"render",value:function(){var e=this;return i.a.createElement(on,null,i.a.createElement(rn,null,i.a.createElement(tn,{ref:function(n){return e.ellipse=n},ry:"90",rx:"90",cy:"93",cx:"93","stroke-width":"1"})),i.a.createElement(an,null,this.props.children))}}]),n}(i.a.Component),tn=Q.ellipse(en()),rn=Q.svg(Ze()),an=Q.div($e()),on=Q.div(Xe());function cn(){var e=Object(Z.a)(["\n    transform: rotate(180deg);\n\n    margin: 0 1.5rem 0 0;\n  "]);return cn=function(){return e},e}function un(){var e=Object(Z.a)(["\n  img {\n    width: 100%;\n    transform: scale(0.9);\n    transition: all .2s ease;\n  }\n\n  margin-left: 1.5rem;\n\n  ","\n\n  &:hover {\n    img {\n      transform: scale(1.1)\n    }\n  }\n\n  &:active {\n    img {\n      transform: scale(0.9);\n    }\n  }\n"]);return un=function(){return e},e}function ln(){var e=Object(Z.a)(["\n  height: 2rem;\n  width: 2.5rem;\n  padding: 0 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n\n  &:hover {\n    "," {\n      background-color: ",";\n    }\n  }\n"]);return ln=function(){return e},e}function sn(){var e=Object(Z.a)(["\n    background-color: ",";\n    height: 3px;\n  "]);return sn=function(){return e},e}function fn(){var e=Object(Z.a)(["\n  height: 1px;\n  width: 100%;\n  background-color: ",";\n  display: inline-block;\n  transition: all .2s ease;\n\n  ","\n"]);return fn=function(){return e},e}function hn(){var e=Object(Z.a)(["\n  position: fixed;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n  width: 100%;\n  background-color: rgba(0,0,0,0.1);\n"]);return hn=function(){return e},e}var mn=function(e){var n=e.length,t=e.selected,r=e.onSelect,a=e.onNext,o=e.onPrev;return i.a.createElement(dn,null,i.a.createElement(bn,{onClick:function(){return o()},prev:!0},i.a.createElement("img",{src:"/icons/right-arrow.svg",alt:"Prev"})),function(){for(var e=[],a=function(n){e.push(i.a.createElement(vn,{key:n,onClick:function(){return r(n)}},i.a.createElement(pn,{active:t===n})))},o=0;o<n;o++)a(o);return e}(),i.a.createElement(bn,{onClick:function(){return a()}},i.a.createElement("img",{src:"/icons/right-arrow.svg",alt:"Next"})))},dn=Q.div(hn()),pn=Q.span(fn(),function(e){return e.theme.colors.fg3},function(e){return e.active&&z(sn(),function(e){return e.theme.colors.fg1})}),vn=Q.span(ln(),pn,function(e){return e.theme.colors.fg0}),bn=Q(vn)(un(),function(e){return e.prev&&z(cn())});function gn(){var e=Object(Z.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: ",";\n  z-index: 1;\n"]);return gn=function(){return e},e}function jn(){var e=Object(Z.a)(["\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n\n  iframe {\n    width: 100%;\n    height: 100%;\n  }\n"]);return jn=function(){return e},e}var En=function(e){function n(){var e,t;Object(H.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(N.a)(this,(e=Object(D.a)(n)).call.apply(e,[this].concat(a)))).curtain=null,t}return Object(U.a)(n,e),Object(L.a)(n,[{key:"componentDidMount",value:function(){le.reveal(this.curtain)}},{key:"componentDidUpdate",value:function(){var e=this;le.hide(this.curtain),setTimeout(function(){le.reveal(e.curtain)},500)}},{key:"render",value:function(){var e=this,n=this.props.url;return i.a.createElement(On,null,i.a.createElement("iframe",{src:"".concat(n,"?autoplay=1"),frameBorder:"0"}),i.a.createElement(yn,{ref:function(n){return e.curtain=n}}))}}]),n}(i.a.Component),On=Q.div(jn()),yn=Q.div(gn(),function(e){return e.theme.colors.bg0});function wn(){var e=Object(Z.a)(["\n  color: ",";\n"]);return wn=function(){return e},e}function xn(){var e=Object(Z.a)(["\n  color: ",";\n  text-align: ",";\n"]);return xn=function(){return e},e}function kn(){var e=Object(Z.a)(["\n  font-size: 3rem;\n  font-weight: 400;\n  line-height: 3rem;\n\n  @media(max-width: 420px) {\n    font-size: 2.2rem;\n    line-height: 2.2rem;\n  }\n\n  margin: 0;\n  text-align: right;\n"]);return kn=function(){return e},e}function Sn(){var e=Object(Z.a)(["\n  font-family: ",";\n"]);return Sn=function(){return e},e}var Cn=Q.span(Sn(),function(e){return e.theme.fonts.cursive}),Tn=Q.h1(kn()),Rn=Q.p(xn(),function(e){return e.theme.colors.fg3},function(e){return e.align}),In=Q.span(wn(),function(e){return e.theme.colors.fg0}),_n=function(e){function n(){var e,t;Object(H.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(N.a)(this,(e=Object(D.a)(n)).call.apply(e,[this].concat(a)))).renderLeft=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(Tn,null,"Hi, I'm ",i.a.createElement(Cn,null,"Khangarid")),i.a.createElement(Rn,{align:"right"},"a web developer."),i.a.createElement(Rn,{align:"right"},"Know more ",i.a.createElement(ce.Router,{to:"/about"},"about me")))},t.renderRight=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(Rn,null,"I like to build ",i.a.createElement(In,null,"web apps")," and marvel at my code."),i.a.createElement(Rn,null,"Other than that video games and animes are my favorite things."),i.a.createElement(Rn,null,"See my ",i.a.createElement(ce.Router,{to:"/portfolio"},"portfolio")))},t}return Object(U.a)(n,e),Object(L.a)(n,[{key:"componentDidMount",value:function(){this.props.setNavVisibility(!1)}},{key:"componentWillUnmount",value:function(){this.props.setNavVisibility(!0)}},{key:"render",value:function(){return i.a.createElement(Pe,{left:this.renderLeft(),right:this.renderRight()})}}]),n}(i.a.Component),Fn=Object(A.b)(null,function(e){return{setNavVisibility:function(n){return e(function(e){return Object(d.action)(r.SET_NAV_VISIBILITY,e)}(n))}}})(_n);function Vn(){var e=Object(Z.a)(["\n  color: ","\n"]);return Vn=function(){return e},e}function Hn(){var e=Object(Z.a)(["\n  color: ","\n"]);return Hn=function(){return e},e}function Ln(){var e=Object(Z.a)(["\n  margin-top: 2rem;\n"]);return Ln=function(){return e},e}function Nn(){var e=Object(Z.a)(["\n  max-width: 600px;\n  text-align: center;\n"]);return Nn=function(){return e},e}function Dn(){var e=Object(Z.a)(["\n  height: 100vh;\n  overflow: auto;\n  padding: 4.5rem 1rem 2rem 1rem;\n\n  @media (min-width: 420px) {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"]);return Dn=function(){return e},e}var Un=Q.div(Dn()),An=Q.div(Nn()),Bn=Q.div(Ln()),Mn=Q.p(Hn(),function(e){return e.theme.colors.fg3}),zn=Q.span(Vn(),function(e){return e.theme.colors.fg0}),Pn=function(e){function n(e){var t;return Object(H.a)(this,n),(t=Object(N.a)(this,Object(D.a)(n).call(this,e))).img=void 0,t.text=void 0,t.tl=void 0,t.animate=function(){t.tl.play()},t.img=null,t.text=null,t.tl=new ue.c,t}return Object(U.a)(n,e),Object(L.a)(n,[{key:"componentDidMount",value:function(){this.img&&this.text&&(this.tl=se.revealC({img:this.img,text:this.text}))}},{key:"render",value:function(){var e=this;return i.a.createElement(Un,null,i.a.createElement(An,null,i.a.createElement(nn,{onReady:this.animate,duration:.5},i.a.createElement("img",{ref:function(n){return e.img=n},src:"/images/photo.jpg",alt:"Khangarid"})),i.a.createElement(Bn,{ref:function(n){return e.text=n}},i.a.createElement("h1",null,"Khangarid Davaadorj"),i.a.createElement(Mn,null,"I've 2 years of experience in ",i.a.createElement(zn,null,"web development"),", mostly on ",i.a.createElement(zn,null,"front end"),"."),i.a.createElement(Mn,null,"Expertise in JavaScript, React, Redux, CSS, HTML and Node"),i.a.createElement(Mn,null,"I'm currently open to new opportunities, please reach me by\xa0",i.a.createElement(ce.External,{href:"mailto:khangarid.davaadorj@gmail.com"},"khangarid.davaadorj@gmail.com")),i.a.createElement(Mn,{style:{paddingTop:"1rem"}},i.a.createElement(ce.Icon,{href:"https://www.linkedin.com/in/khangarid-davaadorj/",target:"_blank",title:"Linkedin"},i.a.createElement("img",{src:"/icons/linkedin.svg",alt:"Facebook"})),i.a.createElement(ce.Icon,{href:"https://github.com/khangarid",target:"_blank",title:"Github"},i.a.createElement("img",{src:"/icons/github.svg",alt:"Facebook"})),i.a.createElement(ce.Icon,{href:"https://www.facebook.com/khngd",target:"_blank",title:"Facebook"},i.a.createElement("img",{src:"/icons/facebook.svg",alt:"Facebook"})),i.a.createElement(ce.Icon,{href:"https://www.dotabuff.com/players/127605563",target:"_blank",title:"Dota 2"},i.a.createElement("img",{src:"/icons/dota.png",alt:"Dota 2"})),i.a.createElement(ce.Icon,{href:"https://lolprofile.net/summoner/euw/CCazzerr",target:"_blank",title:"League of Legends"},i.a.createElement("img",{src:"/icons/lol.png",alt:"League of Legends"}))))))}}]),n}(i.a.Component),Jn=t(27);function Kn(){var e=Object(Z.a)(["\n  color: ",";\n"]);return Kn=function(){return e},e}function Qn(){var e=Object(Z.a)(["\n  padding: 0.5rem 0;\n"]);return Qn=function(){return e},e}function Wn(){var e=Object(Z.a)(["\n  display: inline-block;\n"]);return Wn=function(){return e},e}var Yn=Q.h1(Wn()),qn=Q.div(Qn()),Gn=Q(qn)(Kn(),function(e){return e.theme.colors.fg3}),Xn=function(e){function n(e){var t;return Object(H.a)(this,n),(t=Object(N.a)(this,Object(D.a)(n).call(this,e))).state={num:0},t.changeNum=t.changeNum.bind(Object(Jn.a)(Object(Jn.a)(t))),t}return Object(U.a)(n,e),Object(L.a)(n,[{key:"changeNum",value:function(e){var n=this.props.projects;e>=0&&e<n.length&&this.setState({num:e})}},{key:"renderTop",value:function(){var e=this.props.projects[this.state.num];return i.a.createElement(En,{url:e.video})}},{key:"renderBottom",value:function(){var e=this.props.projects[this.state.num];return i.a.createElement(i.a.Fragment,null,i.a.createElement(Yn,null,e.name),i.a.createElement(qn,null,e.description),i.a.createElement(Gn,null,e.techs),i.a.createElement("p",null,i.a.createElement(ce.External,{href:e.url,target:"_blank"},"Visit project")))}},{key:"render",value:function(){var e=this,n=this.props,t=n.loading,r=n.projects,a=this.state.num;return!t&&i.a.createElement(i.a.Fragment,null,i.a.createElement(Re,{top:this.renderTop(),bottom:this.renderBottom(),num:a}),i.a.createElement(mn,{length:r.length,selected:this.state.num,onSelect:this.changeNum,onPrev:function(){return e.changeNum(a-1)},onNext:function(){return e.changeNum(a+1)}}))}}]),n}(i.a.Component),$n=Object(A.b)(function(e){return{projects:e.projects.data,loading:e.projects.loading,errors:e.projects.errors}})(Xn),Zn=$()({basename:""}),et=function(e){function n(){var e,t;Object(H.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(N.a)(this,(e=Object(D.a)(n)).call.apply(e,[this].concat(a)))).state={routes:[{path:"/",name:"Home",Component:Fn},{path:"/about",name:"About",Component:Pn},{path:"/portfolio",name:"Portfolio",Component:$n}]},t.componentDidMount=function(){t.props.fetchRequest()},t.onExit=function(e){se.hide(e)},t}return Object(U.a)(n,e),Object(L.a)(n,[{key:"render",value:function(){var e=this,n=this.state.routes;return i.a.createElement(W.a,{history:Zn},i.a.createElement(Ge,null,i.a.createElement(Y.a,{render:function(t){var r=t.location;return i.a.createElement(G.TransitionGroup,null,i.a.createElement(G.Transition,{key:r.key,timeout:400,onExit:e.onExit},i.a.createElement(q.a,{location:r},n.map(function(e){var n=e.path,t=e.Component;return i.a.createElement(Y.a,{key:n,exact:!0,path:n},function(e){var n=e.match;return i.a.createElement(t,{in:null!=n})})}))))}}),i.a.createElement(Ee,null)))}}]),n}(a.Component),nt=Object(A.b)(null,function(e){return{fetchRequest:function(){return e(g())}}})(et),tt=(t(78),function(e){function n(){return Object(H.a)(this,n),Object(N.a)(this,Object(D.a)(n).apply(this,arguments))}return Object(U.a)(n,e),Object(L.a)(n,[{key:"render",value:function(){var e=this.props.store;return i.a.createElement(A.a,{store:e},i.a.createElement(P,{theme:K},i.a.createElement(nt,null)))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var rt=function(e){var n=Object(s.composeWithDevTools)({}),t=Object(l.a)(),r=Object(u.createStore)(F,e,n(Object(u.applyMiddleware)(t)));return t.run(V),r}(window.initialReduxState);rt.dispatch(g()),c.a.render(i.a.createElement(tt,{store:rt}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[56,2,1]]]);
//# sourceMappingURL=main.3b5c2f2a.chunk.js.map