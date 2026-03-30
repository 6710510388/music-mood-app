const playlists = {
  happy: "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC",
  sad: "https://open.spotify.com/embed/playlist/37i9dQZF1DX7qK8ma5wgG1",
  chill: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6"
};

function showPlaylist(mood) {
  const player = document.getElementById("player");

  player.innerHTML = `
    <iframe 
      src="${playlists[mood]}" 
      width="300" 
      height="380" 
      frameborder="0" 
      allow="encrypted-media">
    </iframe>
  `;
}
function showPlaylist(mood) {
  document.getElementById("player").innerHTML = `
    <iframe src="${playlists[mood]}" width="300" height="380"></iframe>
  `;
}
function analyzeMood() {
  const text = document.getElementById("textInput").value;

  if (text.includes("เหนื่อย") || text.includes("เศร้า")) {
    showPlaylist("sad");
  } else if (text.includes("ดีใจ") || text.includes("สนุก")) {
    showPlaylist("happy");
  } else {
    showPlaylist("chill");
  }
}
