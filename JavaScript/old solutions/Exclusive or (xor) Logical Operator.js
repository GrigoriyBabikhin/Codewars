function xor(a, b) {
    if (a === true && b === false) {
        return true;
    } else if (a === false && b === true) {
        return true;
    } else {
        return false;
    }
}

console.log(xor(true, true))
/*
false xor false == false // since both are false
true xor false == true // exactly one of the two expressions are true
false xor true == true // exactly one of the two expressions are true
true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.*/
