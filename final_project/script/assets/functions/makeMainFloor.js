function makeMainFloor() {

      var mainFloor = new THREE.Object3D();

      var shape = new THREE.Shape();
      shape.moveTo(0,6.25/10);
      shape.lineTo(0,15/10);
      shape.lineTo(6.75/10, 15/10);
      shape.lineTo(6.75/10, 10.5/10);
      shape.lineTo(13/10, 10.5/10);
      shape.lineTo(13/10, 0);
      shape.lineTo(6.25/10, 0);
      shape.lineTo(6.25/10, 4.25/10);
      shape.lineTo(4/10, 4.25/10);
      shape.lineTo(4/10, 6.25/10);
      shape.lineTo(0, 6.25/10);

      var shapeGeometry = new THREE.ShapeGeometry(shape);
      var floor = createMesh(shapeGeometry, "parquet.jpg", "parquetBump.jpg");
      floor.material.map.repeat.set(2,2);
      floor.material.bumpMap.repeat.set(2,2);
      floor.scale.set(10,10,1)
      floor.position.set(2.75,0,0.21)

      mainFloor.add(floor);

      return  mainFloor;
}