
export const noDups = (arr1, arr2) => {
  const arr = [...arr1, ...arr2];
  const uniqueArr = [...new Set(arr)];
  return uniqueArr;
}; //Removes Duplicate Values from Arrays
