$(document).ready(function() {

  var fontSizes = [84,36,72,48,12];
  var newSize=0;

  // start counting and updating clock
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    // even
    if (s%2 == 0) {
      console.log(s%2 + " = EVEN");
      $("#txt").css("color", "blue");
    }
    // odd
    else if (s%2 == 1) {
      console.log(s%2 + " = ODD");
      $("#txt").css("color", "orange");
    }

    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    $("#txt").html(h + ":" + m + ":" + s);
    setTimeout(startTime, 500);
  }

  // add a zero in front of single digit numbers
  function checkTime(i) {
    // i = 1
    if (i < 10) {
      i = "0" + i
    }
    return i;
  }

  // change background color from red to white, vice versa
  function changeBackground(){
    if($("body").css("background-color")=="rgb(255, 0, 0)") {
      $("body").css("background-color", "rgb(255, 255, 255)");
    }
    else if ($("body").css("background-color")=="rgb(255, 255, 255)") {
      $("body").css("background-color", "rgb(255, 0, 0)");
    }
    setTimeout(changeBackground,300000);
  }

  // traverse array
  function fontArray(i) {
    if (i < fontSizes.length-1) {
      newSize = i+1;
      console.log(newSize);
    }
    else {
      newSize=0;
    }
    return newSize;
  }

  // change font every hour
  function changeFont(){
    $("#txt").css("font-size", fontSizes[fontArray(newSize)]);
    setTimeout(changeFont,3600000);
  }

  $("body").css("background-color","white");  
  changeBackground();
  changeFont();
  startTime();
});


