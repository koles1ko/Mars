console.log(divide(4, 2));
console.log(divide(34, 2));

$(function () {

  $('.wrapper .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
    $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
    $('.wrapper .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#'+id).addClass('active-tab').fadeIn();
    return false;
  }); 

  $("#yak-1").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $("#yak-2").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $("#header-scroll").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $(".burger").on('click', function(){
    $(".header__menu").toggleClass("active");
  }); 

  $("#header__menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });


  //  $(".test").on('click', function(){
  //    $(".test").toggleClass("active");
  //  }); 
  // додбавление класса

//----------------------------------

  // $('.menu__btn').on('click', function(){
  //   $('.menu__list').slideToggle();
  // });
  // Для бургера!

//----------------------------------

  //   $('.class').slick({
  //   dots: true,
  //   arrows: false,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  // });
  // Обычный одиночный слайдер!

//----------------------------------

  //  $('.slider-for').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   asNavFor: '.slider-nav'
  // });
  // $('.slider-nav').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   asNavFor: '.slider-for',
  //   dots: true,
  //   centerMode: true,
  //   focusOnSelect: true
  // });
  // Двойной слайдер!

//----------------------------------

  // $('.wrapper .tab').on('click', function(event) {
  // var id = $(this).attr('data-id');
  //   $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
  //   $('.wrapper .tabs').find('.tab').removeClass('active');
  //   $(this).addClass('active');
  //   $('#'+id).addClass('active-tab').fadeIn();
  //   return false;
  // }); 
  //Для табов!

  // $("#menu").on("click", "a", function (event) {
  //   event.preventDefault();
  //   var id = $(this).attr('href'),
  //     top = $(id).offset().top;
  //   $('body,html').animate({ scrollTop: top }, 1500);
  // });
  // якоря
  //----------------------------------
});