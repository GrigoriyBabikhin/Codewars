function nameShuffler(str) {

    let nameParts = str.split(" ");
    let reversedName = nameParts[1] + " " + nameParts[0];
    return reversedName

}

console.log(nameShuffler("John McClane"))