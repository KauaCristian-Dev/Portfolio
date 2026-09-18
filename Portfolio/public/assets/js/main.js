const bgVideo = document.getElementById('bg-contact');
let reverseInternal;

bgVideo.addEventListener('ended', function(){
    bgVideo.pause();

    reverseInternal = setInterval(() => {
        if(bgVideo.currentTime > 0){
            bgVideo.currentTime -= 0.4;
        } else {
            clearInterval(reverseInternal);
            bgVideo.play();
        }
    }, 30)
});

