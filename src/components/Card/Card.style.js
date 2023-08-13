import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        paddingTop: 10,
        paddingHorizontal: 10,
        marginTop: 0,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: "#fff",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    profileImage: {
        margin: 5,
        height: 40,
        width: 40,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'lightblue'
    },
    userDetailsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    columnContainer: {
        // position: 'absolute', //cause the onPress to act differently
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        color: 'darkblue',
        fontSize: 18,
        textAlign: 'left',
        marginTop: 5,
    },
    body: {
        fontSize: 16,
        color: 'black',
        marginVertical: 10,
    },
    text: {
        color: 'grey',
        marginEnd: 5,
    },
    userName: { 
        color: 'black' 
    }
})