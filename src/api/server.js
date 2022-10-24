import axios from 'axios';
import Config from 'react-native-config';
import {decode} from 'html-entities';

export async function getMember() {
    const url = `https://open.assembly.go.kr/portal/openapi/nwvrqwxyaytdsfvhu?KEY=7b9fe2d3c59c493b8ada2263157cc926&UNIT_CD=100021&pIndex=1&pSize=300&Type=json`;
    var container = []

    await axios.get(url).then(response => {

        const data = Object.values(Object.values(response.data)[0][1])[0]

        data.map(function(e,idx) {

            const temp = {
                id: idx,
                HG_NM: e['HG_NM'],
                HJ_NM: e['HJ_NM'],
                ORIG_NM: e['ORIG_NM'],
                ENG_NM: e['ENG_NM'],
                BTH_DATE: e['BTH_DATE'],
                BTH_GBN_NM: e['BTH_GBN_NM']

            }
            container.push(temp)
        })
    });
    return container;
}

export async function getSchedule() {
    const name = `https://open.assembly.go.kr/portal/openapi/nwvrqwxyaytdsfvhu?KEY=7b9fe2d3c59c493b8ada2263157cc926&UNIT_CD=100021&pIndex=1&pSize=300&Type=json`;
    const plenary = `https://open.assembly.go.kr/portal/openapi/nekcaiymatialqlxr?KEY=7b9fe2d3c59c493b8ada2263157cc926&UNIT_CD=100021&pIndex=1&pSize=300&Type=json`
    const seminar = `https://open.assembly.go.kr/portal/openapi/nfcoioopazrwmjrgs?KEY=7b9fe2d3c59c493b8ada2263157cc926&UNIT_CD=100021&pIndex=1&pSize=300&Type=json`;
    const chairman = `https://open.assembly.go.kr/portal/openapi/nhedurlwawoquyxwn?KEY=7b9fe2d3c59c493b8ada2263157cc926&UNIT_CD=100021&pIndex=1&pSize=300&Type=json`
    var container = []

    await axios.get(name).then(response => {

        const data = Object.values(Object.values(response.data)[0][1])[0]
        data.map(function(e,idx) {
            var dictObject = {}
            const temp = e['HG_NM']+','+e['POLY_NM'];
            dictObject[temp] = {};

            container.push(dictObject)
        })
    });

    // 국회 본회의
    await axios.get(plenary).then(response => {
        const type1 = {key: 'type1', color: '#00B383'};
        const data = Object.values(Object.values(response.data)[0][1])[0]
        container.map(function(name,idx){

            data.map(function(e,idx){
                const date =e['MEETTING_DATE'];
                name[Object.keys(name)][date]  = [{
                    name: e['TITLE'],
                    time: e['MEETTING_TIME'],
                    date: e['MEETTING_DATE'],
                    place: '국회의사당',
                    type: type1
                }];
            })
        })
    
    });

    //국회 세미나 일정 
    await axios.get(seminar).then(response => {
        const type2 = {key: 'type2', color: '#735BF2'};
        const data = Object.values(Object.values(response.data)[0][1])[0]

        data.map(function(e,idx){
            const nameList = e['NAME'].split('·').join(' ').split(',').join(' ').split('.').join(' ').split(' ');

            container.map(function(i,idx){

                const name = Object.keys(i)[0].split(",")[0]
                nameList.map(function(n,ndx){
                    if (n === name){
                        
                        const date =e['SDATE'].split('.').join('-');
                        i[Object.keys(i)][date]  = [{
                            name: e['TITLE'],
                            time: e['STIME'],
                            date: date,
                            place: e['LOCATION'],
                            type: type2
                        }];

                    }
                })
              
            });

        });
    });


    //국회의장 주요일정 : 김진표
    await axios.get(chairman).then(response => {
        const type3 = {key: 'type3', color: '#0095FF'};
        const data = Object.values(Object.values(response.data)[0][1])[0]

        data.map(function(e,idx){
            const date = e['SCHEDULEDATE'].replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');

            container[64]['김진표,무소속'][date] = [{
                name: decode(e['CONTENTS']).replace(/<[^>]*>?/g, "").replace(/&nbsp;/gi,''),
                time: e['SCHEDULETIME'],
                date: date,
                place: ' ',
                type: type3
            }];

        });
    });


    return container;
}

