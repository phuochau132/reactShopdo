import classNames from 'classnames/bind'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

import styles from './register.module.scss'

const cx = classNames.bind(styles)
function Register() {
    return (<div className={cx('wrapper')}>
        <div className={cx('content')}>
            <h2 className={cx("content-tile")}>Đăng Ký</h2>
            <div className={cx("content-form")}>
                <input className={cx('content-input')} id="email" type="text" placeholder="Họ" />
            </div>
            <div className={cx("content-form")}>
                <input className={cx('content-input')} id="password" type="password" placeholder="Tên" />
            </div>
            <div className={cx("content-form")}>
                <input className={cx('content-radio')} id="Nam" name="sex" type="radio" />
                <label className={cx('content-label')} for="Nam">Nam</label>
                <input className={cx('content-radio')} id="Nu" name="sex" type="radio" />
                <label className={cx('content-label')} for="Nu">Nữ</label>
            </div>
            <div className={cx("content-form")}>
                <input className={cx('content-input')} id="password" type="password" placeholder="mm/dd/yyyy" />
            </div>
            <div className={cx("content-form")}>
                <input className={cx('content-input')} id="password" type="password" placeholder="Email" />
            </div>
            <div className={cx("content-form")}>
                <input className={cx('content-input')} id="password" type="password" placeholder="Mật khẩu" />
            </div>
            <div className={cx("login-footer")}>
                <div>
                    <button className={cx('button')}>
                        ĐĂNG KÝ
                    </button>
                </div>
                <div className={cx("footer-link")}>
                    <Link className={cx('link')} to='/'>
                        <FontAwesomeIcon className={cx('icon')} icon={faArrowLeftLong} />
                        <span className={cx('span')}>Quay lại trang chủ</span>
                    </Link>


                </div>
            </div>




        </div>

    </div>);
}

export default Register;