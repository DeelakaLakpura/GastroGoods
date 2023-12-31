import getCurrentUser from "@/actions/getCurrentUser";

import LoginForm from "./LoginForm";
import Container from "@/app/components/Container";
import FormWrap from "@/app/components/FormWrap";


const Login = async () => {
  const currentUser = await getCurrentUser();
  return (
    <Container>
      <FormWrap>
        <LoginForm currentUser={currentUser} />
      </FormWrap>
    </Container>
  );
};

export default Login;
