import React, {useRef} from 'react';
import {TouchableWithoutFeedback, View, Animated, Easing} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../screens/TabNavigator/TabBar/styles';

const TabBarIcon = ({focused, onPress, index, routeName}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  if (focused) {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 200,
      easing: Easing.ease,
    }).start();
  } else {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 50,
      easing: Easing.ease,
    }).start();
  }

  let icon = '';

  switch (index) {
    case 0:
      icon = 'ios-home';
      break;

    case 1:
      icon = 'ios-heart';
      break;
  }
  const translateXObject = {
    translateX: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, index === 0 ? 2 : -2],
    }),
  };
  return (
    <TouchableWithoutFeedback onPress={() => onPress(routeName)}>
      <View style={[styles.wrapIcon]}>
        <Animated.View
          style={[
            styles.icon,
            {
              transform: [
                {
                  translateY: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -15],
                  }),
                },
                translateXObject,
              ],
            },
          ]}>
          <Icon name={icon} color="black" size={34} />
        </Animated.View>
        <Animated.Text
          style={[
            styles.textStyle,
            {
              transform: [
                {
                  translateY: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -40],
                  }),
                },
                translateXObject,
              ],
            },
          ]}>
          {routeName}
        </Animated.Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TabBarIcon;
