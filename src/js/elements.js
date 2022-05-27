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
        Game: () => {
            
            rolar(60, -1);
            levantar(0.8);
            segurar(25);
            quicar(1, 0);
            quicar(3, 1);
            quicar(2, 0);
            segurar(5);
            arremessar(30, 1);
            quicar(3, 1); 
            quicar(1, 0);
            segurar(10);
            arremessar(30, -1);
            quicar(3, 2);
            quicar(1, 0);
            segurar(5);
            arremessar(10, -1);
            segurar(15);
            arremessar(30, -1);
            quicar(2, 0);
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


