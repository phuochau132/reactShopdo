import classNames from 'classnames/bind'
import styles from './recruiment.module.scss'
import { Link } from 'react-router-dom'

import { ItemsJob } from '../../Component'
import { useState } from 'react'

const cx = classNames.bind(styles)
function Recruitment() {
    const [jobs, setJobs] = useState([{ img: '	https://theme.hstatic.net/1000306633/1000891824/14/careers_1.png?v=151', title: 'CREATIVE EXECUTIVE', content: 'MARKETING TEAM' }, { img: '	https://theme.hstatic.net/1000306633/1000891824/14/careers_1.png?v=151', title: 'CREATIVE EXECUTIVE', content: 'MARKETING TEAM' }, { img: '	https://theme.hstatic.net/1000306633/1000891824/14/careers_1.png?v=151', title: 'CREATIVE EXECUTIVE', content: 'MARKETING TEAM' }, { img: '	https://theme.hstatic.net/1000306633/1000891824/14/careers_1.png?v=151', title: 'CREATIVE EXECUTIVE', content: 'MARKETING TEAM' }, { img: '	https://theme.hstatic.net/1000306633/1000891824/14/careers_1.png?v=151', title: 'CREATIVE EXECUTIVE', content: 'MARKETING TEAM' }, { img: '	https://theme.hstatic.net/1000306633/1000891824/14/careers_1.png?v=151', title: 'CREATIVE EXECUTIVE', content: 'MARKETING TEAM' }, { img: '	https://theme.hstatic.net/1000306633/1000891824/14/careers_1.png?v=151', title: 'CREATIVE EXECUTIVE', content: 'MARKETING TEAM' }, { img: '	https://theme.hstatic.net/1000306633/1000891824/14/careers_1.png?v=151', title: 'CREATIVE EXECUTIVE', content: 'MARKETING TEAM' }])
    return (<div className={cx('wrapper')}>
        <div className={cx('container')}>
            <p className={cx('title')}>Recruitment</p>
            <div className={cx('container-job')}>
                {jobs.map((item, index) => {
                    return <ItemsJob key={index} data={item} />
                })}

            </div>
        </div>
    </div>);
}

export default Recruitment;