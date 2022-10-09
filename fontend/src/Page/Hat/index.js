import classNames from 'classnames/bind'
import styles from './hat.module.scss'

const cx = classNames.bind(styles)
function Hat() {
    return (<div className={cx('wrapper')}>
        Hat
    </div>);
}

export default Hat;