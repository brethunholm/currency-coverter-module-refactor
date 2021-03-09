
export function generateOptions(options) {
    // turn options object into an array
    return Object .entries(options).map(([currencyCode, currencyName]) =>
      {
        return `<option value="${currencyCode}">${currencyCode}-${currencyName}</option>`
      }).join('');
  
  }
  
  
  
  export function formatCurrency(amount, currency) {
    return Intl.NumberFormat('en-US',{
      style: 'currency',
      currency
    }).format(amount);
  }
  


