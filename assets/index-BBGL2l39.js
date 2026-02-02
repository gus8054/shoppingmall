import{j as n,a as s}from"./iframe-DX1DL66T.js";import{t as e}from"./index-HunV23Ce.js";import{B as m}from"./breakpoint-DsEcWJkq.js";const x=s.span`
  color: ${e.colors.text};
  font-size: var(--text-font-size, inherit);
  letter-spacing: var(--text-letter-spacing, inherit);
  line-height: var(--text-line-height, inherit);
  display: var(--text-display, inline);
  &[data-variant="extraSmall"] {
    --text-font-size: ${e.fontSizes.extraSmall}px;
    --text-letter-spacing: ${e.letterSpacings.extraSmall}px;
    --text-line-height: ${e.lineHeights.extraSmall}px;
  }
  &[data-variant="small"] {
    --text-font-size: ${e.fontSizes.small}px;
    --text-letter-spacing: ${e.letterSpacings.small}px;
    --text-line-height: ${e.lineHeights.small}px;
  }
  &[data-variant="medium"] {
    --text-font-size: ${e.fontSizes.medium}px;
    --text-letter-spacing: ${e.letterSpacings.medium}px;
    --text-line-height: ${e.lineHeights.medium}px;
  }
  &[data-variant="mediumLarge"] {
    --text-font-size: ${e.fontSizes.mediumLarge}px;
    --text-letter-spacing: ${e.letterSpacings.mediumLarge}px;
    --text-line-height: ${e.lineHeights.mediumLarge}px;
  }
  &[data-variant="large"] {
    --text-font-size: ${e.fontSizes.large}px;
    --text-letter-spacing: ${e.letterSpacings.large}px;
    --text-line-height: ${e.lineHeights.large}px;
  }
  &[data-variant="extraLarge"] {
    --text-font-size: ${e.fontSizes.extraLarge}px;
    --text-letter-spacing: ${e.letterSpacings.extraLarge}px;
    --text-line-height: ${e.lineHeights.extraLarge}px;
  }

  @media screen and (min-width: ${m.md}) {
    font-size: var(--text-font-size-md, var(--text-font-size, inherit));
    letter-spacing: var(
      --text-letter-spacing-md,
      var(--text-letter-spacing, inherit)
    );
    line-height: var(--text-line-height-md, var(--text-line-height, inherit));
    display: var(--text-display-md, var(--text-display, inherit));
  }
`,p=({variant:t="medium",color:a,children:i,style:r,...l})=>n.jsx(x,{style:{...r,color:a},"data-variant":t,...l,children:i});p.__docgenInfo={description:"",methods:[],displayName:"Text",props:{variant:{required:!1,tsType:{name:"union",raw:`| "extraSmall"\r
| "small"\r
| "medium"\r
| "mediumLarge"\r
| "large"\r
| "extraLarge"`,elements:[{name:"literal",value:'"extraSmall"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"mediumLarge"'},{name:"literal",value:'"large"'},{name:"literal",value:'"extraLarge"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},as:{required:!1,tsType:{name:"ElementType"},description:""}}};export{p as T};
