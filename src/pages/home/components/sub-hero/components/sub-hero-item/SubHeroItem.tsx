import "./style.scss";

interface SubHeroItemProp {
    title: string,
    desc: string[],
    image: string
}

const SubHeroItem = (props: SubHeroItemProp) => {
    
    const { title, desc, image } = props;

    return (
        <article className="about">
            <div className="about__inner">
                <div className="about__img--wrapper">
                    <img src={image} alt="" className="about__img" />
                </div>
                <div className="about__content">
                    <h3 className="about__title">{title}</h3>
                    {
                        desc.map((item) => (
                            <p className="about__desc">{item}</p>
                        ))
                    }
                </div>
                <div className="about__action">
                    <button className="about__btn">Check it</button>
                </div>
            </div>
        </article>
    )
};

export default SubHeroItem;