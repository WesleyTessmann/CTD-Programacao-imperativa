        /*
            Converter Fahrenheit para Celsius - Nível I
            1.	Com base no código fonte cedido pelo professor:
            a.	Converta os  valores da lista, que estão em Fahrenheit, para celsius?

            Observação: Utilize map para ter acesso a todos os itens da variável e utilize a formula com base 
            na formula (0 °C × 9/5) + 32 = 32 °F.
        */
            var valoresEmFahrenheits = [0, 32, 45, 50, 75, 80, 120];

            /*
                Filtre nomes com menos de cinco letras - Nível II
                1.	Filtre todos os nomes com menos de cinco letras.
                
                Observação: Utilize filter para ter acesso a todos os itens da variável – Necesse caso eu não vou dá nenhuma pista kkk.
            */
            var listaDeNomes = ['Salomão', 'Angela', 'Dayane', 'Willian', 'Ana', 'Paulo', 'Junior', 'Edu', 'Caio', 'Joe', 'Ivo', 'Ivan'];
    
            /*
                Remova números duplicados e filtre todos os números pares - Nível III (Cereja do bolo)
    
                1.	Remova todos os valores duplicados;
                2.	Certifique-se que os valores estão duplicados;
                3.	Filtre todos os números pares;
                Observação: Utilize os metodos filter e every para realizar as operações.
    
            */
            var valoresDuplicados = [2, 3, 4, 5, 4, 12, 19, 7, 2, 4, 10, 25, 50, 3, 5];



            //COVERSOR DE GRAUS FAHRENHEITS PARA CELSIUS

            var copiaValoresFahrenheits = valoresEmFahrenheits.map(function(valor, indice, valorOriginal){
                return valor;
            });

            function converterParaCelsius(valor) {
                return (valor * 9/5) + 32
            }

