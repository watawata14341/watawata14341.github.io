$(function(){
    $(".main").css("display", "none");
    
    setTimeout(function() {
        $('.anime').fadeOut();
    }, 3800);
});
    
$(function(){
    $(".main").css({opacity:'0'});
    setTimeout(function(){
    $(".main").css("display", "block");
    $(".main").stop().animate({opacity:'1'},1000);//1秒かけてコンテンツを表示
    },3800);//約4秒後に
});

new Vivus("svg-animation", {
    duration: 200 , //アニメーションの時間
    start: "autostart", //アニメーションの自動再生
    type: "oneByOne" // アニメーションのタイプを設定
});