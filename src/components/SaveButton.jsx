import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const SaveButton = () => {
const [iconName, setIconName] = useState('bookmark-outline');
  const onPressHandler = () => {
    setIconName(iconName === 'bookmark-outline' ? 'bookmark' : 'bookmark-outline');
    
  };

  return (
    <View>
      <TouchableOpacity onPress={onPressHandler}>  
        <Icon name={iconName} size={20} color={'black'}/>
      </TouchableOpacity>
    </View>
  ); 
};

export default SaveButton;
