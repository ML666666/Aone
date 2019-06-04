function intiSize(){
    //获取当前浏览器窗口宽度(这里的实质就是body宽度)
    var win_w=document.body.offsetWidth;
    //定义变量
    var fontSize;
    if(win_w>750){
        fontSize=28;
    }else{
        //如果浏览器窗口宽度(这里的实质就是body宽度)值小于320，取320
        win_w=Math.max(320,win_w);
        fontSize=win_w/320*12
    }
    //设置根元素的大小
    document.getElementsByTagName('html')[0].style.fontSize=fontSize+'px';
}
//浏览器窗口宽度发生变化时条用这个函数，方便与改变窗口大小时候调试
onresize=intiSize;
intiSize();

//快速点击
HTMLImageElement.prototype.myonload=function(callback){		//判断图片是否加载完成
    if(this.complete){
        callback()
    }else{
        this.onload=callback;
    }
};

HTMLElement.prototype.fastClick = function(callBack){		//原生拓展快速点击
	this.addEventListener('touchstart',function(){
		this.isMove = false;
	});
	this.addEventListener('touchmove',function(){
		this.isMove = true;
	});
	this.addEventListener('touchend',function(){
		if(!this.isMove){
			callBack.apply(this);//修改this的指向
		}
	});
};

$.fn.fastClick = function (callBack) {			//拓展jq库的快速点击
    for (var i = 0; i < this.length; i++) {
        this[i].fastClick(callBack);
    }
};