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
	"Don't cry for me, I'm already dead",
	"Serving up spooks 24/7",
	"Double dead!",
	"Get cranking!",
	"Only XXXX more days until Halloween",
	"Faithfully serving Ctarl-Ctarl across the galaxy",
	"Remember: Licking doorknobs is illegal on other planets",
	"Roll for initiative!",
	"We have such sights to show you...",
	"69, 420, and other such funny numbers",
	"Removed Herobrine",
	"FUCK VIACOM",
	"If I were in charge, dibs would be a bannable offense",
	"Ekat probably won't like this",
	"A fang-tastic new streaming utility"
];

var getRandom = function(bound){
	return Math.floor(Math.random() * Math.floor(bound));
}

document.getElementById('motd').innerHTML = motdList[getRandom(motdList.length)];

