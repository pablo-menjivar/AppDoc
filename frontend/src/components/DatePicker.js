import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({ value, onChange }) => {
  const [show, setShow] = useState(false);
  const [tempDate, setTempDate] = useState(value);

  const formatDate = (date) => {
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  const handleChange = (event, selectedDate) => {
    if (Platform.OS === 'android') {
      setShow(false);
      if (selectedDate) {
        onChange(selectedDate);
      }
    } else {
      setTempDate(selectedDate || tempDate);
    }
  };
  const handleConfirm = () => {
    onChange(tempDate);
    setShow(false);
  };
  const handleCancel = () => {
    setTempDate(value);
    setShow(false);
  };
  if (Platform.OS === 'android') {
    return (
      <View>
        <TouchableOpacity
          style={styles.dateButton}
          onPress={() => setShow(true)}
        >
          <Text style={styles.dateText}>{formatDate(value)}</Text>
          <Text style={styles.dateIcon}>📅</Text>
        </TouchableOpacity>
        
        {show && (
          <DateTimePicker
            value={value}
            mode="date"
            display="default"
            onChange={handleChange}
            maximumDate={new Date()}
          />
        )}
      </View>
    );
  }
  // iOS version with modal
  return (
    <View>
      <TouchableOpacity
        style={styles.dateButton}
        onPress={() => setShow(true)}
      >
        <Text style={styles.dateText}>{formatDate(value)}</Text>
        <Text style={styles.dateIcon}>📅</Text>
      </TouchableOpacity>
      <Modal
        visible={show}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={handleCancel}>
                <Text style={styles.modalButton}>Cancelar</Text>
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Seleccionar Fecha</Text>
              <TouchableOpacity onPress={handleConfirm}>
                <Text style={[styles.modalButton, styles.confirmButton]}>
                  Confirmar
                </Text>
              </TouchableOpacity>
            </View>
            <DateTimePicker
              value={tempDate}
              mode="date"
              display="spinner"
              onChange={handleChange}
              maximumDate={new Date()}
              style={styles.datePicker}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  dateButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  dateIcon: {
    fontSize: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  modalButton: {
    fontSize: 16,
    color: '#666',
  },
  confirmButton: {
    color: '#4A90E2',
    fontWeight: '600',
  },
  datePicker: {
    height: 200,
  },
});
export default DatePicker;