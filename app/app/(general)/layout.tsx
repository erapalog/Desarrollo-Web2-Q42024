import NavBar from "@/Components/NavBar";

export default function generalLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <main>
               <NavBar></NavBar>
                {children}

            </main>
        </>

    );
}