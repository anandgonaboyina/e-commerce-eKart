import React from "react";
import "./item.css"
function Item(prop) {

    return(
        <>
        <div className="item w-[350px] hover:scale-[1.05] transition duration-600 mb-[10px]">
            <img src={prop.image} alt="" />
            <p className="my-[6px]">{prop.name}</p>
            <div className="item-prices flex gap-[20px]">
                <div className="item-price-new text-blue-400 text-[18px] text-[50px]">
                        {prop.new_price+100}&#8377;
                </div>
                <div className="item-price-old text-orange-600 text-[18px] text-[30px] line-through">
                        {prop.old_price +100}&#8377;
                </div>
            </div>
        </div>
        </>
    )
}
export default Item