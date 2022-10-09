import classNames from 'classnames/bind'
import styles from './bag.module.scss'

const cx = classNames.bind(styles)
function Bag() {
    return (<div className={cx('wrapper')}>
        Bag
    </div>);
}

export default Bag;