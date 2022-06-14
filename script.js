/*document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    alert(`Key pressed ${name} \r\n Key code value: ${code}`);
  }, false);*/

  
  window.onload=function(){
    const start=document.querySelector(".start");
    const reset=document.querySelector(".reset");

    start.addEventListener("click", StartPoziomu);
    reset.addEventListener("click", ResetPoziomu);
}

//zmienne
var CzyStop=0;
var CzyZaczete=0;
const Colors=["red", "blue", "green", "yellow", "orenge", "pink", "darkblue"];
const Shapes=["square", "rectangle"];
console.log(Colors);
console.log(Shapes);


// tworzenie tablicy
Board = new Array(10);                       
    for (i=0; i < 10; i++) {
        Board[i] = new Array(20);
            for (j=19; j >= 0; j--) {
                Board[i][j]=new Array(3);
                Board[i][j][0] = 0;
                Board[i][j][1] = "rgb(29, 29, 29";
                Board[i][j][2] = 0;
            }
    }


// tworzenie 3 kształtów

BoardKolejka = new Array(3);
    for(k=0; k<3; k++){
        BoardKolejka[k]=new Array(4);
            for (i=0; i < 4; i++) {
                BoardKolejka[k][i] = new Array(2);
                    for (j=0; j < 2; j++) {
                        BoardKolejka[k][i][j]=new Array(3);
                        BoardKolejka[k][i][j][0] = 0;
                        BoardKolejka[k][i][j][1] = "rgb(29, 29, 29";
                        BoardKolejka[k][i][j][2] = 0;
                    }
            }
        }

// funkcje
function StartPoziomu(){
    TworzenieKsztaltuPoczatek();
    DodawanieKsztaltowPoczatek();
    Wypisanie();
}

function StopPoziomu(){

}

function ResetPoziomu(){

}

function TworzenieKsztaltuPoczatek(){
    for(k=0; k<3; k++){
        var min=0;
        var max=7; 
        var VarColors=Math.floor(Math.random() * (max - min)) + min;
        min=0;
        max=2;
        var VarShapes=Math.floor(Math.random() * (max - min)) + min;

        console.log(VarColors+" "+VarShapes);
        if(VarShapes==0){
            BoardKolejka[k][1][0][0]=1;
            BoardKolejka[k][2][0][0]=1;
            BoardKolejka[k][1][1][0]=1;
            BoardKolejka[k][2][1][0]=1;
            
            BoardKolejka[k][1][0][1]=Colors[VarColors];
            BoardKolejka[k][2][0][1]=Colors[VarColors];
            BoardKolejka[k][1][1][1]=Colors[VarColors];
            BoardKolejka[k][2][1][1]=Colors[VarColors];
            
        }

        if(VarShapes==1){
            BoardKolejka[k][0][1][0]=1;
            BoardKolejka[k][1][1][0]=1;
            BoardKolejka[k][2][1][0]=1;
            BoardKolejka[k][3][1][0]=1;
            
            BoardKolejka[k][0][1][1]=Colors[VarColors];
            BoardKolejka[k][1][1][1]=Colors[VarColors];
            BoardKolejka[k][2][1][1]=Colors[VarColors];
            BoardKolejka[k][3][1][1]=Colors[VarColors];
            
        }

        }
        
        console.log(BoardKolejka);
}

function TworzenieKsztaltuGra(){

}

function DodawanieKsztaltowPoczatek(){

        for(i=3;i<7;i++){
            for(j=19;j>17;j--){
                Board[i][j][0]=BoardKolejka[0][i-3][Math.abs(j-19)][0];
                Board[i][j][1]=BoardKolejka[0][i-3][Math.abs(j-19)][1];
            }
        }
}

function DodawanieKsztaltowGra(){
    
}

function Wypisanie(){
    for (i=0; i < 10; i++) {
            for (j=19; j >= 0; j--) {
                var Change=document.getElementById(i+"-"+j);
                Change.style.backgroundColor=Board[i][j][1];
            }
    }

    for(i=0;i<4;i++){
        for(j=0;j<2;j++){
            Change=document.getElementById("m"+i+"-"+j);
            Change.style.backgroundColor=BoardKolejka[1][i][j][1];
        }
    }

    for(i=0;i<4;i++){
        for(j=0;j<2;j++){
            Change=document.getElementById("n"+i+"-"+j);
            Change.style.backgroundColor=BoardKolejka[2][i][j][1];
        }
    }
    
} 