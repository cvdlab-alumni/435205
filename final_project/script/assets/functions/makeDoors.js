function makeDoors() {      

      //DOORS
      
      var doors = new THREE.Object3D();

      door1 = createDoor("normal");
      door1.rotation.z = Math.PI/2;
      door1.position.set(6.75,4.5625,1.125);
      doors.add(door1);

      door2 = createDoor("normal");
      door2.rotation.z = Math.PI/2;
      door2.position.set(9.25,2.5625,1.125);
      doors.add(door2);

      door3 = createDoor("normal");
      door3.rotation.z = Math.PI;
      door3.position.set(10.4375,4.25,1.125);
      doors.add(door3);

      door4 = createDoor("external");
      door4.rotation.z = Math.PI;
      door4.position.set(10.9375,10,1.2);
      doors.add(door4);

      door5 = createDoor("sliding");
      door5.rotation.z = Math.PI;
      door5.position.set(7.5,10,1.2);
      doors.add(door5);

      return doors;
}

      function createDoor(type) {
            var doorObj = new THREE.Object3D();

            if(type == "normal") {

              var doorFrameGeometry = new THREE.BoxGeometry(0.125,0.5,1.875);
              var doorFrame1 = createMesh(doorFrameGeometry, "wood.jpg", "woodBump.jpg");
              doorFrame1.position.set(0,0,0);
              doorObj.add(doorFrame1);

              var doorFrame2 = createMesh(doorFrameGeometry, "wood.jpg", "woodBump.jpg");
              doorFrame2.position.set(0.875,0,0);
              doorObj.add(doorFrame2);

              var doorFrameGeometry = new THREE.BoxGeometry(1,0.5,0.125);
              var doorFrame3 = createMesh(doorFrameGeometry, "wood.jpg", "woodBump.jpg");
              doorFrame3.position.set(0.4375,0,1);
              doorObj.add(doorFrame3);

              var doorGeometry = new THREE.BoxGeometry(0.75,1.9375,0.125);
              var door = createMesh(doorGeometry, "door.jpg", "doorBump.jpg");
              door.rotation.x = Math.PI/2;
              door.position.set(0.4375,0,0);

            }

            if(type == "sliding") {

              var doorFrameGeometry = new THREE.BoxGeometry(2,0.125,0.125);
              var doorFrame3 = createMesh(doorFrameGeometry, "slidingDoor.jpg", "slidingDoorBump.jpg");
              doorFrame3.position.set(-0.5,0,1.0625);
              doorObj.add(doorFrame3);

              var doorGeometry = new THREE.BoxGeometry(1,2,0.125);
              var door = createMesh(doorGeometry, "slidingDoor.jpg", "slidingDoorBump.jpg");
              door.rotation.x = Math.PI/2;
              door.position.set(0,0,0);

            }

            if(type == "external") {
              var doorFrameGeometry = new THREE.BoxGeometry(0.125,1,1.875);
              var doorFrame1 = createMesh(doorFrameGeometry, "darkWood.jpg", "darkWoodBump.jpg");
              doorFrame1.position.set(0,0,0);
              doorObj.add(doorFrame1);

              var doorFrame2 = createMesh(doorFrameGeometry, "darkWood.jpg", "darkWoodBump.jpg");
              doorFrame2.position.set(1.375,0,0);
              doorObj.add(doorFrame2);

              var doorFrameGeometry = new THREE.BoxGeometry(1.5,1,0.125);
              var doorFrame3 = createMesh(doorFrameGeometry, "darkWood.jpg", "darkWoodBump.jpg");
              doorFrame3.position.set(0.6875,0,1);
              doorObj.add(doorFrame3);

              var doorGeometry = new THREE.BoxGeometry(1.25,1.875,0.1875);
              var door = createMesh(doorGeometry, "externalDoor.jpg", "externalDoorBump.jpg");
              door.rotation.x = Math.PI/2;
              door.position.set(0.6875,0,0);
            }

        var hingle = new THREE.Object3D();
        hingle.position.set(0,0,0);
        doorObj.add(hingle);
        hingle.add(door);

        var isOpened = false;

        doorObj.door = door;
        doorObj.isOpened = isOpened;
        doorObj.hingle = hingle;

        door.interact = function() {

            if(type == "sliding") {
                  if(isOpened) {
                        isOpened = false;
                        var openDoor = new TWEEN.Tween(this.parent.position)
                        .to({ x: this.parent.position.x + 1, y: this.parent.position.y , z: this.parent.position.z }, 2000)
                        .easing(TWEEN.Easing.Linear.None)
                        //.easing(TWEEN.Easing.Bounce.Out)  
                        .start();

                  }
                  else {
                        isOpened = true;
                        var openDoor = new TWEEN.Tween(this.parent.position)
                        .to({ x: this.parent.position.x - 1, y: this.parent.position.y , z: this.parent.position.z }, 2000)
                        .easing(TWEEN.Easing.Linear.None)
                        //.easing(TWEEN.Easing.Bounce.Out)  
                        .start();
                  }
            }

            else {
                  if(isOpened) {
                        isOpened = false;
                        var openDoor = new TWEEN.Tween(this.parent.rotation)
                        .to({ z: 0 }, 3000)
                        //.easing(TWEEN.Easing.Linear.None)
                        .easing(TWEEN.Easing.Bounce.Out)  
                        .start();

                  }
                  else {
                        isOpened = true;
                        var openDoor = new TWEEN.Tween(this.parent.rotation)
                        .to({ z: Math.PI/2 }, 3000)
                        //.easing(TWEEN.Easing.Linear.None)
                        .easing(TWEEN.Easing.Bounce.Out)  
                        .start();
                  }
            }     
        }

        return doorObj;
      }
