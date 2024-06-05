const url = 'https://www.scorebat.com/video-api/v3/feed/?token=MTYxMTkwXzE3MTc1MDcxNzhfYTUwOTVkNDY4NTYyZTk2MzgxZDNkODYyM2Y2YTMyODc2ODhjZjhkNg==';
const container = document.getElementById('container');

const procesarPromesa = async (url) => {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        mostrarPromesa(result.response);
    } catch (error) {
        console.error(error);
    }
}

procesarPromesa(url);

function mostrarPromesa(videos) {
    videos.forEach(video => {
        const contenedor2 = document.createElement("div");
        contenedor2.className = "video-item";
        const videoEmbed = video.videos && video.videos.embed ? video.videos.embed : "";
        contenedor2.innerHTML = `
            <h2 class="titulo">${video.title}</h2>
            <p class="competicion">Competición: ${video.competition}</p>
            <img class="miniatura" src="${video.thumbnail}" alt="${video.title}"> 
            <div class="video">${videoEmbed}</div>`;
        container.appendChild(contenedor2);
    });
}