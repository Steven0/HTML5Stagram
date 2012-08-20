// Canvas-Hilfsbibliothek
define(['lib/vendor/jquery'], function(){

  var canvas, context;

  return {

    // Initialisierung; Variablen `canvas` und `context` neu belegen
    init: function(selector){
      canvas = $(selector);
      context = canvas[0].getContext('2d');
    },

    // Canvas komplett löschen
    reset: function(){
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    },

    // Inhalt einer URL auf die Canvas malen
    drawURL: function(url, callback){
      var img = new Image();
      img.src = url;
      img.addEventListener('load', function(){
        canvas.attr({
          height: img.naturalHeight,
          width:  img.naturalWidth
        });
        context.drawImage(img, 0, 0);
        callback.call();
      }, false);
    }

  };

});