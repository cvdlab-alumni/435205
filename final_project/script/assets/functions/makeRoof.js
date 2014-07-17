function makeRoof() {
	var shape = new THREE.Shape();
    shape.moveTo(0,0);
    shape.lineTo(19/10,0);
    shape.lineTo(19/10, 11/10);
    shape.lineTo(10/10, 11/10);
    shape.lineTo(10/10, 16/10);
    shape.lineTo(0,16/10);    
    shape.lineTo(0,0);
    
	var shapeGeometry = new THREE.ExtrudeGeometry(shape, {amount: 0.2, bevelThickness : 10, curveSegments : 30, steps : 100, bevelEnabled : false});
    roof = createMesh(shapeGeometry, "roof.jpg", "roofBump.jpg");
    roof.material.map.repeat.set(10,10);
    roof.material.bumpMap.repeat.set(10,10);
    roof.scale.set(10,10,1)
    roof.position.set(0,0,3.1);
    roof.visible = false;

    return roof;
}