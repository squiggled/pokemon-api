function LoadButton({ fetchLoadMore, className }) {
  return (
    <>
      <button onClick={fetchLoadMore} className={className}>
        Load More
      </button>
    </>
  );
}
export default LoadButton;
