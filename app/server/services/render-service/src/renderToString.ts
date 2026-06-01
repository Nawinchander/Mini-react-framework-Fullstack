export function renderToString(element: any): string {
  if (typeof element === 'string') {
    return element;
  }

  const children = element.props.children
    .map(renderToString)
    .join('');

  return `
    <${element.type}>
      ${children}
    </${element.type}>
  `;
}