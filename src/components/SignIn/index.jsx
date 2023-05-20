import { Link } from "react-router-dom";
import "./index.scss";
const SignIn = () => {
  

  return (
    <div className="signin">
      <div className="signin__block">
        <h2 className="signin__title title">Привет, друг!</h2>
        <p className="signin__suptitle suptitle ">
          Введите свои личные данные и начните путешествие с нами
        </p>
      </div>
      <form className="signin__form">
        <h2 className="signin__title from-title">Войти</h2>
        <label className="signin__label">
          <input className="signin__input" type="email" placeholder="Email" />
        </label>
        <label className="signin__label">
          <input
            className="signin__input "
            type="password"
            placeholder="Пароль"
          />
        </label>
        <button className="signin__btn signBtn ">Войти</button>
        <Link className="signin__haveAnAcc" to="/">
          Зарегистрироваться
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
