export const If = props => {

  const elseChild = props.children.filter(child => {
    return child.type && child.type.name === 'Else';
  })[0];

  const ifChildren = props.children.filter(child => {
    return child !== elseChild;
  });

  if(props.condition) {
    return ifChildren;
  }else if(elseChild){
    return elseChild;
  }
}

export const Else = props => props.children