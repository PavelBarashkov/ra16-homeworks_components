/* eslint-disable react/prop-types */
import classes from "./ShopItemFunc.module.css";


export const ShopItemFunc  = ({item}) => {

  return (
        <div className={classes.container}>
            <h3 className={classes.brand}>{item.brand}</h3>
            <h1 className={classes.title}>{item.title}</h1>
            <h3 className={classes.description}>{item.description}</h3>
            <p className={classes.descriptionFull}>{item.descriptionFull}</p>
            <div className={classes.priceContainer}>
                <span>{item.currency}</span>
                <span className={classes.price}>{item.price}</span>
                <button>Добавть в карзину</button>
            </div>
        </div>
  )
}
