var data = {};
onEvent("diet_predict", "click", function() {
    addPair(data, "WhatwasyouroriginalweightinKg", getText("WhatwasyouroriginalweightinKg_input"));
		addPair(data, "Inhowmanymonthsdidyouloseyourweight", getText("Inhowmanymonthsdidyouloseyourweight_input"));
		addPair(data, "WhatwasyourfinalweightKg", getText("WhatwasyourfinalweightKg_input"));
		addPair(data, "Howactivewereyouperweekbeforethediet", getText("Howactivewereyouperweekbeforethediet_dropdown"));
		addPair(data, "Whatwasyourolddiet", getText("Whatwasyourolddiet_dropdown"));
		addPair(data, "Doyouwalktoworkorschoolbeforestarting", getText("Doyouwalktoworkorschoolbeforestarting_dropdown"));
		addPair(data, "Areyouavegetarianornot", getText("Areyouavegetarianornot_dropdown"));
		addPair(data, "Areyouallergicorintoleranttosomefoods", getText("Areyouallergicorintoleranttosomefoods_dropdown"));
		addPair(data, "Howmuchtimedidyouuseonexerciseordietperday", getText("Howmuchtimedidyouuseonexerciseordietperday_dropdown"));
    setText("diet_prediction", '');
    getPrediction("diet", "Fiv7h7LZGJTW", data, function(value) {
      setText("diet_prediction", value);
    });
  });
onEvent("button1", "click", function( ) {
	console.log("button1 clicked!");
	setScreen("screen2");
});
