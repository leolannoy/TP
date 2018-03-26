function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
}
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    checkConnection();
	var modele = device.model;
	var string = device.platform;
	var version = device.version;
	var deviceID = device.uuid;
	navigator.globalization.getPreferredLanguage(
    function (language) {alert(" Modèle: "+ modele+"\n Langage: "+ language.value + "\n Système d'exploitation et sa version :"+ string+" "+version+"\n UUID : "+ deviceID);},
    function () {alert('Error getting langage\n');}
);
	window.addEventListener("batterycritical", onBatteryCritical, false);
	window.addEventListener("batterystatus", onBatteryStatus, false);
	StatusBar.backgroundColorByName("blue");
	var options      = new ContactFindOptions();
	options.multiple = true;
	options.hasPhoneNumber = true;
	var fields       = ["*"];
	navigator.contacts.find(fields, onSuccess, onError, options);
}

function onBatteryStatus(status) {
    alert("Level: " + status.level + "% isPlugged: " + status.isPlugged);
}
function onBatteryCritical(status) {
    alert("Battery Level Critical " + status.level + "%\nRecharge Soon!");
}

function onSuccess(contacts) {
    alert('Found ' + contacts.length + ' contacts.');
	for(var i=0; i<=contacts.length; i++){
		$("ul").append("<li>"+contacts[i].displayName+"</li>");
	}
};

function onError(contactError) {
    alert('onError!');
};