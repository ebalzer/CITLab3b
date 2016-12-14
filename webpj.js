$(document).ready(function(){
    console.log('Ready!');
    var cart = document.getElementById('cart');
    var cartbar = document.createElement('div');
    var bigbad= document.getElementById('bigbad');
    bigbad.style.position='fixed';
    bigbad.style.top='0';
    bigbad.style.width = '100vw';
    bigbad.style.height = '100vh';
    bigbad.style.zIndex='24';
    bigbad.style.backgroundColor ='rgba(0, 0, 0, 0.7)';
    
    bigbad.style.right='-200vw';
    bigbad.appendChild(cartbar);
    cartbar.style.position = 'fixed';
    cartbar.style.bottom = '20vh';
    cartbar.style.zIndex = '100';
    cartbar.style.right = '-100vw';
    cartbar.style.width = '20vw';
    cartbar.style.height = '60vh';
    cartbar.style.backgroundColor = 'darkgray';
    cartbar.style.transition = '1s';
    
    var carttop = document.createElement('h2');
    cartbar.appendChild(carttop);
    carttop.innerHTML = 'CART';
    carttop.style.position='absolute';
    carttop.style.margin='auto';
    carttop.style.left='10vw';
    carttop.style.fontFamily='sans-serif';
    
    var gotocart = document.createElement('button');
    cartbar.appendChild(gotocart);
    gotocart.innerHTML='Checkout';
    gotocart.style.position = 'absolute';
    gotocart.style.width = 'auto';
    gotocart.style.height = 'auto';
    gotocart.style.fontSize = '3vh';
    gotocart.style.left = '7vw';
    gotocart.style.bottom = '4vh';
    gotocart.style.backgroundColor = 'darkorange';
    gotocart.style.backgroundRepeat='no-repeat';
    gotocart.style.border = 'none';
    gotocart.style.cursor = 'pointer';
    gotocart.style.overflow = 'hidden';
    gotocart.style.outline = 'none';
    var testimonials = document.getElementById('testimonials');
    var Checkerout = document.getElementById('Checkerout');
    
    
    Checkerout.onclick = function(){
            sessionStorage.cartinfo = 1
            bigbad.style.right='0';
            cartbar.style.right="0";
        if (sessionStorage.cartinfo >= 1){
            
            var cartdata = document.createElement('div');
            cartbar.appendChild(cartdata);
            cartdata.style.width='auto';
            cartdata.style.height='auto';
            cartdata.innerHTML = 'OSSARG      $299';
            cartdata.style.fontSize = '2vh';
            cartdata.style.position = 'absolute';
            cartdata.style.right = '8vw';
            cartdata.style.bottom = '50vh';
            
        }
        else{
            console.log('not working')
        }
        }
    
    cart.onclick = function(){
        
        bigbad.style.right='0';
        cartbar.style.right="0";
        if (sessionStorage.cartinfo >= 1){
            
            var cartdata = document.createElement('div');
            cartbar.appendChild(cartdata);
            cartdata.style.width='auto';
            cartdata.style.height='auto';
            cartdata.innerHTML = 'OSSARG      $299';
            cartdata.style.fontSize = '2vh';
            cartdata.style.position = 'absolute';
            cartdata.style.right = '8vw';
            cartdata.style.bottom = '50vh';
            
        }
        else{
            console.log('not working')
        }
        }
    bigbad.onclick = function(){
        bigbad.style.right='-100vw';
        cartbar.style.right="-100vw";
        }
        var icon = document.getElementById('icon');
    icon.onclick = function (){
        window.location.href='home.html'
    }
    testimonials.onclick = function(){
        console.log('Ok');
        }
    
    gotocart.onclick = function(){
        console.log('button worked')
        window.location.href='ViewCart.html';
    }
   
        
    
    var divtext = document.getElementById('text');
    var subtotal = document.getElementById('subtotal');
    var mycart = document.getElementById('MyCart')
        if (sessionStorage.cartinfo == 1){
            divtext.innerHTML='OSSARG    x1';
            subtotal.innerHTML='Subtotal: C$299.00'
            mycart.innerHTML='My Cart (1)'
        }
            else{
            divtext.innerHTML='Cart is Empty';
            }

    
});
                  