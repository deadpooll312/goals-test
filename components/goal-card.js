import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { format } from "date-fns";
import { AnimatedCircularProgress } from "react-native-circular-progress";
// local files
import styles from "./styles/goal-card.style";
import { PigIcon } from "./icons";
import { white } from "../styles/colors";
import {gradients} from "../styles/gradients";

export const GoalCard = React.memo(({ title, until, goal, colors, done }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={gradients[colors]}
        start={[1.0, 0.0]}
        end={[0.0, 1.0]}
        locations={[0,0.6,1]}
        style={styles.gradient}
      />
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <PigIcon style={styles.icon} />
          <Text style={styles.untilText}>until {format(until, "dd MMMM")}</Text>
        </View>
        <Text style={styles.title}>
          {title}
        </Text>
        <View style={styles.footer}>
          <AnimatedCircularProgress
            size={108}
            width={13}
            fill={done}
            tintColor={white}
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="rgba(255,255,255,0.3)"
            lineCap="round"
            rotation={360}
            style={styles.circular}
          >
            {() => <Text style={styles.points}>{`${done}%`}</Text>}
          </AnimatedCircularProgress>
          <View>
            <Text style={styles.footerText}>{`$ ${Math.round(goal / 100 * done)}`}</Text>
            <Text style={[styles.footerText, styles.footerTextOpacity]}>{`of $ ${goal}`}</Text>
          </View>
        </View>
      </View>
    </View>
  )
});
