var steps = [];
var animationType = [];
var count = 0;

const animation = (object) => {
    switch(animationType[count].movementType){
        case 'rolar':
            object.rotation.x += animationType[count].value/4;
            object.translation.x += animationType[count].value; 
            break;

        case 'quicar':
            object.translation.y += animationType[count].value; 
            break;

        case 'quicar1':
            object.translation.y += animationType[count].value; 
            object.translation.x += 0.25;
            break;

        case 'quicar2':
            object.translation.y += animationType[count].value; 
            object.translation.x -= 0.25;
            break;

        case 'arremessar':
            break;

        case 'arremessar1':
            object.translation.x += animationType[count].value;
            break;
    }
};
