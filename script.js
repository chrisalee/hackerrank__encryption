/*
 * Complete the 'encryption' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function encryption(s) {
    let sLen = s.length;
    let columns = Math.ceil(Math.sqrt(sLen));   
    let matrix = [];
    
    for(let i = 0; i < sLen; i+=columns) {
        let colBreak = columns
        let grouping = ''
        grouping +=(s.slice(i, i+colBreak))
        matrix.push(grouping)
    }
    console.log(matrix);
    
    let encoded = '';
    for(let i = 0; i < columns; i++) {
        matrix.forEach(row => {
            encoded +=row[i] || '';
        })
        encoded +=' ';
    }
    console.log(encoded);
    return encoded;
}
