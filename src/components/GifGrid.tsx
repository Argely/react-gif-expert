import { GifGridPropsTypes } from '../../types/GeneralTypes'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './index'


export const GifGrid = ( {category} : GifGridPropsTypes ) => {

    const { images, isLoading } = useFetchGifs(category)


    return (
        <>
            <h3>{ category }</h3>

            {
                isLoading && <h2>Cargando Gifs</h2>
            }

            <div className="card-grid">
                {
                    images.map(images => (
                        <GifItem 
                            key={images.id}
                            {...images}
                        />
                    ))
                }   
            </div>

            
        </>
    )

 }

