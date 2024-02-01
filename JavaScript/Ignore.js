function findShort(s){
   let arrMin = s.split(" ");
   let shortWord = arrMin[0];

   for (let i= 0; i < arrMin.length; i++ ){
       if(arrMin[i].length < shortWord.length){
           shortWord = arrMin[i]
       }
   }
   return shortWord.length
}

console.log(findShort("Let's travel we abroad shall travel we"));