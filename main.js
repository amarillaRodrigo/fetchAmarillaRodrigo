const url = 'https://www.scorebat.com/video-api/v3/feed/?token=MTYxMTkwXzE3MTc1MDcxNzhfYTUwOTVkNDY4NTYyZTk2MzgxZDNkODYyM2Y2YTMyODc2ODhjZjhkNg==';

const procesarPromesa = async (url) => {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}

procesarPromesa(url)
    /*.then((result) => {
        result.response.forEach(video => {
            elContainer.innerHTML += `<video src="${video.video}"></video>`
        });
    })*/