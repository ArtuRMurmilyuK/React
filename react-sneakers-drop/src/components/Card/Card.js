import React from 'react';
import styles from './Card.module.scss';

function Card({onClickFavorite, onClickPlus, title, imageUrl, price}) {
    const[isAdded, setIsAdded] = React.useState(false);
    
    const handleClickPlus =()=>{
        onClickPlus({title, imageUrl, price});
        setIsAdded(!isAdded);
    };

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src="/img/liked.svg" alt="Unlike" />
            </div>

            <img width={133} height={177} src={imageUrl} alt="Sneakers" />
            <h5>{title}</h5>
            <div className="d-flex justify-between  aling-center">
                <div className="d-flex flex-column ">
                    <span>Цена:</span>
                    <b>{price} ₴</b>
                </div>
                <img 
                    className={styles.plus} 
                    onClick={handleClickPlus}  
                    src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} 
                    alt="Plus" 
                />
            </div>
        </div>
    );
}

export default Card;