const caixaPrincipal = document.querySelector(".caixa-principal");
        const caixaPerguntas = document.querySelector(".caixa-perguntas");
        const caixaAlternativas = document.querySelector(".caixa-alternativas");
        const caixaResultado = document.querySelector(".caixa-resultado");
        const textoResultado = document.querySelector(".texto-resultado");

        const perguntas = [
            {
                enunciado: "Como a tecnologia tem ajudado no aumento da produtividade no agronegócio?",
                alternativas: [
                    {
                        texto: " O mundo vem se modificando com o tempo com o uso de drones e sensores para monitoramento das culturas e diminuindo a mão de obra.",
                        afirmacao: "A tecnologia permite uma análise mais detalhada e precisa das condições das plantações,aumentando a eficiência e a produtividade."
                    },
                    {
                        texto: "Com o aumento de insumos químicos sem controle.",
                        afirmacao: "O uso indiscriminado de produtos químicos pode ser prejudicial ao meio ambiente e à saúde das pessoas ou até mesmo para a plantação."
                    }
                ]
            },
            {
                enunciado: "Qual a importância da sustentabilidade no agronegócio moderno?",
                alternativas: [
                    {
                        texto: "Garantir que a produção seja realizada sem considerar os impactos ambientais, e garantir os suprimento das necessidades de nossa geração e das gerações futuras.",
                        afirmacao: "A falta de preocupação com o meio ambiente pode levar à degradação dos recursos naturais e comprometer a produção a longo prazo."
                    },
                    {
                        texto: "Promover práticas que respeitam o meio ambiente e otimizam o uso dos recursos.",
                        afirmacao: "Práticas sustentáveis ajudam a preservar o meio ambiente e garantir a produção contínua de alimentos de forma responsável e menos serviços braçais."
                    }
                ]
            },
            {
                enunciado: "Como a integração lavoura-pecuária pode beneficiar o agronegócio?",
                alternativas: [
                    {
                        texto: "Aumentando a fertilidade do solo, acelera a recuperação de áreas degradadas.",
                        afirmacao: "A integração lavoura-pecuária, quando bem planejada, pode otimizar o uso da terra e reduzir custos com insumos."
                    },
                    {
                        texto: "Melhorando a eficiência do uso da terra e promovendo a ciclagem de nutrientes.",
                        afirmacao: "A correção do solo é uma prática agrícola que estabelece o equilíbrio da terra para que as plantas possam se desenvolver de forma saudável, evitando pragas e doenças, pode melhorar a produtividade e a saúde do solo, promovendo um sistema mais eficiente e sustentável."
                    }
                ]
            },
            {
                enunciado: "O que é a agricultura de precisão e qual sua vantagem principal?",
                alternativas: [
                    {
                        texto: "Com alta precisão a agricultura é uma das atividades mais antigas desenvolvidas pela humanidade, e sempre foi influenciada pelas tecnologias que surgiam. Técnicas de irrigação, de plantio, de tratamento de solo e de controle de pragas.",
                        afirmacao: "Suas vantagens da agricultura de precisão permite um manejo mais eficiente, reduzindo desperdícios e aumentando a produtividade das culturas evitando gastos desnecessários."
                    },
                    {
                        texto: "Aplicação de técnicas tradicionais sem uso de tecnologia.",
                        afirmacao: "Métodos tradicionais podem ser menos eficientes e não aproveitam os avanços tecnológicos disponíveis."
                    }
                ]
            },
            {
                enunciado: "Você está participando de um projeto sobre inovação no agronegócio. Qual tecnologia você destacaria como a mais promissora e por quê?",
                alternativas: [
                    {
                        texto: "O uso de robótica para automatizar processos agrícolas.",
                        afirmacao: "Robôs podem realizar tarefas repetitivas com precisão e eficiência, reduzindo a necessidade de trabalho manual e aumentando a produtividade capazes de realizar o plantio das sementes de forma automatizada e precisa, desde que sejam programadas para seguir os padrões necessários."
                        
                    },
                    {
                        texto: "O uso de métodos tradicionais de cultivo sem inovação.",
                        afirmacao: "Embora métodos tradicionais tenham seu valor, a inovação tecnológica pode oferecer soluções mais eficientes e sustentáveis."
                    }
                ]
            }
        ];

        let atual = 0;
        let perguntaAtual;
        let historiaFinal = "";

        function mostraPergunta() {
            if (atual >= perguntas.length) {
                mostraResultado();
                return;
            }
            perguntaAtual = perguntas[atual];
            caixaPerguntas.textContent = perguntaAtual.enunciado;
            caixaAlternativas.textContent = "";
            mostraAlternativas();
        }

        function mostraAlternativas() {
            for(const alternativa of perguntaAtual.alternativas) {
                const botaoAlternativas = document.createElement("button");
                botaoAlternativas.textContent = alternativa.texto;
                botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
                caixaAlternativas.appendChild(botaoAlternativas);
            }
        }

        function respostaSelecionada(opcaoSelecionada) {
            const afirmacoes = opcaoSelecionada.afirmacao;
            historiaFinal += afirmacoes + " ";
            atual++;
            mostraPergunta();
        }

        function mostraResultado() {
            caixaPerguntas.textContent = "Resumo do Quiz sobre Agronegócios:";
            textoResultado.textContent = historiaFinal;
            caixaAlternativas.textContent = "";
        }

        mostraPergunta();
 
