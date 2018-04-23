let now = Date.now();
const container = document.getElementById("content")
const uploadButton = document.getElementById("upload")

function print(arr) {
    arr.forEach(element => {
        let img = document.createElement('img')
        img.src = element;
        container.appendChild(img)
        console.log(element)
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
            return now = data.timestamp
        })

}
setInterval(fetchImage, 5000);