function makeObjects() {
	objects3D = new THREE.Object3D();

	//LIVING ROOM
	objLoader('L_shaped_sofa', 0.012, 13,7.3,0, Math.PI/2,-Math.PI,0);
	objLoader('contemp_living_room', 0.012, 13,9.5,0.2, Math.PI/2,0,0);
	objLoader('mini_stereo', 0.012, 14.5,9.25,1.6, Math.PI/2,0,0);
	objLoader('roundTable2', 0.01, 19,4.5,1.4, Math.PI/2,0,0);
	objLoader('chairWithCushion', 0.01, 12.8,5.6,0.2, Math.PI/2,Math.PI/2,0);
	objLoader('chairWithCushion', 0.01, 15.5,5.6,0.2, Math.PI/2,-Math.PI/2,0);
	objLoader('hangingLight', 0.01, 10,8,2.7, Math.PI/2,-Math.PI/2,0);
	objLoader('track-lights', 0.1, 13,7,2.7, Math.PI/2,-Math.PI/2,0);
	objLoader('interrupteur', 0.01, 9.2,9.48,1.2, Math.PI/2,0,0);
	objLoader('interrupteur', 0.01, 9.3,9.48,1.2, Math.PI/2,0,0);
	objLoader('remote', 0.05, 12,7.5,0.5, Math.PI/2,Math.PI/2,0);
	objLoader('speaker3', 0.01, 13.5,9,0.2, Math.PI/2,0,0);
	objLoader('speaker3', 0.01, 12,9,0.2, Math.PI/2,0,0);

	//BEDROOM1
	objLoader('office_chair', 0.6, 5.5,13.5,0.2, Math.PI/2,Math.PI/2,0);
	objLoader('bedWithTexture', 0.008, 4.6,10.85,0.2, Math.PI/2,Math.PI,0);
	objLoader('kids_wooden_desk', 0.008, 6.2,13.55,0.2, Math.PI/2,-Math.PI/2,0);
	objLoader('apple_pc', 0.1, 6,13.55,0.8, Math.PI/2,-Math.PI/2,0);
	objLoader('headphones', 0.01, 6.2,13.45,0.85, Math.PI,-Math.PI/2,0);
	objLoader('iphone', 0.01, 6.2,13.9,0.8, Math.PI,-Math.PI,Math.PI/2);
	objLoader('radiator_7section', 0.008, 6.4,10.1,0.2, Math.PI/2,Math.PI,0);
	objLoader('lyingDownMale01', 0.008, 4.6,10.85,0.7, Math.PI/2,Math.PI,0);
	objLoader('internal-unity-air-conditioning', 0.008, 3.5,10 + 0.155/2,2.7, Math.PI/2,Math.PI,0);
	objLoader('bedsideTable2', 0.013, 3.5,10.25,0.2, Math.PI/2,Math.PI,0);
	objLoader('bedsideTable2', 0.013, 5.7,10.25,0.2, Math.PI/2,Math.PI,0);
	objLoader('fluorescent', 0.07, 6.375,13.6,1.5, Math.PI/2,Math.PI/2,0);
	objLoader('como', 0.008, 7.625,15.125,0.25, Math.PI/2,-Math.PI/2,0);
	objLoader('led_tv', 0.008, 6.125,11.5,0.875, Math.PI/2,-Math.PI/2,0);
	objLoader('PS3', 0.013, 6.125,12,0.875, Math.PI/2,-Math.PI/2,0);
	objLoader('full-bookcase', 0.01, 6.325 + 0.125/2,12.75,0.45, Math.PI/2,-Math.PI/2,0);
	objLoader('hangingLight', 0.01, 4.5,12,2.7, Math.PI/2,-Math.PI/2,0);
	objLoader('interrupteur', 0.01, 6.48,11.2,1.2, -Math.PI/2,-Math.PI/2,0);

	//BEDROOM2
	objLoader('bed1', 0.01, 13,3.875,0.2, Math.PI/2,0,0);
	objLoader('radiator_7section', 0.008, 14.75,3.875 + 0.125/2,0.2, Math.PI/2,Math.PI,0);
	objLoader('bedsideTable2', 0.013, 11.9,3.75,0.2, Math.PI/2,0,0);
	objLoader('bedsideTable2', 0.013, 14.1,3.75,0.2, Math.PI/2,0,0);
	objLoader('sedia', 0.012, 11.4,9.12,0.2, Math.PI/2,-Math.PI/2,0);
	objLoader('wardrobe1', 0.009, 10.755,1.25,0.2, Math.PI/2,Math.PI,0);
	objLoader('little_lamp1', 1, 11.75,3.375,0.8, Math.PI/2,Math.PI,0);
	objLoader('como', 0.008, 18.25,-0.125/2,0.25, Math.PI/2,-Math.PI,0);
	objLoader('TVCenter', 0.012, 13,1.25,1.125, Math.PI/2,-Math.PI,0);
	objLoader('hangingLight', 0.01, 13,3,2.7, Math.PI/2,-Math.PI/2,0);
	objLoader('interrupteur', 0.01, 10.8,3.97,1.2, Math.PI/2,0,0);

	//KITCHEN
	objLoader('kitchenSinkWithMarble', 0.175, 6.27,8,0.625, Math.PI/2,-Math.PI/2,0);
	objLoader2('1DoorLowerCabinet', 0.095,0.11,0.095, 6.21,7.49,0.625, Math.PI/2,-Math.PI/2,0);
	objLoader2('cornerCabinet', 0.2,0.22,0.2, 6.21,6.875,0.5, Math.PI/2,-Math.PI,0);
	objLoader2('3DrawerCabinet', 0.1,0.13,0.11, 5.66,6.7,0.6, Math.PI/2,-Math.PI,0);
	objLoader2('stove1', 0.1,0.13,0.11, 5,6.7,1, Math.PI/2,-Math.PI,0);
	objLoader('frigorifero_Scene', 0.3, 2.8,9.25,1.8, Math.PI/2,-Math.PI,0);
	objLoader('table4', 0.008, 4.25,8.5,0.3, Math.PI/2,-Math.PI,0);
	objLoader('chair4', 0.008, 4.25,8,0.3, Math.PI/2,-Math.PI,0);
	objLoader('chair4', 0.008, 5,8.5,0.3, Math.PI/2,-Math.PI/2,0);
	objLoader('chair4', 0.008, 3.5,8.5,0.3, Math.PI/2,Math.PI/2,0);
	objLoader('chair4', 0.008, 4.25,9,0.3, Math.PI/2,0,0);
	objLoader('hangingLight', 0.01, 4.5,8,2.7, Math.PI/2,-Math.PI/2,0);
	objLoader('interrupteur', 0.01, 6.48,8.2,1.2, -Math.PI/2,-Math.PI/2,0);
	objLoader('grillePain', 0.01, 6,6.75,1, -Math.PI/2,0,0);
	objLoaderAnimated('toast', 0.01, 6.15,6.75,1, -Math.PI/2,0,Math.PI/2,toast1);
	objLoaderAnimated('toast', 0.01, 5.9,6.75,1, -Math.PI/2,0,Math.PI/2,toast2);

	//BATHROOM1
	objLoader('hangingLight', 0.01, 4.5,5,2.7, Math.PI/2,-Math.PI/2,0);
	objLoader('interrupteur', 0.01, 6.48,4.2,1.2, -Math.PI/2,-Math.PI/2,0);
	objLoader('toiletsUnit', 0.01, 4.5,3.5,0.2, -Math.PI/2,0,Math.PI);
	objLoader('toiletPaperDispenser', 0.01, 4.25,3.5,0.7, -Math.PI/2,0,Math.PI);
	objLoader('bidet', 0.01, 3.25,3.75,0.2, -Math.PI/2,0,Math.PI);
	objLoader('bath_jay_hardy', 0.01, 6,3.5,0.2, -Math.PI/2,0,Math.PI);
	objLoader('bathroomFurniture', 0.01, 4,6,0.2, -Math.PI/2,Math.PI,Math.PI);

	//BATHROOM2
	objLoader('hangingLight', 0.01, 8,3,2.7, Math.PI/2,-Math.PI/2,0);
	objLoader('interrupteur', 0.01, 8.98,2.2,1.2, -Math.PI/2,-Math.PI/2,0);
	objLoader('doccia', 0.01, 4.98,1,0.2, -Math.PI/2,-Math.PI,Math.PI);
	objLoader('toiletsUnit', 0.01, 7,3.5,0.2, -Math.PI/2,Math.PI/2,Math.PI);
	objLoader('toiletPaperDispenser', 0.01, 7,3.75,0.7, -Math.PI/2,Math.PI/2,Math.PI);
	objLoader('bidet', 0.01, 9,3.75,0.2, -Math.PI/2,Math.PI,Math.PI);
	objLoader('bathroomFurniture', 0.01, 7,2,0.2, -Math.PI/2,Math.PI/2,Math.PI);

	//TERACE1
	objLoader('ficus', 0.03, 1.8,4,0.1, Math.PI/2,-Math.PI/2,0);
	objLoader('maceta', 1, 2.2,5,0.1, Math.PI/2,-Math.PI/2,0);


	//TERACE2
	objLoader('ficus', 0.03, 16.7,1.8,0.1, Math.PI/2,-Math.PI/2,0);
	objLoader('maceta', 1, 16.4,5,0.1, Math.PI/2,-Math.PI/2,0);

	objLoaderAnimated('RB-BumbleBee', 0.01, 0,0,0, -Math.PI,Math.PI,-Math.PI/2, transformer);
	objLoaderAnimated('VH-BumbleBee', 0.006, 0,0,0, -Math.PI,-Math.PI,-Math.PI,car);


	return objects3D;
}