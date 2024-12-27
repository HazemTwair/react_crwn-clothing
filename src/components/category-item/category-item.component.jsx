import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div class="category-container">
      <div
        class="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div class="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
