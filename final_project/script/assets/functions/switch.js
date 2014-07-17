function makeSwitches() {
	var switches = new THREE.Object3D();

	switch1 = makeSwitch(pointLight1);
	switch1.position.set(10.8,3.97,1.2);
	switch1.on = false;
	switches.add(switch1);

	switch2 = makeSwitch(pointLight2);
	switch2.position.set(8.98,2.2,1.2);
	switch2.on = false;
	switches.add(switch2);

	switch3 = makeSwitch(pointLight3);
	switch3.position.set(6.48,4.2,1.2);
	switch3.on = false;
	switches.add(switch3);

	switch4 = makeSwitch(pointLight4);
	switch4.position.set(6.48,8.2,1.2);
	switch4.on = false;
	switches.add(switch4);

	switch5 = makeSwitch(pointLight5);
	switch5.position.set(6.48,11.2,1.2);
	switch5.on = false;
	switches.add(switch5);

	switch6 = makeSwitch(pointLight6);
	switch6.position.set(9.2,9.48,1.2);
	switch6.on = false;
	switches.add(switch6);

	switch7 = makeSpecialSwitch(spotLight1,spotLight2,spotLight3,spotLight4);
	switch7.position.set(9.3,9.48,1.2);
	switch7.on = false;

	switches.add(switch7);

	return switches;
}

function makeSwitch(light) {
	var switchGeometry = new THREE.BoxGeometry(0.1,0.1,0.1);
	var switchMaterial = new THREE.MeshLambertMaterial({transparent: true, opacity: 0});
	var switch_Box = new THREE.Mesh(switchGeometry, switchMaterial);
	switch_Box.on = false;
	switch_Box.light = light;

	switch_Box.interact = function() {
		if (switch_Box.on) {
			switch_Box.light.visible = false;
			switch_Box.on = false;
		} else {
			switch_Box.light.visible = true;
			switch_Box.on = true;
		}	
	}
	return switch_Box;
}

function makeSpecialSwitch(light1,light2,light3,light4) {
	var switchGeometry = new THREE.BoxGeometry(0.1,0.1,0.1);
	var switchMaterial = new THREE.MeshLambertMaterial({transparent: true, opacity: 0});
	var switch_Box = new THREE.Mesh(switchGeometry, switchMaterial);
	switch_Box.on = false;
	switch_Box.light1 = light1;
	switch_Box.light1.target = target1;
	switch_Box.light2 = light2;
	switch_Box.light2.target = target2;
	switch_Box.light3 = light3;
	switch_Box.light3.target = target3;
	switch_Box.light4 = light4;
	switch_Box.light4.target = target4;

	switch_Box.interact = function() {
		if (switch_Box.on) {
			switch_Box.light1.visible = false;
			switch_Box.light2.visible = false;
			switch_Box.light3.visible = false;
			switch_Box.light4.visible = false;
			switch_Box.on = false;
		} else {
			switch_Box.light1.visible = true;
			switch_Box.light2.visible = true;
			switch_Box.light3.visible = true;
			switch_Box.light4.visible = true;
			switch_Box.on = true;
		}	
	}
	return switch_Box;
}