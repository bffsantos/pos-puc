function avaliaParidade(limiteSuperior){
    for(let i=0; i<limiteSuperior; i++){
        if(i%2 == 0)
            console.log(i+ ": é par")
        else
            console.log(i+ ": é ímpar")
    }
}

avaliaParidade(10)