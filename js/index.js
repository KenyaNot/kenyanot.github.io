// Init player and take input from form
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
	player.playlist(queue);}
player.playlist(queue);
player.playlistUi();
player.playlist.autoadvance(0);



// Pick MOTD and add to DOM
var motdList = [
	"Don't cry for me, I'm already dead",
	"Serving up spooks 24/7",
	"Double dead!",
	"Get cranking!",
	"Only XXX more days until Halloween",
	"Faithfully serving Ctarl-Ctarl across the galaxy",
	"Remember: Licking doorknobs is illegal on other planets",
	"Roll for initiative!",
	"We have such sights to show you...",
	"69, 420, and other such funny numbers",
	"Removed Herobrine",
	"FUCK VIACOM",
	"If I were in charge, dibs would be a bannable offense",
	"Ekat probably won't like this",
	"A fang-tastic new streaming utility",
	"I'm in love with an ant!",
	"Don't lose your way",
	"Makes your kokoro go doki doki",
	"This stream brought to you by Raid: Shadow Legends"];
var getRandom = function(bound){return Math.floor(Math.random() * Math.floor(bound));}
document.getElementById('motd').innerHTML = motdList[getRandom(motdList.length)];

// Take normal GDrive links and add the proper google API link to playlist - EXPERIMENTAL
// If successful, fold into addItem
var getAPILink = function(link){
	var linkFormat = "https://www.googleapis.com/drive/v3/files/FILE_ID/?key=AIzaSyAebO7daZ4oEQw3XNcO7Jim_9YPAmOb1rI&alt=media"
	var fragment = link.match(/[-\w]{25,}/);
	console.log("" + fragment);
	var newLink = "https://www.googleapis.com/drive/v3/files/";
	newLink = newLink.concat(fragment, "/?key=AIzaSyAebO7daZ4oEQw3XNcO7Jim_9YPAmOb1rI&alt=media");
	return newLink;
}

// test function call: getAPILink("https://drive.google.com/file/d/1EEjd0wHeDfYvNxT5rEfeYiLQHfG_Z0ps/view?usp=sharing");
