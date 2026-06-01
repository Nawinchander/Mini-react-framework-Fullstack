export class Router {
  routes: Map<string, Function> = new Map();

  register(path: string, component: Function) {
    this.routes.set(path, component);
  }

  navigate(path: string) {
    window.history.pushState({}, '', path);
    this.render(path);
  }

  render(path: string) {
    const component = this.routes.get(path);

    if (component) {
      component();
    }
  }
}