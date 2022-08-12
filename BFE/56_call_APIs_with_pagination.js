// fetchList is provided for you
// const fetchList = (since?: number) =>
//   Promise<{items: Array<{id: number}>}>

// you can change this to generator function if you want
const fetchListWithAmount = async (amount = 5) => {
  // your code here
  let result = [];

  // for await (let items of fetchListGenerator()) {
  //   result.push(...items);
  // }
  // return result.slice(0, amount);

  // async function* fetchListGenerator() {
  //   let tracker;
  //   let currentAmount = 0;

  //   while (amount > currentAmount) {
  //     const { items } = await fetchList(tracker);
  //     if (items.length === 0) break;
  //     tracker = items[items.length - 1].id;
  //     currentAmount += items.length;
  //     yield items;
  //   }
  // }

  for await (let items of fetchListIterator()) {
    result.push(...items);
  }
  return result.slice(0, amount);

  function fetchListIterator() {
    let totalAmountFetched = 0;
    let cursor;

    return {
      [Symbol.asyncIterator]() {
        return {
          async next() {
            const { items } = await fetchList(cursor);
            if (items.length === 0 || totalAmountFetched > amount) {
              return { done: true };
            }

            totalAmountFetched += items.length;
            cursor = items[items.length - 1].id;

            return {
              done: false,
              value: items,
            };
          },
        };
      },
    };
  }
};
