import "./style.scss";

interface CategoryProps {
    image: string,
    path: string,
    title: string
}

const CategoryItem = (props: CategoryProps) => {

    const { path, image, title } = props;

    return (
        <article className="category">
            <div className="category__img--wrapper">
                <img src={image} alt="Loading" className="category__img" />
            </div>
            <span className="category__title">{title}</span>
        </article>
    )
};

export default CategoryItem;