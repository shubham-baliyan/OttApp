import React from 'react'
import { Container } from 'reactstrap';
import CardSlider2 from '../components/Cards/CardSlider2';


function Single(props) {
    return (
        <div>
            <Container>
                <div className="__container">
                    <div className="img">
                        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6194/986194-h" alt="" />
                    </div>
                    <div className="__details">
                        <h4>The Big Bull</h4>
                        <h5>1 hr 41 min ● 2021 ● Crime ● 12+ ● Hindi </h5>
                        <p>During the late '80s, Hemant Shah, the man with the Midas touch<br />
                    off the beggest hustle that shock indian's financial fabric. Inspired by ture events.</p>
                        <div className="__buttons">
                            <button><i className="fa fa-play"></i> WATCH NOW</button>
                            <button><i className="fa fa-plus"></i>WATCHLIST</button>
                            <button><i className="fa fa-share-icon"></i>SHARE</button>
                        </div>
                    </div>
                </div>
                <div className="slidercss">
                    <CardSlider2 title="Similar" />
                </div>
            </Container>
        </div>

    )
}

export default Single;
