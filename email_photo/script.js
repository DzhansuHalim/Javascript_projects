(function(){
    'use strict'
    
        let verzender = prompt('Verzender?');
        let ontvanger = prompt('Ontvanger?');
        let bericht = prompt('Bericht:');
    
        document.getElementById('afzender').innerText = 'Verzender: ' + verzender;
        document.getElementById('ontvanger').innerText = 'Ontvanger: ' + ontvanger;
        document.getElementById('bericht').innerText = 'Bericht: ' + bericht;
        
        let myImg = new Array('img1.jpeg', 'img2.jpg', 'img3.jpg', 'img4.jpg');
        let randomImg = Math.floor(Math.random()* myImg.length);
    
        document.getElementById('image').style.backgroundImage = "url(" + myImg[randomImg] +")"; 
        
        
    })();