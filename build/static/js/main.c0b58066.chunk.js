(this.webpackJsonpdiclient=this.webpackJsonpdiclient||[]).push([[0],{340:function(e,t,a){e.exports=a(501)},345:function(e,t,a){},346:function(e,t,a){},482:function(e,t,a){},501:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(12),l=a.n(r),c=(a(345),a(34)),i=(a(346),a(331)),s=a(323),u=a.n(s),d=a(526),m=a(531),p=a(528),b=a(80),E=a(192),f=a(267),C=a(13),g=a(4),h=a(268),y=a(269),v=Object(n.createContext)(),x=function(e){var t=Object(n.useState)({dataDisplay:{title:"The Employee List",rows:[["Joe James","Test Corp","Yonkers","NY"],["John Walsh","Test Corp","Hartford","CT"],["Bob Herm","Test Corp","Tampa","FL"],["James Houston","Test Corp","Dallas","TX"]],columns:["Name","Company","City","State"]},stats:{problemType:"classification",numSamples:116,numFeatures:13,numTarget:1,featureStats:[{featureName:"calorie",central:3,type:"Nominal",nullValCount:20},{featureName:"ATP",central:1,type:"Interal",nullValCount:0}]},featureImportances:[{featureName:"Calorie",linear:1,tree:2,statistical:1},{featureName:"ATP",linear:3,tree:4,statistical:3},{featureName:"Calcium",linear:5,tree:5,statistical:5}],plotData:{problemType:"regression",x:[1,10,2],y:[3,16,9],xy:[{x:1,y:3},{x:10,y:16},{x:2,y:9}]},model_info:{best_model_name:"RandomForestRegressor",accuracy:"99.32"}}),a=Object(c.a)(t,2),r=a[0],l=a[1];return o.a.createElement(v.Provider,{value:{data:r,setData:l}},e.children)},D=Object(f.a)({table:{minWidth:650}}),B=(Object(g.a)((function(e){return{head:{backgroundColor:"#084c61",color:"#BCE7FD"},body:{fontSize:14}}}))(h.a),Object(g.a)((function(e){return{root:{"&:nth-of-type(even)":{backgroundColor:"#f4f4f4"}}}}))(y.a),function(){var e=Object(n.useContext)(v).data,t=(D(),{width:"27%",borderSizing:"border-box",borderRadius:"10px",padding:"20px",background:"#084c61",color:"#BCE7FD"});return o.a.createElement("div",{className:"tabElement"},o.a.createElement(b.a,{variant:"h2",gutterBottom:!0},e.stats.problemType.charAt(0).toUpperCase()+e.stats.problemType.substring(1,e.stats.problemType.length)," Problem"),o.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"}},o.a.createElement("div",{style:t},o.a.createElement(b.a,{variant:"h3"},e.stats.numSamples),o.a.createElement(b.a,null,"Samples")),o.a.createElement("div",{style:t},o.a.createElement(b.a,{variant:"h3"},e.stats.numFeatures),o.a.createElement(b.a,null,"Features")),o.a.createElement("div",{style:t},o.a.createElement(b.a,{variant:"h3"},e.stats.numTarget),o.a.createElement(b.a,null,"Target"))),o.a.createElement("div",{style:{marginTop:"30px"}}))}),O=a(324),j=a.n(O),k=a(84),F=a(525),T=(Object(g.a)((function(e){return{head:{backgroundColor:"#084c61",color:"#BCE7FD"},body:{fontSize:14}}}))(h.a),Object(g.a)((function(e){return{root:{"&:nth-of-type(even)":{backgroundColor:"#f4f4f4"}}}}))(y.a),function(){var e=Object(n.useContext)(v).data;return o.a.createElement("div",{className:"tabElement"},o.a.createElement(b.a,{variant:"h2",gutterBottom:!0},"The Data"),o.a.createElement("div",null,o.a.createElement(F.a,{theme:Object(k.a)({overrides:{MUIDataTableHead:{root:{backgroundColor:"#FF0000"},"MUIDataTableHead-responsiveStacked-40":{backgroundColor:"#FF0000"}}}})},o.a.createElement(j.a,{title:e.dataDisplay.title,data:e.dataDisplay.rows,columns:e.dataDisplay.columns,options:{selectableRowsHeader:!1,selectableRows:"none"}}))))}),S=a(201),w=a(280),N=(Object(g.a)({root:{"& label.Mui-focused":{color:"green"},"& .MuiInput-underline:after":{borderBottomColor:"green"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"red"},"&:hover fieldset":{borderColor:"yellow"},"&.Mui-focused fieldset":{borderColor:"green"}}}})(w.a),function(){var e=Object(n.useContext)(v).data,t={labels:e.plotData.x,datasets:[{label:"My First dataset",fill:!1,lineTension:.1,backgroundColor:"#084c61",borderColor:"#BCE7FD",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#084c61",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:e.plotData.xy}]},a={datasets:[{fill:!0,lineTension:.1,backgroundColor:"#084c61",borderColor:"#BCE7FD",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:e.plotData.colors_points,pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:3,pointRadius:2.5,pointHitRadius:10,label:"Scatter plot",data:e.plotData.xy}]};return o.a.createElement("div",{className:"tabElement"},o.a.createElement(b.a,{variant:"h2",gutterBottom:!0},"Features* vs Target"),o.a.createElement(b.a,{variant:"h7",style:{color:"gray"}},"* Compressed using a decomposition method like PCA"),o.a.createElement("div",{style:{marginTop:"30px",backgroundColor:"#084c61",color:"white",borderRadius:"10px",padding:"20px"}},"classification"==e.plotData.problem_type?o.a.createElement(S.Scatter,{style:{backgroundColor:"#084c61"},data:a,options:{legend:{display:!0,labels:{fontColor:"#BCE7FD"}},scales:{yAxes:[{scaleLabel:{display:!0,labelString:"2nd Principal Component",fontColor:"#BCE7FD"},ticks:{fontColor:"#BCE7FD"}}],xAxes:[{scaleLabel:{display:!0,labelString:"1st Principal Component",fontColor:"#BCE7FD"},ticks:{fontColor:"#BCE7FD"}}]}}}):o.a.createElement(S.Line,{style:{backgroundColor:"#084c61"},data:t,options:{legend:{display:!0,labels:{fontColor:"#BCE7FD"}},scales:{yAxes:[{scaleLabel:{display:!0,labelString:"target",fontColor:"#BCE7FD"},ticks:{fontColor:"#BCE7FD"}}],xAxes:[{scaleLabel:{display:!0,labelString:"1st Principal Component",fontColor:"#BCE7FD"},ticks:{fontColor:"#BCE7FD"}}]}}})))}),I=a(270),M=a(271),R=a(529),H=a(278),A=a(147),P=Object(f.a)({table:{minWidth:650}}),L=Object(g.a)((function(e){return{head:{backgroundColor:"#084c61",color:"#BCE7FD"},body:{fontSize:14}}}))(h.a),W=Object(g.a)((function(e){return{root:{"&:nth-of-type(even)":{backgroundColor:"#f4f4f4"}}}}))(y.a),z=function(){var e=Object(n.useContext)(v).data,t=P();return o.a.createElement("div",{className:"tabElement"},o.a.createElement(b.a,{variant:"h2",gutterBottom:!0},"Feature Importance"),o.a.createElement(b.a,{variant:"h8",gutterBottom:!0},"This table shows the features as ranked by the respective method"),o.a.createElement("div",{style:{marginTop:"30px"}},o.a.createElement(R.a,{component:A.a},o.a.createElement(I.a,{className:t.table,"aria-label":"simple table"},o.a.createElement(H.a,null,o.a.createElement(W,null,o.a.createElement(L,null,"Feature Name"),o.a.createElement(L,null,"Tree"),o.a.createElement(L,null,"Statistical Test"))),o.a.createElement(M.a,null,e.featureImportances.map((function(e){return o.a.createElement(W,{key:e.name},o.a.createElement(L,{component:"th",scope:"row"},e.featureName),o.a.createElement(L,null,e.tree),o.a.createElement(L,null,e.statistical))})))))))},J=a(115),_=a(272),U=(a(482),a(95)),G=a.n(U),V=Object(g.a)({root:{color:"#084c61","& label.Mui-focused":{color:"#084c61"},"& label":{color:"#084c61"},"& .MuiInput-underline:after":{borderBottomColor:"#084c61"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#084c61",borderWidth:"2px"},"&:hover fieldset":{borderColor:"#084c61"},"&.Mui-focused fieldset":{borderColor:"#084c61"}}}})(w.a),Y=Object(f.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},input:{display:"none"},inputField:{color:"#BCE7FD",fontSize:"14px",marginTop:"15px"},button:{backgroundColor:"#084c61",color:"#BCE7FD","&:hover":{backgroundColor:"#084c61",color:"#BCE7FD"}},fontColor:{color:"#BCE7FD"}}})),X=function(){var e,t=Object(n.useState)(null),a=Object(c.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)([]),s=Object(c.a)(i,2),u=s[0],d=s[1],m=Object(n.useContext)(v).data,p=Y();return o.a.createElement("div",{className:"tabElement"},o.a.createElement(b.a,{variant:"h2",gutterBottom:!0},"Machine Learning"),o.a.createElement(b.a,{variant:"h7"},"We tried different Machinne Learning Models for this problem and the best one is: ",o.a.createElement("b",null,m.model_info.best_model_name)," with test accuracy of ",o.a.createElement("b",null,m.model_info.accuracy)),o.a.createElement("div",{style:{display:"flex",marginTop:"30px",justifyContent:"space-between"}},o.a.createElement(V,{onChange:function(e){d(e.target.value)},defaultValue:"e.g [3,200,3.5,6]",className:"testtubeinput",style:{width:"70%"},variant:"outlined",label:"Features"}),o.a.createElement(_.a,(e={variant:"contained",style:{borderRadius:50},className:"testtubebtn"},Object(J.a)(e,"style",{width:"15%"}),Object(J.a)(e,"onClick",(function(){G()({method:"post",url:"/predict",withCredentials:!0,headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},data:{features:JSON.parse(u)}}).then((function(e){l(e.data.prediction)}))})),Object(J.a)(e,"variant","contained"),Object(J.a)(e,"className",p.button),e),"Predict"),o.a.createElement("div",{style:{width:"15%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"0 30px 30px 0",border:"solid 2px #084c61",paddingRight:"5px"}},r)))};function q(e){var t=e.children,a=e.value,n=e.index,r=Object(i.a)(e,["children","value","index"]);return o.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"scrollable-auto-tabpanel-".concat(n),"aria-labelledby":"scrollable-auto-tab-".concat(n),style:{overflowY:"auto"}},r),a===n&&o.a.createElement(E.a,{p:3},o.a.createElement(b.a,null,t)))}function K(e){return{id:"scrollable-auto-tab-".concat(e),"aria-controls":"scrollable-auto-tabpanel-".concat(e)}}var Q=Object(f.a)((function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}}})),Z=function(){var e=Q(),t=Object(C.a)(),a=o.a.useState(0),n=Object(c.a)(a,2),r=n[0],l=n[1];return o.a.createElement("div",{className:e.root},o.a.createElement(d.a,{position:"sticky",color:"default"},o.a.createElement(m.a,{TabIndicatorProps:{style:{backgroundColor:"#084c61",color:"#fff"}},inkBarStyle:{backgroundColor:"#084c61"},style:{background:"#680E4B",color:"#C492B1"},value:r,onChange:function(e,t){l(t)},variant:"fullWidth",scrollButtons:"auto","aria-label":"scrollable auto tabs example",centered:!0},o.a.createElement(p.a,Object.assign({label:"The Dataset"},K(0))),o.a.createElement(p.a,Object.assign({label:"Dataset Stats"},K(1))),o.a.createElement(p.a,Object.assign({label:"Features vs Target"},K(2))),o.a.createElement(p.a,Object.assign({label:"Feature Importances"},K(3))),o.a.createElement(p.a,Object.assign({label:"Machine Learning"},K(4))))),o.a.createElement(u.a,{axis:"rt1"===t.direction?"x-reverse":"x",index:r,onChangeIndex:function(e){l(e)}},o.a.createElement(q,{value:r,index:0},o.a.createElement(T,null)),o.a.createElement(q,{value:r,index:1},o.a.createElement(B,null)),o.a.createElement(q,{value:r,index:2},o.a.createElement(N,null)),o.a.createElement(q,{value:r,index:3},o.a.createElement(z,null)),o.a.createElement(q,{value:r,index:4},o.a.createElement(X,null))))},$=a(193),ee=a(330),te=a.n(ee),ae=a(116),ne=a.n(ae),oe=a(329),re=a.n(oe),le=a(161),ce=a.n(le),ie=a(281),se=Object(g.a)({root:{color:"#BCE7FD","& label.Mui-focused":{color:"#BCE7FD"},"& label":{color:"#BCE7FD"},"& .MuiInput-underline:after":{borderBottomColor:"#BCE7FD"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#BCE7FD",borderWidth:"2px"},"&:hover fieldset":{borderColor:"#BCE7FD"},"&.Mui-focused fieldset":{borderColor:"#BCE7FD"}}}})(w.a),ue=Object(f.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},input:{display:"none"},inputField:{color:"#BCE7FD",fontSize:"14px",marginTop:"15px"},button:{marginTop:"15px",width:"100%",backgroundColor:"#084c61",color:"#BCE7FD","&:hover":{backgroundColor:"#084c61",color:"#BCE7FD"}},fontColor:{color:"#BCE7FD"}}})),de=function(){var e=Object(n.useContext)(v).setData,t=Object(n.useState)(null),a=Object(c.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(""),s=Object(c.a)(i,2),u=s[0],d=s[1],m=Object(n.useState)(!1),p=Object(c.a)(m,2),b=(p[0],p[1]),E=Object(n.useState)(!1),f=Object(c.a)(E,2),C=f[0],g=f[1],h=Object(n.useState)(!1),y=Object(c.a)(h,2),x=y[0],D=y[1],B=Object(n.useState)({custom:!1,prostate:!1,heart:!1,stockprices:!1}),O=Object(c.a)(B,2),j=O[0],k=O[1],F=ue();return o.a.createElement("div",{className:"window"},o.a.createElement("div",{className:x?"main":"shrinkedMain"},o.a.createElement("div",{className:"sidebar"},o.a.createElement("h2",null,"Data Insights.io"),o.a.createElement("div",{style:{flexGrow:1,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",marginTop:"-20%"}},o.a.createElement("input",{onChange:function(e){e.target.files?(b(!0),k({custom:!0,prostate:!1,heart:!1,stockprices:!1}),l(e.target.files[0])):b(!1)},accept:"text/csv",className:F.input,id:"icon-button-file",type:"file"}),o.a.createElement("label",{htmlFor:"icon-button-file"},o.a.createElement($.a,{style:{background:"#BCE7FD"},"aria-label":"upload picture",component:"span"},0==j.custom?o.a.createElement(te.a,null):o.a.createElement(ne.a,null))),o.a.createElement("span",{style:{fontSize:"14px",marginTop:"5px"}}," Allowed Format .csv"),o.a.createElement(se,{style:{color:"#BCE7FD"},InputProps:{className:F.fontColor},onChange:function(e){d(e.target.value)},className:F.inputField,label:"Target Name",variant:"outlined",id:"custom-css-outlined-input"}),o.a.createElement("div",{style:{marginTop:"7px"},align:"center"},o.a.createElement("p",null,"OR"),o.a.createElement("p",null,"Select among these example datasets")),o.a.createElement("div",{style:{marginTop:"10px",display:"flex",justifyContent:"space-around",width:"100%"}},o.a.createElement(ie.a,{style:{fontSize:"18px"},title:"prostate Dataset"},o.a.createElement($.a,{onClick:function(e){k({custom:!1,prostate:!0,heart:!1,stockprices:!1})},style:{background:"#BCE7FD"},"aria-label":"upload picture",component:"span"},1==j.prostate?o.a.createElement(ne.a,null):o.a.createElement(ce.a,null))),o.a.createElement(ie.a,{title:"Stock Prices Dataset"},o.a.createElement($.a,{onClick:function(e){k({custom:!1,prostate:!1,heart:!1,stockprices:!0})},style:{background:"#BCE7FD"},"aria-label":"upload picture",component:"span"},1==j.stockprices?o.a.createElement(ne.a,null):o.a.createElement(ce.a,null))),o.a.createElement(ie.a,{title:"heart Dataset"},o.a.createElement($.a,{onClick:function(e){k({custom:!1,prostate:!1,heart:!0,stockprices:!1})},style:{background:"#BCE7FD"},"aria-label":"upload picture",component:"span"},1==j.heart?o.a.createElement(ne.a,null):o.a.createElement(ce.a,null)))),o.a.createElement(_.a,{onClick:function(t){g(!0);var a=new FormData;a.append("file",r),a.append("target",u),console.log(r,u),G()({method:"post",url:"/getData",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},withCredentials:!0,data:{formdata:a,showTicks:j}}).then((function(t){e(t.data),g(!1),D(!0),console.log("In then")}))},elevation:0,variant:"contained",className:F.button},"Get Insights"))),o.a.createElement("div",{className:x?"insights":"none"},o.a.createElement(Z,null)),C?o.a.createElement("div",{style:{position:"fixed",height:"100vh",width:"100vw",display:"flex",alignItems:"center",justifyContent:"center",background:"#42033d",flexDirection:"column",top:0,left:0,zIndex:1e6}},o.a.createElement("h2",{style:{color:"white",marginBottom:0}},"Data Insights.io"),o.a.createElement(re.a,{type:"cubes",color:"#fff"})):null))};var me=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(x,null,o.a.createElement(de,null)))};G.a.defaults.baseURL="http://localhost:5000",l.a.render(o.a.createElement(me,null),document.getElementById("root"))}},[[340,1,2]]]);
//# sourceMappingURL=main.c0b58066.chunk.js.map