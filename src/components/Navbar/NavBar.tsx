import "./NavBar.css";

interface Props {
  onSelect: (value: string) => void;
  selectedSortOrder: string;
}
//as a controlled component this component does just two things, receives sortOrder, and passes any chg to sortOrder up to the parent.
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
  //the event is handled at select level, and the value is passed to the parent component which controls this component
  //in uncontrolled components, the value is handled by the DOM itself, and selected is allocated at option level
  return (
    <div className="container custom-container">
      <div className="input-group mb-3">
        <label className="input-group-text">Sort by...</label>
        <select
          onChange={(event) => onSelect(event.target.value)}
          className="form-select"
          id="inputGroupSelect01"
          //we can mark currentSortOrder as non-null eg ? because we know that it will always be there - it is passed from App.tsx
          value={currentSortOrder?.label || "Recommended"}
          //value is preferred over defaultValue because this is a controlled component
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
