import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Button = (props) => {
    return (
        <TouchableOpacity
            style={{ 
            backgroundColor: '#3498db',
            width: '50%',
            padding: 8,
            margin: 14,
            borderRadius: 8,
            }}
            
        >
        
            <Text style={{ color: 'white', fontSize: 16, textAlign:'center', fontWeight:'bold'}}>국회의원 일정보기</Text>
        </TouchableOpacity>
    );
};

export default Button;