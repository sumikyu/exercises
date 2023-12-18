const ranking = [
    {position: 1, name: 'Pepito', scoring: 9},
    {position: 2, name: 'Antonia', scoring: 7},
    {position: 3, name: 'Maricarmen', scoring: 6},
    {position: 4, name: 'Gertrudis', scoring: 3},
    {position: 5, name: 'Dolores', scoring: 2},
];

/*<div class="ranking__item">
<div><strong>1</strong>Pepito</div>
<div>9 puntos</div>´
</div> */


const writeRankingHtml = (rankingToWrite) => {
    const rankingNode = document.querySelector('.ranking');
    let rankingHtml = '';
  
    rankingToWrite.forEach((positionInfo) => {
      const pointsLabel = positionInfo.scoring === 1 ? 'punto' : 'puntos';
  
      rankingHtml += `<div class="ranking__item">
          <div><strong>${positionInfo.position}.</strong> ${positionInfo.name}</div>
          <div>${positionInfo.scoring} ${pointsLabel}</div>
        </div>`;
    });
  
    rankingNode.innerHTML = rankingHtml;
  };
  
  writeRankingHtml(ranking);