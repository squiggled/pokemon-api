function Button(props) {
  const { addFavsHandler, className, title, id, favourites } = props;

  const found = favourites.some((item) => item.id === Number(id));

  return (
    <>
      <button
        className={className}
        onClick={() => addFavsHandler(id)}
        title={title}
      >
        {found ? "Remove" : "Favourite"}
      </button>
    </>
  );
}

export default Button;
