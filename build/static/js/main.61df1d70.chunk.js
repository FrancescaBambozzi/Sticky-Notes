(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),s=n(6),i=n(3),l=n(4),u=n(7),d=n(5),h=n(8),p=function(e){return o.a.createElement("header",{className:"app-header"},o.a.createElement("h1",{className:"app-header__title"},"Sticky Notes"),o.a.createElement("aside",{className:"app-header__controls"},o.a.createElement("button",{className:"add-new",onClick:e.addNote},"+ New Note"),o.a.createElement("input",{type:"text",placeholder:"Type here to search...",className:"search",value:e.searchText,onChange:function(t){e.onSearch(t.target.value)}})))},m=function(e){return o.a.createElement("li",{className:"note"},o.a.createElement("input",{type:"text",value:e.note.title,onChange:function(t){var n=t.target.value,a=e.note.id;e.onType(a,"title",n)},placeholder:"Title",className:"note__title"}),o.a.createElement("textarea",{value:e.note.description,onChange:function(t){var n=t.target.value,a=e.note.id;e.onType(a,"description",n)},placeholder:"Description...",className:"note__description"}),o.a.createElement("span",{onClick:function(){return e.removeNote(e.note.id)},className:"note__delete"},"X"))},f=function(e){var t=e.notes.filter(function(e){return e.doesMatchSearch}).map(function(t){return o.a.createElement(m,{note:t,key:t.id,onType:e.onType,removeNote:e.removeNote})});return o.a.createElement("ul",{className:"notes-list"},t)},v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={notes:[],searchText:""},n.addNote=function(){var e=[{id:Date.now(),title:"",description:"",doesMatchSearch:!0}].concat(Object(s.a)(n.state.notes));n.setState({notes:e})},n.onType=function(e,t,a){var o=n.state.notes.map(function(n){return n.id!==e?n:"title"===t?(n.title=a,n):(n.description=a,n)});n.setState({notes:o})},n.onSearch=function(e){var t=e.toLowerCase(),a=n.state.notes.map(function(e){if(t){var n=e.title.toLowerCase(),a=e.description.toLowerCase(),o=n.includes(t),r=a.includes(t),c=o||r;return e.doesMatchSearch=c,e}return e.doesMatchSearch=!0,e});n.setState({searchText:t,notes:a})},n.removeNote=function(e){var t=n.state.notes.filter(function(t){return t.id!==e});n.setState({notes:t})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(p,{searchText:this.state.searchText,addNote:this.addNote,onSearch:this.onSearch}),o.a.createElement(f,{notes:this.state.notes,onType:this.onType,removeNote:this.removeNote}))}}]),t}(a.Component),N=(n(17),document.getElementById("root"));c.a.render(o.a.createElement(v,null),N)},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.61df1d70.chunk.js.map