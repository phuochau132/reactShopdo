import classNames from 'classnames/bind'
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import styles from './shopall.module.scss'
import { Product, Items } from '../../Component';

const cx = classNames.bind(styles)
function ShopAll() {
    const [product, setProduct] = useState([{
        img: '//product.hstatic.net/1000306633/product/madness_tee_2c91514d942444c79c7066bbb60052e4_grande.jpg',
        imgHover: '//product.hstatic.net/1000306633/product/madness_tee_78b45ded5aea4d3d89586e1be203f343_grande.jpg',
        title: 'MADNESS TEE1', price: '390,000₫'
    }, {
        img: '//product.hstatic.net/1000306633/product/madness_tee_2c91514d942444c79c7066bbb60052e4_grande.jpg',
        imgHover: '//product.hstatic.net/1000306633/product/madness_tee_78b45ded5aea4d3d89586e1be203f343_grande.jpg',
        title: 'MADNESS TEE2', price: '390,000₫'
    }, {
        img: '//product.hstatic.net/1000306633/product/madness_tee_2c91514d942444c79c7066bbb60052e4_grande.jpg',
        imgHover: '//product.hstatic.net/1000306633/product/madness_tee_78b45ded5aea4d3d89586e1be203f343_grande.jpg',
        title: 'MADNESS TEE3', price: '390,000₫'
    }, {
        img: '//product.hstatic.net/1000306633/product/madness_tee_2c91514d942444c79c7066bbb60052e4_grande.jpg',
        imgHover: '//product.hstatic.net/1000306633/product/madness_tee_78b45ded5aea4d3d89586e1be203f343_grande.jpg',
        title: 'MADNESS TEE4', price: '390,000₫'
    }, {
        img: '//product.hstatic.net/1000306633/product/madness_tee_2c91514d942444c79c7066bbb60052e4_grande.jpg',
        imgHover: '//product.hstatic.net/1000306633/product/madness_tee_78b45ded5aea4d3d89586e1be203f343_grande.jpg',
        title: 'MADNESS TEE5', price: '390,000₫'
    }, {
        img: '//product.hstatic.net/1000306633/product/madness_tee_2c91514d942444c79c7066bbb60052e4_grande.jpg',
        imgHover: '//product.hstatic.net/1000306633/product/madness_tee_78b45ded5aea4d3d89586e1be203f343_grande.jpg',
        title: 'MADNESS TEE6', price: '390,000₫'
    }, {
        img: '//product.hstatic.net/1000306633/product/madness_tee_2c91514d942444c79c7066bbb60052e4_grande.jpg',
        imgHover: '//product.hstatic.net/1000306633/product/madness_tee_78b45ded5aea4d3d89586e1be203f343_grande.jpg',
        title: 'MADNESS TEE7', price: '390,000₫'
    }, {
        img: '//product.hstatic.net/1000306633/product/madness_tee_2c91514d942444c79c7066bbb60052e4_grande.jpg',
        imgHover: '//product.hstatic.net/1000306633/product/madness_tee_78b45ded5aea4d3d89586e1be203f343_grande.jpg',
        title: 'MADNESS TEE8', price: '390,000₫'
    }])
    let { allId } = useParams();
    const location = useLocation();
    // useEffect(() => {
    //     fetch(`http://localhost:8080/product/${allId}`)
    //         .then((res) => {
    //             return res.json()
    //         })
    //         .then((res) => (
    //             setProduct(res)
    //         ))

    // }, [location])
    console.log(Number(allId));
    return (<div className={cx('wrapper')}>
        <Product items={product} total={4} query={Number(allId)} />
    </div>);
}

export default ShopAll;