export function transformJSX(ast: any) {
  traverse(ast, {
    JSXElement(path) {
      path.replaceWith(
        t.callExpression(
          t.identifier('createElement'),
          []
        )
      );
    }
  });
}