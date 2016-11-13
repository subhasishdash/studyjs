canvas.addEventListener('wheel', function(e){
    wDelta = e.deltaY > 0 ? 'down' : 'up';
    if(wDelta === 'up') {
    	zoom -= 0.1;
    } else {
    	zoom += 0.1;
    }
});