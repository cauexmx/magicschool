let Capacidade = 'Cura'
let Habilidade = 'Feitiços de Proteção'
let Grau = 8
let Adesão = 'S'
let Disposição = 'S'
let Desejo = 'S'

function magia(){
    if(Capacidade == "Fogo" && Habilidade == "Controle de Elementos"){
        document.write("Capacidade Mágica Dominante = Fogo, Habilidade Específica = Controle de Elementos")
        alert("Aprovado") 
    }
    
    else if(Capacidade == "Cura" && Habilidade == "Feitiços de Proteção"){
        document.write("Capacidade Mágica Dominante = Cura , Habilidade Específica = Feitiços de Proteção")
        alert("Aprovado")
    }
    
    else if(Capacidade == "Transformação" && Grau == 8){
        document.write("Capacidade Mágica Dominante = Fogo, Habilidade Específica = Controle de Elementos")
        alert("Aprovado")
    }
    
    else if(Capacidade == "Ilusão" && Adesão == 'S' && Disposição =='S' ){
        document.write("Capacidade Mágica Dominante = Fogo, Habilidade Específica = Controle de Elementos")
        alert("Aprovado")
    }
    
    else(alert("Reprovado"), document.write('Reprovado'))
}

magia()


