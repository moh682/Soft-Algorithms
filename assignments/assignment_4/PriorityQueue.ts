enum Proprity {
  LateToFlight = 1,
  BusinessClass = 2,
  Disabled = 3,
  Family = 4,
  Monkey = 5
}

interface queueList<T> {
  value: T,
  priority?: Proprity
}[]

export class PriorityQueue<T> {
  private array: queueList<T>[] = [];

  public enqueue(value: T, priority: Proprity) {
    let v = this.findElement(value);
    if (v !== undefined) throw new Error("Value Already exists");
    let hasAdded: boolean = false;
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i].priority > priority) {
        this.array.splice(i, 0, { priority, value });
        hasAdded = !hasAdded;
        break;
      }
    }
    if (!hasAdded) {
      this.array.push({ priority, value });
    }
  }

  private findElement(value): number {
    let res: number = undefined;
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i].value === value) res = i;
    }
    return res;
  }

  public dequeue(value: T) {
    let index = this.findElement(value);
    if (!index) throw new Error("Value does not exist");
    this.array.splice(index, 1);
  }

  public printArray() {
    console.table(this.array);
  }
}

const priority = new PriorityQueue<string>();
priority.enqueue("person 2", Proprity.Family);
priority.enqueue("person 3", Proprity.LateToFlight);
priority.enqueue("person 1", Proprity.BusinessClass);
priority.printArray();

priority.dequeue("person 1");

priority.printArray();






