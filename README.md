# navigation
criando navegacao stack


React Native precisa de uma biblioteca externa para navegação entre telas

Chamada de React Navigation

React Navigation cria o 
<NavigationContainer>

</NavigationContainer>







Navegação Stack
Assim como na web com os links para outras paginas no Stack funciona mais ou menos da mesma maneira
Teremos elementos na tela como um botao que tem um "link" que leva para outra tela. Essa nova tela
e criada sobre a outra tela, ou seje uma encima da outra.

Teremos um cabecalho com o nome da pagina em questao

Na nova janela criada ainda teremos um cabecalho com o botao para voltarmos a tela anterior
Isso tudo vai ser criado automaticamente, alguns celulares pode ter fisicamente o botao(o mesmo que o botao virtual do android)

Todas as telas ficam renderizadas na pilha.
Se tiver muitas telas o garbage collector comeca a destruir telas

que apps vcs conhecem que implementa isso?

Caracteristicas do stack
Botao de voltar
Ausencia de Menu
Navegacao atraves dos elementos na tela Botoes etc...
Nao tem um Limite de telas

iOS usa quase so stack

podemos dizer que o stack carrega so o que esta em questao e o que esta em outras telas fica em 2 plano



Navegação TAB  

Pode estar no rodape ou no cabecalho

Pode ter icones nas tabs ou texto, ou ambos

apps que usam tabs?

Ainda possui um cabecalho dizendo onde o user esta, [e possivel ocultar o cabecalho]
Nao possui o botao de voltar, pois a navegacao e atraves de um menu com os icones
Possui o Menu com as telas que estao mapeadas na propriedade screen
Cada tela mapeada vai aparecer no meu tab
todos os item do menu vai ser do mesmo tamanho e vai espremendo os icones 
ate da pra fazer rolagem horizontal, mas nao e usual
Cada nova tela e renderizada e fica na memoria, 

Nao temos limites de telas, mas devemos cuidar o custo de memoria e processamento para manter
estas telas

Tab e recomendado para apps que terao poucas telas, ou quando quero ter o acesso rapido a qualquer tela
rapidamente

Toda tela renderizada fica na memoria ate o aapp ser encerrado



Navegação Drawer


Tera o cabecalho com o menu hamburguer e o nome da tela

Ao abrir a gaveta, revela o menu com os nomes das telas e icones como no tabs

Nao tem o botao de voltar
MAs tem o menu
Nao tem limite de telas
Menu fica oculto, logo libera espaco na tela
So e renderizada a pagina renderizada
cada pagina renderizada, e destruida quando nao esta sendo usada

Recomendado quando temos muitas paginas e nao precisamos de telas de acesso rapido




AGORA VAMOS PARA A PRATICA

Vamos para o site do react-navigation

reactnavigation.org

Vemos a documentacao

Criamos um novo projeto 
Instalamos a lib com npm install @react-navigation/native

Instalamos as dependencias com npm install react-native-screens react-native-safe-area-context

Essas libs criam as areas e limites de cada navegacao

vamos em API reference Navigators na documentacao para pegar os exemplos
Nao usem a native stack pq nao ta funcionando no android

Instalamos a stack com npm install @react-navigation/stack

Intalar o gesture handler
com npm install react-native-gesture-handler

Criar uma pasta chamada Navigators

Criar o StackNavigator.js dentro da pasta navigators


dentro


import Home from "./Screens/Home"
import About from "./Screens/About"


import { createStackNavigator } from "@react-navigation/stack"


export default function Stack(){

    return(
        <Stack.Navigator>
            <Stack.Screen component={Home} name = "Pagina Inicial" />
            <Stack.Screen component={About} name = "Sobre Nos" />


        </Stack.Navigator>


    )



}







Criar o home e o about com

import React, { Component } from `react`
import { View, Text, Button } from `react-native`


export default function Home(){

    return(
        <View style={{justifyContent: 'center', allignItens: 'center', flex: 1}}  >
            <Text> Essa e a Home do nosso app</Text>
            <Button title="Ir para a proxima tela" />
        </View>

    )


}


depois volta pra stacknavigator



App.js

Nao precisa mais da View, agora podemos chamar direto o Navigation COntainner




























