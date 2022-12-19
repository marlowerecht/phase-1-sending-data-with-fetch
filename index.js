// // Add your code here

// const formData = {
//     dogName: "Lilly",
//     dogBreed: "Saint Bernard"
// };

// const configurationObj = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// };

// fetch("http://localhost:3000/dogs", configurationObj)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => {
//         alert("uh oh")
//         console.log(error.message)
//     })

function submitData(name, email) {

    const dataObj = {
        name: name.textContent,
        email: email.textContent
    }

    // console.log(email);

    // const body = document.querySelector('body');
    // const div = document.createElement('div');
    // body.append(div);

    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name.textContent,
            email: email.textContent
        })
    })
    .then(response => response.json())
    .then(data => document.append(data))
}