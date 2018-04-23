var now = Date.now();
const container = document.getElementsByClassName("content")
const uploadButton = document.getElementById("upload")

function fetchImages() {

    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            usertime: now,
        })
    }
    fetch("/update", postOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })

    setTimeout(fetchImages, 5000);
}
fetchImages(); 