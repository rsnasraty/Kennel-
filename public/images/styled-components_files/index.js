(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{RNiq:function(e,t,n){"use strict";n.r(t);var o=n("1OyB"),a=n("vuIU"),i=n("md7G"),r=n("foSv"),l=n("JX7q"),s=n("Ji7U"),p=n("rePB"),c=n("q1tI"),d=n.n(c),m=n("YNhk"),b=n("vOnD"),u=n("hJ+y"),h=n("KRKG"),g=n("x2xT"),y=n("QUgV"),f=n("5Yp1"),w=n("jWI3"),j=n("wx14"),v=n("Ff2n"),x=n("7ljp"),O=b.e.div.withConfig({displayName:"components__AlignCenter",componentId:"sc-1gmolv7-0"})(["text-align:center;"]),N=b.e.img.withConfig({displayName:"components__Badge",componentId:"sc-1gmolv7-1"})(["margin:0 0.5em 1em;height:1.5em;"]),k=b.e.button.withConfig({displayName:"components__ExampleButton",componentId:"sc-1gmolv7-2"})(["border-radius:3px;padding:0.25em 1em;margin:0.5em 1em;background:transparent;color:palevioletred;border:2px solid palevioletred;",";"],(function(e){return e.primary&&Object(b.d)(["background:palevioletred;color:white;"])})),_=b.e.button.withConfig({displayName:"components__SecondButton",componentId:"sc-1gmolv7-3"})(["border-radius:3px;padding:0.25em 1em;background:transparent;color:palevioletred;border:2px solid palevioletred;"]),C=n("t3BW"),S=(d.a.createElement,{}),I=function(e){var t=e.children;return Object(x.b)(f.b,{"data-e2e-id":"content"},Object(x.b)(O,null,Object(x.b)("a",{href:"https://github.com/styled-components/styled-components"},Object(x.b)(N,{src:"/api/proxy/stars.svg",alt:"Stars on GitHub"})),Object(x.b)("a",{href:"https://www.npmjs.com/package/styled-components"},Object(x.b)(N,{src:"/api/proxy/npm-v.svg",alt:"Current version"})),Object(x.b)(N,{src:"/api/proxy/downloads.svg",alt:"Monthly downloads"}),Object(x.b)(N,{src:"/api/proxy/size.svg",alt:"Gzipped size"}),Object(x.b)("a",{href:"https://spectrum.chat/styled-components"},Object(x.b)(N,{alt:"Join the community on Spectrum",src:"https://withspectrum.github.io/badge/badge.svg"}))),t)};function T(e){var t=e.components,n=Object(v.a)(e,["components"]);return Object(x.b)(I,Object(j.a)({},S,n,{components:t,mdxType:"MDXLayout"}),Object(x.b)("h1",null,"Getting started"),Object(x.b)("h2",null,"Installation"),Object(x.b)("p",null,"To download styled-components run:"),Object(x.b)("pre",null,Object(x.b)("code",Object(j.a)({parentName:"pre"},{}),"npm install --save styled-components\n")),Object(x.b)("p",null,"That's all you need to do, you are now ready to use it in your app! (yep, no build step needed \ud83d\udc4c)"),Object(x.b)("blockquote",null,Object(x.b)("p",{parentName:"blockquote"},"It's recommended (but not required) to also use the ",Object(x.b)("a",Object(j.a)({parentName:"p"},{href:"https://github.com/styled-components/babel-plugin-styled-components"}),"styled-components Babel plugin")," if you can. It offers many benefits like more legible class names, server-side rendering compatibility, smaller bundles, and more.")),Object(x.b)("h2",null,"Your first styled component"),Object(x.b)("p",null,"Let's say you want to create a simple and reusable ",Object(x.b)("inlineCode",{parentName:"p"},"<Button />")," component that you can use throughout your application. There should be a normal version and a big and ",Object(x.b)("inlineCode",{parentName:"p"},"primary")," version for the important buttons. This is what it should look like when rendered: (this is a live example, click on them!)"),Object(x.b)(O,{mdxType:"AlignCenter"},Object(x.b)(k,{onClick:function(){alert("You clicked the normal button!")},mdxType:"ExampleButton"},"Normal button"),Object(x.b)(k,{primary:!0,onClick:function(){alert("You clicked the primary button!")},mdxType:"ExampleButton"},"Primary button")),Object(x.b)("p",null,"First, let's import styled-components and create a ",Object(x.b)("inlineCode",{parentName:"p"},"styled.button"),":"),Object(x.b)("pre",null,Object(x.b)("code",Object(j.a)({parentName:"pre"},{className:"language-jsx"}),"import styled from 'styled-components'\n\nconst Button = styled.button``\n")),Object(x.b)("p",null,"This ",Object(x.b)("inlineCode",{parentName:"p"},"Button")," variable here is now a React component that you can use like any other React component! This unusual backtick syntax is a new JavaScript feature called a ",Object(x.b)("a",Object(j.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates"}),"tagged template literal"),"."),Object(x.b)("p",null,"You know how you can call functions with parenthesis? (",Object(x.b)("inlineCode",{parentName:"p"},"myFunc()"),") Well, now you can also call functions with backticks! (",Object(x.b)("a",Object(j.a)({parentName:"p"},{href:"/docs/advanced#tagged-template-literals"}),"learn more about tagged template literals"),")"),Object(x.b)("p",null,"If you render our lovely component now (just like any other component: ",Object(x.b)("inlineCode",{parentName:"p"},"<Button />"),") this is what you get:"),Object(x.b)(O,{mdxType:"AlignCenter"},Object(x.b)("button",null,"I'm a <Button />!")),Object(x.b)("p",null,"It renders a button! That's not a very nice button though \ud83d\ude15 we can do better than this,\nlet's give it a bit of styling and tickle out the hidden beauty within!"),Object(x.b)("pre",null,Object(x.b)("code",Object(j.a)({parentName:"pre"},{className:"language-jsx"}),"const Button = styled.button`\n  background: transparent;\n  border-radius: 3px;\n  border: 2px solid palevioletred;\n  color: palevioletred;\n  margin: 0 1em;\n  padding: 0.25em 1em;\n`\n")),Object(x.b)(O,{mdxType:"AlignCenter"},Object(x.b)(_,{mdxType:"SecondButton"},"I'm a styled <Button />")),Object(x.b)("p",null,"As you can see, styled-components lets you write actual CSS in your JavaScript. This means you can use all the features of CSS you use and love, including (but by far not limited to) media queries, all pseudo-selectors, nesting, etc."),Object(x.b)("p",null,"The last step is that we need to define what a primary button looks like. To do that we also import ",Object(x.b)("inlineCode",{parentName:"p"},"{ css }")," from ",Object(x.b)("inlineCode",{parentName:"p"},"styled-components")," and interpolate a function into our template literal, which gets passed the props of our component:"),Object(x.b)("pre",null,Object(x.b)("code",Object(j.a)({parentName:"pre"},{className:"language-jsx"}),"import styled, { css } from 'styled-components'\n\nconst Button = styled.button`\n  background: transparent;\n  border-radius: 3px;\n  border: 2px solid palevioletred;\n  color: palevioletred;\n  margin: 0 1em;\n  padding: 0.25em 1em;\n\n  ${props =>\n    props.primary &&\n    css`\n      background: palevioletred;\n      color: white;\n    `};\n`\n")),Object(x.b)("p",null,"Here we're saying that when the ",Object(x.b)("inlineCode",{parentName:"p"},"primary")," property is set we want to add some more ",Object(x.b)("inlineCode",{parentName:"p"},"css")," to our component, in this case change the background and color."),Object(x.b)("p",null,"That's all, we're done! Take a look at our finished component:"),Object(x.b)("pre",null,Object(x.b)("code",Object(j.a)({parentName:"pre"},{className:"language-react"}),"const Button = styled.button`\n  background: transparent;\n  border-radius: 3px;\n  border: 2px solid palevioletred;\n  color: palevioletred;\n  margin: 0.5em 1em;\n  padding: 0.25em 1em;\n\n  ${props => props.primary && css`\n    background: palevioletred;\n    color: white;\n  `}\n`;\n\nconst Container = styled.div`\n  text-align: center;\n`\n\nrender(\n  <Container>\n    <Button>Normal Button</Button>\n    <Button primary>Primary Button</Button>\n  </Container>\n);\n")),Object(x.b)("p",null,"Nice \ud83d\ude0d That's a live updating editor too, so play around with it a bit to get a feel for what it's like to work with styled-components! Once you're ready, dive into the documentation to learn about all the cool things styled-components can do for you:"),Object(x.b)(C.a,{title:"Documentation",href:"/docs",mdxType:"NextPage"}))}T.isMDXComponent=!0;var B=n("fBHT"),q=n("Fl18"),U=n("9fQE"),L=n("O11C"),M=d.a.createElement,E=Object(b.f)(["0%{transform:translate3d(0,0,0);opacity:1;}100%{transform:translate3d(-100%,0,0);opacity:1;}"]),R=Object(b.f)(["0%{transform:translate3d(100%,0,0);}50%{transform:translate3d(0%,0,0);}100%{transform:translate3d(-100%,0,0);}"]),z=Object(b.f)(["0%{transform:translate3d(100%,0,0);opacity:1;}50%{transform:translate3d(0%,0,0);opacity:1;}100%{transform:translate3d(-100%,0,0);opacity:1;}"]),F=b.e.div.withConfig({displayName:"UsersLogos__UsersSliderContainer",componentId:"j7laao-0"})(["width:100%;overflow:hidden;position:relative;"]),Y=b.e.span.withConfig({displayName:"UsersLogos__UsersSlider1",componentId:"j7laao-1"})(["display:inline-block;animation:"," 60s linear;white-space:nowrap;overflow:hidden;opacity:0;position:absolute;"],E),J=b.e.span.withConfig({displayName:"UsersLogos__UsersSlider2",componentId:"j7laao-2"})(["display:inline-block;animation:"," 120s linear infinite;white-space:nowrap;overflow:hidden;position:absolute;"],R),A=b.e.span.withConfig({displayName:"UsersLogos__UsersSlider3",componentId:"j7laao-3"})(["display:inline-block;animation:"," 120s linear 60s infinite;white-space:nowrap;overflow:hidden;opacity:0;"],z),D=b.e.section.withConfig({displayName:"UsersLogos__UsersWrapper",componentId:"j7laao-4"})(["white-space:nowrap;overflow:hidden;padding:0.5rem;display:flex;"]),W=b.e.span.withConfig({displayName:"UsersLogos__CompanyLogo",componentId:"j7laao-5"})(["position:relative;height:",";margin:0.5rem 1rem;bottom:",";opacity:0.8;filter:brightness(0) invert(1);transition:opacity 125ms ease-in-out;&:hover{opacity:1;}"],(function(e){return e.height||"2rem"}),(function(e){return e.bottom||0})),G=function(e){var t=e.users;return M(D,null,t.map((function(e){var t=e.key,n=e.logo,o=Object(v.a)(e,["key","logo"]);return n&&M(W,Object(j.a)({key:t},o),M(n,null))})))},H=function(e){var t=e.users;return M(F,null,M(Y,null,M(G,{users:t})),M(J,null,M(G,{users:t})),M(A,null,M(G,{users:t})))},P=n("YFqc"),X=n.n(P),$=d.a.createElement,K=[1.8,1.4,1],Q=b.e.div.withConfig({displayName:"SmallShowcase__Wrapper",componentId:"sc-7ia2hu-0"})(["width:100%;display:grid;grid-template-columns:repeat(2,1fr);grid-column-gap:24px;grid-row-gap:32px;padding:24px;transform:translateY(20%);margin-top:-96px;@media (min-width:640px){grid-template-columns:repeat(3,1fr);transform:translateY(28%);margin-top:-96px;padding:32px;}@media (min-width:800px){width:120%;padding:0;max-width:1280px;margin-top:0px;display:flex;transform:translateY(50%);}"]),V=b.e.label.withConfig({displayName:"SmallShowcase__Label",componentId:"sc-7ia2hu-1"})(["position:absolute;bottom:0;left:50%;max-width:100%;transform:translate(-50%,50%);background-color:white;color:#333;font-family:Avenir Next;font-weight:bold;font-size:0.8rem;padding:2px 12px;border-radius:6px;box-shadow:0 10px 20px rgba(0,0,0,0.08),0 5px 12px rgba(0,0,0,0.1);opacity:0;transition:all 0.2s ease-out;@media (min-width:800px){font-size:0.65rem;}"]),Z=b.e.div.withConfig({displayName:"SmallShowcase__Website",componentId:"sc-7ia2hu-2"})(["display:block;position:relative;width:100%;transition:all 0.2s ease-in-out;&:hover{transform:scale(1.1);","{opacity:1;}}@media (min-width:800px){padding:12px;z-index:",";display:",";transform:scale(",");&:hover{transform:scale(",");}}"],V,(function(e){return 2-Math.abs(e.position-2)}),(function(e){return e.position>4?"none":"block"}),(function(e){return K[Math.abs(e.position-2)]}),(function(e){return K[Math.abs(e.position-2)]+.2})),ee=b.e.div.withConfig({displayName:"SmallShowcase__RatioBox",componentId:"sc-7ia2hu-3"})(["position:relative;width:100%;padding-top:56.25%;"]),te=b.e.div.withConfig({displayName:"SmallShowcase__Screenshot",componentId:"sc-7ia2hu-4"})(["position:absolute;top:0;left:0;background-image:url(",");background-size:cover;display:block;width:100%;height:100%;border-radius:4px;box-shadow:0 10px 20px rgba(0,0,0,0.08),0 5px 12px rgba(0,0,0,0.1);"],(function(e){return e.bg})),ne=function(e){var t=e.projects;return $(Q,null,Object.values(t).slice(0,6).map((function(e,t){return $(X.a,{key:e.title,href:"/showcase?item=".concat(e.internalUrl)},$(Z,{position:t},$(ee,null,$(te,{bg:e.src}),$(V,null,e.title))))})))},oe=d.a.createElement,ae=b.e.h1.withConfig({displayName:"pages__Tagline",componentId:"yrx6qi-0"})(["font-weight:600;font-size:1.3rem;"]),ie=b.e.h2.withConfig({displayName:"pages__SupportingTagline",componentId:"yrx6qi-1"})(["font-size:1.1rem;font-weight:400;"]),re='\nconst Button = styled.a`\n  /* This renders the buttons above... Edit me! */\n  display: inline-block;\n  border-radius: 3px;\n  padding: 0.5rem 0;\n  margin: 0.5rem 1rem;\n  width: 11rem;\n  background: transparent;\n  color: white;\n  border: 2px solid white;\n\n  /* The GitHub button is a primary button\n   * edit this to target it specifically! */\n  ${props => props.primary && css`\n    background: white;\n    color: black;\n  `}\n`\n\nrender(\n  <div>\n    <Button\n      href="https://github.com/styled-components/styled-components"\n      target="_blank"\n      rel="noopener"\n      primary\n    >\n      GitHub\n    </Button>\n\n    <Button as={Link} href="/docs">\n      Documentation\n    </Button>\n  </div>\n)\n'.trim(),le=b.e.div.withConfig({displayName:"pages__Title",componentId:"yrx6qi-2"})(["margin:2rem 0;h1,h2{margin:0;}"]),se=b.e.img.attrs((function(){return{alt:"styled-components Logo",src:"/logo.png"}})).withConfig({displayName:"pages__Logo",componentId:"yrx6qi-3"})(["width:",";height:",";"],Object(h.a)(125),Object(h.a)(125)),pe=b.e.p.withConfig({displayName:"pages__UsersHeading",componentId:"yrx6qi-4"})(["text-transform:uppercase;color:#fff;font-size:0.8rem;font-weight:600;margin:2.5rem 0 0.5rem;opacity:0.8;"]),ce=Object(b.e)(pe).withConfig({displayName:"pages__ShowcaseHeading",componentId:"yrx6qi-5"})(["margin:0.5rem 0 0.5rem;"]),de=b.e.div.attrs((function(){return{className:"hero-header"}})).withConfig({displayName:"pages__Wrapper",componentId:"yrx6qi-6"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;color:white;background:linear-gradient(20deg,",",",");box-shadow:0 2px 20px rgba(0,0,0,0.17);box-sizing:border-box;min-height:100vh;margin-bottom:160px;"],g.b,g.d),me=b.e.div.withConfig({displayName:"pages__EditorContainer",componentId:"yrx6qi-7"})(["display:inline-block;box-shadow:"," "," "," rgba(20,20,20,0.27);margin:"," 0;text-align:left;width:100%;max-width:34rem;"],Object(h.a)(1),Object(h.a)(1),Object(h.a)(20),Object(h.a)(35)),be=Object(b.e)(u.b).withConfig({displayName:"pages__Editor",componentId:"yrx6qi-8"})(["",";height:24rem;white-space:pre;width:100%;"],y.c),ue=b.e.div.withConfig({displayName:"pages__Links",componentId:"yrx6qi-9"})(["margin:"," 0;"],Object(h.a)(36)),he=Object(b.e)(m.b).withConfig({displayName:"pages__ShowcaseLink",componentId:"yrx6qi-10"})(["display:block;max-width:100%;width:196px;background:red;line-height:48px;text-align:center;color:white;font-family:Avenir Next;border-radius:4px;margin:0 auto;background-color:",";transition:background-color 0.2s ease-in-out;&:hover{background-color:",";}"],g.b,g.a),ge=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return n=Object(i.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(s))),Object(p.a)(Object(l.a)(n),"state",{isMobileNavFolded:!0}),Object(p.a)(Object(l.a)(n),"toggleMobileNav",(function(){n.setState((function(e){return{isMobileNavFolded:!e.isMobileNavFolded}}))})),Object(p.a)(Object(l.a)(n),"onRouteChange",(function(){n.setState({isMobileNavFolded:!0})})),n}return Object(s.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this,t=this.state.isMobileNavFolded;return oe("div",null,oe(w.a,{title:"styled-components"},oe("meta",{name:"robots",content:"noodp"})),oe(B.a,null,(function(n){var o=n.isScrolled;return oe(U.a,{showSideNav:!1,transparent:!o,isMobileNavFolded:t,onMobileNavToggle:e.toggleMobileNav,onRouteChange:e.onRouteChange})})),oe(de,null,oe(f.b,{hero:!0},oe(u.e,{code:re,noInline:!0,mountStylesheet:!1,scope:{React:d.a,styled:b.e,css:b.d,rem:h.a,Link:m.b}},oe(se,null),oe(le,null,oe(ae,null,"Visual primitives for the component age."),oe(ie,null,"Use the best bits of ES6 and CSS to style your apps without stress \ud83d\udc85\ud83c\udffe")),oe(ue,null,oe(u.d,null)),oe(me,null,oe(be,null),oe(y.a,null))),oe(pe,null,"Used by folks at")),oe(H,{users:L.a}),oe(ce,null,"To create beautiful websites like these"),oe(ne,{projects:L.b})),oe(he,{href:"/showcase"},"Discover more"),oe(T,null),oe(q.a,null))}}]),t}(c.PureComponent);t.default=ge},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,3,8,10,1,2,4,5,6,7,9]]]);