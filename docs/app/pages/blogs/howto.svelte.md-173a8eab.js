import{S as s,i as a,s as t,J as n,e,t as o,k as l,j as c,c as r,a as i,g as p,d as u,n as d,m as h,b as g,f,G as $,o as m,h as v,K as k,v as E,r as w,w as y,A as D,p as L,q as S,Q as b,H as x}from"../../chunks/vendor-dc4944ac.js";import{A as I}from"../../chunks/index-1e43e0c5.js";const H=s=>({}),V=s=>({});function j(s){let a,t,D,L,S,b,x,j,C,P,R,_,A,G,M,X,q,J,K,Q,T;x=new I({props:{name:s[1]}});const z=s[4].edit,B=n(z,s,s[3],V),F=s[4].default,N=n(F,s,s[3],null);return{c(){a=e("div"),t=e("h1"),D=o(s[0]),L=l(),S=e("p"),b=o("by: "),c(x.$$.fragment),j=l(),C=e("div"),P=e("div"),R=e("h2"),_=o("Code"),A=l(),G=e("div"),B&&B.c(),M=l(),X=e("div"),q=e("h2"),J=o("Result"),K=l(),Q=e("div"),N&&N.c(),this.h()},l(n){a=r(n,"DIV",{class:!0});var e=i(a);t=r(e,"H1",{class:!0});var o=i(t);D=p(o,s[0]),o.forEach(u),L=d(e),S=r(e,"P",{class:!0});var l=i(S);b=p(l,"by: "),h(x.$$.fragment,l),l.forEach(u),e.forEach(u),j=d(n),C=r(n,"DIV",{class:!0});var c=i(C);P=r(c,"DIV",{class:!0});var g=i(P);R=r(g,"H2",{});var f=i(R);_=p(f,"Code"),f.forEach(u),A=d(g),G=r(g,"DIV",{class:!0});var $=i(G);B&&B.l($),$.forEach(u),g.forEach(u),M=d(c),X=r(c,"DIV",{class:!0});var m=i(X);q=r(m,"H2",{});var v=i(q);J=p(v,"Result"),v.forEach(u),K=d(m),Q=r(m,"DIV",{class:!0});var k=i(Q);N&&N.l(k),k.forEach(u),m.forEach(u),c.forEach(u),this.h()},h(){g(t,"class","text-left col-span-4"),g(S,"class","inline-block justify-self-end"),g(a,"class","grid grid-cols-5 gap-4"),g(G,"class","shadow-md rounded-md bg-gray-100"),g(P,"class","col-span-3"),g(Q,"class","shadow-md p-5 rounded-md bg-gray-100"),g(X,"class","col-span-2 content-center"),g(C,"class","grid grid-cols-5 gap-4")},m(s,n){f(s,a,n),$(a,t),$(t,D),$(a,L),$(a,S),$(S,b),m(x,S,null),f(s,j,n),f(s,C,n),$(C,P),$(P,R),$(R,_),$(P,A),$(P,G),B&&B.m(G,null),$(C,M),$(C,X),$(X,q),$(q,J),$(X,K),$(X,Q),N&&N.m(Q,null),T=!0},p(s,[a]){(!T||1&a)&&v(D,s[0]);const t={};2&a&&(t.name=s[1]),x.$set(t),B&&B.p&&(!T||8&a)&&k(B,z,s,s[3],a,H,V),N&&N.p&&(!T||8&a)&&k(N,F,s,s[3],a,null,null)},i(s){T||(E(x.$$.fragment,s),E(B,s),E(N,s),T=!0)},o(s){w(x.$$.fragment,s),w(B,s),w(N,s),T=!1},d(s){s&&u(a),y(x),s&&u(j),s&&u(C),B&&B.d(s),N&&N.d(s)}}}function C(s,a,t){let{$$slots:n={},$$scope:e}=a,{title:o}=a,{author:l}=a,{date:c}=a;return s.$$set=s=>{"title"in s&&t(0,o=s.title),"author"in s&&t(1,l=s.author),"date"in s&&t(2,c=s.date),"$$scope"in s&&t(3,e=s.$$scope)},[o,l,c,e,n]}class P extends s{constructor(s){super(),a(this,s,C,j,t,{title:0,author:1,date:2})}}function R(s){let a,t,n;return{c(){a=e("p"),t=e("img"),this.h()},l(s){a=r(s,"P",{});var n=i(a);t=r(n,"IMG",{src:!0,alt:!0,title:!0}),n.forEach(u),this.h()},h(){t.src!==(n="/images/howto/Svelte_Logo.png")&&g(t,"src","/images/howto/Svelte_Logo.png"),g(t,"alt","Svelte Logo"),g(t,"title","Svelte Logo")},m(s,n){f(s,a,n),$(a,t)},d(s){s&&u(a)}}}function _(s){let a,t;return{c(){a=e("div"),t=e("pre"),this.h()},l(s){a=r(s,"DIV",{slot:!0});var n=i(a);t=r(n,"PRE",{class:!0}),i(t).forEach(u),n.forEach(u),this.h()},h(){g(t,"class","language-markdown"),g(a,"slot","edit")},m(s,n){f(s,a,n),$(a,t),t.innerHTML='<code class="language-markdown"><span class="token front-matter-block"><span class="token punctuation">---</span>\n<span class="token font-matter yaml language-yaml">title: How to edit?\nauthor: CliXiD\nlayout: repl</span>\n<span class="token punctuation">---</span></span>\n\n![Svelte Logo]\n\n<span class="token url-reference url"><span class="token punctuation">[</span><span class="token variable">Svelte Logo</span><span class="token punctuation">]</span><span class="token punctuation">:</span> /images/howto/Svelte_Logo.png <span class="token string">"Svelte Logo"</span></span></code>'},p:x,d(s){s&&u(a)}}}function A(s){let a,t;const n=[s[0],G];let e={$$slots:{edit:[_],default:[R]},$$scope:{ctx:s}};for(let o=0;o<n.length;o+=1)e=D(e,n[o]);return a=new P({props:e}),{c(){c(a.$$.fragment)},l(s){h(a.$$.fragment,s)},m(s,n){m(a,s,n),t=!0},p(s,[t]){const e=1&t?L(n,[1&t&&S(s[0]),0&t&&S(G)]):{};2&t&&(e.$$scope={dirty:t,ctx:s}),a.$set(e)},i(s){t||(E(a.$$.fragment,s),t=!0)},o(s){w(a.$$.fragment,s),t=!1},d(s){y(a,s)}}}const G={title:"How to edit?",author:"CliXiD",layout:"repl"};function M(s,a,t){return s.$$set=s=>{t(0,a=D(D({},a),b(s)))},[a=b(a)]}export default class extends s{constructor(s){super(),a(this,s,M,A,t,{})}}export{G as metadata};
