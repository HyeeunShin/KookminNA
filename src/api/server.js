import axios from 'axios';
import Config from 'react-native-config';

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

export async function getPerson(cd) {
    console.log(cd)
    const url = `https://open.assembly.go.kr/portal/openapi/nwvrqwxyaytdsfvhu?KEY=7b9fe2d3c59c493b8ada2263157cc926?MONA_CD=${cd}&Type=json`;

    const container = []
    await axios.get(url).then(response => {

        const data = Object.values(Object.values(response.data)[0][1])[0]

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

}


