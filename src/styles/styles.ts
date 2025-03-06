import { StyleSheet, ViewStyle } from 'react-native';

export const styles = StyleSheet.create({
    scrollview: {
        flexGrow: 1,
        justifyContent: "space-evenly",
        backgroundColor: "#f8f9fa",
        flexDirection: 'column',  // Alterado para coluna para os botões ficarem embaixo
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 20,
    },
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        backgroundColor: "#f8f9fa",
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    box1: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: 600,
        height: 200,
        alignItems: 'center',
        backgroundColor: "#f8f9fa",
    },
    box2: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    quantidade: {
        justifyContent: 'center',
    },
    buttonTipo: {
        backgroundColor: '#ccc',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginHorizontal: 5,
        width: 100,                   // Largura do botão
        height: 100,                  // Altura do botão (mesma que a largura)
    },
    selectedButton: {
        backgroundColor: '#3fa14c',
    },
    buttonText: {
        fontSize: 30,
        color: '#333',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    selectedText: {
        color: '#fff',
    },
    label: {
        fontSize: 35,
        marginBottom: 5,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    logo: {
        width: 300,
        height: 200,
        marginBottom: 20,
        resizeMode: "contain"
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    inputSpinner: {
        marginTop: 20,
        width: 250,
        height: 100,
        backgroundColor: '#3fa14c',
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
    },
    input: {
        backgroundColor: '#f8f9fa',
        width: 100,
        height: 100,
        borderRadius: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        fontWeight: 'bold',
        fontSize: 30,
        color: '#000',
    },
    buttonView: {
        backgroundColor: "#f8f9fa",
        alignItems: "center",
        marginVertical: 20,
    },
    button: {
        backgroundColor: "#3fa14c",
        borderRadius: 10,
        width: 450,
        height: 100,
        justifyContent: "center", // Centraliza verticalmente
        alignItems: "center", // Centraliza horizontalmente
    },

    buttontext: {
        color: "#fff",
        fontSize: 35,
        textAlign: "center",
        fontWeight: "bold",
    },

});

export const navigator = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f8f9fa"
    },
    card: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        elevation: 3
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 10
    },
    label: {
        fontSize: 14
    },
    bold: {
        fontWeight: "bold"
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    },
    button: {
        padding: 10,
        borderRadius: 5
    },
    buttonOn: {
        backgroundColor: "green"
    },
    buttonOff: {
        backgroundColor: "red"
    },
    buttonText: {
        color: "white",
        fontWeight: "bold"
    },
    controls: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20
    },
    controlButton: {
        padding: 15,
        backgroundColor: "blue",
        borderRadius: 5
    },
    stopButton: {
        backgroundColor: "orange"
    },
    emergencyButton: {
        backgroundColor: "red"
    },
    controlText: {
        color: "white",
        fontWeight: "bold"
    }
});
