/* empty css             */import{i as a,j as m,r,D as v,G as g,o as A,k,q as c,w as f,x as u,p as w}from"./vendor.0db5b0c9.js";function d(e){return typeof e=="object"&&e}const y=(e,i)=>{for(const[o,n]of Object.entries(i))e[o]=d(e[o])&&d(n)?y(e[o],i[o]):i[o];return e};function B(e){return new Promise(i=>setTimeout(i,e))}function C(e){let i=e.series.length,o=!1;for(let t=0;t<i;t++)e.series[t].type,o=!0,e.series[t].areaStyle;let n=!1,l=!1;e.series.length===1&&e.series[0].type==="pie"&&(n=!0);for(const t of e.series)if(t.type==="bar"){l=!0,t.barMaxWidth=40;break}const s={color:D(),legend:{textStyle:{fontSize:12},top:"1%"},tooltip:{trigger:n?"item":"axis",axisPointer:{type:l?"shadow":"line"}},grid:{top:"15%",bottom:"5%",left:"5%",right:"5%",containLabel:!0},series:[]};if(n||(e.yAxis&&e.yAxis.length>0?s.yAxis=[{}]:s.yAxis={type:"value",axisLine:{lineStyle:{}},min:function(t){if(o)return t.min-(t.max-t.min)/5>0?(t.min-(t.max-t.min)/5).toFixed(0):0}},s.xAxis={axisLine:{lineStyle:{}}}),y(s,e),!n&&e.series&&i>1)for(let t=0;t<i-1;t++)e.series[0].type!==e.series[t+1].type&&!e.color&&(s.color=L());return s}function D(){return["#b4aee8","#7BD5B6","#F1BC6A","#9FE080","#9278E6","#BADAE8","#54ACF9","#e2bcb7","#cee6b4"]}function L(){return["#9278E6","#5093C8","#7BD5B6","#F1BC6A","#4CD7AC"]}function S(e,i){return async function(...o){e.value=!0;try{await i.apply(this,o)}catch(n){throw n}finally{e.value=!1}}}const j=u("test"),E=w("span",{style:{color:"red"}},"abc",-1),F=u("abc"),M=u(" tst "),O={setup(e){const i=a(!1),o=a(),n=a({visible:!1});function l(){console.log(13)}return m(S(i,async()=>{await B(2e3),o.value=C({xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[150,230,224,218,135,147,260],type:"line"}]}),console.log(o.value)})),(s,t)=>{const p=r("kit-icon"),_=r("kit-empty"),x=r("v-chart"),h=r("kit-modal"),b=v;return g((A(),k("div",null,[c(p,{name:"fee",class:"w-4 h-4 text-red-600"}),c(_,{onClick:t[0]||(t[0]=T=>n.value.visible=!0)},{default:f(()=>[j,E]),_:1}),c(x,{style:{width:"300px",height:"200px"},option:o.value},null,8,["option"]),c(h,{modal:n.value,confirm:l},{title:f(()=>[F]),default:f(()=>[M]),_:1},8,["modal"])],512)),[[b,i.value]])}}};export{O as default};