import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ContextGlobal from '../common/ContextGlobal';

function Participer() {
    const [email, setEmail] = useState('maengdok@contact.fr');
    const history = useHistory();
    const context = useContext(ContextGlobal);

    const handleClick = () => {
        context.email = email;
        history.push('/choisir-montant');
    }

    return (
        <div className="App">
            <header className="App-header">
                <i className="fas fa-birthday-cake"></i>
                <div className="name">
                    <h1>Anna</h1>
                </div>
                <div className="text">
                    <p>
                        Bienvenue dans la cagnotte d'anniversaire d'Anna ! Avec cette application, montrez lui à quel point vous l'aimez (ou la détestez)
                    </p>
                </div>
                <div className="form-group">
                    <label>Veuillez saisir votre email :</label>
                    <input type="email" value={email} className="form-control text-center" onChange={e => setEmail(e.target.value)} />
                </div>
                <button type="button" className="btn btn-light" onClick={handleClick}>Participer <i className="fas fa-glass-cheers"></i></button>
            </header>
        </div>
    );
}

export default Participer;