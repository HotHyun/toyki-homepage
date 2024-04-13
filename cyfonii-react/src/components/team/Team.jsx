import React , {useState} from 'react';
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Partner from '../partner/Partner';

Team.propTypes = {
    data: PropTypes.array
};

function Team(props) {

    const {data} = props;

    const [dataBlock] = useState(
        {
            subheading: 'Team Members',
            heading: 'Our Amazing Team Members',
        }
    )

    return (
        <section className="team">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="block-text center">
                            <h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>
                            <h3 className="heading pd">{dataBlock.heading}</h3>
                        </div>

                        <Swiper
                                className="team-swiper"
                                spaceBetween={30}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        },
                                    500: {
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                    },
                                    991: {
                                        slidesPerView: 4,
                                    },
                                }}
                                loop={false}
                                
                            >

                                {
                                    data.map(idx => (
                                        <SwiperSlide key={idx.id}>
                                            <div className="swiper-slide">
                                                <div className="team-box">
                                                    <div className="image">
                                                        <Link to="/team">
                                                            <img src={idx.img} alt="Cyfonii" />
                                                        </Link>
                                                    </div>
                                                    <div className="content">
                                                        <Link to="/team" className="h5 name">{idx.name}</Link>
                                                        <p className="postion">
                                                            {idx.position}
                                                        </p>

                                                        <ul className="list-social">
                                                            <li><a href= {idx.instagram}>
                                                                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M2.57969 9.03953C2.51969 9.03953 1.19969 9.03953 0.599688 9.03953C0.279688 9.03953 0.179688 8.91953 0.179688 8.61953C0.179688 7.81953 0.179688 6.99953 0.179688 6.19953C0.179688 5.87953 0.299688 5.77953 0.599688 5.77953H2.57969C2.57969 5.71953 2.57969 4.55953 2.57969 4.01953C2.57969 3.21953 2.71969 2.45953 3.11969 1.75953C3.53969 1.03953 4.13969 0.559531 4.89969 0.279531C5.39969 0.0995311 5.89969 0.0195312 6.43969 0.0195312H8.39969C8.67969 0.0195312 8.79969 0.139531 8.79969 0.419531V2.69953C8.79969 2.97953 8.67969 3.09953 8.39969 3.09953C7.85969 3.09953 7.31969 3.09953 6.77969 3.11953C6.23969 3.11953 5.95969 3.37953 5.95969 3.93953C5.93969 4.53953 5.95969 5.11953 5.95969 5.73953H8.27969C8.59969 5.73953 8.71969 5.85953 8.71969 6.17953V8.59953C8.71969 8.91953 8.61969 9.01953 8.27969 9.01953C7.55969 9.01953 6.01969 9.01953 5.95969 9.01953V15.5395C5.95969 15.8795 5.85969 15.9995 5.49969 15.9995C4.65969 15.9995 3.83969 15.9995 2.99969 15.9995C2.69969 15.9995 2.57969 15.8795 2.57969 15.5795C2.57969 13.4795 2.57969 9.09953 2.57969 9.03953Z" fill="white"/>
                                                                </svg>    
                                                            </a></li>
                                                            <li><a href= {idx.github}>
                                                                <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoMTYsMTYpIj48cGF0aCBkPSJNOCwwYy00LjQsMCAtOCwzLjYgLTgsOGMwLDQuNCAzLjYsOCA4LDhjNC40LDAgOCwtMy42IDgsLThjMCwtNC40IC0zLjYsLTggLTgsLTh6IiBmaWxsLW9wYWNpdHk9IjAiIGZpbGw9IiM0MTY1YjYiPjwvcGF0aD48cGF0aCBkPSJNOS45ODQsMTUuMjA2YzAsLTAuMjYyIDAuMDEsLTEuMTI1IDAuMDEsLTIuMTk1YzAsLTAuNzQ2IC0wLjI1NiwtMS4yMzQgLTAuNTQzLC0xLjQ4MmMxLjc4MiwtMC4xOTggMy42NTMsLTAuODc0IDMuNjUzLC0zLjk0OGMwLC0wLjg3MyAtMC4zMSwtMS41ODcgLTAuODIyLC0yLjE0N2MwLjA4MiwtMC4yMDIgMC4zNTcsLTEuMDE2IC0wLjA4LC0yLjExN2MwLDAgLTAuNjcsLTAuMjE1IC0yLjE5OCwwLjgyYy0wLjY0LC0wLjE3NiAtMS4zMjQsLTAuMjY1IC0yLjAwNCwtMC4yNjhjLTAuNjgsMC4wMDMgLTEuMzY0LDAuMDkyIC0yLjAwMiwwLjI2OWMtMS41MjgsLTEuMDM1IC0yLjIsLTAuODIgLTIuMiwtMC44MmMtMC40MzYsMS4xMDEgLTAuMTYxLDEuOTE1IC0wLjA3OSwyLjExN2MtMC41MTEsMC41NTkgLTAuODIzLDEuMjczIC0wLjgyMywyLjE0N2MwLDMuMDY2IDEuODY3LDMuNzUyIDMuNjQ0LDMuOTU0Yy0wLjIyOSwwLjIgLTAuNDM1LDAuNTUyIC0wLjUwOCwxLjA2OWMtMC40NTYsMC4yMDUgLTEuNjE1LDAuNTU4IC0yLjMyOCwtMC42NjVjMCwwIC0wLjQyMywtMC43NjggLTEuMjI1LC0wLjgyNGMwLDAgLTAuNzgxLC0wLjAxIC0wLjA1NSwwLjQ4NmMwLDAgMC41MjQsMC4yNDYgMC44ODgsMS4xN2MwLDAgMC40NywxLjU1NiAyLjY5NSwxLjA3MmMwLjAwNCwwLjY2OCAwLjAxMSwxLjE3MSAwLjAxMSwxLjM2MWMwLDAuMjA5IC0wLjE0NCwwLjQ0OSAtMC41MzEsMC4zODZjMC43OSwwLjI2MiAxLjYzNCwwLjQwOSAyLjUxMywwLjQwOWMwLjg4LDAgMS43MjQsLTAuMTQ3IDIuNTE2LC0wLjQxYy0wLjM5LDAuMDY2IC0wLjUzMiwtMC4xNzQgLTAuNTMyLC0wLjM4NHoiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L2c+PC9nPgo8L3N2Zz4="/>
                                                            </a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                               
                            </Swiper>

                            <Partner />


                        

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Team;