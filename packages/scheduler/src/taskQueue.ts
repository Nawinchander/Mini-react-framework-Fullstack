class MinHeap {
  private heap: any[] = [];

  push(task: any) {
    this.heap.push(task);
    this.bubbleUp();
  }

  pop() {
    return this.heap.shift();
  }

  bubbleUp() {}
}