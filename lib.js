export async function fetchRates(base = 'USD') {
    const res = await fetch(`${endpoint}?base=${base}`);
    const rates = await res.json();
    return rates;
  }
  
  const endpoint = 'https://api.exchangeratesapi.io/latest';
  const ratesByBase = {};
  


  export async function convert(amount, from , to) {
    // first check if we even have the rates to convert from that currency
    if(!ratesByBase[from]) {
      console.log(`Oh no we don't have ${from} to convert to ${to} so lets go get it`);
      const rates = await fetchRates(from);
      console.log(rates);
      // store  rates for next time in ratesByBase
      ratesByBase[from] = rates;
    }
    // convert the amount that they passed in 
    const rate = ratesByBase[from].rates[to];
    const convertedAmount = rate * amount;
    console.log(`${amount}${from} is ${convertedAmount} in ${to}`);
    return convertedAmount
  
  }