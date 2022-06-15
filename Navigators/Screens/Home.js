import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default function Home({navigation}){

    return(
        <View style={{justifyContent: 'center', allignItens: 'center', flex: 1}}  >
            <Text> Essa e a Home do nosso app</Text>
            <Button title="Ir para a proxima tela" onPress={() => navigation.navigate('About') }/>
        </View>

    )


}