import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GrifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);

    console.log(isLoading);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2 >Cargando...</h2>)
            }
            <div className='card-grid'>
                { 
                    images?.map( ({title, id, url}) => ( 
                        <GifItem key={id} title={title} url={url}></GifItem> 
                    )) 
                }
                
            </div>
        </>

    )
}