(this["webpackJsonpphoto-stock"]=this["webpackJsonpphoto-stock"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),s=a(58),n=a.n(s),i=(a(70),a(71),a(22)),o=a(11),l=a.n(o),d=a(18),h=a(15),j=a(5),u=a(106),g=a(104),m=a(59),A=a.n(m).a.create({baseURL:"https://api.unsplash.com/",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Client-ID 539a243d3ccefd20c8def536a22699cc55608b6e0ce6db506b2be577682ed2ef"}}),p={getPhotosList:function(e,t){return A.get("search/photos",{params:{query:e,page:t,per_page:21}})},getTopicList:function(){return A.get("topics")},getPhoto:function(e){return A.get("photos/".concat(e))},getCollections:function(e){return A.get("collections/".concat(e,"/photos"))}},b=a(23),O=a(13),x=a.n(O),f=a(0),_=function(e){var t=e.item,a=Object(c.useState)(!1),r=Object(h.a)(a,2),s=r[0],n=r[1];return Object(c.useEffect)((function(){if(localStorage.getItem("Favorites")){!function(e){var t=JSON.parse(localStorage.getItem("Favorites"));n(t.includes(e))}(t.id)}}),[s]),Object(f.jsxs)("div",{className:x.a.imgWrap,children:[Object(f.jsx)("img",{src:t.urls.regular,alt:t.alt_description,className:x.a.photoImage}),Object(f.jsxs)("div",{className:x.a.infoWrap,children:[Object(f.jsxs)("div",{className:x.a.userProfile,children:[Object(f.jsx)("div",{className:x.a.userPhoto,children:Object(f.jsx)("img",{src:t.user.profile_image.medium,alt:"".concat(t.user.name,"_profile_image")})}),Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:t.user.name}),!!t.user.instagram_username&&Object(f.jsx)("a",{href:"https://instagram.com/".concat(t.user.instagram_username),rel:"noreferrer",target:"_blank",className:x.a.link,children:"@".concat(t.user.instagram_username)})]})]}),Object(f.jsxs)("div",{className:x.a.actionIcons,children:[Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"button",onClick:function(){!function(e){var t;localStorage.getItem("Favorites")?(t=JSON.parse(localStorage.getItem("Favorites"))).includes(e)?(t=t.filter((function(t){return t!==e})),localStorage.setItem("Favorites",JSON.stringify(t)),n(!1)):(t=[].concat(Object(b.a)(t),[e]),localStorage.setItem("Favorites",JSON.stringify(t)),n(!0)):localStorage.setItem("Favorites",JSON.stringify([e]))}(t.id)},className:x.a.toFavorites,children:Object(f.jsx)("svg",{width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:x.a.icon,children:Object(f.jsx)("path",{d:"M18.9121 28.7685C17.8354 29.746 16.1779 29.7461 15.1013 28.7544L14.9454 28.6127C7.50795 21.8836 2.64878 17.4777 2.83295 11.981C2.91795 9.57272 4.15045 7.26355 6.14795 5.90355C9.88795 3.35355 14.5063 4.54355 16.9996 7.46188C19.4929 4.54355 24.1113 3.33938 27.8513 5.90355C29.8488 7.26355 31.0813 9.57272 31.1663 11.981C31.3646 17.4777 26.4913 21.8835 19.0538 28.641L18.9121 28.7685Z",fill:s?"red":"white"})})})}),Object(f.jsx)("div",{children:Object(f.jsx)(i.b,{to:{pathname:"/photo/".concat(t.id)},children:Object(f.jsxs)("svg",{width:"37",height:"36",viewBox:"0 0 37 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:x.a.icon,children:[Object(f.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.5833 4.5C21.5833 3.67157 22.2736 3 23.125 3H32.375C33.2264 3 33.9167 3.67157 33.9167 4.5V13.5C33.9167 14.3284 33.2264 15 32.375 15C31.5236 15 30.8333 14.3284 30.8333 13.5V6H23.125C22.2736 6 21.5833 5.32843 21.5833 4.5Z",fill:"white"}),Object(f.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.62499 21C5.47643 21 6.16666 21.6716 6.16666 22.5V30H13.875C14.7264 30 15.4167 30.6716 15.4167 31.5C15.4167 32.3284 14.7264 33 13.875 33H4.62499C3.77356 33 3.08333 32.3284 3.08333 31.5V22.5C3.08333 21.6716 3.77356 21 4.62499 21Z",fill:"white"}),Object(f.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M33.4651 3.43934C34.0672 4.02513 34.0672 4.97487 33.4651 5.56066L22.6735 16.0607C22.0714 16.6464 21.0953 16.6464 20.4932 16.0607C19.8912 15.4749 19.8912 14.5251 20.4932 13.9393L31.2849 3.43934C31.8869 2.85355 32.8631 2.85355 33.4651 3.43934Z",fill:"white"}),Object(f.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.5068 19.9393C17.1088 20.5251 17.1088 21.4749 16.5068 22.0607L5.71512 32.5607C5.11306 33.1464 4.13693 33.1464 3.53487 32.5607C2.93281 31.9749 2.93281 31.0251 3.53487 30.4393L14.3265 19.9393C14.9286 19.3536 15.9047 19.3536 16.5068 19.9393Z",fill:"white"})]})})}),Object(f.jsx)("div",{children:Object(f.jsx)("a",{href:"".concat(t.links.download,"?force=true"),rel:"noreferrer",target:"_blank",download:!0,children:Object(f.jsx)("svg",{width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:x.a.icon,children:Object(f.jsx)("g",{id:"icon/file/download_24px",children:Object(f.jsx)("path",{id:"icon/file/download_24px_2",fillRule:"evenodd",clipRule:"evenodd",d:"M21.25 13.4584H23.5025C24.7633 13.4584 25.3867 14.9884 24.4942 15.8809L17.9917 22.3834C17.4392 22.9359 16.5467 22.9359 15.9942 22.3834L9.49168 15.8809C8.59918 14.9884 9.23668 13.4584 10.4975 13.4584H12.75V6.37504C12.75 5.59587 13.3875 4.95837 14.1667 4.95837H19.8333C20.6125 4.95837 21.25 5.59587 21.25 6.37504V13.4584ZM8.50001 29.0417C7.72084 29.0417 7.08334 28.4042 7.08334 27.6251C7.08334 26.8459 7.72084 26.2084 8.50001 26.2084H25.5C26.2792 26.2084 26.9167 26.8459 26.9167 27.6251C26.9167 28.4042 26.2792 29.0417 25.5 29.0417H8.50001Z",fill:"white"})})})})})]})]})]},t.id)},v=a(20),S=a.n(v),w=Object(j.e)((function(e){var t=Object(c.useState)(S.a.dirRow),a=Object(h.a)(t,2),r=a[0],s=a[1],n=Object(c.useState)("col-md-4"),i=Object(h.a)(n,2),o=i[0],l=i[1],d=e.photosList,j=e.location;return Object(f.jsxs)("div",{className:"container p-0",children:[!j.pathname.includes("/photo-page")&&Object(f.jsxs)("div",{className:S.a.dirControl,children:[Object(f.jsx)("button",{className:S.a.changeDir,type:"button",onClick:function(){s(S.a.dirCol),l("col-md-6")},children:Object(f.jsxs)("svg",{width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:S.a.icon,children:[Object(f.jsx)("rect",{width:"23",height:"10",fill:"#BDBDBD"}),Object(f.jsx)("rect",{y:"13",width:"23",height:"10",fill:"#BDBDBD"})]})}),Object(f.jsx)("button",{className:S.a.changeDir,type:"button",onClick:function(){s(S.a.dirRow),l("col-md-4")},children:Object(f.jsxs)("svg",{width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:S.a.icon,children:[Object(f.jsx)("rect",{width:"10",height:"10",fill:"#BDBDBD"}),Object(f.jsx)("rect",{y:"13",width:"10",height:"10",fill:"#BDBDBD"}),Object(f.jsx)("rect",{x:"13",width:"10",height:"10",fill:"#BDBDBD"}),Object(f.jsx)("rect",{x:"13",y:"13",width:"10",height:"10",fill:"#BDBDBD"})]})})]}),Object(f.jsxs)("div",{className:r,children:[Object(f.jsx)("div",{className:"".concat(o," p-0"),children:!!d&&d.map((function(e,t){return t%3===2?Object(f.jsx)(_,{item:e},e.id):""}))}),Object(f.jsx)("div",{className:"".concat(o," p-0"),children:!!d&&d.map((function(e,t){return t%3===1?Object(f.jsx)(_,{item:e},e.id):""}))}),Object(f.jsx)("div",{className:"".concat(o," p-0"),style:{marginRight:"-10px"},children:!!d&&d.map((function(e,t){return t%3===0?Object(f.jsx)(_,{item:e,className:"mr-0"},e.id):""}))})]})]})})),N=a(45),C=a.n(N),I=function(){var e;if(JSON.parse(localStorage.getItem("Favorites")).length>0)e=JSON.parse(localStorage.getItem("Favorites"));else if(0===JSON.parse(localStorage.getItem("Favorites")).length)return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("h2",{className:C.a.heading,children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})})});var t=function(e){var t=[],a=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getPhoto(t);case 2:return a=e.sent,c=a.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return e.forEach((function(e){var c=Object(g.a)(["photo",e],(function(){return a(e)})),r=c.data;c.isSuccess&&t.push(r)})),t}(e);return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h2",{className:C.a.heading,children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"}),Object(f.jsx)(w,{photosList:t})]})})},B=a(25),P=a.n(B),k=a(32),R=a(47),y=a.n(R),L=function(e){var t=e.name;return Object(f.jsx)("div",{className:y.a.box,children:Object(f.jsxs)("div",{className:y.a.input\u0421ontainer,children:[Object(f.jsx)("h2",{children:"\u041f\u043e\u0438\u0441\u043a"}),Object(f.jsx)(k.a,{type:"text",required:"",id:"searchInput",name:t,autoComplete:"off"})]})})},H=function(e){var t=e.setSearchVal;return Object(f.jsx)("div",{children:Object(f.jsx)(k.c,{initialValues:{searchValue:"",page:1},onSubmit:function(e){t(e.searchValue),function(e){var t,a=(t=e).charAt(0).toUpperCase()+t.slice(1);if(localStorage.getItem("SearchHistory")){var c=JSON.parse(localStorage.getItem("SearchHistory"));c.includes(a)?(c=c.filter((function(e){return e!==a})),localStorage.setItem("SearchHistory",JSON.stringify([].concat(Object(b.a)(c),[a])))):(c=[].concat(Object(b.a)(c),[a]),localStorage.setItem("SearchHistory",JSON.stringify(c)))}else localStorage.setItem("SearchHistory",JSON.stringify([a]))}(e.searchValue)},children:Object(f.jsx)(k.b,{children:Object(f.jsx)(L,{id:"searchValue",name:"searchValue"})})})})},D=a(40),T=a.n(D),F=function(e){var t=e.data,a=t.link,c=t.imgSrc,r=t.text,s=e.className;return Object(f.jsx)("div",{className:T.a.headerLink,children:Object(f.jsxs)(i.b,{to:a,children:[Object(f.jsx)("span",{className:T.a.linkIcon,children:Object(f.jsx)("img",{src:c,alt:""})}),Object(f.jsx)("span",{className:"".concat(T.a.linkText," ").concat(s),children:r})]})})},E=a(63),U=a.n(E),M=function(e){var t=e.title;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:U.a.topicItem,children:t})})},Q=a(48),V=a.n(Q),Y=function(){var e=null;return localStorage.getItem("SearchHistory")&&(e=JSON.parse(localStorage.getItem("SearchHistory"))),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"container p-0",children:[Object(f.jsx)("h2",{className:V.a.heading,children:"\u0412\u0430\u0448\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u044b"}),Object(f.jsx)("div",{className:V.a.topicWrapper,children:e&&e.map((function(e){return Object(f.jsx)(M,{title:e},e)}))})]})})},W=Object(j.e)((function(e){var t=e.setSearchVal,a=e.location,c=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getTopicList();case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=Object(g.a)(["topicsList"],(function(){return c()})),s=r.data,n=r.isSuccess,i=[{link:"/home",imgSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEXSURBVHgB3VVREYMwDA1TgAMqAQcgAQfMATgAB8wBkzAHSNimAFCAhC7dhSPXo5CO7Wfv7h20fc0LaXME4IDWOsaHYURTT+QjCIIBPgUGTZGddqNFKvAFbqq1HPmRwA0yQUbEhLL2M0DRmW3oqd4ubcm0EzLcC35nGxTsJ8MNqi1hzIQtCKGXQ59cmhMyYeMryHGjZ2jOxBWc12wAOUb2rsAR/Gc4WRnEIAcv57iqMFeJHWgHQtCVfV/dPWHn0xhWw+V7YkUNMaN06MxXXnjDgQRWl86dWiAzWmusBDTNpVKDTC+13ILRtGxcSw0UbewdQSsqT2ytyQyYkQmQEKOV9eqQgSCB/zNI4ZuwDOS/QQ8D0xOFeX8Bq3Rmwvbi064AAAAASUVORK5CYII=",text:"\u041f\u043e\u0438\u0441\u043a",key:"home"},{link:"/favorites",imgSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAVCAYAAACt4nWrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADOSURBVHgBtZQNDcMgEIVvU1AJlVIHm4PNyeoACVTCHFRC6wAJ4ODtCHRhHVsphS+5pD/H95ILQBQAoOMauTQcE5fkaiN9gkv5Pu3X3WgNf2y4Bvyn9739Rp+0vlAukcaY2CcX8R116M7sv1AdHidO0PzQUHmMlYMqYcdiqA7Gymeqw2zlT6rDsBwghbKodwS/XFGWz2sA7q4ogfgaENx4JhzDro+fGf7RIn/+Cqvbs1SA2hRnBqSLdwbsFycG5IuDgNgu+r0rMgOkl4pU8QuJhZuqNbnMLgAAAABJRU5ErkJggg==",text:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",key:"favorites"},{link:"/history",imgSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFTSURBVHgBnVWBccMgDBSdwBuUDeoNwgjZIN6gI5hM0BEyQtoJaCdIOgHeIMkERLqIs45D2Mnf/XGA9LwRYAMLSCl12GyRH0iLpP4V+Yv8McZM8AxIEOmRl9RGQNoy3yiiFBjYIbDDb+SZ++TaMTP26N5Dw6lFRnZDbj8XYoNw71vCWTTWPlHJGYW4qwUMIsBW5nttMeE8QsPtqCSfkEdlzqa50K50o7oVCwdQgHNfnH94E+Mbbs9Pn80Z/9w6KdxxO8HryMfRyn2t4V1mcSzt466mSnubE8uTIDEqiTFXn+pSzG957pQHhiXRQmBM8wnoxfiBx44yeFgjKuItL9CJfsauDO7gRQi3cSmQXjcL60S96rYimlongOPoUoVabbRnk7aEKmt5aILHw07n9AaPR5+K5kSax4u1hzXg4sTURkBuylyzQlz+mnrxBeServ9fLe8OQ0og01eLmJkAAAAASUVORK5CYII=",text:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043f\u043e\u0438\u0441\u043a\u0430",key:"history"}];return Object(f.jsxs)("div",{className:P.a.Header,children:[Object(f.jsx)("div",{className:"container p-0",children:Object(f.jsxs)("div",{className:P.a.headerLinksWrap,children:[Object(f.jsx)("div",{className:P.a.logoBlock,children:Object(f.jsx)(F,{data:{link:"/home",imgSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABySURBVHgB7ZSxDYAwDATfiAEYJRuQlZiEkViBETICGxhHSo2NiFCKP8lK8/prHAMOqpo1zur1TfgZCil8zRzIXDYFhDTE7t/hZE4R2RDAunZ70lOmbmlGP5LXx0tD4fjC+g81kCuIsbT5LOwGl4bC8YU3d8VCteNGULgAAAAASUVORK5CYII=",text:"ImageStock",key:"logo"},className:P.a.logo},"logo")}),Object(f.jsx)("div",{className:P.a.linksBlock,children:i.map((function(e){return Object(f.jsx)(F,{data:e},e.key)}))})]})}),"/home"===a.pathname&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{children:Object(f.jsx)(H,{setSearchVal:t})})}),Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:P.a.topicWrapper,children:!!n&&s.map((function(e){return Object(f.jsx)(M,{title:e.title},e.id)}))})})]}),"/history"===a.pathname&&Object(f.jsx)(Y,{})]})})),X=a(64),J=a.n(X),K=a.p+"static/media/Preloader.e1658f1b.gif",G=function(){return Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:K,alt:"",className:J.a.preloader})})},q=a(7),Z=a.n(q),z=function(e){var t=e.match.params.id,a=Object(c.useState)(Z.a.imgRegular),r=Object(h.a)(a,2),s=r[0],n=r[1],i=Object(c.useState)(!1),o=Object(h.a)(i,2),j=o[0],u=o[1];Object(c.useEffect)((function(){if(JSON.parse(localStorage.getItem("Favorites")).length>0){!function(e){var t=JSON.parse(localStorage.getItem("Favorites"));u(t.includes(e))}(t)}}),[j]);var m=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getPhoto(t);case 2:return a=e.sent,c=a.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getCollections(t);case 2:return a=e.sent,c=a.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=Object(g.a)([t],(function(){return m(t)})),x=O.data,_=O.isSuccess,v=Object(g.a)(["collectionsList"],(function(){return A(x.related_collections.results[0].id)}),{enabled:!!x,onSuccess:function(){x.width<x.height&&n(Z.a.imgScaled)}}),S=v.data,N=v.isSuccess;return _&&N?Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"container p-0",children:[Object(f.jsxs)("div",{className:Z.a.photoInfo,children:[Object(f.jsxs)("div",{className:Z.a.infoTop,children:[Object(f.jsxs)("div",{className:Z.a.userInfo,children:[Object(f.jsx)("div",{className:Z.a.userProfileImg,children:Object(f.jsx)("img",{src:x.user.profile_image.medium,alt:""})}),Object(f.jsxs)("div",{className:Z.a.userProfile,children:[Object(f.jsx)("div",{className:Z.a.userName,children:x.user.name}),Object(f.jsx)("div",{className:Z.a.userLink,children:!!x.user.instagram_username&&Object(f.jsx)("a",{href:"https://instagram.com/".concat(x.user.instagram_username),target:"_blank",rel:"noreferrer",className:Z.a.link,children:"@".concat(x.user.instagram_username)})})]})]}),Object(f.jsxs)("div",{className:Z.a.imgActions,children:[Object(f.jsx)("button",{className:Z.a.toFav,type:"button",onClick:function(){!function(e){var t;JSON.parse(localStorage.getItem("Favorites")).length>0?(t=JSON.parse(localStorage.getItem("Favorites"))).includes(e)?(t=t.filter((function(t){return t!==e})),localStorage.setItem("Favorites",JSON.stringify(t)),u(!1)):(t=[].concat(Object(b.a)(t),[e]),localStorage.setItem("Favorites",JSON.stringify(t)),u(!0)):localStorage.setItem("Favorites",JSON.stringify([e]))}(t)},children:Object(f.jsxs)("svg",{width:"58",height:"58",viewBox:"0 0 58 58",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(f.jsx)("g",{filter:"url(#filter0_d)",children:Object(f.jsx)("rect",{x:"4",y:"4",width:"49.244",height:"49.244",rx:"8",fill:"white"})}),Object(f.jsx)("path",{d:"M30.5782 38.9207C29.6142 39.796 28.1302 39.796 27.1661 38.9081L27.0266 38.7812C20.3674 32.7562 16.0166 28.8114 16.1815 23.8898C16.2576 21.7335 17.3612 19.666 19.1497 18.4483C22.4983 16.1651 26.6334 17.2306 28.8658 19.8435C31.0983 17.2306 35.2334 16.1524 38.582 18.4483C40.3705 19.666 41.4741 21.7335 41.5502 23.8898C41.7277 28.8114 37.3643 32.7562 30.7051 38.8066L30.5782 38.9207Z",fill:j?"red":"#828282"}),Object(f.jsx)("defs",{children:Object(f.jsxs)("filter",{id:"filter0_d",x:"0",y:"0",width:"57.244",height:"57.244",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[Object(f.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),Object(f.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),Object(f.jsx)("feOffset",{}),Object(f.jsx)("feGaussianBlur",{stdDeviation:"2"}),Object(f.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),Object(f.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),Object(f.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})]})})]})}),Object(f.jsx)("div",{className:Z.a.download,children:Object(f.jsxs)("a",{href:"".concat(x.links.download,"?force=true"),target:"_blank",download:!0,rel:"noreferrer",children:[Object(f.jsx)("span",{className:Z.a.downloadIcon,children:Object(f.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADJSURBVHgB7ZXhDYIwEEa/GgdghG6gI7iBI8hKTqBOoJswAozgBuc14VcjtT2v1ZB7yQXIUfpK0zvAMNYKEXUcIy0Tch0K2aCcPYdP5ENuhwYiVTCRGBOJ+RuRbc5LXBfCkT3Ojz5jSM9jDvP9zTk3QQP+6EByhpw5crfmCTkTtOBVeUqX9cW/ISn32jL6EgKZehIFMvUlMmTaSSRk2ktEMheO+88kjNq4VJL3vefLCTqcufk9IIG+a3YxY2quT01PtoL3XGEYa+AFdyHN0z2XGE8AAAAASUVORK5CYII=",alt:""})}),Object(f.jsx)("span",{children:"Download"})]})})]})]}),Object(f.jsx)("div",{className:Z.a.imgBlock,children:Object(f.jsx)("img",{src:x.urls.regular,alt:"",className:s})}),!!x.tags.length>0&&Object(f.jsxs)("div",{className:Z.a.photoTags,children:[Object(f.jsx)("div",{className:Z.a.tagsTop,children:Object(f.jsx)("h3",{children:"\u041f\u043e\u0445\u043e\u0436\u0438\u0435 \u0442\u0435\u0433\u0438"})}),Object(f.jsx)("div",{className:Z.a.tagsBlock,children:x.tags.map((function(e,t){return t<5?Object(f.jsx)("div",{className:Z.a.tagItem,children:e.title},e.id):""}))})]}),Object(f.jsxs)("div",{className:Z.a.imgBackground,children:[Object(f.jsx)("img",{src:x.urls.regular,alt:""}),Object(f.jsx)("div",{className:Z.a.imgShadow,children:"\xa0"})]})]}),Object(f.jsxs)("div",{className:Z.a.relatedCols,children:[Object(f.jsxs)("div",{className:Z.a.relatedColsTop,children:[Object(f.jsx)("h3",{className:Z.a.relatedColsHeading,children:"\u041f\u043e\u0445\u043e\u0436\u0438\u0435 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438"}),Object(f.jsx)("button",{type:"button",children:"show more"})]}),!!N&&Object(f.jsx)(w,{photosList:S})]})]})}):null},$=function(){localStorage.getItem("Favorites")||localStorage.setItem("Favorites",[]);var e=Object(c.useState)("random"),t=Object(h.a)(e,2),a=t[0],r=t[1],s=function(){var e=Object(d.a)(l.a.mark((function e(t,a){var c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getPhotosList(t,a);case 2:return c=e.sent,r=c.data.results,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n=Object(u.a)(["projects",a],(function(e){var t=e.pageParam;return s(a,void 0===t?1:t)}),{getNextPageParam:function(e,t){return t.length+1}}),i=n.data,o=n.isSuccess,g=n.isLoading;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(W,{setSearchVal:r}),Object(f.jsx)(j.a,{path:"/favorites",children:Object(f.jsx)(I,{})}),Object(f.jsxs)(j.a,{path:"/home",children:[!!o&&Object(f.jsx)(w,{photosList:i.pages.flat()}),!!g&&Object(f.jsx)(G,{})]}),Object(f.jsx)(j.a,{path:"/photo/:id",component:z}),Object(f.jsxs)(j.a,{path:"/history",children:[!!o&&Object(f.jsx)(w,{photosList:i.pages.flat()}),!!g&&Object(f.jsx)(G,{})]})]})},ee=a(105),te=a(60),ae=a(65);var ce=function(){var e=new ee.a;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(te.a,{client:e,children:[Object(f.jsx)(i.a,{basename:"/photo-stock",children:Object(f.jsx)($,{})}),Object(f.jsx)(ae.ReactQueryDevtools,{initialIsOpen:!1})]})})},re=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,107)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),c(e),r(e),s(e),n(e)}))};a(99),a(100),a(101);n.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(ce,{})}),document.getElementById("root")),re()},13:function(e,t,a){e.exports={imgWrap:"Photo_imgWrap__3MBAr",infoWrap:"Photo_infoWrap__1SDeM",photoImage:"Photo_photoImage__6SFum",userProfile:"Photo_userProfile__3EsTo",userPhoto:"Photo_userPhoto__10PQ3",actionIcons:"Photo_actionIcons__2szkC",link:"Photo_link__1cq4p",pd40:"Photo_pd40__3XvbZ",pd5:"Photo_pd5__Hei3B",toFavorites:"Photo_toFavorites__2U05D",icon:"Photo_icon__2HsbS"}},20:function(e,t,a){e.exports={dirRow:"PhotosList_dirRow__1oRKI",dirCol:"PhotosList_dirCol__1mYKx",dirControl:"PhotosList_dirControl__2SfI9",changeDir:"PhotosList_changeDir__1uKIS",icon:"PhotosList_icon__2loZ9"}},25:function(e,t,a){e.exports={Header:"Header_Header__nxSxH",logoBlock:"Header_logoBlock___qjCd",topicBlock:"Header_topicBlock__BcTfr",topicItem:"Header_topicItem__1QD9C",headerLinksWrap:"Header_headerLinksWrap__yJP5u",linksBlock:"Header_linksBlock__2YKDL",topicWrapper:"Header_topicWrapper__32hbC",logo:"Header_logo__3Gqtt"}},40:function(e,t,a){e.exports={headerLink:"HeaderLinkItem_headerLink__3rw-c",linkText:"HeaderLinkItem_linkText__20RLx"}},45:function(e,t,a){e.exports={heading:"Favorites_heading__4kgh-"}},47:function(e,t,a){e.exports={box:"HeaderInput_box__2V9q4","input\u0421ontainer":"HeaderInput_input\u0421ontainer__33hl7",inputContainer:"HeaderInput_inputContainer__sGAx6"}},48:function(e,t,a){e.exports={topicWrapper:"SearchHistory_topicWrapper__-NlK6",heading:"SearchHistory_heading__1_xLL"}},63:function(e,t,a){e.exports={topicItem:"HeaderTopic_topicItem__ofkhl"}},64:function(e,t,a){e.exports={preloader:"Preloader_preloader__3rxAb"}},7:function(e,t,a){e.exports={photoInfo:"PhotoPage_photoInfo__1v68B",infoTop:"PhotoPage_infoTop__2A5-5",userInfo:"PhotoPage_userInfo__1Ol-0",userProfileImg:"PhotoPage_userProfileImg__19GKP",userProfile:"PhotoPage_userProfile__3aWyQ",userLink:"PhotoPage_userLink__1FZKr",userName:"PhotoPage_userName__2KN7s",imgActions:"PhotoPage_imgActions__3-0Uu",imgBlock:"PhotoPage_imgBlock__RD5yk",imgRegular:"PhotoPage_imgRegular__21eij",imgScaled:"PhotoPage_imgScaled__2EKKP",imgBackground:"PhotoPage_imgBackground__16TEE",download:"PhotoPage_download__1XrlD",toFav:"PhotoPage_toFav__2LmTc",downloadIcon:"PhotoPage_downloadIcon__1ZDF1",imgShadow:"PhotoPage_imgShadow__1caSz",photoTags:"PhotoPage_photoTags__1OTSo",tagsTop:"PhotoPage_tagsTop__2LsTH",tagsBlock:"PhotoPage_tagsBlock__1_1wx",tagItem:"PhotoPage_tagItem__2cWwB",relatedCols:"PhotoPage_relatedCols__1-nKW",relatedColsTop:"PhotoPage_relatedColsTop__NNHqh",relatedColsHeading:"PhotoPage_relatedColsHeading__zkcjY"}},70:function(e,t,a){},71:function(e,t,a){},99:function(e,t,a){}},[[102,1,2]]]);
//# sourceMappingURL=main.1fed6bdf.chunk.js.map