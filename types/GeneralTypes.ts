export type GifGridPropsTypes = {
    category: string;
}

export interface gifType extends imgGif{
    id: string,
    title: string,
    url: string
}

export interface imgGif {
    images: {
        downsized_medium: {
            url: string
        }
    }
}


export default {}