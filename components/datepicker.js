import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { View, Button } from "react-native";
// local files
import { ModalComponent } from "./modal";
import styles from "./styles/datepicker.styles";

export const DatepickerComponent = React.memo(({ date, visible, onDateChange, onConfirmPress, onCancelPress }) => {
  const [selectedDate, setSelectedDate] = React.useState(date);

  return (
    <ModalComponent visible={visible} backgroundStyles={styles.background}>
      <View style={styles.container}>
        <View style={styles.buttons}>
          <Button style={styles.button} onPress={onCancelPress} title="Cancel" />
          <Button style={styles.button} onPress={() => onConfirmPress(selectedDate)} title="Confirm" />
        </View>
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={selectedDate}
          mode="date"
          is24Hour
          display="default"
          onChange={(event, date) => setSelectedDate(date)}
        />
      </View>
    </ModalComponent>
  );
});
