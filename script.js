function showAlertIOS() {
  changeVideo("vids/holymoly.mp4");
}

function showAlertANDROID() {
  changeVideo("vids/holymoly.mp4");
}

// ... (the rest of your code)




function changeVideo(videoSrc) {
  // Get the image element by class name
  var imgElement = document.querySelector('.grid-item.item2 img');

  // Check if the imgElement is found
  if (imgElement) {
    // Change the src attribute to the new video source
    imgElement.src = videoSrc;

    // Create a video element
    var videoElement = document.createElement('video');
    videoElement.src = videoSrc;
    videoElement.controls = true;

    // Set the volume to 0.1 initially
    videoElement.volume = 0.1;

    // Set width and height of the video element
    videoElement.width = 640; // Adjust the width as needed
    videoElement.height = 360; // Adjust the height as needed

    // Add event listener for the "play" event
    videoElement.addEventListener('play', function () {
      // Remove the image when the video starts playing
      imgElement.style.display = 'none';
    });

    // Add event listener for the "ended" event
    videoElement.addEventListener('ended', function () {
      // Show the image again when the video ends
      imgElement.style.display = 'block';

      // Increase the volume by 0.1 (10%) every time the video ends
      videoElement.volume += 0.1;

      // Loop the video
      videoElement.currentTime = 0;
      videoElement.play();
    });

    // Append the video element to the "iphonescreen" div
    var iphonescreen = document.querySelector('.grid-item.item2 .iphonescreen');
    if (iphonescreen) {
      iphonescreen.appendChild(videoElement);

      // Play the video immediately
      videoElement.play();
    } else {
      console.error('iphonescreen element not found');
    }
  } else {
    console.error('Image element not found');
  }
}
