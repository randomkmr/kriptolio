import React from "react";
import { useEffect, useState } from "react";

export const HomePage = () => {
    const [crypto, setCrypto] = useState([]);

    useEffect(() => {
        fetch(`https://api.coinstats.app/public/v1/coins?skip=0&limit=50&currency=EUR`)
            .then(response => response.json())
            .then(data => setCrypto(data.coins))
    }, []);



    console.log(crypto)

    return (
        <>
            <h1>Welcome!</h1>
            <table>
                <thead>
                    <tr>
                        <td>Rank</td>
                        <td>Name</td>
                        <td>Symbol</td>
                        <td>Price</td>
                        <td>Favourite</td>
                    </tr>
                </thead>
                <tbody>
                    {crypto
                        .map((asset, id) => {
                            return (
                                <>
                                    <tr id={id}>
                                        <td>{asset.rank}</td>
                                        <td> 
                                            <p style={{float: 'left'}}><img src={asset.icon} alt="logo" width="30px" /></p>
                                            <p>{asset.name}</p>
                                        </td>
                                        <td>{asset.symbol}</td>

                                        <td>EUR {asset.price.toFixed(4)}</td>

                                        <td>F</td>
                                    </tr>
                                </>
                            );
                        })}
                </tbody>
            </table>



        </>



    )
}