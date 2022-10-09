import classNames from "classnames/bind";
import { useLocation } from 'react-router-dom'

import styles from './product.module.scss'
import TabItems from '../TabItems'
import Item from "../ItemsProduct";

const cx = classNames.bind(styles)
function Product({ items, total, query }) {
    const data = items;
    const dataNew = []
    if (query != Math.ceil(data.length / total)) {
        console.log(query * total);
        for (let i = (query - 1) * total; i <= query * total - 1; i++) {
            dataNew.push(data[i])
        }
    } else {
        for (let i = (query - 1) * total; i <= data.length - 1; i++) {
            dataNew.push(data[i])
        }
    }
    console.log(dataNew);

    return (<div className={cx('wrapper')}>
        <div className={cx('container')}>
            <div className={cx('product')}>
                {dataNew.map((item, index) => {
                    return <Item row={4} total={total} data={item} key={index}></Item>
                })}
            </div>
            <TabItems items={data} query={query} total={total} />
        </div>
    </div>);
}


export default Product;