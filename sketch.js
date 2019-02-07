////////////////////////////////////////////////////////////
////           Fuzo has been designed and coded         ////
////                  by and for rich.gg                ////
////                 June the 17th of 2017              ////
////                  all rights reversed               ////
////////////////////////////////////////////////////////////
var cnv;
var richLogo;
var androidApp;
var androidBG;
var doOnce = false;

//MANUAL UI
var titleHTML;
var titleHTML2;
var manualHtml1;
var manualHtmlA;
var manualHtmlB;
var descriptionHtml1;
var descriptionHtml2;
var descriptionHtml2small;
var buttonH;
var button;
var menuON = false;
var buttonMHightLight = false;
var buttonCloseH;
var buttonClose;
var htmlDrawer;
var htmlDrawerON = false;
var x = 0;
var outPosX = 528;
var menuPosX = -outPosX;
//
//SHARE UI
var shareON = false;
var buttonSHightLight = false;
var buttonShareH;
var buttonShare;
var buttonShareFB;
var buttonShareTW;
var buttonShareLI;
var shareDrawer;
var shareDrawerON = false;
var y = 0;
var outPosY = 528;
var sharePosy = -outPosY;

//
var redHour = 0;
var prevRedHour = redHour;
var blueHour = 0;
var prevBlueHour = blueHour;
var easing = 0.1;
var alphRedHour = 0;
var alphBlueHour = 0;
//
var easingGlobe = 0.1;
var easedDeltaX = 0;
//
var currentRedHour;
//
var currentBlueHour;
//
var imgGMTbCurrent;
var imgGMTrCurrent;
//
var currentNumber;
//
var startX = 0;
var startY = 0;
//
var startRedX = 0;
var redX = -3.75;
var startRedY = 0;
var redY = 15;
var redZ = 0;
//
var startBlueX = 0;
var blueX = 3.75;
var startBlueY = 0;
var blueY = -15;
var blueZ = 0;
//
/////////////////////////////////////
//
var A = 0; // obsolete
var B = 0; // obsolete
var C = 0; // new A
var D = 0; // new B
//
var deltaX = 0;
var angleX = 180;
//
var onWhite = false;
//
var worldAngle = 0;
var whiteSelected = false;
//
var redDotAngleX = 0;
var redDotAngleY = 0;
var redDotAngleZ = 0;
var redDotLength = 260;
var redDotColor;
var onRed = false;
var redSelected = false;
//
var blueDotAngleX = -12;
var blueDotAngleY = 0;
var blueDotLength = 260;
var blueDotColor;
var onBlue = false;
var blueSelected = false;

var rpm = 0;
var speedX = 0;

var cx, cy;

///////////////////////////////////

//GlobeTouch
var dummyAngleY;
var dummyAngleX;
//touch tracker
var dummyX;
var dummyY;
//redDot xyz
var redDotX;
var redDotY;
var redDotZ;
//blueDot xyz
var blueDotX;
var blueDotX;
var blueDotX;

//SPHERICAL TRIGO
var thetaR;
var phiR;
var thetaB;
var phiB;
var rho = 255;
// 
var cities;
var drawTheCities = false;
//
var imgGMTrCurrentIndex = 0;
var prevImgGMTrCurrentIndex = imgGMTrCurrentIndex;
var imgGMTbCurrentIndex = 0;
var prevImgGMTbCurrentIndex = imgGMTbCurrentIndex;
//
var tmzGMTrCurrentIndex = 0;
var tmzGMTbCurrentIndex = 0;
//
///SeTTERS
var setRed = false;
var setBlue = false;
//
var startTime;
var stopTime;
var duration = 500;
var motionAngle = 0.0;
var p;
var origine;
var destination;
//
var setterDoOnce = false;
var setterDONE = false;
//

var ratio = 1280 / 720;
var fov;
//
var ratioGlobeToHeight = 984 / 1080; //993/ 1080 
//
var globeDiamInPx;
var globeRadiusInPx;
//
var touchTheta;
var touchPhi;

//CADRANs
var cadranDPosXA = 0;
var cadranDPosXB = 0;
var cadranDMoonAlpha = 0;
var cadranOk = false;

var yesterday = false;
var tomorow = false;
////////////////////////////////////////////////////////////////////////////
////////////////////////////////PRELOADING//////////////////////////////////
////////////////////////////////////////////////////////////////////////////
var preLoadCounter = 0;
var preLoaded = false;
var rX = 0;
////////////////////////////////////////////////////////
//cities Table
function richTable(filename) {
  cities = loadTable(filename, "header", tableLoaded);

  function tableLoaded() { // CLOSURE
    preLoadCounter++;
  }

}


////////////////////////////////////////////////////////
//discret images
function richImg(imgName, filename) {
  window[imgName] = loadImage(filename, imgLoaded);

  function imgLoaded() { // CLOSURE
    preLoadCounter++;
  }

}

//discret sound
function richSound(soundName, filename) {
  window[soundName] = loadSound(filename, soundLoaded);

  function soundLoaded() { // CLOSURE
    preLoadCounter++;
  }
}
/////////////////////////////////////////////////////////
//numbers
var numbersImgs = [];
var totalnumbersImgs = 25;
//
//clocks
var redHoursImgs = [];
var totalredHoursImgs = 26;
//
var blueHoursImgs = [];
var totalblueHoursImgs = 26;
//
//colors TMZ
var gmtRpImgs = []; // Rp = Red plus
var totalgmtRpImgs = 12;
var gmtRmImgs = []; // Rp = Red Minus
var totalgmtRmImgs = 12;
//
var gmtBpImgs = []; // Bp = Blue plus
var totalgmtBpImgs = 12;
var gmtBmImgs = []; // Bm = Blue Minus
var totalgmtBmImgs = 12;

//
function richImgNum(array, index, filename) {
  loadImage(filename, imgLoaded1);

  function imgLoaded1(image1) { // CLOSURE
    //print(window[array][0]);
    window[array][index] = image1;
    //append(window[array], image1)
    preLoadCounter++;
  }

}

var isAndroid;


 


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////SETUP/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function setup() {


  if (jscd.os == 'Android') {
    //isAndroid = false;
    isAndroid = true;
  } else {
    //isAndroid = true;
    isAndroid = false;
  }


  if (isAndroid) {
    cnv = createCanvas(windowWidth, windowHeight);

    androidBG = createDiv('<img src="data/blurBG1.jpg"  style="width:1024;height:500px"  > ');

    //TITLE
    titleHTML = createDiv('FUZO');
    titleHTML.html('<p><a href="http://rich.gg/fuzo"><span font-size:40.0pt; text-align:center;>FUZO</span></a><span font-size:20.0pt; text-align:center;>  Time Zone Converter</span></style> ', true);
    titleHTML.size(400, AUTO);
    titleHTML.position(20, -20);
    //
    richLogo = createDiv('<a href="mailto:me@rich.gg?Subject=Fuzo"><img src="data/richLogo.png" alt="rich.gg" style="width:128px;height:32px"  ></a>');

    androidApp = createDiv('BADGE');
    androidApp.html('BADGE', true);

    //androidApp.html('<a href="http://rich.gg/koan/koanEN.htm"> <img alt="Get it on Google Play" src="data/en_generic_rgb_wo_60.png" /> </a>', true);
    androidApp.html('<a href="https://play.google.com/store/apps/details?id=gg.rich.me.fuzo"> <img alt="Get it on Google Play" src="data/en_generic_rgb_wo_60.png" /> </a>', true);
 

  } else {

    //CREATE CANVAS//////////////////////////////////////////////////////////////
    if (windowWidth < 1080) {
      cnv = createCanvas(windowWidth, windowWidth / ratio, WEBGL);
      fov = map(windowWidth, 112, 1920, 0.525, 0.2875);
      cnv.position(0, (windowHeight / 2) - height / 2);
    } else {
      //resizeCanvas(1080, 1080 / ratio);
      cnv = createCanvas(1080, 1080 / ratio, WEBGL);
      fov = map(1080, 112, 1920, 0.525, 0.2875);
      cnv.position(((windowWidth / 3) * 2) - 1080 / 1.5, (windowHeight / 2) - height / 2);
    }
    //HTML///////////////////////////////////////////////////////////////////////
    //DRAWER
    htmlDrawer = createDiv('<div id="rectangle" style="width:' + 10 + 'px; height:' + 10 + 'px; background-color:rgba(240,240,240, .1)></div>', true).class('drawer');
    htmlDrawer.attribute('style', 'width:' + width + 'px; height:' + height + 'px; background-color:rgba(240, 240, 240, .9)');
    htmlDrawer.position(-2000, 30 + 16);
    //
    //TITLE
    titleHTML = createDiv('FUZO');
    titleHTML.html('<p><a href="http://rich.gg/fuzo"><span style=\'font-size:40.0pt; text-align:center;\'>FUZO</span></a><span font-size:20.0pt; text-align:center;>  Time Zone Converter</span></style> ', true);
    //titleHTML.size(400, AUTO);
    //
    titleHTML2 = createDiv('<p><span style=\'font-size:40pt; line-height:115%;\'>FUZO</span><span  style=\'font-size:20.0pt;line-height:55%;\'><BR>Time Zone Converter</span> </p>').class('header');
    titleHTML2.size(400, AUTO).attribute('align', 'center');
    //FullsScreen MANUAL
    manualHtml1 = createDiv('MANUAL');
    manualHtml1.html('<div> <div ><p class = "montexte_light" ><span style=\'font-size:32.0pt;    \'> Simply move the dots </p><div>           <p><b style=\'mso-bidi-font-weight:normal\'><i style=\'mso-bidi-font-style:normal\'><span style=\'\'>Fuzo </span></i></b><i style=\'mso-bidi-font-style:normal\'><span  style=\'\'>tells you what time it is here when it is ‘x’ there</span></i></p>     <p style=\'line-height:normal;page-break-after:avoid\'><span style=\'font-size:10.0pt;	\'>A Skype meeting with someone in L.A., a Keynote that starts at 10 a.m.  <BR>in Barcelona or a Pro Surf event that will air live from Fiji...  <BR>How many times do we have to make the calculation ?  <BR>Why didn’t someone just put together a Simple Visual Calculator  <BR>for Time Zones Conversion ...once and for all ?  </span></p>     <p><span style=\'\'>Well, here you are:  </span></p>     <p style=\'margin-left:18.0pt\'><b style=\'mso-bidi-font-weight:normal\'><span  style=\'font-size:12.0pt;line-height:115%;\'>1  SET THE TIME ZONES  </span></b></p>     <p><span style=\'\'><span style=\'mso-spacerun:yes\'> </span><span style=\'mso-tab-count:1\'>           </span></span><span style=\'mso-no-proof:yes\'> <img width=64 height=16 src="http://rich.gg/fuzo/data/image005.gif" alt=FlechesH v:shapes="Image_x0020_0"> </span></p>     <p style=\'text-indent:36pt\'><span class=GramE><span style=\'\'>by</span></span><span style=\' \'> moving the dots horizontally  </span></p>     <p style=\'margin-left:18.0pt\'>       <span style=\'mso-ignore:vglayout;position:absolute;z-index:-1;left:0px;margin-left:82px;margin-top:34px;width:16px;height:64px\'><img width=16 height=64 src="http://rich.gg/fuzo/data/image006.gif" alt=FlechesV v:shapes="Image_x0020_1"></span>       <p style=\'margin-left:18.0pt\'><b style=\'mso-bidi-font-weight:normal\'><span  style=\'font-size:12.0pt;line-height:80%;\'>2  SET THE HOUR THAT YOU KNOW </span></b></p>       <p style=\'margin-left:36.0pt\'><span style=\' \'><BR>by</span><span style=\'\'> <span style=\'mso-tab-count:1\'>     </span><span style=\'mso-spacerun:yes\'>     </span>moving the dots vertically</span>       </p>       <p style=\'text-indent:18.0pt\'><span style=\'\'> &nbsp; </span></p>       <p style=\'margin-left:18.0pt\'><b style=\'mso-bidi-font-weight:normal\'><span  style=\'font-size:12.0pt;line-height:10%;\'>... AND JUST READ THE OTHER CLOCK ! </span></b></p>   </div>', true);
    //MIDsize Screen html /up
    descriptionHtml1 = createDiv('<p class = "montexte_light" ><span style=\'font-size:32.0pt; line-height: 80% \'> Simply move the dots </p>     <p><b><i> Fuzo </i></b><i > tells you what time it is here when it is ‘x’ there </i></p>').class('header');
    descriptionHtml1.size(568, AUTO).attribute('align', 'center');
    // / down
    descriptionHtml2 = createDiv('<p style=\'line-height:normal;page-break-after:avoid\'><span style=\'font-size:10.0pt;	\'>A Skype meeting with someone in L.A., a Keynote that starts at 10 a.m. in Barcelona or a Pro Surf event that will air live from Fiji...  <BR>How many times do we have to make the calculation ?  <BR>Why didn’t someone just put together<BR>a Simple Visual Calculator for Time Zones Conversion once and for all ? <BR>I don’t know but here you go :)  </span></p>').class('lower');
    descriptionHtml2.size(768, AUTO).attribute('align', 'center');
    //
    manualHtmlA = createDiv('MANUALa');
    manualHtmlA.html('<div> <div ><p class = "montexte_light" ><span style=\'font-size:32.0pt;    \'> Simply move the dots </p><div>     <p><b style=\'mso-bidi-font-weight:normal\'><i style=\'mso-bidi-font-style:normal\'><span style=\'\'>Fuzo </span></i></b><i style=\'mso-bidi-font-style:normal\'><span  style=\'\'>tells you what time it is here when it is ‘x’ there  </span></i></p>     <p style=\'line-height:normal;page-break-after:avoid\'><span style=\'font-size:10.0pt;	\'>A Skype meeting with someone in L.A., a Keynote that starts at 10 a.m.  <BR>in Barcelona or a Pro Surf event that will air live from Fiji...  <BR>How many times do we have to make the calculation ?  <BR>Why didn’t someone just put together a Simple Visual Calculator  <BR>for Time Zones Conversion once and for all ?  </span></p>     <p><span style=\'\'>...there you go :)  </span></p>  </div>', true);
    manualHtmlA.size(420, AUTO).attribute('align', 'center');
    manualHtmlA.position(-1000, 120);

    //
    manualHtmlB = createDiv('MANUALb');
    //manualHtmlB.html('<div><p style=\'margin-left:18.0pt\'><b style=\'mso-bidi-font-weight:normal\'><span  style=\'font-size:12.0pt;line-height:115%;\'>1  SET THE TIME ZONES  </span></b></p>     <p><span style=\'\'><span style=\'mso-spacerun:yes\'> </span><span style=\'mso-tab-count:1\'> </span></span><span style=\'mso-no-proof:yes\'> <img width=64 height=16 src="data/image005.gif" alt=FlechesH v:shapes="Image_x0020_0"></span></p><p style=\'text-indent:15pt\'><span style=\'\'>by moving the dots horizontally</span></p><p style=\'margin-left:18.0pt\'><p style=\'margin-left:18.0pt\'><b style=\'mso-bidi-font-weight:normal\'><span  style=\'font-size:12.0pt;line-height:80%;\'>2  SET THE HOUR THAT YOU KNOW </span></b><span style=\'mso-ignore:vglayout\'><p><span style=\'\'><span style=\'mso-spacerun:yes\'> </span><span style=\'mso-tab-count:1\'> </span></span><span style=\'mso-no-proof:yes\'> <img width=16 height=64 src="data/image006.gif" alt=FlechesV v:shapes="Image_x0020_0"></span></p>       <p style=\'text-indent:15pt\'><span style=\'\'>by moving the dots vertically</span>       </p>             <p style=\'margin-left:18.0pt\'><b style=\'mso-bidi-font-weight:normal\'><span  style=\'font-size:12.0pt;line-height:10%;\'>... AND JUST READ THE OTHER CLOCK ! </span></b></p>   </div>', true);
    manualHtmlB.html('<div><p style=\'margin-left:1.0pt\'><b style=\'mso-bidi-font-weight:normal;\'><span  style=\'font-size:12.0pt;line-height:115%;\'>1  SET THE TIME ZONES  </span></b></p>     <p><span style=\'\'></span><span style=\'mso-no-proof:yes\'> <img width=64 height=16 src="data/image005.gif" alt=FlechesH v:shapes="Image_x0020_0"></span></p><p style=\'text-indent:1pt\'><span style=\'\'>by moving the dots horizontally</span></p><p style=\'margin-left:1.0pt\'><p style=\'margin-left:1.0pt\'><b style=\'mso-bidi-font-weight:normal\'><span  style=\'font-size:12.0pt;line-height:80%;\'>2  SET THE HOUR THAT YOU KNOW </span></b><span style=\'mso-ignore:vglayout\'><p><span style=\'\'></span><span style=\'mso-no-proof:yes\'> <img width=16 height=64 src="data/image006.gif" alt=FlechesV v:shapes="Image_x0020_0"></span></p>       <p style=\'text-indent:15pt\'><span style=\'\'>by moving the dots vertically</span>       </p>             <p style=\'margin-left:1.0pt\'><b style=\'mso-bidi-font-weight:normal\'><span  style=\'font-size:12.0pt;line-height:10%;\'>... AND JUST READ THE OTHER CLOCK ! </span></b></p>   </div>', true);

    manualHtmlB.size(400, AUTO).attribute('align', 'center');
    manualHtmlB.position(-1000, 120);


    //BUTTON
    buttonH = createDiv('<img src="http://rich.gg/fuzo/data/menuButtonH.png" style="width:32px;height:32px;" >');
    buttonH.position(-1000, 10 + 16);
    //
    button = createDiv('<img src="http://rich.gg/fuzo/data/menuButton.png" alt="menu" style="width:32px;height:32px;" >');
    button.position(-1000, 10 + 16);
    //
    buttonCloseH = createDiv('<img src="http://rich.gg/fuzo/data/menuButtonCloseH.png" style="width:32px;height:32px;" >').class('menuCloseH');
    buttonCloseH.position(-1000, 10 + 16);
    //
    buttonClose = createDiv('<img src="http://rich.gg/fuzo/data/menuButtonClose.png" alt="menu" style="width:32px;height:32px;" >').class('menuClose');
    buttonClose.position(-1000, 10 + 16);
    //
    buttonShareFB = createDiv('<a href="https://www.facebook.com/sharer/sharer.php?u=http://rich.gg/fuzo" target="_blank"><img src="http://rich.gg/fuzo/data/buttonShareFB.png" alt="share" style="width:32px;height:32px;" ></a>');
    buttonShareFB.position(-1000, 10 + 16);
    //
    buttonShareTW = createDiv('<a href="http://twitter.com/share?text=FUZO%20is%20a%20cool%20tool%20to%20convert%20different%20Time%20Zones%20Hours%20very%20easily&url=http://rich.gg/fuzo&hashtags=TimeZones,p5js,processing,webGL" target="_blank"><img src="http://rich.gg/fuzo/data/buttonShareTW.png" alt="share" style="width:32px;height:32px;" ></a>');
    buttonShareTW.position(-1000, 10 + 16);
    //
    buttonShareLI = createDiv('<a href="https://www.linkedin.com/cws/share?url=http%3A%2F%2Frich.gg%2Ffuzo" target="_blank"><img src="http://rich.gg/fuzo/data/buttonShareLI.png" alt="share" style="width:32px;height:32px;" ></a>');
    buttonShareLI.position(-1000, 10 + 16);
    //
    buttonShareH = createDiv('<img src="http://rich.gg/fuzo/data/menuButtonShareH.png" style="width:32px;height:32px;" >');
    buttonShareH.position(-1000, 10 + 16);
    //
    buttonShare = createDiv('<img src="http://rich.gg/fuzo/data/menuButtonShare.png" alt="share" style="width:32px;height:32px;" >');
    buttonShare.position(-1000, 10 + 16);
    //

    //BUTTON ACTION
    button.mouseOut(mRegular);
    button.mouseOver(mHighlight);
    button.mouseReleased(menuCall);
    //
    buttonClose.mouseOut(mRegular);
    buttonClose.mouseOver(mHighlight);
    buttonClose.mouseReleased(menuCall);
    //
    buttonShare.mouseOut(sRegular);
    buttonShare.mouseOver(sHighlight);
    buttonShare.mouseReleased(shareCall);
    //ADJUST LAYOUT//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    adjustLayout();
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    richLogo = createDiv('<a href="mailto:me@rich.gg?Subject=Fuzo"><img src="data/richLogo.png" alt="rich.gg" style="width:128px;height:32px"  ></a>');
    richLogo.position(windowWidth - 156, windowHeight - 64);

    //frameRate(10);
    //fov = 20 / 180 * PI;
    //fov = map(windowWidth, 112, 1920, 0.525, 0.2875);
    //
    globeDiamInPx = height * ratioGlobeToHeight; //maybe ?
    globeRadiusInPx = globeDiamInPx / 2;
    //
    perspective(fov, width / height, 0.1, 1000);

    rectMode(CENTER);

    cx = width / 2;
    cy = height / 2;

    redDotColor = color(250, 88, 95);
    blueDotColor = color(150, 197, 201);
    //TABLE LOAD
    richTable('data/cities_gmt.csv');
    //IMAGES LOADING/////////////////////////////////////////////////
    //DISCRET
    richImg('imgTerre', 'data/EARTH.png');
    richImg('imgGrid', "data/GRID.png");
    richImg('imgShadow', "data/shadow.png");
    richImg('imgVoid', "data/VOID.png");

    richImg('imgDemiCadranDA', "data/DemiCadranDA02.png");
    richImg('imgDemiCadranDB', "data/DemiCadranDB02.png");
    richImg('imgDemiCadranGA', "data/DemiCadranGA02.png");

    richImg('traitb', "data/TRAITb.png");
    richImg('traitr', "data/TRAITr.png");

    richImg('imgBlueMoon', "data/blueMoon.png");
    richImg('imgBlueSun', "data/blueSun.png");
    richImg('imgRedMoon', "data/redMoon.png");
    richImg('imgRedSun', "data/redSun.png");
    richImg('imgAiguilleRed', "data/aiguilleRed.png");
    richImg('imgAiguilleBlue', "data/aiguilleBlue.png");
    //
    //numbers
    for (var i = 0; i < totalnumbersImgs; i++) {
      richImgNum('numbersImgs', i, 'data/number' + i + '.png');
    }
    //redHours
    for (var i = 0; i < totalredHoursImgs; i++) {
      richImgNum('redHoursImgs', i, 'data/redHour' + i + '.png');
    }
    //blueHours
    for (var i = 0; i < totalblueHoursImgs; i++) {
      richImgNum('blueHoursImgs', i, 'data/blueHour' + i + '.png');
    }
    //TMZ images
    for (var i = 0; i < totalgmtRpImgs; i++) {
      richImgNum('gmtRpImgs', i, 'data/GMTp' + i + 'r.png');
    }
    for (var i = 0; i < totalgmtBpImgs; i++) {
      richImgNum('gmtBpImgs', i, 'data/GMTp' + i + 'b.png');
    }
    //
    for (var i = 0; i < totalgmtRmImgs; i++) {
      richImgNum('gmtRmImgs', i, 'data/GMTm' + (i + 1) + 'r.png');
    }
    for (var i = 0; i < totalgmtBmImgs; i++) {
      richImgNum('gmtBmImgs', i, 'data/GMTm' + (i + 1) + 'b.png');
    }
    //IMAGES LOADING/////////////////////////////////////////////////END
    //SOUNDS LOADING////////////////////////////////////////////////
    richSound('soundClick', 'data/click.wav');
    richSound('soundClick2', 'data/click2.wav');
    richSound('bgBuzz3', 'data/bgBuzz4.mp3');
    //SOUNDS LOADING////////////////////////////////////////////////END
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////DRAW//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function draw() {


  if (isAndroid) {
    background(245, 245, 237);

    androidBG.position((windowWidth / 2) - (512), (windowHeight / 2) - 250);
    richLogo.position(windowWidth - 156, windowHeight - 64);
    androidApp.position((windowWidth / 2) - (172 / 2), (windowHeight / 2) - 30);
 


  } else {
    background(240);
    //
    camera(0, 0, 1000);
    //LIGHTS
    ambientLight(200);
    pointLight(200, 200, 200, 100, 100, 0);
    pointLight(150, 150, 150, -100, -100, 0);

    var fullPreLoadCounter = 1 + 15 + totalnumbersImgs + totalredHoursImgs + totalblueHoursImgs + totalgmtRpImgs + totalgmtBpImgs + totalgmtRmImgs + totalgmtBmImgs + 3;
    //print('preLoadCounter : ' + preLoadCounter + " / " + fullPreLoadCounter);

    if (preLoadCounter >= fullPreLoadCounter) {
      //GIVE 1 sec delay to let the loading proceed
      setTimeout(function() {
        //code to execute after said time
        preLoaded = true;
      }, 500);
    }



    if (!preLoaded) {
      //LOADING ANIMATION
      push();
      translate(0, 0, 0);
      push();
      rotateX(60);
      rotateY(rX);
      ambientMaterial(240);
      box(20, 20, 20);
      pop()

      //LOADING BAR
      translate(0, 40, 0);
      ambientMaterial(240, 50);
      box(105, 10, 20);
      ambientMaterial(240);
      var w = 100 * preLoadCounter / (fullPreLoadCounter);
      if (w != 0) {
        box(w, 5, 5);
      }

      pop();

      rX += 0.05;

    } else {
      if (!doOnce) {
        bgBuzz3.loop();
        doOnce = true;
      }


      richLogo.position(windowWidth - 156, windowHeight - 64);


      //SCENE
      //********************************************************************

      renderCadran();
      renderGlobe();
      dayAfterBefore();

      //********************************************************************
      globeTouch(); // display sphere based on angles

      //********************************************************************
      touchTracker(); // 'return' touch coordinates

      //********************************************************************
      redDotTrackerer(); // 'return' redDot coordinates

      //********************************************************************
      blueDotTrackerer(); // 'return' blueDot coordinates

      ////////////////////////////////////////////////////////////////////////
      selector();

      interactor();

      arcLink();

      if (drawTheCities) {
        drawCities();
      }

      clocks();

      //********************************************************************
      //Active Synchro
      if (setRed) {
        if (tmzGMTbCurrentIndex != tmzGMTrCurrentIndex) {
          redSetter();
        } else {
          redY += 15;
        }
      }
      if (setBlue) {
        if (tmzGMTbCurrentIndex != tmzGMTrCurrentIndex) {
          blueSetter();
        } else {
          blueY -= 15;
        }
      }
      htmlDrawerEngine();
    }
  }


}





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////FUNCTIONS/////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//BUTTON CODE
function htmlDrawerEngine() {

  //DRAWER MENU
  if (menuON) {
    if (x < 90) {
      x += 5;
      menuPosX = map(sin(radians(x)), 0, 1, -width, 0);
      htmlDrawer.position(cnv.position().x + menuPosX, cnv.position().y);
      //
      if (windowHeight < 720 && windowWidth >= 1024) {
        manualHtmlA.position(cnv.position().x + menuPosX + ((width / 3) - manualHtmlA.width / 2), cnv.position().y + 120);
        manualHtmlB.position(cnv.position().x + menuPosX + ((width - (width / 3)) - manualHtmlB.width / 2), cnv.position().y + 110);
      } else {
        manualHtmlA.position(-1000, 120);
        // manualHtmlA.position(cnv.position().x + menuPosX + ((width / 3) - manualHtmlA.width / 2), cnv.position().y + 120);
        manualHtmlB.position(cnv.position().x + menuPosX + (width - manualHtmlB.width >> 1), cnv.position().y + 50);
      }
      //manualHtml1.position(menuPosX + 60, 30);
    }

  } else {
    if (x > 0) {
      x -= 5;
      menuPosX = map(sin(radians(x)), 0, 1, -width, 0);
      htmlDrawer.position(cnv.position().x + menuPosX, cnv.position().y);
      //
      if (windowHeight < 720 && windowWidth >= 1024) {
        manualHtmlA.position(cnv.position().x + menuPosX + ((width / 3) - manualHtmlA.width), cnv.position().y + 120);
        manualHtmlB.position(cnv.position().x + menuPosX + ((width - (width / 3)) - manualHtmlB.width), cnv.position().y + 110);
      } else {
        manualHtmlA.position(-1000, 120);
        manualHtmlB.position(cnv.position().x + menuPosX + (width - manualHtmlB.width >> 1), cnv.position().y + 50);
      }
      //manualHtml1.position(menuPosX + 60, 30);
    } else {
      htmlDrawer.position(-2000, 30 + 16);
      manualHtmlA.position(-1000, 120);
      manualHtmlB.position(-1000, 120);
    }
  }
  //DRAWER SHARE
  if (shareON) {
    if (y < 90) {
      y += 5;
      sharePosY = map(sin(radians(y)), 0, 1, 0, 44);
      //
      //---> positions of FB and TW buttons
      if (windowWidth >= 1440) {
        buttonShareFB.position(windowWidth - 30 - 32, 10 + 16 + sharePosY);
        buttonShareTW.position(windowWidth - 30 - 32, 10 + 16 + sharePosY * 2);
        buttonShareLI.position(windowWidth - 30 - 32, 10 + 16 + sharePosY * 3);
      } else {
        buttonShareFB.position(windowWidth - 30 - 78, 10 + 16 + sharePosY);
        buttonShareTW.position(windowWidth - 30 - 78, 10 + 16 + sharePosY * 2);
        buttonShareLI.position(windowWidth - 30 - 78, 10 + 16 + sharePosY * 3);
      }
    }
  } else {
    if (y > 0) {
      y -= 5;
      sharePosY = map(sin(radians(y)), 0, 1, 0, 44);
      //---> positions of FB and TW buttons
      if (windowWidth >= 1440) {
        buttonShareFB.position(windowWidth - 30 - 32, 10 + 16 + sharePosY);
        buttonShareTW.position(windowWidth - 30 - 32, 10 + 16 + sharePosY * 2);
        buttonShareLI.position(windowWidth - 30 - 32, 10 + 16 + sharePosY * 3);
      } else {
        buttonShareFB.position(windowWidth - 30 - 78, 10 + 16 + sharePosY);
        buttonShareTW.position(windowWidth - 30 - 78, 10 + 16 + sharePosY * 2);
        buttonShareLI.position(windowWidth - 30 - 78, 10 + 16 + sharePosY * 3);
      }
    } else {
      //---> positions of FB and TW buttons
      buttonShareFB.position(-1000, 10 + 16);
      buttonShareTW.position(-1000, 10 + 16);
      buttonShareLI.position(-1000, 10 + 16);
      // htmlDrawer.position(-2000, 30 + 16);
      // manualHtmlA.position(-1000, 120);
      // manualHtmlB.position(-1000, 120);
    }
  }

  //BUTTONS
  if (windowWidth <= 1440) {

    //BUTTONS POSITION
    // button.position(windowWidth - 30 - 32, 10 + 16);
    //
    if (menuON) {
      button.position(-1000, 10 + 16);
      buttonH.position(-1000, 10 + 16);
      buttonClose.position(windowWidth - 30 - 32, 10 + 16); //TODO check button position in resize
      if (buttonMHightLight) {
        buttonCloseH.position(windowWidth - 30 - 32, 10 + 16);
      } else {
        buttonCloseH.position(-1000, 10 + 16);
      }
    } else {
      button.position(windowWidth - 30 - 32, 10 + 16);
      buttonClose.position(-1000, 10 + 16);
      buttonCloseH.position(-1000, 10 + 16);
      if (buttonMHightLight) {
        buttonH.position(windowWidth - 30 - 32, 10 + 16);
      } else {
        buttonH.position(-1000, 10 + 16);
      }
    }
    //buttonShare.position
    buttonShare.position(windowWidth - 30 - 78, 10 + 16);
    if (buttonSHightLight) {
      buttonShareH.position(windowWidth - 30 - 78, 10 + 16);
    } else {
      buttonShareH.position(-1000, 10 + 16);
    }


  } else {
    buttonClose.position(-1000, 30 + 16);
    buttonCloseH.position(-1000, 10 + 16);
    button.position(-1000, 10 + 16);
    buttonH.position(-1000, 10 + 16);
    //
    // buttonShare.position
    buttonShare.position(windowWidth - 30 - 32, 10 + 16);
    if (buttonSHightLight) {
      buttonShareH.position(windowWidth - 30 - 32, 10 + 16);
    } else {
      buttonShareH.position(-1000, 10 + 16);
    }

  }


}

function menuCall() {
  if (!menuON) {
    menuON = !menuON;
  } else {
    menuON = !menuON;
  }
}

function shareCall() {
  if (!shareON) {
    shareON = !shareON;
  } else {
    shareON = !shareON;
  }
}



function mHighlight() {
  buttonMHightLight = true;
  buttonH.position(windowWidth - 30 - 32, 10 + 16);
  //print('IN');
}

function mRegular() {
  buttonMHightLight = false;
  buttonH.position(-1000, 10 + 16);
  //print('OUT');
}

function sHighlight() {
  buttonSHightLight = true;
  buttonH.position(windowWidth - 30 - 32, 10 + 16);
  //print('IN');
}

function sRegular() {
  buttonSHightLight = false;
  buttonH.position(-1000, 10 + 16);
  //print('OUT');
}




function adjustLayout() { //RESPONSIVE CODE


  ////////////////////////////////////////////////////////////////////////////////////////////111111111111111111111111111
  if (windowWidth <= 1080) {

    resizeCanvas(windowWidth, windowWidth / ratio);
    fov = map(windowWidth, 112, 1920, 0.525, 0.2875);

    if (windowHeight <= 720) { //////////////////////////////////////////////HEIGHT<720
      cnv.position(0, 60);
      titleHTML.position(-1000, -20);
      titleHTML2.position(width - titleHTML2.width >> 1, -20);
      manualHtml1.position(-500, 200);
      descriptionHtml1.position(-1000, 0);

      descriptionHtml2.position(-1000, cnv.height + 140);

      //BUTTONS POSITION
      button.position(windowWidth - 30 - 32, 10 + 16);

      //
    } else { ////////////////////////////////////////////////////////////////HEIGHT > 720
      cnv.position(0, 150);
      titleHTML.position(20, -20);
      titleHTML2.position(-1000, -20);
      manualHtml1.position(-1000, 200);
      descriptionHtml1.position(width - descriptionHtml1.width >> 1, 80);
      //
      button.position(windowWidth - 30 - 32, 10 + 16);

      if (windowWidth >= 768) {
        descriptionHtml2.size(768, AUTO).attribute('align', 'center');
        descriptionHtml2.position(width - descriptionHtml2.width >> 1, cnv.height + 140);

      } else {
        descriptionHtml2.size(370, AUTO).attribute('align', 'center');
        descriptionHtml2.position((windowWidth / 2) - descriptionHtml2.width / 2, cnv.height + 140);
      }
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////22222222222222222222222222
  } else if (windowWidth > 1080 && windowWidth <= 1440) {
    resizeCanvas(1080, 1080 / ratio);
    fov = map(1080, 112, 1920, 0.525, 0.2875);
    var cnvXcenter = (windowWidth / 2) - width / 2;
    //
    button.position(windowWidth - 30 - 32, 10 + 16);

    if (windowHeight <= 888) { ///////////////////////////////////////////////////HEIGHT < 720
      titleHTML.position(-1000, -20);
      titleHTML2.position((windowWidth / 2) - titleHTML2.width / 2, -20);
      cnv.position(cnvXcenter, 60);
      manualHtml1.position(-500, 200);
      descriptionHtml1.position(-1000, 0);
      descriptionHtml2.position(-1000, cnv.height + 140);

    } else { /////////////////////////////////////////////////////////////////////HEIGHT > 720
      titleHTML.position(20, -20);
      titleHTML2.position(-1000, -20);
      cnv.position(cnvXcenter, 150);
      manualHtml1.position(-500, 200);
      descriptionHtml1.position((windowWidth / 2) - descriptionHtml1.width / 2, 80);
      descriptionHtml2.position((windowWidth / 2) - descriptionHtml2.width / 2, cnv.height + 140);
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////3333333333333333333333333
  } else if (windowWidth > 1440 && windowWidth <= 1768) {
    buttonH.position(-1000, 30 + 16)
    button.position(-1000, 30 + 16)
    titleHTML.position(30, 10);
    titleHTML2.position(-1000, -20);
    var cnvWidth = map(windowWidth, 1440, 1768, 1080, 1280);
    var adjustXpos = map(windowWidth, 1440, 1768, 0, 80);
    resizeCanvas(cnvWidth, cnvWidth / ratio);
    fov = map(cnvWidth, 112, 1920, 0.525, 0.2875);
    cnv.position(360 + adjustXpos, 150);
    manualHtml1.position(10 + adjustXpos, 200);
    //
    descriptionHtml1.position(-1000, 200);
    descriptionHtml2.position(-1000, 400);

    /////////////////////////////////////////////////////////////////////////////////////////////////////4444444444444444444444444
  } else if (windowWidth > 1768) {
    buttonH.position(-1000, 30 + 16)
    button.position(-1000, 30 + 16)
    titleHTML.position(30, 10);
    titleHTML2.position(-1000, -20);
    var cnvWidth = 1280;
    resizeCanvas(cnvWidth, cnvWidth / ratio);
    fov = map(cnvWidth, 112, 1920, 0.525, 0.2875);
    cnv.position(450, 150);
    //
    manualHtml1.position(90, 200);
    //
    descriptionHtml1.position(-1000, 200);
    descriptionHtml2.position(-1000, 400);
  }
}

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

function chrono() {
  startTime = millis();
  stopTime = startTime + duration;
}
/*
function ladder() {
  //LADDER
  for (var i = -45; i <= 45; i += 3.75) {
    blueHourAlpha = i;
    var blueHourAlpha2 = map(alphBlueHour, -12, 12, -45, 45);

    var ladderAlpha = sq(abs(blueHourAlpha - blueHourAlpha2));
    var radiusBladder = 285;
    var blueHourXladder = radiusBladder * cos(radians(blueHourAlpha));
    var blueHourYladder = radiusBladder * -sin(radians(blueHourAlpha));

    push();
    translate(blueHourXladder, blueHourYladder, 0);
    fill(128, ladderAlpha);
    rect(80, 0, 165, 2, 10);
    pop();
  }
}
*/

function redSetter() {
  var gap;
  if (!setterDoOnce) {
    tomorow = false;
    origine = redX;
    gap = tmzGMTbCurrentIndex - tmzGMTrCurrentIndex;
    var protoDestination = blueHour - gap;

    if (protoDestination >= -12) {
      yesterday = false;
      destination = protoDestination;

      // print("destination : " + destination + " | blueHour : " + blueHour + " MINUS gap :" + gap);
    } else {
      //si 'yesterday' -> destination = (12 - (protodesintation -12))
      yesterday = true;
      destination = (12 + (protoDestination + 12));
      // print("destination : " + destination + " | 12 - (" + protoDestination + " + 12 ))" );

    }

    chrono();
    setterDoOnce = true;
  }

  if (!setterDONE) {
    if (millis() < stopTime) {
      //first I want 1 sin cycle
      // so angle must be between -PI/2 and -PI
      motionAngle = map(millis(), startTime, stopTime, -PI / 2, PI / 2);
      var sinval = sin(motionAngle);
      //then I want normSin to be from 0 to 1
      var normSin = (sinval + 1) / 2;

      p = map(normSin, 0, 1, origine, destination * 3.75); // 

      redX = p;

    } else {
      setterDONE = false;
      setterDoOnce = false;
      setRed = false;
    }
  }

}

function blueSetter() {
  var gap;
  if (!setterDoOnce) {
    yesterday = false;
    origine = blueX;
    gap = tmzGMTbCurrentIndex - tmzGMTrCurrentIndex;
    //destination = redHour + gap;
    var protoDestination = redHour + gap;

    if (protoDestination <= 12) {
      tomorow = false;
      destination = protoDestination;
      // print("destination : " + destination + " | blueHour : " + blueHour + " MINUS gap :" + gap);
    } else {
      //si 'yesterday' -> destination = (12 - (protodesintation -12))
      tomorow = true;
      destination = (-12 + (protoDestination - 12));
      // print("destination : " + destination + " | 12 - (" + protoDestination + " + 12 ))" );
      //TODO WRITE TOMOROW
    }

    chrono();
    setterDoOnce = true;
  }

  if (!setterDONE) {
    if (millis() < stopTime) {
      //first I want 1 sin cycle
      // so angle must be between -PI/2 and -PI
      motionAngle = map(millis(), startTime, stopTime, -PI / 2, PI / 2);
      var sinval = sin(motionAngle);
      //then I want normSin to be from 0 to 1
      var normSin = (sinval + 1) / 2;

      p = map(normSin, 0, 1, origine, destination * 3.75); // 

      blueX = p;

    } else {
      //print("DONE ");
      setterDONE = false;
      setterDoOnce = false;
      setBlue = false;
    }
  }


}

function dayAfterBefore() {
  //RED
  if (yesterday) {
    //TODO WRITE YESTERDAY
    var radiusR1 = 295;
    var redHourX1 = radiusR1 * -cos(radians(-50));
    var redHourY1 = radiusR1 * -sin(radians(-50));
    //
    push();
    translate(redHourX1, redHourY1, 0);
    ambientMaterial(255, 0);
    texture(redHoursImgs[25]);
    rect(-70, 0, 128, 64); //>>>>>>>>>>>>>>>>>>>>>>>ACTUAL CLOCK
    pop();
  }

  //BLEU

  if (tomorow) {
    //TODO WRITE YESTERDAY
    var radiusB1 = 295;
    var blueHourX1 = radiusB1 * cos(radians(50));
    var blueHourY1 = radiusB1 * -sin(radians(50));
    //
    push();
    translate(blueHourX1, blueHourY1, 0);
    ambientMaterial(255, 0);
    texture(blueHoursImgs[25]);
    rect(70, 0, 128, 64, 10); //>>>>>>>>>>>>>>>>>>>>>>>ACTUAL CLOCK
    //rect(-70, 0, 128, 64); //>>>>>>>>>>>>>>>>>>>>>>>ACTUAL CLOCK
    pop();
  }
}



function drawCities() {
  for (var i = 0; i < cities.getRowCount(); i++) {
    var latitude = cities.getNum(i, "lat");
    var longitude = cities.getNum(i, "lng");
    //setXY(latitude, longitude);

    push();
    fill(128, 0, 0, 128);
    rotateY(+radians(longitude) + radians(worldAngle));
    rotateX(3 * (PI) + radians(latitude));
    push();
    translate(0, 0, 255);
    ellipse(0, 0, 5, 5); //>>>>>>>>>>>>>>>>>>>>>>>CITY
    //sphere(5);
    pop();
    //
    pop();
  }
}

function clocks() {
  var diffAlphRed = redHour - alphRedHour;
  alphRedHour += diffAlphRed * easing;

  var redHourAlpha = map(alphRedHour, -12, 12, -45, 45);
  //
  var radiusR1 = 295;
  var redHourX1 = radiusR1 * -cos(radians(redHourAlpha));
  var redHourY1 = radiusR1 * -sin(radians(redHourAlpha));
  //
  var radiusR2 = 285;
  var redHourX2 = radiusR2 * -cos(radians(redHourAlpha));
  var redHourY2 = radiusR2 * -sin(radians(redHourAlpha));
  //
  if (cadranOk) {
    if (redHour < -12) {
      currentRedHour = redHoursImgs[25];
    } else {
      if (redHour == 0) {
        currentRedHour = redHoursImgs[12]; //12
      } else {
        currentRedHour = redHoursImgs[redHour + 12];
      }
    }
    ////////////////////////////////////
    push();
    rectMode(CORNER, CENTER);
    translate(redHourX2, redHourY2, 0);
    ambientMaterial(255, 0);
    texture(traitr);
    rect(-160, -3, 160, 6); //>>>>>>>>>>>>>>>>>>>>>>>>RED TRAIT
    //fill(255,0,0);
    //ellipse(0,0,200,200);
    pop();
    //
    ambientMaterial(255, 0);
    texture(currentRedHour);
    push();
    translate(redHourX1, redHourY1, 0);
    texture(currentRedHour);
    rect(-70, 0, 128, 64); //>>>>>>>>>>>>>>>>>>>>>>>ACTUAL CLOCK
    pop();
    //
    push(); //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>AIGUILLE
    ambientMaterial(255, 0);
    texture(imgAiguilleRed);
    rotateZ(-radians(redHourAlpha + 180));
    rect(200 / 2, 0, -363, 6);
    pop();

  }

  ///////////////////////BLUE HOUR
  var diffAlphBlue = blueHour - alphBlueHour;
  alphBlueHour += diffAlphBlue * easing;

  var blueHourAlpha = map(alphBlueHour, -12, 12, -45, 45);
  //
  var radiusB1 = 295;
  var blueHourX1 = radiusB1 * cos(radians(blueHourAlpha));
  var blueHourY1 = radiusB1 * -sin(radians(blueHourAlpha));
  //
  var radiusB2 = 285;
  var blueHourX2 = radiusB2 * cos(radians(blueHourAlpha));
  var blueHourY2 = radiusB2 * -sin(radians(blueHourAlpha));
  //
  if (cadranOk) {
    if (blueHour > 12) {
      currentBlueHour = blueHoursImgs[25];
    } else {
      if (blueHour == 0) {
        currentBlueHour = blueHoursImgs[12]; //12
      } else {
        currentBlueHour = blueHoursImgs[blueHour + 12];
      }
    }
    ////////////////////////////////////
    push();
    rectMode(CORNER, CENTER);
    translate(blueHourX2, blueHourY2, 0);
    ambientMaterial(255, 0);
    texture(traitb);
    rect(0, -3, 160, 6); //>>>>>>>>>>>>>>>>>>>>>>>>BLUE TRAIT

    pop();
    //
    ambientMaterial(255, 0);
    texture(currentBlueHour);
    push();
    translate(blueHourX1, blueHourY1, 0);
    texture(currentBlueHour);
    rect(70, 0, 128, 64, 10); //>>>>>>>>>>>>>>>>>>>>>>>ACTUAL CLOCK
    pop();
    //
    push(); //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>AIGUILLE
    ambientMaterial(255, 0);
    texture(imgAiguilleBlue);
    rotateZ(radians(blueHourAlpha + 180));
    rect(-200 / 2, 0, 363, 6);
    pop();

  }
}




function arcLink() {
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //>>>>>>>>>>>>arcAlongASphere>>>>>>>>>>>>>>>>
  //*******************************************************
  var v1 = createVector(redDotX, redDotY, redDotZ);
  /*
  fill(255, 0, 0, 200);
  push();
  translate(v1.x, v1.y, v1.z);
  sphere(10);
  pop();
  */
  //
  var v2 = createVector(blueDotX, blueDotY, blueDotZ);
  /*
  fill(0, 0, 255, 200);
  push();
  translate(v2.x, v2.y, v2.z);
  sphere(10);
  pop();
  */
  //  I presume when you say "straight line over the surface of the sphere", you actually mean the shortest great circle path over the sphere. Here is one way to plot it. Let (x0,y0,z0) be the center of the sphere.
  // http://fr.mathworks.com/matlabcentral/newsreader/view_thread/277881
  // calculate the position of the point at v2
  var r = 255;
  var v4a = p5.Vector.cross(v1, v2);
  //print("v4a : " + v4a);
  var v4b = p5.Vector.cross(v4a, v1); //% v3 lies in plane of v1 & v2 and is orthog.to v1
  //print("v4b : " + v4b)
  var normV4 = v4b.mag();
  //print("normV4 : " + normV4);
  var v4c = p5.Vector.mult(v4b, r);
  var v4 = p5.Vector.div(v4c, normV4); //% Make v3 of length r
  //print("v4 : " + v4);
  //
  //range through from v1 to v2
  //determine range //tmax = atan2(sqrt(sum(cross(v1, v2). ^ 2, 1)), dot(v1, v2));
  //cross(v1, v2). ^ 2
  var t1a = p5.Vector.cross(v1, v2);
  //print(t1a);
  var t1b = t1a.magSq();
  //print(t1b);
  var t1 = sqrt(t1b);
  //print(t1);
  var t2 = p5.Vector.dot(v1, v2);
  //print(t2);
  var t3 = atan2(t1, t2); //>>>>>>>>>>>>>
  //print(t3);
  //trace along the way
  for (var i = 0; i < 20; i++) {
    var t = map(i, 0, 20, 0, t3);
    //var t = map(mouseX, 0, 100, 0, PI);
    var v5a = p5.Vector.mult(v1, cos(t));
    var v5b = p5.Vector.mult(v4, sin(t));
    var v5 = p5.Vector.add(v5a, v5b); //>>>>>>>>>>>>
    //
    fill(230); //50, 100, 250, 200
    push();
    translate(v5.x, v5.y, v5.z);
    //ellipse(0, 0, 5, 5);
    sphere(2);
    pop();
    /*
        beginShape();
        vertex(0, 0, 0);
        vertex(v5.x, v5.y, v5.z);
        //vertex(150, 45,-100);
        endShape();
        */
  }

  //get middlePoint
  var u = map(10, 0, 20, 0, t3);
  var v6a = p5.Vector.mult(v1, cos(u));
  var v6b = p5.Vector.mult(v4, sin(u));
  var v6 = p5.Vector.add(v6a, v6b); //>>>>>>>>>>>>
  var middlePoint = createVector(v6.x, v6.y, v6.z);
  //
  gapCounter(v6.x, v6.y, v6.z)
    //


}

function gapCounter(x, y, z) {
  var gap = abs(tmzGMTbCurrentIndex - tmzGMTrCurrentIndex);

  if (preLoaded) {
    if (tmzGMTbCurrentIndex == tmzGMTrCurrentIndex) {
      currentNumber = numbersImgs[0];
    } else {
      currentNumber = numbersImgs[gap];
    }

    //print(imgGMTbCurrentIndex - imgGMTrCurrentIndex);

    fill(230);
    push();
    translate(x, y, z + 10);
    ellipse(0, 0, 26, 26);
    pop();
    //

    ambientMaterial(255, 200);
    texture(currentNumber);
    push();
    translate(x, y, z + 20);
    rect(0, 0, 30, 30);
    pop();
  }
}


function globeTouch() {
  //////////////////////////display a sphere where the mouse touches the globe

  //GET CURSOR relative to the globe
  var mousePosX;
  var mousePosY;
  if (mouseX > cx - globeRadiusInPx && mouseX < cx + globeRadiusInPx) {
    mousePosX = mouseX;
  } else {
    mousePosX = cx;
  }
  if (mouseY > cy - globeRadiusInPx && mouseY < cy + globeRadiusInPx) {
    mousePosY = mouseY;
  } else {
    mousePosY = cy;
  }

  //IF CURSOR IN GLOBE
  if (dist(cx, cy, mouseX, mouseY) < globeRadiusInPx) {
    ///////////////////NEW
    //Calculate cursor move in terme of theta and phi effect (arcsin)
    var sinTheta = map(mousePosX, cx - globeRadiusInPx, cx + globeRadiusInPx, -1, 1);
    var sinPhi = map(mousePosY, cy - globeRadiusInPx, cy + globeRadiusInPx, -1, 1);
    //
    touchTheta = asin(sinTheta);
    touchPhi = -asin(sinPhi);

    ///////////////////
    //return move angles in X and Y
    dummyAngleY = -1 * degrees(touchTheta + PI);
    dummyAngleX = degrees(touchPhi + PI);

    ///////////////////
    /*
    //display 3D dummy in cursor pos
    push();
    rotateY(touchTheta + PI);
    rotateX(touchPhi + PI);

    translate(0, 0, 255);
    ambientMaterial(0, 64);
    sphere(20, 48, 48);
    pop();
    */
  }
}


function touchTracker() {
  ///////////////////////// calculate the X and Y of the TouchPoint (Z ?)
  var dummyZa = (cos(radians(dummyAngleY)) * 255);
  dummyX = (sin(radians(dummyAngleY)) * 255);
  //print("dummyZa = " + dummyZa + " | dummyX = " + dummyX);
  var dummyZb = (cos(radians(dummyAngleX)) * 255);
  dummyY = (sin(radians(dummyAngleX)) * 255);
  //
  // print("dummyZa = " + dummyZa + " | dummyZb = " + dummyZb);
  var dummyZ = dummyZa; //apparently not used

}



function redDotTrackerer() {
  //track interaction mouvements
  redDotAngleX = redX;
  redDotAngleY = redY;
  //CALCULE
  //pour θ autour de z et ϕ autour de ...
  //alors que nous on a width autour de y et height autour de x - > et on cherche z

  //http://mathinsight.org/spherical_coordinates
  thetaR = -radians(redDotAngleY - worldAngle);
  phiR = radians(-redDotAngleX + 90);
  //rho = 255;
  // x = ρsinϕ * cosθ
  // y = ρsinϕ * sinθ
  // z = ρcosϕ.
  //
  redDotX = rho * -sin(thetaR) * sin(phiR);
  redDotY = rho * -cos(phiR);
  redDotZ = rho * -sin(phiR) * cos(thetaR);
  //END CALCULE
  //
  /*  
    //SHOW CALCULATED POSITION
    push();
    translate(redDotX, redDotY, redDotZ);
    fill(0, 255, 0);
    //box(20, 20, 20);
    pop();
    //line(0, 0, 0, redDotX, redDotY, 255);
    beginShape();
    vertex(0, 0, 0);
    vertex(redDotX, redDotY, 300);
    //vertex(150, 45,-100);
    endShape();
  */
  //SHOW POINT FROM ANGLES
  push();
  fill(redDotColor);
  rotateY(thetaR);
  rotateX(3 * (PI / 2) - phiR);
  push();
  translate(0, 0, redDotLength + 2);
  ellipse(0, 0, 50, 50); //>>>>>>>>>>>>>>>>>>>>>>>RED DOT
  pop();
  //
  push();
  translate(0, 0, rho);
  ambientMaterial(0, 200);
  texture(imgShadow);
  rect(0, 0, 55, 55);
  pop();
  //
  pop();
}

function blueDotTrackerer() {
  //track interaction mouvements
  blueDotAngleX = blueX;
  blueDotAngleY = blueY;
  //CALCULE
  //pour θ autour de z et ϕ autour de ...
  //alors que nous on a width autour de y et height autour de x - > et on cherche z

  //http://mathinsight.org/spherical_coordinates
  thetaB = -radians(blueDotAngleY - worldAngle);
  phiB = radians(-blueDotAngleX + 90);
  //rho = 255;
  // x = ρsinϕ * cosθ
  // y = ρsinϕ * sinθ
  // z = ρcosϕ.
  //
  blueDotX = rho * -sin(thetaB) * sin(phiB);
  blueDotY = rho * -cos(phiB);
  blueDotZ = rho * -sin(phiB) * cos(thetaB);
  //END CALCULE
  //
  /*
  //SHOW CALCULATED POSITION
  push();
  translate(blueDotX, blueDotY, blueDotZ);
  fill(0, 255, 0);
  //box(20, 20, 20);
  pop();
  //line(0, 0, 0, redDotX, redDotY, 255);
  beginShape();
  vertex(0, 0, 0);
  vertex(blueDotX, blueDotY, 300);
  //vertex(150, 45,-100);
  endShape();
*/
  //SHOW POINT FROM ANGLES
  push();
  fill(blueDotColor);
  rotateY(thetaB);
  rotateX(3 * (PI / 2) - phiB);
  push();
  translate(0, 0, blueDotLength + 2);
  ellipse(0, 0, 50, 50); //>>>>>>>>>>>>>>>>>>>>>>>BLUE DOT
  pop();
  //
  //SHADOW
  push();
  translate(0, 0, rho);
  ambientMaterial(0, 200);
  texture(imgShadow);
  rect(0, 0, 55, 55);
  pop();
  //
  pop();
}

//////////////////////////////////////////////////////////////////////////////////////
function selector() {
  var selectionRadius = 50;
  //
  //RED SELECTOR
  if (redDotZ > 0) {
    var redDotTracker = dist(redDotX, redDotY, dummyX, dummyY);
    if (redDotTracker < selectionRadius) {
      //print("onRed " + onRed);
      redDotColor = color(249, 112, 118); //old 250, 88, 95
      onRed = true;
      //redDotLength = -255;
    } else {
      redDotColor = color(250, 88, 95); //old 230, 68, 75
      onRed = false;
      //redDotLength = -260;
    }
    //print("onRed " + onRed);
    //
  }
  //BLUE SELECTOR
  if (blueDotZ > 0) {
    var blueDotTracker = dist(blueDotX, blueDotY, dummyX, dummyY);
    if (blueDotTracker < selectionRadius) {
      //print("touch BLUE !!");
      blueDotColor = color(170, 217, 221);
      onBlue = true;
      //blueDotLength = -255;
    } else {
      blueDotColor = color(150, 197, 201);
      onBlue = false;
      //blueDotLength = -260;
    }
  }
  if (!redSelected && !blueSelected && !whiteSelected) {
    //print("--");
    redDotLength = 260;
    blueDotLength = 260;
  } else if (redSelected) {
    redDotLength = 256;
    //print("red selected");
  } else if (blueSelected) {
    blueDotLength = 255;
    //print("blue selected");
  } else if (whiteSelected) {
    //print("white selected");
  }
}

function interactor() {
  //print(tmzGMTrCurrentIndex + " / " + tmzGMTbCurrentIndex + " |gap = " + abs(tmzGMTbCurrentIndex - tmzGMTrCurrentIndex));
  /*
  mousePressed -> get angle : startX
  mouseisPressed -> angle = startX + delta
  mouseReleased angle = 
  */
  if (dist(cx, cy, mouseX, mouseY) < height * 0.5 && !onRed && !onBlue) {
    onWhite = true;
  } else {
    onWhite = false;
  }

  if (whiteSelected) {
    //print(dist(cx, cy, mouseX, mouseY));
    //OLD//deltaX = (A - mouseX) / 25;
    deltaX = (degrees(C) - (degrees(touchTheta)));

    //introduce easing
    var diffDeltaX = deltaX - easedDeltaX
    easedDeltaX += diffDeltaX * easingGlobe;
    //
    angleX = startX - (easedDeltaX * 1.25);

    speedX = pmouseX - mouseX;

  } else {
    rpm -= speedX / 25;
  }

  //*************************************************   RED   ************************************************

  if (redSelected) {
    //print(dist(cx, cy, mouseX, mouseY));
    //redDeltaX = (A - mouseY) / 5; // 
    //redDeltaX = angle en degree

    //********* MESSED UP SHIT X and Y are INVERTED compared to Globe CONTROLE **********
    redDeltaX = (degrees(D) - degrees(touchPhi));
    redX = startRedX - redDeltaX;
    //
    //redDeltaY = (B - mouseX) / 5; // 
    redDeltaY = (degrees(C) - degrees(touchTheta));
    if (startRedY + redDeltaY > blueY) {
      redY = startRedY + redDeltaY;
      //print("redDeltaY : " + redDeltaY);
      //print("dummyAngleY : " + dummyAngleY);
      // print(");")
    }

  }
  //********************************************* redX
  if (prevRedHour != redHour) {
    soundClick.play();
  }
  prevRedHour = redHour;
  //print(redX);
  if (redX < -46) {
    redX = -46; //-> YESTERDAY
    redHour = -13;
  }

  //lock +-45
  if (redX > 45) {
    redX = 45; //-> HAUT MINUIT
    redHour = 12;

  }
  if (redX < -44 && redX > -46) {
    redX = -45; //-> BAS MINUIT    
    redHour = -12;

  }
  //snap red HOURS
  // SNAP red
  if (redX < 1.5 && redX > -1.5) {
    redX = 0; //MIDI
    redHour = 0;
  } else if (redX < 5.25 && redX > 2.25) {
    redX = 3.75;
    redHour = 1;
  } else if (redX < 9 && redX > 6) {
    redX = 7.5;
    redHour = 2;
  } else if (redX < 12.75 && redX > 9.75) {
    redX = 11.25;
    redHour = 3;
  } else if (redX < 16.5 && redX > 13.5) {
    redX = 15;
    redHour = 4;
  } else if (redX < 20.25 && redX > 17.25) {
    redX = 18.75;
    redHour = 5;
  } else if (redX < 24 && redX > 21) {
    redX = 22.5;
    redHour = 6;
  } else if (redX < 27.75 && redX > 24.75) {
    redX = 26.25;
    redHour = 7;
  } else if (redX < 31.5 && redX > 28.5) {
    redX = 30;
    redHour = 8;
  } else if (redX < 35.25 && redX > 32.25) {
    redX = 33.75;
    redHour = 9;
  } else if (redX < 39 && redX > 36) {
    redX = 37.5;
    redHour = 10;
  } else if (redX < 42.75 && redX > 39.75) {
    redX = 41.25;
    redHour = 11;
  }
  /////////////////////////////////////minus
  if (redX > -5.25 && redX < -2.25) {
    redX = -3.75;
    redHour = -1;
  } else if (redX > -9 && redX < -6) {
    redX = -7.5;
    redHour = -2;
  } else if (redX > -12.75 && redX < -9.75) {
    redX = -11.25;
    redHour = -3;
  } else if (redX > -16.5 && redX < -13.5) {
    redX = -15;
    redHour = -4;
  } else if (redX > -20.25 && redX < -17.25) {
    redX = -18.75;
    redHour = -5;
  } else if (redX > -24 && redX < -21) {
    redX = -22.5;
    redHour = -6;
  } else if (redX > -27.75 && redX < -24.75) {
    redX = -26.25;
    redHour = -7;
  } else if (redX > -31.5 && redX < -28.5) {
    redX = -30;
    redHour = -8;
  } else if (redX > -35.25 && redX < -32.25) {
    redX = -33.75;
    redHour = -9;
  } else if (redX > -39 && redX < -36) {
    redX = -37.5;
    redHour = -10;
  } else if (redX > -42.75 && redX < -39.75) {
    redX = -41.25;
    redHour = -11;
  }

  //********************************************* redY
  //print(redY);
  //lock +-180
  if (prevImgGMTrCurrentIndex != imgGMTrCurrentIndex) {
    soundClick2.play();
  }
  prevImgGMTrCurrentIndex = imgGMTrCurrentIndex;


  if (redY > 180) {
    redY = 180;
    // imgGMTrCurrent = GMT12r;
    imgGMTrCurrent = gmtRmImgs[11]

    imgGMTrCurrentIndex = 12;
    tmzGMTrCurrentIndex = -12
  }
  if (redY < -165) {
    redY = -165;
    //
    //imgGMTrCurrent = GMTp11r;
    // imgGMTrCurrentIndex = 23;
    // tmzGMTrCurrentIndex = 11;
    //
    //imgGMTrCurrent = GMT12r;
    //imgGMTrCurrentIndex = 12;
    //tmzGMTrCurrentIndex = 12
  }
  // SNAP red TMZ
  if (redY < 5 && redY > -5) {
    redY = 0;
    //imgGMTrCurrent = imgGMTr;
    imgGMTrCurrent = gmtRpImgs[0];
    imgGMTrCurrentIndex = 0;
    tmzGMTrCurrentIndex = 0;
  } //GMT
  else if (redY < 20 && redY > 10) {
    redY = 15;
    //imgGMTrCurrent = GMTm1r;
    imgGMTrCurrent = gmtRmImgs[0]
    imgGMTrCurrentIndex = 1;
    tmzGMTrCurrentIndex = -1;
  } //-1
  else if (redY < 35 && redY > 25) {
    redY = 30;
    //imgGMTrCurrent = GMTm2r;
    imgGMTrCurrent = gmtRmImgs[1]
    imgGMTrCurrentIndex = 2;
    tmzGMTrCurrentIndex = -2;
  } //-2
  else if (redY < 50 && redY > 40) {
    redY = 45;
    //imgGMTrCurrent = GMTm3r;
    imgGMTrCurrent = gmtRmImgs[2]
    imgGMTrCurrentIndex = 3;
    tmzGMTrCurrentIndex = -3;
  } //-3
  else if (redY < 65 && redY > 55) {
    redY = 60;
    //imgGMTrCurrent = GMTm4r;
    imgGMTrCurrent = gmtRmImgs[3]
    imgGMTrCurrentIndex = 4;
    tmzGMTrCurrentIndex = -4;
  } //-4 
  else if (redY < 80 && redY > 70) {
    redY = 75;
    //imgGMTrCurrent = GMTm5r;
    imgGMTrCurrent = gmtRmImgs[4]
    imgGMTrCurrentIndex = 5;
    tmzGMTrCurrentIndex = -5;
  } //-5
  else if (redY < 95 && redY > 85) {
    redY = 90;
    //imgGMTrCurrent = GMTm6r;
    imgGMTrCurrent = gmtRmImgs[5]
    imgGMTrCurrentIndex = 6;
    tmzGMTrCurrentIndex = -6;
  } //-6
  else if (redY < 110 && redY > 100) {
    redY = 105;
    //imgGMTrCurrent = GMTm7r;
    imgGMTrCurrent = gmtRmImgs[6]
    imgGMTrCurrentIndex = 7;
    tmzGMTrCurrentIndex = -7;
  } //-7
  else if (redY < 125 && redY > 115) {
    redY = 120;
    //imgGMTrCurrent = GMTm8r;
    imgGMTrCurrent = gmtRmImgs[7]
    imgGMTrCurrentIndex = 8;
    tmzGMTrCurrentIndex = -8;
  } //-8
  else if (redY < 140 && redY > 130) {
    redY = 135;
    //imgGMTrCurrent = GMTm9r;
    imgGMTrCurrent = gmtRmImgs[8]
    imgGMTrCurrentIndex = 9;
    tmzGMTrCurrentIndex = -9;
  } //-9
  else if (redY < 155 && redY > 145) {
    redY = 150;
    //imgGMTrCurrent = GMTm10r;
    imgGMTrCurrent = gmtRmImgs[9]
    imgGMTrCurrentIndex = 10;
    tmzGMTrCurrentIndex = -10;
  } //-10
  else if (redY < 170 && redY > 160) {
    redY = 165;
    //imgGMTrCurrent = GMTm11r;
    imgGMTrCurrent = gmtRmImgs[10]
    imgGMTrCurrentIndex = 11;
    tmzGMTrCurrentIndex = -11;
  } //-11
  /////////////////////////////////////plus
  else if (redY > -20 && redY < -10) {
    redY = -15;
    //imgGMTrCurrent = GMTp1r;
    imgGMTrCurrent = gmtRpImgs[1];
    imgGMTrCurrentIndex = 13;
    tmzGMTrCurrentIndex = 1;
  } //+1
  else if (redY > -35 && redY < -25) {
    redY = -30;
    //imgGMTrCurrent = GMTp2r;
    imgGMTrCurrent = gmtRpImgs[2];
    imgGMTrCurrentIndex = 14;
    tmzGMTrCurrentIndex = 2;
  } //+2
  else if (redY > -50 && redY < -40) {
    redY = -45;
    //imgGMTrCurrent = GMTp3r;
    imgGMTrCurrent = gmtRpImgs[3];
    imgGMTrCurrentIndex = 15;
    tmzGMTrCurrentIndex = 3;
  } //+3
  else if (redY > -65 && redY < -55) {
    redY = -60;
    //imgGMTrCurrent = GMTp4r;
    imgGMTrCurrent = gmtRpImgs[4];
    imgGMTrCurrentIndex = 16;
    tmzGMTrCurrentIndex = 4;
  } //+4
  else if (redY > -80 && redY < -70) {
    redY = -75;
    //imgGMTrCurrent = GMTp5r;
    imgGMTrCurrent = gmtRpImgs[5];
    imgGMTrCurrentIndex = 17;
    tmzGMTrCurrentIndex = 5;
  } //+5
  else if (redY > -95 && redY < -85) {
    redY = -90;
    //imgGMTrCurrent = GMTp6r;
    imgGMTrCurrent = gmtRpImgs[6];
    imgGMTrCurrentIndex = 18;
    tmzGMTrCurrentIndex = 6;
  } //+6
  else if (redY > -110 && redY < -100) {
    redY = -105;
    //imgGMTrCurrent = GMTp7r;
    imgGMTrCurrent = gmtRpImgs[7];
    imgGMTrCurrentIndex = 19;
    tmzGMTrCurrentIndex = 7;
  } //+7
  else if (redY > -125 && redY < -115) {
    redY = -120;
    //imgGMTrCurrent = GMTp8r;
    imgGMTrCurrent = gmtRpImgs[8];
    imgGMTrCurrentIndex = 20;
    tmzGMTrCurrentIndex = 8;
  } //+8
  else if (redY > -140 && redY < -130) {
    redY = -135;
    //imgGMTrCurrent = GMTp9r;
    imgGMTrCurrent = gmtRpImgs[9];
    imgGMTrCurrentIndex = 21;
    tmzGMTrCurrentIndex = 9;
  } //+9
  else if (redY > -155 && redY < -145) {
    redY = -150;
    //imgGMTrCurrent = GMTp10r;
    imgGMTrCurrent = gmtRpImgs[10];
    imgGMTrCurrentIndex = 22;
    tmzGMTrCurrentIndex = 10;
  } //+10
  else if (redY > -170 && redY < -160) {
    redY = -165;
    //imgGMTrCurrent = GMTp11r;
    imgGMTrCurrent = gmtRpImgs[11];
    imgGMTrCurrentIndex = 23;
    tmzGMTrCurrentIndex = 11;
  } //+11



  //*************************************************   BLUE   ************************************************

  if (blueSelected) {
    //print(dist(cx, cy, mouseX, mouseY));

    //blueDeltaX = (A - mouseY) / 5; // 
    blueDeltaX = (degrees(D) - degrees(touchPhi));
    blueX = startBlueX - blueDeltaX;
    //
    //blueDeltaY = (B - mouseX) / 5; // 
    blueDeltaY = (degrees(C) - degrees(touchTheta));
    if (startBlueY + blueDeltaY < redY) {
      blueY = startBlueY + blueDeltaY;
    }
    //print(deltaX);
  }
  //********************************************* blueX
  if (prevBlueHour != blueHour) {
    soundClick.play();
  }
  prevBlueHour = blueHour;
  // print(blueX);
  if (blueX > 46) {
    blueX = 46; //-> TOMORROW
    blueHour = 13;
    // print("TOMORROW");
  }

  //lock +-90
  if (blueX > 44 && blueX < 46) {
    blueX = 45; //-> HAUT MINUIT
    blueHour = 12;
    //print("MINUIT");
  }
  if (blueX < -45) {
    blueX = -45; //-> BAS MINUIT
    blueHour = -12;
  }
  //snap blue HOURS
  // SNAP blue
  if (blueX < 1.5 && blueX > -1.5) {
    blueX = 0; //MIDI
    blueHour = 0;
  } else if (blueX < 5.25 && blueX > 2.25) {
    blueX = 3.75;
    blueHour = 1;
  } else if (blueX < 9 && blueX > 6) {
    blueX = 7.5;
    blueHour = 2;
  } else if (blueX < 12.75 && blueX > 9.75) {
    blueX = 11.25;
    blueHour = 3;
  } else if (blueX < 16.5 && blueX > 13.5) {
    blueX = 15;
    blueHour = 4;
  } else if (blueX < 20.25 && blueX > 17.25) {
    blueX = 18.75;
    blueHour = 5;
  } else if (blueX < 24 && blueX > 21) {
    blueX = 22.5;
    blueHour = 6;
  } else if (blueX < 27.75 && blueX > 24.75) {
    blueX = 26.25;
    blueHour = 7;
  } else if (blueX < 31.5 && blueX > 28.5) {
    blueX = 30;
    blueHour = 8;
  } else if (blueX < 35.25 && blueX > 32.25) {
    blueX = 33.75;
    blueHour = 9;
  } else if (blueX < 39 && blueX > 36) {
    blueX = 37.5;
    blueHour = 10;
  } else if (blueX < 42.75 && blueX > 39.75) {
    blueX = 41.25;
    blueHour = 11;
  }
  /////////////////////////////////////minus
  if (blueX > -5.25 && blueX < -2.25) {
    blueX = -3.75;
    blueHour = -1;
  } else if (blueX > -9 && blueX < -6) {
    blueX = -7.5;
    blueHour = -2;
  } else if (blueX > -12.75 && blueX < -9.75) {
    blueX = -11.25;
    blueHour = -3;
  } else if (blueX > -16.5 && blueX < -13.5) {
    blueX = -15;
    blueHour = -4;
  } else if (blueX > -20.25 && blueX < -17.25) {
    blueX = -18.75;
    blueHour = -5;
  } else if (blueX > -24 && blueX < -21) {
    blueX = -22.5;
    blueHour = -6;
  } else if (blueX > -27.75 && blueX < -24.75) {
    blueX = -26.25;
    blueHour = -7;
  } else if (blueX > -31.5 && blueX < -28.5) {
    blueX = -30;
    blueHour = -8;
  } else if (blueX > -35.25 && blueX < -32.25) {
    blueX = -33.75;
    blueHour = -9;
  } else if (blueX > -39 && blueX < -36) {
    blueX = -37.5;
    blueHour = -10;
  } else if (blueX > -42.75 && blueX < -39.75) {
    blueX = -41.25;
    blueHour = -11;
  }

  //********************************************* blueY
  if (prevImgGMTbCurrentIndex != imgGMTbCurrentIndex) {
    soundClick2.play();
  }
  prevImgGMTbCurrentIndex = imgGMTbCurrentIndex;

  //lock +-180
  if (blueY > 165) {
    blueY = 165;
    //imgGMTbCurrent = GMT12b;
    //imgGMTbCurrentIndex = 12;
    //tmzGMTbCurrentIndex = -12
  }
  if (blueY < -180) {
    blueY = -180;
    //imgGMTbCurrent = GMT12b;
    imgGMTbCurrent = gmtBmImgs[11];
    imgGMTbCurrentIndex = 12;
    tmzGMTbCurrentIndex = 12
  }

  //SNAP blue
  if (blueY < 5 && blueY > -5) {
    blueY = 0;
    // imgGMTbCurrent = imgGMTb;
    //imgGMTbCurrent = gmtBpImgs[0];
    imgGMTbCurrent = gmtBpImgs[0];
    imgGMTbCurrentIndex = 0;
    tmzGMTbCurrentIndex = 0;
  } //GMT
  else if (blueY < 20 && blueY > 10) {
    blueY = 15;
    //imgGMTbCurrent = GMTm1b;
    imgGMTbCurrent = gmtBmImgs[0];
    imgGMTbCurrentIndex = 1;
    tmzGMTbCurrentIndex = -1;
  } //-1
  else if (blueY < 35 && blueY > 25) {
    blueY = 30;
    //imgGMTbCurrent = GMTm2b;
    imgGMTbCurrent = gmtBmImgs[1];
    imgGMTbCurrentIndex = 2;
    tmzGMTbCurrentIndex = -2;
  } //-2
  else if (blueY < 50 && blueY > 40) {
    blueY = 45;
    //imgGMTbCurrent = GMTm3b;
    imgGMTbCurrent = gmtBmImgs[2];
    imgGMTbCurrentIndex = 3;
    tmzGMTbCurrentIndex = -3;
  } //-3
  else if (blueY < 65 && blueY > 55) {
    blueY = 60;
    //imgGMTbCurrent = GMTm4b;
    imgGMTbCurrent = gmtBmImgs[3];
    imgGMTbCurrentIndex = 4;
    tmzGMTbCurrentIndex = -4;
  } //-4 
  else if (blueY < 80 && blueY > 70) {
    blueY = 75;
    //imgGMTbCurrent = GMTm5b;
    imgGMTbCurrent = gmtBmImgs[4];
    imgGMTbCurrentIndex = 5;
    tmzGMTbCurrentIndex = -5;
  } //-5
  else if (blueY < 95 && blueY > 85) {
    blueY = 90;
    //imgGMTbCurrent = GMTm6b;
    imgGMTbCurrent = gmtBmImgs[5];
    imgGMTbCurrentIndex = 6;
    tmzGMTbCurrentIndex = -6;
  } //-6
  else if (blueY < 110 && blueY > 100) {
    blueY = 105;
    //imgGMTbCurrent = GMTm7b;
    imgGMTbCurrent = gmtBmImgs[6];
    imgGMTbCurrentIndex = 7;
    tmzGMTbCurrentIndex = -7;
  } //-7
  else if (blueY < 125 && blueY > 115) {
    blueY = 120;
    //imgGMTbCurrent = GMTm8b;
    imgGMTbCurrent = gmtBmImgs[7];
    imgGMTbCurrentIndex = 8;
    tmzGMTbCurrentIndex = -8;
  } //-8
  else if (blueY < 140 && blueY > 130) {
    blueY = 135;
    //imgGMTbCurrent = GMTm9b;
    imgGMTbCurrent = gmtBmImgs[8];
    imgGMTbCurrentIndex = 9;
    tmzGMTbCurrentIndex = -9;
  } //-9
  else if (blueY < 155 && blueY > 145) {
    blueY = 150;
    //simgGMTbCurrent = GMTm10b;
    imgGMTbCurrent = gmtBmImgs[9];
    imgGMTbCurrentIndex = 10;
    tmzGMTbCurrentIndex = -10;
  } //-10
  else if (blueY < 170 && blueY > 160) {
    blueY = 165;
    //imgGMTbCurrent = GMTm11b;
    imgGMTbCurrent = gmtBmImgs[10];
    imgGMTbCurrentIndex = 11;
    tmzGMTbCurrentIndex = -11;
  } //-11
  /////////////////////////////////////plus
  else if (blueY > -20 && blueY < -10) {
    blueY = -15;
    //imgGMTbCurrent = GMTp1b;
    imgGMTbCurrent = gmtBpImgs[1];
    //imgGMTbCurrent = gmtBpImgs[1]; //   PROBLEM was HERE
    imgGMTbCurrentIndex = 13;
    tmzGMTbCurrentIndex = 1;
  } //+1
  else if (blueY > -35 && blueY < -25) {
    blueY = -30;
    //imgGMTbCurrent = GMTp2b;
    imgGMTbCurrent = gmtBpImgs[2]; //    
    imgGMTbCurrentIndex = 14;
    tmzGMTbCurrentIndex = 2;
  } //+2
  else if (blueY > -50 && blueY < -40) {
    blueY = -45;
    //imgGMTbCurrent = GMTp3b;
    imgGMTbCurrent = gmtBpImgs[3];
    imgGMTbCurrentIndex = 15;
    tmzGMTbCurrentIndex = 3;
  } //+3
  else if (blueY > -65 && blueY < -55) {
    blueY = -60;
    //imgGMTbCurrent = GMTp4b;
    imgGMTbCurrent = gmtBpImgs[4];
    imgGMTbCurrentIndex = 16;
    tmzGMTbCurrentIndex = 4;
  } //+4
  else if (blueY > -80 && blueY < -70) {
    blueY = -75;
    //imgGMTbCurrent = GMTp5b;
    imgGMTbCurrent = gmtBpImgs[5];
    imgGMTbCurrentIndex = 17;
    tmzGMTbCurrentIndex = 5;
  } //+5
  else if (blueY > -95 && blueY < -85) {
    blueY = -90;
    //imgGMTbCurrent = GMTp6b;
    imgGMTbCurrent = gmtBpImgs[6];
    imgGMTbCurrentIndex = 18;
    tmzGMTbCurrentIndex = 6;
  } //+6
  else if (blueY > -110 && blueY < -100) {
    blueY = -105;
    //imgGMTbCurrent = GMTp7b;
    imgGMTbCurrent = gmtBpImgs[7];
    imgGMTbCurrentIndex = 19;
    tmzGMTbCurrentIndex = 7;
  } //+7
  else if (blueY > -125 && blueY < -115) {
    blueY = -120;
    //imgGMTbCurrent = GMTp8b;
    imgGMTbCurrent = gmtBpImgs[8];
    imgGMTbCurrentIndex = 20;
    tmzGMTbCurrentIndex = 8;
  } //+8
  else if (blueY > -140 && blueY < -130) {
    blueY = -135;
    //imgGMTbCurrent = GMTp9b;
    imgGMTbCurrent = gmtBpImgs[9];
    imgGMTbCurrentIndex = 21;
    tmzGMTbCurrentIndex = 9;
  } //+9
  else if (blueY > -155 && blueY < -145) {
    blueY = -150;
    //imgGMTbCurrent = GMTp10b;
    imgGMTbCurrent = gmtBpImgs[10];
    imgGMTbCurrentIndex = 22;
    tmzGMTbCurrentIndex = 10;
  } //+10
  else if (blueY > -170 && blueY < -160) {
    blueY = -165;
    //imgGMTbCurrent = GMTp11b;
    imgGMTbCurrent = gmtBpImgs[11];
    imgGMTbCurrentIndex = 23;
    tmzGMTbCurrentIndex = 11;
  } //+11


}

function renderCadran() {


  //MOTEUR
  if (cadranDPosXA <= 360) { //340
    cadranDPosXA += 6; //6
  } else if (cadranDPosXB <= 160) {
    cadranDPosXB += 6; //6
  }

  if (cadranDPosXB > 150) {
    if (cadranDMoonAlpha <= 45) {
      cadranDMoonAlpha++;
    } else {
      cadranOk = true;
    }
  }

  if (cadranDPosXA > 200) {
    //DEMI CADRAN INT
    push();
    translate(-cadranDPosXA, 0, 0);
    ambientMaterial(0, 0);
    texture(imgDemiCadranGA);
    rect(104, 0, -150, 600);
    pop();
    //
    push();
    translate(cadranDPosXA, 0, 0);
    ambientMaterial(0, 0);
    texture(imgDemiCadranDA);
    rect(-104, 0, 150, 600);
    pop();

    //LADDER
    for (var i = -45; i <= 45; i += 3.75) {
      redHourAlpha = i;
      var redHourAlpha2 = map(alphRedHour, -12, 12, -45, 45);
      //
      var ladderAlphaR = sq(abs(redHourAlpha - redHourAlpha2)); //THIS
      var ladderAlphaRfill = map(ladderAlphaR, 0, 2025, 240, 128); //PLUS THIS

      var radiusRladder = 285;
      var redHourXladder = radiusRladder * cos(radians(redHourAlpha));
      var redHourYladder = radiusRladder * -sin(radians(redHourAlpha));
      //
      push();
      rectMode(CORNER, CENTER);
      translate(-redHourXladder, redHourYladder, 0);
      //fill(128, ladderAlphaR);

      if (ladderAlphaRfill - sq(abs(redHourAlpha - redHourAlpha2)) > 128) { // = fuck it
        fill(ladderAlphaRfill - sq(abs(redHourAlpha - redHourAlpha2))); //240 ->128  //the point was to manage the transparency level without using the alpha parameter (because of, guess who ? yes, the fucking Macs)
      } else {
        fill(128);
      }

      rect(0, 0, -cadranDPosXB, 2, 10);
      //
      if (redHourAlpha == 0) {
        //fill(128, ladderAlphaR);
        fill(ladderAlphaRfill);
        rect(0, -2, -cadranDPosXB, 2, 10);
      }

      pop();
    }
    //
    for (var i = -45; i <= 45; i += 3.75) {
      blueHourAlpha = i;
      var blueHourAlpha2 = map(alphBlueHour, -12, 12, -45, 45);
      //
      var ladderAlphaB = sq(abs(blueHourAlpha - blueHourAlpha2));
      var ladderAlphaBfill = map(ladderAlphaB, 0, 2025, 240, 128); //PLUS THIS

      var radiusBladder = 285;
      var blueHourXladder = radiusBladder * cos(radians(blueHourAlpha));
      var blueHourYladder = radiusBladder * -sin(radians(blueHourAlpha));
      //
      push();
      rectMode(CORNER, CENTER);
      translate(blueHourXladder, blueHourYladder, 0);
      //fill(128, ladderAlphaB);
      if (ladderAlphaBfill - sq(abs(blueHourAlpha - blueHourAlpha2)) > 128) { // = fuck it
        fill(ladderAlphaBfill - sq(abs(blueHourAlpha - blueHourAlpha2))); //240 ->128  //the point was to manage the transparency level without using the alpha parameter (because of, guess who ? yes, the fucking Macs)
      } else {
        fill(128);
      }
      //
      rect(0, 0, cadranDPosXB, 2, 10);
      //
      if (blueHourAlpha == 0) {
        //fill(128, ladderAlphaB);
        fill(ladderAlphaBfill);
        rect(0, -2, cadranDPosXB, 2, 10);
      }

      pop();
    }
    //DEMICADRAN EXT
    push();
    translate(-(cadranDPosXA + cadranDPosXB), 0, 0);
    ambientMaterial(0, 0);
    texture(imgDemiCadranDB);
    rect(95, 0, -150, 600);
    //  rect(170, 0, 150, 600);
    pop();
    //
    push();
    translate(cadranDPosXA + cadranDPosXB, 0, 0);
    ambientMaterial(0, 0);
    texture(imgDemiCadranDB);
    rect(-95, 0, 150, 600);
    //  rect(170, 0, 150, 600);
    pop();

    //SUN
    push();
    translate(-(cadranDPosXA + cadranDPosXB), 0, 0);
    ambientMaterial(0, 0);
    texture(imgRedSun);
    rect(44, 0, 44, 44);
    pop();
    //
    push();
    translate(cadranDPosXA + cadranDPosXB, 0, 0);
    ambientMaterial(0, 0);
    texture(imgBlueSun);
    rect(-44, 0, 44, 44);
    pop();
    //MOON1
    push();
    translate(-(cadranDPosXA + cadranDPosXB), 0, 0);
    translate(360, 0, 0);
    rotateZ(radians(cadranDMoonAlpha));
    translate(-360, 0, 0);
    ambientMaterial(0, 0);
    texture(imgRedMoon);
    rect(44, 0, -44, 44);
    pop();
    //
    push();
    translate(cadranDPosXA + cadranDPosXB, 0, 0);
    translate(-360, 0, 0);
    rotateZ(radians(cadranDMoonAlpha));
    translate(360, 0, 0);
    ambientMaterial(0, 0);
    texture(imgBlueMoon);
    rect(-44, 0, 44, 44);
    pop();
    //MOON2
    push();
    translate(-(cadranDPosXA + cadranDPosXB), 0, 0);
    translate(360, 0, 0);
    rotateZ(-radians(cadranDMoonAlpha));
    translate(-360, 0, 0);
    ambientMaterial(0, 0);
    texture(imgRedMoon);
    rect(44, 0, -44, 44);
    pop();
    //
    push();
    translate(cadranDPosXA + cadranDPosXB, 0, 0);
    translate(-360, 0, 0);
    rotateZ(-radians(cadranDMoonAlpha));
    translate(360, 0, 0);
    ambientMaterial(0, 0);
    texture(imgBlueMoon);
    rect(-44, 0, 44, 44);
    pop();

  }

  // imgBlueMoon 
  // imgBlueSun 

}

function renderGlobe() {
  /*
    push();
    translate(260, 0, 0);
    rotateZ(radians(90));
      rotateX(radians(18));
        ambientMaterial(0, 0);
        texture(imgVoid);
    //fill(255, 128);
    cylinder(200, 140, 48, 1);
    pop();
  */
  push();
  worldAngle = angleX + rpm;
  rotateY(radians(worldAngle));
  /////////////////////////////
  ambientMaterial(255);
  //normalMaterial();
  //texture(imgShadow);
  texture(imgTerre);
  // if(preLoaded){
  // texture(gmtBpImgs[1]);
  sphere(255, 48, 48); //>>>>>>>>>>>>>>>>>>>>>>>>>GLOBE
  //}
  //
  ambientMaterial(0, 0);
  texture(imgGrid);
  sphere(257, 48, 48); //>>>>>>>>>>>>>>>>>>>>>>>>>GRID

  if (preLoaded) {
    //>>>>>>>>>>>>>>>>>>>>>>>>>GMT HIGHLIGHT 
    if (imgGMTbCurrentIndex != imgGMTrCurrentIndex) {
      ambientMaterial(0, 1);
      texture(imgGMTbCurrent);
      sphere(256, 48, 48); //>>>>>>>>>>>>>>>>>>>>>>>>>BLUE
      //
      ambientMaterial(0, 1);
      texture(imgGMTrCurrent);
      sphere(256, 48, 48); //>>>>>>>>>>>>>>>>>>>>>>>>>RED
      //
    }
  }
  pop();
}

function setRedStraight() {
  if (redX % 3.75 != 0) {
    var realNumX = redX / 3.75;
    var roundedNumX = round(realNumX);
    //print(realNum + " | " + roundedNum);
    redX = roundedNumX * 3.75;
  }
  if (redY % 15 != 0) {
    var realNumY = redY / 15;
    var roundedNumY = round(realNumY);
    //print(realNum + " | " + roundedNum);
    redY = roundedNumY * 15;
  }
}

function setBlueStraight() {
  if (blueX % 3.75 != 0) {
    var realNumX = blueX / 3.75;
    var roundedNumX = round(realNumX);
    //print(realNum + " | " + roundedNum);
    blueX = roundedNumX * 3.75;
  }
  if (blueY % 15 != 0) {
    var realNumY = blueY / 15;
    var roundedNumY = round(realNumY);
    //print(realNum + " | " + roundedNum);
    blueY = roundedNumY * 15;
  }
}

/*
function fovCalc() {
  var fov1 = width;
  var fov2 = height;
  var fov3 = 1280;
  var fov4 = 720;
  var fovd = degrees(fov);
  var fovmon = (fov1 / fov2) / (fov3 / fov4);
  var radian = Math.PI / 180;
  var degree = 180 / Math.PI;

  var fovOutval = Math.round((2 * Math.atan(fovmon * Math.tan(fovd / 2 * radian))) * degree * Math.pow(10, 2)) / Math.pow(10, 2);
  print( fovOutval );
}
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////CONTROL////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function mousePressed() {

  //replace A and B by thetaA and phiA  
  easedDeltaX = 0;

  if (onWhite) {
    whiteSelected = true;
    A = mouseX; //in degrees
    C = touchTheta; // in radians
    startX = angleX;
  } else {
    A = mouseY;
    C = touchTheta;
    B = mouseX;
    D = touchPhi;

  }

  if (onBlue && !onRed) {
    blueSelected = true;
    startBlueX = blueX;
    startBlueY = blueY;
  }

  if (onRed && !onBlue) {
    redSelected = true; //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    startRedX = redX;
    startRedY = redY;
  }

  if (onRed && onBlue) {
    redSelected = true; //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    startRedX = redX;
    startRedY = redY;
  }

  //print("pressed : " + angleX);
  startY = mouseY;
  // prevent default

  return false;
}
/*
function touchStarted() {
  if (isAndroid) {

  } else {
    if (onWhite) {
      whiteSelected = true;
      A = mouseX; //in degrees
      C = touchTheta; // in radians
      startX = angleX;
    } else {
      A = mouseY;
      C = touchTheta;
      B = mouseX;
      D = touchPhi;

    }

    if (onBlue && !onRed) {
      blueSelected = true;
      startBlueX = blueX;
      startBlueY = blueY;
    }

    if (onRed && !onBlue) {
      redSelected = true; //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      startRedX = redX;
      startRedY = redY;
    }

    if (onRed && onBlue) {
      redSelected = true; //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      startRedX = redX;
      startRedY = redY;
    }

    //print("pressed : " + angleX);
    startY = mouseY;
    // prevent default
  }
  return false;
}
*/


/////////////REPLACE mouseReleased()////////////
function mouseReleased() {

  if (!isAndroid) {

    if (whiteSelected) {
      whiteSelected = false;
      // print("set nothing");
    } else if (blueSelected) {
      setBlueStraight();
      setRed = true;
      blueSelected = false;
      // print("set RED");
    } else if (redSelected) {
      setRedStraight();
      setBlue = true;
      redSelected = false;
      //  print("set BLUE");
    }
    //easedDeltaX = 0;
    //print("width = " + width + " | height" + height);

    return false;
  }

}
/*
function touchEnded() {

  if (whiteSelected) {
    whiteSelected = false;
    // print("set nothing");
  } else if (blueSelected) {
    setBlueStraight();
    setRed = true;
    blueSelected = false;
    // print("set RED");
  } else if (redSelected) {
    setRedStraight();
    setBlue = true;
    redSelected = false;
    //  print("set BLUE");
  }
  //print("width = " + width + " | height" + height);

  return false;
}
*/


function mouseWheel(event) {
  //print(event.delta);
  //move the square according to the vertical scroll amount
  //fov += event.delta / 8000;
  //print("width : " + width + " | fov : " + fov);
  // perspective(fov, width / height, 0.1, 1000);
  //uncomment to block page scrolling
  return false;
}

function keyPressed() {

  if (key == ' ') {
    if (isAndroid) {

    } else {
      drawTheCities = !drawTheCities;
    }
  }
  return false;
}


function windowResized() {

  if (isAndroid) {
    resizeCanvas(windowWidth, windowWidth);
  } else {
    adjustLayout();
    //
    menuON = false;
    shareON = false;
    htmlDrawer.attribute('style', 'width:' + width + 'px; height:' + height + 'px; background-color:rgba(240, 240, 240, .9)');
    //
    globeDiamInPx = height * ratioGlobeToHeight; //maybe ?
    globeRadiusInPx = globeDiamInPx / 2;
    //
    //fovCalc();
    perspective(fov, width / height, 0.1, 1000);
    cx = width / 2;
    cy = height / 2;
  }

}

////////////
/**
 * JavaScript Client Detection
 * (C) viazenetti GmbH (Christian Ludwig)
 */
(function(window) {
  {
    var unknown = '-';

    // screen
    var screenSize = '';
    if (screen.width) {
      width = (screen.width) ? screen.width : '';
      height = (screen.height) ? screen.height : '';
      screenSize += '' + width + " x " + height;
    }

    // browser
    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browser = navigator.appName;
    var version = '' + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;

    // Opera
    if ((verOffset = nAgt.indexOf('Opera')) != -1) {
      browser = 'Opera';
      version = nAgt.substring(verOffset + 6);
      if ((verOffset = nAgt.indexOf('Version')) != -1) {
        version = nAgt.substring(verOffset + 8);
      }
    }
    // Opera Next
    if ((verOffset = nAgt.indexOf('OPR')) != -1) {
      browser = 'Opera';
      version = nAgt.substring(verOffset + 4);
    }
    // Edge
    else if ((verOffset = nAgt.indexOf('Edge')) != -1) {
      browser = 'Microsoft Edge';
      version = nAgt.substring(verOffset + 5);
    }
    // MSIE
    else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
      browser = 'Microsoft Internet Explorer';
      version = nAgt.substring(verOffset + 5);
    }
    // Chrome
    else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
      browser = 'Chrome';
      version = nAgt.substring(verOffset + 7);
    }
    // Safari
    else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
      browser = 'Safari';
      version = nAgt.substring(verOffset + 7);
      if ((verOffset = nAgt.indexOf('Version')) != -1) {
        version = nAgt.substring(verOffset + 8);
      }
    }
    // Firefox
    else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
      browser = 'Firefox';
      version = nAgt.substring(verOffset + 8);
    }
    // MSIE 11+
    else if (nAgt.indexOf('Trident/') != -1) {
      browser = 'Microsoft Internet Explorer';
      version = nAgt.substring(nAgt.indexOf('rv:') + 3);
    }
    // Other browsers
    else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
      browser = nAgt.substring(nameOffset, verOffset);
      version = nAgt.substring(verOffset + 1);
      if (browser.toLowerCase() == browser.toUpperCase()) {
        browser = navigator.appName;
      }
    }
    // trim the version string
    if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

    majorVersion = parseInt('' + version, 10);
    if (isNaN(majorVersion)) {
      version = '' + parseFloat(navigator.appVersion);
      majorVersion = parseInt(navigator.appVersion, 10);
    }

    // mobile version
    var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

    // cookie
    var cookieEnabled = (navigator.cookieEnabled) ? true : false;

    if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
      document.cookie = 'testcookie';
      cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
    }

    // system
    var os = unknown;
    var clientStrings = [{
      s: 'Windows 10',
      r: /(Windows 10.0|Windows NT 10.0)/
    }, {
      s: 'Windows 8.1',
      r: /(Windows 8.1|Windows NT 6.3)/
    }, {
      s: 'Windows 8',
      r: /(Windows 8|Windows NT 6.2)/
    }, {
      s: 'Windows 7',
      r: /(Windows 7|Windows NT 6.1)/
    }, {
      s: 'Windows Vista',
      r: /Windows NT 6.0/
    }, {
      s: 'Windows Server 2003',
      r: /Windows NT 5.2/
    }, {
      s: 'Windows XP',
      r: /(Windows NT 5.1|Windows XP)/
    }, {
      s: 'Windows 2000',
      r: /(Windows NT 5.0|Windows 2000)/
    }, {
      s: 'Windows ME',
      r: /(Win 9x 4.90|Windows ME)/
    }, {
      s: 'Windows 98',
      r: /(Windows 98|Win98)/
    }, {
      s: 'Windows 95',
      r: /(Windows 95|Win95|Windows_95)/
    }, {
      s: 'Windows NT 4.0',
      r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
    }, {
      s: 'Windows CE',
      r: /Windows CE/
    }, {
      s: 'Windows 3.11',
      r: /Win16/
    }, {
      s: 'Android',
      r: /Android/
    }, {
      s: 'Open BSD',
      r: /OpenBSD/
    }, {
      s: 'Sun OS',
      r: /SunOS/
    }, {
      s: 'Linux',
      r: /(Linux|X11)/
    }, {
      s: 'iOS',
      r: /(iPhone|iPad|iPod)/
    }, {
      s: 'Mac OS X',
      r: /Mac OS X/
    }, {
      s: 'Mac OS',
      r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
    }, {
      s: 'QNX',
      r: /QNX/
    }, {
      s: 'UNIX',
      r: /UNIX/
    }, {
      s: 'BeOS',
      r: /BeOS/
    }, {
      s: 'OS/2',
      r: /OS\/2/
    }, {
      s: 'Search Bot',
      r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
    }];
    for (var id in clientStrings) {
      var cs = clientStrings[id];
      if (cs.r.test(nAgt)) {
        os = cs.s;
        break;
      }
    }

    var osVersion = unknown;

    if (/Windows/.test(os)) {
      osVersion = /Windows (.*)/.exec(os)[1];
      os = 'Windows';
    }

    switch (os) {
      case 'Mac OS X':
        osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
        break;

      case 'Android':
        osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
        break;

      case 'iOS':
        osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
        osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
        break;
    }

    // flash (you'll need to include swfobject)
    /* script src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js" */
    var flashVersion = 'no check';
    if (typeof swfobject != 'undefined') {
      var fv = swfobject.getFlashPlayerVersion();
      if (fv.major > 0) {
        flashVersion = fv.major + '.' + fv.minor + ' r' + fv.release;
      } else {
        flashVersion = unknown;
      }
    }
  }

  window.jscd = {
    screen: screenSize,
    browser: browser,
    browserVersion: version,
    browserMajorVersion: majorVersion,
    mobile: mobile,
    os: os,
    osVersion: osVersion,
    cookies: cookieEnabled,
    flashVersion: flashVersion
  };
}(this));
/*
alert(
    'OS: ' + jscd.os +' '+ jscd.osVersion + '\n' +
    'Browser: ' + jscd.browser +' '+ jscd.browserMajorVersion +
      ' (' + jscd.browserVersion + ')\n' + 
    'Mobile: ' + jscd.mobile + '\n' +
    'Flash: ' + jscd.flashVersion + '\n' +
    'Cookies: ' + jscd.cookies + '\n' +
    'Screen Size: ' + jscd.screen + '\n\n' +
    'Full User Agent: ' + navigator.userAgent
);
*/
