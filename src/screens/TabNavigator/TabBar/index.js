import React, {useRef} from 'react';
import {SafeAreaView, View, Animated, Easing, Dimensions} from 'react-native';
import {path} from 'ramda';
import TabBarIcon from '../../../components/TabBarIcon';
import styles from './styles';
const screenWidth = Math.round(Dimensions.get('window').width);
const backgroundViewWidth = screenWidth / 2;

const TabBar = ({navigation = {}}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const routes = path(['state', 'routes'], navigation) || [];
  const navigationIndex = path(['state', 'index'], navigation);

  Animated.timing(animatedValue, {
    toValue: navigationIndex * backgroundViewWidth,
    duration: 200,
    easing: Easing.ease,
  }).start();

  return (
    <SafeAreaView style={styles.containerSafe}>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.backgroundView,
            {width: backgroundViewWidth},
            {
              transform: [
                {
                  translateX: animatedValue,
                },
              ],
            },
          ]}
        />

        {routes.map((route, index) => {
          return (
            <TabBarIcon
              key={route.key}
              routeName={route.routeName}
              onPress={currentRoute => navigation.navigate(currentRoute)}
              focused={navigationIndex === index}
              index={index}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default TabBar;
