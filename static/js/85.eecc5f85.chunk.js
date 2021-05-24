(this["webpackJsonpshiba-pal"]=this["webpackJsonpshiba-pal"]||[]).push([[85],{2771:function(e,a,o){"use strict";o.d(a,"a",(function(){return h}));var l=o(3),t=o(29),n=o(33),i=o(373),r=o(2649),c=o(2739),d=o(38),b=o(0);function h(e){var a=e.links,o=e.action,h=e.heading,p=e.moreLink,s=void 0===p?[]:p,u=e.sx,y=Object(t.a)(e,["links","action","heading","moreLink","sx"]);return Object(b.jsxs)(i.a,{sx:Object(l.a)({mb:5},u),children:[Object(b.jsxs)(i.a,{sx:{display:"flex",alignItems:"center"},children:[Object(b.jsxs)(i.a,{sx:{flexGrow:1},children:[Object(b.jsx)(r.a,{variant:"h4",gutterBottom:!0,children:h}),Object(b.jsx)(d.c,Object(l.a)({links:a},y))]}),o&&Object(b.jsx)(i.a,{sx:{flexShrink:0},children:o})]}),Object(b.jsx)(i.a,{sx:{mt:2},children:Object(n.isString)(s)?Object(b.jsx)(c.a,{href:s,target:"_blank",variant:"body2",children:s}):s.map((function(e){return Object(b.jsx)(c.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},2774:function(e,a,o){"use strict";o.d(a,"b",(function(){return d})),o.d(a,"a",(function(){return b}));var l=o(3),t=o(2649),n=o(2766),i=o(2782),r=o(373),c=o(0);function d(e){var a=e.title;return Object(c.jsx)(t.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:a})}function b(e){var a=e.title,o=e.sx,t=e.children;return Object(c.jsxs)(n.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[a&&Object(c.jsx)(i.a,{title:a}),Object(c.jsx)(r.a,{sx:Object(l.a)({p:3,minHeight:180},o),children:t})]})}},2782:function(e,a,o){"use strict";var l=o(6),t=o(7),n=o(2),i=o(1),r=(o(12),o(11)),c=o(2697),d=o(2649),b=o(14),h=o(8),p=o(2637),s=o(2698);function u(e){return Object(p.a)("MuiCardHeader",e)}var y=Object(s.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),j=o(0),m=Object(h.a)("div",{},{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,a){var o;return Object(n.a)((o={},Object(l.a)(o,"& .".concat(y.title),a.title),Object(l.a)(o,"& .".concat(y.subheader),a.subheader),o),a.root)}})({display:"flex",alignItems:"center",padding:16}),O=Object(h.a)("div",{},{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,a){return a.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),f=Object(h.a)("div",{},{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,a){return a.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),S=Object(h.a)("div",{},{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,a){return a.content}})({flex:"1 1 auto"}),g=i.forwardRef((function(e,a){var o=Object(b.a)({props:e,name:"MuiCardHeader"}),l=o.action,i=o.avatar,h=o.className,p=o.component,s=void 0===p?"div":p,y=o.disableTypography,g=void 0!==y&&y,x=o.subheader,T=o.subheaderTypographyProps,M=o.title,C=o.titleTypographyProps,v=Object(t.a)(o,["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),I=Object(n.a)({},o,{component:s,disableTypography:g}),A=function(e){var a=e.classes;return Object(c.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},u,a)}(I),G=M;null==G||G.type===d.a||g||(G=Object(j.jsx)(d.a,Object(n.a)({variant:i?"body2":"h5",className:A.title,component:"span",display:"block"},C,{children:G})));var P=x;return null==P||P.type===d.a||g||(P=Object(j.jsx)(d.a,Object(n.a)({variant:i?"body2":"body1",className:A.subheader,color:"text.secondary",component:"span",display:"block"},T,{children:P}))),Object(j.jsxs)(m,Object(n.a)({className:Object(r.a)(A.root,h),as:s,ref:a,styleProps:I},v,{children:[i&&Object(j.jsx)(O,{className:A.avatar,styleProps:I,children:i}),Object(j.jsxs)(S,{className:A.content,styleProps:I,children:[G,P]}),l&&Object(j.jsx)(f,{className:A.action,styleProps:I,children:l})]}))}));a.a=g},4194:function(e,a,o){"use strict";o.r(a),o.d(a,"default",(function(){return S}));var l=o(3),t=o(16),n=o(1),i=o(8),r=o(373),c=o(2737),d=o(2729),b=o(3234),h=o(2761),p=o(2649),s=o(2721),u=o(26),y=o(376),j=o(2771),m=o(2774),O=o(0),f=Object(i.a)(y.a)((function(e){var a=e.theme;return{paddingTop:a.spacing(11),paddingBottom:a.spacing(15)}}));function S(){var e=Object(n.useState)(g[0]),a=Object(t.a)(e,2),o=a[0],i=a[1],y=Object(n.useState)(""),S=Object(t.a)(y,2),M=S[0],C=S[1];return Object(O.jsxs)(f,{title:"Components: Autocomplete | Minimal-UI",children:[Object(O.jsx)(r.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(O.jsx)(c.a,{maxWidth:"lg",children:Object(O.jsx)(j.a,{heading:"Autocomplete",links:[{name:"Components",href:u.d.components},{name:"Autocomplete"}],moreLink:"https://next.material-ui.com/components/autocomplete"})})}),Object(O.jsx)(c.a,{maxWidth:"lg",children:Object(O.jsxs)(d.a,{container:!0,spacing:3,children:[Object(O.jsx)(d.a,{item:!0,xs:12,md:4,children:Object(O.jsx)(m.a,{title:"Combo box",children:Object(O.jsx)(b.a,{fullWidth:!0,options:x,getOptionLabel:function(e){return e.title},renderInput:function(e){return Object(O.jsx)(h.a,Object(l.a)(Object(l.a)({},e),{},{label:"Combo box",margin:"none"}))}})})}),Object(O.jsx)(d.a,{item:!0,xs:12,md:4,children:Object(O.jsx)(m.a,{title:"Country Select",children:Object(O.jsx)(r.a,{sx:{width:"100%","& .MuiAutocomplete-option":{typography:"body2","& > span":{mr:1,fontSize:20}}},children:Object(O.jsx)(b.a,{fullWidth:!0,disablePortal:!0,autoHighlight:!0,options:T,getOptionLabel:function(e){return e.label},renderOption:function(e,a){return Object(O.jsxs)("li",Object(l.a)(Object(l.a)({},e),{},{children:[Object(O.jsx)("span",{children:(o=a.code,"undefined"!==typeof String.fromCodePoint?o.toUpperCase().replace(/./g,(function(e){return String.fromCodePoint(e.charCodeAt(0)+127397)})):o)}),a.label," (",a.code,") +",a.phone]}));var o},renderInput:function(e){return Object(O.jsx)(h.a,Object(l.a)(Object(l.a)({},e),{},{label:"Choose a country",inputProps:Object(l.a)(Object(l.a)({},e.inputProps),{},{autoComplete:"new-password"})}))}})})})}),Object(O.jsx)(d.a,{item:!0,xs:12,md:4,children:Object(O.jsx)(m.a,{title:" Controllable states",sx:{flexDirection:"column"},children:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(b.a,{fullWidth:!0,value:o,options:g,onChange:function(e,a){i(a)},inputValue:M,onInputChange:function(e,a){C(a)},renderInput:function(e){return Object(O.jsx)(h.a,Object(l.a)(Object(l.a)({},e),{},{label:"Controllable"}))}}),Object(O.jsx)(p.a,{variant:"body2",sx:{mt:2},children:"value: ".concat(null!==o?"'".concat(o,"'"):"null")}),Object(O.jsx)(p.a,{variant:"body2",children:"inputValue: '".concat(M,"'")})]})})}),Object(O.jsx)(d.a,{item:!0,xs:12,md:4,children:Object(O.jsxs)(m.a,{title:"Free solo",children:[Object(O.jsx)(b.a,{fullWidth:!0,freeSolo:!0,options:x.map((function(e){return e.title})),renderInput:function(e){return Object(O.jsx)(h.a,Object(l.a)(Object(l.a)({},e),{},{label:"freeSolo"}))},sx:{mb:2}}),Object(O.jsx)(b.a,{fullWidth:!0,freeSolo:!0,disableClearable:!0,options:x.map((function(e){return e.title})),renderInput:function(e){return Object(O.jsx)(h.a,Object(l.a)(Object(l.a)({},e),{},{label:"Search input",InputProps:Object(l.a)(Object(l.a)({},e.InputProps),{},{type:"search"})}))}})]})}),Object(O.jsx)(d.a,{item:!0,xs:12,md:4,children:Object(O.jsx)(m.a,{title:"Multiple Values",children:Object(O.jsx)(b.a,{multiple:!0,fullWidth:!0,options:x,getOptionLabel:function(e){return e.title},defaultValue:[x[13]],filterSelectedOptions:!0,renderInput:function(e){return Object(O.jsx)(h.a,Object(l.a)(Object(l.a)({},e),{},{label:"filterSelectedOptions",placeholder:"Favorites"}))}})})}),Object(O.jsx)(d.a,{item:!0,xs:12,md:4,children:Object(O.jsx)(m.a,{title:"Checkboxes",children:Object(O.jsx)(b.a,{fullWidth:!0,multiple:!0,options:x,disableCloseOnSelect:!0,getOptionLabel:function(e){return e.title},renderOption:function(e,a,o){var t=o.selected;return Object(O.jsxs)("li",Object(l.a)(Object(l.a)({},e),{},{children:[Object(O.jsx)(s.a,{checked:t}),a.title]}))},renderInput:function(e){return Object(O.jsx)(h.a,Object(l.a)(Object(l.a)({},e),{},{label:"Checkboxes",placeholder:"Favorites"}))}})})}),Object(O.jsx)(d.a,{item:!0,xs:12,md:4,children:Object(O.jsx)(m.a,{title:"Sizes",children:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(b.a,{fullWidth:!0,options:x,getOptionLabel:function(e){return e.title},defaultValue:x[13],renderInput:function(e){return Object(O.jsx)(h.a,Object(l.a)(Object(l.a)({},e),{},{label:"Size Medium",placeholder:"Favorites"}))}}),Object(O.jsx)("br",{}),Object(O.jsx)(b.a,{fullWidth:!0,multiple:!0,size:"small",options:x,getOptionLabel:function(e){return e.title},defaultValue:[x[13]],renderInput:function(e){return Object(O.jsx)(h.a,Object(l.a)(Object(l.a)({},e),{},{label:"Size small",placeholder:"Favorites"}))}})]})})})]})})]})}var g=["Option 1","Option 2"],x=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"L\xe9on: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014},{title:"Casablanca",year:1942},{title:"City Lights",year:1931},{title:"Psycho",year:1960},{title:"The Green Mile",year:1999},{title:"The Intouchables",year:2011},{title:"Modern Times",year:1936},{title:"Raiders of the Lost Ark",year:1981},{title:"Rear Window",year:1954},{title:"The Pianist",year:2002},{title:"The Departed",year:2006},{title:"Terminator 2: Judgment Day",year:1991},{title:"Back to the Future",year:1985},{title:"Whiplash",year:2014},{title:"Gladiator",year:2e3},{title:"Memento",year:2e3},{title:"The Prestige",year:2006},{title:"The Lion King",year:1994},{title:"Apocalypse Now",year:1979},{title:"Alien",year:1979},{title:"Sunset Boulevard",year:1950},{title:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{title:"The Great Dictator",year:1940},{title:"Cinema Paradiso",year:1988},{title:"The Lives of Others",year:2006},{title:"Grave of the Fireflies",year:1988},{title:"Paths of Glory",year:1957},{title:"Django Unchained",year:2012},{title:"The Shining",year:1980},{title:"WALL\xb7E",year:2008},{title:"American Beauty",year:1999},{title:"The Dark Knight Rises",year:2012},{title:"Princess Mononoke",year:1997},{title:"Aliens",year:1986},{title:"Oldboy",year:2003},{title:"Once Upon a Time in America",year:1984},{title:"Witness for the Prosecution",year:1957},{title:"Das Boot",year:1981},{title:"Citizen Kane",year:1941},{title:"North by Northwest",year:1959},{title:"Vertigo",year:1958},{title:"Star Wars: Episode VI - Return of the Jedi",year:1983},{title:"Reservoir Dogs",year:1992},{title:"Braveheart",year:1995},{title:"M",year:1931},{title:"Requiem for a Dream",year:2e3},{title:"Am\xe9lie",year:2001},{title:"A Clockwork Orange",year:1971},{title:"Like Stars on Earth",year:2007},{title:"Taxi Driver",year:1976},{title:"Lawrence of Arabia",year:1962},{title:"Double Indemnity",year:1944},{title:"Eternal Sunshine of the Spotless Mind",year:2004},{title:"Amadeus",year:1984},{title:"To Kill a Mockingbird",year:1962},{title:"Toy Story 3",year:2010},{title:"Logan",year:2017},{title:"Full Metal Jacket",year:1987},{title:"Dangal",year:2016},{title:"The Sting",year:1973},{title:"2001: A Space Odyssey",year:1968},{title:"Singin' in the Rain",year:1952},{title:"Toy Story",year:1995},{title:"Bicycle Thieves",year:1948},{title:"The Kid",year:1921},{title:"Inglourious Basterds",year:2009},{title:"Snatch",year:2e3},{title:"3 Idiots",year:2009},{title:"Monty Python and the Holy Grail",year:1975}],T=[{code:"AD",label:"Andorra",phone:"376"},{code:"AE",label:"United Arab Emirates",phone:"971"},{code:"AF",label:"Afghanistan",phone:"93"},{code:"AG",label:"Antigua and Barbuda",phone:"1-268"},{code:"AI",label:"Anguilla",phone:"1-264"},{code:"AL",label:"Albania",phone:"355"},{code:"AM",label:"Armenia",phone:"374"},{code:"AO",label:"Angola",phone:"244"},{code:"AQ",label:"Antarctica",phone:"672"},{code:"AR",label:"Argentina",phone:"54"},{code:"AS",label:"American Samoa",phone:"1-684"},{code:"AT",label:"Austria",phone:"43"},{code:"AU",label:"Australia",phone:"61"},{code:"AW",label:"Aruba",phone:"297"},{code:"AX",label:"Alland Islands",phone:"358"},{code:"AZ",label:"Azerbaijan",phone:"994"},{code:"BA",label:"Bosnia and Herzegovina",phone:"387"},{code:"BB",label:"Barbados",phone:"1-246"},{code:"BD",label:"Bangladesh",phone:"880"},{code:"BE",label:"Belgium",phone:"32"},{code:"BF",label:"Burkina Faso",phone:"226"},{code:"BG",label:"Bulgaria",phone:"359"},{code:"BH",label:"Bahrain",phone:"973"},{code:"BI",label:"Burundi",phone:"257"},{code:"BJ",label:"Benin",phone:"229"},{code:"BL",label:"Saint Barthelemy",phone:"590"},{code:"BM",label:"Bermuda",phone:"1-441"},{code:"BN",label:"Brunei Darussalam",phone:"673"},{code:"BO",label:"Bolivia",phone:"591"},{code:"BR",label:"Brazil",phone:"55"},{code:"BS",label:"Bahamas",phone:"1-242"},{code:"BT",label:"Bhutan",phone:"975"},{code:"BV",label:"Bouvet Island",phone:"47"},{code:"BW",label:"Botswana",phone:"267"},{code:"BY",label:"Belarus",phone:"375"},{code:"BZ",label:"Belize",phone:"501"},{code:"CA",label:"Canada",phone:"1"},{code:"CC",label:"Cocos (Keeling) Islands",phone:"61"},{code:"CD",label:"Congo, Democratic Republic of the",phone:"243"},{code:"CF",label:"Central African Republic",phone:"236"},{code:"CG",label:"Congo, Republic of the",phone:"242"},{code:"CH",label:"Switzerland",phone:"41"},{code:"CI",label:"Cote d'Ivoire",phone:"225"},{code:"CK",label:"Cook Islands",phone:"682"},{code:"CL",label:"Chile",phone:"56"},{code:"CM",label:"Cameroon",phone:"237"},{code:"CN",label:"China",phone:"86"},{code:"CO",label:"Colombia",phone:"57"},{code:"CR",label:"Costa Rica",phone:"506"},{code:"CU",label:"Cuba",phone:"53"},{code:"CV",label:"Cape Verde",phone:"238"},{code:"CW",label:"Curacao",phone:"599"},{code:"CX",label:"Christmas Island",phone:"61"},{code:"CY",label:"Cyprus",phone:"357"},{code:"CZ",label:"Czech Republic",phone:"420"},{code:"DE",label:"Germany",phone:"49"},{code:"DJ",label:"Djibouti",phone:"253"},{code:"DK",label:"Denmark",phone:"45"},{code:"DM",label:"Dominica",phone:"1-767"},{code:"DO",label:"Dominican Republic",phone:"1-809"},{code:"DZ",label:"Algeria",phone:"213"},{code:"EC",label:"Ecuador",phone:"593"},{code:"EE",label:"Estonia",phone:"372"},{code:"EG",label:"Egypt",phone:"20"},{code:"EH",label:"Western Sahara",phone:"212"},{code:"ER",label:"Eritrea",phone:"291"},{code:"ES",label:"Spain",phone:"34"},{code:"ET",label:"Ethiopia",phone:"251"},{code:"FI",label:"Finland",phone:"358"},{code:"FJ",label:"Fiji",phone:"679"},{code:"FK",label:"Falkland Islands (Malvinas)",phone:"500"},{code:"FM",label:"Micronesia, Federated States of",phone:"691"},{code:"FO",label:"Faroe Islands",phone:"298"},{code:"FR",label:"France",phone:"33"},{code:"GA",label:"Gabon",phone:"241"},{code:"GB",label:"United Kingdom",phone:"44"},{code:"GD",label:"Grenada",phone:"1-473"},{code:"GE",label:"Georgia",phone:"995"},{code:"GF",label:"French Guiana",phone:"594"},{code:"GG",label:"Guernsey",phone:"44"},{code:"GH",label:"Ghana",phone:"233"},{code:"GI",label:"Gibraltar",phone:"350"},{code:"GL",label:"Greenland",phone:"299"},{code:"GM",label:"Gambia",phone:"220"},{code:"GN",label:"Guinea",phone:"224"},{code:"GP",label:"Guadeloupe",phone:"590"},{code:"GQ",label:"Equatorial Guinea",phone:"240"},{code:"GR",label:"Greece",phone:"30"},{code:"GS",label:"South Georgia and the South Sandwich Islands",phone:"500"},{code:"GT",label:"Guatemala",phone:"502"},{code:"GU",label:"Guam",phone:"1-671"},{code:"GW",label:"Guinea-Bissau",phone:"245"},{code:"GY",label:"Guyana",phone:"592"},{code:"HK",label:"Hong Kong",phone:"852"},{code:"HM",label:"Heard Island and McDonald Islands",phone:"672"},{code:"HN",label:"Honduras",phone:"504"},{code:"HR",label:"Croatia",phone:"385"},{code:"HT",label:"Haiti",phone:"509"},{code:"HU",label:"Hungary",phone:"36"},{code:"ID",label:"Indonesia",phone:"62"},{code:"IE",label:"Ireland",phone:"353"},{code:"IL",label:"Israel",phone:"972"},{code:"IM",label:"Isle of Man",phone:"44"},{code:"IN",label:"India",phone:"91"},{code:"IO",label:"British Indian Ocean Territory",phone:"246"},{code:"IQ",label:"Iraq",phone:"964"},{code:"IR",label:"Iran, Islamic Republic of",phone:"98"},{code:"IS",label:"Iceland",phone:"354"},{code:"IT",label:"Italy",phone:"39"},{code:"JE",label:"Jersey",phone:"44"},{code:"JM",label:"Jamaica",phone:"1-876"},{code:"JO",label:"Jordan",phone:"962"},{code:"JP",label:"Japan",phone:"81"},{code:"KE",label:"Kenya",phone:"254"},{code:"KG",label:"Kyrgyzstan",phone:"996"},{code:"KH",label:"Cambodia",phone:"855"},{code:"KI",label:"Kiribati",phone:"686"},{code:"KM",label:"Comoros",phone:"269"},{code:"KN",label:"Saint Kitts and Nevis",phone:"1-869"},{code:"KP",label:"Korea, Democratic People's Republic of",phone:"850"},{code:"KR",label:"Korea, Republic of",phone:"82"},{code:"KW",label:"Kuwait",phone:"965"},{code:"KY",label:"Cayman Islands",phone:"1-345"},{code:"KZ",label:"Kazakhstan",phone:"7"},{code:"LA",label:"Lao People's Democratic Republic",phone:"856"},{code:"LB",label:"Lebanon",phone:"961"},{code:"LC",label:"Saint Lucia",phone:"1-758"},{code:"LI",label:"Liechtenstein",phone:"423"},{code:"LK",label:"Sri Lanka",phone:"94"},{code:"LR",label:"Liberia",phone:"231"},{code:"LS",label:"Lesotho",phone:"266"},{code:"LT",label:"Lithuania",phone:"370"},{code:"LU",label:"Luxembourg",phone:"352"},{code:"LV",label:"Latvia",phone:"371"},{code:"LY",label:"Libya",phone:"218"},{code:"MA",label:"Morocco",phone:"212"},{code:"MC",label:"Monaco",phone:"377"},{code:"MD",label:"Moldova, Republic of",phone:"373"},{code:"ME",label:"Montenegro",phone:"382"},{code:"MF",label:"Saint Martin (French part)",phone:"590"},{code:"MG",label:"Madagascar",phone:"261"},{code:"MH",label:"Marshall Islands",phone:"692"},{code:"MK",label:"Macedonia, the Former Yugoslav Republic of",phone:"389"},{code:"ML",label:"Mali",phone:"223"},{code:"MM",label:"Myanmar",phone:"95"},{code:"MN",label:"Mongolia",phone:"976"},{code:"MO",label:"Macao",phone:"853"},{code:"MP",label:"Northern Mariana Islands",phone:"1-670"},{code:"MQ",label:"Martinique",phone:"596"},{code:"MR",label:"Mauritania",phone:"222"},{code:"MS",label:"Montserrat",phone:"1-664"},{code:"MT",label:"Malta",phone:"356"},{code:"MU",label:"Mauritius",phone:"230"},{code:"MV",label:"Maldives",phone:"960"},{code:"MW",label:"Malawi",phone:"265"},{code:"MX",label:"Mexico",phone:"52"},{code:"MY",label:"Malaysia",phone:"60"},{code:"MZ",label:"Mozambique",phone:"258"},{code:"NA",label:"Namibia",phone:"264"},{code:"NC",label:"New Caledonia",phone:"687"},{code:"NE",label:"Niger",phone:"227"},{code:"NF",label:"Norfolk Island",phone:"672"},{code:"NG",label:"Nigeria",phone:"234"},{code:"NI",label:"Nicaragua",phone:"505"},{code:"NL",label:"Netherlands",phone:"31"},{code:"NO",label:"Norway",phone:"47"},{code:"NP",label:"Nepal",phone:"977"},{code:"NR",label:"Nauru",phone:"674"},{code:"NU",label:"Niue",phone:"683"},{code:"NZ",label:"New Zealand",phone:"64"},{code:"OM",label:"Oman",phone:"968"},{code:"PA",label:"Panama",phone:"507"},{code:"PE",label:"Peru",phone:"51"},{code:"PF",label:"French Polynesia",phone:"689"},{code:"PG",label:"Papua New Guinea",phone:"675"},{code:"PH",label:"Philippines",phone:"63"},{code:"PK",label:"Pakistan",phone:"92"},{code:"PL",label:"Poland",phone:"48"},{code:"PM",label:"Saint Pierre and Miquelon",phone:"508"},{code:"PN",label:"Pitcairn",phone:"870"},{code:"PR",label:"Puerto Rico",phone:"1"},{code:"PS",label:"Palestine, State of",phone:"970"},{code:"PT",label:"Portugal",phone:"351"},{code:"PW",label:"Palau",phone:"680"},{code:"PY",label:"Paraguay",phone:"595"},{code:"QA",label:"Qatar",phone:"974"},{code:"RE",label:"Reunion",phone:"262"},{code:"RO",label:"Romania",phone:"40"},{code:"RS",label:"Serbia",phone:"381"},{code:"RU",label:"Russian Federation",phone:"7"},{code:"RW",label:"Rwanda",phone:"250"},{code:"SA",label:"Saudi Arabia",phone:"966"},{code:"SB",label:"Solomon Islands",phone:"677"},{code:"SC",label:"Seychelles",phone:"248"},{code:"SD",label:"Sudan",phone:"249"},{code:"SE",label:"Sweden",phone:"46"},{code:"SG",label:"Singapore",phone:"65"},{code:"SH",label:"Saint Helena",phone:"290"},{code:"SI",label:"Slovenia",phone:"386"},{code:"SJ",label:"Svalbard and Jan Mayen",phone:"47"},{code:"SK",label:"Slovakia",phone:"421"},{code:"SL",label:"Sierra Leone",phone:"232"},{code:"SM",label:"San Marino",phone:"378"},{code:"SN",label:"Senegal",phone:"221"},{code:"SO",label:"Somalia",phone:"252"},{code:"SR",label:"Suriname",phone:"597"},{code:"SS",label:"South Sudan",phone:"211"},{code:"ST",label:"Sao Tome and Principe",phone:"239"},{code:"SV",label:"El Salvador",phone:"503"},{code:"SX",label:"Sint Maarten (Dutch part)",phone:"1-721"},{code:"SY",label:"Syrian Arab Republic",phone:"963"},{code:"SZ",label:"Swaziland",phone:"268"},{code:"TC",label:"Turks and Caicos Islands",phone:"1-649"},{code:"TD",label:"Chad",phone:"235"},{code:"TF",label:"French Southern Territories",phone:"262"},{code:"TG",label:"Togo",phone:"228"},{code:"TH",label:"Thailand",phone:"66"},{code:"TJ",label:"Tajikistan",phone:"992"},{code:"TK",label:"Tokelau",phone:"690"},{code:"TL",label:"Timor-Leste",phone:"670"},{code:"TM",label:"Turkmenistan",phone:"993"},{code:"TN",label:"Tunisia",phone:"216"},{code:"TO",label:"Tonga",phone:"676"},{code:"TR",label:"Turkey",phone:"90"},{code:"TT",label:"Trinidad and Tobago",phone:"1-868"},{code:"TV",label:"Tuvalu",phone:"688"},{code:"TW",label:"Taiwan, Province of China",phone:"886"},{code:"TZ",label:"United Republic of Tanzania",phone:"255"},{code:"UA",label:"Ukraine",phone:"380"},{code:"UG",label:"Uganda",phone:"256"},{code:"US",label:"United States",phone:"1"},{code:"UY",label:"Uruguay",phone:"598"},{code:"UZ",label:"Uzbekistan",phone:"998"},{code:"VA",label:"Holy See (Vatican City State)",phone:"379"},{code:"VC",label:"Saint Vincent and the Grenadines",phone:"1-784"},{code:"VE",label:"Venezuela",phone:"58"},{code:"VG",label:"British Virgin Islands",phone:"1-284"},{code:"VI",label:"US Virgin Islands",phone:"1-340"},{code:"VN",label:"Vietnam",phone:"84"},{code:"VU",label:"Vanuatu",phone:"678"},{code:"WF",label:"Wallis and Futuna",phone:"681"},{code:"WS",label:"Samoa",phone:"685"},{code:"XK",label:"Kosovo",phone:"383"},{code:"YE",label:"Yemen",phone:"967"},{code:"YT",label:"Mayotte",phone:"262"},{code:"ZA",label:"South Africa",phone:"27"},{code:"ZM",label:"Zambia",phone:"260"},{code:"ZW",label:"Zimbabwe",phone:"263"}]}}]);
//# sourceMappingURL=85.eecc5f85.chunk.js.map