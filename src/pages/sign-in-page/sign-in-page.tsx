import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addItem } from "../../store/slices/counter-slice";

export function SignInPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const mutateReduxStore = () => {
  //   dispatch(addItem({ title:"test" }));
  // };

  const [password, setPassword] = useState<string>("");

  const handleOnSignInButtonClick = () => {
    navigate("/");
  };

  return (
    <div>
      <div>
        <input type="phone" />
        <input
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>

      <button onClick={handleOnSignInButtonClick}>Sign in</button>
    </div>
  );
}
