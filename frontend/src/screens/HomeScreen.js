import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const menuOptions = [
    {
      title: 'Ver Usuarios',
      description: 'Lista completa de usuarios registrados',
      color: '#4A90E2',
      screen: 'UserList',
    },
    {
      title: 'Crear Usuario',
      description: 'Registrar un nuevo usuario en el sistema',
      color: '#50C878',
      screen: 'CreateUser',
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sistema de Gestión</Text>
        <Text style={styles.subtitle}>Administración de Usuarios</Text>
      </View>
      <View style={styles.menuContainer}>
        {menuOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.menuItem, { borderLeftColor: option.color }]}
            onPress={() => navigation.navigate(option.screen)}
            activeOpacity={0.7}
          >
            <View style={styles.menuContent}>
              <Text style={styles.menuTitle}>{option.title}</Text>
              <Text style={styles.menuDescription}>{option.description}</Text>
            </View>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Información del Sistema</Text>
        <Text style={styles.infoText}>
          Aplicación conectada a API REST con MongoDB
        </Text>
        <Text style={styles.infoText}>Versión 1.0.0</Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4A90E2',
    padding: 30,
    paddingTop: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#e8f0fe',
  },
  menuContainer: {
    padding: 20,
  },
  menuItem: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  menuDescription: {
    fontSize: 14,
    color: '#666',
  },
  arrow: {
    fontSize: 24,
    color: '#999',
    marginLeft: 10,
  },
  infoContainer: {
    margin: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
});
export default HomeScreen;