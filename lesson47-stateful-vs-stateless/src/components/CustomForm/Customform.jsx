import React, { useState } from "react";

//assets
import "../../assets/styles/components/custom-form.scss";

function CustomForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validatePhone = () => {
    const phoneRegex = /^\d{10}$/;
    const isValidPhone = phoneRegex.test(phone);
    setIsValid(isValidPhone);
  };

  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowMessage(true);

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-custom__wrapper">
        <label>
          Ім'я та прізвище:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Номер телефону:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onBlur={validatePhone}
          />
        </label>
        {!isValid && <div className="error">Некоректний номер телефону</div>}
        <button type="submit">Submit</button>
      </form>
      {showMessage && <div>Ваш запит було надіслано!</div>}
    </>
  );
}

export default CustomForm;
