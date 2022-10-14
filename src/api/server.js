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
