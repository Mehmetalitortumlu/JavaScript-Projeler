


function tıkla(){
    var input=document.getElementById("input");
    var button=document.getElementsByClassName("btn")[0];
    var box=document.getElementsByClassName("box")[0];
    var birh=document.getElementsByTagName("h1")[0];
    box.remove(button);
    box.remove(birh);
    
    var yeniparagraf= document.createElement("p");
    yeniparagraf.innerHTML=input.value
    document.body.appendChild(yeniparagraf);
    
    
    if(input.value=="ocak"){
        document.body.innerHTML+="Merhaba ocak ayinda doğdunuz burcunuz Oğlak" +"<img>"
        var img= document.createElement("IMG");
        document.body.appendChild(img)
        img.src="https://static5.depositphotos.com/1030629/534/i/950/depositphotos_5344901-stock-photo-funny-goat-puts-out-its.jpg"

        img.style.width="400px"
        

    }
    else if(yeniparagraf.innerHTML=="şubat"){
        document.body.innerHTML+="Merhaba Şubat ayinda doğdunuz burcunuz Kova"
        var img= document.createElement("IMG");
        document.body.appendChild(img)
        img.src="https://www.okulstore.com/productimages/96889/big/4557.jpg"
                img.style.width="400px"

    }
    else if(yeniparagraf.innerHTML=="mart"){
        document.body.innerHTML+="Merhaba mart ayinda doğdunuz burcunuz balık"
        var img= document.createElement("IMG");
        document.body.appendChild(img)
        img.src="https://st.depositphotos.com/1003419/2674/v/600/depositphotos_26748105-stock-illustration-beautiful-color-fish.jpg"
                img.style.width="400px"

    }
    else if(yeniparagraf.innerHTML=="nisan"){
        document.body.innerHTML+="Merhaba nisan ayinda doğdunuz burcunuz Koç"
        var img= document.createElement("IMG");
        document.body.appendChild(img)
        img.src="https://im.haberturk.com/2018/04/03/1904178_f5503d708b21db5a97a755c06fdb349d_300x300.jpg"
                img.style.width="400px"

    }
    else if(yeniparagraf.innerHTML=="mayıs"){
        document.body.innerHTML+="Merhaba mayıs ayinda doğdunuz burcunuz Boğa"
        var img= document.createElement("IMG");
        document.body.appendChild(img)
        img.src="https://i4.hurimg.com/i/hurriyet/75/750x422/5ba9431cc9de3d0de44fe377.jpg"
        img.style.width="400px"
    }
    else if(yeniparagraf.innerHTML=="haziran"){
        document.body.innerHTML+="Merhaba haziran ayinda doğdunuz burcunuz yengeç"
        var img= document.createElement("IMG");
        document.body.appendChild(img)
        img.src="https://cdn.evrimagaci.org/omhfr619h37ea4K75lFM3dhez4o=/evrimagaci.org%2Fpublic%2Fcontent_media%2F9f3c2442e7ec5063bde91d24527b2f8f.jpg"
        img.style.width="400px"
    }
    else if(yeniparagraf.innerHTML=="temmuz"){
        document.body.innerHTML+="Merhaba ocak ayinda doğdunuz burcunuz Oğlak" +"<img>"
        var img= document.createElement("IMG");
        document.body.appendChild(img)
        img.src="https://static5.depositphotos.com/1030629/534/i/950/depositphotos_5344901-stock-photo-funny-goat-puts-out-its.jpg"
                img.style.width="400px"


    }

    else if(yeniparagraf.innerHTML=="ağ ustos"){
        document.body.innerHTML+="Merhaba agustos ayinda doğdunuz burcunuz başak"
        var img= document.createElement("IMG");
        document.body.appendChild(img)
        img.src="https://static7.depositphotos.com/1008927/741/i/600/depositphotos_7417662-stock-photo-wheat-ears-isolated.jpg"
        img.style.width="400px"
    }
    else if(yeniparagraf.innerHTML=="eylül"){
        document.body.innerHTML+="Merhaba eylül ayinda doğdunuz burcunuz terazi"
        var img= document.createElement("IMG");
        document.body.appendChild(img)
        img.src="https://media.istockphoto.com/vectors/libra-icon-on-white-background-vector-id819699038"
        img.style.width="400px"
    }
    else if(yeniparagraf.innerHTML=="ekim"){
        document.body.innerHTML+="Merhaba ekim ayinda doğdunuz burcunuz akrep"
        var img= document.createElement("IMG");
        document.body.appendChild(img)
        img.src="https://i4.hurimg.com/i/hurriyet/75/750x422/62b17d534e3fe10c50b77204.jpeg"
        img.style.width="400px"
    }
    else if(yeniparagraf.innerHTML=="kasım"){
        document.body.innerHTML+="Merhaba kasım ayinda doğdunuz burcunuz yay"
        var img= document.createElement("IMG");
        document.body.appendChild(img)
        img.src="https://www.guvensanat.com/productimages/286504/big/toptan-metal-b-y-k-tel-end-striyel-s-k-t-rma-helezon-yay-2-5mm.jpg_960x960.jpg"
        img.style.width="400px"
    }
    else if(yeniparagraf.innerHTML=="aralık"){
        document.body.innerHTML+="Merhaba ekim ayinda doğdunuz burcunuz başak"
        var img= document.createElement("IMG");
        document.body.appendChild(img)
        img.src="https://i4.hurimg.com/i/hurriyet/75/750x422/62b17d534e3fe10c50b77204.jpeg"
        img.style.width="400px"
    }


   else{
    document.body.innerHTML+="Lütfen sayfayı yenileyip yazdıklarınızı kontrol edin."

    alert("hataaaa")
   }
}

 
