import { Readable } from 'stream';

export function streamHTML(html: string) {
  const stream = new Readable();

  stream.push(html);
  stream.push(null);

  return stream;
}