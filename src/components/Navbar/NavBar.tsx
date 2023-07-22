import "./NavBar.css";

interface Props {
  onSelect: (value: string) => void;
  selectedSortOrder: string;
}

const NavBar = ({ onSelect, selectedSortOrder }: Props) => {
  const selectors = [
    { label: "Relevance", value: "" },
    { label: "Price: Low to High", value: "2" },
    { label: "Price: High to Low", value: "3" },
    { label: "Largest Discount", value: "4" },
  ];
  const currentSortOrder = selectors.find(
    (order) => order.value === selectedSortOrder
  );
  console.log(currentSortOrder, "currentSortOrder");

  return (
    <div className="container custom-container">
      <div className="input-group mb-3">
        <label className="input-group-text">Sort by...</label>

        <select
          onChange={(event) => onSelect(event.target.value)}
          className="form-select"
          id="inputGroupSelect01"
          defaultValue={currentSortOrder?.label || "Recommended"}
        >
          {selectors.map((selector) => {
            return (
              <option key={selector.value} value={selector.value}>
                {selector.label}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default NavBar;
