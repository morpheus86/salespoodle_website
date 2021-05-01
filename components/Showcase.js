import { useStoreActions, useStoreState } from "easy-peasy";
const Showcase = () => {
  const setShowTradeModal = useStoreActions(
    (actions) => actions.modals.setShowTradeModal
  );
  const selectTrade = useStoreState((state) => state.modals.selectTrade);
  const setSelectTrade = useStoreActions(
    (actions) => actions.modals.setSelectTrade
  );
  return (
    <header id="showcase-active">
      <div className="container">
        <div className="showcase-container">
          <div className="showcase-content">
            <div className="category">Advertising</div>
            <h1>SalesPoodle</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              voluptates deserunt recusandae.
            </p>
          </div>
          <div className="filter-container">
            <div className="filter">
              <div>
                <label>Select Your Trade</label>
              </div>
              <div className="select-bar">
                <select
                  onChange={(e) => {
                    setSelectTrade(e.target.value);
                  }}
                >
                  <option value="solar">Solar Lead</option>
                  <option value="window">Window Lead</option>
                  <option value="hvac">HVAC Lead</option>
                  <option value="roofing">roofing Lead</option>
                </select>
                <a
                  href="#"
                  onClick={() => {
                    setShowTradeModal();
                  }}
                >
                  <i className="fas fa-search 4x search-button"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Showcase;
