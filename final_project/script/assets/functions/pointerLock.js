      var blocker = document.getElementById( 'blocker' );
      var instructions = document.getElementById( 'instructions' );

      var rayMove;
      rayMove = new THREE.Raycaster();
      rayMove.ray.direction.set(0, 1, 0);

      // http://www.html5rocks.com/en/tutorials/pointerlock/intro/

      var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;

      if ( havePointerLock ) {
        var element = document.body;
        
        var pointerlockchange = function ( event ) {

          if ( document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element ) {
            controlsFPS.enabled = true;
            blocker.style.display = 'none';
            
            // attiva il mirino
            $("#pointer").fadeIn(1000);
          
          } else {
            controlsFPS.enabled = false;
            blocker.style.display = '-webkit-box';
            blocker.style.display = '-moz-box';
            blocker.style.display = 'box';
            instructions.style.display = '';
          }

        }

        var pointerlockerror = function ( event ) {
          instructions.style.display = '';
        }

        // Hook pointer lock state change events
        document.addEventListener( 'pointerlockchange', pointerlockchange, false );
        document.addEventListener( 'mozpointerlockchange', pointerlockchange, false );
        document.addEventListener( 'webkitpointerlockchange', pointerlockchange, false );

        document.addEventListener( 'pointerlockerror', pointerlockerror, false );
        document.addEventListener( 'mozpointerlockerror', pointerlockerror, false );
        document.addEventListener( 'webkitpointerlockerror', pointerlockerror, false );

        instructions.addEventListener( 'click', function ( event ) {
        instructions.style.display = 'none';

          // Ask the browser to lock the pointer
          element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;

          if ( /Firefox/i.test( navigator.userAgent ) ) {
            
            var fullscreenchange = function ( event ) {

              if ( document.fullscreenElement === element || document.mozFullscreenElement === element || document.mozFullScreenElement === element ) {
                document.removeEventListener( 'fullscreenchange', fullscreenchange );
                document.removeEventListener( 'mozfullscreenchange', fullscreenchange );
                element.requestPointerLock();
              }
            }

            document.addEventListener( 'fullscreenchange', fullscreenchange, false );
            document.addEventListener( 'mozfullscreenchange', fullscreenchange, false );

            element.requestFullscreen = element.requestFullscreen || element.mozRequestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen;
            element.requestFullscreen();

          } 
          else {
            element.requestPointerLock();
          }
        }, false );
      } 
      else {
        instructions.innerHTML = 'Your browser doesn\'t seem to support Pointer Lock API';
      }


  function computeFPControls() {
    controlsFPS.isOnObject(false);
    // metto l'origine del ray nel centro dello schermo
    rayMove.ray.origin.copy(controlsFPS.getObject().position);
    // // la mia altezza da terra?
    rayMove.ray.origin.y -= 4;
    // // in questo modo se salto su un oggetto ci rimango sopra
    // var intersections = rayMove.intersectObjects(objects);
    // var intersections = raycaster.intersectObjects([door1.door,door2.door,door3.door,door4.door,door5.door,window1.glass, window2.glass1, window2.glass2, window3.glass1, window3.glass2, window4.glass1, window4.glass2, window5.glass]);
    // if (intersections.length > 0) {
    //   var distance = intersections[0].distance;
    //   if (distance > 0 && distance < 4) {
    //     controlsFPS.isOnObject(true);
    //   }
    // }
    controlsFPS.update();
  }

