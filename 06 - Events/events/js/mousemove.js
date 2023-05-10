document.body.addEventListener('mousemove', function(event){
    console.log(50+event.clientY/10);

    document.body.style.background = `hsl(${event.clientX}, 60%, ${50+event.clientY/10}%)`;
})