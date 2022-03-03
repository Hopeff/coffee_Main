import React from 'react';
import './Catalog.css'

const Catalog = () => {
    return (
        <div className="catalog">
            <p className="c_catalog">Catalog</p>
            <p className="c_drinks">Drinks</p>
                <div className="coffee_l">
                    <div className="block11">
                    <p className="coffee_text">
                    americano<br/>
                    0,99$
                    </p>
                    </div>
                 <div className="block12">
                    <p className="coffee_text">
                    cappuccino<br/>
                    1,29$
                    </p>
                 </div>
                 <div className="block13">
                    <p className="coffee_text">
                    mocchiato<br/>
                    1,99$
                    </p>
                 </div>
                </div>
                <div className="coffee_l">
                    <div className="block14">
                        <p className="coffee_text">
                            latte<br/>
                            1.19$
                        </p>
                    </div>
                    <div className="block15">
                        <p className="coffee_text">
                            mocaacino<br/>
                            2.19$
                        </p>
                    </div>
                    <div className="block16">
                        <p className="coffee_text">
                            glace<br/>
                            2.99$
                        </p>
                    </div>
                </div>
            </div>
    );
};

export default Catalog;