const formatNumber = (number) => {
    if (typeof number === 'string') {
        number = parseFloat(number);
    }
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

export default formatNumber;