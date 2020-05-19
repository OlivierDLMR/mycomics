

const PUBLIC_KEY = "2e09dee3f41a4cbf1e29f2bdf0f9a250";
const PRIVATE_KEY = "bdf671385b4b9368559aefefbcc533e2a47c0ea4"

export function getComicsFromApiWithSearchedText (text) {
    const url = "http://gateway.marvel.com/v1/public/comics" + PUBLIC_KEY
    return fetch(url)
        .then((response) => response.json())
        .catch((err) => console>error(error))

}

