// src/components/MainPage.js
import React from 'react';
import Title from './Title'; // Importando o Title, que já contém o título e o autor
import Idol from './Idol';
import './MainPage.css';  // Certifique-se de importar o CSS

function MainPage() {
    const idols = [
        {
            name: 'Marcelinho Carioca',
            image: './imagens/M_C.jpg',
            description: 'Um dos maiores ídolos do Corinthians, conhecido por seus gols de falta, sendo fundamental em conquistas e marcando a história com a camisa do Corinthians!!!'
        },
        {
            name: 'Ronaldo Fenômeno',
            image: './imagens/R_F.jpg',
            description: 'Escolhido três vezes o Melhor Jogador do Mundo pela FIFA, Ronaldo Fenômeno atraiu uma legião de torcedores e elevou a popularidade do Corinthians, destacando-se no clube com sua habilidade única, gols inesquecíveis e um carisma que conquistou os Corinthianos!!!'
        },
        {
            name: 'Cássio Ramos',
            image: './imagens/C_R.jpg',
            description: ' Goleiro histórico, presente em grandes conquistas do clube, Cássio se tornou uma lenda do Corinthians com suas defesas decisivas, especialmente em finais memoráveis, consolidando-se como um dos maiores ídolos da história do clube!!!'
        },
        {
            name: 'Carlitos Tevez',
            image: './imagens/C_T.jpeg',
            description: 'Um jogador argentino que conquistou a torcida com seu estilo de jogo e carisma, Tevez se tornou um ídolo eterno do Corinthians, sendo peça-chave na conquista do Campeonato Brasileiro de 2005. exemplo de entrega dentro do campo, conquistou o coração dos torcedores!!!'
        }
    ];

    return (
        <div className="mainpage-container">
            <Title />
            <div className="idols-container">
                {idols.map((idol, index) => (
                    <div key={index} className="idol-item">
                        <Idol
                            name={idol.name}
                            image={idol.image}
                            description={idol.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MainPage;
