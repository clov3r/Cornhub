document.addEventListener( 'mousemove' , updateTrackerPosition );
let mousePosition;
function updateTrackerPosition( event ) {
     mousePosition = { x: event.pageX - window.scrollX, y: event.pageY - window.scrollY };
    console.log( 'mousemove' , mousePosition );
}

function movespaceship (){
    if(! mousePosition) {
        requestAnimationFrame(movespaceship);

        return;
    }
    
    const spaceship = document.querySelector('#Corn');
    let   spaceshipPosition = { X: spaceship.offsetLeft, y: spaceship.offsetTop };
    const delta = {X:spaceshipPosition.X - mousePosition.X, Y: spaceshipPosition.Y - mousePosition.Y}
    console.log( 'mousemove' , mousePosition );
    spaceship.style.left = `${ mousePosition.x }px`;
    spaceship.style.top = `${ mousePosition.y }px`;
    const flames = document.querySelector('#flames');
    
    console.log( 'mousemove' , mousePosition );
    flames.style.left = `${ mousePosition.x }px`;
    flames.style.top = `${ mousePosition.y +spaceship.height }px`;
requestAnimationFrame(movespaceship);
}
requestAnimationFrame(movespaceship);