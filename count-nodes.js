function countNodes(obj) {
    let count = 1;
  
    for (const child of obj.children) {
      count += countNodes(child);
    }
  
    return count;
  }
  
  const tree = {
    value: 1,
    children: [
      {
        value: 2,
        children: [
          { value: 5, children: [] },
          { value: 6, children: [] },
        ],
      },
      {
        value: 3,
        children: [
          { value: 7, children: [] },
          { value: 8, children: [] },
        ],
      },
      {
        value: 4,
        children: [],
      },
    ],
  };
  
  const totalNodes = countNodes(tree);
  console.log(totalNodes);