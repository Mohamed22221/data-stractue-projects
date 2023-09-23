class ClassQueue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    if (!this.isEmpty()) {
      return this.items.shift();
    }
    return "empty array";
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }else{
        return "empty array";
    }
  
  }

  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  print(){
    return this.items.toString()
  }
}


export default ClassQueue;
