/*
Decorators in TypeScript
  - functions for extending business logic
  - they allow extension of class with props & methods
  - set "experimentalDecorators": true in tsconfig
*/
function MenuItem(order: string) {
  return function (choice: any) {
    return class extends choice {
      item = order;
    };
  };
}

@MenuItem('Hamburger')
class Burger {
  item!: string;
}
console.log(new Burger().item);

@MenuItem('Pepperoni')
class Pizza {
  item!: string;
}
console.log(new Pizza().item);
