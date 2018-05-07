const container = document.getElementById("content");
const uploadButton = document.getElementById("upload");
let now = Date.now();
let interval = 5000;
let errors = 0;

function print(arr) {
    arr.forEach(element => {
        let img = document.createElement('img')
        img.src = element;
        container.appendChild(img)
    });
}

function fetchImages() {

    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            after: now,
        })
    }
    
    fetch("/update", postOptions)
        .then(response => response.json())
        .then(data => {
            if (data.timestamp > now) {
                print(data.images);
            }

            // I reset the error counter to 0 here
            errors = 0
            return now = data.timestamp
        }).catch(function(error) {
            errors++
            if (errors == 2) {
                clearInterval(exicutionTimer)
            }
          });
          console.log(errors)
}
setInterval(fetchImages, interval);