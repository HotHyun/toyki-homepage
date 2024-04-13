import React , {useState} from 'react';

import img1 from '../../assets/images/layouts/about-07.png'
import img2 from '../../assets/images/layouts/about-12.png'
import img3 from '../../assets/images/layouts/about-11.png'
import img5 from '../../assets/images/layouts/about-10.png'
import Button from '../button/Button';



function About(props) {

    const [dataImg] = useState([
        {
            id: 1,
            img : img1,
            class: 'img1'
        },
        {
            id: 2,
            img : img2,
            class: 'img2'
        },
        {
            id: 3,
            img : img3,
            class: 'img3'
        },
        {
            id: 5,
            img : img5,
            class: 'img5'
        },
    ])

    const [dataBlock] = useState(
        {
            subheading: 'About us',
            heading: 'Reimagining the Formation of Social Networks',
            desc1: '오프라인 공간에서 누구나 접근 가능한 아바타를 활용하여, 사람들이 더 넓은 사회적 연결을 형성할 수 있도록 기회를 제공합니다.' ,
            desc2 :'TOYKI의 아바타로 나의 이미지를 자유롭게 표현하고, 다른 사람들과 상호익명을 기반으로 안전하게 소통할 수 있습니다. 아트토이로 현실세계에 구현된 고유한 아바타는 3D 프린팅 기술을 활용하여 완벽하게 구현되며, 어플과 연동되어 TOYKI를 지닌 유저들과 다양한 활동을 할 수 있습니다.'

        }
    )
    return (
        <section className="about">
                <div className="shape"></div>
                <div className="container">
                    <div className="row rev">
                        <div className="col-xl-6 col-md-12">
                            <div className="about__right">
                                <div className="images">
                                    {
                                        dataImg.map(idx => (
                                            <img key={idx.id} className={idx.class} src={idx.img} alt="cyfonii" />
                                        ))
                                    }
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="block-text" >
                                <h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>
                                <h3 className="heading">{dataBlock.heading}</h3>
                                    <p className="mb-17">{dataBlock.desc1}</p>
                                    <p className="mb-26">{dataBlock.desc2}</p>
                                    <Button link='/about' title='More About Us' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default About;