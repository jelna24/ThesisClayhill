/**
 * Created by Asus on 2017-10-13.
 */
(function ($){
  Drupal.behaviors.myModuleBehavior = {
    attach: function (context, settings) {
      $(document).scroll(function () { // check if scroll event happened
        if ($(document).scrollTop() > 60) { // check if user scrolled more than 60 from top of the browser window
          $(".navbar-default").css("background-color", "#444444"); // if yes, then change the color of class "navbar-default" to #444444
        } else {
          $(".navbar-default").css("background-color", "transparent"); // if not, change it back to transparent
        }
      }); //for main navigation

      $(document).ready(function () {
        DropdownToggle();
      });

      function DropdownToggle() {
        $('.dropdown-toggle').removeAttr("data-toggle");
      } //for dropdown toggle

      $(".navbar-default .navbar-nav li a ").hover(
        function() {
          $(this).css('color', '#1ABC9C');
        }, function() {
          $(this).css('color', '#ffffff');
        }); //for changing the color when i hover in nav

      $('a[href="/services"] , a[href="/aboutus"]').click(function(){
        return false;
      });//to make some links unclickable 



    }
  }
})(jQuery);
