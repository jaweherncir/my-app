type InputFieldProps = {
  label?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function InputField({ label, type = "text", placeholder, value, onChange }: InputFieldProps) {
  return (
    <div className="flex flex-col mb-3">
      {label && <label className="mb-1 text-sm font-medium">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border rounded-md p-2"
      />
    </div>
  );
}
