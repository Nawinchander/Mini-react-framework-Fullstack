export interface Fiber 
{type: any ;props: any;
    dom?:HTMLElement|Text;
    parent?:Fiber;
    child?:Fiber;
    sibling?:Fiber;
    alternate?:Fiber;
    effectTag?:string;
}


