import React from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';

const MyFavoriteView = ({users}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        data={users}
        numColumns={1}
        keyExtractor={item => item.username}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: 'white',
              flexDirection: 'row',
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
              padding: 20,
            }}>
            <Image
              resizeMode="contain"
              source={{uri: item.picture}}
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                borderColor: 'gray',
                borderWidth: 1,
                marginRight: 20,
              }}
            />
            <View
              style={{
                flexDirection: 'column',
              }}>
              <Text style={{color: 'black'}}>{item.username}</Text>
              <Text style={{color: 'black'}}>{item.address}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default MyFavoriteView;
