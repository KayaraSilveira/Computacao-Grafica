var objectInfo; //informações do tipo de objeto
var object; //cores e matrizes dos elementos na tela
var i;

const { gl, meshProgramInfo } = initializeWorld();

const sphereBufferInfo = flattenedPrimitives.createSphereBufferInfo(gl, 6, 18, 8);

const sphereVAO = twgl.createVAOFromBufferInfo(
    gl,
    meshProgramInfo,
    sphereBufferInfo,
);

const addElement = () =>{

    const element = { //pega as cores e matriz do elemento
        uniforms: {
            u_colorMult: [255/255, 117/255, 24/255, 1],
            u_matrix: m4.identity(),
        },
        rotation: {
            x: degToRad(1),
            y: degToRad(1),
            z: degToRad(1),
        },
        translation: {
            x: 1,
            y: -40,
            z: 1,
        },
        scale: {
            x: 1,
            y: 1,
            z: 1,
        },
        Extra: () => {
            
            /*rolando*/
            steps.push(60);
            animationType.push({movementType: 'rolar', value: -1});

            steps.push(30);
            animationType.push({movementType: 'quicar', value: 0.8});
            steps.push(25);
            animationType.push({movementType: 'quicar', value: 0});
            steps.push(30);
            animationType.push({movementType: 'quicar', value: -0.8}); 
            /*quicando pra frente*/
            for(i = 0; i < 3; i++) {
                steps.push(30);
                animationType.push({movementType: 'quicar2', value: 0.8});
                steps.push(1);
                animationType.push({movementType: 'quicar2', value: 0});
                steps.push(30);
                animationType.push({movementType: 'quicar2', value: -0.8}); 
            }
            /*quicando*/
            for(i = 0; i < 2; i++) {
                steps.push(30);
                animationType.push({movementType: 'quicar', value: 0.8});
                steps.push(1);
                animationType.push({movementType: 'quicar', value: 0});
                steps.push(30);
                animationType.push({movementType: 'quicar', value: -0.8});
            } 
            steps.push(30);
            animationType.push({movementType: 'quicar', value: 0.8});
            steps.push(30);
            animationType.push({movementType: 'arremessar2', value: 1});
            steps.push(30);
            animationType.push({movementType: 'quicar2', value: -0.8}); 
            for(i = 0; i < 3; i++) {
                steps.push(30);
                animationType.push({movementType: 'quicar2', value: 0.8});
                steps.push(1);
                animationType.push({movementType: 'quicar2', value: 0});
                steps.push(30);
                animationType.push({movementType: 'quicar2', value: -0.8}); 
            }
            /*quicando*/
            for(i = 0; i < 2; i++) {
                steps.push(30);
                animationType.push({movementType: 'quicar', value: 0.8});
                steps.push(1);
                animationType.push({movementType: 'quicar', value: 0});
                steps.push(30);
                animationType.push({movementType: 'quicar', value: -0.8});
            }    

        },
    };

    object = element;

    var elementInfo = {
        programInfo: meshProgramInfo,
        bufferInfo: sphereBufferInfo,
        vertexArray: sphereVAO,
        uniforms: element.uniforms,
    };
    objectInfo = elementInfo;
};


