import {  StyleSheet, useColorScheme, Text, View } from 'react-native';
import {StatusBar} from 'expo-status-bar';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer: styles.darkContainer;

  return (
    <View style = {[styles.container, themeContainerStyle]}>
      <Text>jjjj</Text>
      <Text style = {[styles.text, themeTextStyle]}>Color : {colorScheme}</Text>
      <Text style = {[styles.text, themeTextStyle]}>Color Scheme: {colorScheme}</Text>
      <Text style = {[styles.text, themeTextStyle]}>Color Scheme: {colorScheme}</Text>
      <Text style = {[styles.text, themeTextStyle]}>Color Scheme: {colorScheme}</Text>
      <Text style = {[styles.text, themeTextStyle]}>Color Scheme: {colorScheme}</Text>
      <Text style = {[styles.text, themeTextStyle]}>Color Scheme: {colorScheme}</Text>
      <Text style = {[styles.text, themeTextStyle]}>Color Scheme: {colorScheme}</Text>
      <Text style = {[styles.text, themeTextStyle]}>Color Scheme: {colorScheme}</Text>
      <Text style = {[styles.text, themeTextStyle]}>Color Scheme: {colorScheme}</Text>
      <Text style = {[styles.text, themeTextStyle]}>Color Scheme: {colorScheme}</Text>
      <Text style = {[styles.text, themeTextStyle]}>Color Scheme: {colorScheme}</Text>
      <Text style = {[styles.text, themeTextStyle]}>Color Scheme: {colorScheme}</Text>
      <Text style = {[styles.text, themeTextStyle]}>Color Scheme: {colorScheme}</Text>
      <Text style = {[styles.text, themeTextStyle]}>Color Scheme: {colorScheme}</Text>
      <Text style = {[styles.text, themeTextStyle]}>Color Scheme: {colorScheme}</Text>
      <Text style = {[styles.text, themeTextStyle]}>Color Scheme: {colorScheme}</Text>
      <Text style = {[styles.text, themeTextStyle]}>Color Scheme: {colorScheme}</Text>
      <Text style = {[styles.text, themeTextStyle]}>Color Scheme: {colorScheme}</Text>
      <Text style = {[styles.text, themeTextStyle]}>Color Scheme: {colorScheme}</Text>
      <Text style = {[styles.text, themeTextStyle]}>Color Scheme: {colorScheme}</Text>
      <Text style = {[styles.text, themeTextStyle]}>Color Scheme: {colorScheme}</Text>
      <Text style = {[styles.text, themeTextStyle]}>Color Scheme: {colorScheme}</Text>
      <Text style = {[styles.text, themeTextStyle]}>Color Scheme: {colorScheme}</Text>
      <StatusBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20
  },
  lightThemeText: {
    color: '#d0d0c0'
  },
  darkThemeText: {
    color: '#242c40'
  },
  lightContainer: {
    backgroundColor: '#d0d0c0'
  },
  darkContainer: {
    backgroundColor: '#242c40'
  },
});
