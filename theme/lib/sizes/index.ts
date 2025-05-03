import { registerCssProperty } from "../utils.js";

export function defineSizes(){  
  defineRadiusVariables();
}
function defineRadiusVariables(){
  // we use px instead of rem because css variables are not support rem as default value and we need to set rem value in a root element
  registerCssProperty({
    name:'--jb-radius',
    inherits:true,
    value:'1rem',
    initialValue:'16px',
    syntax:'<length-percentage>',
  });
  registerCssProperty({
    name:'--jb-radius-xs',
    inherits:true,
    value:`0.5rem`,
    initialValue:'8px',
    syntax:'<length-percentage>'
  });
  registerCssProperty({
    name:'--jb-radius-sm',
    inherits:true,
    value:`0.75rem`,
    initialValue:'12px',
    syntax:'<length-percentage>'
  });
  registerCssProperty({
    name:'--jb-radius-lg',
    inherits:true,
    value:`1.25rem`,
    initialValue:'20px',
    syntax:'<length-percentage>'
  });
  registerCssProperty({
    name:'--jb-radius-xl',
    inherits:true,
    value:`1.5rem`,
    initialValue:'24px',
    syntax:'<length-percentage>'
  });
}