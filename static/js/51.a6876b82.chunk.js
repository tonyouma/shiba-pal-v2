(this["webpackJsonpshiba-pal"]=this["webpackJsonpshiba-pal"]||[]).push([[51],{2771:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(3),n=a(29),o=a(33),i=a(373),c=a(2649),s=a(2739),d=a(38),l=a(0);function u(e){var t=e.links,a=e.action,u=e.heading,b=e.moreLink,p=void 0===b?[]:b,j=e.sx,h=Object(n.a)(e,["links","action","heading","moreLink","sx"]);return Object(l.jsxs)(i.a,{sx:Object(r.a)({mb:5},j),children:[Object(l.jsxs)(i.a,{sx:{display:"flex",alignItems:"center"},children:[Object(l.jsxs)(i.a,{sx:{flexGrow:1},children:[Object(l.jsx)(c.a,{variant:"h4",gutterBottom:!0,children:u}),Object(l.jsx)(d.c,Object(r.a)({links:t},h))]}),a&&Object(l.jsx)(i.a,{sx:{flexShrink:0},children:a})]}),Object(l.jsx)(i.a,{sx:{mt:2},children:Object(o.isString)(p)?Object(l.jsx)(s.a,{href:p,target:"_blank",variant:"body2",children:p}):p.map((function(e){return Object(l.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},2774:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return l}));var r=a(3),n=a(2649),o=a(2766),i=a(2782),c=a(373),s=a(0);function d(e){var t=e.title;return Object(s.jsx)(n.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function l(e){var t=e.title,a=e.sx,n=e.children;return Object(s.jsxs)(o.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(s.jsx)(i.a,{title:t}),Object(s.jsx)(c.a,{sx:Object(r.a)({p:3,minHeight:180},a),children:n})]})}},2782:function(e,t,a){"use strict";var r=a(6),n=a(7),o=a(2),i=a(1),c=(a(12),a(11)),s=a(2697),d=a(2649),l=a(14),u=a(8),b=a(2637),p=a(2698);function j(e){return Object(b.a)("MuiCardHeader",e)}var h=Object(p.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),O=a(0),m=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(o.a)((a={},Object(r.a)(a,"& .".concat(h.title),t.title),Object(r.a)(a,"& .".concat(h.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),x=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),f=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),v=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),g=i.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiCardHeader"}),r=a.action,i=a.avatar,u=a.className,b=a.component,p=void 0===b?"div":b,h=a.disableTypography,g=void 0!==h&&h,y=a.subheader,R=a.subheaderTypographyProps,C=a.title,k=a.titleTypographyProps,A=Object(n.a)(a,["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),M=Object(o.a)({},a,{component:p,disableTypography:g}),N=function(e){var t=e.classes;return Object(s.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},j,t)}(M),P=C;null==P||P.type===d.a||g||(P=Object(O.jsx)(d.a,Object(o.a)({variant:i?"body2":"h5",className:N.title,component:"span",display:"block"},k,{children:P})));var G=y;return null==G||G.type===d.a||g||(G=Object(O.jsx)(d.a,Object(o.a)({variant:i?"body2":"body1",className:N.subheader,color:"text.secondary",component:"span",display:"block"},R,{children:G}))),Object(O.jsxs)(m,Object(o.a)({className:Object(c.a)(N.root,u),as:p,ref:t,styleProps:M},A,{children:[i&&Object(O.jsx)(x,{className:N.avatar,styleProps:M,children:i}),Object(O.jsxs)(v,{className:N.content,styleProps:M,children:[P,G]}),r&&Object(O.jsx)(f,{className:N.action,styleProps:M,children:r})]}))}));t.a=g},3028:function(e,t,a){"use strict";var r=a(1),n=r.createContext({});t.a=n},4149:function(e,t,a){"use strict";var r=a(404),n=a(400),o=a(173),i=a(405);var c=a(16),s=a(6),d=a(7),l=a(2),u=a(1),b=(a(194),a(12),a(11)),p=a(2697),j=a(8),h=a(14),O=a(2752),m=a(2743),x=a(3028),f=a(99),v=a(2637),g=a(2698);function y(e){return Object(v.a)("MuiAccordion",e)}var R=Object(g.a)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),C=a(0),k=Object(j.a)(m.a,{},{name:"MuiAccordion",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return Object(l.a)(Object(s.a)({},"& .".concat(R.region),t.region),t.root,!a.square&&t.rounded,!a.disableGutters&&t.gutters)}})((function(e){var t,a=e.theme,r={duration:a.transitions.duration.shortest};return t={position:"relative",transition:a.transitions.create(["margin"],r),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:a.palette.divider,transition:a.transitions.create(["opacity","background-color"],r)},"&:first-of-type":{"&:before":{display:"none"}}},Object(s.a)(t,"&.".concat(R.expanded),{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}}),Object(s.a)(t,"&.".concat(R.disabled),{backgroundColor:a.palette.action.disabledBackground}),t}),(function(e){var t=e.theme,a=e.styleProps;return Object(l.a)({},!a.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:t.shape.borderRadius,borderTopRightRadius:t.shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:t.shape.borderRadius,borderBottomRightRadius:t.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!a.disableGutters&&Object(s.a)({},"&.".concat(R.expanded),{margin:"16px 0"}))})),A=u.forwardRef((function(e,t){var a,s=Object(h.a)({props:e,name:"MuiAccordion"}),j=s.children,m=s.className,v=s.defaultExpanded,g=void 0!==v&&v,R=s.disabled,A=void 0!==R&&R,M=s.disableGutters,N=void 0!==M&&M,P=s.expanded,G=s.onChange,T=s.square,I=void 0!==T&&T,w=s.TransitionComponent,H=void 0===w?O.a:w,S=s.TransitionProps,B=Object(d.a)(s,["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"]),V=Object(f.a)({controlled:P,default:g,name:"Accordion",state:"expanded"}),W=Object(c.a)(V,2),q=W[0],L=W[1],D=u.useCallback((function(e){L(!q),G&&G(e,!q)}),[q,G,L]),E=u.Children.toArray(j),J=(a=E,Object(r.a)(a)||Object(n.a)(a)||Object(o.a)(a)||Object(i.a)()),_=J[0],U=J.slice(1),z=u.useMemo((function(){return{expanded:q,disabled:A,disableGutters:N,toggle:D}}),[q,A,N,D]),F=Object(l.a)({},s,{square:I,disabled:A,disableGutters:N,expanded:q}),K=function(e){var t=e.classes,a={root:["root",!e.square&&"rounded",e.expanded&&"expanded",e.disabled&&"disabled",!e.disableGutters&&"gutters"],region:["region"]};return Object(p.a)(a,y,t)}(F);return Object(C.jsxs)(k,Object(l.a)({className:Object(b.a)(K.root,m),ref:t,styleProps:F,square:I},B,{children:[Object(C.jsx)(x.a.Provider,{value:z,children:_}),Object(C.jsx)(H,Object(l.a)({in:q,timeout:"auto"},S,{children:Object(C.jsx)("div",{"aria-labelledby":_.props.id,id:_.props["aria-controls"],role:"region",className:K.region,children:U})}))]}))}));t.a=A},4154:function(e,t,a){"use strict";var r=a(6),n=a(7),o=a(2),i=a(1),c=(a(12),a(11)),s=a(2697),d=a(8),l=a(14),u=a(2720),b=a(3028),p=a(2637),j=a(2698);function h(e){return Object(p.a)("MuiAccordionSummary",e)}var O=Object(j.a)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),m=a(0),x=Object(d.a)(u.a,{},{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,a=e.theme,n=e.styleProps,i={duration:a.transitions.duration.shortest};return Object(o.a)((t={display:"flex",minHeight:48,padding:a.spacing(0,2),transition:a.transitions.create(["min-height","background-color"],i)},Object(r.a)(t,"&.".concat(O.focusVisible),{backgroundColor:a.palette.action.focus}),Object(r.a)(t,"&.".concat(O.disabled),{opacity:a.palette.action.disabledOpacity}),Object(r.a)(t,"&:hover:not(.".concat(O.disabled,")"),{cursor:"pointer"}),t),!n.disableGutters&&Object(r.a)({},"&.".concat(O.expanded),{minHeight:64}))})),f=Object(d.a)("div",{},{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(e,t){return t.content}})((function(e){var t=e.theme,a=e.styleProps;return Object(o.a)({display:"flex",flexGrow:1,margin:"12px 0"},!a.disableGutters&&Object(r.a)({transition:t.transitions.create(["margin"],{duration:t.transitions.duration.shortest})},"&.".concat(O.expanded),{margin:"20px 0"}))})),v=Object(d.a)("div",{},{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(e,t){return t.expandIconWrapper}})((function(e){var t=e.theme;return Object(r.a)({display:"flex",color:t.palette.action.active,transform:"rotate(0deg)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})},"&.".concat(O.expanded),{transform:"rotate(180deg)"})})),g=i.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiAccordionSummary"}),r=a.children,d=a.className,u=a.expandIcon,p=a.focusVisibleClassName,j=a.onClick,O=Object(n.a)(a,["children","className","expandIcon","focusVisibleClassName","onClick"]),g=i.useContext(b.a),y=g.disabled,R=void 0!==y&&y,C=g.disableGutters,k=g.expanded,A=g.toggle,M=Object(o.a)({},a,{expanded:k,disabled:R,disableGutters:C}),N=function(e){var t=e.classes,a=e.expanded,r=e.disabled,n=e.disableGutters,o={root:["root",a&&"expanded",r&&"disabled",!n&&"gutters"],focusVisible:["focusVisible"],content:["content",a&&"expanded",!n&&"contentGutters"],expandIconWrapper:["expandIconWrapper",a&&"expanded"]};return Object(s.a)(o,h,t)}(M);return Object(m.jsxs)(x,Object(o.a)({focusRipple:!1,disableRipple:!0,disabled:R,component:"div","aria-expanded":k,className:Object(c.a)(N.root,d),focusVisibleClassName:Object(c.a)(N.focusVisible,p),onClick:function(e){A&&A(e),j&&j(e)},ref:t,styleProps:M},O,{children:[Object(m.jsx)(f,{className:N.content,styleProps:M,children:r}),u&&Object(m.jsx)(v,{className:N.expandIconWrapper,styleProps:M,children:u})]}))}));t.a=g},4155:function(e,t,a){"use strict";var r=a(2),n=a(7),o=a(1),i=(a(12),a(11)),c=a(2697),s=a(8),d=a(14),l=a(2637),u=a(2698);function b(e){return Object(l.a)("MuiAccordionDetails",e)}Object(u.a)("MuiAccordionDetails",["root"]);var p=a(0),j=Object(s.a)("div",{},{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{padding:e.theme.spacing(1,2,2)}})),h=o.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiAccordionDetails"}),o=a.className,s=Object(n.a)(a,["className"]),l=Object(r.a)({},a),u=function(e){var t=e.classes;return Object(c.a)({root:["root"]},b,t)}(l);return Object(p.jsx)(j,Object(r.a)({className:Object(i.a)(u.root,o),ref:t,styleProps:l},s))}));t.a=h},4193:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));var r=a(16),n=a(21),o=a(4),i=a.n(o),c=a(27),s=a(1),d=a(163),l=a.n(d),u=a(8),b=a(373),p=a(2737),j=a(4149),h=a(4154),O=a(2649),m=a(4155),x=a(376),f=a(26),v=a(2771),g=a(2774),y=a(0),R=Object(n.a)(Array(4)).map((function(e,t){var a=t+1;return{value:"panel".concat(a),heading:"Accordion ".concat(a),subHeading:i.a.lorem.slug(),detail:i.a.lorem.lines()}})),C=Object(u.a)(x.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function k(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(y.jsxs)(C,{title:"Components: Accordion | Minimal-UI",children:[Object(y.jsx)(b.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(y.jsx)(p.a,{maxWidth:"lg",children:Object(y.jsx)(v.a,{heading:"Accordion",links:[{name:"Components",href:f.d.components},{name:"Accordion"}],moreLink:"https://next.material-ui.com/components/accordion"})})}),Object(y.jsxs)(p.a,{children:[Object(y.jsx)(g.a,{title:"Simple",sx:{mb:5},children:R.map((function(e,t){return Object(y.jsxs)(j.a,{disabled:3===t,children:[Object(y.jsx)(h.a,{expandIcon:Object(y.jsx)(c.Icon,{icon:l.a,width:20,height:20}),children:Object(y.jsx)(O.a,{variant:"subtitle1",children:e.heading})}),Object(y.jsx)(m.a,{children:Object(y.jsx)(O.a,{children:e.detail})})]},e.value)}))}),Object(y.jsx)(g.a,{title:"Controlled",children:R.map((function(e,t){return Object(y.jsxs)(j.a,{disabled:3===t,expanded:a===e.value,onChange:(r=e.value,function(e,t){n(!!t&&r)}),children:[Object(y.jsxs)(h.a,{expandIcon:Object(y.jsx)(c.Icon,{icon:l.a,width:20,height:20}),children:[Object(y.jsx)(O.a,{variant:"subtitle1",sx:{width:"33%",flexShrink:0},children:e.heading}),Object(y.jsx)(O.a,{sx:{color:"text.secondary"},children:e.subHeading})]}),Object(y.jsx)(m.a,{children:Object(y.jsx)(O.a,{children:e.detail})})]},e.value);var r}))})]})]})}}}]);
//# sourceMappingURL=51.a6876b82.chunk.js.map