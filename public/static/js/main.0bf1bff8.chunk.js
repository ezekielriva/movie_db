(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(31)},17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(10),o=n.n(r),c=(n(17),n(7)),l=n(1),s=n(2),u=n(4),m=n(3),v=n(5),p=(n(19),n(21),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.movie,n=e.onClick,a=e.onDelete;return i.a.createElement("div",{className:"MovieItem",onClick:function(){return n(t)}},t.title," - ",t.release_year,i.a.createElement("div",{className:"MovieItem-delete",onClick:function(){return a(t)}},i.a.createElement("i",{className:"material-icons"},"delete")))}}]),t}(a.Component)),h=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.movies,n=e.onItemClick,a=e.onDeleteClick,r=t.map(function(e,t){return i.a.createElement(p,{key:t,movie:e,onClick:n,onDelete:a})});return i.a.createElement("div",{className:"MovieList"},r)}}]),t}(a.Component),f=(n(23),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.movie;if(null==e)return i.a.createElement("div",{className:"Movie"},"No movie was selected");var t=e.casting.map(function(e){return"".concat(e.first_name," ").concat(e.last_name)}).join(", "),n=e.producers.map(function(e){return"".concat(e.first_name," ").concat(e.last_name)}).join(", "),a=e.directors.map(function(e){return"".concat(e.first_name," ").concat(e.last_name)}).join(", ");return i.a.createElement("div",{className:"Movie"},i.a.createElement("h5",null,e.title," - ",e.release_year),"Actors: ",t,"       ",i.a.createElement("br",null),"Producers: ",n," ",i.a.createElement("br",null),"Directors: ",a," ",i.a.createElement("br",null))}}]),t}(a.Component)),d=n(6),b=n(8),O=(n(25),n(27),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(s.a)(t,[{key:"handleOnOptionSelect",value:function(e,t){e.preventDefault(),this.props.onOptionSelect(this.props.name,{person_id:t.id})}},{key:"render",value:function(){var e=this,t=this.props,n=t.selectedPeople,a=t.people.map(function(t,a){var r=n.findIndex(function(e){return e.person_id===t.id});return i.a.createElement("div",{key:a,className:r>=0?"PersonSelect-option PersonSelect-option-selected":"PersonSelect-option",onClick:function(n){return e.handleOnOptionSelect(n,t)}},t.first_name)});return i.a.createElement("div",{className:"PersonSelect"},a)}}]),t}(a.Component)),E={movie_actors_attributes:[],movie_directors_attributes:[],movie_producers_attributes:[],release_year:"",title:""},j=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={movie:E},n}return Object(v.a)(t,e),Object(s.a)(t,[{key:"onSubmit",value:function(e){e.preventDefault(),this.props.onSubmit(this.state.movie),this.setState({movie:E})}},{key:"changeMovieAttr",value:function(e){var t=e.target.getAttribute("name"),n=e.target.value;this.setState({movie:Object(b.a)({},this.state.movie,Object(d.a)({},t,n))})}},{key:"addToRelation",value:function(e,t){this.setState({movie:Object(b.a)({},this.state.movie,Object(d.a)({},e,[].concat(Object(c.a)(this.state.movie[e]),[t])))})}},{key:"removeFromRelationUsingIndex",value:function(e,t){this.setState({movie:Object(b.a)({},this.state.movie,Object(d.a)({},e,[].concat(Object(c.a)(this.state.movie[e].slice(0,t-1)),Object(c.a)(this.state.movie[e].slice(t+1)))))})}},{key:"handleOnOptionClick",value:function(e,t){var n=this.state.movie[e].findIndex(function(e){return e.person_id===t.person_id});n>=0?this.removeFromRelationUsingIndex(e,n):this.addToRelation(e,t)}},{key:"render",value:function(){var e=this,t=this.state.movie,n=t.movie_actors_attributes,a=t.movie_directors_attributes,r=t.movie_producers_attributes,o=t.release_year,c=t.title,l=this.props.people;return i.a.createElement("div",{className:"MovieForm"},i.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},i.a.createElement("div",{className:"input-field"},i.a.createElement("label",null,"Title"),i.a.createElement("input",{name:"title",value:c,onChange:function(t){return e.changeMovieAttr(t)}})),i.a.createElement("div",{className:"input-field"},i.a.createElement("label",null,"Release Year"),i.a.createElement("input",{name:"release_year",value:o,type:"number",onChange:function(t){return e.changeMovieAttr(t)}})),i.a.createElement("label",null,"Actors/Actrisses"),i.a.createElement(O,{onOptionSelect:this.handleOnOptionClick.bind(this),name:"movie_actors_attributes",people:l,selectedPeople:n}),i.a.createElement("label",null,"Directors"),i.a.createElement(O,{onOptionSelect:this.handleOnOptionClick.bind(this),name:"movie_directors_attributes",people:l,selectedPeople:a}),i.a.createElement("label",null,"Producers"),i.a.createElement(O,{onOptionSelect:this.handleOnOptionClick.bind(this),name:"movie_producers_attributes",people:l,selectedPeople:r}),i.a.createElement("br",null),i.a.createElement("input",{type:"submit",value:"Create",className:"waves-effect waves-light btn"})))}}]),t}(a.Component),k={last_name:"",first_name:"",alias:""},y=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={person:k},n}return Object(v.a)(t,e),Object(s.a)(t,[{key:"onSubmit",value:function(e){e.preventDefault(),this.props.onSubmit(this.state.person),this.setState({person:k})}},{key:"changePersonAttr",value:function(e){var t=e.target.getAttribute("name"),n=e.target.value;this.setState({person:Object(b.a)({},this.state.person,Object(d.a)({},t,n))})}},{key:"render",value:function(){var e=this,t=this.state.person,n=t.first_name,a=t.last_name,r=t.alias;return i.a.createElement("div",{className:"PersonForm"},i.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},i.a.createElement("div",{className:"input-field"},i.a.createElement("label",null,"First Name"),i.a.createElement("input",{name:"first_name",value:n,onChange:function(t){return e.changePersonAttr(t)}})),i.a.createElement("div",{className:"input-field"},i.a.createElement("label",null,"Last Name"),i.a.createElement("input",{name:"last_name",value:a,onChange:function(t){return e.changePersonAttr(t)}})),i.a.createElement("div",{className:"input-field"},i.a.createElement("label",null,"Alias"),i.a.createElement("input",{name:"alias",value:r,onChange:function(t){return e.changePersonAttr(t)}})),i.a.createElement("br",null),i.a.createElement("input",{type:"submit",value:"Create Person",className:"waves-effect waves-light btn"})))}}]),t}(a.Component),_=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.people.map(function(e,t){var n=e.alias?"(".concat(e.alias,")"):"";return i.a.createElement("div",{key:t},"".concat(e.first_name," ").concat(e.last_name," ").concat(n))});return i.a.createElement("div",{className:"PersonList"},e)}}]),t}(a.Component),N=(n(29),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("nav",{className:"NavBar"},i.a.createElement("div",{className:"nav-wrapper"},i.a.createElement("a",{className:"brand-logo"},"Movie DB")))}}]),t}(a.Component));console.log(Object({NODE_ENV:"production",PUBLIC_URL:""}));var S=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={movies:[],movie:null,auth:null,people:[]},n}return Object(v.a)(t,e),Object(s.a)(t,[{key:"refreshAuthToken",value:function(){var e=this;fetch("http://localhost:3000/api/v1/auth_tokens",{method:"POST"}).then(function(e){return e.json()}).then(function(t){return e.setState({auth:t})})}},{key:"componentDidMount",value:function(){var e=this;this.refreshAuthToken(),fetch("http://localhost:3000/api/v1/movies").then(function(e){return e.json()}).then(function(t){return e.setState({movies:t})}),fetch("http://localhost:3000/api/v1/people").then(function(e){return e.json()}).then(function(t){return e.setState({people:t})})}},{key:"selectMovie",value:function(e){this.setState({movie:e})}},{key:"createMovie",value:function(e){var t=this;fetch("http://localhost:3000/api/v1/movies",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.state.auth.token)},body:JSON.stringify({movie:e})}).then(function(e){return e.json()}).then(function(e){return t.setState({movies:[].concat(Object(c.a)(t.state.movies),[e])})})}},{key:"createPerson",value:function(e){var t=this;fetch("http://localhost:3000/api/v1/people",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.state.auth.token)},body:JSON.stringify({person:e})}).then(function(e){return e.json()}).then(function(e){return t.setState({people:[].concat(Object(c.a)(t.state.people),[e])})})}},{key:"deleteMovie",value:function(e){var t=this;fetch("http://localhost:3000/api/v1/movies/".concat(e.id),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.state.auth.token)}}).then(function(n){return t.setState({movies:t.state.movies.filter(function(t){return t.id!==e.id}),movie:null})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.movies,a=t.movie,r=t.people;return i.a.createElement("div",{className:"App"},i.a.createElement(N,null),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s6"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s12"},i.a.createElement("h4",null,"Create a new Movie"),i.a.createElement(j,{onSubmit:function(t){return e.createMovie(t)},people:r}))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s12"},i.a.createElement("h4",null,"Create a new Person"),i.a.createElement(y,{onSubmit:function(t){return e.createPerson(t)}}))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s12"},i.a.createElement(f,{movie:a})))),i.a.createElement("div",{className:"col s6"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s12"},i.a.createElement("h4",null,"Movies"),i.a.createElement(h,{movies:n,onItemClick:function(t){return e.selectMovie(t)},onDeleteClick:function(t){return e.deleteMovie(t)}}))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s12"},i.a.createElement("h4",null,"People"),i.a.createElement(_,{people:r})))))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.0bf1bff8.chunk.js.map