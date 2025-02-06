import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const DATA = [
  { id: '0000', title: 'Cooking' },
  { id: '0001', title: 'Breakfast' },
  { id: '0002', title: 'Toothbrush' },
  { id: '0003', title: 'Taking a Bath' },
  { id: '0004', title: 'Exercise' },
  { id: '0005', title: 'Social Media' },
];

const DATA1 = [
  { id: '0006', title: 'Lunch' },
  { id: '0007', title: 'Watching TV' },
  { id: '0008', title: 'Taking Rest' },
  { id: '0009', title: 'chat' },
  { id: '0010', title: 'Gala Sometimes' },
  { id: '0011', title: 'Reading' },
  { id: '0012', title: 'Singing' },
  { id: '0013', title: 'Writing Poems' },
  { id: '0014', title: 'Coding' },
];

const DATA2 = [
  { id: '0015', title: 'Meryenda' },
  { id: '0016', title: 'learning guitar' },
  { id: '0017', title: 'listening music' },
  { id: '0018', title: 'Self Study' },
  { id: '0019', title: 'taking rest' },
  { id: '0020', title: 'Talk to other' },
  { id: '0021', title: 'Giving advice in the Community' },
];

const DATA3 = [
  { id: '0022', title: 'Dinner' },
  { id: '0023', title: 'wash dishes' },
  { id: '0024', title: 'Playing online games' },
  { id: '0025', title: 'Listening music' },
  { id: '0026', title: 'Sleep' },
  { id: '0027', title: 'Watching Television' },
  { id: '0028', title: 'Playing Minecraft' },
];

const itemColors = {
  'Cooking': '#ffeb3b',
  'Breakfast': '#f44336',
  'Toothbrush': '#3f51b5',
  'Taking a Bath': '#4caf50',
  'Exercise': '#ff5722',
  'Social Media': '#3f51b5',
  'Lunch': '#9c27b0',
  'Watching TV': '#00bcd4',
  'Taking Rest': '#8bc34a',
  'chat': '#ff9800',
  'Gala Sometimes': '#795548',
  'Reading': '#673ab7',
  'Singing': '#e91e63',
  'Writing Poems': '#cddc39',
  'Coding': '#607d8b',
  'Meryenda': '#607d8b',
  'learning guitar': '#e91e63',
  'listening music': '#9e9e9e',
  'Self Study': '#cddc39',
  'taking rest': '#f44336',
  'Talk to other': '#795548',
  'Giving advice in the Community': '#3f51b5',
  'Dinner': '#2196f3',
  'wash dishes': '#ffc107',
  'Playing online games': '#673ab7',
  'Listening music': '#8bc34a',
  'Sleep': '#3f51b5',
  'Watching Television': '#ffeb3b',
  'Playing Minecraft': '#ff9800',
};

const Item = ({ title, onPress, isSelected }) => {
  const backgroundColor = isSelected ? '#493D9E' : itemColors[title] || '#f9c2ff';
  const color = isSelected ? 'white' : 'black';

  return (
    <View style={[styles.item, { backgroundColor }]}>
      <TouchableOpacity onPress={onPress} style={styles.itemContent}>
        <Text style={[styles.title, { color }]}>{title}</Text>
        {isSelected && <Text style={styles.checkMark}>✓</Text>}
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const [selectedItems, setSelectedItems] = useState({});

  const handlePress = (id) => {
    setSelectedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderItem = ({ item }) => {
    return (
      <Item
        title={item.title}
        onPress={() => handlePress(item.id)}
        isSelected={selectedItems[item.id]}
      />
    );
  };

  // Count selected and unselected items
  const selectedCount = Object.values(selectedItems).filter(Boolean).length;
  const totalItems = DATA.length + DATA1.length + DATA2.length + DATA3.length;
  const unselectedCount = totalItems - selectedCount;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.heading}>Morning</Text>
          <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />
          <Text style={styles.heading}>Noon</Text>
          <FlatList data={DATA1} renderItem={renderItem} keyExtractor={(item) => item.id} />
          <Text style={styles.heading}>After Noon</Text>
          <FlatList data={DATA2} renderItem={renderItem} keyExtractor={(item) => item.id} />
          <Text style={styles.heading}>Evening</Text>
          <FlatList data={DATA3} renderItem={renderItem} keyExtractor={(item) => item.id} />

          {/* Selection Summary */}
          <View style={styles.summaryContainer}>
            <Text style={styles.summaryText}> ✓Selected: {selectedCount}</Text>
            <Text style={styles.summaryText}> X Not Selected: {unselectedCount}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  scrollView: {
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 36,
    textAlign: 'center',
    marginVertical: 20,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
  },
  checkMark: {
    fontSize: 24,
    color: 'white',
  },
  summaryContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#FFD700',
    borderRadius: 8,
    marginHorizontal: 16,
  },
  summaryText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
