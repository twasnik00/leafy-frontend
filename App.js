import { StatusBar } from 'expo-status-bar';

//import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
  
  const renderOptions = () => {
    const options = [
      { name: 'Type', values: ['Indoor Plant', 'Outdoor Plant'] },
      { name: 'Care Level', values: ['Beginner-friendly', 'I can keep few plants alive', 'I have a PhD in plant'] },
      { name: 'Watering', values: ['Yes I got the time in the world', 'I might have a minute or two', 'I can barely sit down'] },
      { name: 'Sunlight', values: ['I’m drowning in sunlight', 'I get it then and there', "What's sunlight"] },
    ];

    return options.map((option, index) => (
      <TouchableOpacity
        key={index}
        style={styles.optionButton}
        onPress={() => handleOptionPress(option.name)}
      >
        <Text style={styles.optionText}>{option.name}</Text>
      </TouchableOpacity>
    ));
  };

  const renderOptionValues = () => {
    const options = {
      Type: ['Indoor Plant', 'Outdoor Plant'],
      'Care Level': ['Beginner-friendly', 'I can keep few plants alive', 'I have a PhD in plant'],
      Watering: ['Yes I got the time in the world', 'I might have a minute or two', 'I can barely sit down'],
      Sunlight: ['I’m drowning in sunlight', 'I get it then and there', "What's sunlight"],
    };

    return options[selectedOption].map((value, index) => (
      <View key={index} style={styles.circleContainer}>
        <View style={styles.circle} />
        <Text style={styles.circleText}>{value}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      {!selectedOption ? (
        <View style={styles.optionsContainer}>{renderOptions()}</View>
      ) : (
        <View style={styles.valuesContainer}>{renderOptionValues()}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  optionsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  valuesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionButton: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  circleContainer: {
    alignItems: 'center',
    margin: 10,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'lightblue',
  },
  circleText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
