 const player0 = {
    nickName: 'Jhonny Malthuls',
    elo: 'Platina',
    mainLane: 'Top',
    mainPicks: 'Sett, Shen, Malphite'
 }
 const player2 = {
   nickName: 'Rokurokubi Ameon',
   elo: 'Gold',
   mainLane: 'Sup',
   mainPicks: 'Soraka, Nami, Taric'
}

const player3 = {
   nickName: 'Soyho',
   elo: 'Platina',
   mainLane: 'Jg',
   mainPicks: 'Lee Sin, Rammus, Kha`Zix'
}

    player0.favoriteComp = 'Front to Front'
    
    let newKey = 'flexLane';
    const flexLane = 'Mid';
    player0[newKey] = flexLane;
    newKey = 'allLanes';
    const allLanes = `${player0.mainLane}, ${player0.flexLane}`;
    player0[newKey] = allLanes;
    

   player2.favoriteComp = 'Front to Back'
   player2.flexLane = 'None'
   player2.allLanes = `${player2.mainLane}, ${player2.flexLane}`;

   player3.favoriteComp = 'Flank'
   player3.flexLane = 'Mid'
   player3.allLanes = `${player3.mainLane}, ${player3.flexLane}`;

console.table(player0);
console.table(player2)
console.table(player3)

console.log(Object.keys(player0))
console.log(Object.values(player0))

const discription = (player) => {
   const objectDeclaration = Object.keys(player);
   const objectDeclaration1 = Object.keys(player3);

   console.log(`${player[objectDeclaration[0]]} É muito bom jogador com ${player[objectDeclaration[3]]}`)
   console.log(`${player3[objectDeclaration1[0]]} É chato`)
}

console.log('Player 1');
discription(player0);
console.log('Player 2');
discription(player2);
console.log('Player 3');
discription(player3);