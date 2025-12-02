function voting(age,card){
    if (card === false ){
        console.log("Not Eligible to vote")
    return 0;
    }
if (age >= 18 ){
    console.log("Eligible to vote")
    return 0 ;
}else {
    console.log("Not eligible to vote ")
    return false
}
}

let user1 = voting(19,true)
let user2 = voting(25,false)

