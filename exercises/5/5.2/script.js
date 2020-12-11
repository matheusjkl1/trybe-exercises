addInBody();
addCenterContent();
textAdd();
imgAdd();
addList();
addH3();
    function addInBody(){
        let body = document.querySelector('body');

        let mainDiv = document.createElement('div');
        mainDiv.className = 'main-content';
        let h1Text = document.createElement('h1');
        h1Text.innerText = 'Exercício 5.2 - JavaScript DOM';
        body.appendChild(h1Text);
        body.appendChild(mainDiv);
};
   
    function addCenterContent(){

        let mainDivSelector = document.querySelector('.main-content');
        let leftContent = document.createElement('div');
        let rightContent = document.createElement('div');
        let centerDiv = document.createElement('div');
       
        leftContent.className = 'left-content';
        rightContent.className = 'right-content';
        centerDiv.className = 'center-content';
        mainDivSelector.appendChild(leftContent);
        mainDivSelector.appendChild(rightContent);
        mainDivSelector.appendChild(centerDiv);
};
    function addH3(){

        let mainDivSelector = document.querySelector('.main-content');

        for (let index = 1; index <= 3; index++) {
            const elementH3 = document.createElement('h3');
            elementH3.innerHTML = 'Show ' + index;
            mainDivSelector.appendChild(elementH3);
          }
    }
    function textAdd(){

        let divCenteSelection = document.querySelector('.center-content');

        let paragraph = document.createElement('p');
        paragraph.innerText = 'Algum Texto, muito interessante para demonstrar meu conhecimento';
        paragraph.style.textShadow = '2px 2px black';
        divCenteSelection.appendChild(paragraph);
}
    function imgAdd(){
        let leftContent = document.querySelector('.left-content');

        let imgLeftContent = document.createElement('img')
        imgLeftContent.setAttribute("src", "https://picsum.photos/200");
        imgLeftContent.setAttribute("width", "304");
        imgLeftContent.setAttribute("height", "228");
        imgLeftContent.setAttribute("alt", "The Pulpit Rock");
        imgLeftContent.className = 'small-image';
        
        leftContent.appendChild(imgLeftContent)
    }

    function addList(){

        const rightContent = document.querySelector('.right-content');
        let ulList = document.createElement('ul');
        rightContent.appendChild(ulList);

        const list = ['1','2','3','4','5','6','7','8','9','10',]
        for (let index in list){
            let elementList = document.createElement('li')
            elementList.innerText = list[index];
            ulList.appendChild(elementList);            
        }
    }

//Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;//

//Adicione a tag div com a classe main-content como filho da tag body ;//

//Adicione a tag div com a classe center-content como filho da tag div criada no passo 2; Feito //

//Adicione a tag p como filho do div criado no passo 3 e coloque algum texto; // Feito

//Adicione a tag div com a classe left-content como filho da tag div criada no passo 2; // Feito

//Adicione a tag div com a classe right-content como filho da tag div criada no passo 2; // Feito

//Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do div criado no passo 5;  // Feito

//Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. 
//Essa lista deve ser filha do div criado no passo 6;  // Feito

//Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2. // Feito