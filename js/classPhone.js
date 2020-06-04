$(function () {
  var icons = {
    header: "icon-jiahao iconfont",
    activeHeader: "icon-jianhao iconfont "
  };
  $("#first").accordion({
    collapsible: true,
    icons: icons,
    heightStyle: "content"
  });
  $("#second").accordion({
    collapsible: true,
    icons: icons,
    heightStyle: "content"
  });
  $("#third").accordion({
    collapsible: true,
    icons: icons,
    heightStyle: "content"
  });

  var player = new videojs(document.getElementById('myVideo'), {
    autoplay: true,// 自动播放：true/false
    controls: true, // 是否显示底部控制栏：true/false
    aspectRatio: "16:9", // 将播放器置于流体模式下（如“16:9”或“4:3”）
    loop: false, // 是否循环播放:true/false
    muted: false, // 设置默认播放音频：true/false
    preload: "auto",
    fluid: true, // 是否自适应布局
    inactivityTimeout: 0, // 闲置超时
    nativeControlsForTouch: false, // 是否使用浏览器原生的控件
    language: 'zh-CN',
    controlBar: {
      children: [
        { name: 'playToggle' }, // 播放按钮
        { name: 'currentTimeDisplay' }, // 当前已播放时间
        { name: 'progressControl' }, // 播放进度条
        { name: 'durationDisplay' }, // 总时间
        {
          name: 'volumePanel', // 音量控制
          inline: false, // 不使用水平方式
        },
        { name: 'FullscreenToggle' } // 全屏
      ]
    },
    sources: [ // 视频源
      {
        src: 'https://campaign.mobike.com/odin/static/video/big_mobike.mp4',
        type: 'video/mp4',
      }
    ]
  }, function () {
    console.log('视频可以播放了', this);
  });

  var clock = $('.your-clock').FlipClock({
  });
  clock.setTime(0)
  // clock.stop()

  let $tabs = $('main .tab span')
  let $teachBox = $('.currentBox .desction')
  $tabs.on('touchstart', function () {
    $(this).addClass('current').siblings().removeClass('current');
    $teachBox.eq([$(this).index()]).addClass('show').siblings().removeClass('show');
  });
});