import classNames from 'classnames/bind'
import styles from './bottom.module.scss'

const cx = classNames.bind(styles)
function Bottom() {
    return (<div className={cx('wrapper')}>
        Bottom
    </div>);
}

export default Bottom;