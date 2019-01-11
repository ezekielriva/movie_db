(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(29)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),o=n.n(i),c=(n(17),n(7)),l=n(1),s=n(2),u=n(4),m=n(3),v=n(5),p=(n(19),n(21),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.movie,n=e.onClick,a=e.onDelete;return r.a.createElement("tr",{className:"MovieItem",onClick:function(){return n(t)}},r.a.createElement("td",null,t.title," - ",t.release_year),r.a.createElement("td",null,r.a.createElement("span",{className:"MovieItem-delete",onClick:function(){return a(t)}},r.a.createElement("i",{className:"material-icons"},"delete"))))}}]),t}(a.Component)),h=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.movies,n=e.onItemClick,a=e.onDeleteClick,i=t.map(function(e,t){return r.a.createElement(p,{key:t,movie:e,onClick:n,onDelete:a})});return r.a.createElement("table",{className:"MovieList"},r.a.createElement("tbody",null,i))}}]),t}(a.Component),f=(n(23),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.movie;if(null==e)return r.a.createElement("div",{className:"Movie"},"No movie was selected");var t=e.casting.map(function(e){return"".concat(e.first_name," ").concat(e.last_name)}).join(", "),n=e.producers.map(function(e){return"".concat(e.first_name," ").concat(e.last_name)}).join(", "),a=e.directors.map(function(e){return"".concat(e.first_name," ").concat(e.last_name)}).join(", ");return r.a.createElement("div",{className:"Movie"},r.a.createElement("h5",null,e.title," - ",e.release_year),"Actors: ",t,"       ",r.a.createElement("br",null),"Producers: ",n," ",r.a.createElement("br",null),"Directors: ",a," ",r.a.createElement("br",null))}}]),t}(a.Component)),d=n(6),b=n(8),E=(n(25),n(27),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(s.a)(t,[{key:"handleOnOptionSelect",value:function(e,t){e.preventDefault(),this.props.onOptionSelect(this.props.name,{person_id:t.id})}},{key:"render",value:function(){var e=this,t=this.props,n=t.selectedPeople,a=t.people.map(function(t,a){var i=n.findIndex(function(e){return e.person_id===t.id});return r.a.createElement("div",{key:a,className:i>=0?"PersonSelect-option PersonSelect-option-selected":"PersonSelect-option",onClick:function(n){return e.handleOnOptionSelect(n,t)}},t.first_name)});return r.a.createElement("div",{className:"PersonSelect"},a)}}]),t}(a.Component)),O={movie_actors_attributes:[],movie_directors_attributes:[],movie_producers_attributes:[],release_year:"",title:""},j=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={movie:O},n}return Object(v.a)(t,e),Object(s.a)(t,[{key:"onSubmit",value:function(e){e.preventDefault(),this.props.onSubmit(this.state.movie),this.setState({movie:O})}},{key:"changeMovieAttr",value:function(e){var t=e.target.getAttribute("name"),n=e.target.value;this.setState({movie:Object(b.a)({},this.state.movie,Object(d.a)({},t,n))})}},{key:"addToRelation",value:function(e,t){this.setState({movie:Object(b.a)({},this.state.movie,Object(d.a)({},e,[].concat(Object(c.a)(this.state.movie[e]),[t])))})}},{key:"removeFromRelationUsingIndex",value:function(e,t){this.setState({movie:Object(b.a)({},this.state.movie,Object(d.a)({},e,[].concat(Object(c.a)(this.state.movie[e].slice(0,t-1)),Object(c.a)(this.state.movie[e].slice(t+1)))))})}},{key:"handleOnOptionClick",value:function(e,t){var n=this.state.movie[e].findIndex(function(e){return e.person_id===t.person_id});n>=0?this.removeFromRelationUsingIndex(e,n):this.addToRelation(e,t)}},{key:"render",value:function(){var e=this,t=this.state.movie,n=t.movie_actors_attributes,a=t.movie_directors_attributes,i=t.movie_producers_attributes,o=t.release_year,c=t.title,l=this.props.people;return r.a.createElement("div",{className:"MovieForm"},r.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",null,"Title"),r.a.createElement("input",{name:"title",type:"text",value:c,onChange:function(t){return e.changeMovieAttr(t)}})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",null,"Release Year"),r.a.createElement("input",{name:"release_year",value:o,type:"number",onChange:function(t){return e.changeMovieAttr(t)}})),r.a.createElement("label",null,"Actors/Actrisses"),r.a.createElement(E,{onOptionSelect:this.handleOnOptionClick.bind(this),name:"movie_actors_attributes",people:l,selectedPeople:n}),r.a.createElement("label",null,"Directors"),r.a.createElement(E,{onOptionSelect:this.handleOnOptionClick.bind(this),name:"movie_directors_attributes",people:l,selectedPeople:a}),r.a.createElement("label",null,"Producers"),r.a.createElement(E,{onOptionSelect:this.handleOnOptionClick.bind(this),name:"movie_producers_attributes",people:l,selectedPeople:i}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Create",className:"waves-effect waves-light btn"})))}}]),t}(a.Component),y={last_name:"",first_name:"",alias:""},k=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={person:y},n}return Object(v.a)(t,e),Object(s.a)(t,[{key:"onSubmit",value:function(e){e.preventDefault(),this.props.onSubmit(this.state.person),this.setState({person:y})}},{key:"changePersonAttr",value:function(e){var t=e.target.getAttribute("name"),n=e.target.value;this.setState({person:Object(b.a)({},this.state.person,Object(d.a)({},t,n))})}},{key:"render",value:function(){var e=this,t=this.state.person,n=t.first_name,a=t.last_name,i=t.alias;return r.a.createElement("div",{className:"PersonForm"},r.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{name:"first_name",value:n,onChange:function(t){return e.changePersonAttr(t)}})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{name:"last_name",value:a,onChange:function(t){return e.changePersonAttr(t)}})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",null,"Alias"),r.a.createElement("input",{name:"alias",value:i,onChange:function(t){return e.changePersonAttr(t)}})),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Create Person",className:"waves-effect waves-light btn"})))}}]),t}(a.Component),_=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.people.map(function(e,t){var n=e.alias?"(".concat(e.alias,")"):"";return r.a.createElement("div",{key:t},"".concat(e.first_name," ").concat(e.last_name," ").concat(n))});return r.a.createElement("div",{className:"PersonList"},e)}}]),t}(a.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"NavBar"},r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("a",{className:"brand-logo"},"Movie DB")))}}]),t}(a.Component);console.log(Object({NODE_ENV:"production",PUBLIC_URL:""}));var S="https://serene-dawn-55049.herokuapp.com",C=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={movies:[],movie:null,auth:null,people:[]},n}return Object(v.a)(t,e),Object(s.a)(t,[{key:"refreshAuthToken",value:function(){var e=this;fetch("".concat(S,"/api/v1/auth_tokens"),{method:"POST"}).then(function(e){return e.json()}).then(function(t){return e.setState({auth:t})})}},{key:"componentDidMount",value:function(){var e=this;this.refreshAuthToken(),fetch("".concat(S,"/api/v1/movies")).then(function(e){return e.json()}).then(function(t){return e.setState({movies:t})}),fetch("".concat(S,"/api/v1/people")).then(function(e){return e.json()}).then(function(t){return e.setState({people:t})})}},{key:"selectMovie",value:function(e){this.setState({movie:e})}},{key:"createMovie",value:function(e){var t=this;fetch("".concat(S,"/api/v1/movies"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.state.auth.token)},body:JSON.stringify({movie:e})}).then(function(e){return e.json()}).then(function(e){return t.setState({movies:[].concat(Object(c.a)(t.state.movies),[e])})})}},{key:"createPerson",value:function(e){var t=this;fetch("http://localhost:3000/api/v1/people",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.state.auth.token)},body:JSON.stringify({person:e})}).then(function(e){return e.json()}).then(function(e){return t.setState({people:[].concat(Object(c.a)(t.state.people),[e])})})}},{key:"deleteMovie",value:function(e){var t=this;fetch("http://localhost:3000/api/v1/movies/".concat(e.id),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.state.auth.token)}}).then(function(n){return t.setState({movies:t.state.movies.filter(function(t){return t.id!==e.id}),movie:null})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.movies,a=t.movie,i=t.people;return r.a.createElement("div",{className:"App"},r.a.createElement(N,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s6"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement("h4",null,"Create a new Movie"),r.a.createElement(j,{onSubmit:function(t){return e.createMovie(t)},people:i}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement("h4",null,"Create a new Person"),r.a.createElement(k,{onSubmit:function(t){return e.createPerson(t)}}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement(f,{movie:a})))),r.a.createElement("div",{className:"col s6"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement("h4",null,"Movies"),r.a.createElement(h,{movies:n,onItemClick:function(t){return e.selectMovie(t)},onDeleteClick:function(t){return e.deleteMovie(t)}}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement("h4",null,"People"),r.a.createElement(_,{people:i})))))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,2,1]]]);
//# sourceMappingURL=main.ca2269ac.chunk.js.map