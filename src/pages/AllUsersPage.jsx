//Pagina para mostrar todo los usuarios registrados (solo la puede ver el admin)

import { Navbar } from "../components/Commons/Navbar";

function ProfilePage () {
    return (
        <>
            <Navbar />
            <h1>Profile Page</h1>
        </>
    );
}

export { ProfilePage };