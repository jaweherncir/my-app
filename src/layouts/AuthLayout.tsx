type AuthLayoutProps = {
  children: React.ReactNode;
};

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Colonne gauche - illustration */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <img src="/signup-illustration.png" alt="Illustration" className="max-w-sm" />
      </div>

      {/* Colonne droite - contenu */}
      <div className="w-1/2 flex flex-col justify-center px-16">
        {children}
      </div>
    </div>
  );
}
