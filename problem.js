function debounce(fn, delay) {
  let timerId = null;

  return function (...args) {
    // Clear any pending execution from a previous invocation
    if (timerId !== null) {
      clearTimeout(timerId);
    }

    // Schedule the function call after the specified delay
    timerId = setTimeout(() => {
      fn.apply(this, args);
      timerId = null; // Reset timer ID after execution
    }, delay);
  };
}

// Example Usage:
// const debouncedSearch = debounce((query) => console.log('Searching:', query), 300);
// debouncedSearch('a');
// debouncedSearch('ab'); // Cancels 'a', resets timer for 300ms










function throttle(fn, limit) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    // Check if enough time has passed since the last execution
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

// Example Usage:
// const throttledScroll = throttle(() => console.log('Scroll position captured'), 200);
// window.addEventListener('scroll', throttledScroll);



















function deepClone(obj, hash = new WeakMap()) {
  // Handle primitives, null, and non-objects
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Handle Date objects
  if (obj instanceof Date) {
    return new Date(obj);
  }

  // Handle RegExp objects
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  // Handle circular references using WeakMap
  if (hash.has(obj)) {
    return hash.get(obj);
  }

  // Handle Arrays and Plain Objects
  const clone = Array.isArray(obj) ? [] : {};
  hash.set(obj, clone);

  // Recursively copy properties
  for (const key of Object.keys(obj)) {
    clone[key] = deepClone(obj[key], hash);
  }

  return clone;
}

// Example Usage:
// const original = { a: 1, b: { c: 2 }, d: [3, 4] };
// const copy = deepClone(original);
// copy.b.c = 99;
// console.log(original.b.c); // 2

















class EventEmitter {
  constructor() {
    this.events = {};
  }

  // Register an event listener
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  // Trigger all listeners associated with the event
  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach((listener) => listener.apply(this, args));
    }
  }

  // Remove a specific listener from an event
  off(event, listener) {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter((fn) => fn !== listener);
  }
}

// Example Usage:
// const emitter = new EventEmitter();
// const greet = name => console.log(`Hello ${name}`);
// emitter.on('greet', greet);
// emitter.emit('greet', 'Sara'); // Output: Hello Sara
// emitter.off('greet', greet);













function myMap(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    // Check if the key exists to handle sparse arrays properly
    if (Object.prototype.hasOwnProperty.call(arr, i)) {
      result[i] = callback(arr[i], i, arr);
    }
  }

  return result;
}

// Example Usage:
// const numbers = [1, 2, 3];
// const doubled = myMap(numbers, (x) => x * 2);
// console.log(doubled); // Output: [2, 4, 6]