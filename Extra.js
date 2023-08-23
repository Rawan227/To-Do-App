import {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, Button} from 'react-native';

export const Extra=()=>{
    const [task, setTask] = useState();
    const [tasks, setTasks] = useState([]);
    
    const handleAddTask = ()=> {
        Keyboard.dismiss();
        setTasks([...tasks, task]);
        setTask('');
    }
    
    const completeTask = (index) => {
        setTasks(tasks.filter((task, i) => i !== index));
    }
    
    return (
        <View style={styles.container}>
    
        <View style={styles.taskWrapper}>
            <Text style={styles.sectionTitle}> Extra Tasks</Text>
    
                <View style={styles.items}>
                
                {tasks.map((task, index) => { 
                return (
                <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
                <Task text={task} />
                </TouchableOpacity>)
                })
                }
    
            </View>
        </View>
    
        <KeyboardAvoidingView style={styles.writeTaskWrapper}>
    
            <TextInput style={styles.input} placeholder={"Write a task..."} onChangeText={text=> setTask(text)} value={task}/>
    
            <TouchableOpacity onPress={ () => handleAddTask()}>
                <View style={styles.addButtonWrapper}>
                <Text style={styles.addText}> + </Text>
                </View>
            </TouchableOpacity>
    
        </KeyboardAvoidingView>
        </View>
    );
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white',
        
        },
        taskWrapper: {
            paddingTop: 50,
            paddingHorizontal: 20,
        },
        sectionTitle: {
        color:'#ff9933',
        fontSize: 24,
        fontWeight: 'bold'
        },
        items: {
        marginTop: 30,
        },
        writeTaskWrapper : {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        },
        input : {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#C0C0C0',
        borderRadius: 60,
        borderColor: '#000',
        borderWidth: 1,
        width: 250
    
        },
        addButtonWrapper : {
        width: 60,
        height: 60,
        backgroundColor: '#C0C0C0',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000',
        borderWidth: 1,
        },
        addText : {
    
        },
        });
        
        
        const Task = ({text}) => {
        return(
            <View style={taskStyles.item}>
                <View style={taskStyles.itemLeft} >
                    <TouchableOpacity style={taskStyles.square}></TouchableOpacity>
                    <Text style={taskStyles.itemText}>{text}</Text>
                </View>
                <View style={taskStyles.itemRight}></View>
            </View>
        )
        }
        
        const taskStyles = StyleSheet.create({
        
        item: {
        backgroundColor: '#C0C0C0',
        padding: 15, 
        borderRadius: 10, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent:'space-between', 
        marginBottom: 20,
        },
        itemLeft: {
        flexDirection: 'row', 
        alignItems: 'center', 
        flexWrap: 'wrap'
        },
        square: {
        width: 24, 
        height:24, 
        backgroundColor:'#ff9933', 
        opacity: 0.4, 
        borderRadius: 5, 
        marginRight: 15
        },
        itemText: {
        maxWidth: '80%'
        },
        itemRight: {
        width: 12, 
        height: 12, 
        borderColor: '#ff9933', 
        borderWidth: 2, 
        borderRadius: 5
        },
        });
    
export default Extra;