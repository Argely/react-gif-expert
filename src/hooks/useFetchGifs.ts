import { getGifs } from '../helpers/getGifs'
import { useEffect, useState } from 'react'
import { gifType } from '../../types/GeneralTypes'


export const useFetchGifs = (category: string) => {

    const [images, setImages] = useState<Array<gifType>>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const getImages = async() => {

    const imagesList = await getGifs(category);
    setImages(imagesList)
    setIsLoading(false)
    }

    useEffect(() => {

        getImages()

    }, [])


    return {
        images,
        isLoading
    }

}
 