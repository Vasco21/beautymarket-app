const formatCurrency = (decimal: any) => {
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'ZAR'
    });
  
    decimal = formatter.format(decimal);
    return decimal;
  };
  
  export default formatCurrency;