webpackJsonp([0xd21dffa6ed32],{31:function(e,n,t){function a(e){return r(e).getTime()<(new Date).getTime()}var r=t(12);e.exports=a},35:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function l(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function o(e,n){return e.raw=n,e}n.__esModule=!0;var d=o(["\n    border: 1px solid ",";\n    width: 100%;\n    margin: 1rem;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    box-shadow: 2px 2px 5px rgba(235, 235, 235, 0.5);\n    a {\n        display: flex;\n        flex-direction: row;\n        align-items: left;\n        @media (max-width: ",") {\n            flex-direction: column;\n        }\n    }\n    @media (max-width: ",") {\n        margin: 0.5rem;\n        padding: 0.2rem;\n    }\n"],["\n    border: 1px solid ",";\n    width: 100%;\n    margin: 1rem;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    box-shadow: 2px 2px 5px rgba(235, 235, 235, 0.5);\n    a {\n        display: flex;\n        flex-direction: row;\n        align-items: left;\n        @media (max-width: ",") {\n            flex-direction: column;\n        }\n    }\n    @media (max-width: ",") {\n        margin: 0.5rem;\n        padding: 0.2rem;\n    }\n"]),u=o(["\n    margin-left: 2rem;\n"],["\n    margin-left: 2rem;\n"]),f=o(["\n    font-size: 2rem;\n    margin: 0;\n    padding: 0;\n    @media (max-width: ",") {\n        font-size: 1.4rem;\n        margin: 0.8rem 0;\n    }\n"],["\n    font-size: 2rem;\n    margin: 0;\n    padding: 0;\n    @media (max-width: ",") {\n        font-size: 1.4rem;\n        margin: 0.8rem 0;\n    }\n"]),m=o(["\n    color: ",";\n    margin: 1rem 0;\n    padding: 0;\n    font-style: italic;\n"],["\n    color: ",";\n    margin: 1rem 0;\n    padding: 0;\n    font-style: italic;\n"]),c=o(["\n    display: flex;\n    flex-direction: row;\n    align-items: left;\n"],["\n    display: flex;\n    flex-direction: row;\n    align-items: left;\n"]),s=o(["\n    margin-left: 2rem;\n    a {\n        color: ",";\n        text-align: center;\n        font-variant: small-caps;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        font-weight: bold;\n        font-size: 1.2rem;\n        padding: 0 2rem;\n        -webkit-transition: color 0.2s;\n        &:hover {\n            color: crimson;\n        }\n        @media (max-width: ",") {\n            padding: 0;\n        }\n        i {\n            @media (max-width: ",") {\n                display: none;\n            }\n        }\n    }\n"],["\n    margin-left: 2rem;\n    a {\n        color: ",";\n        text-align: center;\n        font-variant: small-caps;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        font-weight: bold;\n        font-size: 1.2rem;\n        padding: 0 2rem;\n        -webkit-transition: color 0.2s;\n        &:hover {\n            color: crimson;\n        }\n        @media (max-width: ",") {\n            padding: 0;\n        }\n        i {\n            @media (max-width: ",") {\n                display: none;\n            }\n        }\n    }\n"]),p=t(5),g=a(p),h=t(2),x=a(h),w=t(3),y=a(w),b=t(31),v=a(b),E=t(18),k=a(E),C=t(34),z=a(C),_=t(19),S=a(_),j=y.default.div(d,function(e){var n=e.theme;return n.greyLight},function(e){return e.theme.mobileSize},function(e){return e.theme.mobileSize}),O=y.default.div(u),T=y.default.h3(f,function(e){return e.theme.mobileSize}),I=y.default.p(m,function(e){var n=e.theme;return n.black}),M=y.default.div(c),P=y.default.div(s,function(e){var n=e.theme;return n.blue},function(e){return e.theme.mobileSize},function(e){return e.theme.mobileSize}),q=function(e){function n(){var t,a,l;r(this,n);for(var o=arguments.length,d=Array(o),u=0;u<o;u++)d[u]=arguments[u];return t=a=i(this,e.call.apply(e,[this].concat(d))),a.handleClick=function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},l=t,i(a,l)}return l(n,e),n.prototype.render=function(){var e=this.props.talk;return x.default.createElement(j,null,x.default.createElement(g.default,{to:"/talks/"+e.slug},x.default.createElement(k.default,{date:e.date,edition:e.edition}),x.default.createElement(O,null,x.default.createElement(T,null,e.title),x.default.createElement(M,null,e.speakers.length>0&&e.speakers.map(function(e){return x.default.createElement(z.default,{speaker:e,key:e.slug})})),x.default.createElement(I,null,e.description),x.default.createElement(S.default,{tags:e.video?["video"].concat(e.tags):e.tags})),!(0,v.default)(new Date(e.date))&&e.meetupId&&x.default.createElement(P,null,x.default.createElement("a",{href:"https://www.meetup.com/fr-FR/CaenCamp/events/"+e.meetupId+"/",onClick:this.handleClick},x.default.createElement("i",{className:"fa fa-meetup fa-5x"}),x.default.createElement("p",null,"Inscrivez-vous !")))))},n}(h.Component);n.default=q,e.exports=n.default},170:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,n){return e.raw=n,e}n.__esModule=!0,n.query=void 0;var i=r(["\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    align-items: top;\n    justify-content: left;\n"],["\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    align-items: top;\n    justify-content: left;\n"]),l=t(11),o=t(2),d=a(o),u=t(3),f=a(u),m=t(10),c=t(16),s=t(35),p=a(s),g=f.default.div(i);n.default=function(e){var n=e.data,t=n.talks.edges.map(function(e){return(0,c.formatTalkWithSpeakers)(e.node,n.speakers.edges)});return d.default.createElement("div",null,d.default.createElement(l.Helmet,{title:"CaenCamp: les talks"},d.default.createElement("meta",{name:"description",content:"Retrouvez tous les talks des CaenCamp"})),d.default.createElement(m.Content,{id:"talksContent"},d.default.createElement(m.SingleColumn,null,d.default.createElement(g,null,t.map(function(e){return d.default.createElement(p.default,{key:e.id,talk:e})})))))};n.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-talks-js-64778891bf7f93c85c51.js.map