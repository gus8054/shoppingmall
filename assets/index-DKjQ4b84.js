import{j as e,a as n}from"./iframe-CDGzgA9E.js";import{t}from"./index-HunV23Ce.js";import{L as i}from"./link-CBTWYtb5.js";const s=n.li`
  display: inline-flex;
  align-items: center;
  color: ${t.colors.text};
  &:not(:first-of-type) {
    &::before {
      content: "/";
      color: ${t.colors.gray};
      padding: 0 8px;
      font-size: 0.9em;
    }
  }
  a {
    transition: all 0.2s ease-in-out;
    &:hover {
      text-decoration: underline;
    }
  }
  &:last-of-type {
    a {
      font-weight: bold;
      cursor: default;
      pointer-events: none;
    }
  }
`,a=({href:o,children:r})=>e.jsx(s,{children:e.jsx(i,{href:o,children:r})});a.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};export{a as B};
