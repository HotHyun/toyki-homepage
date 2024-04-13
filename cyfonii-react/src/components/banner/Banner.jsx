import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/layouts/banner-06.png'
import img3 from '../../assets/images/layouts/avt-01.png'


function Banner(props) {
    return (
        <section className="banner">
                <div className="shape right"></div>
                <div className="container big">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="banner__left">
                                <div className="block-text">
                                    <h2 className="heading">Connect the <br />
                                        On-offline <span className="s1 arlo_tm_animation_text_word">TOY-KI</span> <br />
                                        World</h2>
                                    <p className="desc">People use TOYKI to express themselves, accessing avatars without limits, fostering broader social connections.</p>

                                    <Link to="/contact" className="action-btn"><span>Get Connected</span></Link>
                                </div>

                                <div className="pay">
                                    <h6>We are Team TOYKI</h6>

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">

                            <div className="banner__right">
                                <div className="image">
                                    <img src={img1} alt="cyfonii" />
                                </div>

                                <div className="owner">
                                    <div className="image">
                                        <img src={img3} alt="cyfonii" />
                                    </div>
                                    <div className="content">
                                        <h5>Instagram Linked</h5>
                                        <p>@toyki_official</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Banner;