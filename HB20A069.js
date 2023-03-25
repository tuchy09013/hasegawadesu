function buttonTest()
{
alert('個人情報の提供ありがとうございます！');
}

function ClickTextbox1()
{
getTextbox1 = document.getElementById("Texbox1");
text1 = getTextbox1.value;
alert(text1);
}

function ClickTextbox2()
{
getTextbox2 = document.getElementById("Texbox2");
text2 = getTextbox2.value;
// alert(text2);
text2="ほう...?" + text2 +" ...。本当にそう思っているんですか？";
Displaytext2 = document.getElementById("DisplayTextbox2");
Displaytext2.innerHTML = text2;
}

function iftest()
{
res = window.confirm("個人情報を提供しますか？");
if(res == true)
{
// OKの場合
	alert("ふはは、ばかめ");
}
else
{
// キャンセルの場合
	alert("ITリテラシーの勝利！！！");
}
}


function Clock(){
var now = new Date();
target = document.getElementById('time');
target.innerHTML=now;
}
setInterval('Clock()',1000);


function Trigger(){
document.getElementById('Bombe').style.visibility = 'visible';
Count = 5;
CountDownTimer = setInterval(function()
{
document.getElementById('CountDown').innerHTML = Count;

if(0 == Count)
{


document.getElementById('Bombe').innerHTML="<img src=img/bakuhatu.png>";
clearInterval(CountDownTimer);
}
Count--;
},1000);
  }
  
function Clicknumber(){
  	getnum1 = document.getElementById('number1');
  	getnum2 = document.getElementById('number2');
  	
  	if(getnum1.value<=0 || getnum2.value<= 0)
  	{
  	    alert("正の整数以外が入力されています");
  	    return;
  	}
  	if(getnum1.value == ""|| getnum2.value == "")
  	{
  	    alert("未入力の項目があります");
  	    return;
  	}
  	
  	if(getnum1.value.match(/[^0-9]+/) || getnum2.value.match(/[^0-9]+/))
  	{
  	    alert("認識できない情報が入力されています");
  	    return;
  	}
x = parseInt(getnum1.value) + parseInt(getnum2.value);
document.getElementById('result').innerHTML =x;
  }
  
