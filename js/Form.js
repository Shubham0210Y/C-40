class Form{

    constructor(){}

    
    display(){
        this.title= createElement('h1')
        this.title.html(" Car Racing Game")
        this.title.position(100,100)
        this.input= createInput("Name")
        this.input.position(100,200)
        this.button= createButton("Start")
        this.button.position(100,250)
        this.button2= createButton("How To Play")
        this.button2.position(200,250)
        this.button.mousePressed(()=>{
           this.input.hide()
           this.button.hide()
           this.button2.hide()
            player.name = this. input.value()
            this.greetings= createElement('h3')
            this.greetings.html("Hello "+ player.name)
            this.greetings.position(200,300)
            playerCount++
            player.updateCount(playerCount)

          

        })
        

       
    }


}