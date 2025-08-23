import { useState } from "react";

type PasswordFieldProps = {
  label?: string;
  value: string;
    placeholder?: string;

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function PasswordField({ label, value, onChange }: PasswordFieldProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col mb-3">
      {label && <label className="mb-1 text-sm font-medium">{label}</label>}
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          className="border rounded-md p-2 w-full"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-2 top-2 text-sm"
        >
          {show ? "🙈" : "👁️"}
        </button>
      </div>
    </div>
  );
}
