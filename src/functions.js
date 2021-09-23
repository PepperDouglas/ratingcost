const boolean = () => Math.random() < 0.5;
const addition = (n, m) => {
    return typeof n == 'number' && typeof m == 'number' ? n + m : 'Use only numbers';
} 

module.exports =  { boolean, addition };