import{j as s,a as d}from"./iframe-CDGzgA9E.js";import{t as e}from"./index-HunV23Ce.js";const u=d.input`
  color: ${e.colors.inputText};
  padding: 11px 12px 12px 9px;
  outline: none;
  width: 100%;
  height: 38px;
  font-size: 16px;
  line-height: 19px;
  appearance: none;
  border: var(--input-border, none);
  border-radius: 5px;

  /* 호버나 포커스 시에도 나타나지 않도록 명시 */
  &[type="number"]:hover::-webkit-inner-spin-button,
  &[type="number"]:focus::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    appearance: none;
  }

  &[data-has-border="true"] {
    --input-border: 1px solid ${e.colors.border};
  }
  &[data-has-error="true"] {
    --input-border: 1px solid ${e.colors.danger};
  }
`,i=({hasError:a=!1,hasBorder:r=!0,placeholder:t="Placeholder",type:o="text",value:n,onChange:p,...l})=>s.jsx(u,{"data-has-border":!!r,"data-has-error":!!a,placeholder:t,type:o,value:n,onChange:p,"data-testid":"input",...l});i.__docgenInfo={description:"",methods:[],displayName:"Input",props:{hasError:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"text" | "number" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"number"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},placeholder:{defaultValue:{value:'"Placeholder"',computed:!1},required:!1}}};export{i as I};
