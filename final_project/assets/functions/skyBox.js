function makeSkyBox() {

	var imagePrefix = "assets/textures/lake2/jajlake2_";
	var directions  = ["xpos", "xneg", "ypos", "yneg", "zpos", "zneg"];
	var imageSuffix = ".jpg";
	var skyGeometry = new THREE.BoxGeometry( 100, 100, 100 );

	
	var materialArray = [];
	for (var i = 0; i < 6; i++)
		materialArray.push( new THREE.MeshBasicMaterial({
			map: THREE.ImageUtils.loadTexture( imagePrefix + directions[i] + imageSuffix ),
			side: THREE.BackSide
		}));
	var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
	var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
	skyBox.position.set(0,0,0);
	return skyBox;
}

function makeSkyBoxDay() {

	var imagePrefix = "assets/textures/lostatseadyay/lostatseaday";
	var directions  = ["_right","_left", "_top", "_bot", "_front","_back"];
	var imageSuffix = ".jpg";
	var skyGeometry = new THREE.BoxGeometry( 100, 100, 100 );

	
	var materialArray = [];
	for (var i = 0; i < 6; i++)
		materialArray.push( new THREE.MeshBasicMaterial({
			map: THREE.ImageUtils.loadTexture( imagePrefix + directions[i] + imageSuffix ),
			side: THREE.BackSide
		}));
	var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
	var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
	skyBox.position.set(0,54.5,0);
	return skyBox;
}

function makeSkyBoxNight() {

	var imagePrefix = "assets/textures/lostatseanight/lostatseanight";
	var directions  = ["_right","_left", "_top", "_bot", "_front","_back"];
	var imageSuffix = ".jpg";
	var skyGeometry = new THREE.BoxGeometry( 100, 100, 100 );

	
	var materialArray = [];
	for (var i = 0; i < 6; i++)
		materialArray.push( new THREE.MeshBasicMaterial({
			map: THREE.ImageUtils.loadTexture( imagePrefix + directions[i] + imageSuffix ),
			side: THREE.BackSide
		}));
	var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
	var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
	skyBox.position.set(0,54.5,0);
	return skyBox;
}