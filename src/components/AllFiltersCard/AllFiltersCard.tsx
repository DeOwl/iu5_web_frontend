import { FC } from 'react'
import './AllFiltersCard.css'
import image_mock from "../../assets/def.jpg"
import { dest_img } from '../../../target_config'

export interface FiltersPropWithHandler {
    image: string
    title: string
    description: string
    id: number,
    clickHandler: ()=> void;
}

export interface FiltersProp {
    image: string
    title: string
    description: string
    id: number,
}

const AllFiltersCard: FC<FiltersPropWithHandler> = ({ image, title, description, clickHandler }) => (
    <div className="card">
        <img src={ image ? (dest_img + image) : image_mock} className="image" />
        <div className="card-contents">
            <p className="title">{title}</p>
            <p className="short-description"style={{display: '-webkit-box',
                                                    WebkitBoxOrient: 'vertical',
                                                    WebkitLineClamp: 3,
                                                    maxWidth: '100%',}}>
                                                        {description}</p>
            <button onClick={clickHandler} className="card-button">Подробнее</button> 
        </div>
    </div>
)

export default AllFiltersCard;