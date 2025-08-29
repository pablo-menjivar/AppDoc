import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import UserForm from '../components/UserForm';
import userService from '../services/userService';

const EditUserScreen = ({ route, navigation }) => {
  const { userId, userData } = route.params;
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (updatedData) => {
    setLoading(true);
    try {
      await userService.updateUser(userId, updatedData);
      Alert.alert(
        'Éxito',
        'Usuario actualizado correctamente',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('UserDetail', { userId }),
          },
        ]
      );
    } catch (error) {
      Alert.alert(
        'Error',
        error.message || 'No se pudo actualizar el usuario'
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Editar Usuario</Text>
          <Text style={styles.subtitle}>
            Modifique los campos que desea actualizar
          </Text>
        </View>
        <UserForm
          initialValues={userData}
          onSubmit={handleSubmit}
          loading={loading}
          submitButtonText="Actualizar Usuario"
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
});
export default EditUserScreen;