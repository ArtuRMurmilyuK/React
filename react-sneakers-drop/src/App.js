import React from 'react';
import axios from 'axios';
import Card from './components/Card/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
const [items, setItems] = React.useState([]);
const [cartItems, setCartItems] = React.useState([]);
const [searchValue, setSearchValue] = React.useState('');
const[cartOpened, setCartOpened] = React.useState(false);

React.useEffect(()=>{
    axios.get('https://61b999ed38f69a0017ce616d.mockapi.io/items').then((response)=>{
      setItems(response.data);
    });
    axios.get('https://61b999ed38f69a0017ce616d.mockapi.io/cart').then((response)=>{
      setCartItems(response.data);
    });
},[]);

const onAddToCart=(obj)=>{
  axios.post('https://61b999ed38f69a0017ce616d.mockapi.io/cart', obj);
  setCartItems((prev)=>[...prev, obj]); 
};

const onRemoveItem=(id)=>{
  axios.delete(`https://61b999ed38f69a0017ce616d.mockapi.io/cart/${id}`);
  setCartItems((prev)=>prev.filter(item=>item.id !==  id)); 
};

const onChangeSearchInput=(event)=>{
  setSearchValue(event.target.value);
};

  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer items={cartItems} onClose ={()=>setCartOpened(false)} onRemove={onRemoveItem} />  : null}
      <Header onClickCart={()=>setCartOpened(true)}/>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 >{searchValue ? `Поиск по запросу: "${searchValue}"`: "Все кроссовки" }</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && <img onClick={()=>setSearchValue('')} className="clear cu-p" src="/img/btn-remove.svg" alt="Remove" />}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
          </div>
        </div>
        {/* flex  */}
        <div className="d-flex flex-wrap">
          {items.filter(item=>item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onClickFavorite={()=>console.log(23)}
              onClickPlus={(obj) => onAddToCart(obj)}
            />
          ))}

        </div>
      </div>
    </div>
  )
}

export default App;
