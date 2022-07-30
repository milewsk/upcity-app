import { useNavigate } from "react-router-dom";
import { username_REGEX } from "../../../shared/helper/Regex";

const RegisterService = {
  FormSubmitHandler: async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      email: { value: string };
      passoword: { value: string };
    };

    const emailValue: string = formElements.email.value;
    const passwordValue: string = formElements.email.value;

    if (username_REGEX.test(passwordValue)) {
    }
    // let responseJSON: IResponse = await UserService.RegisterUser(
    //   email,
    //   password
    // );

    // if (responseJSON.Status === 200) {
    //   navigate("name", { replace: true });
    // }
  },
};

export default RegisterService;
