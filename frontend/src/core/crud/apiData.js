export const create = (data) => {
    return fetch(`http://localhost:8080/data/createdata`, {
        method: "POST",
        headers: {
            Accept: "application/json",
        },
        body: data
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};