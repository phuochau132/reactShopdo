import classNames from "classnames/bind";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './slide.module.scss'

const cx = classNames.bind(styles)
function SlideFixed() {
    const settings = {
        dots: true,
        infinite: true,
        centerMode: false,
        speed: 5000,
        cssEase: 'linear',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1,
    }

    return (
        <Slider className={cx('slide')} {...settings}>
            <div>
                <p className={cx('slide-title')}>GET TO KNOW ABOUT OUR VIBE</p><span className={cx('span-title')}>2022 HADES™</span >
            </div>
            <div>
                <p className={cx('slide-title')}>GET TO KNOW ABOUT OUR VIBE</p><span className={cx('span-title')}>2022 HADES™</span >
            </div>
            <div>
                <p className={cx('slide-title')}>GET TO KNOW ABOUT OUR VIBE</p><span className={cx('span-title')}>2022 HADES™</span >
            </div>
            <div>
                <p className={cx('slide-title')}>GET TO KNOW ABOUT OUR VIBE</p><span className={cx('span-title')}>2022 HADES™</span >
            </div>
            <div>
                <p className={cx('slide-title')}>GET TO KNOW ABOUT OUR VIBE</p><span className={cx('span-title')}>2022 HADES™</span >
            </div>
            <div>
                <p className={cx('slide-title')}>GET TO KNOW ABOUT OUR VIBE</p><span className={cx('span-title')}>2022 HADES™</span >
            </div>
        </Slider>);
}

export default SlideFixed;