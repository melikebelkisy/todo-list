document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('.add-form');
    const liste = document.querySelector('.todos');
    const aramaInput = document.querySelector('.search input');

    aramaInput.addEventListener('keyup', e => {
        const ifade = aramaInput.value.trim().toLowerCase();
        filtreOlustur(ifade);
    });

    const filtreOlustur = (ifade) => {
        Array.from(liste.children).forEach((yapilacak) => {
            const yapilacakMetin = yapilacak.textContent.toLowerCase();
            if (yapilacakMetin.includes(ifade)) {
                yapilacak.classList.remove('filtred');
            } else {
                yapilacak.classList.add('filtred');
            }
        });
        const filtrelenenSayisi = Array.from(liste.children).filter(yapilacak => 
            yapilacak.classList.contains('filtred')).length;
        const filtreMesaji = document.querySelector('.filtered-message');
        if (filtrelenenSayisi === 0) {
            filtreMesaji.style.display = 'block';
        }
    };

    function templateOlustur(yapilacak) {
        let html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${yapilacak}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
        `;
        liste.innerHTML += html;
    }

    form.addEventListener('submit', e => {
        e.preventDefault();

        const yapilacak = form.add.value.trim().toLowerCase();
        if (yapilacak.length) {
            templateOlustur(yapilacak);
            form.reset();
        }
    });

    liste.addEventListener('click', e => {
        if (e.target.classList.contains('delete')) {
            e.target.parentElement.remove();
        }
    });
});
