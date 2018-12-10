
// Ciclo de vida del SW

self.addEventListener('install', event =>{

    //Descargamos assets
    //Creamos una cache    
    console.log('SW: Instalando el SW!!');

    //es mejor no dejar la activación inmediata porque puede interferir con las acciones de los usuarios
    //self.skipWaiting();

    const instalacion = new Promise ( (resolve, reject) => {
        setTimeout(() => {
            console.log('SW: Instalaciones terminadas');
            self.skipWaiting();
            resolve();
        }, 1000);
    });

    event.waitUntil(instalacion);

});

self.addEventListener('activate', event =>{

    // eliminamos chache vieja
    console.log('SW: Service worker activo y listo para recibir nuevas modificaciones 2');
});