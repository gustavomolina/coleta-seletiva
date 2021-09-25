import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';
import logo from '../../assets/logo.svg';
import api from '../../services/api';

import './styles.css';

interface Item {
    id: number;
    title: string;
    imageUrl: string;
}
const CreateLocation: React.FC = () => {

    const [items, setItems] = useState<Item[]>([]);
    useEffect(() => {
        api.get('items').then(response => {
            setItems(response.data)
        })
    }, []);
    return (
        <div id="page-create-location">
            <div className="content">
                <header>
                    <img src={logo} alt="Coleta Seletiva"/>
                    <Link to="/">
                        <FiArrowLeft />
                        Voltar para home
                    </Link>
                </header>

                <form >
                    <h1>Cadastro do <br /> local de coleta</h1>

                    <fieldset>
                        <legend>
                            <h2>Dados</h2>
                        </legend>
                        <div className="field">
                            <label htmlFor="name">Nome da Entidade</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                            />
                        </div>
                        <div className="field-group">
                            <div className="field">
                                <label htmlFor="email">E-mail</label>
                                <input
                                type="email"
                                name="email"
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="whatsapp">Whatsapp</label>
                                <input
                                type="text"
                                name="whatsapp"
                                id="whatsapp"
                                />    
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>
                        <h2>Endereço</h2>
                            <span>Marque o endereço no mapa</span>
                        </legend>
                        <Map center={[-20.8202, -49.3797]} zoom={14}>
                            <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[-20.8202, -49.3797]} />
                        </Map>
                        <div className="field-group">
                            <div className="field">
                                <label htmlFor="city">Cidade</label>
                                <input
                                type="city"
                                name="city"
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="uf">Estado</label>
                                <input
                                type="text"
                                name="uf"
                                id="uf"
                                />    
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>
                            <h2>Ítens coletados</h2>
                            <span>Você pode marcar um ou mais ítens</span>
                        </legend>
                        <ul className="items-grid">
                            {items.map(item => (
                                <li key={item.id}>
                                    <img src={item.imageUrl} alt={item.title}/>
                                </li>
                            ))}
                            
                            
                        </ul>
                    </fieldset>

                    <button type="submit">
                        Cadastrar local de coleta
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateLocation;
