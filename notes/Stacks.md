## Stacks

Stacks is a collection that is based on the *last-in-first-out* (LIFO) policy. This structure is applied in emails, where the last email that you recieved will be at the top. 


#### Characteristics of Stacks
* Can only remove the last added item - pop().
* Implements *last-in-first-out* (LIFO) policy.
* Must be iterable.
* When iterated, the items are processed in reverse. 

Typical interface for implementing Stack
```typescript
interface Stack<T>{
	push: (item <T>) => void;
	pop: () => void;
	isEmpty: () => boolean;
	getSize: () => number;
}
```