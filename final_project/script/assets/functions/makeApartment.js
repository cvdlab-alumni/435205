apartment = new THREE.Object3D();


function makeApartment() {
	//Lights
      apartment.add(makeLights());

      //Switches
      apartment.add(makeSwitches());

	//make Doors
      apartment.add(makeDoors());

      //make Windows
      apartment.add(makeWindows());

      //Make Rooms
      apartment.add(makeRooms());

      //MAIN FLOOR
      apartment.add(makeMainFloor());

      //PLANE
      apartment.add(makeLawn(50,50))

      //EXTERNAL WALLS
      apartment.add(makeExternalWalls());

      //ROOF
      apartment.add(makeRoof());

      apartment.rotation.z = -Math.PI;

      //OBJECTS
      // apartment.add(makeObjects());

      //MOVIES
      apartment.add(makeTvs());

      apartment.rotation.x = -Math.PI/2;
      apartment.position.set(0,6,0);
      apartment.scale.set(3,3,3);
      
      return apartment;
}

function makeLawn(x,y) {

      var lawnGeometry = new THREE.PlaneGeometry(x,y);
      lawn = createMesh(lawnGeometry, "grass.jpg", "grassBump.jpg");
      lawn.material.map.repeat.set(20,20);
      lawn.material.bumpMap.repeat.set(20,20);
      lawn.position.set(x/6,x/6,-0.01);

      return lawn;

}