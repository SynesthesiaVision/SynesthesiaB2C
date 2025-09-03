let videoIndex = 0;
const videoSlides = document.querySelectorAll(".video-slide");
const totalVideos = videoSlides.length;

function postMessageToPlayer(player, command) {
  if (player && player.contentWindow) {
    player.contentWindow.postMessage(
      JSON.stringify(command),
      "https://www.youtube.com"
    );
  }
}

function pauseAllVideos() {
  videoSlides.forEach((slide) => {
    const iframe = slide.querySelector("iframe");
    if (iframe) {
      postMessageToPlayer(iframe, { event: "command", func: "pauseVideo" });
    }
  });
}

function showVideo(index) {
  videoSlides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
  pauseAllVideos();
}

document.querySelector(".next-video").addEventListener("click", () => {
  videoIndex = (videoIndex + 1) % totalVideos;
  showVideo(videoIndex);
});

document.querySelector(".prev-video").addEventListener("click", () => {
  videoIndex = (videoIndex - 1 + totalVideos) % totalVideos;
  showVideo(videoIndex);
});

// inicia exibindo o primeiro
showVideo(videoIndex);
