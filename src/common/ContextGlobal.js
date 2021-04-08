import React from 'react';

const ContextGlobal = React.createContext({
    email: null,
    choixMontant: null,
    entrerMontant: null
});

export default ContextGlobal;