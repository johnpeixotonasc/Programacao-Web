/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: John Peixoto / 1820228
DATA 17/03/2023
*/

.card {
    width: 100px;
    height: 100px;
    background-color: #ccc;
    border-radius: 5px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .card.flipped {
    transform: rotateY(180deg);
  }
  
  .card.matched {
    background-color: green;
  }
  