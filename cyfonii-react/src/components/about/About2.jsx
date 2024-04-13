import React , {useState} from 'react';

import Button from '../button/Button';
import Partner from '../partner/Partner';

import img from '../../assets/images/layouts/about-17.png'


function About2(props) {

    const [dataBlock] = useState(
        {
            subheading: 'About us',
            heading: 'Hight Quality QR Profile',

            desc1: 'TOY QR : 온오프라인의 확장성이 높은 QR코드를 활용하여, 서로의 온라인 정보를 쉽게 공유할 수 있도록 돕는 서비스입니다.',
            desc2: 'Image to Image 방식으로 사용자 취향에 맞는 QR코드를 생성하고, 자신의 온라인 정보 링크를 프로필 페이지에 작성합니다. 그러면 휴대폰 위젯을 통해 언제나 쉽게 다른사람에게 보여줄 수 있고, QR 코드 접속을 통해 다른 사람과 온라인에서 원클릭으로 연결될 수 있습니다.',
           
        }
    )
    return (
        <section className="about s2">
                    <div className="shape"></div>
                    <div className="shape right"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="block-text center pd-0">
                                    <h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>
                                    <h3 className="heading pd">{dataBlock.heading}</h3>
                                        
                                </div>

                                <div className="about__main center" data-aos="fade-up" data-aos-duration="3000">
                                    <img src={img} alt="Cyfonii" />
                                    <h5 className="mb-17">{dataBlock.desc1}</h5>
                                    <p className="mb-30">{dataBlock.desc2}</p>
                                    <Button title='More About Us' link='/team' />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
    );
}

export default About2;