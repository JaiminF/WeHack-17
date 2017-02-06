var setLogo = function() {
 
};
 
$(document).scroll(function() {
  setLogo();
});
 
setLogo();
var setLogo = function() {
 
  $('.moveable').each(function() {
    $(this).css('top',
      $('.default').offset().top -
      $(this).closest('.logo-img').offset().top
    );
  });
 
};