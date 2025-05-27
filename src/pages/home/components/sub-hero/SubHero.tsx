import SubHeroItem from "./components/sub-hero-item/SubHeroItem";
import banner1 from "../../../../assets/images/banner/img_home_banner_desktop_1.webp";
import banner2 from "../../../../assets/images/banner/img_home_banner_desktop_2.webp";
import banner3 from "../../../../assets/images/banner/img_home_banner_desktop_3.webp";
import "./style.scss";

const SubHero = () => {
    return (
        <section className="sub-hero section-home">
            <div className="container">
                <div className="sub-hero__inner">
                    <div className="row row-cols-3">
                        <div className="col">
                            <SubHeroItem  
                                title="HIZU LOREM"
                                desc={['Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero, nemo modi ipsa ut dicta nihil voluptas eum doloremque possimus quo earum temporibus voluptatem veritatis fugit laborum. Eos, quae exercitationem.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero, nemo modi ipsa ut dicta nihil voluptas eum doloremque possimus quo earum temporibus voluptatem veritatis fugit laborum. Eos, quae exercitationem.']}
                                image={banner1}
                            />
                        </div>
                        <div className="col">
                            <SubHeroItem  
                                title="HIZU LOREM LO"
                                desc={['Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero, nemo modi ipsa ut dicta nihil voluptas eum doloremque possimus quo earum temporibus voluptatem veritatis fugit laborum. Eos, quae exercitationem.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero, nemo modi ipsa ut dicta nihil voluptas eum doloremque possimus quo earum temporibus voluptatem veritatis fugit laborum. Eos, quae exercitationem.']}
                                image={banner2}
                            />
                        </div>
                        <div className="col">
                            <SubHeroItem  
                                title="HIZULOREM"
                                desc={['Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero, nemo modi ipsa ut dicta nihil voluptas eum doloremque possimus quo earum temporibus voluptatem veritatis fugit laborum. Eos, quae exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero, nemo modi ipsa ut dicta nihil voluptas eum doloremque possimus quo earum temporibus voluptatem veritatis fugit laborum. Eos, quae exercitationem.']}
                                image={banner3}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default SubHero;