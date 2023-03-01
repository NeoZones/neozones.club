//stackoverflow.com/a/3535356
var xhr=new XMLHttpRequest();xhr.open('GET','/footer.html',true);
xhr.onreadystatechange=function(){if(this.readyState!==4) return;
if(this.status!==200) return;
document.getElementById('foot').innerHTML=this.responseText;};xhr.send();