import { Link } from 'react-router-dom';

import classNames from 'classnames/bind'
import styles from './header.scss'

const cx = classNames.bind(styles)


function Header() {
    const user = null;
    return (<div className={cx('wrapper')}>
        <div className={cx('header-left')}>
            <Link className={cx('link')} to='/'> <img className={cx('logo-header')} src='https://theme.hstatic.net/1000306633/1000891824/14/logo.png?v=151' alt="Ảnh khong hiển thị" /></Link>
            <Link className={cx('link')} to='/all/1'>SHOP ALL</Link>
            <Link className={cx('link')} to='/top'>TOPS</Link>
            <Link className={cx('link')} to='/bottom'>BOTTOMS</Link>
            <Link className={cx('link')} to='/outerwear'>OUTERWEAR</Link>
            <Link className={cx('link')} to='/footwear'>FOOTWEAR</Link>
            <Link className={cx('link')} to='/hat'>HAT</Link>
            <Link className={cx('link')} to='/bags'>BAGS</Link>
            <Link className={cx('link')} to='/sale'>SALE</Link>
            <Link className={cx('link')} to='/recruitment'>RECRUITMENT</Link>
        </div>
        <div className={cx('header-right')}>
            <div className={cx('right-container')}>
                <Link className={cx('link')} to='/login'>LOGIN</Link>
                <Link className={cx('link')} to='/register'>REGISTER</Link>
                <Link className={cx('link')}>FILTER</Link>
                <Link className={cx('link')}>CART</Link>
            </div>

        </div>

    </div>);
}

export default Header;