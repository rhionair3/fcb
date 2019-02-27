export const getFranchiseList = () => {
    return fetch('http://192.168.1.52:3030/api/franchise', {
        method: 'GET',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "brambang-access-token": sessionStorage.getItem("currentToken")

        }
    });
}

export const getFranchiseDetail = (franchiseId) => {
    return fetch('http://192.168.1.52:3030/api/detail-franchise', {
        method: 'POST',
        body: JSON.stringify({
            id: franchiseId
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "brambang-access-token": sessionStorage.getItem("currentToken")

        }
    });
}

export const simpanDataFranchise = (dataSimpan) => {
  console.log(dataSimpan);
    if (dataSimpan.id && (dataSimpan.id !== null || dataSimpan.id !== "")) {
      return fetch('http://192.168.1.52:3030/api/edit-franchise', {
          method: 'POST',
          body: JSON.stringify({dataSimpan}),
          headers: {
              "Content-type": "application/json; charset=UTF-8",
              "brambang-access-token": sessionStorage.getItem("currentToken")

          }
      });
    } else {
        return fetch('http://192.168.1.52:3030/api/tambah-franchise', {
            method: 'POST',
            body: JSON.stringify({dataSimpan}),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "brambang-access-token": sessionStorage.getItem("currentToken")

            }
        });
    }
}

export const simpanDataFranchiseDetails = (dataSimpan) => {
    return fetch('http://192.168.1.52:3030/api/tambah-detailfranchise', {
        method: 'POST',
        body: JSON.stringify({
            dataSimpan
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "brambang-access-token": sessionStorage.getItem("currentToken")

        }
    });
}

export const getFranchiseDetailList = (franchiseId) => {
    console.log(franchiseId);
    return fetch('http://192.168.1.52:3030/api/detail-detailfranchise', {
        method: 'POST',
        body: JSON.stringify({
            usersId: franchiseId
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "brambang-access-token": sessionStorage.getItem("currentToken")

        }
    });
}
