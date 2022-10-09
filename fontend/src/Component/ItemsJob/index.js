import classNames from "classnames/bind";
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import styles from './item.module.scss'

const cx = classNames.bind(styles)
function ItemsHome({ data }) {
    console.log(data.img);

    return (<div className={cx('wrapper')}>
        <Link className={cx('link')}>  <img className={cx('img')} src={data.img} alt='ERR' /></Link>
        <div className={cx('title')}>{data.title}</div>
        <div className={cx('content')}>{data.content}</div>
    </div>);
}


export default ItemsHome;