webpackJsonp([0xe8025391c88],{63:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function l(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function o(e,n){return e.raw=n,e}n.__esModule=!0;var u=o(["\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    align-items: top;\n    justify-content: center;\n    margin-top: 1rem;\n    a {\n        color: ",";\n        margin: 0 5px;\n    }\n"],["\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    align-items: top;\n    justify-content: center;\n    margin-top: 1rem;\n    a {\n        color: ",";\n        margin: 0 5px;\n    }\n"]),s=t(2),d=r(s),f=t(4),p=r(f),c=p.default.div(u,function(e){var n=e.theme;return n.grey}),m=["github","hacker-news","linkedin","medium","perso","stack-overflow","twitter"],g=function(e){return e.filter(function(e){return m.includes(e.title.toLowerCase())}).map(function(e){return{url:e.url,class:"perso"===e.title?"fa-user-circle":"fa-"+e.title.toLowerCase()}})},h=function(e){function n(){var t,r,l;a(this,n);for(var o=arguments.length,u=Array(o),s=0;s<o;s++)u[s]=arguments[s];return t=r=i(this,e.call.apply(e,[this].concat(u))),r.handleClick=function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},l=t,i(r,l)}return l(n,e),n.prototype.render=function(){var e=this,n=this.props.links?g(this.props.links):[];return d.default.createElement(c,null,n.length>0&&n.map(function(n){return d.default.createElement("a",{key:n.class,href:n.url,onClick:e.handleClick},d.default.createElement("i",{className:"fa "+n.class}))}))},n}(s.Component);n.default=h,e.exports=n.default},173:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n){return e.raw=n,e}n.__esModule=!0,n.SpeakerListItem=n.Introduction=n.Name=n.Profile=n.Item=void 0;var i=a(["\n    border: 1px solid ",";\n    height: 290px;\n    width: 190px;\n    margin: 1rem 1rem 1rem 0;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    box-shadow: 2px 2px 5px rgba(235, 235, 235, 0.5);\n    a {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n"],["\n    border: 1px solid ",";\n    height: 290px;\n    width: 190px;\n    margin: 1rem 1rem 1rem 0;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    box-shadow: 2px 2px 5px rgba(235, 235, 235, 0.5);\n    a {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n"]),l=a(["\n    border-radius: 50%;\n    width: 115px;\n    height: 115px;\n    margin-bottom: 0.8rem;\n"],["\n    border-radius: 50%;\n    width: 115px;\n    height: 115px;\n    margin-bottom: 0.8rem;\n"]),o=a(["\n    font-size: 1.2rem;\n    text-align: center;\n    padding: 0;\n    margin: 0.3rem 0;\n"],["\n    font-size: 1.2rem;\n    text-align: center;\n    padding: 0;\n    margin: 0.3rem 0;\n"]),u=a(["\n    text-align: center;\n    font-size: 1rem;\n    padding: 0;\n    margin: 0.2rem 0 0;\n    color: ",";\n"],["\n    text-align: center;\n    font-size: 1rem;\n    padding: 0;\n    margin: 0.2rem 0 0;\n    color: ",";\n"]),s=t(6),d=r(s),f=t(2),p=r(f),c=t(4),m=r(c),g=t(41),h=t(63),x=r(h),y=n.Item=m.default.div(i,function(e){var n=e.theme;return n.greyLight}),w=n.Profile=m.default.img(l),k=n.Name=m.default.h3(o),b=n.Introduction=m.default.p(u,function(e){var n=e.theme;return n.black}),v=n.SpeakerListItem=function(e){var n=e.speaker;return p.default.createElement(y,null,p.default.createElement(d.default,{to:"/speakers/"+n.slug},p.default.createElement(w,{src:"/speakers/"+n.picture}),p.default.createElement(k,null,n.firstName," ",n.lastName),p.default.createElement(b,null,n.resume),p.default.createElement(x.default,{links:n.links})))};v.propTypes={speaker:g.speakerPropType}},179:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n){return e.raw=n,e}n.__esModule=!0,n.query=n.SpeakerContainer=void 0;var i=a(["\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    align-items: top;\n    justify-content: left;\n"],["\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    align-items: top;\n    justify-content: left;\n"]),l=t(11),o=t(2),u=r(o),s=t(4),d=r(s),f=t(9),p=t(16),c=t(173),m=n.SpeakerContainer=d.default.div(i);n.default=function(e){var n=e.data,t=n.speakers.edges.map(function(e){return(0,p.formatSpeakerWithTalksAndDojos)(e.node)});return u.default.createElement("div",null,u.default.createElement(l.Helmet,{title:"CaenCamp: proposez un talk"},u.default.createElement("meta",{name:"description",content:"Participez CaenCamp"})),u.default.createElement(f.Content,{id:"callForPaperContent"},u.default.createElement(f.SingleColumn,null,u.default.createElement(m,null,t.map(function(e){return u.default.createElement(c.SpeakerListItem,{key:e.id,speaker:e})})))))};n.query="** extracted graphql fragment **"},41:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0,n.dojoPropType=n.speakerPropType=n.talkPropType=void 0;var a=t(5),i=r(a),l=(n.talkPropType=i.default.shape({edition:i.default.number.isRequired,slug:i.default.string.isRequired,speakers:i.default.arrayOf(l),title:i.default.string.isRequired}),n.speakerPropType=i.default.shape({firstName:i.default.string.isRequired,lastName:i.default.string.isRequired,slug:i.default.string,picture:i.default.string,resume:i.default.string}));n.dojoPropType=i.default.shape({title:i.default.string.isRequired,slug:i.default.string.isRequired,craftsmen:i.default.arrayOf(l)})}});
//# sourceMappingURL=component---src-pages-speakers-js-2f4acb4bd2151a300ec9.js.map