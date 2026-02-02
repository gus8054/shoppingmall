import{j as l,a as c}from"./iframe-CDGzgA9E.js";import{t as o}from"./index-HunV23Ce.js";import{B as u}from"./breakpoint-DsEcWJkq.js";const i=c.button`
  border: none;
  border-radius: 4px;
  white-space: nowrap;
  user-select: none;
  text-align: center;
  cursor: pointer;
  padding-block: 4px;
  padding-inline: 8px;

  /* color & bg color */
  color: var(--button-color, white);
  background-color: var(--button-background-color, black);

  &:hover {
    background-color: var(--button-background-color-hover, gray);
  }

  &:disabled {
    background-color: var(--button-background-color-disabled, black);
    opacity: 0.5;
    cursor: unset;
  }

  /* 속성 선택자 */
  &[data-variant="primary"] {
    --button-background-color: ${o.colors.primary};
    --button-background-color-hover: ${o.colors.primaryDark};
    --button-background-color-disabled: ${o.colors.primary};
  }
  &[data-variant="secondary"] {
    --button-background-color: ${o.colors.secondary};
    --button-background-color-hover: ${o.colors.secondaryDark};
    --button-background-color-disabled: ${o.colors.secondary};
  }
  &[data-variant="danger"] {
    --button-background-color: ${o.colors.danger};
    --button-background-color-hover: ${o.colors.dangerDark};
    --button-background-color-disabled: ${o.colors.danger};
  }

  /* 반응형 */
  width: var(--button-width, unset);
  display: var(--button-display, inline-block);
  @media screen and (min-width: ${u.md}) {
    width: var(--button-width-md, var(--button-width, unset));
    display: var(--button-display-md, var(--button-display, inline-block));
  }
`,s=({variant:r="none",disabled:a=!1,children:e="BUTTON",style:n,onClick:t,...d})=>l.jsx(i,{disabled:a,"data-variant":r,style:n,onClick:t,...d,children:e});s.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"none" | "primary" | "secondary" | "danger"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1},children:{defaultValue:{value:'"BUTTON"',computed:!1},required:!1}}};export{s as B};
