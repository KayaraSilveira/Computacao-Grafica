const rolar = (nsteps, direcao) => {
    steps.push(nsteps);
    animationType.push({movementType: 'rolar', value: direcao});
};

const levantar = (direcao) => {
    steps.push(30);
    animationType.push({movementType: 'quicar', value: direcao});
};

const segurar = (nsteps) => {
    steps.push(nsteps);
    animationType.push({movementType: 'quicar', value: 0});
};

const arremessar = (nsteps, direcao) => {
    steps.push(nsteps);
    animationType.push({movementType: 'arremessar1', value: direcao});
};

const quicar = (vezes, tipo) => {
    var i;
    switch(tipo) {
        case 0:
            for(i = 0; i < vezes; i++) {
                steps.push(1);
                animationType.push({movementType: 'quicar', value: 0});
                steps.push(30);
                animationType.push({movementType: 'quicar', value: -0.8});   
                steps.push(30);
                animationType.push({movementType: 'quicar', value: 0.8}); 
            }
            break;
        case 1:
            for(i = 0; i < vezes; i++) {
                steps.push(1);
                animationType.push({movementType: 'quicar1', value: 0});
                steps.push(30);
                animationType.push({movementType: 'quicar1', value: -0.8});   
                steps.push(30);
                animationType.push({movementType: 'quicar1', value: 0.8}); 
            }
            break;
        case 2:
            for(i = 0; i < vezes; i++) {
                steps.push(1);
                animationType.push({movementType: 'quicar2', value: 0});
                steps.push(30);
                animationType.push({movementType: 'quicar2', value: -0.8});   
                steps.push(30);
                animationType.push({movementType: 'quicar2', value: 0.8}); 
            }
            break;
    }
};
