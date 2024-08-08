//Pagina de inicion de sesion
import { ButtonPrimaryForm } from "../components/Commons/ButtonPrimaryForm";
import { HeaderForm } from "../components/Commons/HeaderForm";
import { FooterFrom } from "../components/Commons/FooterForm";
import { FormField } from "../components/Commons/FormField";

function LoginPage() {
  return (
    <section className="flex min-h-screen justify-center bg-gray-100 font-sans dark:bg-gray-900 antialiased">
      <div className="container rounded my-auto max-w-md border-2 border-gray-200 p-3 dark:border-gray-700 bg-white dark:bg-gray-900 antialiased">
        <HeaderForm title="Login" description="Login to access your account" />
        <div className="m-6">
          <form className="mb-4">
            <FormField
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
              label="Email Address"
            />
            <FormField
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
              label="Password"
            />

            <ButtonPrimaryForm text="Login" />
            <FooterFrom message="Don't have an account yet?" linkText="Register" />
          </form>
        </div>
      </div>
    </section>
  );
}

export { LoginPage };
