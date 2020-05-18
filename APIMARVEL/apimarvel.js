

const API_TOKEN = "2e09dee3f41a4cbf1e29f2bdf0f9a250";

export function getComicsFromApiWithSearchedText (text) {
    const url = "http://gateway.marvel.com/v1/public/comics" + API_TOKEN + text
    return fetch(url)
        .then((response) => response.json())
        .catch((err) => console>error(error))

}

