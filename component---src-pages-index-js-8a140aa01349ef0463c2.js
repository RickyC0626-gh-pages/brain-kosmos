"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[678],{1046:function(e,t,r){r.d(t,{w_:function(){return s}});var l=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=l.createContext&&l.createContext(a),i=function(){return i=Object.assign||function(e){for(var t,r=1,l=arguments.length;r<l;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)},c=function(e,t){var r={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(l=Object.getOwnPropertySymbols(e);a<l.length;a++)t.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(r[l[a]]=e[l[a]])}return r};function o(e){return e&&e.map((function(e,t){return l.createElement(e.tag,i({key:t},e.attr),o(e.child))}))}function s(e){return function(t){return l.createElement(u,i({attr:i({},e.attr)},t),o(e.child))}}function u(e){var t=function(t){var r,a=e.attr,n=e.size,o=e.title,s=c(e,["attr","size","title"]),u=n||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),l.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&l.createElement("title",null,o),e.children)};return void 0!==n?l.createElement(n.Consumer,null,(function(e){return t(e)})):t(a)}},9535:function(e,t,r){var l=r(7294),a=r(5444),n=r(6125);t.Z=function(){var e,t,i=(0,a.useStaticQuery)("230163734"),c=null===(e=i.site.siteMetadata)||void 0===e?void 0:e.author,o=null===(t=i.site.siteMetadata)||void 0===t?void 0:t.social;return l.createElement("div",{className:"bio"},l.createElement(n.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:r(1550)}),(null==c?void 0:c.name)&&l.createElement("p",null,"Written by ",l.createElement("strong",null,c.name)," ",(null==c?void 0:c.summary)||null," ",l.createElement("a",{href:"https://github.com/"+((null==o?void 0:o.github)||"")},"Follow him on GitHub!")))}},7252:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var l=r(7294),a=r(5444),n=r(3201),i=r(9535),c=function(){return l.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",l.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"),l.createElement("div",{style:{float:"right"}},l.createElement("a",{href:"/rss.xml",target:"_blank",rel:"noopener noreferrer"},"rss")))},o=r(5088),s=r(3751),u=function(e){var t,r=e.data,u=e.location,d=(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",m=r.allMarkdownRemark.nodes;return 0===m.length?l.createElement(o.Z,{location:u,title:d},l.createElement(s.Z,{title:"All posts"}),l.createElement(i.Z,null),l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.createElement(o.Z,{location:u,title:d},l.createElement(s.Z,{title:"All posts"}),l.createElement(i.Z,null),l.createElement("ol",{style:{listStyle:"none"}},m.map((function(e){var t=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(a.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t))),l.createElement("small",{style:{display:"flex",lineHeight:"13px"}},e.frontmatter.date," •",l.createElement(n.qyc,{style:{margin:"0 4px"}}),e.fields.readingTime.text)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))),l.createElement(c,null))}},1550:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#080808","images":{"fallback":{"src":"/static/cab310c3351b28d0435dc9b9d3487a0d/d24ee/profile-pic.jpg","srcSet":"/static/cab310c3351b28d0435dc9b9d3487a0d/d24ee/profile-pic.jpg 50w,\\n/static/cab310c3351b28d0435dc9b9d3487a0d/64618/profile-pic.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/static/cab310c3351b28d0435dc9b9d3487a0d/d4bf4/profile-pic.avif 50w,\\n/static/cab310c3351b28d0435dc9b9d3487a0d/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/cab310c3351b28d0435dc9b9d3487a0d/3faea/profile-pic.webp 50w,\\n/static/cab310c3351b28d0435dc9b9d3487a0d/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-pages-index-js-8a140aa01349ef0463c2.js.map