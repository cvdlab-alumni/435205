
	video1 = document.createElement( 'video' );
		video1.src = "assets/movies/WaltDisney.mp4";
		video1.onPlay = false;

	videoImage1 = document.createElement( 'canvas' );
		videoImage1.width = 428;
		videoImage1.height = 240;

	videoImageContext1 = videoImage1.getContext( '2d' );
		videoImageContext1.fillStyle = '#000000';
		videoImageContext1.fillRect( 0, 0, videoImage1.width, videoImage1.height );

	videoTexture1 = new THREE.Texture( videoImage1 );
		videoTexture1.minFilter = THREE.LinearFilter;
		videoTexture1.magFilter = THREE.LinearFilter;

	video2 = document.createElement( 'video' );
		video2.src = "assets/movies/Proietti.mp4";
		video2.onPlay = false;

	videoImage2 = document.createElement( 'canvas' );
		videoImage2.width = 320;
		videoImage2.height = 180;

	videoImageContext2 = videoImage2.getContext( '2d' );
		videoImageContext2.fillStyle = '#000000';
		videoImageContext2.fillRect( 0, 0, videoImage2.width, videoImage2.height );

	videoTexture2 = new THREE.Texture( videoImage2 );
		videoTexture2.minFilter = THREE.LinearFilter;
		videoTexture2.magFilter = THREE.LinearFilter;

	video3 = document.createElement( 'video' );
		video3.src = "assets/movies/TheLastOfUs.mp4";
		video3.onPlay = false;

	videoImage3 = document.createElement( 'canvas' );
		videoImage3.width = 640;
		videoImage3.height = 360;

	videoImageContext3 = videoImage3.getContext( '2d' );
		videoImageContext3.fillStyle = '#000000';
		videoImageContext3.fillRect( 0, 0, videoImage3.width, videoImage3.height );

	videoTexture3 = new THREE.Texture( videoImage3 );
		videoTexture3.minFilter = THREE.LinearFilter;
		videoTexture3.magFilter = THREE.LinearFilter;

	video4 = document.createElement( 'video' );
		video4.src = "assets/movies/Apple.mp4";
		video4.onPlay = false;

	videoImage4 = document.createElement( 'canvas' );
		videoImage4.width = 640;
		videoImage4.height = 360;

	videoImageContext4 = videoImage4.getContext( '2d' );
		videoImageContext4.fillStyle = '#000000';
		videoImageContext4.fillRect( 0, 0, videoImage4.width, videoImage4.height );

	videoTexture4 = new THREE.Texture( videoImage4 );
		videoTexture4.minFilter = THREE.LinearFilter;
		videoTexture4.magFilter = THREE.LinearFilter;			

function makeTv(x,y, video,videoTexture) {

	var tvGeometry = new THREE.PlaneGeometry( x, y);
	var tvMaterial = new THREE.MeshBasicMaterial( { map: videoTexture, overdraw: true } );	
	var tv = new THREE.Mesh(tvGeometry,tvMaterial);
	tv.video = video;
	// tv.visible = false;

	tv.interact = function() {
		if (tv.video.onPlay) {
			tv.video.pause();
			tv.video.onPlay = false;
		} else {
			tv.video.play();
			tv.video.onPlay = true;
		}	
	}	

	return tv;

}

function makeTvs() {
	var tvs = new THREE.Object3D();

	tv1 = makeTv(0.5,0.25,video2,videoTexture2);
	tv1.position.set(13, 1.45, 1.25);
	tv1.rotation.x = -Math.PI/2;
	tv1.rotation.z = Math.PI;
	tvs.add(tv1);

	tv2 = makeTv(1,0.55,video1,videoTexture1);
	tv2.position.set(13, 9.2, 1.25);
	tv2.rotation.x = -Math.PI/2;
	tv2.rotation.z = Math.PI;
	tv2.rotation.y = Math.PI;
	tvs.add(tv2);

	tv3 = makeTv(0.6,0.3,video3,videoTexture3);
	tv3.position.set(6.11, 11.52, 1.138);
	tv3.rotation.x = -Math.PI/2;
	tv3.rotation.z = Math.PI;
	tv3.rotation.y = -Math.PI/2;
	tvs.add(tv3);

	imac = makeTv(0.2,0.18,video4,videoTexture4);
	imac.position.set(6.2, 13.65, 0.9);
	imac.rotation.x = -Math.PI/2;
	imac.rotation.z = Math.PI;
	imac.rotation.y = -Math.PI/2;
	tvs.add(imac);

	return tvs;
}