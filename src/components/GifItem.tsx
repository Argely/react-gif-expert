import { gifType } from "../../types/GeneralTypes"

export const GifItem = ({title, url} : gifType) => {

    return (
       <div className="card">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
       </div>
    )
}