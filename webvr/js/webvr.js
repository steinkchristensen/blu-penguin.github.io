var AFRAME = require('aframe');

var stereoComponent = require('aframe-stereo-component').stereo_component;
AFRAME.registerComponent('stereo', stereoComponent);

var stereocamComponent = require('aframe-stereo-component').stereocam_component;
AFRAME.registerComponent('stereocam', stereocamComponent);

// var NoClickLookControls = require('aframe-no-click-look-controls');
// AFRAME.registerComponent('no-click-look-controls', NoClickLookControls);