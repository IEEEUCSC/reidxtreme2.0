(this.webpackJsonpreidxtreme=this.webpackJsonpreidxtreme||[]).push([[0],{119:function(e,t,c){},120:function(e,t,c){},121:function(e,t,c){},122:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(13),r=c.n(a),n=c(29),i=c(20),l=c(58),o=c(69),j="CREATE",b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return[].concat(Object(o.a)(e),[t.payload]);default:return e}},m=Object(i.b)({teams:b}),d=c(8),u=c(126),O=c(127),h=c(15),x=(c(86),c.p+"static/media/logo.849aef0e.webp"),p=c.p+"static/media/full-logo.4c90dc3f.webp",g=c(2),f=[{title:"BADGES",section:"badges"},{title:"PRIZES",section:"prizes"},{title:"TIMELINE",section:"timeline"},{title:"REGISTER",section:"register"}],N=function(){var e=Object(s.useRef)(null),t=Object(s.useState)((function(){return 0})),c=Object(d.a)(t,2),a=c[0],r=c[1],n=f.map((function(e,t){return Object(g.jsx)(u.a.Item,{as:"li",children:Object(g.jsx)(h.Link,{className:"nav-link",activeClass:"current",spy:!0,to:e.section,offset:-a,isDynamic:!0,children:e.title})},t)})),i=Object(s.useState)((function(){return!1})),l=Object(d.a)(i,2),o=l[0],j=l[1];return Object(s.useEffect)((function(){window.onscroll=function(){window.scrollY>10?j(!0):j(!1)},r(e.current.clientHeight)}),[]),Object(g.jsx)("section",{children:Object(g.jsxs)(O.a,{variant:o?"dark":"light",bg:o?"dark":"light",expand:"lg",ref:e,children:[Object(g.jsx)(O.a.Brand,{children:Object(g.jsxs)(h.Link,{to:"home",children:[Object(g.jsx)("img",{className:"navbar-logo",src:x,alt:"Website Logo",title:"ReidXtreme Homepage"}),Object(g.jsx)("img",{className:"navbar-logo-full",src:p,alt:"Website logo",title:"ReidXtreme Homepage"})]})}),Object(g.jsx)(O.a.Toggle,{}),Object(g.jsx)(O.a.Collapse,{className:"justify-content-end",children:Object(g.jsx)(u.a,{as:"ul",children:n})})]})})},v=c(124),E=c(62),w=c(23),S="Oct 16 2021 5:00",R=(c(90),function(e){var t=e.num,c=e.label;return Object(g.jsxs)("div",{className:"countdown-number",children:[Object(g.jsx)("div",{className:"countdown-number-num",children:t<10?"0".concat(t):t}),Object(g.jsx)("div",{className:"countdown-number-label",children:c})]})}),C=function(){return Object(g.jsx)("section",{id:"top",className:"countdown",children:Object(g.jsxs)(v.a,{children:[Object(g.jsxs)("div",{className:"countdown-title",children:["BRACE YOURSELVES FOR ",Object(g.jsx)("span",{className:"countdown-battle",children:"BATTLE"})]}),Object(g.jsx)(E.a,{date:new Date(S),renderer:function(e){var t=e.days,c=e.hours,s=e.minutes,a=e.seconds;return e.completed?Object(g.jsxs)("div",{className:"countdown-completed",children:["REGISTRATIONS ARE ",Object(g.jsx)("span",{className:"countdown-closed",children:"CLOSED"})]}):Object(g.jsxs)("div",{className:"countdown-timer",children:[Object(g.jsx)(R,{num:t,label:"DAYS"}),Object(g.jsx)("div",{children:":"}),Object(g.jsx)(R,{num:c,label:"HOURS"}),Object(g.jsx)("div",{children:":"}),Object(g.jsx)(R,{num:s,label:"MINUTES"}),Object(g.jsx)("div",{children:":"}),Object(g.jsx)(R,{num:a,label:"SECONDS"})]})}}),Object(g.jsx)(h.Link,{to:"home",children:Object(g.jsx)("div",{className:"countdown-chevron",children:Object(g.jsx)(w.a,{})})})]})})},k=c(125),T=c(64),L=c(63),y=c.n(L),I=c(30),M=(c(91),function(){var e=Object(s.useRef)(null),t=Object(s.useRef)(null);return Object(s.useEffect)((function(){return t.current=new y.a(e.current,{strings:['TEST YOUR <span class="key-word">PROGRAMMING</span> SKILLS','TEST YOUR <span class="key-word">PROBLEM SOLVING</span> SKILLS','TEST YOUR <span class="key-word">ANALYTICAL</span> SKILLS'],typeSpeed:50,backSpeed:50,cursorChar:"_",loop:!0,smartBackspace:!0}),function(){t.current.destroy()}}),[]),Object(g.jsx)("section",{className:"hero-section",id:"home",children:Object(g.jsx)(v.a,{as:"section",children:Object(g.jsxs)(k.a,{children:[Object(g.jsx)(T.a,{lg:7,xl:8}),Object(g.jsx)(T.a,{className:"hero-content",lg:5,xl:4,children:Object(g.jsx)(I.b,{direction:"right",children:Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"hero-header-wrapper",children:Object(g.jsx)("h1",{className:"hero-header",children:Object(g.jsx)("span",{ref:e})})}),Object(g.jsxs)("div",{children:[Object(g.jsx)("p",{className:"hero-desc",children:"ReidXtreme - a 24-hour Competitive Programming Competition exclusively for UOC Undergraduates"}),Object(g.jsx)(h.Link,{to:"register",children:Object(g.jsx)("button",{className:"hero-button",children:"REGISTER"})})]})]})})})]})})})}),z=c.p+"static/media/startergambit.bd78c390.webp",A=c.p+"static/media/answerseeker.a29330ba.webp",D=c.p+"static/media/pointhunter.f0a65eb9.webp",G=c.p+"static/media/brawler.4934119a.webp",H=c.p+"static/media/duelist.b7f158b8.webp",U=c.p+"static/media/dragonslayer.6749db1f.webp",B=(c(93),[{title:"STARTER'S GAMBIT",desc:"Venture into ReidXtreme",src:z},{title:"ANSWER SEEKER",desc:"Complete 10 Problems Successfully",src:A},{title:"POINT HUNTER",desc:"Score over 1.5K Points",src:D},{title:"THE BRAWLER",desc:"Finish Second Runner's Up in ReidXtreme",src:G},{title:"THE DUELIST",desc:"Finish First Runner's Up in ReidXtreme",src:H},{title:"THE DRAGONSLAYER",desc:"Win ReidXtreme",src:U}]),P=function(){var e=Object(s.useState)(0),t=Object(d.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)(!1),n=Object(d.a)(r,2),i=n[0],l=n[1];Object(s.useEffect)((function(){l(!0)}),[c]);var o=B.map((function(e,t){return Object(g.jsx)("div",{className:"badges-select-item"+(c===t?" current":""),style:{backgroundImage:"url(".concat(e.src,")")},onClick:function(){return a(t)}},t)}));return Object(g.jsx)("section",{id:"badges",className:"badges",children:Object(g.jsxs)(v.a,{children:[Object(g.jsx)("h1",{className:"section-title",children:"BADGES"}),Object(g.jsxs)(I.a,{children:[Object(g.jsxs)(k.a,{className:"badges-group",children:[Object(g.jsx)(T.a,{className:"badges-preview",lg:6,children:Object(g.jsx)("div",{className:"badges-preview-img".concat(i?" fade-in":""),style:{backgroundImage:"url(".concat(B[c].src,")")},onAnimationEnd:function(){return l(!1)}})}),Object(g.jsxs)(T.a,{lg:6,className:"badges-description".concat(i?" fade-in":""),children:[Object(g.jsx)("div",{className:"title",children:B[c].title}),Object(g.jsx)("p",{className:"desc",children:B[c].desc})]}),Object(g.jsx)(w.b,{className:"chevron-left",onClick:function(){return a((function(e){return(e+B.length-1)%B.length}))}}),Object(g.jsx)(w.c,{className:"chevron-right",onClick:function(){return a((function(e){return(e+1)%B.length}))}})]}),Object(g.jsx)("div",{className:"badges-select",children:o})]})]})})},X=c.p+"static/media/tshirt.70cab375.webp",Y=c.p+"static/media/card.eb15829b.webp",_=c.p+"static/media/cash.bcaa5d87.webp",W=(c(94),function(){return Object(g.jsxs)("section",{id:"prizes",className:"prizes",children:[Object(g.jsx)("h1",{className:"section-title",children:"PRIZES"}),Object(g.jsxs)("div",{className:"prizes-cards",children:[Object(g.jsxs)("div",{className:"prizes-card prizes-card-silver",children:[Object(g.jsxs)("div",{className:"prizes-front",children:[Object(g.jsx)("img",{className:"prizes-img-left",src:_,alt:"Cash Prize"}),Object(g.jsxs)("div",{className:"prizes-cash",children:["Rs.",Object(g.jsx)("br",{})," 3,000"]}),Object(g.jsx)("div",{className:"prizes-position",children:Object(g.jsx)("b",{children:"2"})})]}),Object(g.jsx)("div",{className:"prizes-back",children:Object(g.jsx)("p",{children:"Rs. 3,000 Cash Prize"})})]}),Object(g.jsxs)("div",{className:"prizes-card prizes-card-gold",children:[Object(g.jsxs)("div",{className:"prizes-front",children:[Object(g.jsx)("img",{className:"prizes-img-left",src:X,alt:"Github Tshirt"}),Object(g.jsx)("img",{className:"prizes-img-right",src:Y,alt:"IEEE Membership"}),Object(g.jsx)("div",{className:"prizes-position",children:Object(g.jsx)("b",{children:"1"})})]}),Object(g.jsx)("div",{className:"prizes-back",children:Object(g.jsxs)("p",{children:["3 \xd7 IEEE Membership ",Object(g.jsx)("br",{})," + 3 \xd7 Github T-Shirt"]})})]}),Object(g.jsxs)("div",{className:"prizes-card prizes-card-bronze",children:[Object(g.jsxs)("div",{className:"prizes-front",children:[Object(g.jsx)("img",{className:"prizes-img-left",src:_,alt:"Cash Prize"}),Object(g.jsxs)("div",{className:"prizes-cash",children:["Rs.",Object(g.jsx)("br",{})," 2,000"]}),Object(g.jsx)("div",{className:"prizes-position",children:Object(g.jsx)("b",{children:"3"})})]}),Object(g.jsx)("div",{className:"prizes-back",children:Object(g.jsx)("p",{children:"Rs. 2,000 Cash Prize"})})]})]})]})}),F=c(40),q=c(66),K=c(24),V=(c(97),c(98),[{date:"September 26",icon:Object(g.jsx)(q.a,{}),title:"Launch Event"},{date:"October 3",icon:Object(g.jsx)(K.b,{}),title:"Workshop I"},{date:"October 11",icon:Object(g.jsx)(K.b,{className:"flipped"}),title:"Workshop II"},{date:"October 16",icon:Object(g.jsx)(K.a,{}),title:"ReidXtreme"}]),J=function(){var e=V.map((function(e,t){return Object(g.jsx)(F.VerticalTimelineElement,{contentStyle:{background:"rgb(46, 46, 46)",color:"var(--green)"},contentArrowStyle:{borderRight:"7px solid  rgb(46, 46, 46)"},date:e.date,dateClassName:"date-light",iconStyle:{background:"var(--green)",color:"#fff"},icon:e.icon,children:Object(g.jsx)("h3",{className:"vertical-timeline-element-title",children:e.title})},t)}));return Object(g.jsx)("section",{id:"timeline",className:"timeline",children:Object(g.jsxs)(v.a,{children:[Object(g.jsx)("h1",{className:"section-title",children:"TIMELINE"}),Object(g.jsx)(F.VerticalTimeline,{children:e})]})})},Q=c(3),Z=c(128),$=c(41),ee=c.n($),te=c(67),ce=c(68),se=c.n(ce),ae=function(e){var t=e.teamData,c=e.setTeamData,s=e.format;return Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("div",{className:"form-group-title",children:"Team Details"}),Object(g.jsxs)("div",{className:"form-sub-group-wrapper",children:[Object(g.jsxs)(Z.a.Group,{className:"form-sub-group",children:[Object(g.jsx)(Z.a.Control,{name:"team-name",type:"text",value:t.teamName,placeholder:"Team Name",required:!0,onChange:function(e){return c(Object(Q.a)(Object(Q.a)({},t),{},{teamName:e.target.value}))},onBlur:function(e){return c(Object(Q.a)(Object(Q.a)({},t),{},{teamName:s(e.target.value)}))}}),Object(g.jsx)(Z.a.Label,{children:"Team Name"})]}),Object(g.jsxs)(Z.a.Group,{className:"form-sub-group",children:[Object(g.jsx)(Z.a.Control,{name:"hackerrank",type:"text",value:t.teamHandle,placeholder:"Hackerrank Handle",required:!0,onChange:function(e){return c(Object(Q.a)(Object(Q.a)({},t),{},{teamHandle:e.target.value.trim()}))}}),Object(g.jsx)(Z.a.Label,{children:"HackerRank Handle"})]})]})]})},re=function(e){var t=e.teamData,c=e.setTeamData,s=e.memberNo,a=e.format;return Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("div",{className:"form-group-title",children:1===s?"Team Leader":"Member ".concat(s)}),Object(g.jsxs)("div",{className:"form-sub-group-wrapper",children:[Object(g.jsxs)(Z.a.Group,{className:"form-sub-group",children:[Object(g.jsx)(Z.a.Control,{name:"member-reg-".concat(s),type:"text",value:t.teamMembers[s-1].regNo,placeholder:"Registration Number",onChange:function(e){var a=t.teamMembers.slice();return a[s-1].regNo=e.target.value.trim(),c(Object(Q.a)(Object(Q.a)({},t),{},{teamMembers:a}))},required:1===s}),Object(g.jsx)(Z.a.Label,{children:"Registration number"})]}),Object(g.jsxs)(Z.a.Group,{className:"form-sub-group",children:[Object(g.jsx)(Z.a.Control,{name:"member-name-".concat(s),type:"text",value:t.teamMembers[s-1].name,placeholder:"Name",onChange:function(e){var a=t.teamMembers.slice();return a[s-1].name=e.target.value,c(Object(Q.a)(Object(Q.a)({},t),{},{teamMembers:a}))},onBlur:function(e){var r=t.teamMembers.slice();return r[s-1].name=a(e.target.value),c(Object(Q.a)(Object(Q.a)({},t),{},{teamMembers:r}))},required:1===s}),Object(g.jsx)(Z.a.Label,{children:"Name"})]}),Object(g.jsxs)(Z.a.Group,{className:"form-sub-group",children:[Object(g.jsx)(Z.a.Control,{name:"member-email-".concat(s),type:"text",value:t.teamMembers[s-1].email,placeholder:"Email",onChange:function(e){var a=t.teamMembers.slice();return a[s-1].email=e.target.value.trim(),c(Object(Q.a)(Object(Q.a)({},t),{},{teamMembers:a}))},required:1===s}),Object(g.jsx)(Z.a.Label,{children:"Email"})]}),Object(g.jsxs)(Z.a.Group,{className:"form-sub-group",children:[Object(g.jsx)(Z.a.Control,{name:"member-phno-".concat(s),type:"tel",value:t.teamMembers[s-1].phNo,placeholder:"Phone Number",onChange:function(e){var a=t.teamMembers.slice();return a[s-1].phNo=e.target.value,c(Object(Q.a)(Object(Q.a)({},t),{},{teamMembers:a}))},onBlur:function(e){var r=t.teamMembers.slice();return r[s-1].phNo=a(e.target.value),c(Object(Q.a)(Object(Q.a)({},t),{},{teamMembers:r}))},required:1===s}),Object(g.jsx)(Z.a.Label,{children:"Contact number"})]})]})]})},ne=c.p+"static/media/egg.940528e4.webp",ie=(c(119),function(){var e=Object(n.b)(),t=Object(s.useState)({teamName:"",teamHandle:"",teamMembers:[{regNo:"",name:"",phNo:"",email:""},{regNo:"",name:"",phNo:"",email:""},{regNo:"",name:"",phNo:"",email:""}]}),c=Object(d.a)(t,2),a=c[0],r=c[1],i=function(e){return e.replace(/\s+/g," ").trim()},l=Object(s.useState)((function(){return 0})),o=Object(d.a)(l,2),b=o[0],m=o[1],u=0===b?Object(g.jsx)(ae,{teamData:a,setTeamData:r,format:i}):Object(g.jsx)(re,{teamData:a,setTeamData:r,memberNo:b,format:i}),O=Object(s.useState)((function(){return{success:null,message:null}})),h=Object(d.a)(O,2),x=h[0],p=h[1],f=function(){return null!==x.success?Object(g.jsx)("div",{className:"message ".concat(x.success?"success":"error"),children:x.message}):Object(g.jsx)("div",{className:"message"})},N=Object(s.useState)(!1),E=Object(d.a)(N,2),w=E[0],R=E[1];Object(s.useEffect)((function(){R(!0)}),[b]);return Object(g.jsx)("section",{id:"register",className:"register",children:Object(g.jsx)(v.a,{children:Object(g.jsxs)("div",{className:"register-row",children:[Object(g.jsx)("div",{className:"register-form",children:new Date>new Date(S)?Object(g.jsxs)("div",{className:"register-closed",children:[Object(g.jsx)("div",{children:"REGISTRATIONS ARE"})," ",Object(g.jsx)("div",{className:"register-closed-word",children:"CLOSED"})]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{className:"section-title",children:"REGISTER"}),Object(g.jsxs)(Z.a,{onSubmit:function(e){return e.preventDefault()},children:[Object(g.jsx)("div",{className:w?"fade-in":"",onAnimationEnd:function(){return R(!1)},children:u}),Object(g.jsxs)("div",{className:"form-button-group",children:[Object(g.jsx)("button",{className:"form-button",onClick:function(){return m((function(e){return e>0?e-1:e}))},disabled:0===b,children:"Previous"}),Object(g.jsx)("button",{className:"form-button",onClick:function(){return m((function(e){return e<3?e+1:e}))},disabled:3===b,children:"Next"}),Object(g.jsx)("button",{className:"form-button form-submit",onClick:function(t){t.preventDefault(),p((function(){return{success:!0,message:"Creating team..."}}));var c=function(e){var t=e.teamMembers.slice();return Object(Q.a)(Object(Q.a)({},e),{},{teamMembers:t.filter((function(e){return""!==e.regNo||""!==e.name||""!==e.phNo||""!==e.email}))})}(a);"RX2_"!==a.teamHandle.slice(0,4)?p({success:!1,message:"The HackerRank handle should contain the prefix 'RX2_'"}):!function(e){if(""===e.teamName||""===e.teamHandle)return!1;var t=e.teamMembers.slice();if(0===t.length)return!1;var c=!0;return t.forEach((function(e){""===e.regNo&&(c=!1),""===e.name&&(c=!1),""===e.phNo&&(c=!1),""===e.email&&(c=!1)})),!!c||c}(c)?p({success:!1,message:"Some form fields are incomplete"}):e(function(e,t){return function(){var c=Object(te.a)(ee.a.mark((function c(s){var a,r,n,i,l,o;return ee.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,b=e,se.a.post("https://reidxtreme.herokuapp.com/",b);case 3:a=c.sent,r=a.data,s({type:j,payload:r}),t({success:!0,message:"Team registered successfully"}),c.next=15;break;case 9:c.prev=9,c.t0=c.catch(0),l=(null===(n=c.t0.response)||void 0===n||null===(i=n.data)||void 0===i?void 0:i.message)||null,o=String,o=l&&"E11000"===l.slice(0,6)?l.includes("teamName")?"Team Name already taken":"HackerRank Handle already taken":"Unable to register team",t({success:!1,message:o});case 15:case"end":return c.stop()}var b}),c,null,[[0,9]])})));return function(e){return c.apply(this,arguments)}}()}(c,p))},children:"Submit"})]}),Object(g.jsx)(f,{})]})]})}),Object(g.jsx)("div",{className:"register-image-wrapper",children:Object(g.jsx)("a",{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",target:"_blank",rel:"noreferrer",children:Object(g.jsx)("img",{src:ne,alt:"Egg",title:"You are Eggcelent",className:"register-image"})})})]})})})}),le=c(32),oe=c.p+"static/media/IEEE_Logo.74dd6c86.webp",je=c.p+"static/media/ACM_Logo.39eeee60.webp",be=(c(120),function(){var e=new Date;return Object(g.jsxs)("div",{className:"footer-copyright",children:["Copyright \xa9 ",e.getFullYear()," ReidXtreme. All rights reserved."]})}),me=function(){return Object(g.jsx)("footer",{className:"footer",children:Object(g.jsxs)(v.a,{children:[Object(g.jsxs)(k.a,{children:[Object(g.jsx)(T.a,{className:"footer-logo-wrapper",children:Object(g.jsx)("img",{className:"footer-logo",src:je,title:"ReidXtreme",alt:"ReidXtreme Logo"})}),Object(g.jsx)(T.a,{className:"footer-logo-wrapper",children:Object(g.jsx)("img",{className:"footer-logo",src:oe,title:"IEEE Student Branch Chapter of UCSC",alt:"IEEE Logo"})}),Object(g.jsx)(T.a,{className:"footer-logo-wrapper",children:Object(g.jsx)("img",{className:"footer-logo",src:p,title:"ACM Student Branch Chapter of UCSC",alt:"ACM Logo"})})]}),Object(g.jsx)("div",{className:"footer-text",children:"ReidXtreme Competitive Programming is organized by the ACM Student Chapter of UCSC, in collaboration with the IEEE Student Branch of UCSC"}),Object(g.jsxs)("div",{className:"socials",children:[Object(g.jsx)("div",{className:"socials-facebook",children:Object(g.jsx)("a",{href:"https://web.facebook.com/IEEE.UCSC",target:"_blank",rel:"noreferrer",children:Object(g.jsx)(le.a,{})})}),Object(g.jsx)("div",{className:"socials-instagram",children:Object(g.jsx)("a",{href:"https://www.instagram.com/ucsc.ieee/",target:"_blank",rel:"noreferrer",children:Object(g.jsx)(le.b,{})})}),Object(g.jsx)("div",{className:"socials-linkedin",children:Object(g.jsx)("a",{href:"https://www.linkedin.com/company/ieee-student-branch-ucsc",target:"_blank",rel:"noreferrer",children:Object(g.jsx)(le.c,{})})})]}),Object(g.jsx)(be,{}),Object(g.jsx)(h.Link,{to:"top",className:"footer-back-to-top",children:"BACK TO TOP"})]})})},de=(c(121),function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(N,{}),Object(g.jsx)(C,{}),Object(g.jsx)(M,{}),Object(g.jsx)(P,{}),Object(g.jsx)(W,{}),Object(g.jsx)(J,{}),Object(g.jsx)(ie,{}),Object(g.jsx)(me,{})]})}),ue=Object(i.d)(m,Object(i.c)(Object(i.a)(l.a)));r.a.render(Object(g.jsx)(n.a,{store:ue,children:Object(g.jsx)(de,{})}),document.getElementById("root"))},86:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},98:function(e,t,c){}},[[122,1,2]]]);
//# sourceMappingURL=main.22fb5fd5.chunk.js.map