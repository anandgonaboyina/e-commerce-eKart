import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/popular";
function Shop() {

    return(
        <>
        <div className="conatiner flex flex-col gap-8" style={{ width: "100vw" }}>
        <Hero></Hero>
        <Popular/>
        </div>

        </>
    )
}
export default Shop