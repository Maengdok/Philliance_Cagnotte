import { useHistory } from 'react-router';

function NotFound() {
    const history = useHistory();

    const handleClick = () => {
        history.push('/');
    }

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Page non trouvée
          </p>
          <button className="btn btn-light" onClick={handleClick}><i className="fas fa-arrow-left"></i> Retour</button>
        </header>
      </div>
    );
  }
  
export default NotFound;