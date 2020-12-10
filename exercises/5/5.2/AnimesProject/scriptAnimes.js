const animesList = [
    'Fullmetal Alchemist Brotherhood',
    'Hunter x Hunter',
    'Oregairu',
    'Sakurasou no Pet Na Kanojo',
    'Nisekoi',
    'Kanojo Okarishimasu',
];
headerStyle();
body();
addAnimeList();
addFmaSpecs();
addHxhSpecs();
addOregairuSpecs();
addSnpnkSpecs();
addNisekoiSpecs();
addKanojoSpecs();

    function addAnimeList(){
    let bestAnimesList = document.querySelector('.best-animes-list');

    for(let animesIndex = 0; animesIndex < animesList.length; animesIndex +=1){
        let animes = animesList[animesIndex];

        let animesListItem = document.createElement('li');
        animesListItem.innerText = animes;
        animesListItem.className = 'anime-list'
        animesListItem.style.textTransform = 'uppercase'
        animesListItem.style.color = 'red'
        bestAnimesList.appendChild(animesListItem)
    }
};

function headerStyle (){
    let headerStyle = document.querySelector('header');
    headerStyle.style.color = '#680a0a';
    headerStyle.style.textTransform = 'uppercase'
}

 function body (){

    let bodyStyle = document.querySelector('body');
    bodyStyle.style.background = '#19b5a2';
    bodyStyle.style.fontSize ='20px';
    bodyStyle.style.fontFamily = 'monospace'
};

function addFmaSpecs(){
    let setAnime = document.querySelector('.best-animes-list').firstChild;
     const fmaList = [
        'Edward Elric',
        'Alphonse Elric',
        'Trisha Elric',
        'Van Hohenheim',
];
    for(let animeIndex = 0; animeIndex < fmaList.length; animeIndex +=1){

        let fmaItems = fmaList[animeIndex]
        let animesDetails = document.createElement('li');
        animesDetails.innerText = fmaItems;
        animesDetails.className = 'fma-list'
        animesDetails.style.color = 'darkred'
        animesDetails.style.fontSize = '12px'
        animesDetails.style.marginLeft = '60px'
        setAnime.appendChild(animesDetails)

    }    
};

function addHxhSpecs(){
    let setAnime = document.querySelector('.best-animes-list').firstChild.nextSibling;
     const hxhList = [
        'Gon Freecs',
        'Killua Zoldyck',
        'Kurapika Kuruta',
        'Leorio Paradinight',
];
    for(let animeIndex = 0; animeIndex < hxhList.length; animeIndex +=1){

        let hxhItems = hxhList[animeIndex]
        let animesDetails = document.createElement('li');
        animesDetails.innerText = hxhItems;
        animesDetails.className = 'hxh-list'
        animesDetails.style.color = 'darkred'
        animesDetails.style.fontSize = '12px'
        animesDetails.style.marginLeft = '60px'
        setAnime.appendChild(animesDetails)

    }    
}

function addOregairuSpecs(){
    let setAnime = document.querySelector('.best-animes-list').firstChild.nextSibling.nextSibling;
     const oregairuList = [
        'Hachiman Hikigaya',
        'Yui Yuigahama',
        'Yukino Yukinoshita',
        'Iroha Isshiki',
];
    for(let animeIndex = 0; animeIndex < oregairuList.length; animeIndex +=1){

        let oregairuItems = oregairuList[animeIndex]
        let animesDetails = document.createElement('li');
        animesDetails.innerText = oregairuItems;
        animesDetails.className = 'oregairu-list'
        animesDetails.style.color = 'darkred'
        animesDetails.style.fontSize = '12px'
        animesDetails.style.marginLeft = '60px'
        setAnime.appendChild(animesDetails)

    }    
};

function addSnpnkSpecs(){
    let setAnime = document.querySelector('.best-animes-list').firstChild.nextSibling.nextSibling.nextSibling;
     const SnpnkList = [
        'Sorata Kanda',
        'Mashiro Shiina',
        'Misaki Kamiigusa',
        'Ryuunosuke Akasaka',
        'Nanami Aoyama',
        'Jin Mitaka',
];
    for(let animeIndex = 0; animeIndex < SnpnkList.length; animeIndex +=1){

        let SnpnkItems = SnpnkList[animeIndex]
        let animesDetails = document.createElement('li');
        animesDetails.innerText = SnpnkItems;
        animesDetails.className = 'snpnk-list'
        animesDetails.style.color = 'darkred'
        animesDetails.style.fontSize = '12px'
        animesDetails.style.marginLeft = '60px'
        setAnime.appendChild(animesDetails)

    }    
};

function addNisekoiSpecs(){
    let setAnime = document.querySelector('.best-animes-list').firstChild.nextSibling.nextSibling.nextSibling.nextSibling;
     const nisekoiList = [
        'Raku Ichijou',
        'Kosaki Onodera',
        'Chitoge Kirisaki',
];
    for(let animeIndex = 0; animeIndex < nisekoiList.length; animeIndex +=1){

        let nisekoiItems = nisekoiList[animeIndex]
        let animesDetails = document.createElement('li');
        animesDetails.innerText = nisekoiItems;
        animesDetails.className = 'nisekoi-list'
        animesDetails.style.color = 'darkred'
        animesDetails.style.fontSize = '12px'
        animesDetails.style.marginLeft = '60px'
        setAnime.appendChild(animesDetails)
    }    
};

function addKanojoSpecs(){
    let setKanojo = document.querySelector('.best-animes-list').firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
     const kanojoList = [
        'Kazuya Kinoshita',
        'Chizuru Ichinose',
        'Mami Nanami',
        'Sumi Sakurasawa',
        'Ruka Sarashina',
];
    
for(let animeIndex = 0; animeIndex < kanojoList.length; animeIndex +=1){

        let kanojoItems = kanojoList[animeIndex]
        let animesDetails = document.createElement('li');
        animesDetails.innerText = kanojoItems;
        animesDetails.className = 'kanojo-list'
        animesDetails.style.color = 'darkred'
        animesDetails.style.fontSize = '12px'
        animesDetails.style.marginLeft = '60px'
        setKanojo.appendChild(animesDetails)
};
let vadiaRemove = document.querySelectorAll('.kanojo-list');

for(let indexRemove = 0; indexRemove < vadiaRemove.length; indexRemove += 1){
    let element = vadiaRemove[indexRemove];
    if(element.innerHTML.includes('Mami Nanami')){
        setKanojo.removeChild(element);
    }
}
}


