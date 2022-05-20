import { useEffect, useState } from "react";
import MainCard from "./MainCards/MainCards";
import MainFilter from "./MainFilter/MainFilter";

import Avloniy from "../../assets/images/avloniy.jpg";
import Rahmat from "../../assets/images/Rahmat.jpg";
import Madazimov from "../../assets/images/madazimov.jpg";
import Hamza from "../../assets/images/hamza.jpg";
import Cholpon from "../../assets/images/cholpon.jpg";
import Fitrat from "../../assets/images/fitrat.jpg";
import Qodiriy from "../../assets/images/qodiriy.jpg";
import Abdurashidxonov from "../../assets/images/abdurashidxonov.jpg";
import Abdulla from "../../assets/images/abdullaqodiriy.jpg";
import Behbudiy from "../../assets/images/behbudiy.jpg";
import Muin from "../../assets/images/muin.jpg";

function Main() {
  const [obj, setObj] = useState([
    {
      id: 1,
      userName: "Abdulla Avloniy",
      birth: 1878,
      dead: 1934,
      userImg: Avloniy,
      desc: `XIX asr oxiri XX asr boshidagi ozbek milliy madaniyatining mashhur vakillaridan biri maʼrifatparvar shoir, dramaturg, jurnalist, olim, davlat va jamoat arbobi Abdulla Avloniydir. U 1878 yilning 12 iyulida Toshkentning Mergancha mahallasida, toquvchi Miravlon aka oilasida dunyoga keldi. Bolaligi Mirobod mahallasining egri-bugri kochalarida, kopchilik qismini ruslar tashkil qilgan temir yol ishchilari bolalari orasida kechdi. Oqchidagi eski maktabda, song madrasada oqidi (1885–1886). Mustaqil mutolaa bilan shugʻullandi. Arab, fors, rus tillarini organdi. Orenburg, Qozon, Tiflisda chiqib turgan gazeta-jurnallarni kuzatib bordi. Qisqa muddat ichida u maʼrifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
    },
    {
      id: 2,
      userName: "Nusrat Rahmat",
      birth: 1878,
      dead: 1934,
      userImg: Rahmat,
      desc: `XIX asr oxiri XX asr boshidagi ozbek milliy madaniyatining mashhur vakillaridan biri maʼrifatparvar shoir, dramaturg, jurnalist, olim, davlat va jamoat arbobi Abdulla Avloniydir. U 1878 yilning 12 iyulida Toshkentning Mergancha aa bilan shugʻullandi. Arab, fors, rus tillarini organdi. Orenburg, Qozon, Tiflisda chiqib turgan gazeta-jurnallarni kuzatib bordi. Qisqa muddat ichida u maʼrifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
    },
    {
      id: 3,
      userName: "Rahmonberdi Madazimov",
      birth: 1878,
      dead: 1934,
      userImg: Madazimov,
      desc: `XIX asr oxiri XX asr boshidagi ozbek milliy madaniyatining mashhur vakillaridan biri maʼrifatparvar shoir, dramaturg, jurnalist, olim, davlat va jamoat arbobi Abdulla Avloniydir. U 1878 yilning 12 iyulida Toshkentning Mergancha mahallasida, toquvchi Miravlon aka oilasida dunyoga keldi. Bolaligi Mirobod mahallifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
    },
    {
      id: 4,
      userName: "Hamza Hakimzoda Niyoziy",
      birth: 1878,
      dead: 1934,
      userImg: Hamza,
      desc: `XIX asr oxiri XX asr boshidagi ozbek milliy madaniyatining mashhur vakillaridan biri maʼrifatparvar shoir, dramaturg, jurnalist, olim, davlat va jamoat arbobi Abdulla Avloniydir. U 1878 yilning 12 iyulida Toshkentning Mergancha mahallasida, toquvchi Miravlon aka oilasida dunyoga keldi. Bolaligi Mirobod mahallasiningchiqib turgan gazeta-jurnallarni kuzatib bordi. Qisqa muddat ichida u maʼrifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
    },
    {
      id: 5,
      userName: "Abdulhamid Cho'lpon",
      birth: 1878,
      dead: 1934,
      userImg: Cholpon,
      desc: `8 yilning 12 iyulida Toshkentning Mergancha mahallasida, toquvchi Miravlon aka oilasida dunyoga keldi. Bolaligi Mirobod mahallasining egri-bugri kochalarida, kopchilik qismini ruslar tashkil qilgan temir yol ishchilari bolalari orasida kechdi. Oqchidagi eski maktabda, song madrasada oqidi (1885–1886). Mustaqil mutolaa bilan shugʻullandi. Arab, fors, rus tillarini organdi. Orenburg, Qozon, Tiflisda chiqib turgan gazeta-jurnallarni kuzatib bordi. Qisqa muddat ichida u maʼrifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
    },
    {
      id: 6,
      userName: "Abdurauf Fitrat",
      birth: 1878,
      dead: 1934,
      userImg: Fitrat,
      desc: `qchidagi eski maktabda, song madrasada oqidi (1885–1886). Mustaqil mutolaa bilan shugʻullandi. Arab, fors, rus tillarini organdi. Orenburg, Qozon, Tiflisda chiqib turgan gazeta-jurnallarni kuzatib bordi. Qisqa muddat ichida u maʼrifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
    },
    {
      id: 7,
      userName: "Abdulmajid Qodiriy",
      birth: 1878,
      dead: 1934,
      userImg: Qodiriy,
      desc: `XIX asr oxiri XX asr boshidagi ozbek milliy madaniyatining mashhur vakillaridan biri maʼrifatparvar shoir, dramaturg, jurnalist, olim, davlat va jamoat arbobipchilik qismini ruslar tashkil qilgan temir yol ishchilari bolalari orasida kechdi. Oqchidagi eski maktabda, song madrasada oqidi (1885–1886). Mustaqil mutolaa bilan shugʻullandi. Arab, fors, rus tillarini organdi. Orenburg, Qozon, Tiflisda chiqib turgan gazeta-jurnallarni kuzatib bordi. Qisqa muddat ichida u maʼrifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
    },
    {
      id: 8,
      userName: "Munavvarqori Abdurashidxonov",
      birth: 1878,
      dead: 1934,
      userImg: Abdurashidxonov,
      desc: `XIX asr oxiri XX asr boshidagi ozbek milliy madaniyatining mashhur vakillaridan biga keldi. Bolaligi Mirobod mahallasining egri-bugri kochalarida, kopchilik qismini uslar tashkil qilgan temir yol ishchilari bolalari orasida kechdi. Oqchidagi eski maktabda, song madrasada oqidi (1885–1886). Mustaqil mutolaa bilan shugʻullandi. Arab, fors, rus tillarini organdi. Orenburg, Qozon, Tiflisda chiqib turgan gazeta-jurnallarni kuzatib bordi. Qisqa muddat ichida u maʼrifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
    },
    {
      id: 9,
      userName: "Abdulla Qodiriy",
      birth: 1878,
      dead: 1934,
      userImg: Abdulla,
      desc: `XIX asr oxiri XX asr boshidagi ozbek milliy madaniyatining mashhur vakillaridan biga keldi. Bolaligi Mirobod mahallasining egri-bugri kochalarida, kopchilik qismini uslar tashkil qilgan temir yol ishchilari bolalari orasida kechdi. Oqchidagi eski maktabda, song madrasada oqidi (1885–1886). Mustaqil mutolaa bilan shugʻullandi. Arab, fors, rus tillarini organdi. Orenburg, Qozon, Tiflisda chiqib turgan gazeta-jurnallarni kuzatib bordi. Qisqa muddat ichida u maʼrifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
    },
    {
      id: 10,
      userName: "Mahmuxoja Behbudiy",
      birth: 1878,
      dead: 1934,
      userImg: Behbudiy,
      desc: `XIX asr oxiri XX asr boshidagi ozbek milliy madaniyatining mashhur vakillaridan biga keldi. Bolaligi Mirobod mahallasining egri-bugri kochalarida, kopchilik qismini uslar tashkil qilgan temir yol ishchilari bolalari orasida kechdi. Oqchidagi eski maktabda, song madrasada oqidi (1885–1886). Mustaqil mutolaa bilan shugʻullandi. Arab, fors, rus tillarini organdi. Orenburg, Qozon, Tiflisda chiqib turgan gazeta-jurnallarni kuzatib bordi. Qisqa muddat ichida u maʼrifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
    },
    {
      id: 11,
      userName: "Hoji Muin",
      birth: 1878,
      dead: 1934,
      userImg: Muin,
      desc: `XIX  qismini ruslar tashkil qilgan temir yol ishchilari bolalari orasida kechdi. Oqchidagi eski maktabda, song madrasada oqidi (1885–1886). Mustaqil mutolaa bilan shugʻullandi. Arab, fors, rus tillarini organdi. Orenburg, Qozon, Tiflisda chiqib turgan gazeta-jurnallarni kuzatib bordi. Qisqa muddat ichida u maʼrifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
    },
  ]);
  let [newObj, setNewObj] = useState([]);
  useEffect(() => {
    setNewObj([...obj]);
  }, []);
  return (
    <>
      <MainFilter newObj={newObj} setNewObj={setNewObj} />
      <MainCard newObj={newObj} setNewObj={setNewObj} />
    </>
  );
}

export default Main;
