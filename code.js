( { 
exec1: "log.debug( 'Downloaded basic code from https://github.com/pockata/blackbird-js - RH' );|\
log.debug( 'Download this working demo site code from https://github.com/rlholland/blackbird.git' );|\
log.info( 'Robert Holland!' );|\
log.warn( 'This is a warning message!' );|\
log.error( 'This is an error message' );",

profiling: "log.profile( 'generate test string' );|\
|\
var testContent = '';|\
for ( var i = 0; i < 3000; i++ ) {|\
  testContent += '-';|\
}|\
|\
log.profile( 'generate test string' );",

inpage: '<html>|\
  <head>|\
    <script type="text/javascript" src="blackbird.js"></script>|\
    <link type="text/css" rel="Stylesheet" href="blackbird.css" />|\
    ...|\
  </head>|\
  ...',

override: "var log = {|\
  toggle: function() {},|\
  move: function() {},|\
  resize: function() {},|\
  clear: function() {},|\
  debug: function() {},|\
  info: function() {},|\
  warn: function() {},|\
  error: function() {},|\
  profile: function() {}|\
};" } )
