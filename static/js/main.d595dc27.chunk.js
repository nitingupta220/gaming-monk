(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),s=t.n(r),i=(t(91),t(92),t(72)),c=t(73),o=t(38),u=t(39),m=t(42),h=t(40),d=t(43),p=t(4),g=t(161),E=t(165),f=t(162),C=t(164),b=t(166),v=t(167),P=t(163),w=t(153),k=t(156),y=t(50),j=t.n(y),O=t(52),V=t.n(O),N=t(51),S=t.n(N),U=t(49),B=t.n(U),A=t(67),_=t.n(A),x=t(160),L=t(157),M=t(158),R=t(159),W=t(155),F=t(169),D=t(71),J=t.n(D),q=t(48),I=t.n(q),T=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(l)))).handleClose=function(){t.setState({open:!1})},t}return Object(d.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props,a=(e.classes,e.onClose),t=e.selectedValueAvatar,n=e.selectedValueEmail,r=e.selectedValueUserName,s=Object(c.a)(e,["classes","onClose","selectedValueAvatar","selectedValueEmail","selectedValueUserName"]);return l.a.createElement(F.a,Object.assign({onClose:this.handleClose,"aria-labelledby":"simple-dialog-title"},s),l.a.createElement(W.a,{id:"simple-dialog-title"},"User Details"),l.a.createElement(k.a,{"aria-label":"Close",style:{position:"absolute",right:20,top:7},onClick:a},l.a.createElement(J.a,null)),l.a.createElement("div",null,l.a.createElement(L.a,null,l.a.createElement(M.a,{style:{justifyContent:"center"}},l.a.createElement(R.a,null,l.a.createElement(x.a,{style:{height:150,width:150}},l.a.createElement("img",{src:t,alt:"",style:{height:150,width:150}})))),l.a.createElement(M.a,{style:{justifyContent:"center"}},"Username: ",r),l.a.createElement(M.a,{style:{justifyContent:"center"}},"Email: ",n))))}}]),a}(l.a.Component),X={avatar:{backgroundColor:I.a[100],color:I.a[600]}},$=Object(p.a)(X)(T),z=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(l)))).handleFirstPageButtonClick=function(e){t.props.onChangePage(e,0)},t.handleBackButtonClick=function(e){t.props.onChangePage(e,t.props.page-1)},t.handleNextButtonClick=function(e){t.props.onChangePage(e,t.props.page+1)},t.handleLastPageButtonClick=function(e){t.props.onChangePage(e,Math.max(0,Math.ceil(t.props.count/t.props.rowsPerPage)-1))},t}return Object(d.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.count,n=e.page,r=e.rowsPerPage,s=e.theme;return l.a.createElement("div",{className:a.root},l.a.createElement(k.a,{onClick:this.handleFirstPageButtonClick,disabled:0===n,"aria-label":"First Page"},"rtl"===s.direction?l.a.createElement(B.a,null):l.a.createElement(j.a,null)),l.a.createElement(k.a,{onClick:this.handleBackButtonClick,disabled:0===n,"aria-label":"Previous Page"},"rtl"===s.direction?l.a.createElement(S.a,null):l.a.createElement(V.a,null)),l.a.createElement(k.a,{onClick:this.handleNextButtonClick,disabled:n>=Math.ceil(t/r)-1,"aria-label":"Next Page"},"rtl"===s.direction?l.a.createElement(V.a,null):l.a.createElement(S.a,null)),l.a.createElement(k.a,{onClick:this.handleLastPageButtonClick,disabled:n>=Math.ceil(t/r)-1,"aria-label":"Last Page"},"rtl"===s.direction?l.a.createElement(j.a,null):l.a.createElement(B.a,null)))}}]),a}(l.a.Component),G=Object(p.a)(function(e){return{root:{flexShrink:0,color:e.palette.text.secondary}}},{withTheme:!0})(z),H=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(l)))).state={users:[],page:0,rowsPerPage:3,open:!1,selectedValueAvatar:null,selectedValueUserName:null,selectedValueEmail:null,filteredUsers:[]},t.filterList=function(e){var a,n=e.target.value;a=Object(i.a)(t.state.users).filter(function(e){return-1!==e.email.toLowerCase().search(n)||-1!==e.first_name.toLowerCase().search(n)}),t.setState({filteredUsers:a})},t.handleChangePage=function(e,a){t.setState({page:a})},t.handleChangeRowsPerPage=function(e){t.setState({page:0,rowsPerPage:e.target.value})},t.handleClickOpen=function(e){t.setState({open:!0,selectedValueAvatar:e.avatar,selectedValueEmail:e.email,selectedValueUserName:e.first_name+e.last_name})},t.handleClose=function(e){t.setState({open:!1})},t}return Object(d.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;_.a.get("https://reqres.in/api/users?per_page=20").then(function(a){var t=a.data.data.map(function(e){return{first_name:"".concat(e.first_name),last_name:"".concat(e.last_name),email:"".concat(e.email),id:"".concat(e.id),avatar:"".concat(e.avatar)}});e.setState({users:t,filteredUsers:t})})}},{key:"render",value:function(){var e=this,a=this.props.classes,t=this.state,n=t.users,r=t.rowsPerPage,s=t.page,i=t.filteredUsers,c=r-Math.min(r,n.length-s*r);return l.a.createElement(w.a,{className:a.root},l.a.createElement("div",{className:a.tableWrapper},l.a.createElement("div",null,l.a.createElement("h1",{style:{margin:0}},"Users"),l.a.createElement("input",{style:{padding:5,borderRadius:2,border:"1px solid darkgrey",width:200,float:"right",marginRight:10,position:"relative",bottom:30},type:"text",placeholder:"Search",onChange:this.filterList})),l.a.createElement(g.a,{className:a.table},l.a.createElement(f.a,null,l.a.createElement(P.a,null,l.a.createElement(C.a,null,"S.No."),l.a.createElement(C.a,{align:"right"},"First Name"),l.a.createElement(C.a,{align:"right"},"Last Name"),l.a.createElement(C.a,{align:"right"},"Email"))),l.a.createElement(E.a,null,i.slice(s*r,s*r+r).map(function(a){return l.a.createElement(P.a,{style:{cursor:"pointer"},key:a.id,onClick:function(){return e.handleClickOpen(a)}},l.a.createElement(C.a,null,a.id),l.a.createElement(C.a,{component:"th",scope:"row",align:"right"},a.first_name),l.a.createElement(C.a,{align:"right"},a.last_name),l.a.createElement(C.a,{align:"right"},a.email))}),c>0&&l.a.createElement(P.a,{style:{height:48*c}},l.a.createElement(C.a,{colSpan:6}))),l.a.createElement(b.a,null,l.a.createElement(P.a,null,l.a.createElement(v.a,{rowsPerPageOptions:[3,6,9,12],colSpan:3,count:n.length,rowsPerPage:r,page:s,SelectProps:{native:!0},onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage,ActionsComponent:G})))),l.a.createElement($,{selectedValueAvatar:this.state.selectedValueAvatar,selectedValueEmail:this.state.selectedValueEmail,selectedValueUserName:this.state.selectedValueUserName,open:this.state.open,onClose:this.handleClose})))}}]),a}(l.a.Component),K=Object(p.a)(function(e){return{root:{width:"100%"},table:{minWidth:500},tableWrapper:{overflowX:"auto"}}})(H);var Q=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(K,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},86:function(e,a,t){e.exports=t(121)},91:function(e,a,t){},92:function(e,a,t){}},[[86,1,2]]]);
//# sourceMappingURL=main.d595dc27.chunk.js.map