class Game{

    constructor(){}


    getState(){
       database.ref('gameState').on("value",(data)=>{
           gameState= data.val()
       })
    }



    update( state){
       database.ref('/').update ({
           gameState:state
       })
    }



    
    async start(){
        player= new Player()
        form= new Form()
        form.display()

       var dataRef = await database.ref('playerCount').once("value")
       if(dataRef.exists()){
           player.getCount()
       }
       
        

    }
    play(){
        form.greetings.hide()
        textSize(20);
        text("Game Start", 200,200)

    }
}
