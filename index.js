let user_input = 6;
let generate_butn = document.getElementById("generate_butn");
let pass_box = document.getElementById("boxid");


let color_arr = ["2px solid rgba(7, 82, 85, 0.849)","2px solid rgba(12, 228, 66, 0.849)","2px solid rgba(241, 237, 0, 0.849)","2px solid rgba(234, 8, 255, 0.849)","2px solid rgb(8, 255, 131)","2px solid orange","2px solid indigo","2px solid rgb(185, 0, 0)","2px solid rgb(255, 0, 64)","2px solid rgb(0, 255, 64)"];

function ran_pass(){
    generate_butn.innerHTML="Generate";
let arr = [
    'u','v','w','x','y','z',
     1,2,3,4,5,6,7,8,9,0,
    "!","@","#","%","$","%","^","^","&","*","|",
    'A','B','C','D','E','F','G','H','I','J','K','L',
    'a','b','c','d','e','f','g','h',
    "!","@","#","%","$",
    'M','N','O','P','Q','R','S','T','U','V','W','X',
    'i','j','k','l',
    'Y','Z','a','b','c','d','e','f','g','h','i','j',
    'm','n','o','p','q','r','s','t',
    "!","@","#","%","$",
    'k','l','m','n','o','p','q','r','s','t','u','v',
    'w','x','y','z',
    6,7,8,9,0,
    ];
let int; 
let final = "";

for (let i = 0; i < user_input; i++){int = +(Math.random() * (arr.length-1)).toFixed(0);final = final + arr[int]}

console.log(typeof(final),arr.length,final);
document.querySelector("p").innerText = final;
navigator.clipboard.writeText(final);
generate_butn.setAttribute("title","copied");

let color_ran = +(Math.random()*10).toFixed(0);
pass_box.style.border =color_arr[color_ran];
}

// let box_num2 = document.getElementById("box_num2");
let b2 = document.getElementById("box_num2");
let b4 = document.getElementById("box_num4");
let b6 = document.getElementById("box_num6");
let b8 = document.getElementById("box_num8");
let b10 = document.getElementById("box_num10");

function pass_range(param) {user_input = param;ran_pass();
switch (param) {
    case 2:
        
        b2.style.background="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
        b4.style.background="rgba(250, 250, 250, 0.849)";
        b6.style.background="rgba(250, 250, 250, 0.849)";
        b8.style.background="rgba(250, 250, 250, 0.849)";
        b10.style.background="rgba(250, 250, 250, 0.849)";
        break;
    case 4:
       
        b4.style.background="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
        b2.style.background="rgba(250, 250, 250, 0.849)";
        b6.style.background="rgba(250, 250, 250, 0.849)";
        b8.style.background="rgba(250, 250, 250, 0.849)";
        b10.style.background="rgba(250, 250, 250, 0.849)";
        break;
    case 6:
       
        b6.style.background="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
        b2.style.background="rgba(250, 250, 250, 0.849)";
        b4.style.background="rgba(250, 250, 250, 0.849)";
        b8.style.background="rgba(250, 250, 250, 0.849)";
        b10.style.background="rgba(250, 250, 250, 0.849)";
        break;
    case 8:
       
        b8.style.background="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
        b4.style.background="rgba(250, 250, 250, 0.849)";
        b6.style.background="rgba(250, 250, 250, 0.849)";
        b2.style.background="rgba(250, 250, 250, 0.849)";
        b10.style.background="rgba(250, 250, 250, 0.849)";
        break;
    case 10:
        
        b10.style.background="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
        b4.style.background="rgba(250, 250, 250, 0.849)";
        b6.style.background="rgba(250, 250, 250, 0.849)";
        b8.style.background="rgba(250, 250, 250, 0.849)";
        b2.style.background="rgba(250, 250, 250, 0.849)";
        break
    default:
        b4.style.background="rgba(250, 250, 250, 0.849)";
        b6.style.background="rgba(250, 250, 250, 0.849)";
        b8.style.background="rgba(250, 250, 250, 0.849)";
        b10.style.background="rgba(250, 250, 250, 0.849)";
        break;

}
}




