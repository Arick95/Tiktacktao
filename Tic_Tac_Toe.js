let fields = [];

let currentshape = 'cross';


function fillshape(id) {

    if (currentshape == 'cross') {
        currentshape = 'circel';
    } else {
        currentshape = 'cross';
    }
    fields[id] = currentshape;
    console.log(fields);
}

