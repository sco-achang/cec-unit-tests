const flashMsg = (changed, adminState, type, text) => {
  const { modalVisible, statusMsg } = adminState;

  // changed - 'email', 'username', 'password'..NOT null
  if (changed) {
    // Dynamically Switch 'Submit' Btn to 'OK' Btn
    modalVisible = false;
  }
  statusMsg = {
    type: `alert-${type}`,
    text: `${text}`,
  };
};

export default {
  flashMsg,
};
