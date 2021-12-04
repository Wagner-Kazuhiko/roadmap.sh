(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[911],{1739:function(e,r,a){"use strict";a.d(r,{aG:function(){return v},gN:function(){return h},At:function(){return f}});var n=a(2846),t=a(5031),i=a(6450),s=a(7294);function c(){return(c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e,r){if(null==e)return{};var a,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}var o=["spacing"],u=["isCurrentPage","as","className","href"],p=["isCurrentPage","separator","isLastChild","spacing","children","className"],d=["children","spacing","separator","className"],m=(0,n.Gp)((function(e,r){var a=e.spacing,t=l(e,o),i=c({mx:a},(0,n.yK)().separator);return s.createElement(n.m$.span,c({ref:r,role:"presentation"},t,{__css:i}))}));t.Ts&&(m.displayName="BreadcrumbSeparator");var f=(0,n.Gp)((function(e,r){var a=e.isCurrentPage,i=e.as,o=e.className,p=e.href,d=l(e,u),m=(0,n.yK)(),f=c({ref:r,as:i,className:(0,t.cx)("chakra-breadcrumb__link",o)},d);return a?s.createElement(n.m$.span,c({"aria-current":"page",__css:m.link},f)):s.createElement(n.m$.a,c({__css:m.link,href:p},f))}));t.Ts&&(f.displayName="BreadcrumbLink");var h=(0,n.Gp)((function(e,r){var a=e.isCurrentPage,o=e.separator,u=e.isLastChild,d=e.spacing,h=e.children,v=e.className,g=l(e,p),_=(0,i.WR)(h).map((function(e){return e.type===f?s.cloneElement(e,{isCurrentPage:a}):e.type===m?s.cloneElement(e,{spacing:d,children:e.props.children||o}):e})),x=c({display:"inline-flex",alignItems:"center"},(0,n.yK)().item),b=(0,t.cx)("chakra-breadcrumb__list-item",v);return s.createElement(n.m$.li,c({ref:r,className:b},g,{__css:x}),_,!u&&s.createElement(m,{spacing:d},o))}));t.Ts&&(h.displayName="BreadcrumbItem");var v=(0,n.Gp)((function(e,r){var a=(0,n.jC)("Breadcrumb",e),o=(0,n.Lr)(e),u=o.children,p=o.spacing,m=void 0===p?"0.5rem":p,f=o.separator,h=void 0===f?"/":f,v=o.className,g=l(o,d),_=(0,i.WR)(u),x=_.length,b=_.map((function(e,r){return s.cloneElement(e,{separator:h,spacing:m,isLastChild:x===r+1})})),j=(0,t.cx)("chakra-breadcrumb",v);return s.createElement(n.m$.nav,c({ref:r,"aria-label":"breadcrumb",className:j,__css:a.container},g),s.createElement(n.Fo,{value:a},s.createElement(n.m$.ol,{className:"chakra-breadcrumb__list"},b)))}));t.Ts&&(v.displayName="Breadcrumb")},5553:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[roadmap]/[group]",function(){return a(3626)}])},3626:function(e,r,a){"use strict";a.r(r),a.d(r,{__N_SSG:function(){return h},default:function(){return v}});var n=a(5893),t=a(1739),i=a(8527),s=a(2438),c=a(1832),l=a(600),o=a(6673),u=a(8025),p=a(202),d=(a(7294),a(9876));function m(e){var r=e.roadmap,t=e.group;if(!r.contentPathsFilePath)return null;var i=r.contentPathsFilePath.replace(/^\//,""),s=(a(9280)("./".concat(i))[t]||"").replace(/^\//,""),c=a(9280)("./".concat(s)).default;return(0,n.jsx)(u.Z,{children:(0,n.jsx)(c,{})})}function f(e){var r=e.roadmap,a=e.group.split(":");return(0,n.jsxs)(t.aG,{fontWeight:"medium",fontSize:"sm",separator:(0,n.jsx)(d.XC,{color:"gray.500"}),children:[(0,n.jsx)(t.gN,{children:(0,n.jsx)(t.At,{color:"blue.500",href:"/".concat(r.id),children:r.featuredTitle})}),a.map((function(e,i){return(0,n.jsx)(t.gN,{isCurrentPage:i===a.length-1,children:(0,n.jsx)(t.At,{textTransform:"capitalize",color:"blue.500",href:"/".concat(r.id,"/").concat(a.slice(0,i+1).join(":")),children:e.split("-").join(" ")})},e)}))]})}var h=!0;function v(e){var r,a,t=e.roadmap,u=e.group,d=e.isOutlet;return void 0!==d&&d?(0,n.jsx)(m,{roadmap:t,group:u}):(0,n.jsxs)(i.xu,{bg:"white",minH:"100vh",children:[(0,n.jsx)(s.e,{}),(0,n.jsx)(p.Z,{title:(null===t||void 0===t||null===(r=t.seo)||void 0===r?void 0:r.title)||t.title,description:(null===t||void 0===t||null===(a=t.seo)||void 0===a?void 0:a.description)||t.description,keywords:(null===t||void 0===t?void 0:t.seo.keywords)||[]}),(0,n.jsxs)(i.W2,{my:"60px",maxW:"container.md",position:"relative",children:[(0,n.jsx)(f,{roadmap:t,group:u}),(0,n.jsx)(m,{roadmap:t,group:u})]}),(0,n.jsx)(c.z,{}),(0,n.jsx)(l.q,{}),(0,n.jsx)(o.$,{})]})}}},function(e){e.O(0,[709,22,515,231,70,636,280,774,888,179],(function(){return r=5553,e(e.s=r);var r}));var r=e.O();_N_E=r}]);