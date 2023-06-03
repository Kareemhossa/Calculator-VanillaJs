let inputText =document.querySelector('.inp-text');
let buttons =document.querySelectorAll('button');
let spacialChar = [ "%" , "*" , "/" , "+" , "-" , "="];
let output = "";

//Function to calculate
let calculate  = (btnValue) => {
    if (btnValue === "=" && output !== "" ) {
        output = eval(output.replace("%","/100"));
    } else if(btnValue === "AC"){
        output = " ";
    }else if (btnValue === "DEl"){
        output = output.toString().slice(0, -1);
    }else{
        if( output === "" && spacialChar.includes(btnValue) ) return;
        output += btnValue;
    }
    inputText.value = output;
};

// click add event listener
buttons.forEach((button) => {
    button.addEventListener("click" , (e)=> calculate(e.target.dataset.value))
});
