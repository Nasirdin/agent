import { Link } from "react-router-dom";
import "./index.scss";
const SignUp = () => {
  const signupMethod = [
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png",
      alt: "Google",
      onClick: "",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1200px-Apple_logo_grey.svg.png",
      alt: "iCloud",
      onClick: "",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png",
      alt: "Facebook",
      onClick: "",
    },
  ];

  return (
    <div className="signup">
      <div className="signup__block">
        <h2 className="signup__title title">Добро пожаловать!</h2>
        <p className="signup__suptitle suptitle ">
          Чтобы оставаться на связи с нами, пожалуйста, войдите в систему под
          своей личной информацией
        </p>
      </div>
      <form className="signup__form">
        <h2 className="signup__title from-title">Создать аккаунт</h2>
        <div className="signup__btns">
          {signupMethod.map((method) => (
            <button className="signup__methodBtn methodBtn">
              <img src={method.icon} alt={method.alt} />
            </button>
          ))}
        </div>

        <label className="signup__label">
          <input className="signup__input" type="text" placeholder="Имя" />
        </label>
        <label className="signup__label">
          <input className="signup__input" type="text" placeholder="Фамилия" />
        </label>
        <label className="signup__label">
          <input className="signup__input" type="email" placeholder="Email" />
        </label>
        <label className="signup__label">
          <input
            className="signup__input "
            type="password"
            placeholder="Пароль"
          />
        </label>
        <label className="signup__label">
          <input
            className="signup__input"
            type="password"
            placeholder="Повторите пароль"
          />
        </label>
        <button className="signup__btn signBtn ">зарегистрироваться</button>
        <p className="signup__privacy">
          Нажимая «Зарегистрироваться», вы соглашаетесь с нашими{" "}
          <a href="/#">условиями обслуживания , политикой конфиденциальности</a>{" "}
          и <a href="/#">политикой использования файлов cookie.</a>
        </p>
        <Link className="signup__haveAnAcc" to="/login">
          Уже есть аккаунт
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
