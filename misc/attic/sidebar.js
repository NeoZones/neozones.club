window.onload=function(){document.getElementsByTagName('body')[0].className='js';};
//stackoverflow.com/a/3535356
var xhr=new XMLHttpRequest();xhr.open('GET','/left.html',true);
xhr.onreadystatechange=function(){if(this.readyState!==4) return;
if(this.status!==200) return;
document.getElementById('left').innerHTML=this.responseText;};xhr.send();