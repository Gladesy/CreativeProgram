var a=-3000;
var b=850;
var fullscreennow='off';
var charjsondata='';
var charidarr=[];
var name_1OF='OFF'

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



//消框架
function charaboxre(){
var AICD=document.getElementById('ADVALLDIVTOP')
var childs=AICD.childNodes
for(var i = childs.length - 1; i >= 0; i--) {  
    AICD.removeChild(childs[i]);  }  

}
//json搜尋用
//return an array of objects according to key, value, or key and value matching
function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));    
        } else 
        //if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
        if (i == key && obj[i] == val || i == key && val == '') { //
            objects.push(obj);
        } else if (obj[i] == val && key == ''){
            //only add if the object is not already in the array
            if (objects.lastIndexOf(obj) == -1){
                objects.push(obj);
            }
        }
    }
    return objects;
}

//return an array of values that match on a certain key
function getValues(obj, key) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getValues(obj[i], key));
        } else if (i == key) {
            objects.push(obj[i]);
        }
    }
    return objects;
}

//return an array of keys that match on a certain value
function getKeys(obj, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getKeys(obj[i], val));
        } else if (obj[i] == val) {
            objects.push(i);
        }
    }
    return objects;
}



    let sceneURL = 'chardata.json';
    let scene= new XMLHttpRequest();
    scene.open('GET', sceneURL);
    scene.responseType = 'json';
    scene.send();

    scene.onload = function() {
    
charjsondata= scene.response;


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



//判定讀取&主要卡
function readchar(a,b){


if(a==='all'){
charaboxre()
charidarr=getValues(charjsondata['chara_a'], 'ID')
}
if(a==='rank'){
charaboxre()
charidarr=getValues(getObjects(charjsondata['chara_a'],'rank',b), 'ID')
}
if(a==='name_1'){
name_1OF='ON'
backdiv=document.getElementById('divTOP').getBoundingClientRect().top;
charaboxre()
document.getElementById("carduse").style.left="-10000px";
charidarr_1=charidarr
charidarr=getValues(getObjects(charjsondata['chara_a'],'name_1',b), 'ID')
}
if(a==='back'){
charaboxre()
charidarr=charidarr_1
}
if(a==='cv'){
charaboxre()
charidarr=getValues(getObjects(charjsondata['chara_a'],'cv',b), 'ID')
}
if(a==='IDsearch'){
charaboxre()
IDsearch=charidarr.push(document.getElementById("IDsearch").value);
}
if(a==='re'){
charaboxre()
charidarr=[]
charidarr_1=[]
}
if(a==='ADVALLh'){
charaboxre()
}
if(a==='ADVALLc'){
charaboxre()
}

//console.log(charidarr)

for(cid=0;cid<charidarr.length; cid++){
//console.log()
/*
charjsondata['chara_a']['chara_id'][charidarr[cid]]['rank']
charjsondata['chara_a']['chara_id'][charidarr[cid]]['ID']
charjsondata['chara_a']['chara_id'][charidarr[cid]]['name']
charjsondata['chara_a']['chara_id'][charidarr)[cid]]['name_1']
charjsondata['chara_a']['chara_id'][charidarr[cid]]['cv']
charjsondata['chara_a']['chara_id'][charidarr[cid]]['data']
charjsondata['chara_a']['chara_id'][charidarr[cid]]['harem']
charjsondata['chara_a']['chara_id'][charidarr[cid]]['bustup_l_0']
charjsondata['chara_a']['chara_id'][charidarr[cid]]['bustup_l_1']
charjsondata['chara_a']['chara_id'][charidarr[cid]]['bustup_l_2']
charjsondata['chara_a']['chara_id'][charidarr[cid]]['bustup_l_3']
charjsondata['chara_a']['chara_id'][charidarr[cid]]['card_1']
charjsondata['chara_a']['chara_id'][charidarr[cid]]['card_2']
charjsondata['chara_a']['chara_id'][charidarr[cid]]['card_3']
charjsondata['chara_a']['chara_id'][charidarr[cid]]['card_4']
charjsondata['chara_a']['chara_id'][charidarr[cid]]['scene_a_1']
charjsondata['chara_a']['chara_id'][charidarr[cid]]['scene_a_2']
charjsondata['chara_a']['chara_id'][charidarr[cid]]['scene_a_3']
charjsondata['chara_a']['chara_id'][charidarr[cid]]['scene_h_1']
charjsondata['chara_a']['chara_id'][charidarr[cid]]['scene_h_2']
charjsondata['chara_a']['chara_id'][charidarr[cid]]['scene_h_3']
*/
const CRId=(charjsondata['chara_a']['chara_id'][(charidarr[cid])]['ID'])



try{
if(charjsondata['chara_a']['chara_id'][charidarr[cid]]['card_4']!=" "){imgck=charjsondata['chara_a']['chara_id'][charidarr[cid]]['card_4']}
else if(charjsondata['chara_a']['chara_id'][charidarr[cid]]['card_3']!=" "){imgck=charjsondata['chara_a']['chara_id'][charidarr[cid]]['card_3']}
else if(charjsondata['chara_a']['chara_id'][charidarr[cid]]['card_2']!=" "){imgck=charjsondata['chara_a']['chara_id'][charidarr[cid]]['card_2']}
else if(charjsondata['chara_a']['chara_id'][charidarr[cid]]['card_1']!=" "){imgck=charjsondata['chara_a']['chara_id'][charidarr[cid]]['card_1']}
else {imgck='nocard.jpg'}






ADVALL= document.createElement('div');
ADVALL.id=charjsondata['chara_a']['chara_id'][charidarr[cid]]['ID']
ADVALL.onmousedown=function(){readchar_2(event,CRId)}

if(a==='ADVALLh'){
ADVALL.className='ADVALLDIV'
ADVALL.innerHTML="<label class='auto-style1'>"+charjsondata['chara_a']['chara_id'][charidarr[cid]]['ID']+"</label><img src='../img/card/harem/"+charjsondata['chara_a']['chara_id'][charidarr[cid]]['harem']+"' class='ADVALL' >"
}else{
ADVALL.className='div_card'
ADVALL.innerHTML="<label class='auto-style1'>"+charjsondata['chara_a']['chara_id'][charidarr[cid]]['ID']+"</label><p></p><img src='../img/card/xl/"+imgck+"' class='card1' >"
}

document.getElementById("ADVALLDIVTOP").appendChild(ADVALL);

}catch(e){}
}

if(a==='back'){
Y=40-backdiv
document.getElementById('div_main').scrollTop =Y;
}

}



function readchar_2(event,a){


var btnNum = event.button;
if (btnNum==2)
{
if(charjsondata['chara_a']['chara_id'][a]['rank']=='GR'){return GRRANK(a)}

   document.getElementById("ADVuse").style.left="0px";
   document.getElementById("bookHarem__detailChara").src="../img/card/bustup_l/"+charjsondata['chara_a']['chara_id'][a]['bustup_l_0']+".png";
   document.getElementById("bookHarem__bgList--").className='bookHarem__bgList--'+charjsondata['chara_a']['chara_id'][a]['rank'];
   document.getElementById("bookPageHaremList__img").src="../img/card/harem/"+charjsondata['chara_a']['chara_id'][a]['harem'];
   document.getElementById("bookHarem__ico__rarity").className='bookHarem__ico__rarity'+charjsondata['chara_a']['chara_id'][a]['rank'];
	if(charjsondata['chara_a']['chara_id'][a]['scene_a_1']===" ")
	{document.getElementById("bookHarem__scene1").className='bookHarem__scene1Btn--off';}
	else{document.getElementById("bookHarem__scene1").className='bookHarem__scene1Btn';}
   document.getElementById("bookHarem__scene1").onclick=function(){scene_0('scene1',charjsondata['chara_a']['chara_id'][a]['scene_a_1'],charjsondata['chara_a']['chara_id'][a]['scene_h_1'])};
	if(charjsondata['chara_a']['chara_id'][a]['scene_a_2']===" ")
	{document.getElementById("bookHarem__scene2").className='bookHarem__scene2Btn--off';}
	else{document.getElementById("bookHarem__scene2").className='bookHarem__scene2Btn';}
   document.getElementById("bookHarem__scene2").onclick=function(){scene_0('scene2',charjsondata['chara_a']['chara_id'][a]['scene_a_2'],charjsondata['chara_a']['chara_id'][a]['scene_h_2'])};
	if(charjsondata['chara_a']['chara_id'][a]['scene_a_3']===" ")
	{document.getElementById("bookHarem__scene3").className='bookHarem__scene3Btn--off';}
	else{document.getElementById("bookHarem__scene3").className='bookHarem__scene3Btn';}
   document.getElementById("bookHarem__scene3").onclick=function(){scene_0('scene3',charjsondata['chara_a']['chara_id'][a]['scene_a_3'],charjsondata['chara_a']['chara_id'][a]['scene_h_3'])};
   document.getElementById("bookHarem__name").innerHTML=charjsondata['chara_a']['chara_id'][a]['name'];
   document.getElementById("bookHarem__voiceActor").innerHTML='声優：'+charjsondata['chara_a']['chara_id'][a]['cv'];
   document.getElementById("bookHarem__detailComment").innerHTML=charjsondata['chara_a']['chara_id'][a]['data'];

   document.getElementById("chara0").className='chara_on';
   document.getElementById("chara1").className='chara_off';
   document.getElementById("chara2").className='chara_off';
   document.getElementById("chara3").className='chara_off';

   document.getElementById("chara0").onclick=function(){charach('0',charjsondata['chara_a']['chara_id'][a]['bustup_l_0'])};
   document.getElementById("chara1").onclick=function(){charach('1',charjsondata['chara_a']['chara_id'][a]['bustup_l_1'])};
   document.getElementById("chara2").onclick=function(){charach('2',charjsondata['chara_a']['chara_id'][a]['bustup_l_2'])};
   document.getElementById("chara3").onclick=function(){charach('3',charjsondata['chara_a']['chara_id'][a]['bustup_l_3'])};}



if (btnNum==0)
{
   document.getElementById("carduse3").onclick=function(){readchar('name_1',charjsondata['chara_a']['chara_id'][a]['name_1'])};  
   document.getElementById("carduse").style.left="0px";
   document.getElementById("cardview1").src="../img/card/xl/"+charjsondata['chara_a']['chara_id'][a]['card_1'];
   document.getElementById("cardview2").src="../img/card/xl/"+charjsondata['chara_a']['chara_id'][a]['card_2'];
   document.getElementById("cardview3").src="../img/card/xl/"+charjsondata['chara_a']['chara_id'][a]['card_3'];
   document.getElementById("cardview4").src="../img/card/xl/"+charjsondata['chara_a']['chara_id'][a]['card_4'];
   document.getElementById("cardview4_1").src="../img/card/xl/"+charjsondata['chara_a']['chara_id'][a]['card_4'];
   document.getElementById("cardview1_6").src="../img/card/xl/"+charjsondata['chara_a']['chara_id'][a]['card_1'];

   document.getElementById("cardname").innerHTML=charjsondata['chara_a']['chara_id'][a]['name'];
   document.getElementById("imgs").children[0].style="left: -450px;";
   document.getElementById("nav").children[0].children[0].children[0].className="current";
   document.getElementById("nav").children[0].children[1].children[0].className="hidden";
   document.getElementById("nav").children[0].children[2].children[0].className="hidden";
   document.getElementById("nav").children[0].children[3].children[0].className="hidden";
return carduse()
}


}


//七神

function guardian(){

document.getElementById("Guardian_1").style.left="0px";

}


function Guardianoutopen(event,a){

var btnNum = event.button;
if (btnNum==0)
{

   document.getElementById("ADVuse").style.left="0px";
   document.getElementById("bookHarem__detailChara").src="../img/card/bustup_l/"+charjsondata['chara_b']['chara_id'][a]['bustup_l_0']+".png";
   document.getElementById("bookPageHaremList__img").src="../img/card/harem/"+charjsondata['chara_b']['chara_id'][a]['harem'];
   document.getElementById("bookHarem__ico__rarity").className='bookHarem__ico__rarity'+charjsondata['chara_b']['chara_id'][a]['rank'];
   document.getElementById("bookHarem__name").innerHTML=charjsondata['chara_b']['chara_id'][a]['name'];
   document.getElementById("bookHarem__voiceActor").innerHTML=charjsondata['chara_b']['chara_id'][a]['cv'];
   document.getElementById("bookHarem__detailComment").innerHTML=charjsondata['chara_b']['chara_id'][a]['data'];
   document.getElementById("bookHarem__bgList--").className='bookHarem__bgList--'+charjsondata['chara_b']['chara_id'][a]['rank'];
	if(charjsondata['chara_b']['chara_id'][a]['scene_a_1']===" ")
	{document.getElementById("bookHarem__scene1").className='bookHarem__scene1Btn--off';}
	else{document.getElementById("bookHarem__scene1").className='bookHarem__scene1Btn';}
   document.getElementById("bookHarem__scene1").onclick=function(){scene_0('scene1',charjsondata['chara_b']['chara_id'][a],charjsondata['chara_b']['chara_id'][a])};
	if(charjsondata['chara_b']['chara_id'][a]['scene_a_2']===" ")
	{document.getElementById("bookHarem__scene2").className='bookHarem__scene2Btn--off';}
	else{document.getElementById("bookHarem__scene2").className='bookHarem__scene2Btn';}
   document.getElementById("bookHarem__scene2").onclick=function(){scene_0('scene2',charjsondata['chara_b']['chara_id'][a],charjsondata['chara_b']['chara_id'][a])};
	if(charjsondata['chara_b']['chara_id'][a]['scene_a_3']===" ")
	{document.getElementById("bookHarem__scene2").className='bookHarem__scene2Btn--off';}
	else{document.getElementById("bookHarem__scene2").className='bookHarem__scene2Btn';}
   document.getElementById("bookHarem__scene3").onclick=function(){scene_0('scene3',charjsondata['chara_b']['chara_id'][a],charjsondata['chara_b']['chara_id'][a])};
   

   document.getElementById("chara0").onclick=function(){charach('0',charjsondata['chara_b']['chara_id'][a]['bustup_l_0'])};
   document.getElementById("chara1").onclick=function(){charach('1',charjsondata['chara_b']['chara_id'][a]['bustup_l_0'])};
   document.getElementById("chara2").onclick=function(){charach('2',charjsondata['chara_b']['chara_id'][a]['bustup_l_0'])};
   document.getElementById("chara3").onclick=function(){charach('3',charjsondata['chara_b']['chara_id'][a]['bustup_l_0'])};


}
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

///GR
function GRRANK(a){

charjsondata['chara_c']['chara_id'][a]['name']





   document.getElementById("GRRANK_name").innerHTML=charjsondata['chara_c']['chara_id'][a]['name'];
   document.getElementById("GRRANK_bustup").src='../img/card/bustup_l/'+charjsondata['chara_c']['chara_id'][a]['bustup_l_0']+'.png';
   document.getElementById("GRRANK_sample1").style.backgroundImage='url(../img/card/harem/'+charjsondata['chara_c']['chara_id'][a]['harem']+')';
   document.getElementById("GRRANK_sample2").style.backgroundImage='url(../img/card/harem/'+charjsondata['chara_c']['chara_id'][a]['harem2']+')';
   document.getElementById("GRRANK_sample3").style.backgroundImage='url(../img/card/harem/'+charjsondata['chara_c']['chara_id'][a]['harem3']+')';

   document.getElementById("GRRANK_haremView1").onclick=function(){scene_0('scene1',charjsondata['chara_c']['chara_id'][a]['scene_a_1'],charjsondata['chara_c']['chara_id'][a]['scene_h_1'])};
   document.getElementById("GRRANK_haremView2").onclick=function(){scene_0('scene2',charjsondata['chara_c']['chara_id'][a]['scene_a_2'],charjsondata['chara_c']['chara_id'][a]['scene_h_2'])};
   document.getElementById("GRRANK_haremView3").onclick=function(){scene_0('scene3',charjsondata['chara_c']['chara_id'][a]['scene_a_3'],charjsondata['chara_c']['chara_id'][a]['scene_h_3'])};   
	if(charjsondata['chara_c']['chara_id'][a]['scene_a_1']===" ")
	{document.getElementById("GRRANK_haremView1").className='cardAdditionDetail__button--haremView1 cardAdditionDetail__button--haremView--disabled';}
	else{document.getElementById("GRRANK_haremView1").className='cardAdditionDetail__button--haremView1' ;}
	if(charjsondata['chara_c']['chara_id'][a]['scene_a_2']===" ")
	{document.getElementById("GRRANK_haremView2").className='cardAdditionDetail__button--haremView2 cardAdditionDetail__button--haremView--disabled';}
	else{document.getElementById("GRRANK_haremView2").className='cardAdditionDetail__button--haremView2' ;}	
	if(charjsondata['chara_c']['chara_id'][a]['scene_a_3']===" ")
	{document.getElementById("GRRANK_haremView3").className='cardAdditionDetail__button--haremView3 cardAdditionDetail__button--haremView--disabled';}
	else{document.getElementById("GRRANK_haremView3").className='cardAdditionDetail__button--haremView3' ;}

   document.getElementById("GRRANK_2").style.left="0px";
   

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


///back
function div_bg_back(event){

var btnNum = event.button;
if (btnNum==2 && name_1OF=='ON'){
name_1OF='OFF'
return readchar('back','');
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


