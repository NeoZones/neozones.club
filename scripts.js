/*    s.                      .s5SSSSs.                                         
      SS. .s5SSSs.  .s5SSSs.        SSS .s5SSSs.  .s    s.  .s5SSSs.  .s5SSSs.  
sSs.  S%S       SS.       SS.      sSS        SS.       SS.       SS.       SS. 
SS`S. S%S sS    `:; sS    S%S     sSS   sS    S%S sSs.  S%S sS    `:; sS    `:; 
SS `S.S%S SSSs.     SS    S%S    sSS    SS    S%S SS `S.S%S SSSs.     `:;;;;.   
SS  `sS%S SS        SS    S%S   sSS     SS    S%S SS  `sS%S SS              ;;. 
SS    `:; SS        SS    `:;  sSS      SS    `:; SS    `:; SS              `:; 
SS    ;,. SS    ;,. SS    ;,. sSS       SS    ;,. SS    ;,. SS    ;,. .,;   ;,. 
:;    ;:' `:;;;;;:' `:;;;;;:' `:;;;;;:' `:;;;;;:' :;    ;:' `:;;;;;:' `:;;;;;:' 

        Owly * Nekojiru * Evan * Bytemoth * Pizza Squeeze * Hexo * Spoopz
                Master JS File of Maximum Dynamicness 2019.12.13 


SCROLLING TEXT
 The scrolling text will appear just below the main banner, scrolling from
 left to right. If you want to add a new text announcement, make the last
 one not appear by adding the "//", making sure on the new one you add your
 name and when it was added, using the YYYY-MM-DD format.

 If you try and add emojis or non-ASCII characters, then it simply won't
 work because God hates you. If you intend to add emojis or non-ASCII
 characters, then you might like to checkout HTML entity encoder/decoder;
 https://mothereff.in/html-entities

 Also HTML simply won't work, so you will be unable to add links
 (<a href="https://example.com">piss</a>) and anything else, so sorry, Gov. */
document.write("<marquee scrollamount=2 scrolldelay=16 truespeed>"
+"Welcome to NeoZones, I guess... idk..." // OwlMan 2020-02-02
//+"Thank you and goodbye." // OwlMan 2020-01-31
//+"Peace, prosperity and friendship with all nations!" // OwlMan 2020-01-30
//+"Welcome to NeoZones, I guess... idk..." // OwlMan 2020-01-03
//+"2020 here we come B^)" // OwlMan 2019-12-28
//+"&#x2744;&#xFE0F; Happy Christmas everyone, from everyone at NeoZones! Ho, ho, bloody ho. . . &#x1F384;" // OwlMan 2019-12-17
//+"The new and sexy AcidJaw is out, check it out or die &#x1F52A;" // OwlMan 2019-12-09
//+"NeoZones version 2.1 is now fully out, bitchies, a big THNAK YOU to Bytemoth, who now has his own site on here!" // OwlMan 2019-11-25
//+"Help us at NeoZones as we invade mainland Poland! ... wait... Britain and France declared what?" // OwlMan 2019-11-14
//+"Welcome to NeoZones, please don't drink the water." // OwlMan 2019-11-06
//+"Happy Bonfire Night to all of our brothers and sisters in the UK, remember to stay safe! &#x1F386;" // OwlMan 2019-11-05
//+"Welcome to NeoZones, home of some weird people" // OwlMan 2019-11-02
//+"2019-10-31: Happy Halloween from everyone at NeoZones &#x1F383;" // OwlMan
//+"OH YEAAAAH NEW DESIGN!! lml &bull; Last update: 2019-10-29" // TEH LEROY
+"</marquee>");


/* HTML LAYOUT INJECTION */
document.getElementsByTagName('body')[0].className='js';
//stackoverflow.com/a/3535356
function piss(filer){
var xhr=new XMLHttpRequest();xhr.open('GET','/'+filer+'.html',true);
xhr.onreadystatechange=function(){if(this.readyState!==4) return;
if(this.status!==200) return;
document.getElementById(filer).innerHTML=this.responseText;};xhr.send();}
piss('left');piss('footer');


/* STATUS BAR TEXT SCROLLER
 So for the people who do not know what the following JavaScript does, here
 is a breakdown; In older browsers such as Netscape and even in SeaMonkey
 and Pale Moon, there is a status bar at the bottom of the page, the function
 of this bar differs from browser to browser, but what most of them have in
 common is that, if the option is put in place, then they will show a custom
 message that will scroll from right to left, in this case, the message will
 read "NeoZones: Because Why Not?" Here is a screenshot of the scrollbar in action:
 https://neozones.neocities.org/common/why_not.png */
var MessageText="NeoZones: Because Why Not?";
var DisplayLength=130;var pos=1-DisplayLength;function ScrollInStatusBar(){
var scroll="";pos++;if(pos==MessageText.length)pos=1-DisplayLength;if(pos<0){
for(var i=1;i<=Math.abs(pos);i++)scroll=scroll+" ";
scroll=scroll+MessageText.substring(0,DisplayLength-i+1);}else
scroll=scroll+MessageText.substring(pos,pos+DisplayLength);window.status=scroll;
setTimeout("ScrollInStatusBar()",50);}ScrollInStatusBar();


/* LACK-OF-ADBLOCK DETECTOR (Turned off)
 To quote the website for this CSS, https://adblockbar.neocities.org, the
 "Ad Block Bar appears on your web site if a visitor is not using an ad
 blocker, and prompts them to install one", and it certainly is a good idea
 on paper, but this just doesn't seem to work correctly, so we disabled it
 for a number of reasons, such as it being broken on mobile, appearing for
 a user despite them already having an adblocker, and also it not mating
 the over-all colour seam of the site (i.e. purple).

 So if you can fix all three issues, then feel free to correct the
 following code and knock yourself out!
 
 Code can be found here: https://adblockbar.neocities.org/adblockbar-donthotlink.js
 
 Go nuts. */