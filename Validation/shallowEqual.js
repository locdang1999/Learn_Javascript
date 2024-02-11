//So sánh object nông

function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}

//So sánh object sâu

function deepObjectEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);

    if (
      (areObjects && !deepObjectEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }

  return true;
}

function isObject(object) {
  return object != null && typeof object === "object";
}


const object1 = {
    value: 1,
    name: 'Test',
    address: {
      city: 'Ha Noi'
    }
  };
  
  const object2 = {
    value: 1,
    name: 'Test',
    address: {
      city: 'Ha Noi'
    }
  };
  
  deepObjectEqual(object1, object2); // => true
  

//JSON.stringify()

    //   Chú ý: sẽ false khi property của object là khác nhau 

  const object3 = {
    value: 1,
    name: 'Test',
    address: {
      city: 'Ha Noi'
    }
  };
  
  const object4 = {
    value: 1,
    name: 'Test',
    address: {
      city: 'Ha Noi'
    }
  };
  
  JSON.stringify(object3) === JSON.stringify(object4); // true
  