function App() {
  return (
  <div className="wrapper clear">
    <div className="overlay">
      <div className="drawer">
        <h2 className=" d-flex justify-between  mb-30">
          Корзина 
          <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove"/>
        </h2>

        <div className="items">
        <div className="cartItem d-flex align-center mb-20">
      
      <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg"></div>

      <div className="mr-20 flex">
        <p className="bt-5"> Женские кроссовки Nike 270</p>
        <b>1 300 grn</b>
      </div>
      <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/> 
    </div>

    <div className="cartItem d-flex align-center mb-20">
      
      <div style={{backgroundImage: 'url(/img/sneakers/2.jpg)'}} className="cartItemImg"></div>

      <div className="mr-20 flex">
        <p className="bt-5"> Женские кроссовки Nike 270</p>
        <b>1 300 grn</b>
      </div>
      <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/> 
    </div>
    
        
        
        </div>
        <div className="cartTotalBlock"> 
        <ul >
        <li>
          <span>Итого:</span>
          <div></div>
          <b>2 600 grn</b>
        </li>
      </ul>
      <button>Оформить заказ</button></div>
      
      </div>
    </div>

    <header className="d-flex justify-between align-center p-40">
    <div className="d-flex align-center">
      <img width={100} height={100} src="/img/logo.png" alt=""/ >
      <div >
        <h3 className="text-uppercase">Pavlov Kross</h3>
        <p>🖤Кроссовки как стиль🖤</p>
      </div>
    </div>
      <ul className="d-flex">
        <li className="mr-30">
        <img width={18} height={18} src="/img/cart.png" alt=""/>
          <span>1000grn</span>
        </li>
        <li>
        <img width={18} height={18} src="/img/user.png" alt=""/>

        </li>
      </ul>
    </header>
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
      <h1 >Все кроссовки</h1>
      <div className="search-block d-flex">
        <img src="/img/search.svg" alt="Search"/>
        <input placeholder="Поиск..." />   
      </div>
      </div>

      <div className="d-flex">
      <div className="card">
        <div className="favorite">
          <img src="/img/liked.svg" alt="Unlike"/>
        </div>
        
        <img width={133} height={177} src="/img/sneakers/3.jpg" alt="Sneakers" />
        <h5> 
          Женские кроссовки Nike
        </h5>
        <div className="d-flex justify-between  aling-center">
          <div className="d-flex flex-column ">
            <span>Цена:</span>
            <b>1 300 grn.</b>
          </div>
          <button className="button">
          <img width={11} height={11} src="/img/plus1.svg" alt="Plus" />
          </button>
        </div>
      </div>
      <div className="card">
        <img width={133} height={177} src="/img/sneakers/2.jpg" alt="Sneakers" />
        <h5> 
          Женские кроссовки Nike
        </h5>
        <div className="d-flex justify-between  aling-center">
          <div className="d-flex flex-column ">
            <span>Цена:</span>
            <b>1 300 grn.</b>
          </div>
          <button className="button">
          <img width={11} height={11} src="/img/plus1.svg" alt="Plus" />
          </button>
        </div>
      </div>
      <div className="card">
        <img width={133} height={177} src="/img/sneakers/1.jpg" alt="Sneakers" />
        <h5> 
          Женские кроссовки Nike
        </h5>
        <div className="d-flex justify-between  aling-center">
          <div className="d-flex flex-column ">
            <span>Цена:</span>
            <b>1 300 grn.</b>
          </div>
          <button className="button">
          <img width={11} height={11} src="/img/plus1.svg" alt="Plus" />
          </button>
        </div>
      </div>
      <div className="card">
        <img width={133} height={177} src="/img/sneakers/5.jpg" alt="Sneakers" />
        <h5> 
          Женские кроссовки Nike
        </h5>
        <div className="d-flex justify-between  aling-center">
          <div className="d-flex flex-column ">
            <span>Цена:</span>
            <b>1 300 grn.</b>
          </div>
          <button className="button">
          <img  width={11} height={11} src="/img/plus1.svg" alt="Plus"/>
          </button>
        </div>
      </div>
      </div>
    </div>
  </div>
  )
}

export default App;
