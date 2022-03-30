/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  RefreshControl,
  useColorScheme,
  View,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import {
  ApplicationProvider,
  IndexPath,
  Layout,
  Select,
  SelectItem,
} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const widthConst = Dimensions.get('screen').width;

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  // const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const initialData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Susan Bert',
      image: '1',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Neil Arms',
      image: '2',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Carla Neice',
      image: '3',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53cbb28ba',
      title: 'Janice Hanner',
      image: '4',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fcd91aa97f63',
      title: 'James Sullivan',
      image: '5',
    },
  ];
  const [refreshing, setRefreshing] = React.useState(false);
  const [listData, setListData] = React.useState(initialData);

  function Item({title, image}) {
    return (
      <View style={styles.item}>
        {/* <Image source={IMAGES['image' + image]} style={styles.thumbnail} /> */}
        <Text style={styles.itemText}>{title}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <View
          style={{
            flex: 1,
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            // marginTop: 48,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Select
            style={{width: '90%'}}
            selectedIndex={selectedIndex}
            onSelect={index => setSelectedIndex(index)}>
            <SelectItem title="Option 1" />
            <SelectItem title="Option 2" />
            <SelectItem title="Option 3" />
          </Select>
        </View>
        <View style={{flex: 1}}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="useless placeholder"
            keyboardType="numeric"
          />
          <FlatList
            data={listData}
            renderItem={({item}) => (
              <Item title={item.title} image={item.image} />
            )}
            keyExtractor={item => item.id}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => console.log('fcking refreshing...')}
              />
            }
            contentContainerStyle={styles.list}
          />
        </View>
      </ApplicationProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  list: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: widthConst,
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#aaa',
  },
  itemText: {
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 18,
  },
});

export default App;
