import { Header } from "../components/header";
import { LoginForm } from "../components/login/loginform";
import { Footer } from "../components/footer";

export const Login = () => {
  return (
    <>
      <main>
        <Header />
        <LoginForm />
        <Footer />
      </main>
    </>
  );
};
