
export function render(element:any,container:HTMLElement)
{ const dom=element.type==='TEXT_ELEMENT'?document.createTextNode(''):document.createElement(element.type);
    const isProperty=(key:string)=>key!=='children';
    Object.keys(element.props).filter(isProperty).forEach((name)=>{dom[name]=element.props[name];});
    element.props.children.forEach((child:any)=>render(child,dom as HTMLElement));
    container.appendChild(dom);
}
