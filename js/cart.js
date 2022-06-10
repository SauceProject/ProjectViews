var ls=[];

ls= JSON.parse(localStorage.getItem("myOrders")) || JSON.parse(localStorage.getItem("ls")) ;

var container= document.getElementById("container");
var button=document.createElement("a");
button.innerHTML="Order Now";
button.setAttribute("class","order-btn");

var card,img;
window.onload=function(){
for(var i =0;i<ls.length;i++)
{
    card=document.createElement("div");
    card.setAttribute("class","card");
        ///// CREATE CARDS IMAGES/////
    
    img= document.createElement("img");
    img.setAttribute("src",ls[i].image)
    img.setAttribute("id","productImg");
    
    //// CREATE CARD TEXT
    var head=document.createElement("h3");
    head.innerHTML= ls[i].productName;
    head.setAttribute("class","head-prod");

    var par=document.createElement("p");
    par.innerHTML= ls[i].price;

    var remove = document.createElement("i");
    remove.setAttribute("id",ls[i].id);
    remove.setAttribute("class","fa-solid fa-trash");
    remove.setAttribute("onclick","removeFromCart(this)");

    card.appendChild(img);
    card.appendChild(head);
    card.appendChild(par);
    card.appendChild(remove);

    container.appendChild(card)

}
if(JSON.parse(localStorage.getItem("myOrders")).length!=0)
container.appendChild(button)

}


function removeFromCart(self){
    ls.pop();
    localStorage.setItem("ls",JSON.stringify(ls));
    localStorage.removeItem("myOrders");
    location.assign("../cart.html")
}
