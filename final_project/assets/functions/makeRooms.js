function makeRooms() {

      var rooms = new THREE.Object3D();

      //BATHROOM 1
      createRoom('bathroom1.obj', function (mesh) {
        bathroom1 = furnishBathroom1(mesh);
        rooms.add(bathroom1);
      });

      //BATHROOM 2
      createRoom('bathroom2.obj', function (mesh) {
        bathroom2 = furnishBathroom2(mesh);
        rooms.add(bathroom2);
      });

      //BEDROOM 1
      createRoom('bedroom1.obj', function (mesh) {
        bedroom1 = furnishBedroom1(mesh);
        rooms.add(bedroom1);
      });

      //BEDROOM 2
      createRoom('bedroom2.obj', function (mesh) {
        bedroom2 = furnishBedroom2(mesh);
        rooms.add(bedroom2);
      });

      //KITCHEN
      createRoom('kitchen.obj', function (mesh) {
        kitchen = furnishKitchen(mesh);
        rooms.add(kitchen);
      });

      //TERRACE 1
      createRoom('terrace1.obj', function (mesh) {
        terrace1 = furnishTerrace1(mesh);
        rooms.add(terrace1);
      });

      //TERRACE 2
      createRoom('terrace2.obj', function (mesh) {
        terrace2 = furnishTerrace2(mesh);
        rooms.add(terrace2);
      });

      //LIVINGROOM 
      createRoom('livingroom.obj', function (mesh) {
        livingroom = furnishLivingroom(mesh);
        rooms.add(livingroom);
      });

      //CLOAKROOM 
      createRoom('cloakroom.obj', function (mesh) {
        cloakroom = furnishCloakroom(mesh);
        rooms.add(cloakroom);
      });

      return rooms;

}

function createRoom(filename, callback) {
        var mesh;
        var loader = new THREE.OBJLoader();

        loader.load(filename, function (obj) {

          global_o = obj;

          var multiMaterial = [
            new THREE.MeshLambertMaterial({color: 0xaaaaaa, side: THREE.DoubleSide, shading: THREE.FlatShading}),
            new THREE.MeshBasicMaterial({wireframe: false, overdraw: true, color: 0xffffff, side: THREE.DoubleSide})
          ];

          mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
            
          callback(mesh);
        });
}
