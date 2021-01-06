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


var motdList = [
	"Don't Dead, Open Inside",
	"Don't cry for me, I'm already dead",
	"Serving up spooks 24/7",
	"Double dead!",
	"Get cranking!",
	"What do you mean I'm just a webpage?"
];

var getRandom = function(bound){
	return Math.floor(Math.random() * Math.floor(bound));
}

document.getElementById('motd').innerHTML = motdList[getRandom(motdList.length)];

