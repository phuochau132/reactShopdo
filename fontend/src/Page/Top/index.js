import classNames from 'classnames/bind'
import styles from './top.module.scss'

const cx = classNames.bind(styles)
function Top() {
    return (<div className={cx('wrapper')}>
        Top
    </div>);
}

export default Top;