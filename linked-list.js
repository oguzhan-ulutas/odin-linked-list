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

  const at = (index) => {
    if (index >= linkedList.length) return null;

    let node = linkedList.Head;
    for (let i = 0; i < index; i++) {
      node = node.link;
    }
    return node;
  };

  return {
    linkedList,
    prepend,
    append,
    size,
    head,
    tail,
    at,
  };
};

const list = LinkedListFactory();
list.prepend(1);
list.append(5);
console.log(list.linkedList);
// console.log(list.size());
// console.log(list.head());
// console.log(list.tail());
console.log(list.at(0));
