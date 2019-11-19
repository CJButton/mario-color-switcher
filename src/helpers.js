const nTimes = (n, cb) => {
  const returnedElements = [];
  for (let i = 0; i < n; i++) {
    returnedElements.push(cb(i))
  }
  return returnedElements;
}

export default nTimes;