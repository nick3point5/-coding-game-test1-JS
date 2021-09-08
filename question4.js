a = [ 3, 4, 2, 1, 0 ]

function isGoToFirst(array) {
  if(!array.includes(0)) return false

  let lastIndex = 0
  
  for (let i = 0; i < array.length; i++) {
    lastIndex = array[lastIndex];
    if (lastIndex === 0) {
      return  true
    }
  }

  return false
}

console.log(isGoToFirst(a))