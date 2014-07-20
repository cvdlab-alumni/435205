function makeLights() {

      lights = new THREE.Object3D();      
      // add directional light
      directionalLight1 = new THREE.DirectionalLight(0xffffff);
      directionalLight1.position.set(9.25, 7.5, 50);
      directionalLight1.intensity = 0.75;
      lights.add(directionalLight1);

      directionalLight2 = new THREE.DirectionalLight(0xffffff);
      directionalLight2.position.set(-50, 7.5, 1.5);
      directionalLight2.intensity = 1;
      lights.add(directionalLight2);

      directionalLight3 = new THREE.DirectionalLight(0xffffff);
      directionalLight3.position.set(9.25, 57.5, 1.5);
      directionalLight3.intensity = 0.75;
      lights.add(directionalLight3);

      directionalLight4 = new THREE.DirectionalLight(0xffffff);
      directionalLight4.position.set(59.25, 7.5, 1.5);
      directionalLight4.intensity = 0.75;
      lights.add(directionalLight4);

      directionalLight5 = new THREE.DirectionalLight(0xffffff);
      directionalLight5.position.set(9.25, -50, 1.5);
      directionalLight5.intensity = 0.75;
      lights.add(directionalLight5);

      //add pointLight
      pointLight1 = new THREE.PointLight(0xffff00,1,12);
      pointLight1.position.set(12.9, 2.8, 3);
      pointLight1.intensity = 0;
      lights.add(pointLight1);

      pointLight2 = new THREE.PointLight(0xffff00,1,10);
      pointLight2.position.set(7.9, 2.8, 3);
      pointLight2.intensity = 0;
      lights.add(pointLight2);

      pointLight3 = new THREE.PointLight(0xffff00,1,10);
      pointLight3.position.set(4.4, 5, 3);
      pointLight3.intensity = 0;
      lights.add(pointLight3);

      pointLight4 = new THREE.PointLight(0xffff00,1,10);
      pointLight4.position.set(4.4, 8, 3);
      pointLight4.intensity = 0;
      lights.add(pointLight4);

      pointLight5 = new THREE.PointLight(0xffff00,1,10);
      pointLight5.position.set(4.4, 12, 3);
      pointLight5.intensity = 0;
      lights.add(pointLight5);

      pointLight6 = new THREE.PointLight(0xffff00,1,10);
      pointLight6.position.set(9.9, 8, 3);
      pointLight6.intensity = 0;
      lights.add(pointLight6);

      //add spotLight

      var targetGeometry = new THREE.BoxGeometry(0.1,0.1,0.1);
      var targetMaterial = new THREE.MeshLambertMaterial({transparent: true, opacity: 0});

      target1 = new THREE.Mesh(targetGeometry, targetMaterial);
      target1.position.set(-35 +30,0,15-25);

      target2 = new THREE.Mesh(targetGeometry, targetMaterial);
      target2.position.set(-33+30,0, 20-25);

      target3 = new THREE.Mesh(targetGeometry, targetMaterial);
      target3.position.set(-24+30,0, 24-25);

      target4 = new THREE.Mesh(targetGeometry, targetMaterial);
      target4.position.set(-37+30,0, 26-25);

      spotLight1 = new THREE.SpotLight(0xff0000,1,20,Math.PI/24);
      spotLight1.position.set(12.9, 6.6, 2.8);
      spotLight1.intensity = 0;
      lights.add(spotLight1);

      spotLight2 = new THREE.SpotLight(0x00ff00,1,20,Math.PI/24);
      spotLight2.position.set(12.9, 6.9, 2.8);
      spotLight2.intensity = 0;
      lights.add(spotLight2);

      spotLight3 = new THREE.SpotLight(0x0000ff,1,20,Math.PI/24);
      spotLight3.position.set(12.9, 7.2, 2.8);
      spotLight3.intensity = 0;
      lights.add(spotLight3);

      spotLight4 = new THREE.SpotLight(0xff00ff,1,20,Math.PI/24);
      spotLight4.position.set(12.9, 7.5, 2.8);
      spotLight4.intensity = 0;
      lights.add(spotLight4);

      return lights;

}
