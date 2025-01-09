

try {
  var myMstrPath = app.scriptArgs.getValue('masterPath');
  var myInddPath = File(myMstrPath);

  if (myInddPath.exists) {
    var myDoc = app.open(myInddPath);
    var myLayers = myDoc.layers;

    for (var l = 0; l < myLayers.length; l++) {
      var myLayer = myLayers[l];
      if (myLayer.name == "Grid") {
        myLayer.visible = false;
        myLayer.locked = true;
        break;
      }
    }

    var myOpFleNm = myMstrPath.replace(/\.indd$/, "");
    var newPath = File(myOpFleNm + "_updated.indd");
    myDoc.close(SaveOptions.YES, newPath);

    // Write success message to a file
    var resultFile = File(myOpFleNm + "_result.txt");
    resultFile.open('w');
    resultFile.write("Process completed");
    resultFile.close();
  } else {
    // File not found, handle error
    throw new Error("Input file not found: " + myMstrPath);
  }
} catch (error) {
  // Write error message to the result file
  var resultFile = File(myMstrPath.replace(/\.indd$/, "") + "_result.txt");
  resultFile.open('w');
  resultFile.write("Process Terminated with Error\n" + error.message);
  resultFile.close();
}

