window.onload = function(){

    var mySwiper = document.getElementById('mySwiper');
    var num=1;
    var timer=null;

    // 播放轮播
    function swiperInit(){
        timer = setInterval(function(){
            num++;
            if(num==6){
                num =1;
            }
            mySwiper.src='images/banner'+num+'.jpg';
        },2000);
    }
    swiperInit();
    //移进内容时，暂停播放
    var container = document.querySelector('.container');
    container.addEventListener('mouseenter',function(){
        clearInterval(timer);
    });
    container.addEventListener('mouseleave',function(){
        swiperInit();
    });

    // 按键下一个
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    left.addEventListener('click',function(e){
        num--;
        if(num==0){
            num=5;
        }
        mySwiper.src='images/banner'+num+'.jpg';
    });
    right.addEventListener('click',function(e){
        num++;
        if(num==6){
            num=1;
        }
        mySwiper.src='images/banner'+num+'.jpg';
    });

    //圆点操作

    let pageIcons = document.querySelectorAll('.page-icon');
    pageIcons.forEach(function(item,index){
        item.addEventListener('click',function(e){
            e.preventDefault();
            num=index+1;
            mySwiper.src = 'images/banner'+num+'.jpg';




        });
    });







}