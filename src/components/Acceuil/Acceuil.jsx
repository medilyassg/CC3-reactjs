

import React from 'react';
import { Outlet } from 'react-router';
import ListUser from '../ListUser/ListUser';
import style from './Acceuil.module.css'
const Acceuil = () => {
    return (
        <div className={style.acceuil}>
        <header>
            <p>Gestion des taches</p>
        </header>
        <div>
        <Outlet />

        </div>

        </div>
    );
}

export default Acceuil;
