function GerarQRCode(){
var GoogleChartAPI='https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=https://www.youtube.com/'
document.querySelector('#QRCodeImage').src = GoogleChartAPI;
}