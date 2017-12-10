$(document).ready(function () {
  showMenu();
});

function showMenu() {
$('#menu>ul>li').after('<span class="glyphicon glyphicon-menu-down"></span>')
  $('#menu>ul>li').click(function () {
    if ($(this).hasClass('active')) {
      $(this).children('.sub-menu').slideUp();
      $(this).removeClass('active');
    } else {
      $('.sub-menu').slideUp();
      $(this).children('.sub-menu').slideDown();
      $('#menu>ul>li').removeClass('active');
      $(this).addClass('active');
    }
  })
}

