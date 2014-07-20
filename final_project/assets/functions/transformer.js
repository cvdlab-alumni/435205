car = new THREE.Object3D();
car.position.set(5,17,0);

transformer = new THREE.Object3D();
transformer.position.set(15,13,0);

transformer.visible = false;

apartment.add(car);

function moveCar(){
	console.log("MOVE CAR");

    var audioCar = document.createElement('audio');
    var audioCar_source = document.createElement('source');
    audioCar_source.src = 'assets/sounds/car.mp3';
    audioCar.appendChild(audioCar_source);
    audioCar.play();

	var movement1 = new TWEEN.Tween(car.position)
            .to({ x: car.position.x + 15, y: car.position.y , z: car.position.z}, 500)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out)  
            .start();

    rotationCar = -Math.PI/2;

	var rotation1 = new TWEEN.Tween(car.rotation)
            .to({ z: rotationCar}, 200)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(500) 
            .start(); 

    car.position.set(car.position.x + 15, car.position.y, car.position.z);

	var movement2 = new TWEEN.Tween(car.position)
            .to({ x: car.position.x, y: car.position.y - 20, z: car.position.z}, 500)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out)  
            .delay(700) 
            .start();

    rotationCar = -Math.PI;

	var rotation2 = new TWEEN.Tween(car.rotation)
            .to({ z: rotationCar}, 200)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(1200) 
            .start();   

    car.position.set(car.position.x, car.position.y - 20 , car.position.z);

	var movement3 = new TWEEN.Tween(car.position)
            .to({ x: car.position.x - 25, y: car.position.y, z: car.position.z}, 500)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out)  
            .delay(1400) 
            .start();

    rotationCar = -3*Math.PI/2;

	var rotation3 = new TWEEN.Tween(car.rotation)
            .to({ z: rotationCar}, 200)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(1900) 
            .start();           

    car.position.set(car.position.x-25, car.position.y, car.position.z);

	var movement4 = new TWEEN.Tween(car.position)
            .to({ x: car.position.x, y: car.position.y + 20, z: car.position.z}, 500)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out)  
            .delay(2100) 
            .start();

    rotationCar = 0;

	var rotation4 = new TWEEN.Tween(car.rotation)
            .to({ z: rotationCar}, 200)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(2600) 
            .start();  

    car.position.set(car.position.x, car.position.y + 20, car.position.z);

	var movement5 = new TWEEN.Tween(car.position)
            .to({ x: car.position.x + 10, y: car.position.y, z: car.position.z}, 500)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out)  
            .delay(2800) 
            .onComplete(function(){
            	audioCar.pause();
            })
            .start();

    car.position.set(car.position.x + 10, car.position.y, car.position.z);

}

function transformation(){

    var audioTrasformer = document.createElement('audio');
    var audioTrasformer_source = document.createElement('source');
    audioTrasformer_source.src = 'assets/sounds/carAlarm.mp3';
    audioTrasformer.appendChild(audioTrasformer_source);
    audioTrasformer.play();

	var movement1 = new TWEEN.Tween(car.position)
            .to({ x: 15, y: 13 , z: 0}, 500)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out)  
            .start();	

	var rotation1 = new TWEEN.Tween(car.rotation)
            .to({ z: -2*Math.PI}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(500) 
            .start();

	var rotation2 = new TWEEN.Tween(car.rotation)
            .to({ z: 0}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(550) 
            .start();

    var rotation3 = new TWEEN.Tween(car.rotation)
            .to({ z: -2*Math.PI}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(600) 
            .start();  

    var rotation4 = new TWEEN.Tween(car.rotation)
            .to({ z: 0}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(650) 
            .start();

    var rotation5 = new TWEEN.Tween(car.rotation)
            .to({ z: -2*Math.PI}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(700) 
            .start(); 

    var rotation6 = new TWEEN.Tween(car.rotation)
            .to({ z: 0}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(750) 
            .start();

    var rotation7 = new TWEEN.Tween(car.rotation)
            .to({ z: -2*Math.PI}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(800) 
            .start();  

    var rotation8 = new TWEEN.Tween(car.rotation)
            .to({ z: 0}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(850) 
            .start();

    var rotation9 = new TWEEN.Tween(car.rotation)
            .to({ z: -2*Math.PI}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(900) 
            .start();     

   	var rotation10 = new TWEEN.Tween(car.rotation)
            .to({ z: 0}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(950) 
            .start();

    var rotation11 = new TWEEN.Tween(car.rotation)
            .to({ z: -2*Math.PI}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(1000) 
            .start();  

    var rotation12 = new TWEEN.Tween(car.rotation)
            .to({ z: 0}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(1050) 
            .start();

    var rotation13 = new TWEEN.Tween(car.rotation)
            .to({ z: -2*Math.PI}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(1100) 
            .start(); 

    var rotation14 = new TWEEN.Tween(car.rotation)
            .to({ z: 0}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(1150) 
            .start();

    var rotation15 = new TWEEN.Tween(car.rotation)
            .to({ z: -2*Math.PI}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(1200) 
            .start();  

    var rotation16 = new TWEEN.Tween(car.rotation)
            .to({ z: 0}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(1250) 
            .start();

    var rotation17 = new TWEEN.Tween(car.rotation)
            .to({ z: -2*Math.PI}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(1300) 
            .onComplete(function(){
            	apartment.remove(car);
				apartment.add(transformer);
            })
            .start();      

	var rotation1 = new TWEEN.Tween(transformer.rotation)
            .to({ z: -2*Math.PI}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(1350) 
            .start();

	var rotation2 = new TWEEN.Tween(transformer.rotation)
            .to({ z: 0}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(1400) 
            .start();

    var rotation3 = new TWEEN.Tween(transformer.rotation)
            .to({ z: -2*Math.PI}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(1450) 
            .start();  

    var rotation4 = new TWEEN.Tween(transformer.rotation)
            .to({ z: 0}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(1500) 
            .start();

    var rotation5 = new TWEEN.Tween(transformer.rotation)
            .to({ z: -2*Math.PI}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(1550) 
            .start(); 

    var rotation6 = new TWEEN.Tween(transformer.rotation)
            .to({ z: 0}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(1600) 
            .start();

    var rotation7 = new TWEEN.Tween(transformer.rotation)
            .to({ z: -2*Math.PI}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(1650) 
            .start();  

    var rotation8 = new TWEEN.Tween(transformer.rotation)
            .to({ z: 0}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(1700) 
            .start();

    var rotation9 = new TWEEN.Tween(transformer.rotation)
            .to({ z: -2*Math.PI}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(1750) 
            .start();     

   	var rotation10 = new TWEEN.Tween(transformer.rotation)
            .to({ z: 0}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(1800) 
            .start();

    var rotation11 = new TWEEN.Tween(transformer.rotation)
            .to({ z: -2*Math.PI}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(1850) 
            .start();  

    var rotation12 = new TWEEN.Tween(transformer.rotation)
            .to({ z: 0}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(1900) 
            .start();

    var rotation13 = new TWEEN.Tween(transformer.rotation)
            .to({ z: -2*Math.PI}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(1950) 
            .start(); 

    var rotation14 = new TWEEN.Tween(transformer.rotation)
            .to({ z: 0}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(2000) 
            .start();

    var rotation15 = new TWEEN.Tween(transformer.rotation)
            .to({ z: -2*Math.PI}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(2050) 
            .start();  

    var rotation16 = new TWEEN.Tween(transformer.rotation)
            .to({ z: 0}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(2100) 
            .start();

    var rotation17 = new TWEEN.Tween(transformer.rotation)
            .to({ z: -2*Math.PI}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(2150) 
            .start();                                    
}

function resetCar(){
	console.log("RESET CAR");
}