import { useStoreState, useStoreActions } from "easy-peasy";
import axios from "axios";
const Contact = () => {
  const emailContact = useStoreState((state) => state.formValue.emailContact);
  const setEmailContact = useStoreActions(
    (actions) => actions.formValue.setEmailContact
  );
  const name = useStoreState((state) => state.formValue.name);
  const setName = useStoreActions((actions) => actions.formValue.setName);
  const messageSent = useStoreState((state) => state.formValue.messageSent);
  const setMessageSent = useStoreActions(
    (actions) => actions.formValue.setMessageSent
  );

  return (
    <div className="container">
      <form
        onSubmit={async (e) => {
          try {
            e.preventDefault();
            const sendMessage = await axios.post("/api/message", {
              name,
              emailContact,
              messageSent,
            });
            console.log(`sendMessage`, sendMessage);
            if (sendMessage.data === "success") {
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
        <section id="contact-form" className="py-3">
          <div className="container">
            <p>Please fill out the form below to contact us</p>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="emailContact">Email</label>
              <input
                type="email"
                name="emailContact"
                id="emailContact"
                required
                onChange={(e) => setEmailContact(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                name="message"
                id="message"
                required
                onChange={(e) => setMessageSent(e.target.value)}
              ></textarea>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Contact;
