export function navegacion() {
    document.addEventListener('DOMContentLoaded', function () {
        const navLinksContainer = document.querySelector('.nav-principal');
        if (!navLinksContainer) return;

        const navLinks = navLinksContainer.children;
        const currentPath = window.location.pathname;

        for (let i = 0; i < navLinks.length; i++) {
            let link = navLinks[i];
            // Obtén solo la ruta del href (sin el dominio completo)
            let linkPath = new URL(link.href).pathname;

            // Compara la ruta del enlace con la ruta actual
            if (linkPath === currentPath) {
                link.classList.add('activo');
            } else {
                link.classList.remove('activo');
            }
        }
    });
}
