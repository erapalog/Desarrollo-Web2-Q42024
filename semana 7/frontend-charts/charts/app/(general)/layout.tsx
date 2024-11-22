import NavBar from "@/components/NavBar/NavBar";

export default function pageLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main>

        <NavBar/>
      {children}
    </main>
  );
}