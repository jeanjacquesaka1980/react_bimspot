(this.webpackJsonpreact_bimspot=this.webpackJsonpreact_bimspot||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),i=a.n(r),l=(a(13),a(1)),s=a(2),o=a(4),m=a(3),u=a(5);a(14),a(15),a(16);var p=function(){return c.a.createElement("header",{className:"container-fluid mx-auto"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 header-wrapper"},c.a.createElement("h1",{className:"text-left m-3"},"SPECIES \u2014 API"))))},f=(a(17),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={listRegion:""},a.handleClick=function(e){a.props.handleSpecies(e)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://apiv3.iucnredlist.org/api/v3/region/list?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee").then((function(e){return e.json()})).then((function(t){var a=t.results.map((function(t,a){var n=t.name,r=e.props.identifier;return r=t.identifier,c.a.createElement("li",{onClick:function(){return e.handleClick(r)},key:a,value:r,className:"list-group-item text-center"},n)}));e.setState({listRegion:a})}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"col-4 sidebar-wrapper my-3"},c.a.createElement("h2",{className:"text-center my-3"},"CHOOSE A REGION"),c.a.createElement("ul",{className:"list-group"},this.state.listRegion))}}]),t}(c.a.Component)),h=(a(18),function(e){var t=e.handleEndanger,a=e.handleMammals;return c.a.createElement("div",{className:"btn-group btn-group-lg text-center mb-3",role:"group","aria-label":"..."},c.a.createElement("button",{onClick:t,type:"button",className:"btn"},"Endangered Species"),c.a.createElement("button",{onClick:a,type:"button",className:"btn"},"Mammals Species"))}),d=function e(t,a,n,c,r){Object(l.a)(this,e),this.region=t,this.name=a,this.id=n,this.category=c,this.class_name=r},g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleSpecies=function(e){a.newGroupSpecies=[],fetch("http://apiv3.iucnredlist.org/api/v3/species/region/".concat(e,"/page/0?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee")).then((function(e){return e.json()})).then((function(t){var n=t.result.map((function(t){var n=t.scientific_name,r=t.taxonid,i=t.category,l=t.class_name,s=new d(e,n,r,i,l);return a.newGroupSpecies.push(s),c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{key:r,className:"text-center"},n))})),r=a.newGroupSpecies[0].region;r=r.replace(/_/g," ").toUpperCase();var i=c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{className:"enTitle text-center p-3 m-3"},"All Species from ",r),c.a.createElement("ul",{className:"list-group"},n));a.setState({listSpecies:i,isRegion:!0})}))},a.handleEndanger=function(){var e=a.newGroupSpecies,t=a.newGroupSpecies[0].region;t=t.replace(/_/g," ").toUpperCase();var n=e.map((function(e){if("EN"===e.category){var t=e.name;return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"text-center"},t))}})),r=c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{className:"enTitle text-center p-3 m-3"},"Endangered Species from ",t),c.a.createElement("ul",{className:"list-group"},n));a.setState({listSpecies:r})},a.handleMammals=function(){var e=a.newGroupSpecies,t=a.newGroupSpecies[0].region;t=t.replace(/_/g," ").toUpperCase();var n=e.map((function(e){if("MAMMALIA"===e.class_name){var t=e.name;return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"text-center"},t))}})),r=c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{className:"enTitle text-center p-3 m-3"},"Mammals Species from ",t),c.a.createElement("ul",{className:"list-group"},n));a.setState({listSpecies:r})},a.state={listSpecies:"",isRegion:!1,isClicked:!1},a.newGroupSpecies=[],a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,null),c.a.createElement("main",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-8 main-wrapper my-3"},this.state.isRegion&&c.a.createElement(h,{handleEndanger:this.handleEndanger,handleMammals:this.handleMammals}),this.state.listSpecies),c.a.createElement(f,{handleSpecies:this.handleSpecies}))))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.096a7f79.chunk.js.map