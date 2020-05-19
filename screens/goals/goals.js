import React, { useCallback } from "react";
import { View, Text, ScrollView, Dimensions, TouchableOpacity, Image } from "react-native";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
// local files
import styles from "./goals.style";
import { PlusIcon } from "../../components/icons";
import { GoalCard } from "../../components/goal-card";
import PlusIconBig from "../../assets/plus.png";

export const GoalsScreen = inject("store")(observer(({ store, modalOpen, updateModal }) => {
  const { goals } = store;
  const list = toJS(goals.list);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Title</Text>
        <TouchableOpacity onPress={modalOpen}>
          <PlusIcon/>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.goalsTitle}>Financial Goals</Text>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          snapToInterval={Dimensions.get("window").width / 3 * 2 + 7}
          snapToAlignment="left"
          overScrollMode="never"
          scroll
          onScrollEndDrag={e => {
            console.log('1 =', e.nativeEvent.contentOffset.x);
          }}
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x;
            const width = Dimensions.get("window").width / 3 * 2 + 7;
            let index;
            if (!x) {
              index = 0;
            } else {
              index = Math.round(x / width);
            }
            store.goals.updateIndex(index);
          }}
          contentInset={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        >
          {list && list.length > 0 && list.map((listItem) => {
            const { title, until, goal, colors, id, done } = listItem;
            return (
              <GoalCard
                key={id}
                title={title}
                until={until}
                goal={goal}
                colors={colors}
                done={done}
              />
            )
          })}
        </ScrollView>
      </View>
      <TouchableOpacity onPress={updateModal} style={styles.bigButton}>
        <Image style={styles.bigButtonIcon} source={PlusIconBig} />
      </TouchableOpacity>
    </View>
  )
}));
