(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"/ywb":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("BMxC"),i=n("qWyU"),c=a.a.createElement;t.a=function(e){var t=e.shops,n=e.client,r=e.updateClient;return c(o.a,{display:"flex",flexWrap:"wrap"},t.map((function(e){return c(o.a,{p:2,mr:2,mt:2,borderRadius:2,bg:n===e.domain.split(".")[0]?"blue.50":"gray.50",onClick:function(){return r(e.domain.split(".")[0])},cursor:"pointer"},c(i.a,{fontSize:"xs",fontWeight:500,color:n===e.domain.split(".")[0]?"blue.600":"gray.500",letterSpacing:"wide",textTransform:"uppercase"},e.domain.split(".")[0]))})))}},"O1O/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products",function(){return n("auAi")}])},auAi:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("ttZb"),i=n("h4VS"),c=n("I+5T"),s=n("BMxC"),l=n("qWyU"),u=n("dTpq"),p=n("KYQk"),d=n("w0db"),f=n("FpzS"),g=n("yI6m"),b=n("/ywb"),m=n("dMZg"),h=n("sK1y"),y=n("o0o1"),O=n.n(y),S=n("rePB"),x=n("ODXe"),j=n("SQB0"),v=n("eJLp"),w=n("5DEZ"),$=a.a.createElement;function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){Object(S.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(){var e=Object(i.a)(["\n  mutation createProducts(\n    $title: String!\n    $descriptionHtml: String\n    $productType: String\n    $vendor: String\n    $images: Json\n    $options: Json\n    $variants: Json\n    $client: String\n  ) {\n    createProducts(\n      title: $title\n      descriptionHtml: $descriptionHtml\n      productType: $productType\n      vendor: $vendor\n      images: $images\n      options: $options\n      variants: $variants\n      shop: $client\n    ) {\n      product\n      shop\n      userErrors\n    }\n  }\n"]);return C=function(){return e},e}var T=Object(c.b)(C()),k=function(e){var t=e.product,n=e.client,r=Object(o.b)(w.a).data.me,a=Object(o.a)(T),i=Object(x.a)(a,1)[0],c=Object(j.a)();return r&&r.seller&&r.seller.status?$(v.a,{background:"#DDEBF7",color:"#1070CA",borderRadius:3,marginRight:1,px:2,height:5,textTransform:"uppercase",letterSpacing:"wide",fontSize:"xs",fontWeight:700,onClick:function(){return O.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.awrap(i({variables:E({},t,{client:n})}));case 2:c({position:"top-right",title:"Product has been added.",description:"".concat(t.title),status:"success",isClosable:!0});case 3:case"end":return e.stop()}}),null,null,null,Promise)}},"Sync"):null},I=a.a.createElement,q=function(e){var t=e.product,n=e.client;return I(s.a,{display:"flex",padding:15,borderTop:"0.1rem solid #dfe3e8"},I(s.a,{marginTop:"auto"},I(s.a,{background:"white",border:"1px solid #e8e9ea",borderRadius:3,height:"70px",width:"70px"},I(s.a,{as:"img",src:t.images.edges[0].node.originalSrc}))),I(s.a,{marginLeft:3,display:"block"},I(l.a,{fontSize:"md",color:"text",fontWeight:500},t.title),I(h.a,{fontSize:"sm",marginRight:10,color:"gray.600"},t.id.split("/").pop()),I(l.a,{fontSize:"sm",marginRight:10,color:"green.600"},"$",t.priceRange.minVariantPrice.amount/100)),I(s.a,{display:"flex",marginLeft:"auto",marginBottom:"auto",alignItems:"center"},I(l.a,{fontSize:"xs",fontWeight:500,letterSpacing:"wide",textTransform:"uppercase",color:"gray.500",mx:2},n),I(k,{product:t,client:n})))},z=a.a.createElement;function D(){var e=Object(i.a)(["\n  query shopProducts(\n    $domain: String!\n    $first: Int\n    $after: String\n    $before: String\n    $last: Int\n    $query: String\n  ) {\n    shopProducts(\n      domain: $domain\n      first: $first\n      after: $after\n      before: $before\n      last: $last\n      query: $query\n    ) {\n      pageInfo\n      edges\n    }\n  }\n"]);return D=function(){return e},e}var W=Object(c.b)(D());function R(e){var t=e.shops,n=Object(r.useState)(t.length&&t[0].domain.split(".")[0]),i=n[0],c=n[1],h=Object(r.useState)(null),y=h[0],O=h[1],S=Object(r.useState)(null),x=S[0],j=S[1],v=Object(r.useState)(""),w=v[0],$=v[1],P=Object(r.useState)(10),E=P[0],C=P[1],T=Object(r.useState)(null),k=T[0],I=T[1],D=Object(r.useState)(""),R=D[0],B=D[1],J=Object(o.b)(W,{variables:{domain:"".concat(i,".myshopify.com"),first:E,last:k,after:y,before:x,query:w}}),_=J.data,A=J.loading,F=J.error;return z(a.a.Fragment,null,z(s.a,{display:"flex",py:4},z(s.a,{flex:1,alignItems:"center",display:"flex"},z(l.a,{fontSize:"2xl",color:"text",fontWeight:500},"Products"))),i?z(s.a,m.a,z(s.a,{display:"flex",padding:"1em"},z(s.a,{flex:1},z(u.a,{width:"100%",borderColor:"gray.300"},z(p.a,{children:z(d.a,{name:"search",color:"gray.300"})}),z(f.a,{value:R,onChange:function(e){B(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&$(e.target.value)},placeholder:"Search"})),z(b.a,{client:i,shops:t,updateClient:function(e){c(e),O(null),j(null),C(10),I(null)}}))),A?z(s.a,{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"},z(g.a,{size:80})):F||!_.shopProducts?z("h1",null,"Error loading shops: ",F):z(s.a,{width:"100%"},_.shopProducts.edges.map((function(e){return z(q,{client:i,product:e.node})})))):z(s.a,{backgroundColor:"gray.100",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},z(l.a,{margin:"1em",fontSize:"xl",fontWeight:600,color:"text"},"Your products will appear here after you add a shop.")))}var B=n("bUi6"),J=a.a.createElement;t.default=function(){var e=Object(o.b)(B.a,{variables:B.c}),t=e.loading,n=e.data,r=e.error;if(t)return null;if(r)return"Error! ".concat(r);var a=n.shops;return J(R,{shops:a})}}},[["O1O/",0,1,2,3,4,7,5]]]);