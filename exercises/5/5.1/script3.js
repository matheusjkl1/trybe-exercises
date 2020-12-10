       /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

        function setText(){
            const futureText = document.getElementsByTagName('p')[1]
            futureText.innerText = 'Me vejo em um trabalho remoto, podendo passar um tempo sempre que der em minha cidade natal, com um bom salario e um inicio de carreira promissor.'
    }
    setText();
        function mainContentColor(){
            const mainContent = document.getElementsByClassName('main-content')[0];
            mainContent.style.background = 'rgb(76,164,109)'
    }       
    mainContentColor();    
        function centerContentColor(){
            const centerContent = document.getElementsByClassName('center-content')[0];
            centerContent.style.background = 'white'
    }
    centerContentColor()

        function titleCorrections(){
            const titleText = document.getElementsByTagName('h1')[0]
            titleText.innerHTML = 'Exercício 5.1 - JavaScrip'
    }       
    titleCorrections();

    function upperCaseText(){
        const paragraphText = document.getElementsByTagName('p');
        for(let index = 0; index < paragraphText.length; index +=1){
            paragraphText[index].style.textTransform = 'uppercase';
        }
    }
    upperCaseText()
    
    function paragraphPrinter(){
        const showParagraph = document.getElementsByTagName('p')
        for (index = 0; index < showParagraph.length; index += 1){
            console.log(showParagraph[index].innerHTML)
        }
    }
    paragraphPrinter();