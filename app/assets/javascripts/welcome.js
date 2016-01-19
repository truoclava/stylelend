'use-strict';
$(function(){
  $("#scaled-dimensions").show()
  var calculator = new Calculator();
});

function Calculator() {
  $("#submit").click(function () {
    var imageDimensions = $("input#image-dimensions").val();
    var boundDimensions = $("input#bound-dimensions").val();

    var boundDimensions = checkBoundDimensions(boundDimensions);
    var imageDimensions = checkImageDimensions(imageDimensions);

    scaleDimensions(boundDimensions, imageDimensions);
  })
  $("#clear").click(function () {
    $("#scaled-dimensions ul").children().remove();
  })
}

function checkBoundDimensions(boundDimensions) {
  var invalid = "Please enter width, height (ex. 200, 400)"
  var array = boundDimensions.split(", ")
  if ((array.length > 2) || array.some(isNaN)) {
    alert(invalid)
  }
  else {
    return array
  }
}

function checkImageDimensions(imageDimensions) {
  var invalid = "Please enter width, height, width, height (ex. 200, 400, 500, 600)"
  var array = imageDimensions.split(", ")
  if ((array.length % 2 != 0) || array.some(isNaN)) {
    alert(invalid)
  }
  else {
    return array
  }
}

function scaleDimensions(boundDimensions, imageDimensions) {
  maxWidth = parseFloat(boundDimensions[0]);
  maxHeight = parseFloat(boundDimensions[1]);

  for (i=0, j=imageDimensions.length; i<j; i+= 2) {
    imageDimension = imageDimensions.slice(i, i+2);
    width = parseFloat(imageDimension[0]);
    height = parseFloat(imageDimension[1]);
    if ((width > maxWidth) || (height > maxHeight)) {
      var ratio1 = maxWidth/width;
      var ratio2 = maxHeight/height;
      var ratio = Math.min(ratio1, ratio2);

      var newWidth = Math.round(width*ratio);
      var newHeight = Math.round(height*ratio);
    }
    addImage(width, height, newWidth, newHeight)
  }
}

function addImage(width, height, newWidth, newHeight) {
  var id = $("#scaled-dimensions ul").children().length + 1;
  $("#scaled-dimensions").show()
  var string = '<li id=image-'+ id + '>' + newWidth + 'x' + newHeight + '</li>';
  $("#scaled-dimensions ul").append(string)
}

//   width = parseFloat(num1);
//   height = parseFloat(num2);
//   maxWidth = parseFloat(num3);
//   maxHeight = parseFloat(num4);
//
//   if ((width > maxWidth) || (height > maxHeight)) {
//     var ratio1 = maxWidth/width;
//     var ratio2 = maxHeight/height;
//     var ratio = Math.min(ratio1, ratio2);
//
//     var width = Math.round(width * ratio);
//     var height = Math.round(height * ratio);
//   }
//   $('#number5').val(width);
//   $('#number6').val(height);
// }
