/*So for the people who do not know what the following JavaScript does, here
 is a breakdown; In older browsers such as Netscape and even in SeaMonkey,
 there is a status bar at the bottom of the page, the function of this bar
 differs from browser to browser, but what most of them have in common is that,
 if the option is put in place, then they will show a custom message that will
 scroll from right to left, in this case, the message will read "NeoZones:
 Because Why Not?"
 Here is a screenshot of the scrollbar in action:
 https://neozones.neocities.org/common/why_not.png
*/var MessageText="NeoZones: Because Why Not?";
var DisplayLength=130;var pos=1-DisplayLength;function ScrollInStatusBar(){
var scroll="";pos++;if(pos==MessageText.length)pos=1-DisplayLength;if(pos<0){
for(var i=1;i<=Math.abs(pos);i++)scroll=scroll+" ";
scroll=scroll+MessageText.substring(0,DisplayLength-i+1);}else
scroll=scroll+MessageText.substring(pos,pos+DisplayLength);window.status=scroll;
setTimeout("ScrollInStatusBar()",50);}ScrollInStatusBar();