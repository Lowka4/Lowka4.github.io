$(function () {
   let header = $('.header');
   let hederHeight = header.height(); // вычисляем высоту шапки

   $(window).scroll(function () {
      if ($(this).scrollTop() > 1) {
         header.addClass('header_fixed');
         $('body').css({
            'paddingTop': hederHeight + 'px' // делаем отступ у body, равный высоте шапки
         });
      } else {
         header.removeClass('header_fixed');
         $('body').css({
            'paddingTop': 0 // удаляю отступ у body
         })
      }
   });
});

var $page = $('html, body'); //Плавная прокрутка
$('a[href*="#"]').click(function () {
   $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
   }, 400);
   return false;
});
$(function () { $("a[href*=#]:not([href=#])").click(function () { if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) { var t = $(this.hash); if (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]"), t.length) return $("html,body").animate({ scrollTop: t.offset().top }, 300), !1 } }) }); //Плавный скролл



