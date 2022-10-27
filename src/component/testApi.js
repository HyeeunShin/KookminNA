import React, { useEffect, useState } from "react";
import { Text, View, Alert } from "react-native";
import axios from "axios";

const getMember = () => {
    
    const [isLoading, setIsLoading] = useState(True);
    const [currentMember, setCurrentMember] = useState('');
    const [temp, setTemp] = useState('');
    const [error, setError] = useState(false);

    const API_KEY = "{7b9fe2d3c59c493b8ada2263157cc926}";
    const tempName = "È«ÁØÇ¥";
    const tempPoly = "±¹¹ÎÀÇÈû";

    const url = `https://open.assembly.go.kr/portal/openapi/nwvrqwxyaytdsfvhu?KEY=7b9fe2d3c59c493b8ada2263157cc926&UNIT_CD=100021&pIndex=1&pSize=300&Type=json`;
    console.log(url);
}