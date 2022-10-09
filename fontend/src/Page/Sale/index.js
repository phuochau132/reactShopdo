import classNames from 'classnames/bind'
import styles from './sale.module.scss'

const cx = classNames.bind(styles)
function Sale() {
    return (<div className={cx('wrapper')}>
        Sale
    </div>);
}

export default Sale;