const LinkedListFactory = () => {
  const linkedList = { Head: null, length: 0 };

  const nodeCreator = (value, link = null) => ({ value, link });

  const append = (value) => {
    const node = nodeCreator(value, linkedList.Head);
    linkedList.Head = node;
    linkedList.length++;
  };

  return { linkedList, append };
};

const list = LinkedListFactory();
list.append(1);
list.append(2);
list.append(3);
console.log(list.linkedList);
