import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
//import { DrawerItems, SafeAreaView } from 'react-navigation';
import { Drawer, List, Button  } from 'react-native-paper';
import LoadingComp from './LoadingComp';
import theme from '../customTheme';

import MainMenuContainer from '../containers/MainMenuContainer';


const MainMenuComp = ({mainMenu, navigation}) => {

    const menu = mainMenu.map((item) => {

        const {key, name, onPress} = item;
        
        return (
            <Drawer.Item key={key}
            label={name}
            onPress={() => {
                //navigation.closeDrawer();
                onPress();
                }}
            />)}
        );

        //console.log(navigation);
    
return (
<View>
    <View style={{height:100, backgroundColor:theme.colors.accent}}></View>    
    <ScrollView>
        {mainMenu.length===0 ? <LoadingComp /> : menu}
    </ScrollView>    
</View>

)};


export default MainMenuContainer(MainMenuComp);