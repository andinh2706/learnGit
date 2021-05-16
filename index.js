const str = 
`
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9707 14.8035C13.1688 14.8035 14.9507 13.0216 14.9507 10.8235C14.9507 8.62541 13.1688 6.84351 10.9707 6.84351C8.77263 6.84351 6.99072 8.62541 6.99072 10.8235C6.99072 13.0216 8.77263 14.8035 10.9707 14.8035Z" stroke="#005AD2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.9405 10.8235C14.9405 10.8235 14.9405 12.9535 14.9405 15.0935C14.9405 17.2235 18.2205 17.6935 19.4705 16.3635C21.1805 14.5535 20.8905 12.2235 20.8905 10.8235C20.8905 5.33354 16.4405 0.873535 10.9605 0.873535C5.47051 0.873535 1.02051 5.33354 1.02051 10.8235C1.02051 16.3135 5.47051 20.7735 10.9605 20.7735" stroke="#005AD2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`


function changeStrokeColor(htmlContent){
    let regexp = /stroke=('|").*?\1/gi;
    return htmlContent.replace(regexp, 'stroke="white"');
}

console.log(changeStrokeColor(str));