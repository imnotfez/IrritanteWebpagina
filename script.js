function showAlertIOS() {
  changeVideo("vids/whistle.mp4");

}

function showAlertANDROID() {
  changeVideo("vids/whistle.mp4");
  let titleElement = document.querySelector('.grid-item.item3 .Title');
  let textElement = document.querySelector('.grid-item.item3 .Text');

  titleElement.innerText = 'Whistle';
  textElement.innerText = 'Can you blow my whistle baby, whistle baby let me know, Girl im gonna show you how to do it, And we start real slow You just put your lips together  And youcome real close Can you blow my whistle baby';
}


function changeVideo(videoSrc) {
  // Haal het afbeeldingselement op via de klassenaam
  var imgElement = document.querySelector('.grid-item.item2 img');

  // Controleer of het imgElement is gevonden
  if (imgElement) {
    // Verander het src-attribuut naar de nieuwe videosource
    imgElement.src = videoSrc;

    // Maak een video-element aan
    var videoElement = document.createElement('video');
    videoElement.src = videoSrc;
    videoElement.controls = true;

    // Zet het volume in het begin op 0.1
    videoElement.volume = 0.1;

    // Stel breedte en hoogte van het video-element in
    videoElement.width = 640; // Pas de breedte aan indien nodig
    videoElement.height = 360; // Pas de hoogte aan indien nodig

    // Voeg een gebeurtenisluisteraar toe voor het "play"-evenement
    videoElement.addEventListener('play', function () {
      // Verwijder de afbeelding wanneer de video begint af te spelen
      imgElement.style.display = 'none';
    });

    // Voeg een gebeurtenisluisteraar toe voor het "ended"-evenement
    videoElement.addEventListener('ended', function () {
      // Toon de afbeelding opnieuw wanneer de video eindigt
      imgElement.style.display = 'block';

      // Verhoog het volume met 0.1 (10%) telkens wanneer de video eindigt
      videoElement.volume += 0.1;

      // Herhaal de video
      videoElement.currentTime = 0;
      videoElement.play();
    });

    // Voeg het video-element toe aan de "iphonescreen" div
    var iphonescreen = document.querySelector('.grid-item.item2 .iphonescreen');
    if (iphonescreen) {
      iphonescreen.appendChild(videoElement);

      // Speel de video onmiddellijk af
      videoElement.play();
    } else {
      console.error('iphonescreen-element niet gevonden');
    }
  } else {
    console.error('Afbeeldingselement niet gevonden');
  }
}