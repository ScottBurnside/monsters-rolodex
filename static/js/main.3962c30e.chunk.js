(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],{22:function(e,t,s){},23:function(e,t,s){},24:function(e,t,s){},25:function(e,t,s){},27:function(e,t,s){},28:function(e,t,s){},29:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(5),n=s.n(c),i=s(16),r=s.n(i),l=(s(22),s(1)),d=s(2),o=s(4),h=s(3),j=(s(23),function(e){var t,s,c;return Object(a.jsxs)("div",{className:"card-container",style:{borderColor:null===(t=e.monster)||void 0===t?void 0:t.rating},children:[Object(a.jsx)("img",{alt:"monster",src:"https://res.cloudinary.com/snyk/image/upload/v1537345897/press-kit/brand/logo-vertical-black.png?set=set2&size=180x180"}),Object(a.jsxs)("h2",{children:[" ",null===(s=e.monster)||void 0===s?void 0:s.value," "]}),Object(a.jsxs)("p",{children:[" ",null===(c=e.monster)||void 0===c?void 0:c.name," "]})]})}),b=(s(24),function(e){return Object(a.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(a.jsx)(j,{monster:e},e.id)}))})}),m=(s(25),function(e){var t=e.placeholder,s=e.handleChange;return Object(a.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:s})}),u=(s(26),s(11)),x=(s(27),function(e){return Object(a.jsxs)("div",{className:"list",children:[Object(a.jsxs)("div",{className:"dashboard-card",children:[Object(a.jsx)("div",{className:"dashboard-card-header",children:Object(a.jsx)("div",{className:"header-text",children:Object(a.jsx)("span",{children:"Jira"})})}),Object(a.jsxs)("div",{className:"dashboard-card-content",children:[Object(a.jsxs)("div",{className:"info-content content-child",children:[Object(a.jsx)("span",{children:"Sprint Date"}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:"Sprint Goals"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"goal1"}),Object(a.jsx)("li",{children:"goal2"})]})]}),Object(a.jsx)("div",{className:"content-child",children:Object(a.jsx)(u.b,{data:{labels:["Bugs","Features","Other"],datasets:[{label:"Ticket Type Commitment",data:[300,50,100],backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"]}]},height:200,width:300,options:{maintainAspectRatio:!1}})}),Object(a.jsx)("div",{className:"content-child",children:Object(a.jsx)(u.a,{data:{labels:[1,2,3,4,5],datasets:[{label:"Burn Up Chart",data:[65,59,80,81,56,55,40],fill:!1,borderColor:"#ff7f00",tension:.1}]},height:200,width:300,options:{maintainAspectRatio:!1}})}),Object(a.jsx)("div",{className:"content-child",children:Object(a.jsx)(u.b,{data:{labels:["Bugs","Features","Other"],datasets:[{label:"Ticket Type Delivered",data:[300,50,100],backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"]}]},height:200,width:300,options:{maintainAspectRatio:!1}})})]})]}),Object(a.jsxs)("div",{className:"dashboard-card",children:[Object(a.jsx)("div",{className:"dashboard-card-header",children:Object(a.jsx)("div",{className:"header-text",children:Object(a.jsx)("span",{children:"Reg"})})}),Object(a.jsxs)("div",{className:"dashboard-card-content",children:[Object(a.jsx)("div",{className:"content-child",children:Object(a.jsx)(u.a,{data:{labels:[1,2,3,4,5],datasets:[{label:"Diagram",data:[65,59,80,81,56,55,40],fill:!1,borderColor:"#ff7f00",tension:.1}]},height:200,width:300,options:{maintainAspectRatio:!1}})}),Object(a.jsx)("div",{className:"content-child",children:Object(a.jsx)(u.a,{data:{labels:[1,2,3,4,5],datasets:[{label:"Bugs",data:[65,59,80,81,56,55,40],fill:!1,borderColor:"#ff7f00",tension:.1}]},height:200,width:300,options:{maintainAspectRatio:!1}})}),Object(a.jsx)("div",{className:"content-child",children:Object(a.jsx)(u.a,{data:{labels:[1,2,3,4,5],datasets:[{label:"Diagram",data:[65,59,80,81,56,55,40],fill:!1,borderColor:"#ff7f00",tension:.1}]},height:200,width:300,options:{maintainAspectRatio:!1}})}),Object(a.jsx)("div",{className:"content-child",children:"stats"})]})]}),Object(a.jsxs)("div",{className:"dashboard-card",children:[Object(a.jsx)("div",{className:"dashboard-card-header",children:Object(a.jsx)("div",{className:"header-text",children:Object(a.jsx)("span",{children:"AWS"})})}),Object(a.jsxs)("div",{className:"dashboard-card-content",children:[Object(a.jsx)("div",{className:"content-child",children:Object(a.jsx)(u.a,{data:{labels:e.costData.labels,datasets:[{label:"Costs",data:e.costData.data,fill:!1,borderColor:"#ff7f00",tension:.1}]},width:1e3,height:200,options:{maintainAspectRatio:!1}})}),Object(a.jsx)("div",{className:"content-child",children:"stats"})]})]})]})}),O=(s(28),function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:"",costsLabels:[],costsValues:[]},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://metrics.enthuse-test.com/v1/costs").then((function(e){return e.json()})).then((function(t){return e.setState({costsLabels:t[0].labels,costsValues:t[0].data})})),fetch("https://metrics.enthuse-test.com/v1/metrics").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,s=e.searchField,c=e.costsLabels,n=e.costsValues,i=(e.cost,t.filter((function(e){return null===e||void 0===e?void 0:e.name.toLowerCase().includes(s.toLowerCase())}))),r={labels:c,data:n};return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("img",{alt:"logo",src:"https://id.enthuse-test.com/sso/static/common/images/enthuse/enthuse_logo_horizontal.svg"}),Object(a.jsx)("h1",{children:" Metrics Dashboard "}),Object(a.jsx)(m,{placeholder:"search metrics",handleChange:this.handleChange}),Object(a.jsx)(b,{monsters:i}),Object(a.jsx)(x,{costData:r})]})}}]),s}(c.Component)),v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,30)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))};r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),v()}},[[29,1,2]]]);
//# sourceMappingURL=main.3962c30e.chunk.js.map