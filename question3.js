function scroll( n, t) {
  for (let i = 0; i < t.length-n+1; i++) {
    console.log(t.slice(i, i+n))
  }
}

console.log(scroll( 3, "HELLO WORLD"))