import { useState, useRef } from "react";

const MiApi = () => {
     
    //referencias

    const inputImageFront = useRef(null);
    const inputImageBack = useRef(null);
    const divImage = useRef(null);
    const inputNombre = useRef(null);

    //usestate
    const [Id, setId] = useState([]);
    const [Nombre, setNombre] = useState([]);
    const [Vida, setVida] = useState([]);
    const [Ataque, setAtaque] = useState([]);
    const [Defensa, setDefensa] = useState([]);

    //variables
    let url = '';

    //definicion de funcion, consumiendo la pokeapi, a traves del un valor ingresado
    const handleGetPokemon = async () => {

        if(inputNombre.current.value === ""){
            return 0;
        }

        url = 'https://pokeapi.co/api/v2/pokemon/'+inputNombre.current.value;
        //llamado a la api
        const response = await fetch(url);
        //respuesta de la api en formato json
        const data = await response.json();
        console.log(data);

        //asignacion de imagenes
        if(data.sprites.front_default === null || data.sprites.back_default === null){
            inputImageBack.current.src = "https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pokémon_logo.svg";
            inputImageFront.current.src = "https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pokémon_logo.svg";
        }else{
            inputImageFront.current.src = data.sprites.front_default;
            inputImageBack.current.src = data.sprites.back_default;
        }
        
        //seteando valores obtenido de la api
        setId(data.id);
        setNombre(data.name);
        setVida(data.stats[0].base_stat);
        setAtaque(data.stats[1].base_stat);
        setDefensa(data.stats[2].base_stat);

        inputNombre.current.value = "";
        divImage.current.hidden = false;
    }

    const handlePokemonRandom = () => {
        inputNombre.current.value = Math.floor(Math.random() * 999);
        handleGetPokemon();
    }
    

    //----render----
    return (
        <div>
            <div class="col-md-12 row">  
                <div class="col-md-12">
                    <label for="formGroupExampleInput" class="form-label">Nombre Pokemon</label>
                    <input type="text" class="form-control"  ref={inputNombre} placeholder="" />
                </div>
                <div class="col-md-12 row" >
                    <div class="col-md-6">
                        <button onClick={handlePokemonRandom} class="btn btn-primary mt-2">Buscar pokemon random</button>
                    </div>
                    <div class="col-md-6">
                        <button onClick={handleGetPokemon} class="btn btn-primary mt-2">Buscar pokemon por nombre o Id</button>
                    </div>
                </div>
            </div>
            
            <div class="col-md-12 row mt-4">
                <div class="col-md-6">
                    <div class="col-md-12">
                        <h1 or="formGroupExampleInput" class="form-label"><b>ID: {Id}</b></h1><br></br>
                        <h4 for="formGroupExampleInput" class="form-label"><b>Nombre: {Nombre}</b></h4>
                        <h4 for="formGroupExampleInput" class="form-label"><b>Vida: {Vida}</b></h4>
                        <h4 for="formGroupExampleInput" class="form-label"><b>Ataque: {Ataque}</b></h4>
                        <h4 for="formGroupExampleInput" class="form-label"><b>Defensa: {Defensa}</b></h4>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="col-md-12 row" ref={divImage} hidden>
                        <div class="col-md-6">
                            <img src="{inputImage}" ref={inputImageBack} border="1" alt="Pokemon_assets" width="200" height="200"/>
                        </div>
                        <div class="col-md-6">
                            <img src="{inputImage}" ref={inputImageFront} border="1" alt="Pokemon_assets" width="200" height="200"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default MiApi;