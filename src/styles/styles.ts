import { StyleSheet, ViewStyle  } from 'react-native';

export const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#f8f9fa",
      },
      label: {
        fontSize: 18,
        marginBottom: 8,
      },
      picker: {
        height: 50,
        marginBottom: 20,
        backgroundColor: "#fff",
        borderRadius: 8,
      },
      input: {
        height: 50,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
        backgroundColor: "#fff",
      },
      button: {
        paddingVertical: 10,
      },
});

export const selectStyles = StyleSheet.create({
    dropdown: {
        height: 40,
        width: '100%',
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#D9D9D9',
    },
    dropdownContainer: {
        borderRadius: 10,
        borderColor: '#FFFFF',
        maxHeight: 300,
        borderWidth: 1,
        backgroundColor: '#D9D9D9',

    },
    textdrop: {
        color: '#1E90FF',
        fontSize: 18,
    },
    placeholder: {
        color: '#A9A9A9',
        fontSize: 18,
    },
    selectedItemLabel: {
        color: '#FFFFFF', 
        fontWeight: 'bold',
    },
    itemLabelSelected: {
        color: '#1A1A1A', 
    },
    selectedItemContainer: {
        backgroundColor: '#3498F9', 
    },
    itemContainer: {
        borderWidth: 1, 
        borderColor: '#101545', 
        marginVertical: 0.2, 
        backgroundColor: '#D9D9D9', 
    },
    itemLabel: {
        color: '#1A1A1A',
        // fontWeight: 'bold', 
    },
});
  
export const navigator = StyleSheet.create({
        container: { flex: 1, padding: 20, backgroundColor: "#f8f9fa" },
        card: { backgroundColor: "#fff", padding: 20, borderRadius: 10, marginBottom: 20, elevation: 3 },
        title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
        subtitle: { fontSize: 16, marginBottom: 10 },
        label: { fontSize: 14 },
        bold: { fontWeight: "bold" },
        row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
        button: { padding: 10, borderRadius: 5 },
        buttonOn: { backgroundColor: "green" },
        buttonOff: { backgroundColor: "red" },
        buttonText: { color: "white", fontWeight: "bold" },
        controls: { flexDirection: "row", justifyContent: "space-between", marginTop: 20 },
        controlButton: { padding: 15, backgroundColor: "blue", borderRadius: 5 },
        stopButton: { backgroundColor: "orange" },
        emergencyButton: { backgroundColor: "red" },
        controlText: { color: "white", fontWeight: "bold" }
});
