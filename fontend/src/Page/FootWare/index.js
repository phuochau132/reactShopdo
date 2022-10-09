import classNames from 'classnames/bind'
import styles from './footware.module.scss'

const cx = classNames.bind(styles)
function FootWare() {
    return (<div className={cx('wrapper')}>
        FootWare
    </div>);
}

export default FootWare;