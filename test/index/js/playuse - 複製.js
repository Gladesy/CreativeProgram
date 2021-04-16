var a=-3000;
var b=850;
var fullscreennow='off'


///////////沒圖替換
{
function picError(img,name)
{img.src=name;}
}

///////讀取進度
function readend(){
   document.getElementById("readimg").src="../img/stamp/m/922b39738ac0b2301b1a087a3cb6c737ab8b.png";
}


//適應視窗
function testw(){
var SH=document.body.clientHeight/790;
var SW=document.body.clientWidth/1135;

if(SH>SW)
{document.body.style.transform ='scale('+SW+')'}
else{document.body.style.transform ='scale('+SH+')'}
}


//////carduse
	function carduse(){
		var imgs_div=document.getElementById("imgs");
		var nav_div=document.getElementById("nav");
		//获取到图片轮播的ul对象数组
		var imgsUl=imgs_div.getElementsByTagName("ul")[0];
		//获取到远点的ul对象数组
		var nav=nav_div.getElementsByTagName("ul")[0];
		//上一个
		var prious=document.getElementById("preous");
		//下一个
		var next =document.getElementById("next");
		var timer;
		var animTimer;
		var index=1;
//		play();
		prious.onclick=function(){
			initImgs(index);
			index-=1;
			if(index<1){
				index=4;
			}
			animate(450);
			btnShow(index);
		}
		next.onclick=function(){
			initImgs(index);
			index+=1;
			if(index>4){
				index=1;
			}
			animate(-450);
			btnShow(index);
		}

		function animate(offset){
			var newLeft=parseInt(imgsUl.offsetLeft)+offset;
			// imgsUl.style.left=newLeft;
			// console.log("定时器外面:此时offsetLeft"+imgsUl.offsetLeft+">>newLeft:"+newLeft);
			if(newLeft>-450){
				// imgsUl.style.left=-5120+"px";
				donghua(-1800);	
			}else if(newLeft<-1800){
				// imgsUl.style.left=-1280+"px";
				donghua(-450);	
			}else{
				donghua(newLeft);
			}

		}
		function donghua(offset){
			clearInterval(animTimer);
			animTimer=setInterval(function(){
				imgsUl.style.left=imgsUl.offsetLeft+(offset-imgsUl.offsetLeft)/10 + "px";
				if(imgsUl.offsetLeft-offset<10&&imgsUl.offsetLeft-offset>-10){//如果偏移量已经等于指定好的偏移量，则秦楚定时器
					imgsUl.style.left=offset+"px";
					clearInterval(animTimer);
					//开启定时轮播
//					play();			
				}
			},10);
		}
		function initImgs(cur_index){
			clearInterval(timer);
			clearInterval(animTimer);
			var off=cur_index*450;
			imgsUl.style.left=-off+"px";
		}
/*		function play(){
			timer=setInterval(function(){
				next.onclick();
			},0)
		}
*/		function btnShow(cur_index){
			var list=nav.children;
			for(var i=0;i<nav.children.length;i++){
				nav.children[i].children[0].className="hidden";
			}
			nav.children[cur_index-1].children[0].className="current";
		}
		for(var i=0;i<nav.children.length;i++){
			nav.children[i].index=i;
			var sd=nav.children[i].index;
			nav.children[i].onmousedown=function(){
				index=this.index+1;
				initImgs(this.index+1);
				btnShow(this.index+1);
			}
			nav.children[i].onmouseout=function(){
//				play();
			}
		}
		
	}
///back
function div_bg_back(event){

var btnNum = event.button;
if (btnNum==2){
return ALLBACK();
}

}


//////////////ADVbook

function ADVbook(event,U1,U2,U3,U4,U5,U6,U7,U8,U9,U10,U11,U12,U13,U14,U15,U16,U17,U18,U19,U20,U21,U22,U23){


var btnNum = event.button;
if (btnNum==2)
{
if(U2=='GR'){return GRRANK()}

   document.getElementById("ADVuse").style.left="0px";
   document.getElementById("bookHarem__detailChara").src="../img/card/bustup_l/"+U1+".png";
   document.getElementById("bookHarem__bgList--").className='bookHarem__bgList--'+U2;
   document.getElementById("bookPageHaremList__img").src="../img/card/harem/"+U3;
   document.getElementById("bookHarem__ico__rarity").className='bookHarem__ico__rarity'+U2;
   document.getElementById("bookHarem__scene1").className='bookHarem__scene1Btn'+U4;
   document.getElementById("bookHarem__scene1").onclick=function(){scene_0('scene1',U5,U6)};
   document.getElementById("bookHarem__scene2").className='bookHarem__scene2Btn'+U7;
   document.getElementById("bookHarem__scene2").onclick=function(){scene_0('scene2',U8,U9)};
   document.getElementById("bookHarem__scene3").className='bookHarem__scene3Btn'+U10;
   document.getElementById("bookHarem__scene3").onclick=function(){scene_0('scene3',U11,U12)};
   document.getElementById("bookHarem__name").innerHTML=U13;
   document.getElementById("bookHarem__voiceActor").innerHTML=U14;
   document.getElementById("bookHarem__detailComment").innerHTML=U15;

   document.getElementById("chara0").className='chara_on';
   document.getElementById("chara1").className='chara_off';
   document.getElementById("chara2").className='chara_off';
   document.getElementById("chara3").className='chara_off';

   document.getElementById("chara0").onclick=function(){charach('0',U1)};
   document.getElementById("chara1").onclick=function(){charach('1',U20)};
   document.getElementById("chara2").onclick=function(){charach('2',U21)};
   document.getElementById("chara3").onclick=function(){charach('3',U22)};
   
   

}
else if(btnNum==0)
{
   document.getElementById("carduse3").onclick=function(){namebox_all(U23)};  
   document.getElementById("carduse").style.left="0px";
   document.getElementById("cardview1").src="../img/card/xl/"+U16;
   document.getElementById("cardview2").src="../img/card/xl/"+U17;
   document.getElementById("cardview3").src="../img/card/xl/"+U18;
   document.getElementById("cardview4").src="../img/card/xl/"+U19;
   document.getElementById("cardview4_1").src="../img/card/xl/"+U19;
   document.getElementById("cardview1_6").src="../img/card/xl/"+U16;

   document.getElementById("cardname").innerHTML=U13;
   document.getElementById("imgs").children[0].style="left: -450px;";
   document.getElementById("nav").children[0].children[0].children[0].className="current";
   document.getElementById("nav").children[0].children[1].children[0].className="hidden";
   document.getElementById("nav").children[0].children[2].children[0].className="hidden";
   document.getElementById("nav").children[0].children[3].children[0].className="hidden";

return carduse()

}

}


function ADVout(){

   var right = document.getElementById('ADVuse');
      right.oncontextmenu = function(e){
       e.preventDefault();
   };
   right.onmousedown = function(e){
       if(e.button ==2){
   document.getElementById("ADVuse").style.left="-10000px";
   }
   
   }

}

function cardout(){

   var right = document.getElementById('carduse');
      right.oncontextmenu = function(e){
       e.preventDefault();
   };
   right.onmousedown = function(e){
       if(e.button ==2){
   document.getElementById("carduse").style.left="-10000px";
   }
   
   }

}



//七神

function guardian(){
   document.getElementById("Guardian_1").style.left="0px";
}

function Guardianout(){

   var right = document.getElementById('Guardian_1');
      right.oncontextmenu = function(e){
       e.preventDefault();
   };
   right.onmousedown = function(e){
       if(e.button ==2){
   document.getElementById("Guardian_1").style.left="-10000px";
   }
   
   }

}

function Guardianoutopen(event,U1,U2,U3,U4,U5,U6,U7,U8,U9,U10,U11,U12,U13,U14,U15,U16,U17,U18,U19,U20){

var btnNum = event.button;
if (btnNum==0)
{
   document.getElementById("ADVuse").style.left="0px";
   document.getElementById("bookHarem__detailChara").src="../img/card/bustup_l/"+U1+".png";
   document.getElementById("bookHarem__bgList--").className='bookHarem__bgList--'+U2;
   document.getElementById("bookPageHaremList__img").src="../img/card/harem/"+U3;
   document.getElementById("bookHarem__ico__rarity").className='bookHarem__ico__rarity'+U2;
   document.getElementById("bookHarem__scene1").className='bookHarem__scene1Btn'+U4;
   document.getElementById("bookHarem__scene1").onclick=function(){scene_0('scene1',U5,U6)};
   document.getElementById("bookHarem__scene2").className='bookHarem__scene2Btn'+U7;
   document.getElementById("bookHarem__scene2").onclick=function(){scene_0('scene2',U8,U9)};
   document.getElementById("bookHarem__scene3").className='bookHarem__scene3Btn'+U10;
   document.getElementById("bookHarem__scene3").onclick=function(){scene_0('scene3',U11,U12)};
   document.getElementById("bookHarem__name").innerHTML=U13;
   document.getElementById("bookHarem__voiceActor").innerHTML=U14;
   document.getElementById("bookHarem__detailComment").innerHTML=U15;
   
   document.getElementById("chara0").onclick=function(){charach('0',U1)};
   document.getElementById("chara1").onclick=function(){charach('1',U1)};
   document.getElementById("chara2").onclick=function(){charach('2',U1)};
   document.getElementById("chara3").onclick=function(){charach('3',U1)};


}
}

//GR
function GRRANK(){
   document.getElementById("GRRANK_1").style.left="0px";
   document.getElementById("GRRANK_2").style.left="-10000px";
}

function GRRANK_1out(){

   var right = document.getElementById('GRRANK_1');
      right.oncontextmenu = function(e){
       e.preventDefault();
   };
   right.onmousedown = function(e){
       if(e.button ==2){
   document.getElementById("GRRANK_1").style.left="-10000px";
   }
   
   }

}


function GRRANK_2(event,U1,U2,U3,U4,U5,U6,U7,U8,U9,U10,U11,U12,U13,U14,U15,U16,U17){

var btnNum = event.button;
if (btnNum==0)
{
   document.getElementById("GRRANK_name").innerHTML=U2;
   document.getElementById("GRRANK_bustup").src='../img/card/bustup_l/'+U12+'.png';
   document.getElementById("GRRANK_sample1").style.backgroundImage='url(../img/card/harem/'+U3+')';
   document.getElementById("GRRANK_sample2").style.backgroundImage='url(../img/card/harem/'+U4+')';
   document.getElementById("GRRANK_sample3").style.backgroundImage='url(../img/card/harem/'+U5+')';
   document.getElementById("GRRANK_haremView1").className='cardAdditionDetail__button--haremView1 '+U15;
   document.getElementById("GRRANK_haremView2").className='cardAdditionDetail__button--haremView2 '+U16;
   document.getElementById("GRRANK_haremView3").className='cardAdditionDetail__button--haremView3 '+U17;
   document.getElementById("GRRANK_haremView1").onclick=function(){scene_0('scene1',U6,U7)};
   document.getElementById("GRRANK_haremView2").onclick=function(){scene_0('scene2',U8,U9)};
   document.getElementById("GRRANK_haremView3").onclick=function(){scene_0('scene3',U10,U11)};

   document.getElementById("GRRANK_2").style.left="0px";
   
   

}   
}

function GRRANK_2out(){

   var right = document.getElementById('GRRANK_2');
      right.oncontextmenu = function(e){
       e.preventDefault();
   };
   right.onmousedown = function(e){
       if(e.button ==2){
   document.getElementById("GRRANK_2").style.left="-10000px";
   }
   
   }

}






///改立繪

function charach(chr,bustup){

   document.getElementById("chara0").className='chara_off';
   document.getElementById("chara1").className='chara_off';
   document.getElementById("chara2").className='chara_off';
   document.getElementById("chara3").className='chara_off';
   document.getElementById("bookHarem__detailChara").src="../img/card/bustup_l/"+bustup+".png";

    if(chr=='0'){document.getElementById("chara0").className='chara_on';}
    if(chr=='1'){document.getElementById("chara1").className='chara_on';}
	if(chr=='2'){document.getElementById("chara2").className='chara_on';}
	if(chr=='3'){document.getElementById("chara3").className='chara_on';}
}


/////寢一覽

function ADVALL(){


cardclear()

function sortFunction(x,y){return x-y;}

var CardIDsA=CardIDs.sort(sortFunction);

CardIDsA.forEach(function(CardID) {
try{
var XSA=document.getElementById('div'+CardID).onmousedown;
var XSA2=String(XSA) 
var XSA3=XSA2.search("R','")
if (XSA3==-1){XSA3=XSA2.search("X','")}


var XSA4=XSA2.substr((XSA3+4),36)

var ADVALLDIV= document.createElement('div');
ADVALLDIV.id=('ADVALLDIV'+CardID);
ADVALLDIV.className='ADVALLDIV';

var ADVALL= document.createElement('img');
ADVALL.id=('ADVALL'+CardID);
ADVALL.className='ADVALL';
ADVALL.src=('../img/card/harem/'+XSA4);
ADVALL.onerror=function (){picError(this,"../img/card/harem/noimg.png")};


document.getElementById("ADVALLDIVTOP").appendChild(ADVALLDIV);
document.getElementById('ADVALLDIV'+CardID).appendChild(ADVALL);
document.getElementById('ADVALLDIV'+CardID).onmousedown=XSA;


}catch(e){}
});
}



function ADVALLclear(){
cardclear()
cardrankGO()
}


//開始
function scene_0(sceneLV,sceneid,sceneid2){

window.frames["sceneopena"].document.location.href="scene_a.html";
window.frames["sceneopenh"].document.location.href="scene_h.html";

setTimeout(function(){
return scene_1(sceneLV,sceneid,sceneid2)
},1000)//網頁跑太慢就加時間
}


function scene_1(sceneLV,sceneid,sceneid2){

if(sceneid===' '){
return sceneno()
}
else if(sceneid==='LRuse'){
return LRusestart(sceneid2)
}


var script = document.createElement("script");
script.src = '../drama/card/'+sceneLV+'/'+sceneid+'.js';
script.onload=function(){scenes_2(sceneLV,sceneid,sceneid2)}
window.frames["sceneopena"].document.body.appendChild(script);

a=20;
return scenewindowstarta(a)
}


function scenes_2(sceneLV,sceneid,sceneid2){

var script = document.createElement("script");
script.src = '../drama/card/'+sceneLV+'/'+sceneid2+'.js';
window.frames["sceneopenh"].document.body.appendChild(script);

var script = document.createElement("script");
script.src = "./js_anime/common/adv/playADV.min.js";
window.frames["sceneopena"].document.body.appendChild(script);

}

//ADV>H
function scene4(){

a=-3000;
   document.getElementById("sceneopena").style.left=a+"px";
return scenestart4()
}


function scenestart4(){
a=20;
return scenestart4X(), scenewindowstarth(a)
}

function scenestart4X(sceneid2){

setTimeout(function(){


var script = document.createElement("script");
script.src = "./js_anime/common/adv/playADV.min.js";
window.frames["sceneopenh"].document.body.appendChild(script);


},1000)
}


///////LR
function LRusestart(sceneid2){
a=20;
window.frames["sceneopenh"].document.location.href="./LRuse/"+sceneid2+"/1.html";
document.getElementById("sceneopenh").style.left=a+"px";

}


function LREND(){
a=-3000;
if(fullscreennow=='on'){fullw()}
return scenewindowstarta(),scenewindowstarth()
}




//全結束
function scenewindow(){

a=-3000;
window.frames["sceneopena"].document.location.href="scene_a.html";
window.frames["sceneopenh"].document.location.href="scene_h.html";
if(fullscreennow=='on'){fullw()}
return scenewindowstarta(),scenewindowstarth()

}



function scenewindowstarta(){

   document.getElementById("sceneopena").style.left=a+"px";
   chname()
}


function scenewindowstarth(){

   document.getElementById("sceneopenh").style.left=a+"px";
   chname()
}


//未取得
function sceneno(){
alert("未取得")
}



///改名
function chname(){
var name_element = document.getElementById("chname");
var Pname=name_element.value;
try{
window.frames["sceneopena"].CHNAME(Pname);
window.frames["sceneopenh"].CHNAME(Pname);
}catch(e){}
}



///////////////////////test


//全螢幕


document.onkeydown=keydown
function keydown(){
if (event.keyCode=== 87) {fullw_0()}
}


function fullw_LR(){

if(fullscreennow=='on'){
fullscreennow='off'
window.frames["sceneopenh"].fullhw()
}
}

function fullw_IP3S(){

if(fullscreennow=='on'){
fullhw()
}
}


function fullw_0(){
if(document.getElementById('sceneopenh').style.left=='20px' || document.getElementById('sceneopenh').style.left=='0px')
{ window.frames["sceneopenh"].fullhw()}
}


function fullw(){
if(fullscreennow=='off'){
if (document.documentElement.requestFullscreen) { 
document.documentElement.requestFullscreen();}
else if (document.documentElement.mozRequestFullScreen) { 
document.documentElement.mozRequestFullScreen();}
else if (document.documentElement.webkitRequestFullScreen) { 
document.documentElement.webkitRequestFullScreen();}
else if (elem.msRequestFullscreen) {
elem.msRequestFullscreen();}    
    
fullscreennow='on'
setTimeout(function(){fullw_2()},500)
}


else if(fullscreennow=='on'){
if (document.exitFullscreen) { 
document.exitFullscreen();} 
else if (document.mozCancelFullScreen) { 
document.mozCancelFullScreen();} 
else if (document.webkitCancelFullScreen) { 
document.webkitCancelFullScreen();} 
else if (document.msExitFullscreen) { 
document.msExitFullscreen();} 

fullscreennow='off'
document.getElementById('sceneopenh').style.transform ='scale(1)'
document.getElementById('sceneopenh').style.top='15';
document.getElementById('sceneopenh').style.left='20';

}

}                 
 

function fullw_2(){
var SH=document.body.clientHeight/640;
var SW=document.body.clientWidth/854;

document.getElementById('sceneopenh').style.top='0';
document.getElementById('sceneopenh').style.left='0';
document.getElementById('sceneopenh').style.transformOrigin='0 0';

if(SH>SW)
{document.getElementById('sceneopenh').style.transform ='scale('+SW+')'}
else{document.getElementById('sceneopenh').style.transform ='scale('+SH+')'}

}


