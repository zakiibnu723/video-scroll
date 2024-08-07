// var frameNumber = 0, // start video at frame 0
//     // lower numbers = faster playback
//     playbackConst = 1100, 
//     // get page height from video duration
//     setHeight = document.getElementById("set-height"), 
//     // select video element         
//     vid = document.getElementById('hero-video'); 

// // dynamically set the page height according to video length
// vid.addEventListener('loadedmetadata', function() {
//   setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
// });

// // Use requestAnimationFrame for smooth playback
// function scrollPlay(){  
//   var frameNumber  = window.pageYOffset/playbackConst;
//   vid.currentTime  = frameNumber;
//   window.requestAnimationFrame(scrollPlay);
// }

// window.requestAnimationFrame(scrollPlay);


const heroContainer = document.querySelector('.hero-container')
const heroVid = document.getElementById('hero-video')

heroVid.pause()

const containerHeight = heroContainer.clientHeight
const heroVidHeight = heroVid.clientHeight

const videoScrolling = () => {
  let scrollY = window.scrollY
  let scrollRatio = Math.min(scrollY / (containerHeight - heroVidHeight), 1)
  // const heroVidDuration = heroVid.duration
  heroVid.currentTime = heroVid.duration * scrollRatio
  // console.log('containerheight: ' + containerHeight)
  // console.log('scroll y: ' + scrollY)
  // console.log('scrollRatio: ' + scrollRatio)
  console.log('currentTime' + heroVid.duration * scrollRatio)
}

// videoScrolling()

document.addEventListener('scroll', videoScrolling)







