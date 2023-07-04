function getAllPropValues(arr, prop) {
    const values = [];
  
    for (const i = 0; i < arr.length; i++) {
      const obj = arr[i];
      if (obj.hasOwnProperty(prop)) {
        values.push(obj[prop]);
      }
    }
  
    return values;
  }
  