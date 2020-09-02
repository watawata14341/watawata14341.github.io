let backflag = true;
var speed = 3000;
var times = 5000;

function ChangeBack() {
    if(backflag){
        $(document.body).fadeOut(speed,function(){
            $(document.body).css({"background-image":"url('image/IMG_2106.JPG')"}).fadeIn(speed);
        })
        /*document.body.style.backgroundImage='url(image/IMG_2106.JPG)';*/
        backflag = false;
    }
    else{
        $(document.body).fadeOut(speed,function(){
            $(document.body).css({"background-image":"url('image/IMG_2107.JPG')"}).fadeIn(speed);
        })
        /*document.body.style.backgroundImage='url(image/IMG_2107.JPG)';*/
        backflag = true;
    }
};