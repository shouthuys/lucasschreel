function openSlideMenu(){
    document.getElementById('main-nav').style.width = '250px';
  }

  function closeSlideMenu(){
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if(width < 600){
      document.getElementById('main-nav').style.width = '0';
    }
  }

  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      width:'100%',
      videoId: 'eUYU2z4tlrQ'
    });
  }
