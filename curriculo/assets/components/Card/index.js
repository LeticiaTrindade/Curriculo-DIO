import React from 'react';
import {Text, View } from 'react-native';

import styles from './styles.js';

const Card = ({titulo, children}) => {



    return (
        <View style={styles.card}>
            <Text>{titulo}</Text>
            {children}

        </View>
    )


} 

export default Card;