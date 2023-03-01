/*Show/Hide It! Because <details> didn't exist until Firefox 49/Opera 15,
 and this is targeting Firefox 2/Opera 9.*/
var sh=document.getElementsByTagName('fieldset');window.onload=function(){
document.getElementsByTagName('body')[0].className='js';
var i=0;while(i<sh.length){sh[i].className='hide';i++;}};
function visall(){var i=0;while(i<sh.length){sh[i].className='show';i++;}}
function togvis(id){var e=document.getElementById(id);
if(e.className=='hide')e.className='show';else e.className='hide';}