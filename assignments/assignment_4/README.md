## Mini Project #4 - Airport Queuing System Algorithms and Datastructure

**Description**
Implement a priotitized queueing system for an airport. You can use any
priority queue algorithm, but you must be able to argue that the time complexity is no worse than O(log n) for enqueue and dequeue respectively.
You should implement the priority queue in a setup that simulates passengers
arriving to an airport, and passengers passing security.

Passenger priority can be derived from the passenger category and arrival
time:
* Late to flight
* Business class
* Disabled
* Family
* Monkey

A template for such a setup can be found here:
https://github.com/cphbus-algorithms/airport-template.git

* Create a priority queue instead of the NotPrioritisingPassengerArrayQueue
used there
* Experiment with other values for producer and consumer
* Try to add more than one consumer

