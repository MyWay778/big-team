(this["webpackJsonpbig-team"]=this["webpackJsonpbig-team"]||[]).push([[6],{101:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(45);function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,o=!1,s=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(i){o=!0,s=i}finally{try{r||null==c.return||c.return()}finally{if(o)throw s}}return e}}(t,n)||Object(r.a)(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},108:function(t,n,e){t.exports={usersContent:"UsersContent_usersContent__4FBB3"}},109:function(t,n,e){t.exports={usersCard:"UsersCard_usersCard__w40M8"}},110:function(t,n,e){t.exports={usersList:"UsersList_usersList__13lUX"}},111:function(t,n,e){t.exports={user:"User_user__3Lg3i",leftBlock:"User_leftBlock__1Xoqz"}},112:function(t,n,e){t.exports={userCard:"UserCard_userCard__2Y22E",section:"UserCard_section__1f2AF",section_spaceBetween:"UserCard_section_spaceBetween__2F-KP",section_alignCenter:"UserCard_section_alignCenter__1_Utr",name:"UserCard_name__40k7P",status:"UserCard_status__38R0Y",country:"UserCard_country__3vcyp",city:"UserCard_city__2EwK2"}},113:function(t,n,e){t.exports={button:"Button_button__2l2z8"}},114:function(t,n,e){t.exports={paginator:"Paginator_paginator__3XwJD",button:"Paginator_button__15zGv",button_big:"Paginator_button_big__1Iq9n",button_small:"Paginator_button_small__2dJUD",pages:"Paginator_pages__3bSE6",active:"Paginator_active__1J5JH"}},148:function(t,n,e){"use strict";e.r(n);var r=e(1),o=e(0),s=e.n(o),a=e(108),c=e.n(a),i=e(21),u=e(22),l=e(24),d=e(23),f=e(14),b=e(56),h=e(109),p=e.n(h),j=e(2),g=e(110),_=e.n(g),m=e(111),v=e.n(m),O=e(112),x=e.n(O),C=e(13),y=function(t){return Object(r.jsxs)("div",{className:x.a.userCard,children:[Object(r.jsxs)("section",{className:"".concat(x.a.section," ").concat(x.a.section_spaceBetween),children:[Object(r.jsx)("span",{className:x.a.name,children:Object(r.jsx)(C.b,{to:"/profile/".concat(t.id),children:t.name})}),Object(r.jsx)("span",{className:x.a.status,children:t.status})]}),Object(r.jsxs)("section",{className:"".concat(x.a.section," ").concat(x.a.section_alignCenter),children:[Object(r.jsx)("span",{className:x.a.country,children:t.country}),Object(r.jsx)("span",{className:x.a.city,children:t.city})]})]})},w=e(113),B=e.n(w),k=function(t){return Object(r.jsx)("button",{className:B.a.button,style:t.style||null,onClick:t.handleOnClick,disabled:t.disabled,children:t.text})},N=e(27),U=e(26),P=function(t){var n={id:t.id,name:t.name,status:t.status||"\u0421\u0442\u0430\u0442\u0443\u0441\u0430 \u043d\u0435\u0442...",country:t.country||"-",city:t.city||"-"};return Object(r.jsxs)("li",{className:v.a.user,children:[Object(r.jsxs)("div",{className:v.a.leftBlock,children:[Object(r.jsx)(C.b,{to:"/profile/".concat(t.id),children:Object(r.jsx)(U.a,{img:t.photos.small||N.a,size:"80"})}),t.followed?Object(r.jsx)(k,{text:"Unfollow",handleOnClick:function(){return t.handleUnfollow(t.id)},followingBtnBlock:t.followingBtnBlock,disabled:t.followingBtnBlock.some((function(n){return n===t.id}))||!t.isAuth}):Object(r.jsx)(k,{text:"Follow",handleOnClick:function(){return t.handleFollow(t.id)},followingBtnBlock:t.followingBtnBlock,disabled:t.followingBtnBlock.some((function(n){return n===t.id}))||!t.isAuth})]}),Object(r.jsx)(y,Object(j.a)({},n))]})},A=function(t){return Object(r.jsx)("ul",{className:_.a.usersList,children:t.users.map((function(n){return Object(r.jsx)(P,Object(j.a)(Object(j.a)(Object(j.a)({},n),t.handlers),{},{followingBtnBlock:t.followingBtnBlock,isAuth:t.isAuth}),n.id)}))})},S=e(42),L=e(25),F=e(101),R=e(114),E=e.n(R),J=e(44),q=e.n(J),z=function(t){var n=t.pageCount,e=t.currentPage,s=t.handleSetCurrentPage,a=t.portionSize,c=void 0===a?10:a,i=q.a.bind(E.a),u=function(t){return Math.floor(t/c)},l=u(n),d=u(e),f=Object(o.useState)(d+1),b=Object(F.a)(f,2),h=b[0],p=b[1],j=(h-1)*c+1,g=h*c+1;Object(o.useEffect)((function(){s(j)}),[h]);var _=[];h===l+1&&(g=j+(n-10*l));for(var m=function(t){var n=Object(r.jsxs)("span",{className:i({active:e===t}),onClick:function(){s(t)},children:[" ",t," "]},t);_.push(n)},v=j;v<g;v++)m(v);var O=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(e){p(t?(n?h:l)+1:n?h-1:1)}};return Object(r.jsxs)("div",{className:E.a.paginator,children:[Object(r.jsx)("div",{className:E.a.button_big,children:h>2&&Object(r.jsx)("button",{className:E.a.button,onClick:O(),children:"<<<"})}),Object(r.jsx)("div",{className:E.a.button_small,children:1!==h&&Object(r.jsx)("button",{className:E.a.button,onClick:O(!1,!0),children:"<"})}),Object(r.jsx)("div",{className:E.a.pages,children:_}),Object(r.jsx)("div",{className:E.a.button_small,children:h!==l+1&&Object(r.jsx)("button",{className:E.a.button,onClick:O(!0,!0),children:">"})}),Object(r.jsx)("div",{className:E.a.button_big,children:h<l&&Object(r.jsx)("button",{className:E.a.button,onClick:O(!0,!1),children:">>>"})})]})},D=function(t){var n={handleFollow:t.handlers.handleFollow,handleUnfollow:t.handlers.handleUnfollow};return Object(r.jsxs)("div",{className:p.a.usersCard,children:[Object(r.jsx)(S.a,{text:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"}),Object(r.jsx)(A,{users:t.users,handlers:n,followingBtnBlock:t.followingBtnBlock,isAuth:t.isAuth}),t.isLoading?Object(r.jsx)(L.a,{}):void 0,Object(r.jsx)(z,{pageCount:t.pageCount,currentPage:t.currentPage,handleSetCurrentPage:t.handlers.handleSetCurrentPage})]})};function I(t,n){return t===n}function M(t,n,e){if(null===n||null===e||n.length!==e.length)return!1;for(var r=n.length,o=0;o<r;o++)if(!t(n[o],e[o]))return!1;return!0}function X(t){var n=Array.isArray(t[0])?t[0]:t;if(!n.every((function(t){return"function"===typeof t}))){var e=n.map((function(t){return typeof t})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+e+"]")}return n}var K=function(t){for(var n=arguments.length,e=Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return function(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];var s=0,a=r.pop(),c=X(r),i=t.apply(void 0,[function(){return s++,a.apply(null,arguments)}].concat(e)),u=t((function(){for(var t=[],n=c.length,e=0;e<n;e++)t.push(c[e].apply(null,arguments));return i.apply(null,t)}));return u.resultFunc=a,u.dependencies=c,u.recomputations=function(){return s},u.resetRecomputations=function(){return s=0},u}}((function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:I,e=null,r=null;return function(){return M(n,e,arguments)||(r=t.apply(null,arguments)),e=arguments,r}}));var Y=K((function(t){return t.usersReducer.users}),(function(t){return t.filter((function(t){return!0}))})),G=function(t){return t.usersReducer.itemCount},H=function(t){return t.usersReducer.pageCount},T=function(t){return t.usersReducer.currentPage},Q=function(t){return t.usersReducer.isLoading},V=function(t){return t.usersReducer.followingBtnBlock},W=function(t){return t.authReducer.isAuth},Z=function(t){Object(l.a)(e,t);var n=Object(d.a)(e);function e(){var t;Object(i.a)(this,e);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(t=n.call.apply(n,[this].concat(o))).handleSetCurrentPage=function(n){t.props.requestUsers(t.props.itemCount,n)},t}return Object(u.a)(e,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.itemCount,this.props.currentPage)}},{key:"render",value:function(){var t={handleFollow:this.props.follow,handleUnfollow:this.props.unfollow,handleSetCurrentPage:this.handleSetCurrentPage};return Object(r.jsx)(D,{users:this.props.users,handlers:t,pageCount:this.props.pageCount,currentPage:this.props.currentPage,isLoading:this.props.isLoading,followingBtnBlock:this.props.followingBtnBlock,isAuth:this.props.isAuth})}}]),e}(s.a.Component),$=Object(f.b)((function(t){return{users:Y(t),itemCount:G(t),pageCount:H(t),currentPage:T(t),isLoading:Q(t),followingBtnBlock:V(t),isAuth:W(t)}}),{follow:b.b,unfollow:b.d,requestUsers:b.c})(Z);n.default=function(){return Object(r.jsx)("div",{className:c.a.usersContent,children:Object(r.jsx)($,{})})}}}]);
//# sourceMappingURL=6.bef6d205.chunk.js.map