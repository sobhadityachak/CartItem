defaultRadio = document.getElementById("radio2");
defaultRadio.checked = true;

function hideShow(val)
{ if(val == 1){
    document.getElementById('hide1').style.display='block';
    document.getElementById('hide2').style.display='none';
    document.getElementById('hide3').style.display='none';
    document.getElementsByClassName("del_text")[0].style.display='block';
    document.getElementsByClassName("del_text")[1].style.display='none';
    document.getElementsByClassName("del_text")[2].style.display='none';
    button.innerText = "+Add to Cart"
    price.innerText = "Total : DKK 195.00"
    document.getElementsByClassName("main_element")[0].style.background='#F4FBF9';
    document.getElementsByClassName("main_element")[0].style.border='1px solid #007F61';
    document.getElementsByClassName("main_element")[1].style.background='#FFFFFF';
    document.getElementsByClassName("main_element")[1].style.border='1px solid #C8C8C8';
    document.getElementsByClassName("main_element")[2].style.background='#FFFFFF';
    document.getElementsByClassName("main_element")[2].style.border='1px solid #C8C8C8';
}
   else if(val == 2){
    document.getElementById('hide1').style.display='none';
    document.getElementById('hide2').style.display='block';
    document.getElementById('hide3').style.display='none';
    document.getElementsByClassName("del_text")[0].style.display='none';
    document.getElementsByClassName("del_text")[1].style.display='block';
    document.getElementsByClassName("del_text")[2].style.display='none';
    button.innerText = "+Add to Cart";
    price.innerText = "Total : DKK 345.00"
    document.getElementsByClassName("main_element")[1].style.background='#F4FBF9';
    document.getElementsByClassName("main_element")[1].style.border='1px solid #007F61';
    document.getElementsByClassName("main_element")[0].style.background='#FFFFFF';
    document.getElementsByClassName("main_element")[0].style.border='1px solid #C8C8C8';
    document.getElementsByClassName("main_element")[2].style.background='#FFFFFF';
    document.getElementsByClassName("main_element")[2].style.border='1px solid #C8C8C8';
}
     else if(val == 3){
        document.getElementById('hide1').style.display='none';
        document.getElementById('hide2').style.display='none';
        document.getElementById('hide3').style.display='block';
        document.getElementsByClassName("del_text")[0].style.display='none';
    document.getElementsByClassName("del_text")[1].style.display='none';
    document.getElementsByClassName("del_text")[2].style.display='block';
        button.innerText = "+Add to Cart";
        price.innerText = "Total : DKK 528.00"
        document.getElementsByClassName("main_element")[2].style.background='#F4FBF9';
    document.getElementsByClassName("main_element")[2].style.border='1px solid #007F61';
    document.getElementsByClassName("main_element")[1].style.background='#FFFFFF';
    document.getElementsByClassName("main_element")[1].style.border='1px solid #C8C8C8';
    document.getElementsByClassName("main_element")[0].style.background='#FFFFFF';
    document.getElementsByClassName("main_element")[0].style.border='1px solid #C8C8C8';
    }
}
function cart(){
    let text= document.getElementById('button')
    if( button.innerText == "+Add to Cart"){
        button.innerText = "Added to Cart"
    }
    else if( button.innerText == "Added to Cart"){
        button.innerText = "+Add to Cart"
    }
}