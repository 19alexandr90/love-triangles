/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
    for (let i = 0; i < preferences.length; i++) {
      let index1 = i;
      if (preferences[index1] && preferences[index1] !== i + 1) {
        let number1 = preferences[index1];
        let index2 = number1 - 1;
        if (preferences[index2]) {
          let number2 = preferences[index2];
          let index3 = number2 - 1;
          if (preferences[index3]) {
            let number3 = preferences[index3];
            let indexFinal = number3 - 1;
            if (indexFinal === index1) {
              count++;
            };
          }
        }
      }
    }
    return (count  / 3);
  };
  