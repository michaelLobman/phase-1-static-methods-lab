class Formatter {
  static capitalize(string){

    return string.charAt(0).toUpperCase() + string.slice(1);

  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' " "]+/g, "")
  }
  
  static titleize(string){
    const arr = string.split(" ");
    const newArr = [];
    const excluded = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from', 'the'];

    arr.map((word) => {
      if (excluded.includes(word) !== true || word === arr[0]) {
        newArr.push(word.charAt(0).toUpperCase() + word.slice(1));
      } else {
        newArr.push(word);
      }

    })

    return newArr.join(" ");

  }

}