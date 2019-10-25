import * as React from 'react';
import { store } from '../../stores/Store';
import { useObserver } from 'mobx-react';

import './Home.scss';

function NavBar() {
    return useObserver(() => (
        <section>
            <h1> Nombre: {store.name} </h1>
            <button onClick={() => store.aFunction("Hola")}>Cambiar nombre</button>
        </section>
    ));
}

export default NavBar;