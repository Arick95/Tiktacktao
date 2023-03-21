let fields = [];

let currentshape = 'cross';


function fillshape(id) {

    if (currentshape == 'cross') {
        currentshape = 'circle';
    } else {
        currentshape = 'cross';
    }
    fields[id] = currentshape;
    console.log(fields);
    draw();
}

function draw(){
 for (let i = 0; i < fields.length; i++) {
     if(fields[i] == 'circle')
     { document.getElementById('Circle-' + i).classList.remove('d-none');
    }
    if(fields[i] == 'cross')
    { document.getElementById('Cross-' + i).classList.remove('d-none');
   }
 }
}