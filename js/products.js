var productJson= [
    {
    id:"1",
    productName:"Dish 1",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSADlUaG-dJ1stBXmNFJi-WtUxR5AqqQr4SA&usqp=CAU",
    price:"50 EGP",
    ingredients:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis harum namnemo deleniti quo dignissimos consequuntur nobis, et impedit."
    },
    {
        id:"2",
        productName:"Dish 2",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSADlUaG-dJ1stBXmNFJi-WtUxR5AqqQr4SA&usqp=CAU",
        price:"70 EGP",
        ingredients:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis harum namnemo deleniti quo dignissimos consequuntur nobis, et impedit."
    },
    {
        id:"3",
        productName:"Dish 3",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSADlUaG-dJ1stBXmNFJi-WtUxR5AqqQr4SA&usqp=CAU",
        price:"80 EGP",
        ingredients:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis harum namnemo deleniti quo dignissimos consequuntur nobis, et impedit."
    },
    {
        id:"4",
        productName:"Dish 4",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSADlUaG-dJ1stBXmNFJi-WtUxR5AqqQr4SA&usqp=CAU",
        price:"40 EGP",
        ingredients:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis harum namnemo deleniti quo dignissimos consequuntur nobis, et impedit."
    },
    {
        id:"5",
        productName:"Dish 5",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSADlUaG-dJ1stBXmNFJi-WtUxR5AqqQr4SA&usqp=CAU",
        price:"60 EGP",
        ingredients:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis harum namnemo deleniti quo dignissimos consequuntur nobis, et impedit."
    },
    {
        id:"6",
        productName:"Dish 6",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSADlUaG-dJ1stBXmNFJi-WtUxR5AqqQr4SA&usqp=CAU",
        price:"80 EGP",
        ingredients:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis harum namnemo deleniti quo dignissimos consequuntur nobis, et impedit."
    }
]
////////////// SEARCH
function search_Product() {
    let input = document.getElementById('inpu').value;
    console.log(input)
    input=input.toLowerCase();
    let x = document.getElementsByClassName('card');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";
            x[i].style.listStyleType="none";                 
        }
    }
}


var row= document.getElementById("row");
var img,card, icon,icon2,controls;
function getCart()
{
    var s=localStorage.getItem("myOrders");
            console.log(s)
}
for(var i =0;i<productJson.length;i++)
{
        ///// CREATE CARDS //////
    card=document.createElement("div");
    card.setAttribute("class","card");
    card.setAttribute("onmouseover","openControls(this)")
    card.setAttribute("onmouseout","closeControls(this)")


        ///// CREATE ICONS/////
    icon= document.createElement("i");
    icon2=document.createElement("i")
    icon.setAttribute("class","fa-solid fa-heart");
    icon.setAttribute("flag2","true");
    icon.setAttribute("onclick","addFavourite(event)");
    
    icon2.setAttribute("class","fa-solid fa-cart-plus ");
    icon2.setAttribute("flag","true");
    icon2.setAttribute("onclick","add(event)");

        //// CREATE SPAN OF ICONS/////
    controls=document.createElement("span");
    controls.setAttribute("style","display:none");
    controls.setAttribute("class","controls")
    controls.setAttribute("id",productJson[i].id)
    controls.appendChild(icon)
    controls.appendChild(icon2)

        ///// CREATE CARDS IMAGES/////
    img= document.createElement("img");
    img.setAttribute("src",productJson[i].image)
    img.setAttribute("imgId",productJson[i].id)
    img.setAttribute("onclick","showDetails(event)")

    
    //// CREATE CARD TEXT
    var head=document.createElement("h3");
    head.innerHTML= productJson[i].productName;
    head.setAttribute("class","head-prod");

    ///// APPEND ALL/////
    var par=document.createElement("p");
    par.innerHTML= productJson[i].price;
    card.appendChild(img);
    card.appendChild(head);
    card.appendChild(par);
    card.appendChild(controls);

    row.appendChild(card);

}
/////////////////SHOW CONTROLS//////////////////////////
function openControls(self)
{
    
    self.lastChild.setAttribute("style","display:visible");

}
function closeControls(self)
{
    
    self.lastChild.setAttribute("style","display:none");

}
////// SEARCH BAR animation ///////
var inpu = document.getElementById("inpu")
function animated(){
inpu.classList.add("seAnimate")
}
function stopAnimated(){
    inpu.classList.remove("seAnimate")
    }
///////////////////Show product details////////////////////////////
var productImg= document.getElementById("productImg");
var productPrice=document.getElementById("productPrice");
var productName=document.getElementById("productName");
var productIng=document.getElementById("productIng");
productName.innerHTML=productJson[0].productName
productImg.src=productJson[0].image
productPrice.innerHTML=productJson[0].price
productIng.innerHTML=productJson[0].ingredients

function showDetails(event){
var pro= productJson.find( i=>i.id== event.target.getAttribute("imgId"))
productName.innerHTML=pro.productName;
productImg.src=pro.image;
productPrice.innerHTML=pro.price
productIng.innerHTML=pro.ingredients

}
/////////// ADD TO CART ////////////
var orders=[]
function add(event) {
    var flag= event.target.getAttribute("flag")
    if(flag=="true")
        {
            event.target.style.color="#ffff00"
            for(var i=0;i<productJson.length;i++)
            {
            if(event.target.parentNode.id==productJson[i].id)
            { 
                orders.push(productJson[i])
            }
            } 
            event.target.setAttribute("flag","false");
        }
        else 
        {
            event.target.style.color="white";
            orders.pop();
            event.target.setAttribute("flag","true");
        }
        localStorage.setItem("myOrders",JSON.stringify(orders));
        console.log(orders)
  }
  
  //favourite

  var favourites=[]
  function addFavourite(event) {
      var flag2= event.target.getAttribute("flag2")
      if(flag2=="true")
          {
              event.target.style.color="red"
              for(var i=0;i<productJson.length;i++)
              {
              if(event.target.parentNode.id==productJson[i].id)
              { 
                  favourites.push(productJson[i])
              }
              } 
              event.target.setAttribute("flag2","false");
          }
          else 
          {
              event.target.style.color="white";
              favourites.pop();
              event.target.setAttribute("flag2","true");
          }
          localStorage.setItem("favourites",JSON.stringify(favourites));
        console.log(JSON.parse(localStorage.getItem("favourites")))

    }

