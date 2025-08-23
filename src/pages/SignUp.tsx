import { useState } from "react";
import { InputField } from "../components/Inputs/InputField";
import { PasswordField } from "../components/Inputs/PasswordField";
import { CheckboxWithLabel } from "../components/Checkbox/CheckboxWithLabel";
import { PrimaryButton } from "../components/Button/PrimaryButton";
import { SocialButtons } from "../components/Button/SocialButtons";
import { AuthLayout } from "../layouts/AuthLayout";

export default function SignUp() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <AuthLayout>
      <h2 className="text-3xl font-bold mb-2">Sign up</h2>

      <p className="mb-6 text-gray-500">
        Let’s get you all set up so you can access your personal account.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <InputField
            placeholder="First Name"
            value={form.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
          />
          <InputField
            placeholder="Last Name"
            value={form.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
          />
        </div>
        <InputField
          placeholder="Email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <InputField
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />
        <PasswordField
          placeholder="Password"
          value={form.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />
        <PasswordField
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={(e) => handleChange("confirmPassword", e.target.value)}
        />

        <CheckboxWithLabel
          label={
            <>
              I agree to all the <span className="text-blue-600">Terms</span> and{" "}
              <span className="text-red-500">Privacy Policies</span>
            </>
          }
          checked={form.agree}
          onChange={(e) => handleChange("agree", e.target.checked)}
        />

        <PrimaryButton type="submit" text="Create account" />
      </form>

      <p className="mt-4 text-center text-sm">
        Already have an account? <a href="/login" className="text-blue-600">Login</a>
      </p>

      <div className="mt-6">
        <p className="text-center text-gray-500 mb-2">Or sign up with</p>
        <SocialButtons />
      </div>
    </AuthLayout>
  );
}
