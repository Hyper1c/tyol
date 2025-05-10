// app/Administracion/layout.tsx

export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="p-4 bg-gray-100 min-h-screen">
        {children}
      </div>
    );
  }
  