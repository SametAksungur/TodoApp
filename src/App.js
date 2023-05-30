import './App.css';
import {useState} from 'react'

function App() {

  var [yapilacak,setYapilacak] = useState("")
  var [liste,setListe] = useState([])

function yapilacakekle(){

  setListe([...liste,
    {
      id: liste.length,
      todo: yapilacak
    }
  ]);
  setYapilacak("");

}
// 1. ADIM BUTONA BASINCA ÇALIŞACAK FONKSİYONU OLUŞTURDUK.
// BU FONKSİYONDA ...liste İLE ÖNCEKİ YAZDIĞIMIZ YAPILACAKLARI TUTUYORUZ.
// DAHA SONRA LİSTEMİZİN İÇİNE BİR OBJE EKLİYORUZ. 

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      yapilacakekle();
    }
  }


  return (
    <>
    <p className='baslik'>Yapılacaklar listesi</p>
    <input type="text" id='inp' value={yapilacak} onKeyDown={handleKeyDown} onChange={e => {setYapilacak(e.target.value);}} />
    {/* 2. ADIM INPUTUN İÇERİSİNDE ONCHANGE İLE (İNPUTA HERHANGİ BİR ŞEY YAZDIĞIMIZ ZAMAN ÇALIŞIP
    INPUTA YAZDIĞIMIZ YAZIYI YAPILACAK DEĞİŞKENİNE EŞİTLEYEN BİR FONKSİYON YAZDIK) */}
    <button id='myBtn' onClick={yapilacakekle}>Ekle</button>
    <div id='liste'>{liste.map(x => (<li>{x.todo}</li>))}</div>
    {/* 3. ADIM MAP İLE ARRAYİMİZİ SAYFAYA YAZDIRIYORUZ */}
    </>
    );
  }


  //ÖDEV 
  //EKLEDİĞİMİZ YAPILACAKLARIN ÜSTÜNE BASINCA SİLİNSİN
    


export default App;
