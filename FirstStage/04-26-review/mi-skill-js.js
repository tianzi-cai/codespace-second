//小米闪购轮播
let itemList =document.querySelector('.b-item-list');
let items = document.querySelectorAll('.b-item-list li');

let len = items.length/4;//计算可以移动的次数
let itemIndex =1;

setInterval(function(){
    var movelen =0;
    if(itemIndex == len){
        itemIndex =0;
        movelen =0;
    }else{
        movelen = itemIndex*992;
    }

    itemList.style.cssText ='transform: translateX(-'+ movelen +'px);transition-duration: 1000ms;'
    itemIndex++;
},3000);