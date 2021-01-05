function getFirstName(fullName){
    // "STEVE ROGERS "
    fullName = fullName.split(" ");
    //[ "STEVE" , "ROGERS"];
    return fullName[0];
}


function getLastName(fullName){
    // "TONY STARK"
    fullName = fullName.split(" ");
    return fullName[1];
}

function fun(fullName , fn){
    let name = fn(fullName);
    console.log(name);
    return 20;
}


fun("STEVE ROGERS" , getFirstName);
fun("TONY STARK" , getLastName);