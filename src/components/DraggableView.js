import React from 'react';
import {Animated, PanResponder} from 'react-native';

export default function Drag({children, moveLeft, moveRight, containerStyle}) {
  const pan = React.useRef(new Animated.ValueXY());

  const onMove = React.useCallback((_, {dx}) => {
    if (dx > 100) {
    } else if (dx < -100) {
    } else {
    }
  }, []);

  const panResponder = React.useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,

        onPanResponderMove: Animated.event(
          [
            null,
            {
              dx: pan.current.x,
              dy: pan.current.y,
            },
          ],
          {
            listener: onMove,
          },
        ),
        onPanResponderRelease: (e, {dx}) => {
          if (dx > 100) {
            Animated.spring(pan.current, {toValue: {x: 500, y: 0}}).start(
              animated => {
                if (animated.finished) {
                  moveRight();
                }
              },
            );
          } else if (dx < -100) {
            Animated.spring(pan.current, {toValue: {x: -500, y: 0}}).start(
              animated => {
                if (animated.finished) {
                  moveLeft();
                }
              },
            );
          } else {
            Animated.spring(pan.current, {toValue: {x: 0, y: 0}}).start();
          }
        },
      }),
    [moveLeft, moveRight, onMove],
  );

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[pan.current.getLayout(), containerStyle]}>
      {children}
    </Animated.View>
  );
}
