import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const StateDot = ({ status }) => {
  const color = status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : 'gray';

  return (
    <View style={styles.main}>
        <View
        style={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: color,
            marginRight: 5
        }}/>
        <Text>{ status }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    main: {
     flex:1,
     flexDirection:'row',
     alignItems:'center'
    }})
export default StateDot;
