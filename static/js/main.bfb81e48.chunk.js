(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,r){},17:function(e,t,r){},19:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(8),o=r.n(c),s=r(1),i=r(2),u=r(4),l=r(3),p=r(5),b=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.type?n.a.createElement("div",{className:"Operator"},n.a.createElement("div",{className:"ui inverted segment"},n.a.createElement("button",{className:"ui inverted blue basic button, big ui button",onClick:this.props.onClickHandler},this.props.text))):n.a.createElement("button",{className:"tiny ui button, ui black button",onClick:this.props.onClickHandler},this.props.text)}}]),t}(n.a.Component),m=(r(15),function(e){return n.a.createElement("div",{className:"Result"},""!==e.output?e.output:0)}),d=(r(17),function(e,t){var r,a=t,n=a.operatorSelected,c=a.firstNumber,o=a.secondNumber;if("AC"===e)return{operatorSelected:"",firstNumber:"",secondNumber:""};if("DEL"===e?o?o=String(o).substring(0,o.length-1):c=String(c).substring(0,c.length-1):e%1===0||"."===e?""===n?c+=e:o+=e:"+/-"===e?c=0-c:"="!==e&&(n?r=e:n=e),"="===e&&""!==o||r&&""!==o){switch(c=Number(c),o=Number(o),console.log(r),n){case"+":c+=o;break;case"-":c-=o;break;case"x":c*=o;break;case"\xf7":c/=o;break;case"^":c=Math.pow(c,o);break;default:c="Math error"}o="",n=r||""}return{operatorSelected:n,firstNumber:c,secondNumber:o}}),h=[{text:"7"},{text:"8"},{text:"9"},{text:"AC",type:"Operator"},{text:"4"},{text:"5"},{text:"6"},{text:"DEL",type:"Operator"},{text:"1"},{text:"2"},{text:"3"},{text:"+",type:"Operator"},{text:"+/-",type:"Operator"},{text:"0"},{text:"."},{text:"-",type:"Operator"},{text:"^",type:"operator"},{text:"x",type:"Operator"},{text:"\xf7",type:"Operator"},{text:"=",type:"Operator"}],x=function(e){function t(){var e,r;Object(s.a)(this,t);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(r=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).state={operatorSelected:"",firstNumber:"",secondNumber:""},r}return Object(p.a)(t,e),Object(i.a)(t,[{key:"onClickHandler",value:function(e){this.setState(d(e,this.state)),console.log(this.state)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"Calculator"},n.a.createElement("div",{className:"container"},n.a.createElement("i",{className:"github square icon big"}),n.a.createElement("div",{className:"ResultScreen"},n.a.createElement(m,{output:""!==this.state.secondNumber&&""!==this.state.operatorSelected?this.state.secondNumber:this.state.firstNumber})),n.a.createElement("div",{className:"grid"},h.map(function(t,r){return n.a.createElement(b,{text:t.text,type:t.type,key:t.text,onClickHandler:e.onClickHandler.bind(e,t.text)})}))))}}]),t}(n.a.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(x,null))}}]),t}(n.a.Component);o.a.render(n.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,r){e.exports=r(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.bfb81e48.chunk.js.map