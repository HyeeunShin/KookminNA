import axios from 'axios';
import Config from 'react-native-config';
import {decode} from 'html-entities';
import react, {useState} from 'react';

export async function getPerson(cd) {

    const url = `https://open.assembly.go.kr/portal/openapi/nwvrqwxyaytdsfvhu?KEY=7b9fe2d3c59c493b8ada2263157cc926&MONA_CD=${cd}&Type=json`;
    const container = []
    await axios.get(url).then(response => {
        
        const data = Object.values(Object.values(response.data)[0][1])[0]
        // console.log(data)
        const temp = {
            
            HG_NM: data[0]['HG_NM'],                
            HJ_NM: data[0]['HJ_NM'],
            ENG_NM: data[0]['ENG_NM'],
            BTH_GBN_NM: data[0]['BTH_GBN_NM'],
            BTH_DATE: data[0]['BTH_DATE'],
            JOB_RES_NM : data[0]['JOB_RES_NM'],
            POLY_NM : data[0]['POLY_NM'],
            ORIG_NM: data[0]['ORIG_NM'],
            ELECT_GBN_NM : data[0]['ELECT_GBN_NM'],
            CMIT_NM : data[0]['CMIT_NM'],
            CMITS: data[0]['CMITS'],
            REELE_GBN_NM: data[0]['REELE_GBN_NM'],
            UNITS: data[0]['UNITS'],
            SEX_GBN_NM: data[0]['SEX_GBN_NM'],
            TEL_NO: data[0]['TEL_NO'],
            E_MAIL: data[0]['E_MAIL'],
            HOMEPAGE: data[0]['HOMEPAGE'],
            STAFF: data[0]['STAFF'],
            SECRETARY: data[0]['SECRETARY'],
            SECRETARY2: data[0]['SECRETARY2'],
            MONA_CD: data[0]['MONA_CD'],
            MEM_TITLE: data[0]['MEM_TITLE'],
            ASSEM_ADDR : data[0]['ASSEM_ADDR']
        }

        container.push(temp)

    });
    return container

};
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
                BTH_GBN_NM: e['BTH_GBN_NM'],
                MONA_CD: e['MONA_CD'],
                POLY_NM: e['POLY_NM']

            }
            container.push(temp)
        })
    });
    return container;
}


export async function getProfile(name) {
    const url = `https://open.assembly.go.kr/portal/openapi/nktulghcadyhmiqxi?KEY=7b9fe2d3c59c493b8ada2263157cc926&DEPT_NM=${name}&pIndex=1&pSize=300&Type=json`
    var container = []

    await axios.get(url).then(response => {

        const data = Object.values(Object.values(response.data)[0][1])[0]

         data.map(function(e,idx) {
            const temp = e['HG_NM']+','+e['POLY_NM'];
            container.push(temp)
        })
    });
    return container;
}


export async function getInform() {
    const peopleUrl = `https://open.assembly.go.kr/portal/openapi/nwvrqwxyaytdsfvhu?KEY=7b9fe2d3c59c493b8ada2263157cc926&Type=json`;
    var containerPeople = []


    await axios.get(peopleUrl).then(response => {

        const data = Object.values(Object.values(response.data)[0][1])[0]
         data.map(function(data,idx) {
            const temp = {                
                MONA_CD: data['MONA_CD'],
                HG_NM: data['HG_NM'],                
                HJ_NM: data['HJ_NM'],
                ENG_NM: data['ENG_NM'],
                BTH_GBN_NM: data['BTH_GBN_NM'],
                BTH_DATE: data['BTH_DATE'],
                JOB_RES_NM : data['JOB_RES_NM'],
                POLY_NM : data['POLY_NM'],
                ORIG_NM: data['ORIG_NM'],
                ELECT_GBN_NM : data['ELECT_GBN_NM'],
                CMIT_NM : data['CMIT_NM'],
                CMITS: data['CMITS'],
                REELE_GBN_NM: data['REELE_GBN_NM'],
                UNITS: data['UNITS'],
                SEX_GBN_NM: data['SEX_GBN_NM'],
                TEL_NO: data['TEL_NO'],
                E_MAIL: data['E_MAIL'],
                HOMEPAGE: data['HOMEPAGE'],
                STAFF: data['STAFF'],
                SECRETARY: data['SECRETARY'],
                SECRETARY2: data['SECRETARY2'],
                MEM_TITLE: data['MEM_TITLE'],
                ASSEM_ADDR : data['ASSEM_ADDR']
                }
                containerPeople.push(temp)
        });
    })
    return containerPeople;
}

export async function getInformTarget(cd) {
    const peopleUrl = `https://open.assembly.go.kr/portal/openapi/nwvrqwxyaytdsfvhu?KEY=7b9fe2d3c59c493b8ada2263157cc926&MONA_CD=${cd}&Type=json`;
    var containerPeople = []


    await axios.get(peopleUrl).then(response => {

        const data = Object.values(Object.values(response.data)[0][1])[0]
         data.map(function(data,idx) {
            const temp = {                
                MONA_CD: data['MONA_CD'],
                HG_NM: data['HG_NM'],                
                HJ_NM: data['HJ_NM'],
                ENG_NM: data['ENG_NM'],
                BTH_GBN_NM: data['BTH_GBN_NM'],
                BTH_DATE: data['BTH_DATE'],
                JOB_RES_NM : data['JOB_RES_NM'],
                POLY_NM : data['POLY_NM'],
                ORIG_NM: data['ORIG_NM'],
                ELECT_GBN_NM : data['ELECT_GBN_NM'],
                CMIT_NM : data['CMIT_NM'],
                CMITS: data['CMITS'],
                REELE_GBN_NM: data['REELE_GBN_NM'],
                UNITS: data['UNITS'],
                SEX_GBN_NM: data['SEX_GBN_NM'],
                TEL_NO: data['TEL_NO'],
                E_MAIL: data['E_MAIL'],
                HOMEPAGE: data['HOMEPAGE'],
                STAFF: data['STAFF'],
                SECRETARY: data['SECRETARY'],
                SECRETARY2: data['SECRETARY2'],
                MEM_TITLE: data['MEM_TITLE'],
                ASSEM_ADDR : data['ASSEM_ADDR']
                }
                containerPeople.push(temp)
        });
    })
    return containerPeople;
}

export async function getSns() {
    const url = `https://open.assembly.go.kr/portal/openapi/negnlnyvatsjwocar?KEY=7b9fe2d3c59c493b8ada2263157cc926&pIndex=1&pSize=300&Type=json`;
    var data =[] 
    await axios.get(url).then(response => {

        data = Object.values(Object.values(response.data)[0][1])[0]

    });
    return data;
}

export async function getSnstarget(code) {
    const url = `https://open.assembly.go.kr/portal/openapi/negnlnyvatsjwocar?KEY=7b9fe2d3c59c493b8ada2263157cc926&MONA_CD=${code}&pIndex=1&pSize=300&Type=json`;
    var data = []
    await axios.get(url).then(response => {

        data = Object.values(Object.values(response.data)[0][1])[0]

    });
    return data;
}


export async function getSchedule() {
    const name = `https://open.assembly.go.kr/portal/openapi/nwvrqwxyaytdsfvhu?KEY=7b9fe2d3c59c493b8ada2263157cc926&UNIT_CD=100021&Type=json`;
    const plenary = `https://open.assembly.go.kr/portal/openapi/nekcaiymatialqlxr?KEY=7b9fe2d3c59c493b8ada2263157cc926&UNIT_CD=100021&pIndex=1&pSize=300&Type=json`
    const seminar = `https://open.assembly.go.kr/portal/openapi/nfcoioopazrwmjrgs?KEY=7b9fe2d3c59c493b8ada2263157cc926&UNIT_CD=100021&pIndex=1&pSize=300&Type=json`;
    const chairman = `https://open.assembly.go.kr/portal/openapi/nhedurlwawoquyxwn?KEY=7b9fe2d3c59c493b8ada2263157cc926&UNIT_CD=100021&pIndex=1&pSize=300&Type=json`
    const comTotal = `https://open.assembly.go.kr/portal/openapi/nttmdfdcaakvibdar?KEY=7b9fe2d3c59c493b8ada2263157cc926&UNIT_CD=100021&pIndex=1&pSize=300&Type=json`
    const comSmall = `https://open.assembly.go.kr/portal/openapi/nrkqqbvfanfybishu?KEY=7b9fe2d3c59c493b8ada2263157cc926&UNIT_CD=100021&pIndex=1&pSize=300&Type=json`
    const comPublic = `https://open.assembly.go.kr/portal/openapi/napvpafracrdkxmoq?KEY=7b9fe2d3c59c493b8ada2263157cc926&UNIT_CD=100021&pIndex=1&pSize=300&Type=json`
    var container = []

    await axios.get(name).then(response => {

        const data = Object.values(Object.values(response.data)[0][1])[0]
        data.map(function(e,idx) {
            var dictObject = {}
            const temp = e['HG_NM']+','+e['POLY_NM'];
            dictObject[temp] = {};

            container.push(dictObject)
        })

        // console.log(container)
    });

    var markedDots = JSON.parse(JSON.stringify(container))

    // 국회 본회의
    await axios.get(plenary).then(response => {
        const type1 = {key: 'type1', color: '#00B383'};
        const data = Object.values(Object.values(response.data)[0][1])[0]
        container.map(function(name,idx){

            data.map(function(e,id){
                const date =e['MEETTING_DATE']; 

                if (name[Object.keys(name)][date] === undefined){

                    name[Object.keys(name)][date] = [
                         {
                        name: e['TITLE'],
                        time: e['MEETTING_TIME'],
                        date: e['MEETTING_DATE'],
                        place: '국회의사당',
                        type: type1
                    }
                ]
                    markedDots[idx][Object.keys(markedDots[idx])][date] = {dots:[type1]}
                }
                else{
                    name[Object.keys(name)][date].push(
                        {
                            name: e['TITLE'],
                            time: e['MEETTING_TIME'],
                            date: e['MEETTING_DATE'],
                            place: '국회의사당',
                            type: type1,
                        }
                    );
                    if (!markedDots[idx][Object.keys(markedDots[idx])][date].dots.includes(type1)){
                        markedDots[idx][Object.keys(markedDots[idx])][date].dots.push(type1)
                    }
                }
                
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
                    if (n ===  name){
                        
                        const date =e['SDATE'].split('.').join('-');

                        if (i[Object.keys(i)][date] === undefined){
                            i[Object.keys(i)][date]  = [{
                                name: e['TITLE'],
                                time: e['STIME'],
                                date: date,
                                place: e['LOCATION'],
                                type: type2
                            }];
                            markedDots[idx][Object.keys(markedDots[idx])][date] = {dots:[type2]}
                        }
                        else{
                             i[Object.keys(i)][date].push({
                                name: e['TITLE'],
                                time: e['STIME'],
                                date: date,
                                place: e['LOCATION'],
                                type: type2
                            });
                            if (!markedDots[idx][Object.keys(markedDots[idx])][date].dots.includes(type2)){
                                markedDots[idx][Object.keys(markedDots[idx])][date].dots.push(type2)
                            }
                        }

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

            if ( container[64]['김진표,무소속'][date] === undefined){

                container[64]['김진표,무소속'][date] = [{
                    name: decode(e['CONTENTS']).replace(/<[^>]*>?/g, "").replace(/&nbsp;/gi,''),
                    time: e['SCHEDULETIME'],
                    date: date,
                    place: ' ',
                    type: type3
                }];
                markedDots[64]['김진표,무소속'][date] = {dots:[type3]}

            }
            else{
                container[64]['김진표,무소속'][date].push({
                    name: decode(e['CONTENTS']).replace(/<[^>]*>?/g, "").replace(/&nbsp;/gi,''),
                    time: e['SCHEDULETIME'],
                    date: date,
                    place: ' ',
                    type: type3
                });
                if (!markedDots[64]['김진표,무소속'][date].dots.includes(type3)){
                    markedDots[64]['김진표,무소속'][date].dots.push(type3)
                }
            }

        });
    });

    // 위원회별전체회의일정
    const type4 = {key: 'type4', color: '#F94931'};

    await axios.get(comTotal).then(response => {
        const data = Object.values(Object.values(response.data)[0][1])[0]
        // console.log(data)

        data.map(function(e,idx){

            const title = '[' + e['COMMITTEE_NAME'] +'] '+ e['SESS'] +' '+e['DEGREE']+' '+e['TITLE']
            
            getProfile(e['COMMITTEE_NAME']).then((dt) => {
                dt.map(function(n,ndx){
                    container.map(function(i,idx){

                        const name = Object.keys(i)[0]
                        if (n ===  name){
                            
                            const date =e['MEETING_DATE'].split('.').join('-').split('(')[0];
                            if (i[Object.keys(i)][date] == undefined){
                                i[Object.keys(i)][date]  = [{
                                    name: title,
                                    time: e['MEETING_TIME'],
                                    date: date,
                                    place: ' ',
                                    type: type4
                                }];
                                markedDots[idx][Object.keys(markedDots[idx])][date] = {dots:[type4]}

                            }

                            else{
                                i[Object.keys(i)][date].push({
                                    name: title,
                                    time: e['MEETING_TIME'],
                                    date: date,
                                    place: ' ',
                                    type: type4
                                });

                                if (!markedDots[idx][Object.keys(markedDots[idx])][date].dots.includes(type4)){
                                    markedDots[idx][Object.keys(markedDots[idx])][date].dots.push(type4)
                                }
                            }
                            
                        }
                
                    })
                })

            }).catch(error => {console.log('error')})
        })
    });

    // 위원회별소회의일정
    await axios.get(comSmall).then(response => {
        const data = Object.values(Object.values(response.data)[0][1])[0]

        data.map(function(e,idx){

            const title = '[' + e['COMMITTEE_NAME'] +'] '+ e['SESS'] +' '+e['DEGREE']+' '+e['TITLE']

            getProfile(e['COMMITTEE_NAME']).then((dt) => {
                dt.map(function(n,ndx){
                    container.map(function(i,idx){

                        const name = Object.keys(i)[0]
                        if (n ===  name){
                            
                            const date =e['MEETING_DATE'].split('.').join('-').split('(')[0];
                            if (i[Object.keys(i)][date] == undefined){
                                i[Object.keys(i)][date]  = [{
                                    name: title,
                                    time: e['MEETING_TIME'],
                                    date: date,
                                    place: ' ',
                                    type: type4
                                }];
                                markedDots[idx][Object.keys(markedDots[idx])][date] = {dots:[type4]}
                            }
                            else{
                                i[Object.keys(i)][date].push({
                                    name: title,
                                    time: e['MEETING_TIME'],
                                    date: date,
                                    place: ' ',
                                    type: type4
                                });
                                if (!markedDots[idx][Object.keys(markedDots[idx])][date].dots.includes(type4)){
                                    markedDots[idx][Object.keys(markedDots[idx])][date].dots.push(type4)
                                }
                            }
                            
                        }
                
                    })
                })

            }).catch(error => {console.log('error')})
        })
    });

    // 위원회별공청회일정
    await axios.get(comPublic).then(response => {
        const data = Object.values(Object.values(response.data)[0][1])[0]

        data.map(function(e,idx){

            const title = '[' + e['COMMITTEE_NAME'] +'] '+ e['SESS'] +' '+e['DEGREE']

            getProfile(e['COMMITTEE_NAME']).then((dt) => {
                dt.map(function(n,ndx){
                    container.map(function(i,idx){

                        const name = Object.keys(i)[0]
                        if (n ===  name){
                            
                            const date =e['MEETING_DATE'].split('.').join('-').split('(')[0];
                            if (i[Object.keys(i)][date]==undefined){
                                i[Object.keys(i)][date]  = [{
                                    name: title,
                                    time: e['MEETING_TIME'],
                                    date: date,
                                    place: e['TITLE'],
                                    type: type4
                                }];
                                markedDots[idx][Object.keys(markedDots[idx])][date] = {dots:[type4]}
                            }
                            else{
                                i[Object.keys(i)][date].push({
                                    name: title,
                                    time: e['MEETING_TIME'],
                                    date: date,
                                    place: e['TITLE'],
                                    type: type4
                                });
                                if (!markedDots[idx][Object.keys(markedDots[idx])][date].dots.includes(type4)){
                                    markedDots[idx][Object.keys(markedDots[idx])][date].dots.push(type4)
                                }
                            }
                            
                        }
                
                    })
                })

            }).catch(error => {console.log('error')})
        })
    });


    return [container, markedDots];
}
