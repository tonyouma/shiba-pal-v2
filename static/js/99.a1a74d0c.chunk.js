(this["webpackJsonpshiba-pal"]=this["webpackJsonpshiba-pal"]||[]).push([[99],{2771:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(3),c=n(29),r=n(33),j=n(373),i=n(2649),s=n(2739),l=n(38),o=n(0);function b(e){var t=e.links,n=e.action,b=e.heading,u=e.moreLink,O=void 0===u?[]:u,x=e.sx,d=Object(c.a)(e,["links","action","heading","moreLink","sx"]);return Object(o.jsxs)(j.a,{sx:Object(a.a)({mb:5},x),children:[Object(o.jsxs)(j.a,{sx:{display:"flex",alignItems:"center"},children:[Object(o.jsxs)(j.a,{sx:{flexGrow:1},children:[Object(o.jsx)(i.a,{variant:"h4",gutterBottom:!0,children:b}),Object(o.jsx)(l.c,Object(a.a)({links:t},d))]}),n&&Object(o.jsx)(j.a,{sx:{flexShrink:0},children:n})]}),Object(o.jsx)(j.a,{sx:{mt:2},children:Object(r.isString)(O)?Object(o.jsx)(s.a,{href:O,target:"_blank",variant:"body2",children:O}):O.map((function(e){return Object(o.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},2774:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return o}));var a=n(3),c=n(2649),r=n(2766),j=n(2782),i=n(373),s=n(0);function l(e){var t=e.title;return Object(s.jsx)(c.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function o(e){var t=e.title,n=e.sx,c=e.children;return Object(s.jsxs)(r.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(s.jsx)(j.a,{title:t}),Object(s.jsx)(i.a,{sx:Object(a.a)({p:3,minHeight:180},n),children:c})]})}},4259:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return U}));var a=n(16),c=n(1),r=n(2991),j=n(2992),i=n(3042),s=n(8),l=n(373),o=n(2737),b=n(4284),u=n(26),O=n(376),x=n(2771),d=n(3),h=n(4118),m=n(2699),p=n(2761),f=n(4203),g=n(4204),v=n(4205),C=n(4206),I=n(2774),w=n(0);function k(){var e=Object(c.useState)(new Date),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(w.jsxs)(m.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(w.jsxs)(m.a,{spacing:3,sx:{width:"100%"},children:[Object(w.jsxs)(I.a,{title:"Basic",children:[Object(w.jsx)(f.a,{label:"For desktop",value:n,minDate:new Date("2017-01-01"),onChange:function(e){r(e)},renderInput:function(e){return Object(w.jsx)(p.a,Object(d.a)(Object(d.a)({fullWidth:!0},e),{},{margin:"normal"}))}}),Object(w.jsx)(g.a,{orientation:"portrait",label:"For mobile",value:n,onChange:function(e){r(e)},renderInput:function(e){return Object(w.jsx)(p.a,Object(d.a)(Object(d.a)({fullWidth:!0},e),{},{margin:"normal"}))}})]}),Object(w.jsx)(I.a,{title:"Static mode",children:Object(w.jsx)(v.a,{orientation:"landscape",openTo:"day",value:n,shouldDisableDate:h.a,onChange:function(e){r(e)},renderInput:function(e){return Object(w.jsx)(p.a,Object(d.a)({},e))}})})]}),Object(w.jsxs)(I.a,{title:"Views playground",children:[Object(w.jsx)(C.a,{views:["year"],label:"Year only",value:n,onChange:function(e){r(e)},renderInput:function(e){return Object(w.jsx)(p.a,Object(d.a)(Object(d.a)({},e),{},{fullWidth:!0,margin:"normal",helperText:null}))}}),Object(w.jsx)(C.a,{views:["year","month"],label:"Year and Month",minDate:new Date("2012-03-01"),maxDate:new Date("2023-06-01"),value:n,onChange:function(e){r(e)},renderInput:function(e){return Object(w.jsx)(p.a,Object(d.a)(Object(d.a)({},e),{},{fullWidth:!0,margin:"normal",helperText:null}))}}),Object(w.jsx)(C.a,{openTo:"year",views:["year","month","day"],label:"Year, month and date",value:n,onChange:function(e){r(e)},renderInput:function(e){return Object(w.jsx)(p.a,Object(d.a)(Object(d.a)({},e),{},{fullWidth:!0,margin:"normal",helperText:null}))}}),Object(w.jsx)(C.a,{views:["day","month","year"],label:"Invert the order of views",value:n,onChange:function(e){r(e)},renderInput:function(e){return Object(w.jsx)(p.a,Object(d.a)(Object(d.a)({},e),{},{fullWidth:!0,margin:"normal",helperText:null}))}}),Object(w.jsx)(C.a,{views:["day"],label:"Just date",value:n,onChange:function(e){r(e)},renderInput:function(e){return Object(w.jsx)(p.a,Object(d.a)(Object(d.a)({},e),{},{fullWidth:!0,margin:"normal",helperText:null}))}})]})]})}var W=n(4207),y=n(4209),D=n(4208),T=n(4210);function S(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(w.jsxs)(m.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(w.jsxs)(m.a,{spacing:3,sx:{width:1},children:[Object(w.jsxs)(I.a,{title:"Basic",children:[Object(w.jsx)(W.a,{label:"12 hours",value:n,onChange:function(e){r(e)},renderInput:function(e){return Object(w.jsx)(p.a,Object(d.a)(Object(d.a)({fullWidth:!0},e),{},{margin:"normal"}))}}),Object(w.jsx)(W.a,{ampm:!1,label:"24 hours",value:n,onChange:function(e){r(e)},renderInput:function(e){return Object(w.jsx)(p.a,Object(d.a)(Object(d.a)({fullWidth:!0},e),{},{margin:"normal"}))}})]}),Object(w.jsxs)(I.a,{title:"Responsiveness",children:[Object(w.jsx)(y.a,{orientation:"portrait",label:"For mobile",value:n,onChange:function(e){r(e)},renderInput:function(e){return Object(w.jsx)(p.a,Object(d.a)(Object(d.a)({},e),{},{fullWidth:!0,margin:"normal"}))}}),Object(w.jsx)(D.a,{label:"For desktop",value:n,onChange:function(e){r(e)},renderInput:function(e){return Object(w.jsx)(p.a,Object(d.a)(Object(d.a)({},e),{},{margin:"normal",fullWidth:!0}))}}),Object(w.jsx)(W.a,{value:n,onChange:r,renderInput:function(e){return Object(w.jsx)(p.a,Object(d.a)(Object(d.a)({},e),{},{margin:"normal",fullWidth:!0}))}})]})]}),Object(w.jsx)(I.a,{title:"Static mode",children:Object(w.jsxs)(m.a,{spacing:3,children:[Object(w.jsx)(T.a,{orientation:"portrait",displayStaticWrapperAs:"mobile",value:n,onChange:function(e){r(e)},renderInput:function(e){return Object(w.jsx)(p.a,Object(d.a)({},e))}}),Object(w.jsx)(T.a,{ampm:!0,orientation:"landscape",openTo:"minutes",value:n,onChange:function(e){r(e)},renderInput:function(e){return Object(w.jsx)(p.a,Object(d.a)({},e))}})]})})]})}var F=n(4211),B=n(4185),R=n(4212);function A(){var e=Object(c.useState)(new Date),t=Object(a.a)(e,2),n=t[0],r=t[1],j=Object(c.useState)(new Date("2018-01-01T00:00:00.000Z")),i=Object(a.a)(j,2),s=i[0],l=i[1];return Object(w.jsxs)(m.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(w.jsx)(I.a,{title:"Basic",children:Object(w.jsx)(F.a,{renderInput:function(e){return Object(w.jsx)(p.a,Object(d.a)(Object(d.a)({},e),{},{fullWidth:!0}))},label:"DateTimePicker",value:n,onChange:r})}),Object(w.jsxs)(I.a,{title:"Responsiveness",children:[Object(w.jsx)(B.a,{value:s,onChange:function(e){l(e)},renderInput:function(e){return Object(w.jsx)(p.a,Object(d.a)(Object(d.a)({},e),{},{fullWidth:!0,margin:"normal"}))}}),Object(w.jsx)(R.a,{value:s,onChange:function(e){l(e)},renderInput:function(e){return Object(w.jsx)(p.a,Object(d.a)(Object(d.a)({},e),{},{margin:"normal",fullWidth:!0}))}}),Object(w.jsx)(F.a,{value:s,onChange:function(e){l(e)},renderInput:function(e){return Object(w.jsx)(p.a,Object(d.a)(Object(d.a)({},e),{},{margin:"normal",fullWidth:!0}))}})]})]})}var J=n(2649),L=n(4289),M=n(4213),P=n(4214),Y=n(4215);function _(){var e=Object(c.useState)([null,null]),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(w.jsxs)(m.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(w.jsxs)(m.a,{spacing:3,sx:{width:1},children:[Object(w.jsx)(I.a,{title:"Basic",children:Object(w.jsx)(L.a,{startText:"Check-in",endText:"Check-out",value:n,onChange:function(e){r(e)},renderInput:function(e,t){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(p.a,Object(d.a)({},e)),Object(w.jsx)(l.a,{sx:{mx:2},children:"to"}),Object(w.jsx)(p.a,Object(d.a)({},t))]})}})}),Object(w.jsxs)(I.a,{title:"Responsiveness",children:[Object(w.jsx)(M.a,{startText:"Mobile start",value:n,onChange:function(e){r(e)},renderInput:function(e,t){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(p.a,Object(d.a)({},e)),Object(w.jsx)(l.a,{sx:{mx:2},children:" to "}),Object(w.jsx)(p.a,Object(d.a)({},t))]})}}),Object(w.jsx)("br",{}),Object(w.jsx)(P.a,{startText:"Desktop start",value:n,onChange:function(e){r(e)},renderInput:function(e,t){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(p.a,Object(d.a)({},e)),Object(w.jsx)(l.a,{sx:{mx:2},children:" to "}),Object(w.jsx)(p.a,Object(d.a)({},t))]})}})]}),Object(w.jsxs)(I.a,{title:"Different number of months",children:[Object(w.jsx)(J.a,{gutterBottom:!0,children:" 1 calendar "}),Object(w.jsx)(L.a,{calendars:1,value:n,onChange:function(e){r(e)},renderInput:function(e,t){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(p.a,Object(d.a)({},e)),Object(w.jsx)(l.a,{sx:{mx:2},children:"to"}),Object(w.jsx)(p.a,Object(d.a)({},t))]})}}),Object(w.jsx)("br",{}),Object(w.jsx)(J.a,{gutterBottom:!0,children:" 2 calendars"}),Object(w.jsx)(L.a,{calendars:2,value:n,onChange:function(e){r(e)},renderInput:function(e,t){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(p.a,Object(d.a)({},e)),Object(w.jsx)(l.a,{sx:{mx:2},children:"to"}),Object(w.jsx)(p.a,Object(d.a)({},t))]})}}),Object(w.jsx)("br",{}),Object(w.jsx)(J.a,{gutterBottom:!0,children:" 3 calendars"}),Object(w.jsx)(L.a,{calendars:3,value:n,onChange:function(e){r(e)},renderInput:function(e,t){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(p.a,Object(d.a)({},e)),Object(w.jsx)(l.a,{sx:{mx:2},children:"to"}),Object(w.jsx)(p.a,Object(d.a)({},t))]})}})]})]}),Object(w.jsx)(I.a,{title:"Static mode",children:Object(w.jsx)(Y.a,{displayStaticWrapperAs:"desktop",value:n,onChange:function(e){r(e)},renderInput:function(e,t){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(p.a,Object(d.a)(Object(d.a)({},e),{},{variant:"standard"})),Object(w.jsx)(l.a,{sx:{mx:2},children:"to"}),Object(w.jsx)(p.a,Object(d.a)(Object(d.a)({},t),{},{variant:"standard"}))]})}})})]})}var G=[{name:"Date",component:Object(w.jsx)(k,{})},{name:"DateTime",component:Object(w.jsx)(A,{})},{name:"DateRange",component:Object(w.jsx)(_,{})},{name:"Time",component:Object(w.jsx)(S,{})}],H=Object(s.a)(O.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function U(){var e=Object(c.useState)("1"),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(w.jsxs)(H,{title:"Components: Pickers | Minimal-UI",children:[Object(w.jsx)(l.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(w.jsx)(o.a,{maxWidth:"lg",children:Object(w.jsx)(x.a,{heading:"Date / Time pickers",links:[{name:"Components",href:u.d.components},{name:"Date / Time pickers"}],moreLink:"https://next.material-ui.com/components/pickers"})})}),Object(w.jsx)(o.a,{maxWidth:"lg",children:Object(w.jsxs)(r.a,{value:n,children:[Object(w.jsx)(j.a,{onChange:function(e,t){s(t)},"aria-label":"lab API tabs example",children:G.map((function(e,t){return Object(w.jsx)(b.a,{disableRipple:!0,label:e.name,value:String(t+1)},e.name)}))}),G.map((function(e,t){return Object(w.jsx)(i.a,{value:String(t+1),sx:{mt:5},children:e.component},e.name)}))]})})]})}}}]);
//# sourceMappingURL=99.a1a74d0c.chunk.js.map