export function SocialButtons() {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <button className="flex items-center gap-2 border px-4 py-2 rounded-md">
        <img src="/facebook.svg" alt="Facebook" className="w-5 h-5" />
        Facebook
      </button>
      <button className="flex items-center gap-2 border px-4 py-2 rounded-md">
        <img src="/google.svg" alt="Google" className="w-5 h-5" />
        Google
      </button>
      <button className="flex items-center gap-2 border px-4 py-2 rounded-md">
        <img src="/apple.svg" alt="Apple" className="w-5 h-5" />
        Apple
      </button>
    </div>
  );
}
