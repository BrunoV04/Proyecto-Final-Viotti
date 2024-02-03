import ItemListContainerCss from './ItemListContainer.module.css'
import ItemList from './ItemList'
import Slider from '../Slider/Slider'

const ItemListContainer = () => {
    return (
        <>
            <Slider />
            <div className="container">
                <div className={ItemListContainerCss.base}>
                    <ItemList />
                </div>
            </div>
        </>
    )
}

export default ItemListContainer