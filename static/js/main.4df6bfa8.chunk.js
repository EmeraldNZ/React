(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(27)},21:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),s=a.n(o),i=(a(20),a(21),a(2)),c=a(3),m=a(5),l=a(4),p=a(1),d=a(6),u=(a(7),a(13)),h=a(8),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).state={petName:"",ownerName:"",aptDate:"",aptTime:"",aptNotes:""},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.handleAdd=a.handleAdd.bind(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleAdd",value:function(e){e.preventDefault();var t={petName:this.state.petName,ownerName:this.state.ownerName,aptDate:this.state.aptDate+" "+this.state.aptTime,aptNotes:this.state.aptNotes};this.props.addOneAppointment(t),this.setState({petName:"",ownerName:"",aptDate:"",aptTime:"",aptNotes:""}),this.props.toggleForm()}},{key:"handleChange",value:function(e){var t=e.target.value,a=e.target.name;this.setState(Object(u.a)({},a,t))}},{key:"render",value:function(){return r.a.createElement("div",{className:"card textcenter mt-3 "+(this.props.formDisplay?"":"add-appintment")},r.a.createElement("div",{className:"card-header apt-addheading text-info text-center",onClick:this.props.toggleForm},r.a.createElement(h.a,null)," Add Appointment"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{action:"#",id:"aptForm",noValidate:!0,onSubmit:this.handleAdd},r.a.createElement("div",{className:"form-group form-row"},r.a.createElement("label",{htmlFor:"petName",className:"col-md-5 col-form-label text-md-right",readOnly:!0},"Pet Name"),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("input",{type:"text",className:"form-control",name:"petName",placeholder:"Pet's Name",value:this.state.petName,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group form-row"},r.a.createElement("label",{htmlFor:"ownerName",className:"col-md-5 col-form-label text-md-right",readOnly:!0},"Pet Owner"),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("input",{type:"text",className:"form-control",name:"ownerName",placeholder:"Owner's Name",value:this.state.ownerName,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group form-row"},r.a.createElement("label",{htmlFor:"aptDate",className:"col-md-5 col-form-label text-md-right"},"Date"),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("input",{type:"date",className:"form-control",name:"aptDate",id:"aptDate",value:this.state.aptDate,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group form-row"},r.a.createElement("label",{htmlFor:"aptTime",className:"col-md-5 col-form-label text-md-right"},"Time"),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("input",{type:"time",className:"form-control",name:"aptTime",id:"aptTime",value:this.state.aptTime,onChange:this.handleChange,required:!0}))),r.a.createElement("div",{className:"form-group form-row"},r.a.createElement("label",{htmlFor:"aptNotes",className:"col-md-5 col-form-label text-md-right"},"Appointment Notes"),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("textarea",{className:"form-control",name:"aptNotes",rows:"6",cols:"250",placeholder:"Appointment Notes",value:this.state.aptNotes,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group form-row align-items-center justify-content-center"},r.a.createElement("button",{className:"btn btn-warning d-block"},"SEND")))))}}]),t}(n.Component),N=a(14),b=a.n(N),g=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"appointment-list item-list mb-3"},this.props.listAppointment.map(function(t){return r.a.createElement("div",{className:"pet-item col media py-3",key:t.aptId},r.a.createElement("div",{className:"mr-3"},r.a.createElement("button",{className:"pet-delete btn btn-sm btn-danger",onClick:function(){return e.props.deleteAppointment(t)}},"X")),r.a.createElement("div",{className:"pet-info media-body"},r.a.createElement("div",{className:"pet-head d-flex"},r.a.createElement("span",{className:"pet-name",contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(a){return e.props.updateInfo("petName",a.target.innerText,t.aptId)}},t.aptId+1,". ",t.petName),r.a.createElement("span",{className:"apt-date ml-auto"},r.a.createElement(b.a,{date:t.aptDate,parse:"YYYY-MM-DD hh:mm",format:"ddd DD-MMM-YYYY hh:mma"}))),r.a.createElement("div",{className:"owner-name"},r.a.createElement("span",{className:"label-item"},"Owner: "),r.a.createElement("span",{contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(a){return e.props.updateInfo("ownerName",a.target.innerText,t.aptId)}},t.ownerName)),r.a.createElement("div",{className:"apt-notes",contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(a){return e.props.updateInfo("aptNotes",a.target.innerText,t.aptId)}},t.aptNotes)))}))}}]),t}(n.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"search-appointments row justify-content-center my-4"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"search-bar"},r.a.createElement("i",{className:"search-icon"},r.a.createElement(h.b,null)),r.a.createElement("input",{type:"text",id:"searchApts",className:"form-control","aria-label":"Search Appointments",onChange:function(t){return e.props.searchApts(t.target.value)}})),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"button",className:"btn btn-warning dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Sort by: ",r.a.createElement("span",{className:"caret"})),r.a.createElement("div",{className:"sort-menu dropdown-menu dropdown-menu-right"},r.a.createElement("button",{className:"sort-by dropdown-item "+("petName"===this.props.orderBy?"active":""),onClick:function(t){return e.props.changeOrder("petName",e.props.orderDirection)},href:"#"},"Pet Name"),r.a.createElement("button",{className:"sort-by dropdown-item "+("aptDate"===this.props.orderBy?"active":""),onClick:function(t){return e.props.changeOrder("aptDate",e.props.orderDirection)},href:"#"},"Date"),r.a.createElement("button",{className:"sort-by dropdown-item "+("ownerName"===this.props.orderBy?"active":""),onClick:function(t){return e.props.changeOrder("ownerName",e.props.orderDirection)},href:"#"},"Owner"),r.a.createElement("div",{role:"separator",className:"dropdown-divider"}),r.a.createElement("button",{className:"sort-by dropdown-item "+("ascending"===this.props.orderDirection?"active":""),onClick:function(t){return e.props.changeOrder(e.props.orderBy,"ascending")},href:"#"},"Ascending"),r.a.createElement("button",{className:"sort-by dropdown-item "+("descending"===this.props.orderDirection?"active":""),onClick:function(){return e.props.changeOrder(e.props.orderBy,"descending")},href:"#"},"Descending"))))))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).state={myAppointments:[],lastIndex:0,formDisplay:!1,orderDirection:"ascending",orderBy:"aptDate",queryText:""},a.deleteAppointment=a.deleteAppointment.bind(Object(p.a)(a)),a.toggleForm=a.toggleForm.bind(Object(p.a)(a)),a.addOneAppointment=a.addOneAppointment.bind(Object(p.a)(a)),a.changeOrder=a.changeOrder.bind(Object(p.a)(a)),a.searchApts=a.searchApts.bind(Object(p.a)(a)),a.updateInfo=a.updateInfo.bind(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"toggleForm",value:function(){this.setState({formDisplay:!this.state.formDisplay})}},{key:"searchApts",value:function(e){this.setState({queryText:e})}},{key:"changeOrder",value:function(e,t){this.setState({orderBy:e,orderDirection:t})}},{key:"updateInfo",value:function(e,t,a){var n=this.state.myAppointments;n[e]=t,this.setState({myAppointments:n})}},{key:"addOneAppointment",value:function(e){var t=this.state.myAppointments;e.aptId=this.state.lastIndex,t.unshift(e),this.setState({myAppointments:t,lastIndex:this.state.lastIndex+1})}},{key:"deleteAppointment",value:function(e){var t=this.state.myAppointments;t=t.filter(function(t){return t!==e}),this.setState({myAppointments:t})}},{key:"componentDidMount",value:function(){var e=this;fetch("./data.json").then(function(e){return e.json()}).then(function(t){var a=t.map(function(t){return t.aptId=e.state.lastIndex,e.setState({lastIndex:e.state.lastIndex+1}),t});e.setState({myAppointments:a})})}},{key:"render",value:function(){var e,t=this,a=this.state.myAppointments;return e="ascending"===this.state.orderDirection?1:-1,a=a.sort(function(a,n){return a[t.state.orderBy].toLowerCase()<n[t.state.orderBy].toLowerCase()?-1*e:1*e}).filter(function(e){return e.petName.toLowerCase().includes(t.state.queryText.toLowerCase())||e.ownerName.toLowerCase().includes(t.state.queryText.toLowerCase())||e.aptDate.includes(t.state.queryText)}),r.a.createElement("main",{className:"page bg-white",id:"petratings"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 bg-white"},r.a.createElement("div",{className:"container"},r.a.createElement(f,{formDisplay:this.state.formDisplay,toggleForm:this.toggleForm,addOneAppointment:this.addOneAppointment}),r.a.createElement(v,{orderBy:this.state.orderBy,orderDirection:this.state.orderDirection,changeOrder:this.changeOrder,searchApts:this.searchApts}),r.a.createElement(g,{listAppointment:a,deleteAppointment:this.deleteAppointment,updateInfo:this.updateInfo}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(11),a(24),a(25);s.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,a){}},[[15,1,2]]]);
//# sourceMappingURL=main.4df6bfa8.chunk.js.map