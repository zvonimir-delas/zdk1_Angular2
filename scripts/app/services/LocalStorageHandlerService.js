angular.module('myApp').service('localStorageHandlerService', function (localStorageService, guidService) {

    this.onStartApp = function () {
        if (!localStorageService.get('news_ZD'))
            localStorageService.set('news_ZD', startData);
    };

    this.getNews = function () {
        return localStorageService.get('news_ZD');
    };

    this.updateLocalStorage = function (news) {
        var oldNews = this.getNews();
        oldNews.forEach(function (n) {
            n.isFavorited = (n.id === news.id) ? news.isFavorited : n.isFavorited;
        });

        var updatedNews = oldNews;

        localStorageService.set('news_ZD', updatedNews);
    };

    this.getNewsById = function (id) {
        var allNews = this.getNews();
        var matchingNews = null;

        allNews.forEach(function (news) {
            if (news.id === id)
                matchingNews = news;
        });

        return matchingNews;
    };

    var startData = [
        {
            id: guidService.new(),
            isFavorited: false,
            title: "'Proglašavali me mrtvim, a ja sam nadživio i neke liječnike...'",
            raiting: 5,
            comments: [
                {
                    id: guidService.new(),
                    text: "stari su uvijek govori da se ne treba previše hvaliti"
                },
                {
                    id: guidService.new(),
                    text: "S obzirom na količinu ljekova na slici nisu pogriješili dijagnozu samo su malo preuranili...."
                },
                {
                    id: guidService.new(),
                    text: "Jeremija"
                }
            ]
        },
        {
            id: guidService.new(),
            isFavorited: false,
            title: "Alen Vitasović od estradnih obaveza odmara u vinogradu",
            raiting: 9,
            comments: [
                {
                    id: guidService.new(),
                    text: "Haha. Vinograd mu je najdraži grad "
                }
            ]
        },
        {
            id: guidService.new(),
            isFavorited: false,
            title: "Tvoja obitelj provede oko 66 minuta tjedno u pranju posuđa",
            raiting: 6,
            comments: []
        },
        {
            id: guidService.new(),
            isFavorited: false,
            title: "Vozili ga 4 i pol sata: Imigrant se turistima skrio u prtljažnik",
            raiting: 1,
            comments: [
                {
                    id: guidService.new(),
                    text: "gledam te svea na tu mi jedne poštene sve to neki šljam"
                },
                {
                    id: guidService.new(),
                    text: "Kako mozete bez spavanja? Ja barem 7 sati dnevno."
                }
            ]
        },
        {
            id: guidService.new(),
            isFavorited: false,
            title: "Kakvog partnera trebate? Polje braka otkrit će onog savršenog",
            raiting: 7,
            comments: [
                {
                    id: guidService.new(),
                    text: "Jadan onaj tko trazi partnera prema horoskopu... "
                },
                {
                    id: guidService.new(),
                    text: "Ja vec iman svoju partnericu koja me voli,koju volin,koja me postuje,koju postujen,koja mi je vjerna,kojoj san vjeran,koja mi viruje,kojoj virujen.. Ja iman svoju ljubav"
                },
                {
                    id: guidService.new(),
                    text: "Ja komplikovanije od ovoga u zivotu nisam citao"
                }
            ]
        },
        {
            id: guidService.new(),
            isFavorited: false,
            title: "Roditelji šokirani: Pa ovaj je školski sendvič pravi užas...",
            raiting: 5,
            comments: [
                {
                    id: guidService.new(),
                    text: "Ovaj sendvič je slika i prilika naše Rvacke.... "
                },
                {
                    id: guidService.new(),
                    text: "Ako su se roditelji odlučili na jeftiniju marendu, nisu se odlučili na smeće. Pošto, ovo ni nije marenda. Bolje bi bilo provjeriti tko ravnatelju Relji dostavlja ovakve marende i preko kakvog natječaja. "
                },
                {
                    id: guidService.new(),
                    text: "To je križanac između šunke i parizera - takozvani paralizer. "
                }
            ]
        },
        {
            id: guidService.new(),
            isFavorited: false,
            title: "Okupila se hrvatska ženska seniorska reprezentacija za pripreme i kvalifikacije za Europsko prvenstvo",
            raiting: 10,
            comments: [
                {
                    id: guidService.new(),
                    text: "Opet netko mulja na dječjim obrocima. Zbilja sramotno"
                },
                {
                    id: guidService.new(),
                    text: "nek se djeca strpe malo. kad postanu saborski zastupnici,bit će i poštenog obroka za 5 kn. "
                },
                {
                    id: guidService.new(),
                    text: "Ovo je uistinu degutantno. znam da sendvic od 4 kn nemoze biti obilat i pun salame, ali ipak, ovo je nevideno. "
                }
            ]
        },
        {
            id: guidService.new(),
            isFavorited: false,
            title: "Madriđani u lovu na decimu uz Slovence",
            raiting: 5,
            comments: [
                {
                    id: guidService.new(),
                    text: "izvana čisto fino izgleda, salama viri na sve strane... "
                },
                {
                    id: guidService.new(),
                    text: "Fuj"
                },
                {
                    id: guidService.new(),
                    text: "Napraviš sendvič doma i znaš što ti dijete jede.. "
                }
            ]
        },
        {
            id: guidService.new(),
            isFavorited: false,
            title: "Napraviš sendvič doma i znaš što ti dijete jede.. ",
            raiting: 8,
            comments: [
                {
                    id: guidService.new(),
                    text: "Jedu i gore nap tjestenina sa Kraš exspresom "
                },
                {
                    id: guidService.new(),
                    text: "nije mu jasno kaže. Nije ni meni kako uopće možeš takvo što reći. Pa to daješ djeci. Sramota si od ljudskog roda. "
                },
                {
                    id: guidService.new(),
                    text: "Dobar tek Hrvati! "
                }
            ]
        },
        {
            id: guidService.new(),
            isFavorited: false,
            title: "Njemački državljanin skrivio prometnu nesreću",
            raiting: 2,
            comments: [
                {
                    id: guidService.new(),
                    text: "Mali porez je 25% strpi se još malo ploče su skinute sad će krenit filovana paprika za ručak po školama "
                },
                {
                    id: guidService.new(),
                    text: "A kaj ste očekivali za 110 kn, možda pršuta i sira? Ako vam ne paše jelo u školi jednostavno mu kupite sami marendu ili napravite kod kuće. "
                },
                {
                    id: guidService.new(),
                    text: "Meso u tragovima, sadržaj se mjeri u ppm-ovima. Muha u brišućem letu može ga pokupiti s kruha, ne smiješ ga ni otvoriti. "
                }
            ]
        }
    ];
});