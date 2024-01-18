import AboutUs from "../components/Home/AboutUs";
import Carousel from "../components/Home/Carousel";
import Channels from "../components/Home/Channels";
import Internet from "../components/Home/Internet";
import Opinions from "../components/Home/Opinions";
import Television from "../components/Home/Television";
import { messages, restructureLocalizationObject } from "../lib/messages";
import { cookies } from "next/headers";

async function getData() {
  const nextCookies = cookies();
  const lang = nextCookies.get("lang")?.value || "pl";
  let responses;
  try {
    responses = await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/index.php/wp-json/wp/v2/hero-items?acf_format=standard`,
        {
          cache: "no-store",
        }
      ).then((res) => res.json()),
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/index.php/wp-json/wp/v2/pakiet-internet?acf_format=standard`,
        {
          cache: "no-store",
        }
      ).then((res) => res.json()),
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/index.php/wp-json/wp/v2/pakiet-tv?acf_format=standard`,
        {
          cache: "no-store",
        }
      ).then((res) => res.json()),
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/index.php/wp-json/wp/v2/more-tv?acf_format=standard`,
        {
          cache: "no-store",
        }
      ).then((res) => res.json()),
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/index.php/wp-json/wp/v2/opinions?acf_format=standard`,
        {
          cache: "no-store",
        }
      ).then((res) => res.json()),
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/index.php/wp-json/wp/v2/messages?acf_format=standard`,
        {
          cache: "no-store",
        }
      ).then((res) => res.json()),
    ]);
  } catch (err) {}

  const resHeroItems = responses?.[0]?.map((r) => r.acf).reverse() || heroItems;
  const resInternetItems =
    responses?.[1]?.map((r) => r.acf).reverse() || internetItems;
  const resTvItems = responses?.[2]?.map((r) => r.acf).reverse() || tvItems;
  const resMoreTv = responses?.[3]?.map((r) => r.acf).reverse() || moreTv;
  const resOpinions = responses?.[4]?.map((r) => r.acf).reverse() || opinions;
  const resMessages = responses?.[5]?.map((r) => r.acf)?.[0] || {};

  return {
    lang,
    heroItems: resHeroItems,
    internetItems: resInternetItems,
    tvItems: resTvItems,
    moreTv: resMoreTv,
    opinions: resOpinions,
    messages: { ...messages, ...restructureLocalizationObject(resMessages) },
  };
}

export default async function Home() {
  const content = await getData();

  return (
    <main>
      <Carousel content={content} />
      <Internet content={content} />
      <Television content={content} />
      <Channels content={content} />
      <AboutUs content={content} />
      <Opinions content={content} />
    </main>
  );
}

const opinions = [
  {
    "content-pl":
      "Wszystko w jak najlepszym porządku. Pracuję z domu więc potrzebuję stabilnego łącza.\r\nPrzepustowość łącza to średnio 80-90% deklarowanej prędkości przesyłu co jest bardzo dobrym\r\nwynikiem. Awarie się zdarzają ale nie częściej niż u innych dostawców.",
    "content-en":
      "Everything in the best possible order. I work from home so I need a stable connection.\r\nThe bandwidth of the link is on average 80-90% of the declared transmission speed which is a very good\r\nresult. Breakdowns happen but not more often than with other providers.",
    author: "Bartek Filo",
  },
  {
    "content-pl":
      "Po dzisiejszym serwisie Pana Szymona z proip nareszcie mam zasięg internetu w 100‰ całego domu\r\ni tv jakoś lepiej działa. Wadą okazał się jednak sprzęt ale chciałem podziękować za super serwis.\r\nProblem został rozwiązany bez żadnego problemu i szybko. Mam proip ponad dwa lata i jestem super\r\nzadowolony. Polecam.",
    "content-en":
      "After today's service by Mr. Simon from proip, I finally have internet coverage in 100‰ of the whole house\r\nand tv somehow works better. However, the flaw turned out to be the hardware but I wanted to thank you for the super service.\r\nThe problem was solved without any problem and quickly. I have had proip for over two years and am super\r\nsatisfied. I recommend.",
    author: "Kris Kros",
  },
  {
    "content-pl":
      "Od dwóch lat posiadam internet oraz telewizje i wszystko działa bez zarzutu, infolinia w razie\r\nproblemu bardzo pomocna :)",
    "content-en":
      "I have had internet and TV for two years and everything works flawlessly, hotline in case of a problem\r\nproblem very helpful :)",
    author: "Dosia Dosia",
  },
  {
    "content-pl":
      "Czytam te opinie i się zastanawiam, dlaczego tak skraje są oceny? I jedyne co przychodzi mi do głowy\r\nto... nieuczciwa konkurencja. Skorzystałem z oferty firmy z polecenia z 3-ch różnych osób (które są\r\nmega zadowolone). Internet śmiga że aż miło bez żadnych czkawek i przerw. Cena ok, obsługa też,\r\nwięc nie wiem o co chodzi z tymi negatywami.\r\n",
    "content-en":
      "I read these reviews and wonder, why are the ratings so extreme? And the only thing I can think of\r\nis... unfair competition. I took the company's offer on recommendation from 3 different people (who are\r\nmega satisfied). Internet is laughing all the way without any hiccups or interruptions. Price ok, service too,\r\nso I don't know what the negatives are about.\r\n",
    author: "Zdzich Beetle",
  },
  {
    "content-pl":
      "Zdarzają się przerwy w dostawie i usterki, ale generalnie dobre doświadczenie, głównie przez\r\nznakomity kontakt z klientem.",
    "content-en":
      "There are occasional interruptions and glitches, but overall a good experience, mainly through\r\nexcellent customer contact.",
    author: "Damian Bustrycki (Cz4rNy)",
  },
  {
    "content-pl":
      "Mam internet od prawie 3 lat - nigdy nie miałem przerw z winy dostawcy (prędzej prądu zabraknie niż\r\ninternet mi nie działa) Polecam.",
    "content-en":
      "I have had internet for almost 3 years - I have never had any interruptions due to the fault of the provider (sooner the electricity runs out than the\r\nInternet does not work for me) I recommend.",
    author: "Maciek B.",
  },
  {
    "content-pl":
      "Internet śmiga. Montaż profesjonalny. Panowie w 3-4h zdjęli kostkę podpięli wszystko i ułożyli\r\nelegancko na koniec. Super podejście do klienta. Profesjonalny kontakt i objaśnienie wszystkiego (P.\r\nPiotr). Bardzo polecam. Zadowolony klient z Łomianek.",
    "content-en":
      "Internet laughs. Professional installation. Gentlemen in 3-4h removed the cube plugged everything and arranged\r\nelegantly at the end. Super approach to the customer. Professional contact and explanation of everything (P.\r\nPeter). I highly recommend. Satisfied customer from Łomianki.",
    author: "Michał Zaręba",
  },
  {
    "content-pl": "Mam od 2 lat i chodzi bezawaryjnie :)",
    "content-en": "I've had it for 2 years and it's been going smoothly :)",
    author: "Piotrek P",
  },
  {
    "content-pl": "polecam!",
    "content-en": "recommended!",
    author: "Maciej Wojciechowski",
  },
  {
    "content-pl": "Polecam",
    "content-en": "Recommended",
    author: "Katarzyna Olejnik",
  },
];
const heroItems = [
  {
    "title-pl": "Internet o prędkości",
    "title-en": "Internet speeds of ",
    "subtitle-pl": "Wielkich możliwości",
    "subtitle-en": "Great possibility",
    "button-text-pl": "sprawdź ofertę",
    "button-text-en": "check out the offer",
    "description-pl": "od {price}miesięcznie*",
    "description-en": "from {price}month*",
    price: "39 zł/",
    image: "/CarouselExample.png",
  },
];
const moreTv = [
  {
    "title-pl": "Canal + Prestige 24 mies",
    "title-en": "Canal + Prestige 24 mies",
    price: "54",
    "button-text-pl": "Dodaj",
    "button-text-en": "Add",
    id: "1",
  },
  {
    "title-pl": "Canal + Prestige 24 mies",
    "title-en": "Canal + Prestige 24 mies",
    price: "54",
    "button-text-pl": "Dodaj",
    "button-text-en": "Add",
    id: "2",
  },
  {
    "title-pl": "Canal + Prestige 24 mies",
    "title-en": "Canal + Prestige 24 mies",
    price: "54",
    "button-text-pl": "Dodaj",
    "button-text-en": "Add",
    id: "3",
  },
  {
    "title-pl": "Canal + Prestige 24 mies",
    "title-en": "Canal + Prestige 24 mies",
    price: "54",
    "button-text-pl": "Dodaj",
    "button-text-en": "Add",
    id: "4",
  },
  {
    "title-pl": "Canal + Prestige 24 mies",
    "title-en": "Canal + Prestige 24 mies",
    price: "54",
    "button-text-pl": "Dodaj",
    "button-text-en": "Add",
    id: "5",
  },
  {
    "title-pl": "Canal + Prestige 24 mies",
    "title-en": "Canal + Prestige 24 mies",
    price: "54",
    "button-text-pl": "Dodaj",
    "button-text-en": "Add",
    id: "6",
  },
];
const tvItems = [
  {
    id: "34",
    "name-pl": "Ekonomiczny HD Pro",
    "name-en": "Economic HD Pro",
    "quantity-pl": "134 kanałów",
    "quantity-en": "134 channels",
    price: "34",
    "singlehouse-discount": "",
    "apartment-discount": "",
    "opis-pl":
      "Zatrzynaj i cofnij do 60min\r\nNagrywanie programów\r\nCofanie się do programów o 48h\r\nGrupuj kanały i listy ulubionych\r\nKontrola rodzicielska",
    "opis-en":
      "Pause and rewind up to 60 minutes\r\nProgram recording\r\nRewind programs up to 48 hours\r\nGroup channels and favorite lists\r\nParental control",
    "canals-button-text-pl": "Lista kanałów",
    "canals-button-text-en": "Channel list",
    "button-text-pl": "Wybieram",
    "button-text-en": "Choose",
  },
  {
    id: "54",
    "name-pl": "Startowy HD Pro",
    "name-en": "Startup HD Pro",
    "quantity-pl": "134 kanałów",
    "quantity-en": "134 channels",
    price: "54",
    "singlehouse-discount": "",
    "apartment-discount": "",
    "opis-pl":
      "Zatrzynaj i cofnij do 60min\r\nNagrywanie programów\r\nCofanie się do programów o 48h\r\nGrupuj kanały i listy ulubionych\r\nKontrola rodzicielska",
    "opis-en":
      "Pause and rewind up to 60 minutes\r\nProgram recording\r\nRewind programs up to 48 hours\r\nGroup channels and favorite lists\r\nParental control",
    "canals-button-text-pl": "Lista kanałów",
    "canals-button-text-en": "Channel list",
    "button-text-pl": "Wybieram",
    "button-text-en": "Choose",
  },
  {
    id: "74",
    "name-pl": "Optymalny HD Pro",
    "name-en": "Optimal HD Pro",
    "quantity-pl": "134 kanałów",
    "quantity-en": "134 channels",
    price: "74",
    "singlehouse-discount": "",
    "apartment-discount": "",
    "opis-pl":
      "Zatrzynaj i cofnij do 60min\r\nNagrywanie programów\r\nCofanie się do programów o 48h\r\nGrupuj kanały i listy ulubionych\r\nKontrola rodzicielska",
    "opis-en":
      "Pause and rewind up to 60 minutes\r\nProgram recording\r\nRewind programs up to 48 hours\r\nGroup channels and favorite lists\r\nParental control",
    "canals-button-text-pl": "Lista kanałów",
    "canals-button-text-en": "Channel list",
    "button-text-pl": "Wybieram",
    "button-text-en": "Choose",
  },
  {
    id: "94",
    "name-pl": "Bogaty HD Pro",
    "name-en": "Premium HD Pro",
    "quantity-pl": "134 kanałów",
    "quantity-en": "134 channels",
    price: "94",
    "singlehouse-discount": "",
    "apartment-discount": "",
    "opis-pl":
      "Zatrzynaj i cofnij do 60min\r\nNagrywanie programów\r\nCofanie się do programów o 48h\r\nGrupuj kanały i listy ulubionych\r\nKontrola rodzicielska",
    "opis-en":
      "Pause and rewind up to 60 minutes\r\nProgram recording\r\nRewind programs up to 48 hours\r\nGroup channels and favorite lists\r\nParental control",
    "canals-button-text-pl": "Lista kanałów",
    "canals-button-text-en": "Channel list",
    "button-text-pl": "Wybieram",
    "button-text-en": "Choose",
  },
];

const internetItems = [
  {
    id: "150/30",
    "speed-pl": "150Mbit/s",
    "speed-en": "150Mbit/s",
    "send-pl": "Wysyłanie 30 Mbit/s",
    "send-en": "Sending 30 Mbit/s",
    price: "59",
    price_block: "39",
    "singlehouse-discount-34": "0",
    "singlehouse-discount-54": "4",
    "singlehouse-discount-74": "4",
    "singlehouse-discount-94": "4",
    "apartment-discount-34": "0",
    "apartment-discount-54": "3",
    "apartment-discount-74": "3",
    "apartment-discount-94": "3",
    "opis-pl":
      "Aktywacja od 1 zł\r\nPobieranie 150Mbit/s\r\nBrak limitów pobierania\r\nTechnologia FTTH\r\nPłynne strumieniowanie wideo",
    "opis-en":
      "Activation from 1 PLN\r\nDownload 150Mbit/s\r\nNo download limits\r\nFTTH technology\r\nSmooth video streaming",
    "alert-pl":
      "Uwaga: występuje dodatkowa opłata za utrzymanie linii światłowodowej w budynkach o typie zabudowy jednorodzinnej",
    "alert-en":
      "Note: There is an additional fee for maintaining the fiber optic line in single-family type buildings.",
    "button-text-pl": "Wybieram",
    "button-text-en": "Choose",
  },
  {
    id: "300/50",
    "speed-pl": "300Mbit/s",
    "speed-en": "300Mbit/s",
    "send-pl": "Wysyłanie 50 Mbit/s",
    "send-en": "Sending 50 Mbit/s",
    price: "79",
    price_block: "59",
    "singlehouse-discount-34": "0",
    "singlehouse-discount-54": "6",
    "singlehouse-discount-74": "6",
    "singlehouse-discount-94": "6",
    "apartment-discount-34": "0",
    "apartment-discount-54": "4",
    "apartment-discount-74": "4",
    "apartment-discount-94": "4",
    "opis-pl":
      "Aktywacja od 1 zł\r\nPobieranie 300Mbit/s\r\nBrak limitów pobierania\r\nTechnologia FTTH\r\nPłynne strumieniowanie wideo",
    "opis-en":
      "Activation from 1 PLN\r\nDownload 300Mbit/s\r\nNo download limits\r\nFTTH technology\r\nSmooth video streaming",
    "alert-pl":
      "Uwaga: występuje dodatkowa opłata za utrzymanie linii światłowodowej w budynkach o typie zabudowy jednorodzinnej",
    "alert-en":
      "Note: There is an additional fee for maintaining the fiber optic line in single-family type buildings.",
    "button-text-pl": "Wybieram",
    "button-text-en": "Choose",
  },
  {
    id: "600/80",
    "speed-pl": "600Mbit/s",
    "speed-en": "600Mbit/s",
    "send-pl": "Wysyłanie 80 Mbit/s",
    "send-en": "Sending 80 Mbit/s",
    price: "99",
    price_block: "79",
    "singlehouse-discount-34": "0",
    "singlehouse-discount-54": "8",
    "singlehouse-discount-74": "8",
    "singlehouse-discount-94": "8",
    "apartment-discount-34": "0",
    "apartment-discount-54": "5",
    "apartment-discount-74": "5",
    "apartment-discount-94": "5",
    "opis-pl":
      "Aktywacja od 1 zł\r\nPobieranie 600Mbit/s\r\nBrak limitów pobierania\r\nTechnologia FTTH\r\nPłynne strumieniowanie wideo",
    "opis-en":
      "Activation from 1 PLN\r\nDownload 600Mbit/s\r\nNo download limits\r\nFTTH technology\r\nSmooth video streaming",
    "alert-pl":
      "Uwaga: występuje dodatkowa opłata za utrzymanie linii światłowodowej w budynkach o typie zabudowy jednorodzinnej",
    "alert-en":
      "Note: There is an additional fee for maintaining the fiber optic line in single-family type buildings.",
    "button-text-pl": "Wybieram",
    "button-text-en": "Choose",
  },
  {
    id: "800/100",
    "speed-pl": "800Mbit/s",
    "speed-en": "800Mbit/s",
    "send-pl": "Wysyłanie 100 Mbit/s",
    "send-en": "Sending 100 Mbit/s",
    price: "129",
    price_block: "109",
    "singlehouse-discount-34": "0",
    "singlehouse-discount-54": "10",
    "singlehouse-discount-74": "10",
    "singlehouse-discount-94": "10",
    "apartment-discount-34": "0",
    "apartment-discount-54": "6",
    "apartment-discount-74": "6",
    "apartment-discount-94": "6",
    "opis-pl":
      "Aktywacja od 1 zł\r\nPobieranie 800Mbit/s\r\nBrak limitów pobierania\r\nTechnologia FTTH\r\nPłynne strumieniowanie wideo",
    "opis-en":
      "Activation from 1 PLN\r\nDownload 800Mbit/s\r\nNo download limits\r\nFTTH technology\r\nSmooth video streaming",
    "alert-pl":
      "Uwaga: występuje dodatkowa opłata za utrzymanie linii światłowodowej w budynkach o typie zabudowy jednorodzinnej",
    "alert-en":
      "Note: There is an additional fee for maintaining the fiber optic line in single-family type buildings.",
    "button-text-pl": "Wybieram",
    "button-text-en": "Choose",
  },
];
