function GerarQRCode(){
var GoogleChartAPI='https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=https://github.com/Edielson-S-B';
document.querySelector('#QRCodeImage').src = GoogleChartAPI;
}