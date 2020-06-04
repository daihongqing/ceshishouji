$(function () {
  // 实现导航栏的折叠效果
  function foldFn() {
    let $user = $('header .user span');
    $user.on('click', function () {
      $('header .user ul').slideToggle(300);
    })
  }
  foldFn();
  var clock = $('.your-clock').FlipClock({
  });
  clock.setTime(3600)
  clock.stop()


  let $tabs = $('.selectBox .tab span')
  let $teachBox = $('.selectBox .teachBox')
  $tabs.on('click', function () {
    $(this).addClass('current').siblings().removeClass('current');
    $teachBox.eq([$(this).index()]).addClass('show').siblings().removeClass('show');
  });

})