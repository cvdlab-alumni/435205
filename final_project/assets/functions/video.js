
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

	video5 = document.createElement( 'video' );
		video5.src = "assets/movies/Aladin.mp4";
		video5.onPlay = false;

	videoImage5 = document.createElement( 'canvas' );
		videoImage5.width = 480;
		videoImage5.height = 360;

	videoImageContext5 = videoImage5.getContext( '2d' );
		videoImageContext5.fillStyle = '#000000';
		videoImageContext5.fillRect( 0, 0, videoImage5.width, videoImage5.height );

	videoTexture5 = new THREE.Texture( videoImage5 );
		videoTexture5.minFilter = THREE.LinearFilter;
		videoTexture5.magFilter = THREE.LinearFilter;	

	video6 = document.createElement( 'video' );
		video6.src = "assets/movies/IlPianetaDelTesoro.mp4";
		video6.onPlay = false;

	videoImage6 = document.createElement( 'canvas' );
		videoImage6.width = 480;
		videoImage6.height = 360;

	videoImageContext6 = videoImage6.getContext( '2d' );
		videoImageContext6.fillStyle = '#000000';
		videoImageContext6.fillRect( 0, 0, videoImage6.width, videoImage6.height );

	videoTexture6 = new THREE.Texture( videoImage6 );
		videoTexture6.minFilter = THREE.LinearFilter;
		videoTexture6.magFilter = THREE.LinearFilter;	

	video7 = document.createElement( 'video' );
		video7.src = "assets/movies/Romeo.mp4";
		video7.onPlay = false;

	videoImage7 = document.createElement( 'canvas' );
		videoImage7.width = 450;
		videoImage7.height = 360;

	videoImageContext7 = videoImage7.getContext( '2d' );
		videoImageContext7.fillStyle = '#000000';
		videoImageContext7.fillRect( 0, 0, videoImage7.width, videoImage7.height );

	videoTexture7 = new THREE.Texture( videoImage7 );
		videoTexture7.minFilter = THREE.LinearFilter;
		videoTexture7.magFilter = THREE.LinearFilter;	



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

function makeSpecialTv(x,y, video1,videoTexture1,video2, videoTexture2, video3, videoTexture3, video4, videoTexture4) {
	var tv = new THREE.Object3D();

	var tv1Geometry = new THREE.PlaneGeometry( x, y);
	var tv1Material = new THREE.MeshBasicMaterial( { map: videoTexture1, overdraw: true } );	
	var tva = new THREE.Mesh(tv1Geometry,tv1Material);

	var tv2Geometry = new THREE.PlaneGeometry( x, y);
	var tv2Material = new THREE.MeshBasicMaterial( { map: videoTexture2, overdraw: true } );	
	var tvb = new THREE.Mesh(tv2Geometry,tv2Material);

	var tv3Geometry = new THREE.PlaneGeometry( x, y);
	var tv3Material = new THREE.MeshBasicMaterial( { map: videoTexture3, overdraw: true } );	
	var tvc = new THREE.Mesh(tv3Geometry,tv3Material);

	var tv4Geometry = new THREE.PlaneGeometry( x, y);
	var tv4Material = new THREE.MeshBasicMaterial( { map: videoTexture4, overdraw: true } );	
	var tvd = new THREE.Mesh(tv4Geometry,tv4Material);

	tv.add(tva);
	tv.add(tvb);
	tv.add(tvc);
	tv.add(tvd);

	tv.tva = tva;
	tv.tvb = tvb;
	tv.tvc = tvc;
	tv.tvd = tvd;

	tv.tva.video = video1;
	tv.tvb.video = video2;
	tv.tvc.video = video3;
	tv.tvd.video = video4;

	tv.tva.visible = true;
	tv.tvb.visible = false;
	tv.tvc.visible = false;
	tv.tvd.visible = false;

	tva.interact = tvb.interact = tvc.interact = tvd.interact = function() {
		console.log("Interact");
		// console.log(this.parent);
		// console.log(this.parent.tva);
		// console.log(this.parent.tva.video);

		if (tv2.tva.video.onPlay) {
			console.log("PAUSE 1");
			tv2.tva.video.onPlay = false;
			tv2.tva.video.pause();
		}
		else {
			if ((!tv2.tva.video.onPlay) && tv2.tva.visible ){
				console.log("PLAY 1");
				tv2.tva.video.onPlay = true;
				tv2.tva.video.play();
			}
		}

		if (tv2.tvb.video.onPlay) {
			console.log("PAUSE 2");
			tv2.tvb.video.onPlay = false;
			tv2.tvb.video.pause();
		}
		else {
			if ((!tv2.tvb.video.onPlay) && tv2.tvb.visible ){
				console.log("PLAY 2");
				tv2.tvb.video.onPlay = true;
				tv2.tvb.video.play();
			}
		}

		if (tv2.tvc.video.onPlay) {
			console.log("PAUSE 3");
			tv2.tvc.video.onPlay = false;
			tv2.tvc.video.pause();
		}
		else {
			if ((!tv2.tvc.video.onPlay) && tv2.tvc.visible ){
				console.log("PLAY 3");
				tv2.tvc.video.onPlay = true;
				tv2.tvc.video.play();
			}
		}

		if (tv2.tvd.video.onPlay) {
			console.log("PAUSE 4");
			tv2.tvd.video.onPlay = false;
			tv2.tvd.video.pause();
		}
		else {
			if ((!tvd.video.onPlay) && tvd.visible ){
				console.log("PLAY 4");
				tvd.video.onPlay = true;
				tvd.video.play();
			}
		}
			console.log(tv2.tva.visible);
			console.log(tv2.tvb.visible);
			console.log(tv2.tvc.visible);
			console.log(tv2.tvd.visible);
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

	tv2 = makeSpecialTv(1,0.55,video1,videoTexture1,video5,videoTexture5,video6,videoTexture6,video7,videoTexture7);
	
	tv2A = tv2.tva;
	tv2B = tv2.tvb;
	tv2C = tv2.tvc;
	tv2D = tv2.tvd;
	
	tv2A.position.set(13, 9.2, 1.25);
	tv2A.rotation.x = -Math.PI/2;
	tv2A.rotation.z = Math.PI;
	tv2A.rotation.y = Math.PI;
	
	tv2B.position.set(13, 9.2, 1.25);
	tv2B.rotation.x = -Math.PI/2;
	tv2B.rotation.z = Math.PI;
	tv2B.rotation.y = Math.PI;
		
	tv2C.position.set(13, 9.2, 1.25);
	tv2C.rotation.x = -Math.PI/2;
	tv2C.rotation.z = Math.PI;
	tv2C.rotation.y = Math.PI;
		
	tv2D.position.set(13, 9.2, 1.25);
	tv2D.rotation.x = -Math.PI/2;
	tv2D.rotation.z = Math.PI;
	tv2D.rotation.y = Math.PI;
	
	tvs.add(tv2A);
	tvs.add(tv2B);
	tvs.add(tv2C);
	tvs.add(tv2D);

	tv3 = makeTv(0.6,0.3,video3,videoTexture3);
	// tv3.position.set(6.11, 11.52, 1.138);
	tv3.position.set(6.11, 11.4, 1.138);
	tv3.rotation.x = -Math.PI/2;
	tv3.rotation.z = Math.PI;
	tv3.rotation.y = -Math.PI/2;
	tvs.add(tv3);

	return tvs;
}

function makeRemoteControl(){

	var remoteControlGeometry = new THREE.BoxGeometry(0.1,0.3,0.1);
	var remoteControlMaterial = new THREE.MeshLambertMaterial({transparent: true, opacity: 0});
	remoteControl_Box = new THREE.Mesh(remoteControlGeometry, remoteControlMaterial);

	remoteControl_Box.interact = function() {
		console.log("Remote Control Interact");
		if (tv2.tva.video.onPlay) {
			console.log("1->2");
			tv2.tva.visible = false;
			tv2.tvb.visible = true;
			tv2.tvc.visible = false;
			tv2.tvd.visible = false;

			tv2.tva.video.onPlay = false;
			tv2.tvb.video.onPlay = true;
			
			console.log(tv2.tva.visible);
			console.log(tv2.tvb.visible);
			console.log(tv2.tvc.visible);
			console.log(tv2.tvd.visible);

			tv2.tva.video.pause();
			tv2.tvb.video.play();
		} 
		else {
			if(tv2.tvb.video.onPlay){
				console.log("2->3");
				tv2.tva.visible = false;
				tv2.tvb.visible = false;
				tv2.tvc.visible = true;
				tv2.tvd.visible = false;
				
				tv2.tvb.video.onPlay = false;
				tv2.tvc.video.onPlay = true;

				console.log(tv2.tva.visible);
				console.log(tv2.tvb.visible);
				console.log(tv2.tvc.visible);
				console.log(tv2.tvd.visible);

				tv2.tvb.video.pause();
				tv2.tvc.video.play();
			}
			else {
				if(tv2.tvc.video.onPlay){
					console.log("3->4");
					tv2.tva.visible = false;
					tv2.tvb.visible = false;
					tv2.tvc.visible = false;
					tv2.tvd.visible = true;
					
					tv2.tvc.video.onPlay = false;
					tv2.tvd.video.onPlay = true;

					console.log(tv2.tva.visible);
					console.log(tv2.tvb.visible);
					console.log(tv2.tvc.visible);
					console.log(tv2.tvd.visible);

					tv2.tvc.video.pause();
					tv2.tvd.video.play();
				}
				else {
					if(tv2.tvd.video.onPlay){
						console.log("4->X");
						tv2.tva.visible = false;
						tv2.tvb.visible = false;
						tv2.tvc.visible = false;
						tv2.tvd.visible = false;
						
						tv2.tvd.video.onPlay = false;

						console.log(tv2.tva.visible);
						console.log(tv2.tvb.visible);
						console.log(tv2.tvc.visible);
						console.log(tv2.tvd.visible);

						tv2.tvd.video.pause();
					}
					else {
						if(tv2.tva.visible || tv2.tvb.visible || tv2.tvc.visible || tv2.tvd.visible) {
							if(tv2.tva.visible) {
								tv2.tva.video.onPlay = true;
								tv2.tva.video.play();
							}
							if(tv2.tvb.visible) {
								tv2.tvb.video.onPlay = true;
								tv2.tvb.video.play();
							}
							if(tv2.tvc.visible) {
								tv2.tvc.video.onPlay = true;
								tv2.tvc.video.play();
							}
							if(tv2.tvd.visible) {
								tv2.tvd.video.onPlay = true;
								tv2.tvd.video.play();
							}
						} 
						else {
							console.log("ON da telecoando");
							tv2.tva.visible = true;
							tv2.tvb.visible = false;
							tv2.tvc.visible = false;
							tv2.tvd.visible = false;
							
							tv2.tva.video.onPlay = true;

							tv2.tva.video.play();
						}	
					}
				}
			}
		}	
	}

	remoteControl_Box.rotation.y = Math.PI/2;
	remoteControl_Box.position.set(12,7.5,0.5);

	return remoteControl_Box;
 
}

function makeSpeakers() {
	var speakers = new THREE.Object3D();

	var speakerGeometry = new THREE.BoxGeometry(0.5,0.5,1);
	var speakerMaterial = new THREE.MeshLambertMaterial({transparent: true, opacity: 0});
	speaker1 = new THREE.Mesh(speakerGeometry, speakerMaterial);
	speaker2 = new THREE.Mesh(speakerGeometry, speakerMaterial);
	speaker1.position.set(14,9,0.2);
	speaker2.position.set(12.5,9,0.2);

	alfa = 0.1;

	speaker1.onPlay = false;
	speaker2.onPlay = false;

	speakers.add(speaker1);
	speakers.add(speaker2);	

	speaker1.interact =  speaker2.interact = function() {
		if(speaker1.onPlay || speaker2.onPlay){
			console.log("Speakers OFF");
			speaker1.onPlay = false;
			speaker2.onPlay = false;
			alfa = 0.2;
		}
		else {
			if(!speaker1.onPlay || !speaker2.onPlay) {
				console.log("Speakers ON");
				speaker1.onPlay = true;
				speaker2.onPlay = true;
				alfa = 1;
			}
		}
	}

	return speakers;

}

function updateAudioTV2() {
		var distance = tv2.position.distanceTo((!window.location.pointLock) ? camera.position : controlsFPS.getObject().position); 
		if(distance <= 30) {
			tv2.tva.video.volume = alfa * ( 1 - distance/30 );
			tv2.tvb.video.volume = alfa * ( 1 - distance/30 );
			tv2.tvc.video.volume = alfa * ( 1 - distance/30 );
			tv2.tvd.video.volume = alfa * ( 1 - distance/30 );
		}
		else {
			tv2.tva.video.volume = 0;
			tv2.tvb.video.volume = 0;
			tv2.tvc.video.volume = 0;
			tv2.tvd.video.volume = 0;
		}
}

function updateAudioTV1() {
		var distance = tv1.position.distanceTo((!window.location.pointLock) ? camera.position : controlsFPS.getObject().position); 
		if(distance <= 30) {
			tv1.video.volume = 1 * ( 1 - distance/30 );
		}
		else {
			tv1.video.volume = 0;
		}
}

function updateAudioTV3() {
		var distance = tv3.position.distanceTo((!window.location.pointLock) ? camera.position : controlsFPS.getObject().position); 
		if(distance <= 30) {
			tv3.video.volume = 1 * ( 1 - distance/30 );
		}
		else {
			tv3.video.volume = 0;
		}
}