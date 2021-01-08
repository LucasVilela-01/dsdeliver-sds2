import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import AsyncSelect from 'react-select/async'; /* Usando o async, quer dizer que enquanto estamos digitando o enderenço, a aplicação fique buscando novos
endereços */
import { fetchLocalMapBox } from '../api';
import { OrderLocationdata } from './types';

const initialPosition = {
    lat: -23.5045588,
    lng: -46.8505509
}

// Criando um tipo de dados do local atual do usuário

type Place = {
    label?: string; // Esse label é o texto que aparece no Select, usando "?:", pois informa que essa propriedade não é obrigatória
    value?: string;
    position: {
        lat: number;
        lng: number;
    };
}

type Props = {
    onChangeLocation: (location: OrderLocationdata) => void;
}

function OrderLocation({onChangeLocation}: Props) { /* Aqui é toda a parte que trata do Select, selecionar o endereço, fazer a busca, toda essa parte 
de interação com o Select será feita através desse código */

    // Criando um estado para o endereço que for selecionado
    const [address, setAddress] = useState<Place>({
        position: initialPosition
    });

    const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => { // Toda vez que essa função é chamada:
        const response = await fetchLocalMapBox(inputValue); // Realiza a busca de uma lista de endereços
      
        const places = response.data.features.map((item: any) => { // Interando nessa lista de endereços
          return ({
            label: item.place_name, // É o que aparece no select como uma das várias opções
            value: item.place_name, // O endereço inserido
            position: { // Auxilar as latitudes e longitudes selecionadas
              lat: item.center[1],
              lng: item.center[0]
            }
          });
        });
      
        callback(places); /* Através desse callback que é o segundo argumento da função loadOptions, que e o select consegue carregar as opções no
select */
      };
      
      const handleChangeSelect = (place: Place) => {
        setAddress(place);
        onChangeLocation({ // Prop criada para quando mudarmos de endereço, preparar esse endereço para ser enviado para a API
          latitude: place.position.lat,
          longitude: place.position.lng,
          address: place.label! /* Tem o ! no final, pois foi definido . label como opcional, mas aqui você coloca ! para dizer ao TS que tem certeza que
          esse label está preenchido */
        });
      };

    return (
        <div className="order-location-container">
            <div className="order-location-content">
                <h3 className="order-location-title">
                    Selecione onde o pedido deve ser entregue:
                </h3>
                <div className="filter-container">
                    <AsyncSelect 
                        placeholder="Informe o endereço de entrega" // É o texto que aparece no campo de busca
                        className="filter"
                        loadOptions={loadOptions}
                        onChange={value => handleChangeSelect(value as Place)} // O que acontece quando selecionar um endereço no mapa
                        // No TS faz o casting através da palavra-chave "as", esse value se comporta como um place
                    />
                </div>
                    <MapContainer 
                        center={address.position}
                        zoom={15}
                        key={address.position.lat} /* Com essa key, forçamos o mapa renderizar novamente, ou sehja, quando inserimos um endereço, o mapa
                        atualiza para aquele endereço de forma autonoma. */
                        scrollWheelZoom
                    > 
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={address.position}>
                            <Popup>
                                {address.label}
                            </Popup>
                        </Marker>
                    </MapContainer>
            </div>
        </div> // MapContainer - é todo o bloco do mapa, center - localização do mapa quando for iniciado e scrollWheelZoom - zoom com o scrool do mouse.
        /* Quando escrever uma prop colocando o seu nome e se essa prop for um booleano, ela já é true por padrão, não precisa colocar "={true}" na frente,
        como é o caso do scrollWheelZoom, basta digitar assim e não desse jeito scrollWheelZoom={true}, mas caso queira deixar desse modo, vai de sua
        preferência */
        // TileLayer é a parte das imagens do nosso mapa
        // Marker é o marcador de localização do mapa e o Popup é quando clicamos no marcador e ele mostra um texto customizado
    )
}

export default OrderLocation;