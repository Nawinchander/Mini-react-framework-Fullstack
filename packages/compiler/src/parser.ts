export function parseJSX(input: string) {
  return babel.parse(input, {
    plugins: ['jsx', 'typescript']
  });
}