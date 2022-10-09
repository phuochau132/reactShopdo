import classNames from 'classnames/bind'
import { Link } from 'react-router-dom';

import styles from './login.module.scss'

const cx = classNames.bind(styles)
function Login() {
    return (<div className={cx('wrapper')}>
        <div className={cx('content')}>
            <h2 className={cx("content-tile")}>Đăng nhập</h2>
            <div className={cx("content-form")}>
                <div className={cx('content-label')}><label for="email">EMAIL-ID</label></div>
                <input className={cx('content-input')} id="email" type="text" />
            </div>
            <div className={cx("content-form")}>
                <div className={cx('content-label')} > <label for="password">PASSWORDS</label></div>
                <input className={cx('content-input')} id="password" type="password" />
            </div>
            <div className={cx("login-footer")}>
                <div>
                    <button className={cx('button')}>
                        ĐĂNG NHẬP
                    </button>
                </div>
                <div className={cx("footer-right")}>
                    <Link path="/register" className={cx('link')}>Quên mật khẩu?</Link><br />
                    <span className={cx('span')}>hoặc</span>
                    <Link to2="/register" className={cx('link')}>Đăng ký</Link>

                </div>
            </div>




        </div>

    </div>);
}

export default Login;