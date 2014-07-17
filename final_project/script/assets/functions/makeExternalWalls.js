function makeExternalWalls() {

      var walls = new THREE.Object3D();

      var shape = new THREE.Shape();
      shape.moveTo(0,0);
      shape.lineTo(9.52/10,0);
      shape.lineTo(9.52/10,3.2/10);
      shape.lineTo(2.5/10,3.2/10);
      shape.lineTo(2.5/10,1.2/10);
      shape.lineTo(0,1.2/10);
      shape.lineTo(0,0);

      var shapeGeometry = new THREE.ShapeGeometry(shape);
      var wall1 = createMesh(shapeGeometry, "brickWall.jpg", "brickWallBump.jpg");
      wall1.rotation.x = Math.PI/2;
      wall1.material.map.repeat.set(5,5);
      wall1.material.bumpMap.repeat.set(5,5);
      wall1.scale.set(10,10,1);
      wall1.position.set(-0.01,15.01,0);
      walls.add(wall1);

      shape = new THREE.Shape();
      shape.moveTo(0,0);
      shape.lineTo(6.51/10,0);
      shape.lineTo(6.51/10,3.2/10);
      shape.lineTo(2.5/10,3.2/10);
      shape.lineTo(2.5/10,1.2/10);
      shape.lineTo(0,1.2/10);
      shape.lineTo(0,0);

      var shapeGeometry = new THREE.ShapeGeometry(shape);
      var wall2 = createMesh(shapeGeometry, "brickWall.jpg", "brickWallBump.jpg");
      wall2.rotation.x = Math.PI/2;
      wall2.material.map.repeat.set(5,5);
      wall2.material.bumpMap.repeat.set(5,5);
      wall2.scale.set(10,10,1);
      wall2.position.set(-0.01,2.49,0);
      walls.add(wall2);

      shape = new THREE.Shape();
      shape.moveTo(0,0);
      shape.lineTo(12.02/10,0);
      shape.lineTo(12.02/10,3.2/10);
      shape.lineTo(2.5/10,3.2/10);
      shape.lineTo(2.5/10,1.2/10);
      shape.lineTo(0,1.2/10);
      shape.lineTo(0,0);

      var shapeGeometry = new THREE.ShapeGeometry(shape);
      var wall3 = createMesh(shapeGeometry, "brickWall.jpg", "brickWallBump.jpg");
      wall3.rotation.x = Math.PI/2;
      wall3.rotation.y = Math.PI;
      wall3.material.map.repeat.set(5,5);
      wall3.material.bumpMap.repeat.set(5,5);
      wall3.scale.set(10,10,1);
      wall3.position.set(18.51,-0.01,0);
      walls.add(wall3);

      shape = new THREE.Shape();
      shape.moveTo(0,0);
      shape.lineTo(2.51/10,0);
      shape.lineTo(2.51/10,3.2/10);
      shape.lineTo(0,3.2/10);
      shape.lineTo(0,0);

      var shapeGeometry = new THREE.ShapeGeometry(shape);
      var wall4 = createMesh(shapeGeometry, "brickWall.jpg", "brickWallBump.jpg");
      wall4.rotation.x = Math.PI/2;
      wall4.rotation.y = Math.PI/2;
      wall4.material.map.repeat.set(5,5);
      wall4.material.bumpMap.repeat.set(5,5);
      wall4.scale.set(10,10,1);
      wall4.position.set(6.49,-0.01,0);
      walls.add(wall4);

      shape = new THREE.Shape();
      shape.moveTo(0,0);
      shape.lineTo(12.52/10,0);
      shape.lineTo(12.52/10,1.2/10);
      shape.lineTo(0,1.2/10);
      shape.lineTo(0,0);

      var shapeGeometry = new THREE.ShapeGeometry(shape);
      var wall5 = createMesh(shapeGeometry, "brickWall.jpg", "brickWallBump.jpg");
      wall5.rotation.x = Math.PI/2;
      wall5.rotation.y = Math.PI/2;
      wall5.material.map.repeat.set(5,5);
      wall5.material.bumpMap.repeat.set(5,5);
      wall5.scale.set(10,10,1);
      wall5.position.set(-0.01,2.49,0);
      walls.add(wall5);

      shape = new THREE.Shape();
      shape.moveTo(0,0);
      shape.lineTo(10.52/10,0);
      shape.lineTo(10.52/10,1.2/10);
      shape.lineTo(0,1.2/10);
      shape.lineTo(0,0);

      var shapeGeometry = new THREE.ShapeGeometry(shape);
      var wall6 = createMesh(shapeGeometry, "brickWall.jpg", "brickWallBump.jpg");
      wall6.rotation.x = Math.PI/2;
      wall6.rotation.y = Math.PI/2;
      wall6.material.map.repeat.set(5,5);
      wall6.material.bumpMap.repeat.set(5,5);
      wall6.scale.set(10,10,1);
      wall6.position.set(18.51,-0.01,0);
      walls.add(wall6);

      shape = new THREE.Shape();
      shape.moveTo(0,0);
      shape.lineTo(4.51/10,0);
      shape.lineTo(4.51/10,3.2/10);
      shape.lineTo(0,3.2/10);
      shape.lineTo(0,0);

      var shapeGeometry = new THREE.ShapeGeometry(shape);
      var wall7 = createMesh(shapeGeometry, "brickWall.jpg", "brickWallBump.jpg");
      wall7.rotation.x = Math.PI/2;
      wall7.rotation.y = Math.PI/2;
      wall7.material.map.repeat.set(5,5);
      wall7.material.bumpMap.repeat.set(5,5);
      wall7.scale.set(10,10,1);
      wall7.position.set(9.51,10.5,0);
      walls.add(wall7);

      shape = new THREE.Shape();
      shape.moveTo(0,0);
      shape.lineTo(7.51/10,0);
      shape.lineTo(7.51/10,2.2/10);
      shape.lineTo(9.01/10,2.2/10);
      shape.lineTo(9.01/10,3.2/10);
      shape.lineTo(2.5/10,3.2/10);
      shape.lineTo(2.5/10,1.2/10);
      shape.lineTo(0,1.2/10);
      shape.lineTo(0,0);

      var shapeGeometry = new THREE.ShapeGeometry(shape);
      var wall8 = createMesh(shapeGeometry, "brickWall.jpg", "brickWallBump.jpg");
      wall8.rotation.x = Math.PI/2;
      wall8.rotation.y = Math.PI;
      wall8.material.map.repeat.set(5,5);
      wall8.material.bumpMap.repeat.set(5,5);
      wall8.scale.set(10,10,1);
      wall8.position.set(18.51,10.51,0);
      walls.add(wall8);

      shape = new THREE.Shape();
      shape.moveTo(-0.01/10,0);
      shape.lineTo(2.01/10,0);
      shape.lineTo(2.01/10,2.2/10);
      shape.lineTo(3.99/10,2.2/10);
      shape.lineTo(3.99/10,0);
      shape.lineTo(7.01/10,0);
      shape.lineTo(7.01/10,2.2/10);
      shape.lineTo(7.99/10,2.2/10);
      shape.lineTo(7.99/10,0);
      shape.lineTo(12.51/10,0);
      shape.lineTo(12.51/10,3.2/10);      
      shape.lineTo(-0.01/10,3.2/10);
      shape.lineTo(-0.01/10,0);

      hole = new THREE.Path();
      hole.moveTo(9.51/10,1.2/10);
      hole.lineTo(10.49/10,1.2/10);
      hole.lineTo(10.49/10,2.2/10);      
      hole.lineTo(9.51/10,2.2/10);
      hole.lineTo(9.51/10,1.2/10);

      shape.holes.push(hole);

      var shapeGeometry = new THREE.ShapeGeometry(shape);
      var wall9 = createMesh(shapeGeometry, "brickWall.jpg", "brickWallBump.jpg");
      wall9.rotation.x = Math.PI/2;
      wall9.rotation.y = -Math.PI/2;
      wall9.material.map.repeat.set(5,5);
      wall9.material.bumpMap.repeat.set(5,5);
      wall9.scale.set(10,10,1);
      wall9.position.set(2.49,15,0);
      walls.add(wall9);

      shape = new THREE.Shape();
      shape.moveTo(-0.01/10,0);
      shape.lineTo(2.01/10,0);
      shape.lineTo(2.01/10,2.2/10);
      shape.lineTo(3.99/10,2.2/10);
      shape.lineTo(3.99/10,0);
      shape.lineTo(6.51/10,0);
      shape.lineTo(6.51/10,2.2/10);
      shape.lineTo(8.49/10,2.2/10);
      shape.lineTo(8.49/10,0);
      shape.lineTo(10.52/10,0);
      shape.lineTo(10.52/10,3.2/10);
      shape.lineTo(0,3.2/10);
      shape.lineTo(-0.01/10,0);

      var shapeGeometry = new THREE.ShapeGeometry(shape);
      var wall10 = createMesh(shapeGeometry, "brickWall.jpg", "brickWallBump.jpg");
      wall10.rotation.x = Math.PI/2;
      wall10.rotation.y = Math.PI/2;
      wall10.material.map.repeat.set(5,5);
      wall10.material.bumpMap.repeat.set(5,5);
      wall10.scale.set(10,10,1);
      wall10.position.set(16.01,-0.01,0);
      walls.add(wall10);

      shape = new THREE.Shape();
      shape.moveTo(0,0);
      shape.lineTo(1.5/10,0);
      shape.lineTo(1.5/10,1.2/10);
      shape.lineTo(0,1.2/10);
      shape.lineTo(0,0);

      var shapeGeometry = new THREE.ShapeGeometry(shape);
      var wall11 = createMesh(shapeGeometry, "brickWall.jpg", "brickWallBump.jpg");
      wall11.rotation.x = Math.PI/2;
      wall11.material.map.repeat.set(5,5);
      wall11.material.bumpMap.repeat.set(5,5);
      wall11.scale.set(10,10,1);
      wall11.position.set(1,3.51,0);
      walls.add(wall11);

      var shapeGeometry = new THREE.ShapeGeometry(shape);
      var wall12 = createMesh(shapeGeometry, "brickWall.jpg", "brickWallBump.jpg");
      wall12.rotation.x = Math.PI/2;
      wall12.material.map.repeat.set(5,5);
      wall12.material.bumpMap.repeat.set(5,5);
      wall12.scale.set(10,10,1);
      wall12.position.set(1,13.99,0);
      apartment.add(wall12);

      var shapeGeometry = new THREE.ShapeGeometry(shape);
      var wall13 = createMesh(shapeGeometry, "brickWall.jpg", "brickWallBump.jpg");
      wall13.rotation.x = Math.PI/2;
      wall13.material.map.repeat.set(5,5);
      wall13.material.bumpMap.repeat.set(5,5);
      wall13.scale.set(10,10,1);
      wall13.position.set(16,1.01,0);
      walls.add(wall13);

      var shapeGeometry = new THREE.ShapeGeometry(shape);
      var wall14 = createMesh(shapeGeometry, "brickWall.jpg", "brickWallBump.jpg");
      wall14.rotation.x = Math.PI/2;
      wall14.material.map.repeat.set(5,5);
      wall14.material.bumpMap.repeat.set(5,5);
      wall14.scale.set(10,10,1);
      wall14.position.set(16,9.49,0);
      walls.add(wall14);

      shape = new THREE.Shape();
      shape.moveTo(0,0);
      shape.lineTo(10.5/10,0);
      shape.lineTo(10.5/10,1.2/10);
      shape.lineTo(0,1.2/10);
      shape.lineTo(0,0);

      var shapeGeometry = new THREE.ShapeGeometry(shape);
      var wall15 = createMesh(shapeGeometry, "brickWall.jpg", "brickWallBump.jpg");
      wall15.rotation.x = Math.PI/2;
      wall15.rotation.y = Math.PI/2;
      wall15.material.map.repeat.set(5,5);
      wall15.material.bumpMap.repeat.set(5,5);
      wall15.scale.set(10,10,1);
      wall15.position.set(1.01,3.5,0);
      walls.add(wall15);

      shape = new THREE.Shape();
      shape.moveTo(0,0);
      shape.lineTo(8.5/10,0);
      shape.lineTo(8.5/10,1.2/10);
      shape.lineTo(0,1.2/10);
      shape.lineTo(0,0);

      var shapeGeometry = new THREE.ShapeGeometry(shape);
      var wall15 = createMesh(shapeGeometry, "brickWall.jpg", "brickWallBump.jpg");
      wall15.rotation.x = Math.PI/2;
      wall15.rotation.y = Math.PI/2;
      wall15.material.map.repeat.set(5,5);
      wall15.material.bumpMap.repeat.set(5,5);
      wall15.scale.set(10,10,1);
      wall15.position.set(17.49,1,0);
      walls.add(wall15);

      shape = new THREE.Shape();
      shape.moveTo(0,0);
      shape.lineTo(2.5/10,0);
      shape.lineTo(2.5/10,1/10);
      shape.lineTo(1/10,1/10);
      shape.lineTo(1/10,11.5/10);
      shape.lineTo(2.5/10,11.5/10);
      shape.lineTo(2.5/10,12.5/10);
      shape.lineTo(0,12.5/10);
      shape.lineTo(0,0);

      var shapeGeometry = new THREE.ShapeGeometry(shape);
      var wall16 = createMesh(shapeGeometry, "marble.jpg", "marbleBump.jpg");
      wall16.material.map.repeat.set(2,2);
      wall16.material.bumpMap.repeat.set(2,2);
      wall16.scale.set(10,10,1);
      wall16.position.set(0,2.5,1.21);
      walls.add(wall16);

      shape = new THREE.Shape();
      shape.moveTo(0,0);
      shape.lineTo(2.5/10,0);
      shape.lineTo(2.5/10,1/10);
      shape.lineTo(1/10,1/10);
      shape.lineTo(1/10,9.5/10);
      shape.lineTo(2.5/10,9.5/10);
      shape.lineTo(2.5/10,10.5/10);
      shape.lineTo(0,10.5/10);
      shape.lineTo(0,0);

      var shapeGeometry = new THREE.ShapeGeometry(shape);
      var wall17 = createMesh(shapeGeometry, "marble.jpg", "marbleBump.jpg");
      wall17.rotation.z = Math.PI;
      wall17.material.map.repeat.set(2,2);
      wall17.material.bumpMap.repeat.set(2,2);
      wall17.scale.set(10,10,1);
      wall17.position.set(18.5,10.5,1.21);
      walls.add(wall17);

      return walls;

}
