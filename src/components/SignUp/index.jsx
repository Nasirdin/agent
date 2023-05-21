import { Link, redirect } from "react-router-dom";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { signupMethod } from "../helpers/constans";
import { addNewUser } from "../../features/users/usersSlice";
const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatePassword, setRepeatePassword] = useState("");
  const [correctPassword, setCorrectPassword] = useState("");

  const users = useSelector((state) => state.users.users);

  const dispatch = useDispatch();

  const createAccount = (onSubmitEvent) => {
    onSubmitEvent.preventDefault();
    const newUser = {
      firstName,
      lastName,
      email,
      password,
    };

    const findUser = users.filter((user) => {
      return user.email === email;
    });

    if (findUser.length <= 0) {
      dispatch(addNewUser(newUser));
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setRepeatePassword("");
    }
  };

  const onChangeInput = (event, state) => {
    state(event.target.value);
  };

  const checkPassword = () => {
    if (password !== repeatePassword && repeatePassword !== "") {
      setCorrectPassword("incorrectInput");
    } else if (
      password === repeatePassword &&
      repeatePassword !== "" &&
      password !== ""
    ) {
      setCorrectPassword("");
    } else if (repeatePassword === "") {
      setCorrectPassword("");
    }
  };

  useEffect(() => {
    checkPassword();
  }, [repeatePassword, password]);

  return (
    <div className="signup">
      <div className="signup__block">
        <h2 className="signup__title title">Добро пожаловать!</h2>
        <p className="signup__suptitle suptitle ">
          Чтобы оставаться на связи с нами, пожалуйста, войдите в систему под
          своей личной информацией
        </p>
      </div>
      <form
        className="signup__form"
        onSubmit={createAccount}
        action="/auth/login"
      >
        <h2 className="signup__title from-title">Создать аккаунт</h2>
        <div className="signup__btns">
          {signupMethod.map((method) => (
            <button className="signup__methodBtn methodBtn">
              <img src={method.icon} alt={method.alt} />
            </button>
          ))}
        </div>

        <label className="signup__label">
          <input
            required
            className="signup__input"
            type="text"
            placeholder="Имя"
            onChange={(event) => {
              onChangeInput(event, setFirstName);
            }}
            value={firstName}
          />
        </label>
        <label className="signup__label">
          <input
            required
            className="signup__input"
            type="text"
            placeholder="Фамилия"
            onChange={(event) => {
              onChangeInput(event, setLastName);
            }}
            value={lastName}
          />
        </label>
        <label className="signup__label">
          <input
            required
            className="signup__input"
            type="email"
            placeholder="Email"
            onChange={(event) => {
              onChangeInput(event, setEmail);
            }}
            value={email}
          />
        </label>
        <label className="signup__label">
          <input
            required
            className="signup__input "
            type="text"
            placeholder="Пароль"
            onChange={(event) => {
              onChangeInput(event, setPassword);
            }}
            value={password}
          />
        </label>
        <label className="signup__label">
          <input
            required
            className={`signup__input ${correctPassword}`}
            type="text"
            placeholder="Повторите пароль"
            onChange={(event) => {
              onChangeInput(event, setRepeatePassword);
            }}
            value={repeatePassword}
          />
        </label>
        <button className="signup__btn signBtn ">зарегистрироваться</button>
        <p className="signup__privacy">
          Нажимая «Зарегистрироваться», вы соглашаетесь с нашими{" "}
          <a href="/#">условиями обслуживания , политикой конфиденциальности</a>{" "}
          и <a href="/#">политикой использования файлов cookie.</a>
        </p>
        <Link className="signup__haveAnAcc" to="/auth/login">
          Уже есть аккаунт
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
