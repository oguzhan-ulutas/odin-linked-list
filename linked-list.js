const LinkedListFactory = () => {
  const linkedList = { Head: null, length: 0 };

  const nodeCreator = (value, link = null) => ({ value, link });

  // Adds new node to start of the list
  const prepend = (value) => {
    const newNode = nodeCreator(value, linkedList.Head);
    linkedList.Head = newNode;
    linkedList.length++;
  };

  // Adds new node to end of the list
  const append = (value) => {
    const newNode = nodeCreator(value);
    let lastNode = linkedList.Head;
    for (let i = 1; i < linkedList.length; i++) {
      lastNode = lastNode.link;
    }
    lastNode.link = newNode;
    linkedList.length++;
  };

  // Returns size of the list
  const size = () => {
    let size = 0;
    let nodeItem = linkedList.Head;

    while (nodeItem) {
      size++;
      nodeItem = nodeItem.link;
    }
    return size;
  };

  // Returns the first item of the list
  const head = () => linkedList.Head;

  // Returns the last item of the list
  const tail = () => {
    let lastNode = linkedList.Head;
    for (let i = 1; i < linkedList.length; i++) {
      lastNode = lastNode.link;
    }
    return lastNode;
  };

  // Returns the node at the given index
  const at = (index) => {
    if (index >= linkedList.length) return null;

    let node = linkedList.Head;
    for (let i = 0; i < index; i++) {
      node = node.link;
    }
    return node;
  };

  // Removes the last element from the list
  const pop = () => {
    let node = linkedList.Head;
    for (let i = 2; i < linkedList.length; i++) {
      node = node.link;
    }
    node.link = null;

    linkedList.length--;
  };

  // Returns true if the value in the list, returns false otherwise
  const contains = (value) => {
    let node = linkedList.Head;
    while (node !== null) {
      if (node.value === value) return true;
      node = node.link;
    }
    return false;
  };

  // Returns the index of the node containing value, or null if not found.
  const find = (value) => {
    let index = 0;
    let node = linkedList.Head;
    while (node !== null) {
      if (node.value === value) return index;
      node = node.link;
      index++;
    }
    return null;
  };

  const toString = () => {
    let string = '';
    let node = linkedList.Head;
    while (node !== null) {
      string += `( ${node.value} ) -> `;
      node = node.link;
    }
    console.log(`${string}null`);
  };

  return {
    linkedList,
    prepend,
    append,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
  };
};

const list = LinkedListFactory();
list.prepend(1);
list.append(5);
console.log(list.linkedList);
// console.log(list.size());
// console.log(list.head());
// console.log(list.tail());
// console.log(list.at(0));
// list.pop();
// console.log(list.contains(5));
// console.log(list.find(4));
list.toString();
