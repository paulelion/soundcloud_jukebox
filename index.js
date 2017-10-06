//SC API - buttons

SC.initialize({
  client_id: "fd4e76fc67798bfa742089ed619084a6"
});


SC.get("/tracks", {
  user_id: 3514469
}).then(function(tracks, title) {
  console.log(title);
  var i = 0;

  nextButton = document.getElementById("next");
  nextButton.addEventListener("click", function() {
    i = i + 1;

    SC.stream("tracks/" + tracks[i].id).then(function(player) {
      player.play();
      var songTitle = document.getElementById("song-title");
      songTitle.innerHTML = tracks[i].title;
    });
  });

  playButton = document.getElementById("play");
  playButton.addEventListener("click", function() {
    SC.stream("tracks/" + tracks[i].id).then(function(player) {
      var songTitle = document.getElementById("song-title");
      songTitle.innerHTML = tracks[i].title;
      player.play();
      pauseButton = document.getElementById("pause");
      pauseButton.addEventListener("click", function() {
        player.play();
        player.pause();
      });
    });
  });

  previousButton = document.getElementById("previous");
  previousButton.addEventListener("click", function() {
    i = i + -1;

    SC.stream("tracks/" + tracks[i].id).then(function(player) {
      player.play();
      var songTitle = document.getElementById("song-title");
      songTitle.innerHTML = tracks[i].title;
    });
  });
});

