function loadPhotos(){
    const api_url = "https://api.unsplash.com/photos/?client_id=6VPYEFmyHNDgSFolPcwxT-8PAO_bTq-PvqXLiLxU9sg"
//    const search = document.getElementById('search').value
//    const API_KEY= "6VPYEFmyHNDgSFolPcwxT-8PAO_bTq-PvqXLiLxU9sg"
    var result, result1, result2;

    fetch(api_url, {
        method:"GET",
        headers:{
            Accept:"application/json",
        }
    }).then( function(response) {
        console.log(response);
        return response.json();
    }).then(response => {
        const photos = response;
        console.log(photos);
        appendImages(photos);

       
    }).catch(error => {
        console.log(error);
    })
    
}
//creating the html elements
const images = (user) => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const imgdiv = document.createElement("div");
    
    imgdiv.appendChild(p);
    div.appendChild(imgdiv)
   
    
    div.className = "col-md-4"
    p.className = "user-name"
    imgdiv.className= "img-container"
    
    p.textContent = `${user.user.first_name}`
    imgdiv.style.height = "300px"
    imgdiv.style.width = "100%"
    imgdiv.style.marginTop = "30px"
    imgdiv.style.borderRadius = "8px"
    imgdiv.style.minHeight = "200px"
    imgdiv.style.minWidth = "200px"
    imgdiv.style.background= `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url(${user.urls.regular})`
    imgdiv.style.backgroundSize = "cover"
    imgdiv.style.backgroundRepeat = "no-repeat"
    
    return div;   
}
 
const appendImages = (photos) => {
    const image = document.querySelector('#images');
        photos.map(photo => {
            image.appendChild(images(photo));
        })
}
