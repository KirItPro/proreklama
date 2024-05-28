import { useState } from "react";
import "./registration.css";

export default function Registration() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (input.username !== "" && input.password !== "") {
    }
    alert("Данные не верны. Повторите ввод или зарегистрируйтесь!");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="registration">
      <div className="container">
        <div className="registration-inner">
          <h2 className="registration-inner__title">Регистрация</h2>
          <form className="registration-inner__block-form"onSubmit={handleSubmitEvent}>
          <div className="registration-row">
            <label htmlFor="user_email">Логин:</label>
            <input
              className="registration-row__input"
              type="login"
              id="user-login"
              name="login"
              aria-describedby="login"
              aria-invalid="false"
              onChange={handleInput}
            />
            </div>
            <div className="registration-row">
            <label htmlFor="user_email">Email:</label>
            <input
              className="registration-row__input"
              type="email"
              id="user-email"
              name="email"
              placeholder="example@yahoo.com"
              aria-describedby="user_email"
              aria-invalid="false"
              onChange={handleInput}
            />
            </div>
            <div className="registration-row">
              <label htmlFor="password">Пароль:</label>
              <input
                className="registration-row__input"
                type="password"
                id="password"
                name="password"
                aria-describedby="user-password"
                aria-invalid="false"
                onChange={handleInput}
              />
            </div>
            <div className="registration-row">
              <label htmlFor="password">Повтор пароля:</label>
              <input
                className="registration-row__input"
                type="password"
                id="repit-password"
                name="repit-password"
                aria-describedby="user-password"
                aria-invalid="false"
                onChange={handleInput}
              />
            </div>
            <button className="registration-btn">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
}
