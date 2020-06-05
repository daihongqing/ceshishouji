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
  let navBox = $('#first .navCurrent').children().each(function (indexInArray, valueOfElement) {
    if (valueOfElement) {
      $(`#${valueOfElement.id}`).accordion({
        collapsible: true,
        icons: icons,
        heightStyle: "content"
      });
    }
  });
  // video
  function video() {
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
    // 动态设置播放地址
    // player.src('https://website.mobike.com/%E5%AE%98%E7%BD%91/%E6%91%A9%E6%8B%9C%E7%A7%91%E6%8A%80.mp4.f30.mp4')
    // ==>视频播放结束
    player.on("ended", function () {
      console.log("视频播放结束");
    })

    // ==>点击暂停的时候
    player.on("pause", function () {
      console.log("点击暂停");
    })

    // ==>视频播放中(持续发送)
    let timer = setInterval(() => {
      // player.currentTime()  ====>播放时间
      // console.log(player.currentTime())
      // $.ajax({
      //   type: "method",
      //   url: "url",
      //   data: "data",
      //   dataType: "dataType",
      //   success: function (response) {

      //   }
      // });
    }, 2000);

  }
  video()

  // 时间插件
  var clock = $('.your-clock').FlipClock({
  });
  clock.setTime(0)
  clock.stop()

  let $tabs = $('main .tab span')
  let $teachBox = $('.currentBox .desction')
  $tabs.on('touchstart', function () {
    $(this).addClass('current').siblings().removeClass('current');
    $teachBox.eq([$(this).index()]).addClass('show').siblings().removeClass('show');
  });



});