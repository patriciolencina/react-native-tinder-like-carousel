import React from 'react';
import {SafeAreaView, View, Text, Image, Dimensions} from 'react-native';

import DraggableView from '../../components/DraggableView';
import UserView from '../../components/UserView';
const heightDevice = Dimensions.get('window').height;
const DashboardView = ({users, moveRight, moveLeft}) => {
  if (!users) {
    return (
      <SafeAreaView>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#F9F9F9',
      }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '50%',
          backgroundColor: '#2D2E32',
        }}
      />
      {users.map(user => (
        <DraggableView
          containerStyle={{
            position: 'absolute',
            alignSelf: 'center',
            marginTop: heightDevice / 3,
          }}
          key={user.username}
          moveLeft={moveLeft}
          moveRight={() => moveRight(user)}>
          <UserView user={user} />
        </DraggableView>
      ))}
    </SafeAreaView>
  );
};

export default DashboardView;
