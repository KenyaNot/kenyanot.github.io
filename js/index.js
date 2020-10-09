var player = videojs('video');
videojs(document.querySelector('video')).playlistUi();

queue = [];

var addItem = function(name, url, type){
	queue.push({
		name: name,
		sources: [{
			src: url,
			type: type
		}]
	})
	player.playlist(queue);
}

player.playlist(queue);
player.playlistUi();
player.playlist.autoadvance(0);