type PrimaryButtonProps = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function PrimaryButton({ text, onClick, type = "button" }: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
    >
      {text}
    </button>
  );
}
