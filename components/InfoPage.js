import { useStoreActions } from "easy-peasy";
const InfoPage = () => {
  const setShowContactModal = useStoreActions(
    (actions) => actions.modals.setShowContactModal
  );
  return (
    <div className="container py-1">
      <div className="page-info-container">
        <div className="services">
          <h2>Additional Services</h2>
          <div className="service-icon">
            <div className="add-service-list">
              <i className="far fa-window-restore fa-4x"></i>

              <p>Window Lead</p>
            </div>
            <div className="add-service-list">
              <i className="fas fa-fan fa-4x"></i>
              <p>HVAC Lead</p>
            </div>
            <div className="add-service-list">
              <i className="fas fa-home fa-4x"></i>
              <p>Roofing Lead</p>
            </div>
            <div className="add-service-list">
              <i className="fas fa-solar-panel fa-4x"></i>
              <p>Solar Lead</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="page-info-1">
          <div className="card">
            <h2>How SalesPoodle Works</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              voluptatum ipsum ea adipisci consectetur blanditiis, ullam enim
              alias pariatur aperiam illo tempora illum aliquid a quas deserunt
              rem consequatur veniam, velit maiores voluptas, aut error? Iure et
              quaerat dolores veritatis?
            </p>
          </div>
          <div className="icon py-2">
            <div>
              <i className="fas fa-home fa-5x"></i>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                fuga.
              </p>
            </div>

            <div>
              <i className="fas fa-rss fa-5x"></i>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                fuga.
              </p>
            </div>

            <div>
              <i className="fas fa-headphones-alt fa-5x"></i>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                fuga.
              </p>
            </div>
          </div>
          <div className="py-2">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              officia sint quia quis eaque iste exercitationem nisi, asperiores
              sunt, dignissimos obcaecati qui? Ducimus error pariatur numquam
              laboriosam, quaerat obcaecati molestias.
            </p>
            <div className="py-1">
              <button onClick={() => setShowContactModal()}>Contact Us</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="page-info2">
          <div className="card">
            <h2>Online Leads You can convert today</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              dolore optio neque dolores tempore reiciendis laborum, nostrum
              quibusdam ut aliquid nobis ipsa. Ad corporis nulla pariatur
              laboriosam doloremque dolorem quod?
            </p>
          </div>
          <div className="how">
            <div className="explain">
              <div>
                <i className="fas fa-file-contract fa-5x py-1"></i>

                <h3>Instantly match with more homeowners</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                  qui temporibus reiciendis vitae deserunt, quisquam voluptatum
                  nisi fugiat officiis delectus.
                </p>
              </div>
              <div>
                <i className="fas fa-chart-line fa-5x py-1"></i>

                <h3>Instantly match with more homeowners</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                  qui temporibus reiciendis vitae deserunt, quisquam voluptatum
                  nisi fugiat officiis delectus.
                </p>
              </div>
            </div>

            <div className="explain">
              <div>
                <i className="fas fa-rocket fa-5x py-1"></i>

                <h3>Instantly match with more homeowners</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                  qui temporibus reiciendis vitae deserunt, quisquam voluptatum
                  nisi fugiat officiis delectus.
                </p>
              </div>
              <div>
                <i className="fas fa-handshake fa-5x py-1"></i>

                <h3>Instantly match with more homeowners</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                  qui temporibus reiciendis vitae deserunt, quisquam voluptatum
                  nisi fugiat officiis delectus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="page-info3">
          <h2>What Sets SalesPoodle Apart</h2>
          <div className="how py-2">
            <div className="explain">
              <div>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur cumque assumenda quaerat nostrum quidem in?
                </p>
              </div>
              <div>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur cumque assumenda quaerat nostrum quidem in?
                </p>
              </div>
            </div>
            <div className="explain">
              <div>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur cumque assumenda quaerat nostrum quidem in?
                </p>
              </div>
              <div>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur cumque assumenda quaerat nostrum quidem in?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoPage;
