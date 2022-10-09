import classNames from "classnames/bind";
import { motion } from 'framer-motion'

import styles from './item.module.scss'

const cx = classNames.bind(styles)
function Item({ data, row }) {
    console.log(data.title);
    const cssCoL = `col${row}`
    return (<div className={cx('wrapper', {
        [cssCoL]: true
    })}>
        <motion.img animation={{ duration: 5, type: 'tween' }} className={cx('img')} src={data.img} alt='ERR' />
        <motion.img className={cx('imgHover')} src={data.imgHover} alt='ERR' />
        <div className={cx('color')}>asd</div>
        <div className={cx('title')}>{data.title}</div>
        <div className={cx('price')}>{data.price}</div>
    </div>);
}


export default Item;