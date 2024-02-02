let arr = [1, 2, 3, 4];
for (const arrKey in arr) {
    arrKey.push(arr * 2)
}
console.log(arr)