import React from "react"; // 리액트 호출
import { TouchableOpacity, Text } from "react-native"; // 리액트 네이티브에서 제공하는 컴포넌트 추가

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
        
            <Text style={{ color: 'white', fontSize: 16, textAlign:'center'}}>국회의원 일정보기</Text>
        </TouchableOpacity>
    );
};

export default Button;