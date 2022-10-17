import classNames from 'classnames/bind'
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import styles from './login.module.scss'

const cx = classNames.bind(styles)
function Login() {
    const email = useRef();
    const password = useRef();
    console.log(email.current);
    const handleLogin = async () => {
        await fetch("http://localhost:8080/TestJson")
    }

    return (<div className={cx('wrapper')}>
        <div className={cx('content')}>
            <h2 className={cx("content-tile")}>Đăng nhập</h2>
            <div className={cx("content-form")}>
                <div className={cx('content-label')}><label htmlFor="email">EMAIL-ID</label></div>
                <input className={cx('content-input')} id="email" type="text" />
            </div>
            <div className={cx("content-form")}>
                <div className={cx('content-label')} > <label htmlFor="password">PASSWORDS</label></div>
                <input className={cx('content-input')} id="password" type="password" />
            </div>
            <div className={cx("login-footer")}>
                <div>
                    <button onClick={handleLogin} className={cx('button')}>
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