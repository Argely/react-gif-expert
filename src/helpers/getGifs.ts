import { gifType } from '../../types/GeneralTypes';


export const getGifs = async (category: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=alp6dJ43aK6z9mXj91dulT0ycDzUDqV7&q=${category}&limit=10`;
    const resp =  await fetch(url)
    const { data } =  await resp.json()
   
    const gifInfo = data.map((gif: gifType) => (
        {   
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }

    ))

    console.log(gifInfo)

    return gifInfo
}