function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function initStats() {
  var stats = new Stats();
  stats.setMode(0); // 0: fps, 1: ms
  $('body').append(stats.domElement);
  return stats;
}

function createMesh(geom, imageFile, bump) {
  var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + imageFile)
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  geom.computeVertexNormals();
  var mat = new THREE.MeshPhongMaterial();
  mat.map = texture;
  mat.side = THREE.DoubleSide;

  if (bump) {
    var bump = THREE.ImageUtils.loadTexture("assets/textures/general/" + bump)
    bump.wrapS = THREE.RepeatWrapping;
    bump.wrapT = THREE.RepeatWrapping;
    mat.bumpMap = bump;
    mat.bumpScale = 0.05;
  }

  var mesh = new THREE.Mesh(geom, mat);

  return mesh;
}

function objLoader(obj,scale,x,y,z, rotationX, rotationY, rotationZ) {
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {
    var object = event.content;

    object.scale.set(scale, scale, scale);
    object.position.set(x, y, z);
    object.rotation.x = rotationX;
    object.rotation.y = rotationY;
    object.rotation.z = rotationZ;

    objects3D.add(object);
  });


  loader.load(
    'assets/models/' + obj + '.obj', 
    'assets/models/' + obj + '.mtl', 
    {side: THREE.DoubleSide}
  );
}

function objLoader2(obj,scaleX,scaleY,scaleZ,x,y,z, rotationX, rotationY, rotationZ) {
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {
    var object = event.content;

    object.scale.set(scaleX, scaleY, scaleZ);
    object.position.set(x, y, z);
    object.rotation.x = rotationX;
    object.rotation.y = rotationY;
    object.rotation.z = rotationZ;

    objects3D.add(object);
  });


  loader.load(
    'assets/models/' + obj + '.obj', 
    'assets/models/' + obj + '.mtl', 
    {side: THREE.DoubleSide}
  ); 
}

function objLoaderAnimated(obj,scale,x,y,z, rotationX, rotationY, rotationZ, parent) {
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {
    var object = event.content;

    object.scale.set(scale, scale, scale);
    object.position.set(x, y, z);
    object.rotation.x = rotationX;
    object.rotation.y = rotationY;
    object.rotation.z = rotationZ;

    parent.add(object);
  });


  loader.load(
    'assets/models/' + obj + '.obj', 
    'assets/models/' + obj + '.mtl', 
    {side: THREE.DoubleSide}
  );
}

function makeGrid() {
  var gridGeometry = new THREE.PlaneGeometry(100,100,100,100);
  var gridMaterial = new THREE.MeshPhongMaterial({ wireframe: true });
  gridMaterial.side = THREE.DoubleSide;
  var grid = new THREE.Mesh(gridGeometry,gridMaterial);
  grid.rotation.x = -Math.PI/2;
  grid.position.set(-5.5,10,0);
  return grid;
}

function makeLawn(x,y) {

      var lawnGeometry = new THREE.PlaneGeometry(x,y);
      lawn = createMesh(lawnGeometry, "grass.jpg", "grassBump.jpg");
      lawn.material.map.repeat.set(20,20);
      lawn.material.bumpMap.repeat.set(20,20);
      lawn.rotation.z = Math.PI/2;
      lawn.rotation.x = Math.PI/2;
      lawn.position.set(0,-x/2+0.1,0);
      return lawn;

}
