function syracuse(n){
  array = []
  while (n !== 1) {
    array.push(n)
    if (n%2) {
      n = n*3+1
    }else{
      n = n/2
    }
  }
  array.push(1)
  result = array.join(" ")
  return result
}

console.log(syracuse(5))