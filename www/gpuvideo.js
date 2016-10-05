var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec');
	
var GPUImageExport = {};

GPUImageExport.takePicture = function(successCallback, errorCallback, options) {
	argscheck.checkArgs('fFO', 'GPUImageExport.takePicture', arguments);
    options = options || {};
	var getValue = argscheck.getValue;
	
	var saveToPhotoAlbum = !!options.saveToPhotoAlbum;
	
	var args = [saveToPhotoAlbum];

    exec(successCallback, errorCallback, "CDVGPUImage", "takePicture", args);
    
};
