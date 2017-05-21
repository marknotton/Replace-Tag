(function($, window, undefined){

  $.extend({
    replaceTag: function (currentElem, newTagObj, removeProps) {
      var $currentElem = $(currentElem);
      var i, $newTag = $(newTagObj).clone();
      if (!removeProps) {
          newTag = $newTag[0];
          newTag.className = currentElem.className;
          $.extend(newTag.classList, currentElem.classList);
          $.extend(newTag.attributes, currentElem.attributes);
      }
      $currentElem.wrapAll($newTag);
      $currentElem.contents().unwrap();
      // return node; (Error spotted by Frank van Luijn)
      return this; // Suggested by ColeLawrence
    }
  });

  $.fn.extend({
    replaceTag: function (newTagObj, removeProps) {
      // "return" suggested by ColeLawrence
      return this.each(function() {
          jQuery.replaceTag(this, newTagObj, removeProps);
      });
    }
  });


  // // Add the selector, function, and breakpoint rules into an array, to be called when the screen resizes
  // $.fn.replaceTag = function() {
  //   var args = Array.prototype.slice.call(arguments);

  //   if(typeof args[0] == 'number') {
  //     var delay = args.shift(), callback = args.shift();
  //   }
  //   else {
  //     var callback = args.shift();
  //   }
  //   if (typeof callback == 'function') {
  //     // Perform a few checks to make sure the selector that is being checked is valid
  //     var selector = this.selector !== undefined && this.selector !== null && $(this.selector).length ? this.selector : null;

  //     if (selector) {
  //       if ( delay && delay != 0) {
  //         setTimeout(function() {
  //           callback.apply($(selector), args);
  //         }, delay);
  //       } else {
  //         callback.apply($(selector), args);
  //       }
  //     }
  //   }
  // };

})( jQuery );
