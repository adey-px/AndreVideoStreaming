/*
Methods of Annotation in TypeScript
  - combination of two data types 
  - union of two data types
*/
// Array of Numbers
let numbers: number[];
numbers = [1, 2, 3, 4, 5, 6, 7];

// Array of String
let staff: string[];
staff = ['Ade', 'Tolu', 'Wale'];

// Array of Object
let persons: {}[];
persons = [
  { name: 'John', balance: 20 },
  { name: 'Luke', balance: 50 },
];

// Array of Union
let items: (string | number)[];
items = ['Luis', 150];

// Variable of Union
let myName: string | number;
myName = 'test';
myName = 100;

// Annotation without Interface
const account1: {
  name: string;
  balance: number;
} = {
  name: 'Luis',
  balance: 10,
};

// Annotation using Interface
// ? avoids error for optional props
interface IAccount {
  name: string;
  balance: number;
  status?: string;
  deposit?: () => void;
}

const account2: IAccount = {
  name: 'Luis',
  balance: 10,
};

let account3: IAccount[];
account3 = [
  { name: 'John', balance: 20 },
  { name: 'Luke', balance: 50 },
];

// Annotation with Function, return union type
function ship(price: number, shipping: number): number | boolean {
  return price + shipping;
}
ship(10, 5);

// Annotation with Class, using implements kword
class InvestmentAccount implements IAccount {
  constructor(public name: string, public balance: number) {}

  private withdraw() {}
}
