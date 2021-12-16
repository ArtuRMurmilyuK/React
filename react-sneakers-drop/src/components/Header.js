function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img width={100} height={100} src="/img/logo.png" alt="" />
                <div >
                    <h3 className="text-uppercase">Pavlov Kross</h3>
                    <p>🖤Кроссовки как стиль🖤</p>
                </div>
            </div>
            <ul className="d-flex">
                <li onClick={props.onClickCart} className="mr-30 cu-p">
                    <img width={18} height={18} src="/img/cart.png" alt="" />
                    <span>1000grn</span>
                </li>
                <li>
                    <img width={18} height={18} src="/img/user.png" alt="" />

                </li>
            </ul>
        </header>
    );
}

export default Header;