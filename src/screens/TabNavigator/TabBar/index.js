import * as React from 'react';
import {SafeAreaView, View, Animated, Easing, Dimensions} from 'react-native';
import TabBarIcon from './TabBarIcon';
import styles from './styles';
const screenWidth = Math.round(Dimensions.get('window').width);
const backgroundViewWidth = screenWidth / 2;
export default class TabBar extends React.Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
  }
  handleAnimation = () => {
    Animated.timing(this.animatedValue, {
      toValue: this.props.navigation.state.index * backgroundViewWidth,
      duration: 200,
      easing: Easing.ease,
    }).start();
  };
  navigationHandler = routeName => {
    this.props.navigation.navigate(routeName);
  };
  render() {
    const {navigation} = this.props;
    const routes = navigation.state.routes;

    this.handleAnimation();
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
                    translateX: this.animatedValue,
                  },
                ],
              },
            ]}
          />

          {routes.map((route, index) => {
            return (
              <View key={index} style={styles.tabBarItem}>
                <TabBarIcon
                  key={route.key}
                  routeName={route.routeName}
                  onPress={currentRoute => this.navigationHandler(currentRoute)}
                  focused={navigation.state.index === index}
                  index={index}
                />
              </View>
            );
          })}
        </View>
      </SafeAreaView>
    );
  }
}
