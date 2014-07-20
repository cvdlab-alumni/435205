function makeWindows() {
	var windows = new THREE.Object3D();

	window1 = makeWindow();
	windows.add(window1);
	window1.rotation.z = 3*Math.PI/2;
	window1.position.set(2.75,7.9375,1.15);

	window2 = makeDoubleWindow();
	windows.add(window2);
	window2.rotation.z = 3*Math.PI/2;
	window2.position.set(2.75,12.9375,1.15);

	window3 = makeDoubleWindow();
	windows.add(window3);
	window3.rotation.z = Math.PI/2;
	window3.position.set(15.75,6.5625,1.15);

	window4 = makeDoubleWindow();
	windows.add(window4);
	window4.rotation.z = Math.PI/2;
	window4.position.set(15.75,2.0625,1.15);

	window5 = makeSmallWindow();
	windows.add(window5);
	window5.rotation.z = 3*Math.PI/2;
	window5.position.set(2.75,5.4375,1.7125);

	return windows
}

function makeWindow() {
	var window = new THREE.Object3D();

    var windowFrameGeometry = new THREE.BoxGeometry(0.125,0.5,1.875);
    var windowFrame1 = createMesh(windowFrameGeometry, "wood.jpg", "woodBump.jpg");
    window.add(windowFrame1);

    var windowFrame2 = createMesh(windowFrameGeometry, "wood.jpg", "woodBump.jpg");
    windowFrame2.position.set(0.875,0,0);
    window.add(windowFrame2);

    var windowFrameGeometry = new THREE.BoxGeometry(1,0.5,0.125);
    var windowFrame3 = createMesh(windowFrameGeometry, "wood.jpg", "woodBump.jpg");
    windowFrame3.position.set(0.4375,0,1);
    window.add(windowFrame3);

    var hingle = new THREE.Object3D();
    hingle.position.set(0,0,0);
    window.add(hingle);
    
    var sash = makeSash(0.5, 1.875);

    var isOpened = false;
    window.isOpened = isOpened;
    window.hingle = hingle;
    window.glass = sash.glass;
    hingle.add(sash);

    window.glass.interact = function() {
        if(isOpened) {
	        isOpened = false;
	        var openWindow = new TWEEN.Tween(this.parent.parent.rotation)
            .to({ z: 0 }, 1000)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out)  
            .start();
        }
        else {
            isOpened = true;
            var openWindow = new TWEEN.Tween(this.parent.parent.rotation)
            .to({ z: Math.PI/2 }, 1000)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out)  
            .start();
        }
    }

	return window
}

function makeDoubleWindow() {
	var window = new THREE.Object3D();

    var windowFrameGeometry = new THREE.BoxGeometry(0.125,0.5,1.875);
    var windowFrame1 = createMesh(windowFrameGeometry, "wood.jpg", "woodBump.jpg");
    window.add(windowFrame1);

    var windowFrame2 = createMesh(windowFrameGeometry, "wood.jpg", "woodBump.jpg");
    windowFrame2.position.set(1.875,0,0);
    window.add(windowFrame2);

    var windowFrameGeometry = new THREE.BoxGeometry(2,0.5,0.125);
    var windowFrame3 = createMesh(windowFrameGeometry, "wood.jpg", "woodBump.jpg");
    windowFrame3.position.set(0.9375,0,1);
    window.add(windowFrame3);

    var sash1 = makeSash(0.625, 1.875);
    var sash2 = makeSash(0.625, 1.875);

    var hingle1 = new THREE.Object3D();
    hingle1.position.set(0,0,0);
    window.add(hingle1);
    hingle1.add(sash1);


    var hingle2 = new THREE.Object3D();
    hingle2.position.set(2 - 0.125,0,0);
    window.add(hingle2);
    hingle2.add(sash2);
    sash2.rotation.z = Math.PI;

    var isOpened = false;
    window.isOpened = isOpened;    
    window.hingle1 = hingle1;
    window.hingle2 = hingle2;
    window.glass1 = sash1.glass;
    window.glass2 = sash2.glass;

    window.glass1.interact = function() {
        if(isOpened) {
	        isOpened = false;
	        var openWindow = new TWEEN.Tween(this.parent.parent.rotation)
            .to({ z: 0 }, 1000)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out)  
            .start();
        }
        else {
            isOpened = true;
            var openWindow = new TWEEN.Tween(this.parent.parent.rotation)
            .to({ z: Math.PI/2 }, 1000)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out)  
            .start();
        }
    }

    window.glass2.interact = function() {
        if(isOpened) {
	        isOpened = false;
	        var openWindow = new TWEEN.Tween(this.parent.parent.rotation)
            .to({ z: 0 }, 1000)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out)  
            .start();
        }
        else {
            isOpened = true;
            var openWindow = new TWEEN.Tween(this.parent.parent.rotation)
            .to({ z: -Math.PI/2 }, 1000)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out)  
            .start();
        }
    }

	return window
}

function makeSash(glassWidth, glassHeight) {
	var sash = new THREE.Object3D();

    var windowFrameGeometry = new THREE.BoxGeometry(0.125,0.125, glassHeight);
    var windowFrame1 = createMesh(windowFrameGeometry, "wood.jpg", "woodBump.jpg");
    windowFrame1.position.set(0.125,0,0);

    var windowFrame2 = createMesh(windowFrameGeometry, "wood.jpg", "woodBump.jpg");
    windowFrame2.position.set(0.25 + glassWidth,0,0);

  	var windowFrameGeometry = new THREE.BoxGeometry(glassWidth,0.125,0.125);
    var windowFrame3 = createMesh(windowFrameGeometry, "wood.jpg", "woodBump.jpg");
    windowFrame3.position.set(0.1875 + glassWidth/2,0, - glassHeight + 1);

    var windowFrame4 = createMesh(windowFrameGeometry, "wood.jpg", "woodBump.jpg");
    windowFrame4.position.set(0.1875 + glassWidth/2,0, glassHeight - 1);

  	var windowFrameGeometry = new THREE.BoxGeometry(glassWidth,0.125,0.125);
    var windowFrame5 = createMesh(windowFrameGeometry, "wood.jpg", "woodBump.jpg");
    windowFrame5.position.set(0.1875 + glassWidth/2,0, - glassHeight/2 + 1);

    var glassGeometry = new THREE.BoxGeometry(glassWidth + 0.125,glassHeight - 0.25,0.0625);
    var glassMaterial = new THREE.MeshLambertMaterial({color: 0x06ccff, transparent: true, opacity: 0.2});
    var glass = new THREE.Mesh(glassGeometry, glassMaterial);
    glass.rotation.x = Math.PI/2;
    glass.position.set(0.4375,0,0);

    sash.add(windowFrame1);
    sash.add(windowFrame2);
    sash.add(windowFrame3);
    sash.add(windowFrame4);
    sash.add(windowFrame5);
    sash.add(glass);

    sash.glass = glass;

	return sash;
}

function makeSmallSash(glassWidth, glassHeight) {
	var sash = new THREE.Object3D();

    var windowFrameGeometry = new THREE.BoxGeometry(0.125,0.125, glassHeight);
    var windowFrame1 = createMesh(windowFrameGeometry, "wood.jpg", "woodBump.jpg");
    windowFrame1.position.set(0.125,0,0);

    var windowFrame2 = createMesh(windowFrameGeometry, "wood.jpg", "woodBump.jpg");
    windowFrame2.position.set(0.25 + glassWidth,0,0);

  	var windowFrameGeometry = new THREE.BoxGeometry(glassWidth,0.125,0.125);
    var windowFrame3 = createMesh(windowFrameGeometry, "wood.jpg", "woodBump.jpg");
    windowFrame3.position.set(0.1875 + glassWidth/2,0, - glassHeight + 1.0625);

    var windowFrame4 = createMesh(windowFrameGeometry, "wood.jpg", "woodBump.jpg");
    windowFrame4.position.set(0.1875 + glassWidth/2,0, glassHeight - 1.0625);

    var glassGeometry = new THREE.BoxGeometry(glassWidth + 0.125,glassHeight - 0.25, 0.0625);
    var glassMaterial = new THREE.MeshLambertMaterial({color: 0x06ccff, transparent: true, opacity: 0.2});
    var glass = new THREE.Mesh(glassGeometry, glassMaterial);
    glass.rotation.x = Math.PI/2;
    glass.position.set(0.4375,0,0);

    sash.add(windowFrame1);
    sash.add(windowFrame2);
    sash.add(windowFrame3);
    sash.add(windowFrame4);
    sash.add(glass);

    sash.glass = glass;

	return sash;
}

function makeSmallWindow() {
	var window = new THREE.Object3D();

    var windowFrameGeometry = new THREE.BoxGeometry(0.125,0.5,0.75);
    var windowFrame1 = createMesh(windowFrameGeometry, "wood.jpg", "woodBump.jpg");
    window.add(windowFrame1);

    var windowFrame2 = createMesh(windowFrameGeometry, "wood.jpg", "woodBump.jpg");
    windowFrame2.position.set(0.875,0,0);
    window.add(windowFrame2);

    var windowFrameGeometry = new THREE.BoxGeometry(1,0.5,0.125);
    var windowFrame3 = createMesh(windowFrameGeometry, "wood.jpg", "woodBump.jpg");
    windowFrame3.position.set(0.4375,0,0.4375);
    window.add(windowFrame3);

    var windowFrameGeometry = new THREE.BoxGeometry(1,0.5,0.125);
    var windowFrame4 = createMesh(windowFrameGeometry, "wood.jpg", "woodBump.jpg");
    windowFrame4.position.set(0.4375,0,-0.4375);
    window.add(windowFrame4);

    var hingle = new THREE.Object3D();
    hingle.position.set(0,0,0);
    window.add(hingle);
    
    var sash = makeSmallSash(0.5, 0.75);

    var isOpened = false;
    window.isOpened = isOpened;
    window.hingle = hingle;
    window.glass = sash.glass;
    hingle.add(sash);

    window.glass.interact = function() {
        if(isOpened) {
	        isOpened = false;
	        var openWindow = new TWEEN.Tween(this.parent.parent.rotation)
            .to({ z: 0 }, 1000)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out)  
            .start();
        }
        else {
            isOpened = true;
            var openWindow = new TWEEN.Tween(this.parent.parent.rotation)
            .to({ z: Math.PI/2 }, 1000)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out)  
            .start();
        }
    }

	return window
}

