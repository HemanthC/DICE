const runThis=()=>{
  a=document.querySelectorAll(`.box`);
  a.forEach(ele=>{
    b=ele.querySelector("div");
    b.style.visibility="visible";
  })
function one(i)
 {
  // document.querySelector(".one").style.display="none";
  document.getElementsByClassName('one')[i].style.visibility="hidden";
  document.getElementsByClassName('two')[i].style.visibility="hidden";
  document.getElementsByClassName('three')[i].style.visibility="hidden";
  document.getElementsByClassName('four')[i].style.visibility="hidden";
  // getElementsByClassName('one').innerHTML.style.display="hidden";
  document.getElementsByClassName('six')[i].style.visibility="hidden";
  document.getElementsByClassName('seven')[i].style.visibility="hidden";
  document.getElementsByClassName('eight')[i].style.visibility="hidden";
  document.getElementsByClassName('nine')[i].style.visibility="hidden";
}
function two(j)
{
  // document.querySelector(".one").style.display="none";
  document.getElementsByClassName('one')[j].style.visibility="hidden";
  document.getElementsByClassName('two')[j].style.visibility="hidden";
  document.getElementsByClassName('three')[j].style.visibility="hidden";
  // document.getElementsByClassName('four')[0].style.display="none";
   document.getElementsByClassName('five')[j].style.visibility="hidden";
  // document.getElementsByClassName('six')[0].style.display="none";
  document.getElementsByClassName('seven')[j].style.visibility="hidden";
  document.getElementsByClassName('eight')[j].style.visibility="hidden";
  document.getElementsByClassName('nine')[j].style.visibility="hidden";
}
function three(k)
{
  // document.querySelector(".one").style.display="none";
  // document.getElementsByClassName('one')[0].style.display="none";
///experiment




///experiment

  document.getElementsByClassName('two')[k].style.visibility="hidden";
  document.getElementsByClassName('three')[k].style.visibility="hidden";
  document.getElementsByClassName('four')[k].style.visibility="hidden";
  // document.getElementsByClassName('five')[0].style.display="none";
  document.getElementsByClassName('six')[k].style.visibility="hidden";
  document.getElementsByClassName('seven')[k].style.visibility="hidden";
  document.getElementsByClassName('eight')[k].style.visibility="hidden";
  // document.getElementsByClassName('nine')[0].style.display="none";
}
function four(l)
{
  // document.querySelector(".one").style.display="none";
  // document.getElementsByClassName('one')[0].style.display="none";
  document.getElementsByClassName('two')[l].style.visibility="hidden";
  // document.getElementsByClassName('three')[0].style.display="none";
  document.getElementsByClassName('four')[l].style.visibility="hidden";
  document.getElementsByClassName('five')[l].style.visibility="hidden";
  document.getElementsByClassName('six')[l].style.visibility="hidden";
  // document.getElementsByClassName('seven')[0].style.display="none";
  document.getElementsByClassName('eight')[l].style.visibility="hidden";
  // document.getElementsByClassName('nine')[0].style.display="none";
}
function five(m)
{
  // document.querySelector(".one").style.display="none";
  // document.getElementsByClassName('one')[0].style.display="none";
  document.getElementsByClassName('two')[m].style.visibility="hidden";
  // document.getElementsByClassName('three')[0].style.display="none";
  document.getElementsByClassName('four')[m].style.visibility="hidden";
  // document.getElementsByClassName('five')[0].style.display="none";
  document.getElementsByClassName('six')[m].style.visibility="hidden";
  // document.getElementsByClassName('seven')[0].style.display="none";
  document.getElementsByClassName('eight')[m].style.visibility="hidden";
  // document.getElementsByClassName('nine')[0].style.display="none";
}
function six(n)
{
  document.getElementsByClassName('four')[n].style.visibility="hidden";
document.getElementsByClassName('five')[n].style.visibility="hidden";
document.getElementsByClassName('six')[n].style.visibility="hidden";
// document.getElementsByClassName('two')[m].style.display="none";
}
player1=Math.floor(Math.random()*6)+1;
player2=Math.floor(Math.random()*6)+1;
if(player1===player2)
{
  document.querySelector("h1").innerHTML="Try again";
}
else if(player1>player2)
{
 document.querySelector("h1").innerHTML="Congrats player 1!!!";
}
else{
  document.querySelector("h1").innerHTML="Congrats player 2!!!";
}
if(player1===1)
{
  one(0);
}
else if(player1===2)
{
  two(0);
}
else if(player1===3)
{
  three(0);
}
else if(player1===4)
{
  four(0);
}
else if(player1===5)
{
  five(0);
}
else if(player1===6)
{
  six(0);
}
if(player2===1)
{
  one(1);
}
else if(player2===2)
{
  two(1);
}
else if(player2===3)
{
  three(1);
}
else if(player2===4)
{
  four(1);
}
else if(player2===5)
{
  five(1);
}
else if(player2===6)
{
  six(1);
}
}
runThis();
document.querySelector("body").addEventListener("click",()=>{
runThis();
});
