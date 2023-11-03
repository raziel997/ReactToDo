const SingleItem = ({ item, removeItem, editItem }) => {
  return (
    <article className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p
        className="title"
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed && "line-through",
        }}
      >
        {item.name}
      </p>
      <button
        type="button"
        className="btn remove-btn"
        onClick={() => {
          removeItem(item.id);
        }}
      >
        X
      </button>
    </article>
  );
};
export default SingleItem;
