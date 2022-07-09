const scrollNav = () => {
    const enlaces = document.querySelectorAll('.enlace a');

    enlaces.forEach(function (enlace) {
        enlace.addEventListener('click', function (e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.heref.value);
            seccion.scrollIntroView({
                behavior: 'smooth',
            });
        });
    });
}