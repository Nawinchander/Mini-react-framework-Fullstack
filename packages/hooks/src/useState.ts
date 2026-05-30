let hookIndex=0;
let wipFiber : any=null;

export function useState(initial:any){
    const oldHook = wipFiber.alternate?.hooks?.[hookIndex];
    const hook = {state:oldHook?oldHook.state:initial,queue:[]};
    const actions = oldHook?oldHook.queue:[];actions.forEach((action:any)=>{hook.state=action(hook.state);});
    const setState = (action:any)=>{hook.queue.push(action);};
    wipFiber.hooks.push(hook);
    hookIndex++;
    return[ hook.state,setState];
}