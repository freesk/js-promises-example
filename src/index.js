const getSeries = function(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log(n);
      resolve(++n);
    }, 1000);
  });
};

getSeries(0) // +1
  .then(getSeries) // +1
  .then(n => {
    // throw new Error();
    return new Promise((resolve, reject) => {
      getSeries(0) // +1
        .then(getSeries) // +1
        .then(o => {
          // throw new Error();
          getSeries(n + o).then(n => resolve(n)); // 2+2+1
        })
        .catch(err => reject(err));
    });
  })
  .then(n => {
    console.log(n);
  })
  .catch(err => console.log(err.message));
