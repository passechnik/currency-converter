import React from 'react'

export default function CurrencyRow() {
    return (
    <div>
        <input type="number" className='input' />
        <select>
            <option value="Hi">Hi</option>
        </select>
        <script>
        async function getCurrency() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '95d73441f5msh110af27d713bf7ep1564e0jsn21dbe9dede91',
            'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        }
    }
    const response = await fetch("https://currency-exchange.p.rapidapi.com/exchange?from=SGD&to=MYR&q=1.0", options);
    const jsonData = await response.json();
    console.log(jsonData)
}
getCurrency()
        </script>
    </div>
    )
}
