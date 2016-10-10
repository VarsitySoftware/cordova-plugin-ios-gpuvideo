/*global cordova,window,console*/
/**
 * A Social Sharing for Twitter plugin for Cordova
 * 
 * Developed by John Weaver for Varsity Software
 */


var GPUVideo = function ()
    {

    };

    GPUVideo.prototype.startVideo = function (success, fail, options)
    {
        if (!options) {
            options = {};
        }

        var params = {
            videoURL: options.videoURL ? options.videoURL : null,
        };

        return cordova.exec(success, fail, "GPUVideo", "startVideo", [params]);

    };

    GPUVideo.prototype.pauseVideo = function (success, fail, options)
    {
        return cordova.exec(success, fail, "GPUVideo", "pauseVideo", null);

    };

    GPUVideo.prototype.playVideo = function (success, fail, options)
    {
        return cordova.exec(success, fail, "GPUVideo", "playVideo", null);

    };

    GPUVideo.prototype.stopVideo = function (success, fail, options)
    {
        return cordova.exec(success, fail, "GPUVideo", "stopVideo", null);

    };

    window.gpuVideo = new GPUVideo();
