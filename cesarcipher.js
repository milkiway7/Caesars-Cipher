function rot13(str) {
    //make arrey from which i'll take letters
    
    
    let inputArr = str.split("");
    let decrypted = [];
    
    for(let i = 0; i < inputArr.length; i++){
    if(inputArr[i].charCodeAt() >=65 && inputArr[i].charCodeAt() <= 77)
    {decrypted.push(inputArr[i].charCodeAt()+13)}
    else if(inputArr[i].charCodeAt() >=78 && inputArr[i].charCodeAt() <= 90)
    {decrypted.push(inputArr[i].charCodeAt()-13)}else{
      decrypted.push(inputArr[i].charCodeAt());
    }
    }
    let newA = [];
    for (let i = 0; i< decrypted.length;i++){
      newA.push(String.fromCharCode(decrypted[i])) ;
    }
    return newA.join("");
    
    }