import NavBar from "@/Componets/Navbar/NavBar";

export default function pageLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar></NavBar>
     {children}
    </div>
  );
}