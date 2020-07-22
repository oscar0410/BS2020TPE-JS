
function NameCode(name){
    let allCode = "";
    if(typeof name == "string")
    {
        name = name.replace(/\s*/g,"");
        let n = name.length;
        for( let i=0; i<n; i++){
                allCode += name.charCodeAt(i)+", ";
        }
        console.log(allCode)
    }
    else{
        console.log("輸入字串不正確");
    }
}

// console.log(typeof"吳昀洋");
NameCode("吳 昀 洋");
NameCode("Harry Potter");