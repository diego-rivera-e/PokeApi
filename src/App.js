import './index.css';
import Container from 'react-bootstrap/Container';
import { useRef } from "react";
import MiApi from './components/MiApi';

function App() {
    //----funciones----

    const api = useRef(null);
    const ocult = useRef(null);

    const cargarInterfaz = () => {
        api.current.hidden = false;
        ocult.current.hidden = true;
    }

    // cargarInterfaz();
    //----render----
    return (
        
    <div className="App">
        <Container>

            <center class="col-md-12 row">
                <img src='https://camo.githubusercontent.com/90f24316b24433bf0a2778d95ca93ad264093645a71d2eb9f569cdbc34fbfc6d/68747470733a2f2f6372797374616c2d63646e322e6372797374616c636f6d6d657263652e636f6d2f70686f746f732f363333303536352f73706c61736842616e6e65725f706f6b656d6f6e2e6a7067'></img>
            </center>

            <div class="col-md-12" ref={ocult} hidden={false}>
                <div class="col-md-6 offset-6">
                    <img onClick={cargarInterfaz}  className='img-poke' src='https://64.media.tumblr.com/274eb363f68126d40dd4ccb22e5f9c5a/tumblr_mrfngeLQlV1rfjowdo1_500.gif' ></img> 
                </div>
            </div>
            <form action="#" ref={api} hidden>
                < MiApi />
            </form>

            <footer> 
            <center class="col-md-12 mt-3 px-4">
            © 2023 Examen Final React I (G27) . Todos los derechos reservados by Diego Rivera E.
                <img src='https://images.wikidexcdn.net/mwuploads/wikidex/thumb/4/41/latest/20180110083413/Profesor_Oak_artwork_primera_generaci%C3%B3n.png/180px-Profesor_Oak_artwork_primera_generaci%C3%B3n.png' ></img >
            </center>
            </footer>
            
        </Container>
    </div>
    );
}

export default App;