(this["webpackJsonpbig-team"]=this["webpackJsonpbig-team"]||[]).push([[6],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(43);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,s=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(i){o=!0,s=i}finally{try{r||null==c.return||c.return()}finally{if(o)throw s}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},106:function(e,t,n){e.exports={usersContent:"UsersContent_usersContent__4FBB3"}},107:function(e,t,n){e.exports={usersCard:"UsersCard_usersCard__w40M8"}},108:function(e,t,n){e.exports={usersList:"UsersList_usersList__13lUX"}},109:function(e,t,n){e.exports={user:"User_user__3Lg3i",leftBlock:"User_leftBlock__1Xoqz"}},110:function(e,t,n){e.exports={userCard:"UserCard_userCard__2Y22E",section:"UserCard_section__1f2AF",section_spaceBetween:"UserCard_section_spaceBetween__2F-KP",section_alignCenter:"UserCard_section_alignCenter__1_Utr",name:"UserCard_name__40k7P",status:"UserCard_status__38R0Y",country:"UserCard_country__3vcyp",city:"UserCard_city__2EwK2"}},111:function(e,t,n){e.exports={button:"Button_button__2l2z8"}},112:function(e,t,n){e.exports={pageSelector:"PageSelector_pageSelector__JRqx8",active:"PageSelector_active__2bjwz"}},113:function(e,t,n){e.exports={paginator:"Paginator_paginator__3XwJD",button:"Paginator_button__15zGv",button_big:"Paginator_button_big__1Iq9n",button_small:"Paginator_button_small__2dJUD",pages:"Paginator_pages__3bSE6",active:"Paginator_active__1J5JH"}},143:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),s=n.n(o),a=n(106),c=n.n(a),i=n(21),l=n(22),u=n(24),d=n(23),f=n(14),b=n(54),p=n(107),j=n.n(p),h=n(2),_=n(108),g=n.n(_),m=n(109),v=n.n(m),O=n(110),x=n.n(O),C=n(13),w=function(e){return Object(r.jsxs)("div",{className:x.a.userCard,children:[Object(r.jsxs)("section",{className:"".concat(x.a.section," ").concat(x.a.section_spaceBetween),children:[Object(r.jsx)("span",{className:x.a.name,children:Object(r.jsx)(C.b,{to:"/profile/".concat(e.id),children:e.name})}),Object(r.jsx)("span",{className:x.a.status,children:e.status})]}),Object(r.jsxs)("section",{className:"".concat(x.a.section," ").concat(x.a.section_alignCenter),children:[Object(r.jsx)("span",{className:x.a.country,children:e.country}),Object(r.jsx)("span",{className:x.a.city,children:e.city})]})]})},y=n(111),B=n.n(y),k=function(e){return Object(r.jsx)("button",{className:B.a.button,style:e.style||null,onClick:e.handleOnClick,disabled:e.disabled,children:e.text})},N=n(27),P=n(26),U=function(e){var t={id:e.id,name:e.name,status:e.status||"\u0421\u0442\u0430\u0442\u0443\u0441\u0430 \u043d\u0435\u0442...",country:e.country||"-",city:e.city||"-"};return Object(r.jsxs)("li",{className:v.a.user,children:[Object(r.jsxs)("div",{className:v.a.leftBlock,children:[Object(r.jsx)(C.b,{to:"/profile/".concat(e.id),children:Object(r.jsx)(P.a,{img:e.photos.small||N.a,size:"80"})}),e.followed?Object(r.jsx)(k,{text:"Unfollow",handleOnClick:function(){return e.handleUnfollow(e.id)},followingBtnBlock:e.followingBtnBlock,disabled:e.followingBtnBlock.some((function(t){return t===e.id}))}):Object(r.jsx)(k,{text:"Follow",handleOnClick:function(){return e.handleFollow(e.id)},followingBtnBlock:e.followingBtnBlock,disabled:e.followingBtnBlock.some((function(t){return t===e.id}))})]}),Object(r.jsx)(w,Object(h.a)({},t))]})},S=function(e){return Object(r.jsx)("ul",{className:g.a.usersList,children:e.users.map((function(t){return Object(r.jsx)(U,Object(h.a)(Object(h.a)(Object(h.a)({},t),e.handlers),{},{followingBtnBlock:e.followingBtnBlock}),t.id)}))})},L=n(41),F=(n(112),n(25)),R=n(102),A=n(113),J=n.n(A),q=function(e){var t=e.pageCount,n=e.currentPage,s=e.handleSetCurrentPage,a=e.portionSize,c=void 0===a?10:a,i=function(e){return Math.floor(e/c)},l=i(t),u=i(n),d=Object(o.useState)(u+1),f=Object(R.a)(d,2),b=f[0],p=f[1],j=(b-1)*c+1,h=b*c+1;Object(o.useEffect)((function(){s(j)}),[b]);var _=[];b===l+1&&(h=j+(t-10*l));for(var g=function(e){var t=Object(r.jsxs)("span",{className:n===e?J.a.active:"",onClick:function(){s(e)},children:[" ",e," "]},e);_.push(t)},m=j;m<h;m++)g(m);var v=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n){p(e?(t?b:l)+1:t?b-1:1)}};return Object(r.jsxs)("div",{className:J.a.paginator,children:[Object(r.jsx)("div",{className:J.a.button_big,children:b>2&&Object(r.jsx)("button",{className:J.a.button,onClick:v(),children:"<<<"})}),Object(r.jsx)("div",{className:J.a.button_small,children:1!==b&&Object(r.jsx)("button",{className:J.a.button,onClick:v(!1,!0),children:"<"})}),Object(r.jsx)("div",{className:J.a.pages,children:_}),Object(r.jsx)("div",{className:J.a.button_small,children:b!==l+1&&Object(r.jsx)("button",{className:J.a.button,onClick:v(!0,!0),children:">"})}),Object(r.jsx)("div",{className:J.a.button_big,children:b<l&&Object(r.jsx)("button",{className:J.a.button,onClick:v(!0,!1),children:">>>"})})]})},z=function(e){var t={handleFollow:e.handlers.handleFollow,handleUnfollow:e.handlers.handleUnfollow};return Object(r.jsxs)("div",{className:j.a.usersCard,children:[Object(r.jsx)(L.a,{text:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"}),Object(r.jsx)(S,{users:e.users,handlers:t,followingBtnBlock:e.followingBtnBlock}),e.isLoading?Object(r.jsx)(F.a,{}):void 0,Object(r.jsx)(q,{pageCount:e.pageCount,currentPage:e.currentPage,handleSetCurrentPage:e.handlers.handleSetCurrentPage})]})};function E(e,t){return e===t}function D(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}function I(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}var M=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];var s=0,a=r.pop(),c=I(r),i=e.apply(void 0,[function(){return s++,a.apply(null,arguments)}].concat(n)),l=e((function(){for(var e=[],t=c.length,n=0;n<t;n++)e.push(c[n].apply(null,arguments));return i.apply(null,e)}));return l.resultFunc=a,l.dependencies=c,l.recomputations=function(){return s},l.resetRecomputations=function(){return s=0},l}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E,n=null,r=null;return function(){return D(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}}));var X=M((function(e){return e.usersReducer.users}),(function(e){return e.filter((function(e){return!0}))})),K=function(e){return e.usersReducer.itemCount},Y=function(e){return e.usersReducer.pageCount},G=function(e){return e.usersReducer.currentPage},H=function(e){return e.usersReducer.isLoading},T=function(e){return e.usersReducer.followingBtnBlock},Q=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).handleSetCurrentPage=function(t){e.props.requestUsers(e.props.itemCount,t)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.itemCount,this.props.currentPage)}},{key:"render",value:function(){var e={handleFollow:this.props.follow,handleUnfollow:this.props.unfollow,handleSetCurrentPage:this.handleSetCurrentPage};return Object(r.jsx)(z,{users:this.props.users,handlers:e,pageCount:this.props.pageCount,currentPage:this.props.currentPage,isLoading:this.props.isLoading,followingBtnBlock:this.props.followingBtnBlock})}}]),n}(s.a.Component),V=Object(f.b)((function(e){return{users:X(e),itemCount:K(e),pageCount:Y(e),currentPage:G(e),isLoading:H(e),followingBtnBlock:T(e)}}),{follow:b.b,unfollow:b.d,requestUsers:b.c})(Q);t.default=function(){return Object(r.jsx)("div",{className:c.a.usersContent,children:Object(r.jsx)(V,{})})}}}]);
//# sourceMappingURL=6.3218bba7.chunk.js.map