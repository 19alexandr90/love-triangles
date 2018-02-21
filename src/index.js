/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for (i = 0; i = preferences.length - 1; i++) {
      let index1 = i;                         
      let number1 = preferences[index1];           
      let index2 = number1 - 1;               
      let number2 = preferences[index2];            
      let index3 = number2 - 1;               
      let number3 = preferences[index3];            // 1
      let indexFinal = number3 - 1;           // 1 - 1 = 0 (-1 из-за программистов)
      if (indexFinal === index1) {
          count++;                            // count = count + 1;  
      };
  }
  return count / 3;
};
