//let response = fetch(url_api, [])
const api_url = "https://api.unsplash.com/users/lukeskywalker/photos"

async function getapi(url) {
    
    const response = await fetch(url);
    
    var data = await response.json();
    console.log(data);
    
    if(response) {
        hideloader();
    }
        show(data)
}

getapi(api_url);

function hideloader(){
    document.getElementById('loading').style.display = 'none';
}

function show(data) {
    let tab = `
    <div>
`
    for (let r of data.list) {
        tab += `
            <div> ${r.user.links.photos} </div>
    `
        
    }
    Document.getElementById('image').innerHTML = tab;
}