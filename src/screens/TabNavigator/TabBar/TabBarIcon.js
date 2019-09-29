import * as React from 'react';
import {TouchableWithoutFeedback, View, Animated, Easing} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
export default class TabBarIcon extends React.PureComponent {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
  }
  handleAnimation = () => {
    if (this.props.focused) {
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 200,
        easing: Easing.ease,
      }).start();
    } else {
      Animated.timing(this.animatedValue, {
        toValue: 0,
        duration: 50,
        easing: Easing.ease,
      }).start();
    }
  };
  onSelect = routeName => this.props.onPress(routeName);

  render() {
    this.handleAnimation();

    const {index, routeName} = this.props;
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
      translateX: this.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, index < 2 ? 2 : index === 2 ? 0 : -2],
      }),
    };
    return (
      <TouchableWithoutFeedback onPress={() => this.onSelect(routeName)}>
        <View style={[styles.wrapIcon]}>
          <Animated.View
            style={[
              styles.icon,
              {
                transform: [
                  {
                    translateY: this.animatedValue.interpolate({
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
                    translateY: this.animatedValue.interpolate({
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
  }
}
