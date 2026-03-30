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
