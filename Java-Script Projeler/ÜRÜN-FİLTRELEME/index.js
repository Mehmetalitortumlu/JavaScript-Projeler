
let urun1 = {
    isim: "ACER Swift WİN 11",
    kategori: "Teknoloji",
    fiyat: 6.219
}
let urun2 = {
    isim: "ACER Nitro 5 WİN 11",
    kategori: "Teknoloji",
    fiyat: 16.219
}
let urun3 = {
    isim: "ACER Gamig WİN 11",
    kategori: "Teknoloji",
    fiyat: 8.215
}
let urun4 = {
    isim: "LENOVO Ideapad WİN 11",
    kategori: "Teknoloji",
    fiyat: 4.244
}
let urun5 = {
    isim: "LENOVO PRO WİN 11",
    kategori: "Teknoloji",
    fiyat: 5.321
}

let urunler = [urun1, urun2, urun3, urun4, urun5];
let filtreliUrunler= [];
let kullaniciUrunIsmi= prompt("Bir ürün ismi giriniz");

filtreliUrunleriDoldur(urunler)
filtreliUrunleriYazdir(filtreliUrunler)

function filtreliUrunleriDoldur(urunler) {
    urunler.forEach(function(urun){
        if(urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(),0)) {
         filtreliUrunler.push(urun);
        }
     });
}

function filtreliUrunleriYazdir(urunler){
    urunler.forEach(function(urun){
        console.log("------------------------------")
        console.log("|" + urun.isim + "|" + urun.fiyat +"|" + urun.kategori)
        console.log("------------------------------")
    });
}