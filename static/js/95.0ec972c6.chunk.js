(this["webpackJsonpshiba-pal"]=this["webpackJsonpshiba-pal"]||[]).push([[95],{2771:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n(3),c=n(29),i=n(33),s=n(373),l=n(2649),r=n(2739),j=n(38),o=n(0);function x(e){var t=e.links,n=e.action,x=e.heading,b=e.moreLink,d=void 0===b?[]:b,u=e.sx,O=Object(c.a)(e,["links","action","heading","moreLink","sx"]);return Object(o.jsxs)(s.a,{sx:Object(a.a)({mb:5},u),children:[Object(o.jsxs)(s.a,{sx:{display:"flex",alignItems:"center"},children:[Object(o.jsxs)(s.a,{sx:{flexGrow:1},children:[Object(o.jsx)(l.a,{variant:"h4",gutterBottom:!0,children:x}),Object(o.jsx)(j.c,Object(a.a)({links:t},O))]}),n&&Object(o.jsx)(s.a,{sx:{flexShrink:0},children:n})]}),Object(o.jsx)(s.a,{sx:{mt:2},children:Object(i.isString)(d)?Object(o.jsx)(r.a,{href:d,target:"_blank",variant:"body2",children:d}):d.map((function(e){return Object(o.jsx)(r.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},2774:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return o}));var a=n(3),c=n(2649),i=n(2766),s=n(2782),l=n(373),r=n(0);function j(e){var t=e.title;return Object(r.jsx)(c.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function o(e){var t=e.title,n=e.sx,c=e.children;return Object(r.jsxs)(i.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(r.jsx)(s.a,{title:t}),Object(r.jsx)(l.a,{sx:Object(a.a)({p:3,minHeight:180},n),children:c})]})}},4218:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return F}));var a=n(16),c=n(3),i=n(29),s=n(1),l=n(3032),r=n.n(l),j=n(4121),o=n.n(j),x=n(4120),b=n.n(x),d=n(4123),u=n.n(d),O=n(4119),m=n.n(O),h=n(4122),p=n.n(h),f=n(8),g=n(2647),v=n(3088),y=n(373),k=n(2737),C=n(2699),V=n(26),w=n(376),z=n(2771),S=n(2774),H=n(0),I={.5:"Useless",1:"Useless+",1.5:"Poor",2:"Poor+",2.5:"Ok",3:"Ok+",3.5:"Good",4:"Good+",4.5:"Excellent",5:"Excellent+"},L={1:{icon:Object(H.jsx)(m.a,{}),label:"Very Dissatisfied"},2:{icon:Object(H.jsx)(b.a,{}),label:"Dissatisfied"},3:{icon:Object(H.jsx)(o.a,{}),label:"Neutral"},4:{icon:Object(H.jsx)(p.a,{}),label:"Satisfied"},5:{icon:Object(H.jsx)(u.a,{}),label:"Very Satisfied"}},B={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}},R=Object(f.a)(w.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}})),W=Object(g.a)({iconFilled:{color:"#FF4842"},iconHover:{color:"#B72136"}})(v.a);function D(e){var t=e.value,n=Object(i.a)(e,["value"]);return Object(H.jsx)("span",Object(c.a)(Object(c.a)({},n),{},{children:L[t].icon}))}function F(){var e=Object(s.useState)(2),t=Object(a.a)(e,2),n=t[0],c=t[1],i=Object(s.useState)(-1),l=Object(a.a)(i,2),j=l[0],o=l[1];return Object(H.jsxs)(R,{title:"Components: Rating | Minimal-UI",children:[Object(H.jsx)(y.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(H.jsx)(k.a,{maxWidth:"lg",children:Object(H.jsx)(z.a,{heading:"Rating",links:[{name:"Components",href:V.d.components},{name:"Rating"}],moreLink:"https://next.material-ui.com/components/rating"})})}),Object(H.jsx)(k.a,{maxWidth:"lg",children:Object(H.jsxs)(C.a,{spacing:3,children:[Object(H.jsxs)(C.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(H.jsx)(S.a,{title:"Controlled",sx:B,children:Object(H.jsx)(v.a,{name:"simple-controlled",value:n,onChange:function(e,t){c(t)}})}),Object(H.jsx)(S.a,{title:"Read only",sx:B,children:Object(H.jsx)(v.a,{name:"read-only",value:n,readOnly:!0})}),Object(H.jsx)(S.a,{title:"Disabled",sx:B,children:Object(H.jsx)(v.a,{name:"disabled",value:n,disabled:!0})})]}),Object(H.jsxs)(C.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(H.jsx)(S.a,{title:"Pristine",sx:B,children:Object(H.jsx)(v.a,{name:"pristine",value:null})}),Object(H.jsx)(S.a,{title:"Custom empty icon",sx:B,children:Object(H.jsx)(v.a,{name:"customized-empty",defaultValue:2,precision:.5})}),Object(H.jsx)(S.a,{title:"Custom icon and color",sx:B,children:Object(H.jsx)(W,{name:"customized-color",defaultValue:2,getLabelText:function(e){return"".concat(e," Heart").concat(1!==e?"s":"")},precision:.5,icon:Object(H.jsx)(r.a,{}),emptyIcon:Object(H.jsx)(r.a,{})})})]}),Object(H.jsxs)(C.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(H.jsx)(S.a,{title:"10 stars",sx:B,children:Object(H.jsx)(v.a,{name:"customized-10",defaultValue:2,max:10})}),Object(H.jsx)(S.a,{title:"Custom icon set",sx:B,children:Object(H.jsx)(v.a,{name:"customized-icons",defaultValue:2,getLabelText:function(e){return L[e].label},IconContainerComponent:D})}),Object(H.jsxs)(S.a,{title:"Hover feedback",sx:B,children:[Object(H.jsx)(v.a,{name:"hover-feedback",value:n,precision:.5,onChange:function(e,t){c(t)},onChangeActive:function(e,t){o(t)}}),null!==n&&Object(H.jsx)(y.a,{sx:{ml:2},children:I[-1!==j?j:n]})]})]}),Object(H.jsxs)(C.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(H.jsxs)(S.a,{title:"Half ratings",sx:B,children:[Object(H.jsx)(v.a,{name:"half-rating",defaultValue:2.5,precision:.5}),Object(H.jsx)("br",{}),Object(H.jsx)(v.a,{name:"half-rating-read",defaultValue:2.5,precision:.5,readOnly:!0})]}),Object(H.jsxs)(S.a,{title:"Sizes",sx:B,children:[Object(H.jsx)(v.a,{name:"size-small",defaultValue:2,size:"small"}),Object(H.jsx)("br",{}),Object(H.jsx)(v.a,{name:"size-medium",defaultValue:2}),Object(H.jsx)("br",{}),Object(H.jsx)(v.a,{name:"size-large",defaultValue:2,size:"large"})]})]})]})})]})}}}]);
//# sourceMappingURL=95.0ec972c6.chunk.js.map