import React , {useState} from 'react';

import PageTitle from '../components/pagetitle/PageTitle';
import Counter from '../components/counter/Counter';
import Footer from '../components/footer/Footer';
import Faqs from '../components/faqs/Faqs';
import dataFaqs from '../assets/fake-data/data-faq';

import img1 from '../assets/images/layouts/about-14.png'
import img3 from '../assets/images/layouts/about-12.png'
import img5 from '../assets/images/layouts/about-09.png'



function VisionsMission(props) {

    const [dataImg] = useState([
        {
            id: 1,
            img : img1,
            class: 'img1'
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
    return (
        <div className='page-visions wrapper'>

            <PageTitle title='Visions & Mission' />
            <section className="about">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-xl-6 col-md-12">
                            <div className="block-text">
                                <h6 className="sub-heading"><span>Visions & Mission</span></h6>
                                <h3 className="heading wow" data-splitting>Our Vision</h3>
                                    <h5 className="mb-17">People use TOYKI to express themselves, accessing avatars without limits, fostering broader social connections.</h5>
                            </div>
                            <div className="block-text">
                                <h6 className="sub-heading"><span>Visions & Mission</span></h6>
                                <h3 className="heading wow" data-splitting>Our Mission</h3>
                                    <h5>We're creating a more connected society with TOYKI.</h5>
                            </div>
                        </div>
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
                    </div>
                </div>
            </section>
            <Counter />  

            <Faqs data={dataFaqs} />


            <Footer />
        </div>
    );
}

export default VisionsMission;