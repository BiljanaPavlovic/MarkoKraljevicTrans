
const start = document.querySelector('#polaziste');
const finish = document.querySelector('#odrediste');
const rezervisiDugme = document.querySelector('#btn-reserve');
const resetujDugme = document.querySelector('#btn-reset');
const rezervacijeContainer = document.querySelector('#item-list');
const ukupnaCena = document.querySelector('#price-container');
let putovanjaCene = [];
var sum = 0;

rezervisiDugme.addEventListener('click', function () {
    if (start.value === finish.value) {
        return alert('Непостојећа Дестинација!')
    } else {

        const novaLista = document.createElement('LI');
        const liContainer = document.createTextNode(start.value);
        const liContainer2 = document.createTextNode(finish.value);
        novaLista.appendChild(liContainer);
        rezervacijeContainer.appendChild(novaLista);
        novaLista.appendChild(liContainer2);

        let cenaPuta1 = {
            dst1: 'Zemlja',
            dst2: 'Mars',
            price: 1500
        };
        let cenaPuta2 = {
            dst1: 'Zemlja',
            dst2: 'Venera',
            price: 1233
        };
        let cenaPuta3 = {
            dst1: 'Zemlja',
            dst2: 'Jupiter',
            price: 2345
        };
        let cenaPuta4 =
        {
            dst1: 'Zemlja',
            dst2: 'Saturn',
            price: 5678
        };
        let cenaPuta5 =
        {
            dst1: 'Venera',
            dst2: 'Mars',
            price: 67856
        };
        let cenaPuta6 =
        {
            dst1: 'Venera',
            dst2: 'Jupiter',
            price: 354645
        };
        let cenaPuta7 =
        {
            dst1: 'Venera',
            dst2: 'Saturn',
            price: 34565
        }
        let cenaPuta8 =
        {
            dst1: 'Mars',
            dst2: 'Jupiter',
            price: 123455
        };
        let cenaPuta9 =
        {
            dst1: 'Mars',
            dst2: 'Saturn',
            price: 7867
        };
        let cenaPuta10 =
        {
            dst1: 'Jupiter',
            dst2: 'Saturn',
            price: 456756
        };

        putovanjaCene = [cenaPuta1, cenaPuta2, cenaPuta3, cenaPuta4,
            cenaPuta5, cenaPuta6, cenaPuta7, cenaPuta8, cenaPuta9, cenaPuta10];


        putovanjaCene.forEach(element => {
            if ((element.dst1 == start.value) && (element.dst2 == finish.value)) {
                return sum += element.price;
            }
        })
        ukupnaCena.value = sum;

    }
    return alert('Хвала на поверењу!')
});

function izbrisiSve(e) {
    let div1 = document.querySelector("#item-list");
    let trgt = e.target;

    div1.remove();
    ukupnaCena.value = 0;
}

resetujDugme.addEventListener('click', izbrisiSve)



         //rec defer znaci odloziti, u ovom slucaju nalaze da se js fajl poslednji ucitava na stranici
         //inace taj tag stavljamo na dno html fajla, ali je moguce staviti ga i na vrh uz defer....
