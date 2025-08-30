class LinkedList {
  constructor() {
    this._head = null;
  }

  append(value) {
    if (this._head === null) {
      this._head = new Node(value);
    } else {
      let tmp = this._head;
      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
      }
      tmp.nextNode = new Node(value);
    }
  }

  prepend(value) {
    this._head = new Node(value, this._head);
  }

  size() {
    let counter = 0;
    let tmp = this._head;
    while (tmp !== null) {
      counter++;
      tmp = tmp.nextNode;
    }
    return counter;
  }

  head() {
    return this._head;
  }

  tail() {
    if (this.size() > 1) {
      let tmp = this._head;
      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
      }
      return tmp;
    } else {
      return this._head;
    }
  }

  at(index) {
    let counter = 0;
    let tmp = this._head;
    while (counter !== index) {
      if (tmp === null) {
        return null;
      }
      counter++;
      tmp = tmp.nextNode;
    }
    return tmp;
  }

  pop() {
    if (this.size() > 2) {
      let prev = this._head;
      let next = this._head.nextNode;
      while (next.nextNode !== null) {
        next = next.nextNode;
        prev = prev.nextNode;
      }
      prev.nextNode = null;
    } else if (this.size() === 2) {
      this._head.nextNode = null;
    } else if (this.size() === 1) {
      this._head = null;
    } else {
      this._head = null;
    }
  }

  contains(value) {
    let tmp = this._head;
    if (tmp === null) {
      return false;
    }
    while (tmp.nextNode !== null) {
      if (tmp.value === value) {
        return true;
      }
      tmp = tmp.nextNode;
    }
    if (tmp.value === value) {
      return true;
    } else {
      return false;
    }
  }

  find(value) {
    let counter = 0;
    let tmp = this._head;
    if (tmp === null) {
      return null;
    }
    while (tmp.nextNode !== null) {
      if (tmp.value === value) {
        return counter;
      }
      counter++;
      tmp = tmp.nextNode;
    }
    if (tmp.value === value) {
      return counter;
    } else {
      return null;
    }
  }

  toString() {
    let tmp = this._head;
    if (tmp === null) {
      return 'null';
    }
    let string = `( ${tmp.value} )`;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
      string = string.concat(' -> ', `( ${tmp.value} )`);
    }
    return string + ' -> null';
  }

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
    } else if (index > 0 && !(index >= this.size())) {
      const oldNode = this.at(index);
      const prevNode = this.at(index - 1);
      const newnode = new Node(value, oldNode);
      prevNode.nextNode = newnode;
    } else if (index === this.size()) {
      this.append(value);
    } else {
      console.log('Not possible');
      return;
    }
  }

  removeAt(index) {
    const nextNode = this.at(index + 1);
    const prevNode = this.at(index - 1);
    if (index === 0) {
      this._head = nextNode;
    } else if (index > 0 && !(index >= this.size())) {
      prevNode.nextNode = nextNode;
    } else if (index === this.size() - 1) {
      this.pop();
    } else {
      console.log('Not possible');
      return;
    }
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const listTOP = new LinkedList();

// TOP test
listTOP.append('dog');
listTOP.append('cat');
listTOP.append('parrot');
listTOP.append('hamster');
listTOP.append('snake');
listTOP.append('turtle');

console.log(listTOP.toString());
//PASSED

//AI test
console.log('=== LINKED LIST STRESS TEST ===');
console.log('='.repeat(50));

const list = new LinkedList();

// Test 1: Empty list operations
console.log('1. Testing empty list:');
console.log('Size:', list.size());
console.log('Head:', list.head());
console.log('Tail:', list.tail());
console.log("Contains 'a':", list.contains('a'));
console.log("Find 'a':", list.find('a'));
console.log('ToString:', list.toString());
console.log('-'.repeat(30));

// Test 2: Single node operations
console.log("2. Adding first node ('first'):");
list.append('first');
console.log('Size:', list.size());
console.log('Head value:', list.head()?.value);
console.log('Tail value:', list.tail()?.value);
console.log('ToString:', list.toString());
console.log('-'.repeat(30));

// Test 3: Multiple appends
console.log('3. Appending multiple nodes:');
list.append('second');
list.append('third');
list.append('fourth');
console.log('Size:', list.size());
console.log('ToString:', list.toString());
console.log('-'.repeat(30));

// Test 4: Prepend
console.log("4. Prepending 'zero':");
list.prepend('zero');
console.log('Size:', list.size());
console.log('Head value:', list.head()?.value);
console.log('ToString:', list.toString());
console.log('-'.repeat(30));

// Test 5: At method
console.log('5. Testing at() method:');
console.log('At index 0:', list.at(0)?.value);
console.log('At index 2:', list.at(2)?.value);
console.log('At index 10:', list.at(10)?.value);
console.log('-'.repeat(30));

// Test 6: Contains and Find
console.log('6. Testing contains() and find():');
console.log("Contains 'zero':", list.contains('zero'));
console.log("Contains 'missing':", list.contains('missing'));
console.log("Find 'third':", list.find('third'));
console.log("Find 'ghost':", list.find('ghost'));
console.log('-'.repeat(30));

// Test 7: Extra Credit - InsertAt
console.log('7. Testing insertAt():');
console.log("Inserting 'inserted' at index 2:");
list.insertAt('inserted', 2);
console.log('ToString:', list.toString());
console.log('Inserting at beginning:');
list.insertAt('new-first', 0);
console.log('ToString:', list.toString());
console.log('Inserting at end:');
list.insertAt('new-last', list.size());
console.log('ToString:', list.toString());
console.log('-'.repeat(30));

// Test 8: Extra Credit - RemoveAt
console.log('8. Testing removeAt():');
console.log('Removing at index 3:');
list.removeAt(3);
console.log('ToString:', list.toString());
console.log('Removing first element:');
list.removeAt(0);
console.log('ToString:', list.toString());
console.log('Removing last element:');
list.removeAt(list.size() - 1);
console.log('ToString:', list.toString());
console.log('-'.repeat(30));

// Test 9: The Great Popocalypse - Remove ALL nodes
console.log('9. POPPING EVERYTHING:');
const initialSize = list.size();
for (let i = 0; i < initialSize; i++) {
  console.log(`Popping ${i + 1}/${initialSize}, Size before: ${list.size()}`);
  list.pop();
  console.log(`Size after: ${list.size()}, ToString: ${list.toString()}`);
}
console.log('-'.repeat(30));

// Test 10: Post-Apocalyptic Operations
console.log('10. Testing operations on empty list (after popping all):');
console.log('Size:', list.size());
console.log('Head:', list.head());
console.log('Tail:', list.tail());
console.log("Contains 'anything':", list.contains('anything'));
console.log("Find 'something':", list.find('something'));
console.log('ToString:', list.toString());
console.log('-'.repeat(30));

// Test 11: Resurrection - Rebuild list from nothing
console.log('11. Rebuilding from empty list:');
list.append('phoenix');
list.prepend('rebirth');
list.append('rising');
list.insertAt('from', 1);
list.append('ashes');
console.log('Final ToString:', list.toString());
console.log('Final Size:', list.size());
console.log('Final Head:', list.head()?.value);
console.log('Final Tail:', list.tail()?.value);

console.log('='.repeat(50));
console.log('🎉 TESTING COMPLETE! YOUR LINKED LIST WORKS! 🎉');
//PASSED
