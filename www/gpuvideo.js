/*global cordova,window,console*/
/**
 * A Social Sharing for Twitter plugin for Cordova
 * 
 * Developed by John Weaver for Varsity Software
 */


var GPUVideo = function ()
    {

    };

    GPUVideo.prototype.playVideo = function (success, fail, options)
    {
        if (!options) {
            options = {};
        }

        var params = {
            fileURL: options.fileURL ? options.fileURL : null,
        };

        return cordova.exec(success, fail, "GPUVideo", "playVideo", [params]);

    };

    window.gpuVideo = new GPUVideo();
