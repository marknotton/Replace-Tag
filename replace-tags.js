(function($, window, undefined){

  $.extend({
    replaceTags: function (currentElem, newTagObj, removeProps) {
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
    replaceTags: function (newTagObj, removeProps) {
      // "return" suggested by ColeLawrence
      return this.each(function() {
          jQuery.replaceTags(this, newTagObj, removeProps);
      });
    }
  });


})( jQuery );
