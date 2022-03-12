export const shuffleArr = (arr) => {
  return arr
    .map((item) => ({ item, sortKey: Math.random() }))
    .sort((a, b) => a.sortKey - b.sortKey)
    .map(({ item }) => item);
};

var arr = [1, 2, 3];

// .map((item) => ({ item, sortKey: Math.random() }))
arr = [
  {
    1: 1,
    sortKey: 0.1231,
  },
  {
    2: 2,
    sortKey: 0.4534,
  },
  {
    3: 3,
    sortKey: 0.867,
  },
];

arr = [
  {
    1: 1,
  },
  {
    2: 2,
  },
  {
    3: 3,
  },
];
