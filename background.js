let backflag;

function ChangeBack() {
    if(backflag){
        document.body.style.backgroundImage='url(image/IMG_2106.JPG)';
        backflag = false;
    }
    else{
        document.body.style.backgroundImage='url(image/IMG_2107.JPG)';
        backflag = true;
    }
};