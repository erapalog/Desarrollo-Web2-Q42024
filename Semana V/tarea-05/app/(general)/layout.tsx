import NavBar from "../components/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main style={{ marginTop: 260, marginLeft: 500 }}>
        <div className="col-lg-9 col-md-9 col-sm-9 border">
            <NavBar title="Contacto"></NavBar>
            {children}
          </div>
    </main>
  );
}