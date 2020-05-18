import React from "react";
import { Modal, View } from "react-native";
import styles from "./styles/modal.styles";

export const ModalComponent = React.memo(({ visible, children, backgroundStyles }) => (
  <Modal style={{zIndex: 100}} animationType="fade" transparent visible={visible}>
    <View style={[styles.background, backgroundStyles]}>{children}</View>
  </Modal>
));
