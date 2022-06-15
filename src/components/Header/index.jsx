import React from 'react'
import './index.css'
import logo from './img/logo.svg'

export default function Header() {
    return (        
        <div className="header  pure-menu-horizontal pure-menu-fixed">
            <a href="/"><img className="logo" src={logo} /></a>
            <h4 className="label"><strong> Corretor de Imóveis 🏠</strong></h4>    
        </div>         
    );
}

