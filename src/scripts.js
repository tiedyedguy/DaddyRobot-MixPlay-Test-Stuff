window.addEventListener("load", function initMixer() {
  // Move the video by a static offset amount
  const offset = 0;
  moveIt(offset);
  mixer.display.position().subscribe(position => {
    this.console.log(position);
    $(".maindiv").css("top", position.connectedPlayer.top + "px");
    $(".maindiv").css("left", position.connectedPlayer.left + "px");
    $(".maindiv").css("height", position.connectedPlayer.height + "px");
    $(".maindiv").css("width", position.connectedPlayer.width + "px");
    //  videoOverlay.style.top = `${position.top}px`;
    //  videoOverlay.style.left = `${position.left}px`;
    //  videoOverlay.style.height = `${position.height}px`;
    //  videoOverlay.style.width = `${position.width}px`;
  });
  mixer.isLoaded();
  //setInterval(randommove, 1000);
});

function randommove() {
  moveIt(Math.floor(Math.random() * 600 + 1));
  console.log(mixer.display.getSettings());
}

function moveIt(offset) {
  console.log("Moving " + offset);
  mixer.display.moveVideo({
    top: offset,
    bottom: offset,
    left: offset,
    right: offset
  });
}
