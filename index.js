defaultRadio = document.getElementById("radio2");
defaultRadio.checked = true;

function hideShow(val)
{ if(val == 1){
    document.getElementById('hide1').style.display='block';
    document.getElementById('hide2').style.display='none';
    document.getElementById('hide3').style.display='none';
    button.innerText = "+Add to Cart"
    price.innerText = "Total : DKK 195.00"

}
   else if(val == 2){
    document.getElementById('hide1').style.display='none';
    document.getElementById('hide2').style.display='block';
    document.getElementById('hide3').style.display='none';
    button.innerText = "+Add to Cart";
    price.innerText = "Total : DKK 345.00"
}
     else if(val == 3){
        document.getElementById('hide1').style.display='none';
        document.getElementById('hide2').style.display='none';
        document.getElementById('hide3').style.display='block';
        button.innerText = "+Add to Cart";
        price.innerText = "Total : DKK 528.00"
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