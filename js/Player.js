class Player{

    constructor(){
        this.name= null
    }

    getCount(){
        database.ref('playerCount').on("value", (data)=>{
            playerCount=data.val()

        })

       
    }


    updateCount(count){
        database.ref('/') .update({
            playerCount:count
        })
       
    }
}      