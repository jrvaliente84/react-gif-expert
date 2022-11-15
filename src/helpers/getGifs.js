export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=FwEsXPX8kNCUQplVNaXT1wQHNe11Jr2b&&limit=10&q=${category}`;
    const response = await fetch(url);
    const {data} = await response.json();

    const gifs = data.map(img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    ))
    console.log(gifs);

    return gifs;
};
