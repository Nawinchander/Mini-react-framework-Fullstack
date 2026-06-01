export class SocketClient {
  socket: WebSocket;

  constructor(url: string) {
    this.socket = new WebSocket(url);
  }

  send(data: any) {
    this.socket.send(JSON.stringify(data));
  }

  onMessage(callback: Function) {
    this.socket.onmessage = (event) => {
      callback(JSON.parse(event.data));
    };
  }
}