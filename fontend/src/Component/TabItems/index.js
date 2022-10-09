import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import SweetPagination from "sweetpagination";
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'

import styles from './tabItems.module.scss'
import { SvgFb, SvgIns } from '../../img'

const cx = classNames.bind(styles)


function TabItems({ items = [], total = 1, query }) {
    const data = items;
    const arr = []
    for (let i = 1; i <= Math.ceil(data.length / total); i++) {
        arr.push(i)

    }
    return (
        <div className={cx('wrapper')}>
            {query != 1 && <Link to={`/all/${Number(query - 1)}`} className={cx('item-back')}><FontAwesomeIcon icon={faArrowLeftLong} /></Link>}
            {
                arr.map((item, index) => {
                    if (item >= query + 3 && item != arr[arr.length - 1]) {
                        return <Link to={`/all/${item}`} className={cx('item-tab', {
                            active: query == item
                        })} key={index}>...</Link>
                    } else {
                        if (item <= query - 3 && item != arr[0]) {
                            return <Link to={`/all/${item}`} className={cx('item-tab', {
                                active: query == item
                            })} key={index}>...</Link>
                        } else {
                            return <Link to={`/all/${item}`} className={cx('item-tab', {
                                active: query == item
                            })} key={index}>{item}</Link>
                        }
                    }
                })
            }
            {query != Math.ceil(data.length / total) && <Link to={`/all/${Number(query) + 1}`} className={cx('item-next')}><FontAwesomeIcon icon={faArrowRightLong} /></Link>}



        </div>
    );
}

export default TabItems;