import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import DatePicker from '../components/DatePicker';

const UserForm = ({ initialValues, onSubmit, loading, submitButtonText }) => {
  const [formData, setFormData] = useState({
    name: initialValues?.name || '',
    username: initialValues?.username || '',
    age: initialValues?.age?.toString() || '',
    email: initialValues?.email || '',
    birthDate: initialValues?.birthDate ? new Date(initialValues.birthDate) : new Date(),
    phoneNumber: initialValues?.phoneNumber || '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    if (!formData.username.trim()) {
      newErrors.username = 'El nombre de usuario es requerido';
    }
    if (!formData.age || isNaN(formData.age) || parseInt(formData.age) < 1) {
      newErrors.age = 'La edad debe ser un número válido';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'El teléfono es requerido';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = () => {
    if (validateForm()) {
      const submitData = {
        ...formData,
        age: parseInt(formData.age),
        birthDate: formData.birthDate.toISOString(),
      };
      onSubmit(submitData);
    }
  };
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Nombre completo *</Text>
        <TextInput
          style={[styles.input, errors.name && styles.inputError]}
          value={formData.name}
          onChangeText={(value) => handleInputChange('name', value)}
          placeholder="Ej: Juan Pérez"
          placeholderTextColor="#999"
        />
        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Nombre de usuario *</Text>
        <TextInput
          style={[styles.input, errors.username && styles.inputError]}
          value={formData.username}
          onChangeText={(value) => handleInputChange('username', value)}
          placeholder="Ej: juanperez"
          placeholderTextColor="#999"
          autoCapitalize="none"
        />
        {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Email *</Text>
        <TextInput
          style={[styles.input, errors.email && styles.inputError]}
          value={formData.email}
          onChangeText={(value) => handleInputChange('email', value)}
          placeholder="Ej: juan@email.com"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
      </View>
      <View style={styles.row}>
        <View style={[styles.formGroup, styles.halfWidth]}>
          <Text style={styles.label}>Edad *</Text>
          <TextInput
            style={[styles.input, errors.age && styles.inputError]}
            value={formData.age}
            onChangeText={(value) => handleInputChange('age', value)}
            placeholder="Ej: 25"
            placeholderTextColor="#999"
            keyboardType="numeric"
          />
          {errors.age && <Text style={styles.errorText}>{errors.age}</Text>}
        </View>
        <View style={[styles.formGroup, styles.halfWidth]}>
          <Text style={styles.label}>Teléfono *</Text>
          <TextInput
            style={[styles.input, errors.phoneNumber && styles.inputError]}
            value={formData.phoneNumber}
            onChangeText={(value) => handleInputChange('phoneNumber', value)}
            placeholder="Ej: 7777-7777"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
          />
          {errors.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber}</Text>}
        </View>
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Fecha de nacimiento *</Text>
        <DatePicker
          value={formData.birthDate}
          onChange={(date) => handleInputChange('birthDate', date)}
        />
      </View>
      <TouchableOpacity
        style={[styles.submitButton, loading && styles.submitButtonDisabled]}
        onPress={handleSubmit}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.submitButtonText}>{submitButtonText}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    width: '48%',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
  },
  inputError: {
    borderColor: '#e74c3c',
  },
  errorText: {
    color: '#e74c3c',
    fontSize: 12,
    marginTop: 5,
  },
  submitButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonDisabled: {
    opacity: 0.6,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
export default UserForm;