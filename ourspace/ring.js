function Add(href) {
    WebRing[++NumInWebRing] = new WebRingObject(href);
    if (location.href.indexOf(href) > -1)
        WhereInRing = NumInWebRing;
}

function WebRingObject(href) {
    this.href = href;
}

var WhereInRing = 0, NumInWebRing = 0, WebRing = new Array();
Add("https://ourspace.neocities.org");
Add("https://laika.tiny-universes.net/");
Add("https://melonking.net/");
Add("https://my-own-universe-in-internet.neocities.org/");
Add("https://websitering.neocities.org/ring.htm");
Add("https://likehome.neocities.org");
Add("https://rocketmix.neocities.org/");
Add("https://usernametaken.neocities.org/main/");
// Add("https://flowerfuck.neocities.org/");
Add("https://floppyjay.neocities.org/");
Add("https://jowieschulner.neocities.org/");
// Add("https://jakeonline.neocities.org/");
Add("https://mistysworld.neocities.org/");
// Add("https://wizardcat.neocities.org/");
Add("https://lilaclynx.neocities.org/");
// Add("https://alcleaner.neocities.org/");
Add("https://codeinfig.neocities.org/");
Add("https://bootleg64.neocities.org/");
Add("https://caitlinrosemoore.neocities.org/pie.html");
// Add("https://1080p-lemonade.neocities.org/");
Add("https://moonview.neocities.org/");
Add("https://connors-world.neocities.org/");
Add("https://arcadevirus.neocities.org/");
Add("https://aether-fountains.neocities.org/");
Add("https://potassiummcr2.neocities.org/");
Add("https://tsu.neocities.org/");
Add("https://upallnight.neocities.org/");
// Add("https://eira.neocities.org/");
// Add("https://k1n2a3o4i5n6r-v2.neocities.org/Rings/cover.html");
Add("https://kiseop.neocities.org/");
Add("https://rickyrick.neocities.org/");
// Add("https://gwtagacw.neocities.org/");
Add("https://mxtw.neocities.org/");
Add("https://stationsquare.neocities.org/");
Add("https://goodmode.neocities.org/");
Add("https://lykakspars.neocities.org/");
// Add("https://rileyjamesbell.neocities.org/");
Add("https://exosilver.neocities.org/");
Add("https://andrewjonkman.neocities.org/");


if (WhereInRing == 0) WhereInRing = 1;

if (WhereInRing == 1)
    PrevInRing = NumInWebRing;
else
    PrevInRing = WhereInRing - 1;

if (WhereInRing == NumInWebRing)
    NextInRing = 1;
else
    NextInRing = WhereInRing + 1;

var output = '';

output += '<A HREF="' + WebRing[PrevInRing].href + '" TARGET="_top">';

output += '<IMG SRC="left.png" title="check out the previous site in the ring!"><\/A>';

output += '<A HREF="http://neozones.neocities.org/ourspace" TARGET="_top">';

output += '<IMG SRC="ring.gif" title="join others in reclaiming the world wide web!"><\/A>';

output += '<A HREF="' + WebRing[NextInRing].href + '" TARGET="_top">';

output += '<IMG SRC="right.png" title="visit the next site in the ring!"><\/A>';

document.write(output);