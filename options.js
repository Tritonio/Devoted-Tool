$(document).ready(function () {
	function getVersion() { 
		var version = 'NaN'; 
		var xhr = new XMLHttpRequest(); 
		xhr.open('GET', chrome.extension.getURL('manifest.json'), false); 
		xhr.send(null); 
		var manifest = JSON.parse(xhr.responseText); 
		return manifest.version; 
	} 
	$("#versionno").html(getVersion());
	$("#extrasubs").val(localStorage.extrasubs);
	$("#extraurls").val(localStorage.extraurls);
	var saveoptionstimer=setInterval(function () {
		localStorage.extrasubs=$("#extrasubs").val();
		localStorage.extraurls=$("#extraurls").val();
	},500);
});