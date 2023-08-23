import 'react-native-gesture-handler';
import { Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

export const About=()=>{
    return(
        <SafeAreaView style={style.container} > 
            <Text style={style.text}>
            This app is brought to you by Rawan Ahmed it helps you add three different types of tasks ranging from ones you have to do today to ones that should be done in the future and even extra tasks!
            </Text>
            <Text style={style.t2}>Enjoy it!</Text>
        </SafeAreaView>
    );
}
const style=StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent:'center',
    },
    text:
    {
        fontSize:20,
        padding:10,
        textAlign:'center'
    },
    t2:
    {
        fontSize:30,
        color:'#ff9933',
    }
});
export default About;