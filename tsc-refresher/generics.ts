/*
Generics Type
  - denoted by <T>, as placeholder for any incoming data types
  - they allow flexibilty of data type in a fucntion or class
*/
function sample<T>(item: T): T {
  return item;
}
sample(10000000000)
sample('John Duke')

//
class Queue<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  remove() {
    this.data.shift();
  }
}

const nameQueue = new Queue<string>();
nameQueue.addItem('Andre');
nameQueue.addItem('Luiss');

const numQueue = new Queue<number>();
numQueue.addItem(10);
numQueue.addItem(50);
