import classNames from 'classnames/bind'
import styles from './outerware.module.scss'

const cx = classNames.bind(styles)
function OuterWare() {
    return (<div className={cx('wrapper')}>
        OuterWare
    </div>);
}

export default OuterWare;