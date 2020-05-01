## Bags as Data structures


#### What is a Bag data structure? 
A bag is a collection where removeing items is not supported, its purpose is to provilce clients with the ability to collect items and thne to iterate through the colelcted items

#### Characteristics of Bags 
* Order is not a requirement
* Removing items is not possible
* Is iterable
* Has a method to check if the bag is empty

Typical interface for Bag class
```typescript
interface Bag<T> {
  add: (item: T) => void;
  isEmpty: () => boolean;
  getSize: () => number;
}
```

<a href="../exercises/Data Structures/Bag.ts">Practical Example</a>