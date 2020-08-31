export default {
  formatCurrency: function(currency) {
    return '$' + Number(currency.toFixed(1)).toLocaleString() + ' ';
  }
}