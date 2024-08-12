//Pagina para mostrar todo los usuarios registrados (solo la puede ver el admin)

import { Navbar } from "../components/Commons/Navbar";

function AllUsersPage () {
    return (
        <>
            <Navbar />
            <h1>AllUsers Page</h1>
        </>
    );
}

export { AllUsersPage };