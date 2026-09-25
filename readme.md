
```
Day 7 — Full-Stack Integration
Topic: Auth, Deployment & Best Practices
Q91. Explain the full request-response cycle in a MERN application.
Q92. What is the difference between authentication and authorization?
Q93. How do you implement protected routes in a MERN app?
Q94. What is the difference between cookies and localStorage for token storage?
Q95. What is REST and what are the principles of a RESTful API?
Q96. What is the MVC pattern and how does it apply to a MERN app?
Q97. What is .env file and why should it never be committed to Git?
Q98. What is Axios and how does it differ from the Fetch API?
Q99. How do you handle CRUD operations between a React frontend and Express backend?
Q100. What is deployment and what platforms can you use to deploy a MERN app?
Notes / Answer:
```


Day 7 — DOM & Events (Conceptual/Logic)
 

 ```
Problem 31: Debounce Function  [Medium]
Description: Write a debounce(fn, delay) function that delays invoking fn until after delay milliseconds have elapsed since the last time it was called.
Example:
const debouncedSearch = debounce(search, 300);// Fires only once after user stops typing for 300ms
Hint: Use clearTimeout and setTimeout.

 ```
 
 
 
 
 ```
Problem 32: Throttle Function  [Medium]
Description: Write a throttle(fn, limit) function that ensures fn is called at most once every limit milliseconds.
Example:
const throttledScroll = throttle(onScroll, 200);// Fires at most once every 200ms during scroll
Hint: Track the last call time with Date.now().
```
 
 
 
 
 
 ```
Problem 33: Deep Clone an Object  [Medium]
Description: Write a function deepClone(obj) that returns a deep copy of a plain object without using JSON.parse/JSON.stringify.
Example:
const a = {x: {y: 1}};const b = deepClone(a);b.x.y = 99;// a.x.y is still 1
Hint: Use recursion and check for object/array types.
```
 
 
 
 
 
 ```
Problem 34: Event Emitter  [Medium]
Description: Build a simple EventEmitter class with on(event, listener), emit(event, ...args), and off(event, listener) methods.
Example:
const emitter = new EventEmitter();emitter.on('greet', name => console.log('Hello ' + name));emitter.emit('greet', 'Sara'); // Hello Sara
Hint: Store listeners in an object where keys are event names and values are arrays of functions.
```
 
 
 
 
 
 ```
Problem 35: Implement Array.prototype.map from Scratch  [Medium]
Description: Write a function myMap(arr, callback) that replicates the behavior of Array.prototype.map without using the built-in map().
Example:
myMap([1,2,3], x => x * 2);// Output: [2, 4, 6]
Hint: Loop through the array, apply the callback to each element, push results to a new array.
```