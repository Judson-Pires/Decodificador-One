let a, e, i, o,u, listaDeVogais, vogais, codificada, decodificada, numeros;

a = 'ai';
e = 'enter';
i = 'imes';
o = 'ober';
u = 'ufat';

numeros = ['1', '2', '3', '4', '5']
vogais = ['a', 'e', 'i', 'o', 'u']
listaDeVogais = [a,e,i,o,u];


function pegarTexto(vogais,listaDeVogais,numeros){
    codificada = document.getElementById('mensagem').value;
    decodificada = codificada
    if (/[A-Zà-úÀ-Ú0-9]/.test(codificada)) {
        alert('use apenas letras minusculas')
      }
      else{
        for(let contador = 0 ; contador < 5 ; contador ++){
            decodificada = decodificada.replaceAll(vogais[contador],numeros[contador]);
            console.log(decodificada)
        }
        for(let contador = 0 ; contador < 5 ; contador ++){
            decodificada = decodificada.replaceAll(numeros[contador],listaDeVogais[contador]);
            console.log(decodificada)
        }
        let visual = document.getElementById('decodificado');
        visual.innerHTML = decodificada;
        visual.style.fontSize = '1.5rem';
        visual.style.fontWeight = '400';
        visual.style.color = '#495057';
        document.querySelector('.botao-escuro-direito').style.display='block';
      }

    return decodificada;
}
function descriptgrafar(vogais,listaDeVogais,numeros){
    codificada = document.getElementById('mensagem').value;
    decodificada = codificada
    if (/[A-Zà-úÀ-Ú0-9]/.test(codificada)) {
        alert('use apenas letras minusculas')
      }
      else{
    for(let contador = 0 ; contador < 5 ; contador ++){
        decodificada = decodificada.replaceAll(listaDeVogais[contador],numeros[contador]);
        console.log(decodificada)
    }
    for(let contador = 0 ; contador < 5 ; contador ++){
        decodificada = decodificada.replaceAll(numeros[contador],vogais[contador]);
        console.log(decodificada)
        let visual = document.getElementById('decodificado');
        visual.innerHTML = decodificada;
        visual.style.fontSize = '1.5rem';
        visual.style.fontWeight = '400';
        visual.style.color = '#495057';
        visual.style.display = 'block';
        document.querySelector('.botao-escuro-direito').style.display='block';
    }
    }
    return decodificada;
}

function copiar(){
    let texto = document.getElementById('decodificado').innerText;
    console.log(texto);
    navigator.clipboard.writeText(texto)
    .then(() => console.log("Texto copiado com sucesso!"))
    .catch(err => console.error("Falha ao copiar o texto:", err));
}

