import React from "react";
import Navbar from "./Navbar";


function NotFound() {

    return (
        <>
            <Navbar/>
            <div className="container-column">
                <h1>404</h1>
                <p>La página que buscas no ha sido encontrada. Puede que la dirección haya cambiado o que la página haya
                    sido eliminada.
                    No te preocupes, ¡vamos a guiarte de vuelta!</p>
            </div>
        </>
    )
}


export default NotFound;