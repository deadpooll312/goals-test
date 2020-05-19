import React from "react";
import { Modal, View, Text, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback, ScrollView, Image } from "react-native";
import { format } from "date-fns";
import { LinearGradient } from "expo-linear-gradient";
import { inject, observer } from "mobx-react";
// local files
import styles from "./styles/modal-create.style";
import { gradients } from "../styles/gradients";
import { CheckIcon } from "./icons";
import DateIcon from "../assets/date.png";
import FlagIcon from "../assets/flag.png";
import ArrowRightIcon from "../assets/arrow-right.png";

export const ModalCreate = inject("store")(observer(props => {
  const {
    store,
    visible,
    colors,
    onGradientChange,
    inputValue,
    changeInput,
    untilValue,
    onDateClick,
    goalValue,
    onGoalChange,
    modalClose
  } = props;
  
  const onGoalCreate = () => {
    const newGoal = {
      colors,
      title: inputValue,
      until: untilValue,
      goal: goalValue,
      done: 0,
      id: Math.random()
    };
    store.goals.createGoal(newGoal);
    modalClose();
  };
  
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <View style={[styles.row, styles.header]}>
              <Text style={styles.headerTitle}>Financial</Text>
              <TouchableOpacity onPress={onGoalCreate}>
                <Text style={styles.doneButton}>Done</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={modalClose}>
                <Text style={styles.doneButton}>Cancel</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.row, styles.inputContainer]}>
              <TextInput
                value={inputValue}
                onChangeText={(text) => changeInput(text)}
                placeholder="Title"
              />
            </View>
            <View style={[styles.row, styles.gradientsContainer]}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                {gradients.map((gradient, index) => (
                  <TouchableOpacity
                    key={index}
                    activeOpacity={0.65}
                    onPress={() => onGradientChange(index)}
                    style={styles.gradientWrapper}
                  >
                    <LinearGradient
                      colors={gradient}
                      start={[1.0, 0.0]}
                      end={[0.0, 1.0]}
                      locations={gradient.length === 3 ? [0,0.6,1] : [0,1]}
                      style={styles.gradient}
                    />
                    {index === colors && (
                      <View style={styles.checkIcon}>
                        <CheckIcon/>
                      </View>
                    )}
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            <View style={[styles.row, styles.inputContainer, styles.inputContainerRow]}>
              <View style={styles.inputLabel}>
                <Image style={styles.inputIcon} source={DateIcon} />
                <Text style={styles.inputLabelText}>Untill</Text>
              </View>
              <TouchableOpacity onPress={onDateClick} style={styles.inputLabel}>
                <Text style={styles.inputValueText}>{format(untilValue, "dd MMMM")}</Text>
                <Image source={ArrowRightIcon} style={styles.arrowStyles} />
              </TouchableOpacity>
            </View>
            <View style={[styles.row, styles.inputContainer, styles.inputContainerRow]}>
              <View style={styles.inputLabel}>
                <Image style={styles.inputIcon} source={FlagIcon} />
                <Text style={styles.inputLabelText}>Goal</Text>
              </View>
              <View style={styles.inputLabel}>
                <Text style={{...styles.inputValueText, marginRight: 3}}>$</Text>
                <TextInput
                  style={styles.inputValueText}
                  placeholder="123"
                  keyboardType="numeric"
                  value={goalValue}
                  onChangeText={text => onGoalChange(text)}
                />
                <Image source={ArrowRightIcon} style={styles.arrowStyles} />
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}));
