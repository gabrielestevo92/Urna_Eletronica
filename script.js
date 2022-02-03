
cont = '';
numeroDoCandidato = '';
a = '';

var candidato_0 = {
    numero: '',
    foto: '',
    nome: '',
    partido: '',
    vice: ''
}



var candidato_17 = {
    numero:  17,
    foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jair_Bolsonaro_em_24_de_abril_de_2019_%281%29_%28cropped%29.jpg/407px-Jair_Bolsonaro_em_24_de_abril_de_2019_%281%29_%28cropped%29.jpg',
    nome: "Jair Messias Bolsonaro",
    partido: "Sem Partido",
    vice: "General Heleno"

};
var candidato_13 = {
    numero: 13,
    foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Lula_-_foto_oficial_-_05_jan_2007.jpg/220px-Lula_-_foto_oficial_-_05_jan_2007.jpg',
    nome: "Luiz Inácio Lula da Silva",
    partido: "Partido Trabalhista",
    vice: "Dilma Housseff"
    
};
var candidato_12 = {
    numero: 12,
    foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ciro_gomes_no_programa_3_a_1_%28cropped%29.jpg/200px-Ciro_gomes_no_programa_3_a_1_%28cropped%29.jpg',
    nome: "Ciro Ferreira Gomes",
    partido: "Partido Democratico Trabalhista",
    vice: "Não Informado"

}
var candidato_22 = {
    numero: 22,
    foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Deputados_cabo_Daciolo_%28PSOL-RJ%29_e_Marcos_Reategui_%28PSC-AP%29_participam_do_programa_Brasil_em_Debate_%28cropped%29.jpg/220px-Deputados_cabo_Daciolo_%28PSOL-RJ%29_e_Marcos_Reategui_%28PSC-AP%29_participam_do_programa_Brasil_em_Debate_%28cropped%29.jpg',
    nome: "Benevenuto Daciolo Fonseca dos Santos",
    partido: "PL",
    vice: "Não Informado"
}



function digito(valor){
    const numero1 = document.getElementById("primeiro-numero");    
    const numero2 = document.getElementById("segundo-numero");   
    if (valor == 'limpar'){
        document.getElementById("primeiro-numero").innerHTML = '';
        document.getElementById("segundo-numero").innerHTML = '';
        document.getElementById("primeiro-numero").classList = "numero pisca";
        document.getElementById("segundo-numero").classList = "numero";
        cont = '';
        chama_candidato('');
    } 
    else if (cont == ''){
        cont += valor;
        document.getElementById("primeiro-numero").innerHTML = valor;
        document.getElementById("segundo-numero").innerHTML = '';
        numero1.classList = "numero";
        numero2.classList = "numero pisca";        
    }
    else{
        document.getElementById("segundo-numero").innerHTML = valor;
        cont += valor;
        numero2.classList = "numero";
        chama_candidato(cont);        
        cont = '';
    }

    
    
    
}
function chama_candidato(numero){  
    
    
    if (numero == candidato_13.numero){
        mostra_candidato(candidato_13);
    }
    else if (numero == '17'){
        mostra_candidato(candidato_17);
    }
    else if(numero == '12'){
        mostra_candidato(candidato_12);        
    }
    else if(numero == '22'){
        mostra_candidato(candidato_22);        
    }
    else{
        mostra_candidato(candidato_0);       
    }    


}

function mostra_candidato(candidato){    
    imagem = document.getElementById('candidato');    
    Object.entries(candidato).forEach(entry =>{          
        const [key,value] = entry;
        
        img = value.toString();
        b = key;
        if (b == 'foto'){
            imagem.src = img;            
        }
        else if (b == 'nome'){
            a = 'nome';
        }
        
        else if (b == 'partido'){
            a = 'partido';
        }
        else{
            a = 'vice';
        }
        document.getElementById(a).innerHTML = value;
    });    
}
