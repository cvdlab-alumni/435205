function animateStereo() {

	var stereo = document.createElement('audio');
	var stereo_source = document.createElement('source');
	stereo_source.src = 'assets/sounds/Toy Story.mp3';
	stereo.appendChild(stereo_source);
	stereo.loop = false;
	stereo.onPlay = false;

	var stereoGeometry = new THREE.BoxGeometry(2,1,1);
	var stereoMaterial = new THREE.MeshLambertMaterial({transparent: true, opacity: 0});
	stereo_Box = new THREE.Mesh(stereoGeometry, stereoMaterial);

	stereo_Box.audio = stereo;

	stereo_Box.interact = function() {
		if (stereo_Box.audio.onPlay) {
			stereo_Box.audio.pause();
			stereo_Box.audio.onPlay = false;
		} else {
			stereo_Box.audio.play();
			stereo_Box.audio.onPlay = true;
		}	
	}

	stereo_Box.rotation.y = Math.PI/2;
	stereo_Box.position.set(-44.5+42,10,27.8-46.5);

	return stereo_Box;

}

function updateAudio() {
		var distance = stereo_Box.position.distanceTo((!window.location.pointLock) ? camera.position : controlsFPS.getObject().position); 
		if(distance <= 30) {
			stereo_Box.audio.volume = 1 * ( 1 - distance/30 );
		}
		else {
			stereo_Box.audio.volume = 0;
	}
}