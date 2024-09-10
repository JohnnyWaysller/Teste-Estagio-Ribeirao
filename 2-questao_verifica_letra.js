// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

const letterVerification = (string) => {
    let counterLetter = 0
    for(let i=0; i<string.length; i++){
        if(string[i] === 'a' || string[i] === 'A' ){
            counterLetter++
        }
    }
    if(counterLetter !== 0){
        console.log(`a letra 'a' aparece ${counterLetter} vezes na string`)
        return
    }

    console.log(`Não possui ocorrencia de Letra 'a' na string`)
}

letterVerification("testndo conttem de letras a")