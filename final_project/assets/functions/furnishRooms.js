function furnishBathroom1(bathroom1) {

        //FLOOR
        var floorGeometry = new THREE.PlaneGeometry(4,3.75);
        var floor = createMesh(floorGeometry, "bathroom.jpg", "bathroomBump.jpg");
        floor.material.map.repeat.set(8,8);
        floor.material.bumpMap.repeat.set(8,8);

        bathroom1.add(floor);
        floor.position.set(2,1.875,0.21);

        //WALLS
        var shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(3.5/10,0);
        shape.lineTo(3.5/10,3/10);
        shape.lineTo(0,3/10);
        shape.lineTo(0,0);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall1 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall1.rotation.x = Math.PI/2;
        wall1.material.map.repeat.set(10,10);
        wall1.material.bumpMap.repeat.set(10,10);
        wall1.scale.set(10,10,1);
        wall1.position.set(0.25,1.01,0.2);
        bathroom1.add(wall1);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall2 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall2.rotation.x = Math.PI/2;
        wall2.material.map.repeat.set(10,10);
        wall2.material.bumpMap.repeat.set(10,10);
        wall2.scale.set(10,10,1);
        wall2.position.set(0.25,3.49,0.2);
        bathroom1.add(wall2);

        shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(1/10,0);
        shape.lineTo(1/10,2/10);
        shape.lineTo(2/10,2/10);
        shape.lineTo(2/10,0);
        shape.lineTo(2.5/10,0);
        shape.lineTo(2.5/10,3/10);
        shape.lineTo(0,3/10);
        shape.lineTo(0,0);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall3 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall3.rotation.x = Math.PI/2;
        wall3.rotation.y = Math.PI/2;
        wall3.material.map.repeat.set(10,10);
        wall3.material.bumpMap.repeat.set(10,10);
        wall3.scale.set(10,10,1);
        wall3.position.set(3.74,1,0.2);
        bathroom1.add(wall3);

        shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(2.5/10,0);
        shape.lineTo(2.5/10,3/10);
        shape.lineTo(0,3/10);
        shape.lineTo(0,0);

        hole = new THREE.Path();
        hole.moveTo(1/10,1/10);
        hole.lineTo(2/10,1/10);
        hole.lineTo(2/10,2/10);
        hole.lineTo(1/10,2/10);
        hole.lineTo(1/10,1/10);

        shape.holes.push(hole);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall4 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall4.rotation.x = Math.PI/2;
        wall4.rotation.y = Math.PI/2;
        wall4.material.map.repeat.set(10,10);
        wall4.material.bumpMap.repeat.set(10,10);
        wall4.scale.set(10,10,1);
        wall4.position.set(0.26,1,0.2);
        bathroom1.add(wall4);

        shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(3.5/10,0);
        shape.lineTo(3.5/10,2/10);
        shape.lineTo(0,2/10);
        shape.lineTo(0,0);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall5 = createMesh(shapeGeometry, "bathroomWall.jpg", "bathroomWallBump.jpg");
        wall5.rotation.x = Math.PI/2;
        wall5.material.map.repeat.set(7,7);
        wall5.material.bumpMap.repeat.set(7,7);
        wall5.scale.set(10,10,1);
        wall5.position.set(3,3.511,0.2);
        apartment.add(wall5);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall6 = createMesh(shapeGeometry, "bathroomWall.jpg", "bathroomWallBump.jpg");
        wall6.rotation.x = Math.PI/2;
        wall6.material.map.repeat.set(7,7);
        wall6.material.bumpMap.repeat.set(7,7);
        wall6.scale.set(10,10,1);
        wall6.position.set(3,5.98,0.2);
        apartment.add(wall6);

        shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(2.5/10,0);
        shape.lineTo(2.5/10,2/10);
        shape.lineTo(2/10,2/10);
        shape.lineTo(2/10,1/10);
        shape.lineTo(1/10,1/10);
        shape.lineTo(1/10,2/10);
        shape.lineTo(0,2/10);
        shape.lineTo(0,0);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall7 = createMesh(shapeGeometry, "bathroomWall.jpg", "bathroomWallBump.jpg");
        wall7.rotation.x = Math.PI/2;
        wall7.rotation.y = Math.PI/2;
        wall7.material.map.repeat.set(7,7);
        wall7.material.bumpMap.repeat.set(7,7);
        wall7.scale.set(10,10,1);
        wall7.position.set(3.011,3.5,0.2);
        apartment.add(wall7);

        shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(0.5/10,0);
        shape.lineTo(0.5/10,2/10);
        shape.lineTo(0,2/10);
        shape.lineTo(0,0);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall8 = createMesh(shapeGeometry, "bathroomWall.jpg", "bathroomWallBump.jpg");
        wall8.rotation.x = Math.PI/2;
        wall8.rotation.y = Math.PI/2;
        wall8.material.map.repeat.set(7,7);
        wall8.material.bumpMap.repeat.set(7,7);
        wall8.scale.set(10,10,1);
        wall8.position.set(6.489,5.5,0.2);
        apartment.add(wall8);

        shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(1/10,0);
        shape.lineTo(1/10,2/10);
        shape.lineTo(0,2/10);
        shape.lineTo(0,0);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall9 = createMesh(shapeGeometry, "bathroomWall.jpg", "bathroomWallBump.jpg");
        wall9.rotation.x = Math.PI/2;
        wall9.rotation.y = Math.PI/2;
        wall9.material.map.repeat.set(7,7);
        wall9.material.bumpMap.repeat.set(7,7);
        wall9.scale.set(10,10,1);
        wall9.position.set(6.489,3.5,0.2);
        apartment.add(wall9);

        bathroom1.position.set(2.75,2.5,0);
        return bathroom1;
      }

      function furnishBathroom2(bathroom2) {

        //FLOOR
        var floorGeometry = new THREE.PlaneGeometry(2.5,4.25);
        var floor = createMesh(floorGeometry, "bathroom.jpg", "bathroomBump.jpg");
        floor.material.map.repeat.set(5,10);
        floor.material.bumpMap.repeat.set(5,10);

        bathroom2.add(floor);
        floor.position.set(1.25,2.125,0.21);

        //WALLS
        var shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(1.5/10,0);
        shape.lineTo(1.5/10,2/10);
        shape.lineTo(2.5/10,2/10);
        shape.lineTo(2.5/10,0);
        shape.lineTo(3.51/10,0);
        shape.lineTo(3.51/10,3/10);
        shape.lineTo(0,3/10);
        shape.lineTo(0,0);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall1 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall1.rotation.x = Math.PI/2;
        wall1.rotation.y = Math.PI/2;
        wall1.material.map.repeat.set(10,10);
        wall1.material.bumpMap.repeat.set(10,10);
        wall1.scale.set(10,10,1);
        wall1.position.set(2.49,1,0.2);
        bathroom2.add(wall1);

        shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(3.5/10,0);
        shape.lineTo(3.5/10,3/10);
        shape.lineTo(0,3/10);
        shape.lineTo(0,0);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall2 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall2.rotation.x = Math.PI/2;
        wall2.rotation.y = Math.PI/2;
        wall2.material.map.repeat.set(10,10);
        wall2.material.bumpMap.repeat.set(10,10);
        wall2.scale.set(10,10,1);
        wall2.position.set(0.51,1,0.2);
        bathroom2.add(wall2);

        shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(2/10,0);
        shape.lineTo(2/10,3/10);
        shape.lineTo(0,3/10);
        shape.lineTo(0,0);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall3 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall3.rotation.x = Math.PI/2;
        wall3.material.map.repeat.set(10,10);
        wall3.material.bumpMap.repeat.set(10,10);
        wall3.scale.set(10,10,1);
        wall3.position.set(0.5,1.01,0.2);
        bathroom2.add(wall3);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall4 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall4.rotation.x = Math.PI/2;
        wall4.material.map.repeat.set(10,10);
        wall4.material.bumpMap.repeat.set(10,10);
        wall4.scale.set(10,10,1);
        wall4.position.set(0.5,3.99,0.2);
        bathroom2.add(wall4);

        shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(3/10,0);
        shape.lineTo(3/10,2/10);
        shape.lineTo(0,2/10);
        shape.lineTo(0,0);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall5 = createMesh(shapeGeometry, "bathroomWall.jpg", "bathroomWallBump.jpg");
        wall5.rotation.x = Math.PI/2;
        wall5.rotation.y = Math.PI/2;
        wall5.material.map.repeat.set(7,7);
        wall5.material.bumpMap.repeat.set(7,7);
        wall5.scale.set(10,10,1);
        wall5.position.set(0.511,1,0.2);
        bathroom2.add(wall5);

        shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(0.5/10,0);
        shape.lineTo(0.5/10,2/10);
        shape.lineTo(0,2/10);
        shape.lineTo(0,0);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall6 = createMesh(shapeGeometry, "bathroomWall.jpg", "bathroomWallBump.jpg");
        wall6.rotation.x = Math.PI/2;
        wall6.rotation.y = Math.PI/2;
        wall6.material.map.repeat.set(7,7);
        wall6.material.bumpMap.repeat.set(7,7);
        wall6.scale.set(10,10,1);
        wall6.position.set(2.489,3.5,0.2);
        bathroom2.add(wall6);

        shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(1.5/10,0);
        shape.lineTo(1.5/10,2/10);
        shape.lineTo(0,2/10);
        shape.lineTo(0,0);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall7 = createMesh(shapeGeometry, "bathroomWall.jpg", "bathroomWallBump.jpg");
        wall7.rotation.x = Math.PI/2;
        wall7.rotation.y = Math.PI/2;
        wall7.material.map.repeat.set(7,7);
        wall7.material.bumpMap.repeat.set(7,7);
        wall7.scale.set(10,10,1);
        wall7.position.set(2.489,1,0.2);
        bathroom2.add(wall7);

        shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(2/10,0);
        shape.lineTo(2/10,2/10);
        shape.lineTo(0,2/10);
        shape.lineTo(0,0);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall8 = createMesh(shapeGeometry, "bathroomWall.jpg", "bathroomWallBump.jpg");
        wall8.rotation.x = Math.PI/2;
        wall8.material.map.repeat.set(7,7);
        wall8.material.bumpMap.repeat.set(7,7);
        wall8.scale.set(10,10,1);
        wall8.position.set(0.5,1.011,0.2);
        bathroom2.add(wall8);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall9 = createMesh(shapeGeometry, "bathroomWall.jpg", "bathroomWallBump.jpg");
        wall9.rotation.x = Math.PI/2;
        wall9.material.map.repeat.set(7,7);
        wall9.material.bumpMap.repeat.set(7,7);
        wall9.scale.set(10,10,1);
        wall9.position.set(0.5,3.989,0.2);
        bathroom2.add(wall9);

        bathroom2.position.set(6.5,0,0);
        return bathroom2;
      }

      function furnishBedroom1(bedroom1) {

        //WALLS
        var shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(0,4/10);
        shape.lineTo(3/10,4/10);
        shape.lineTo(3/10,3/10);
        shape.lineTo(1/10,3/10);
        shape.lineTo(1/10,1/10);
        shape.lineTo(3/10,1/10);
        shape.lineTo(3/10,0);
        shape.lineTo(0,0);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall1 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall1.rotation.y = Math.PI/2;
        wall1.material.map.repeat.set(10,10);
        wall1.material.bumpMap.repeat.set(10,10);
        wall1.scale.set(10,10,1);
        wall1.position.set(0.26,0.25,3.2);
        bedroom1.add(wall1);

        shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(4.26/10,0);
        shape.lineTo(4.26/10,3/10);
        shape.lineTo(0,3/10);
        shape.lineTo(0,0);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall2 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall2.rotation.x = Math.PI/2;
        wall2.material.map.repeat.set(10,10);
        wall2.material.bumpMap.repeat.set(10,10);
        wall2.scale.set(10,10,1);

        wall2.position.set(0,0.26,0.2);
        bedroom1.add(wall2);

        var wall3 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall3.rotation.x = Math.PI/2;
        wall3.material.map.repeat.set(10,10);
        wall3.material.bumpMap.repeat.set(10,10);
        wall3.scale.set(10,10,1);

        wall3.position.set(0,4.24,0.2);
        bedroom1.add(wall3);

        shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(0,3/10);
        shape.lineTo(2/10,3/10);
        shape.lineTo(2/10,4/10);
        shape.lineTo(3/10,4/10);
        shape.lineTo(3/10,0);
        shape.lineTo(0,0);
        
        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall4 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall4.material.map.repeat.set(10,10);
        wall4.material.bumpMap.repeat.set(10,10);
        wall4.scale.set(10,10,1);
        wall4.rotation.y = Math.PI/2;
        wall4.rotation.x = Math.PI;

        wall4.position.set(3.74,4.26,0.2);

        bedroom1.add(wall4);

        bedroom1.position.set(2.75,9.75,0);
        
        return bedroom1;
      }

      function furnishBedroom2(bedroom2) {
        //WALLS
        var shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(1.5/10,0);
        shape.lineTo(1.5/10,2/10);
        shape.lineTo(2.5/10,2/10);
        shape.lineTo(2.5/10,0);
        shape.lineTo(3.51/10,0);
        shape.lineTo(3.51/10,3/10);
        shape.lineTo(0,3/10);
        shape.lineTo(0,0);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall1 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall1.rotation.x = Math.PI/2;
        wall1.rotation.y = Math.PI/2;
        wall1.material.map.repeat.set(10,10);
        wall1.material.bumpMap.repeat.set(10,10);
        wall1.scale.set(10,10,1);
        wall1.position.set(0.26,1,0.2);
        bedroom2.add(wall1);

        shape = new THREE.Shape();
        shape.moveTo(1/10,0);
        shape.lineTo(6.51/10,0);
        shape.lineTo(6.51/10,3/10);
        shape.lineTo(0,3/10);
        shape.lineTo(0,2/10);
        shape.lineTo(1/10,2/10);
        shape.lineTo(1/10,0);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall2 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall2.rotation.x = Math.PI/2;
        wall2.material.map.repeat.set(10,10);
        wall2.material.bumpMap.repeat.set(10,10);
        wall2.scale.set(10,10,1);
        wall2.position.set(0.25,3.99,0.2);
        bedroom2.add(wall2);

        shape = new THREE.Shape();
        shape.moveTo(2/10,0);
        shape.lineTo(3/10,0);
        shape.lineTo(3/10,3/10);
        shape.lineTo(0,3/10);
        shape.lineTo(0,2/10);
        shape.lineTo(2/10,2/10);
        shape.lineTo(2/10,0);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall3 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall3.rotation.x = Math.PI/2;
        wall3.rotation.y = -Math.PI/2;
        wall3.material.map.repeat.set(10,10);
        wall3.material.bumpMap.repeat.set(10,10);
        wall3.scale.set(10,10,1);
        wall3.position.set(6.24,4,0.2);
        bedroom2.add(wall3);

        shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(6/10,0);
        shape.lineTo(6/10,3/10);
        shape.lineTo(0,3/10);
        shape.lineTo(0,0);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall4 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall4.rotation.x = Math.PI/2;
        //wall4.rotation.y = -Math.PI/2;
        wall4.material.map.repeat.set(10,10);
        wall4.material.bumpMap.repeat.set(10,10);
        wall4.scale.set(10,10,1);
        wall4.position.set(0.25,1.01,0.2);
        bedroom2.add(wall4);

        bedroom2.position.set(9.25,0,0);

        return bedroom2;
      }

      function furnishCloakroom(cloakroom) {

        //WALLS
        var shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(1/10,0);
        shape.lineTo(1/10,1/10);
        shape.lineTo(3/10,1/10);
        shape.lineTo(3/10,3/10);
        shape.lineTo(0,3/10);
        shape.lineTo(0,0);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall1 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall1.rotation.y = Math.PI/2;
        wall1.material.map.repeat.set(10,10);
        wall1.material.bumpMap.repeat.set(10,10);
        wall1.scale.set(10,10,1);
        wall1.position.set(0.22,0.25,3.2);
        cloakroom.add(wall1);

        shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(3/10,0);
        shape.lineTo(3/10,3/10);
        shape.lineTo(0,3/10);
        shape.lineTo(0,0);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall2 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall2.rotation.y = Math.PI/2;
        wall2.material.map.repeat.set(10,10);
        wall2.material.bumpMap.repeat.set(10,10);
        wall2.scale.set(10,10,1);
        wall2.position.set(2.315,0.25,3.2);
        cloakroom.add(wall2);

        shape = new THREE.Shape();
        shape.moveTo(1/10,0);
        shape.lineTo(2/10,0);
        shape.lineTo(2/10,3/10);
        shape.lineTo(0,3/10);
        shape.lineTo(0,2/10);
        shape.lineTo(1/10,2/10);
        shape.lineTo(1/10,0);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall3 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall3.rotation.x = Math.PI/2;
        wall3.material.map.repeat.set(10,10);
        wall3.material.bumpMap.repeat.set(10,10);
        wall3.scale.set(10,10,1);
        wall3.position.set(0.25,0.26,0.2);
        cloakroom.add(wall3);

        shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(2.25/10,0);
        shape.lineTo(2.25/10,3/10);
        shape.lineTo(0,3/10);
        shape.lineTo(0,0);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall4 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall4.rotation.x = Math.PI/2;
        wall4.material.map.repeat.set(10,10);
        wall4.material.bumpMap.repeat.set(10,10);
        wall4.scale.set(10,10,1);
        wall4.position.set(0.23,3.24,0.2);
        cloakroom.add(wall4);


        cloakroom.position.set(6.75,9.75,0);

        return cloakroom;
        
      }

      function furnishKitchen(kitchen) {

        //WALLS
        var shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(3.5/10,0);
        shape.lineTo(3.5/10,3/10);
        shape.lineTo(0,3/10);
        shape.lineTo(0,0);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall1 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall1.rotation.x = Math.PI/2;
        wall1.material.map.repeat.set(10,10);
        wall1.material.bumpMap.repeat.set(10,10);
        wall1.scale.set(10,10,1);
        wall1.position.set(0.25,0.26,0.2);
        kitchen.add(wall1);

        shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(4.01/10,0);
        shape.lineTo(4.01/10,3/10);
        shape.lineTo(0,3/10);
        shape.lineTo(0,0);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall2 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall2.rotation.x = Math.PI/2;
        wall2.material.map.repeat.set(10,10);
        wall2.material.bumpMap.repeat.set(10,10);
        wall2.scale.set(10,10,1);
        wall2.position.set(0.25,3.24,0.2);
        kitchen.add(wall2);

        shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(2.01/10,0);
        shape.lineTo(2.01/10,2/10);
        shape.lineTo(3/10,2/10);
        shape.lineTo(3/10,3/10);
        shape.lineTo(0,3/10);
        shape.lineTo(0,0);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall3 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall3.rotation.x = Math.PI/2;
        wall3.rotation.y = Math.PI/2;
        wall3.material.map.repeat.set(10,10);
        wall3.material.bumpMap.repeat.set(10,10);
        wall3.scale.set(10,10,1);
        wall3.position.set(3.74,0.25,0.2);
        kitchen.add(wall3);

        shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(0.51/10,0);
        shape.lineTo(0.51/10,2/10);
        shape.lineTo(1.49/10,2/10);
        shape.lineTo(1.49/10,0);
        shape.lineTo(3/10,0);
        shape.lineTo(3/10,3/10);
        shape.lineTo(0,3/10);
        shape.lineTo(0,0);

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall4 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall4.rotation.x = Math.PI/2;
        wall4.rotation.y = Math.PI/2;
        wall4.material.map.repeat.set(10,10);
        wall4.material.bumpMap.repeat.set(10,10);
        wall4.scale.set(10,10,1);
        wall4.position.set(0.26,0.25,0.2);
        kitchen.add(wall4);

        kitchen.position.set(2.75,6.25,0);

        return kitchen;

      }

      function furnishLivingroom(livingroom) {
        //WALLS 
        var shape = new THREE.Shape();
        shape.moveTo(1/10,0);
        shape.lineTo(4/10,0);
        shape.lineTo(4/10,2/10);
        shape.lineTo(4.99/10,2/10);
        shape.lineTo(4.99/10,0);
        shape.lineTo(5.51/10,0);
        shape.lineTo(5.51/10,3/10);
        shape.lineTo(0,3/10);
        shape.lineTo(0,2/10);
        shape.lineTo(1/10,2/10);
        shape.lineTo(1/10,0);
        
        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall1 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall1.rotation.x = Math.PI/2;
        wall1.rotation.y = Math.PI/2;
        wall1.material.map.repeat.set(10,10);
        wall1.material.bumpMap.repeat.set(10,10);
        wall1.scale.set(10,10,1);
        wall1.position.set(0.26,0.25,0.2);
        livingroom.add(wall1);  

        shape = new THREE.Shape();
        shape.moveTo(1/10,0);
        shape.lineTo(2.5/10,0);
        shape.lineTo(2.5/10,2/10);
        shape.lineTo(4/10,2/10);
        shape.lineTo(4/10,0);
        shape.lineTo(8.5/10,0);
        shape.lineTo(8.5/10,3/10);
        shape.lineTo(0,3/10);
        shape.lineTo(0,2/10);
        shape.lineTo(1/10,2/10);
        shape.lineTo(1/10,0);
        
        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall2 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall2.rotation.x = Math.PI/2;
        wall2.material.map.repeat.set(10,10);
        wall2.material.bumpMap.repeat.set(10,10);
        wall2.scale.set(10,10,1);
        wall2.position.set(0.25,5.24,0.2);
        livingroom.add(wall2);

        shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(2.51/10,0);
        shape.lineTo(2.51/10,2/10);
        shape.lineTo(3.5/10,2/10);
        shape.lineTo(3.5/10,0);
        shape.lineTo(8.5/10,0);
        shape.lineTo(8.5/10,3/10);
        shape.lineTo(0,3/10);
        shape.lineTo(0,0);
        
        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall3 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall3.rotation.x = Math.PI/2;
        wall3.material.map.repeat.set(10,10);
        wall3.material.bumpMap.repeat.set(10,10);
        wall3.scale.set(10,10,1);
        wall3.position.set(0.25,0.26,0.2);
        livingroom.add(wall3); 

        shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(1/10,0);
        shape.lineTo(1/10,2/10);
        shape.lineTo(3/10,2/10);
        shape.lineTo(3/10,0);
        shape.lineTo(5/10,0);
        shape.lineTo(5/10,3/10);
        shape.lineTo(0,3/10);
        shape.lineTo(0,0);
        
        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall4 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall4.rotation.x = Math.PI/2;
        wall4.rotation.y = 3*Math.PI/2;
        wall4.material.map.repeat.set(10,10);
        wall4.material.bumpMap.repeat.set(10,10);
        wall4.scale.set(10,10,1);
        wall4.position.set(8.74,5.24,0.2);
        livingroom.add(wall4);

        shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(3/10,0);
        shape.lineTo(3/10,3.02/10);
        shape.lineTo(0,3.02/10);
        shape.lineTo(0,0);
        
        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall5 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall5.rotation.y = Math.PI/2;
        wall5.material.map.repeat.set(10,10);
        wall5.material.bumpMap.repeat.set(10,10);
        wall5.scale.set(10,10,1);
        wall5.position.set(1.24,1.24,3.2);
        livingroom.add(wall5);  

        shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(2.51/10,0);
        shape.lineTo(2.51/10,3/10);
        shape.lineTo(0,3/10);
        shape.lineTo(0,0);
        
        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall6 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall6.rotation.x = Math.PI/2;
        wall6.rotation.y = Math.PI/2;
        wall6.material.map.repeat.set(10,10);
        wall6.material.bumpMap.repeat.set(10,10);
        wall6.scale.set(10,10,1);
        wall6.position.set(1.76,1.75,0.2);
        livingroom.add(wall6);

        shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(0.52/10,0);
        shape.lineTo(0.52/10,3/10);
        shape.lineTo(0,3/10);
        shape.lineTo(0,0);
        
        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall7 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall7.rotation.x = Math.PI/2;
        wall7.material.map.repeat.set(10,10);
        wall7.material.bumpMap.repeat.set(10,10);
        wall7.scale.set(10,10,1);
        wall7.position.set(1.24,4.26,0.2);
        livingroom.add(wall7);       

        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall8 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall8.rotation.x = Math.PI/2;
        wall8.rotation.y = Math.PI/2;
        wall8.material.map.repeat.set(10,10);
        wall8.material.bumpMap.repeat.set(10,10);
        wall8.scale.set(10,10,1);
        wall8.position.set(2.76,1.24,0.2);
        livingroom.add(wall8);    

        shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(1.01/10,0);
        shape.lineTo(1.01/10,3/10);
        shape.lineTo(0,3/10);
        shape.lineTo(0,0);
        
        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall9 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall9.rotation.x = Math.PI/2;
        wall9.material.map.repeat.set(10,10);
        wall9.material.bumpMap.repeat.set(10,10);
        wall9.scale.set(10,10,1);
        wall9.position.set(1.75,1.76,0.2);
        livingroom.add(wall9); 

        shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(1.52/10,0);
        shape.lineTo(1.52/10,3/10);
        shape.lineTo(0,3/10);
        shape.lineTo(0,0);
        
        var shapeGeometry = new THREE.ShapeGeometry(shape);
        var wall10 = createMesh(shapeGeometry, "wallWhite.jpg", "wallWhiteBump.jpg");
        wall10.rotation.x = Math.PI/2;
        wall10.material.map.repeat.set(10,10);
        wall10.material.bumpMap.repeat.set(10,10);
        wall10.scale.set(10,10,1);
        wall10.position.set(1.24,1.24,0.2);
        livingroom.add(wall10);      

        livingroom.position.set(6.75,4.25,0);

        return livingroom;
      }


      function furnishTerrace1(terrace1) {

        //FLOOR
        var floorGeometry = new THREE.PlaneGeometry(2.75,12.5);
        var floor = createMesh(floorGeometry, "terrace.jpg", "terraceBump.jpg");
        floor.material.map.repeat.set(2,10);
        floor.material.bumpMap.repeat.set(2,10);


        terrace1.add(floor);
        floor.position.set(1.375,6.25,0.21);
        terrace1.position.set(0,2.5,0);
        return terrace1;
      }  

      function furnishTerrace2(terrace2) {

        //FLOOR
        var floorGeometry = new THREE.PlaneGeometry(2.75,10.5);
        var floor = createMesh(floorGeometry, "terrace.jpg", "terraceBump.jpg");
        floor.material.map.repeat.set(2,8);
        floor.material.bumpMap.repeat.set(2,8);

        terrace2.add(floor);
        floor.position.set(1.375,5.25,0.21);
        terrace2.position.set(15.75,0,0);
        return terrace2;
      }     
