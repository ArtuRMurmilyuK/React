function App() {
  return (
  <div className="wrapper clear">
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
      <h1 className="mb-40">Все кроссовки</h1>

      <div className="d-flex">
      <div className="card">
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
          <button>
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
