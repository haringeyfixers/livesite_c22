(self.webpackChunkhfixers=self.webpackChunkhfixers||[]).push([[577],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),o=r(7067);function a(t,r,i){return o()?(e.exports=a=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),i=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},9211:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(7462),o=r(3366),a=r(7294),i=r(5505),s=r(1727),c=r(2037),u=r(8297),l=r(8377),d=r(5893),p=["className","component"];var f=r(3090),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,r=e.defaultClassName,f=void 0===r?"MuiBox-root":r,m=e.generateClassName,x=e.styleFunctionSx,v=void 0===x?c.Z:x,b=(0,s.ZP)("div")(v),g=a.forwardRef((function(e,r){var a=(0,l.Z)(t),s=(0,u.Z)(e),c=s.className,x=s.component,v=void 0===x?"div":x,g=(0,o.Z)(s,p);return(0,d.jsx)(b,(0,n.Z)({as:v,ref:r,className:(0,i.Z)(c,m?m(f):f),theme:a},g))}));return g}({defaultTheme:(0,r(9480).Z)(),defaultClassName:"MuiBox-root",generateClassName:f.Z.generate}),x=m},5616:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(4942),o=r(3366),a=r(7462),i=r(7294),s=r(5505),c=r(9408),u=r(7761),l=r(8348),d=r(8416);function p(e){return(0,d.Z)("MuiContainer",e)}(0,r(2194).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var f=r(9240),m=r(5893),x=["className","component","disableGutters","fixed","maxWidth"],v=(0,l.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["maxWidth".concat((0,f.Z)(String(r.maxWidth)))],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}})((function(e){var t=e.theme,r=e.ownerState;return(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!r.disableGutters&&(0,n.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,r){var n=t.breakpoints.values[r];return 0!==n&&(e[t.breakpoints.up(r)]={maxWidth:"".concat(n).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,r=e.ownerState;return(0,a.Z)({},"xs"===r.maxWidth&&(0,n.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),r.maxWidth&&"xs"!==r.maxWidth&&(0,n.Z)({},t.breakpoints.up(r.maxWidth),{maxWidth:"".concat(t.breakpoints.values[r.maxWidth]).concat(t.breakpoints.unit)}))})),b=i.forwardRef((function(e,t){var r=(0,u.Z)({props:e,name:"MuiContainer"}),n=r.className,i=r.component,l=void 0===i?"div":i,d=r.disableGutters,b=void 0!==d&&d,g=r.fixed,h=void 0!==g&&g,y=r.maxWidth,Z=void 0===y?"lg":y,w=(0,o.Z)(r,x),E=(0,a.Z)({},r,{component:l,disableGutters:b,fixed:h,maxWidth:Z}),M=function(e){var t=e.classes,r=e.fixed,n=e.disableGutters,o=e.maxWidth,a={root:["root",o&&"maxWidth".concat((0,f.Z)(String(o))),r&&"fixed",n&&"disableGutters"]};return(0,c.Z)(a,p,t)}(E);return(0,m.jsx)(v,(0,a.Z)({as:l,ownerState:E,className:(0,s.Z)(M.root,n),ref:t},w))}))},2102:function(e,t,r){var n=r(2632);e.exports={MDXRenderer:n}},2632:function(e,t,r){var n=r(9100),o=r(319),a=r(9713),i=r(7316),s=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=r(7294),d=r(4983).mdx,p=r(6948).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=i(e,s),c=p(t),f=l.useMemo((function(){if(!r)return null;var e=u({React:l,mdx:d},c),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return l.createElement(f,u({},a))}},422:function(e,t,r){"use strict";var n=r(7294),o=r(9211),a=r(5616),i=r(9308),s=(r(3160),r(3138));t.Z=function(e){var t=e.description,r=e.title;return n.createElement(o.Z,{component:"footer",sx:{bgcolor:"background.paper",py:6}},n.createElement(a.Z,{maxWidth:"lg"},n.createElement(i.Z,{variant:"h6",align:"center",gutterBottom:!0},r),n.createElement(i.Z,{variant:"subtitle1",align:"center",color:"text.secondary",component:"p"},t),n.createElement(s.Z,null)))}},3073:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(7294),o=r(4942),a=r(3366),i=r(7462),s=r(5505),c=r(9408),u=r(7761),l=r(8348),d=r(8416);function p(e){return(0,d.Z)("MuiToolbar",e)}(0,r(2194).Z)("MuiToolbar",["root","gutters","regular","dense"]);var f=r(5893),m=["className","component","disableGutters","variant"],x=(0,l.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,!r.disableGutters&&t.gutters,t[r.variant]]}})((function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)({position:"relative",display:"flex",alignItems:"center"},!r.disableGutters&&(0,o.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),"dense"===r.variant&&{minHeight:48})}),(function(e){var t=e.theme;return"regular"===e.ownerState.variant&&t.mixins.toolbar})),v=n.forwardRef((function(e,t){var r=(0,u.Z)({props:e,name:"MuiToolbar"}),n=r.className,o=r.component,l=void 0===o?"div":o,d=r.disableGutters,v=void 0!==d&&d,b=r.variant,g=void 0===b?"regular":b,h=(0,a.Z)(r,m),y=(0,i.Z)({},r,{component:l,disableGutters:v,variant:g}),Z=function(e){var t=e.classes,r={root:["root",!e.disableGutters&&"gutters",e.variant]};return(0,c.Z)(r,p,t)}(y);return(0,f.jsx)(x,(0,i.Z)({as:l,className:(0,s.Z)(Z.root,n),ref:t,ownerState:y},h))})),b=r(9308),g=r(6190);var h=function(e){var t=e.szsubmenu,r=e.sz2title;return n.createElement(n.Fragment,null,n.createElement(v,{sx:{borderBottom:1,borderColor:"divider"}},n.createElement(b.Z,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,sx:{flex:1}},r)," "),n.createElement(v,{component:"nav",variant:"dense",sx:{justifyContent:"space-between",overflowX:"auto"}},t.map((function(e){return n.createElement(g.Z,{color:"inherit",noWrap:!0,key:e.title,variant:"body2",href:e.url,sx:{p:1,flexShrink:0}},e.title)}))," ")," ")}},3138:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(7294),o=r(9308);function a(e){return n.createElement(o.Z,Object.assign({variant:"body2",color:"text.secondary",align:"center"},e),"Copyright © ",n.createElement("a",{href:"mailto:mailto:HaringeyFixers@gmail.com?subject=Messge from the Website&body=Hi!"},"Haringey Fixers")," ",(new Date).getFullYear(),".")}},3160:function(e,t,r){"use strict";var n=r(7294),o=r(6190),a=r(1597),i=n.forwardRef((function(e,t){return n.createElement(o.Z,Object.assign({component:a.rU,ref:t},e))}));t.Z=i},879:function(e,t,r){"use strict";var n=r(7294),o=r(5414),a=(r(1597),"qwe"),i="sdfsdf",s="sdgsdg";function c(e){e.props;var t=e.description,r=e.lang,c=(e.meta,e.keywords,e.title,"https://www.googletagmanager.com/gtag/js?id="+a),u=t||i;return n.createElement(o.Z,null,n.createElement("title",{itemProp:"name",lang:r},s),n.createElement("meta",{name:"description",content:u}),n.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"}),n.createElement("meta",{property:"og:title",content:s}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{property:"og:description",content:u}),n.createElement("base",{target:"_blank"}),n.createElement("script",{src:c,type:"text/javascript"}))}c.defaultProps={lang:"en",meta:[],keywords:[]},t.Z=c},3026:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(7294),o=r(1597),a=r(2102),i=(r(5414),r(879)),s=(r(422),r(3073)),c=function(e){e.props,e.children;var t=e.location,r=e.szlink,a=(0,o.K2)("3889291973");a.site.siteMetadata;return n.createElement(s.Z,{location:t,sz2title:a.site.siteMetadata.frontPageTitle,szsubmenu:a.site.siteMetadata.submenu,szlink:r})};var u=function(e){var t,r=e.data,o=e.location,s=r.mdx,u=(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title";r.previous,r.next;return n.createElement(c,{location:o,title:u,szlink:""},n.createElement(i.Z,{title:s.frontmatter.title,description:s.frontmatter.description||s.excerpt}),n.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h1",{itemProp:"headline"},"asdasd",s.frontmatter.title),n.createElement("p",null,s.frontmatter.date)),n.createElement(a.MDXRenderer,null,s.body),n.createElement("hr",null),n.createElement("footer",null)))}}}]);
//# sourceMappingURL=component---src-pages-tpl-mdx-posts-js-0b353b4dd7b1e80acd27.js.map