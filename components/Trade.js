import { useStoreActions, useStoreState } from "easy-peasy";
import axios from "axios";
const Trade = () => {
  const firstName = useStoreState((state) => state.formValue.firstName);
  const lastName = useStoreState((state) => state.formValue.lastName);
  const companyName = useStoreState((state) => state.formValue.companyName);
  const checkboxValue = useStoreState((state) => state.formValue.checkboxValue);
  const phoneNumber = useStoreState((state) => state.formValue.phoneNumber);
  const email = useStoreState((state) => state.formValue.email);
  const selectTrade = useStoreState((state) => state.modals.selectTrade);
  const setFirstName = useStoreActions(
    (actions) => actions.formValue.setFirstName
  );
  const setLastName = useStoreActions(
    (actions) => actions.formValue.setLastName
  );
  const setCompanyName = useStoreActions(
    (actions) => actions.formValue.setCompanyName
  );
  const setCheckBoxValue = useStoreActions(
    (actions) => actions.formValue.setCheckBoxValue
  );
  const setPhoneNumber = useStoreActions(
    (actions) => actions.formValue.setPhoneNumber
  );
  const setEmail = useStoreActions((actions) => actions.formValue.setEmail);

  return (
    <div id="trade-form">
      <div>
        <h2>Ready to grow your business?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
          exercitationem!
        </p>
        <form
          onSubmit={async (e) => {
            try {
              e.preventDefault();
              const sendData = await axios.post("/api/trades", {
                firstName,
                lastName,
                companyName,
                phoneNumber,
                email,
                selectTrade,
                checkboxValue,
              });
              if (sendData.data === "success") {
                alert(
                  "your mesage has been sent, We will reach out as soon as possible"
                );
                location.reload();
              }
            } catch (error) {
              console.log(`error`, error);
            }
          }}
        >
          <div className="form-trade-group-1 py-1">
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder="First Name"
              required
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />

            <input
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Last Name"
              required
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className="form-trade-group-2 py-1">
            <input
              type="text"
              name="company-name"
              id="company-name"
              placeholder="Company Name"
              required
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
            />
          </div>
          <div className="form-trade-group-3 py-1">
            <label className="container-checkbox">
              I am interested in multiple trades
              <input
                type="checkbox"
                onChange={(e) => {
                  setCheckBoxValue(e.target.checked);
                }}
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="form-trade-group-1 py-1">
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              required
              placeholder="Phone Number"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />

            <input
              type="email"
              name="email"
              id="email-address"
              placeholder="Email Address"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <button type="submit">Check Local Demand</button>
        </form>
      </div>
    </div>
  );
};

export default Trade;
