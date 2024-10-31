import NavBar from "../components/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <NavBar title="Contacto"></NavBar>
      {children}
    </main>
  );
}