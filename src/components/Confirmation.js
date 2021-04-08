import { useHistory } from 'react-router';
import { useContext } from 'react';
import ContextGlobal from "../common/ContextGlobal";

function Confirmation() {
    const history = useHistory();
    const context = useContext(ContextGlobal);

    const handleClick = () => {
        history.push('/');
        context.entrerMontant = null;
    }

    let email = context.email;
    let amount = context.choixMontant;

    if (context.entrerMontant) {
        amount = context.entrerMontant;
    }

    return (
        <div className="App">
        <header className="App-header">
            <i className="fas fa-check-circle check-circle"></i>
            <h1 className="title">Confirmation</h1>
            <div className="confirm-text">
                <p>
                    Anna vous remercie pour votre contribution !
                </p>
            </div>
            <div className="infos">
                <div className="box">
                        {email} 
                </div>
                <div className="box">
                        {amount} €
                </div>
            </div>
            <button className="btn btn-light" onClick={handleClick}><i className="fas fa-arrow-left"></i> Retour</button>
        </header>
    </div>
    );
}

export default Confirmation;