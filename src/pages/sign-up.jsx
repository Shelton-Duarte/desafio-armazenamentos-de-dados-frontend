import { Header } from "../components/header";
import { SignupForm } from "../components/sign-up/sign-up-form";
import { Footer } from "../components/footer";

export const SignUp = () => {
  return (
    <>
      <main>
        <Header />
        <SignupForm />
        <Footer />
      </main>
    </>
  );
};
