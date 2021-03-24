module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');

  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }

  if (arr.length === 0) {
    return [];
  }

  const transformedArr = arr.map(item => item);

  for (let i = 0; i < transformedArr.length; i++) {
    switch (transformedArr[i]) {
      case '--discard-next':
        discardElements(transformedArr, i, 'next');

        if (transformedArr[i] === '--discard-prev' || transformedArr[i] === '--double-prev') {
          transformedArr.splice(i, 1);
        }

        --i;

        continue;
      case '--discard-prev':
        discardElements(transformedArr, i , 'prev');
        --i;
        continue;
      case '--double-next':
        doubleElement(transformedArr, i, 'next');
        i++;
        continue;
      case '--double-prev':
        doubleElement(transformedArr, i, 'prev');
        if (i === 0) {
          i--;
        }
    }
  }

  return transformedArr;

  function discardElements(array, index, direction) {
    if (index === 0 && direction === 'prev' || index === array.length - 1 && direction === 'next') {
      array.splice(index, 1);
    } else if (direction === 'next') {
      array.splice(index, 2);
    } else {
      array.splice(index - 1, 2);
    }
  }

  function doubleElement(array, index, direction) {
    if (index === 0 && direction === 'prev' || index === array.length - 1 && direction === 'next') {
      array.splice(index, 1);
    } else if (direction === 'next'){
      array.splice(index, 1, array[index + 1]);
    } else {
      array.splice(index, 1, array[index - 1]);
    }
  }
};
