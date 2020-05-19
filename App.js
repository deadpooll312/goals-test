import React, { useCallback } from 'react';
import { Provider } from "mobx-react";
// local files
import { GoalsScreen } from "./screens/goals/goals";
import { ModalCreate } from "./components/modal-create";
import store from "./store";
import { DatepickerComponent } from "./components/datepicker";

export default function App() {
  const initialState = {
    title: "",
    colors: 0,
    until: new Date(),
    goal: ""
  };
  const [modalVisible, setModalVisible] = React.useState(false);
  const [datePickerVisible, setDatePickerVisible] = React.useState(false);
  const [state, setState] = React.useState(initialState);
  
  const onGradientChange = (index) => {
    const newState = { ...state };
    newState.colors = index;
    setState(newState);
  };
  
  const changeInput = (text) => {
    const newState = { ...state };
    newState.title = text;
    setState(newState);
  };
  
  const onDateClick = () => {
    setModalVisible(false);
    setDatePickerVisible(true);
  };
  
  const onConfirmPress = dateValue => {
    const newState = { ...state };
    newState.until = dateValue;
    setState(newState);
  
    setDatePickerVisible(false);
    setModalVisible(true);
  };
  
  const onCancelPress = () => {
    setDatePickerVisible(false);
    setModalVisible(true);
  };
  
  const onGoalChange = (text) => {
    const newState = { ...state };
    newState.goal = text;
    setState(newState);
  };

  const updateModal = useCallback(() => {
    setState(store.goals.getActiveItem());
    setModalVisible(true);
  }, []);
  
  return (
    <Provider store={store}>
      <React.Fragment>
        <GoalsScreen updateModal={updateModal} modalOpen={() => setModalVisible(true)} />
        <DatepickerComponent
          onCancelPress={onCancelPress}
          date={state.until}
          visible={datePickerVisible}
          onConfirmPress={onConfirmPress}
        />
        <ModalCreate
          colors={state.colors}
          visible={modalVisible}
          onGradientChange={onGradientChange}
          inputValue={state.title}
          changeInput={changeInput}
          untilValue={state.until}
          onDateClick={onDateClick}
          goalValue={state.goal}
          onGoalChange={onGoalChange}
          modalClose={() => setModalVisible(false)}
        />
      </React.Fragment>
    </Provider>
  );
};
