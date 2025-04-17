import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { CoinTableComponent } from "./components/coin-table/coin-table.component";
import { useSearchParams } from "react-router";
import { useTranslation } from "react-i18next";
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./store/slices/counter-slice";
import { useAppDispatch, useAppSelector } from "./store/hooks";

const queryClient = new QueryClient();

enum LOCAL_STORAGE_KEYS {
  USER = "user",
}

function App({ children }) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const userData = useAppSelector((state) => state.userReducer);
  console.log(userData);

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("name"));

  const [signUpForm, setSignUpForm] = useState<Record<string, string>>({
    name: "",
    surname: "",
    phoneNumber: "",
    email: "",
  });

  console.log(signUpForm, "signUpForm");

  const writeLocalStorage = (key: LOCAL_STORAGE_KEYS, value: string) => {
    localStorage.setItem(key, value);
  };

  writeLocalStorage(LOCAL_STORAGE_KEYS.USER, "Petya");

  const handleOnFormInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    inputField: string
  ) => {
    setSignUpForm((prevValue) => {
      return { ...prevValue, [inputField]: e.target.value };
    });
  };

  const handleOnAddItemButtonClick = () => {
    dispatch(
      addItem({
        title: "new item",
        userId: "12",
        username: "ABOBA",
        description: "TEST OBJECT MADE BY EGOR",
      })
    );
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <div>
          {children}
          <input
            type="text"
            placeholder="имя"
            onChange={(event) => {
              handleOnFormInputChange(event, "name");
            }}
          />
          <input
            type="text"
            placeholder="фамилия"
            onChange={(event) => {
              handleOnFormInputChange(event, "surname");
            }}
          />
          <input
            type="text"
            placeholder="номер телефона"
            onChange={(event) => {
              handleOnFormInputChange(event, "phoneNumber");
            }}
          />
          <input
            type="email"
            placeholder="e-mail"
            onChange={(event) => {
              handleOnFormInputChange(event, "email");
            }}
          />
          <input type="text" />
        </div>

        <button>Sign up</button>
        <button onClick={handleOnAddItemButtonClick}>ADD ITEM</button>
      </div>
      {/* <CoinTableComponent /> */}
    </QueryClientProvider>
       <QueryClientProvider client={queryClient}>
      <div>
        <div>
          {children}
          <input
            type="text"
            placeholder="имя"
            onChange={(event) => {
              handleOnFormInputChange(event, "name");
            }}
          />
          <input
            type="text"
            placeholder="фамилия"
            onChange={(event) => {
              handleOnFormInputChange(event, "surname");
            }}
          />
          <input
            type="text"
            placeholder="номер телефона"
            onChange={(event) => {
              handleOnFormInputChange(event, "phoneNumber");
            }}
          />
          <input
            type="email"
            placeholder="e-mail"
            onChange={(event) => {
              handleOnFormInputChange(event, "email");
            }}
          />
          <input type="text" />
        </div>

        <button>Sign up</button>
        <button onClick={handleOnAddItemButtonClick}>ADD ITEM</button>
      </div>
      {/* <CoinTableComponent /> */}
    </QueryClientProvider>
  );
}

export default App;
