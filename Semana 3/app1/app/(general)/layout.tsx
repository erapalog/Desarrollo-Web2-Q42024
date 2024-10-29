import NavBar from "@/Components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css'


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