import{R as h,r as l,j as e,a as i}from"./iframe-CDGzgA9E.js";import{L as r}from"./link-CBTWYtb5.js";import{A as m}from"./index-C78pMRlf.js";import{B as j}from"./index-C49t8kUY.js";import{S as f,f as g,e as u}from"./index-iEeUj9Iw.js";import{S as y}from"./index-CSwRuuFq.js";import{B as t}from"./index-D6FLQ6KA.js";import{F as x}from"./index-Cwh1y6CM.js";import{B as b}from"./index-D03ueV-v.js";import{t as o}from"./index-HunV23Ce.js";import{S as C}from"./index-BjixTkDp.js";const v=h.createContext({cart:[],addProductToCart:()=>{},removeProductFromCart:()=>{}}),k=()=>l.useContext(v),I=h.createContext({authUser:void 0,isLoading:!1,signin:async()=>Promise.resolve(),signout:async()=>Promise.resolve(),mutate:async()=>Promise.resolve(void 0)}),S=()=>l.useContext(I),B=i.header`
  height: 88px;
  padding: ${o.space.medium}px;
  border-bottom: 1px solid ${o.colors.border};
`,d=i(x)`
  & > span:not(:first-child) {
    margin-left: ${o.space.medium}px;
  }
`,s=i.span`
  display: inline;
`,n=i(r)`
  color: currentColor;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`,L=()=>{const{cart:c}=k(),{authUser:a,isLoading:p}=S();return e.jsx(B,{children:e.jsxs(x,{style:{paddingInline:`${o.space.mediumLarge}px`,justifyContent:"space-between"},children:[e.jsxs(d,{forwardedAs:"nav",style:{height:"56px",alignItems:"center",columnGap:"16px"},children:[e.jsx(s,{children:e.jsx(r,{href:"/",children:e.jsx(m,{})})}),e.jsx(s,{children:e.jsx(t,{style:{display:{base:"none",md:"block"}},children:e.jsx(n,{href:"/search",children:"모든 상품"})})}),e.jsx(s,{children:e.jsx(t,{style:{display:{base:"none",md:"block"}},children:e.jsx(n,{href:"/search/clothes",children:"의류"})})}),e.jsx(s,{children:e.jsx(t,{style:{display:{base:"none",md:"block"}},children:e.jsx(n,{href:"/search/book",children:"책"})})}),e.jsx(s,{children:e.jsx(t,{style:{display:{base:"none",md:"block"}},children:e.jsx(n,{href:"/search/shoes",children:"신발"})})})]}),e.jsxs(d,{forwardedAs:"nav",style:{height:"56px",alignItems:"center"},children:[e.jsx(s,{children:e.jsx(t,{style:{display:{base:"block",md:"none"}},children:e.jsx(r,{href:"/search",children:e.jsx(f,{width:24,height:24})})})}),e.jsx(s,{children:e.jsx(r,{href:"/cart",children:e.jsx(b,{IconButton:g,size:24,badgeContent:c.length===0?void 0:c.length,badgeBackgroundColor:"#ed9f28"})})}),e.jsx(s,{children:a?e.jsx(r,{href:`/users/${a.id}`,children:e.jsx(y,{alt:"",shape:"circle",src:a.profileImageUrl,width:24,height:24,"data-testid":"profile-shape-image"})}):p?e.jsx(C,{size:20,strokeWidth:2}):e.jsx(r,{href:"/signin",children:e.jsx(u,{width:24,height:24})})}),e.jsx(s,{children:e.jsx(r,{href:"/sell",children:e.jsx(j,{children:"등록"})})})]})]})})};L.__docgenInfo={description:"헤더",methods:[],displayName:"Header"};export{I as A,L as H,v as S,S as u};
