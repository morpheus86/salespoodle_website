import { createStore, action } from "easy-peasy";

export default createStore({
  modals: {
    showModal: false,
    showContactModal: false,
    showAboutModal: false,
    showTradeModal: false,
    selectTrade: "Solar",
    setHideModal: action((state) => {
      state.showModal = false;
    }),
    setShowContactModal: action((state) => {
      state.showModal = true;
      state.showContactModal = true;
      state.showAboutModal = false;
      state.showTradeModal = false;
    }),
    setShowAboutModal: action((state) => {
      state.showModal = true;
      state.showAboutModal = true;
      state.showContactModal = false;
      state.showTradeModal = false;
    }),
    setShowTradeModal: action((state, payload) => {
      state.showModal = true;
      state.showAboutmodal = false;
      state.showContactModal = false;
      state.showTradeModal = true;
    }),
    setSelectTrade: action((state, payload) => {
      state.selectTrade = payload;
    }),
  },
  formValue: {
    firstName: "",
    lastName: "",
    companyName: "",
    checkboxValue: false,
    phoneNumber: 1234567890,
    email: "",
    emailContact: "",
    name: "",
    messageSent: "",
    setFirstName: action((state, payload) => {
      state.firstName = payload;
    }),
    setLastName: action((state, payload) => {
      state.lastName = payload;
    }),
    setCompanyName: action((state, payload) => {
      state.companyName = payload;
    }),
    setCheckBoxValue: action((state, payload) => {
      state.checkboxValue = payload;
    }),
    setPhoneNumber: action((state, payload) => {
      state.phoneNumber = payload;
    }),
    setEmail: action((state, payload) => {
      state.email = payload;
    }),
    setEmailContact: action((state, payload) => {
      state.emailContact = payload;
    }),
    setName: action((state, payload) => {
      state.name = payload;
    }),
    setMessageSent: action((state, payload) => {
      state.messageSent = payload;
    }),
  },
});
