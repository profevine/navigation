import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default function About({navigation}){

    return(
        <View style={{justifyContent: 'center', allignItens: 'center', flex: 1}}  >
            <Text> Essa e a sobre do nosso app</Text>
            <Button title="Ir para a proxima tela" />
        </View>

    )

}