(function(){
    'use strict'
        let hondVideo = document.getElementById('video-id');
    
        document.getElementById('play').addEventListener('click',(e) =>{
            hondVideo.play(); 
        },false);
    
        document.getElementById('pause').addEventListener('click',(e) =>{
            hondVideo.pause(); 
        },false);
        
        document.getElementById('vooruit').addEventListener('click',(e) =>{
            var currentTime = hondVideo.currentTime;
            hondVideo.currentTime = currentTime + 1;
        },false);
    
        document.getElementById('achteruit').addEventListener('click',(e) =>{
            var currentTime = hondVideo.currentTime;
            hondVideo.currentTime = currentTime - 1;
        },false);
    
        document.getElementById('reset').addEventListener('click',(e) =>{
            var currentTime = hondVideo.currentTime;
            hondVideo.currentTime = 0;
        },false);
    
    
    
    
    })();