export const getProvince = () => {
    return fetch('http://192.168.1.52:3030/api/master/propinsi', {
        method: 'POST',
        body: JSON.stringify({
            orders : 999
        }),
        headers: {
                "Content-type": "application/json; charset=UTF-8",
                "brambang-access-token" : sessionStorage.getItem("currentToken")

        }
    });
};

export const getRegency = (province_id) => {
  console.log(province_id);
    return fetch('http://192.168.1.52:3030/api/master/kota', {
        method: 'POST',
        body: JSON.stringify({
            province_id : province_id
        }),
        headers: {
                "Content-type": "application/json; charset=UTF-8",
                "brambang-access-token" : sessionStorage.getItem("currentToken")

        }
    });
};
export const getDistrict = (regency_id) => {
    return fetch('http://192.168.1.52:3030/api/master/kecamatan', {
        method: 'POST',
        body: JSON.stringify({
            regency_id : regency_id
        }),
        headers: {
                "Content-type": "application/json; charset=UTF-8",
                "brambang-access-token" : sessionStorage.getItem("currentToken")

        }
    });
};

export const getPostal = (district_id) => {
    return fetch('http://192.168.1.52:3030/api/master/kodepos', {
        method: 'POST',
        body: JSON.stringify({
            district_id : district_id
        }),
        headers: {
                "Content-type": "application/json; charset=UTF-8",
                "brambang-access-token" : sessionStorage.getItem("currentToken")

        }
    });
};
