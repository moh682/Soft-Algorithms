## Queues

Queues is a collection that is based on *first-in-first-out* (FIFO) policy. 

#### Queues Characteristics
* implements *first-in-first-out* policy (FIFO).
* Must be iterable.

The typical interface for FIFO Queues are as following
```typescript
interface Queue<T> {
	enqueue: (item: T) => void;
	dequeue: () => void;
	isEmpty: () => boolean;
	getSize: () => number;
}
```

<a href="../exercises/Data Structures/Queue.ts">Practical Example</a>