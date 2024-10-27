import { useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedTextInput } from '@/components/ThemedTextInput';
import { View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export type SearchBarProps = {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function SearchBar () {
  const [inputValue, setInputValue] = useState('');

  return (
    <View>
      <ThemedText type="subtitle">Try Input</ThemedText>
      <ThemedText type="subtitle">{inputValue}</ThemedText>
      <View style={styles.inputWithActionContainer}>
        <ThemedTextInput placeholder='Testando' onChangeText={value => setInputValue(value)} style={styles.input} />
        <Ionicons name="arrow-forward-circle-outline" size={32} color="green" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputWithActionContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center', 
  },
  input: {
    width: '80%',
  },
});