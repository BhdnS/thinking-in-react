const SearchBar = ({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) => {
  const onChangeInputSearchHandler = (e) => {
    onFilterTextChange(e.target.value);
  }

  const onChangeInputCheckboxHandler = () => {
    onInStockOnlyChange(!inStockOnly);
  }

  return (
    <form>
      <input
        value={filterText}
        onChange={(e) => onChangeInputSearchHandler(e)}
        type="text"
        placeholder="Search..."
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={onChangeInputCheckboxHandler}
        /> Only show products
        in stock
      </label>
    </form>
  );
}

export default SearchBar;