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

  return {
    linkedList,
    prepend,
    append,
    size,
  };
};

const list = LinkedListFactory();
list.prepend(1);
list.append(5);
console.log(list.linkedList);
console.log(list.size());
