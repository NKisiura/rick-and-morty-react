import{ae as d,a6 as h,a7 as f,a8 as p,r as c,af as x,ab as g,j as e,ad as m,ac as E}from"./index-D0zco6LC.js";import{u as j,a as n,D as o,E as C}from"./DetailedCharacter-DGTKAePf.js";const S=()=>{const r=j(),{id:a}=d(),t=n(h),i=n(f),l=n(p),u=c.useMemo(()=>a?t.find(({id:s})=>s===+a)??null:null,[a,t]);return c.useEffect(()=>{if(!a)return;const{abort:s}=r(x(+a));return()=>{s()}},[r,a]),c.useEffect(()=>()=>{r(g())},[r]),{character:u,characterLoadingStatus:i,characterErrorMessage:l}},L=()=>{const{character:r,characterLoadingStatus:a,characterErrorMessage:t}=S();return e.jsxs("div",{className:"container py-4",children:[a==="pending"&&e.jsx(o.Skeleton,{}),a==="succeeded"&&r&&e.jsx(o,{character:r}),a==="failed"&&e.jsx("div",{className:"flex justify-center",children:e.jsx(C,{title:"Error",description:t??"Failed load character details!",classNames:"lg:max-w-[75%] xl:max-w-[50%]",actionButtonSlot:e.jsx(m,{as:E,to:"/characters",variant:"ghost",children:"Return to all characters"})})})]})};export{L as CharacterDetails,L as default};
