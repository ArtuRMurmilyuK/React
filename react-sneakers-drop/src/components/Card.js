function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/liked.svg" alt="Unlike" />
            </div>

            <img width={133} height={177} src="/img/sneakers/3.jpg" alt="Sneakers" />
            <h5>
                Женские кроссовки Nike
            </h5>
            <div className="d-flex justify-between  aling-center">
                <div className="d-flex flex-column ">
                    <span>Цена:</span>
                    <b>1 300 ₴</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/plus1.svg" alt="Plus" />
                </button>
            </div>
        </div>
    );
}

export default Card;