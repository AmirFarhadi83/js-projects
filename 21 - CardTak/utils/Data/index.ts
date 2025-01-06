type BarberShop = {
  id: number;
  name: string;
  rating: number;
  imgUrl: string;
  address: string;
};

const barberData: BarberShop[] = [
  {
    id: 1,
    name: "امیر فرهادی",
    rating: 4.5,
    imgUrl: "/images/barber-img/1.jpg",
    address: "تهران، خیابان انقلاب، پلاک ۱۰",
  },
  {
    id: 2,
    name: "ستاره ربیعی",
    rating: 5.0,
    imgUrl: "/images/barber-img/2.jpg",
    address: "اصفهان، خیابان آزادی، پلاک ۲۲",
  },
  {
    id: 3,
    name: "علی حسینی",
    rating: 3.5,
    imgUrl: "/images/barber-img/3.jpg",
    address: "شیراز، خیابان زند، پلاک ۴۵",
  },
  {
    id: 4,
    name: "رضا دولتی",
    rating: 4.0,
    imgUrl: "/images/barber-img/4.jpg",
    address: "مشهد، خیابان امام رضا، پلاک ۱۲",
  },
  {
    id: 5,
    name: "امیر درستی",
    rating: 4.1,
    imgUrl: "/images/barber-img/5.jpg",
    address: "کرج، بلوار مطهری، پلاک ۳۳",
  },
  {
    id: 6,
    name: "جواد کاظمی",
    rating: 2.2,
    imgUrl: "/images/barber-img/6.jpg",
    address: "تبریز، خیابان ولیعصر، پلاک ۵۰",
  },
  {
    id: 7,
    name: "مهدی رضایی",
    rating: 3.9,
    imgUrl: "/images/barber-img/7.jpg",
    address: "قم، بلوار طالقانی، پلاک ۲۵",
  },
  {
    id: 8,
    name: "حسین عباسی",
    rating: 1.7,
    imgUrl: "/images/barber-img/8.jpg",
    address: "رشت، خیابان گلسار، پلاک ۶۶",
  },
  {
    id: 9,
    name: "حسن کریمی",
    rating: 3.3,
    imgUrl: "/images/barber-img/9.jpg",
    address: "همدان، خیابان تختی، پلاک ۷",
  },
  {
    id: 10,
    name: "مسعود نادری",
    rating: 4.5,
    imgUrl: "/images/barber-img/10.jpg",
    address: "اراک، بلوار امام خمینی، پلاک ۹۹",
  },
  {
    id: 11,
    name: "رضا شفیعی",
    rating: 4.8,
    imgUrl: "/images/barber-img/11.jpg",
    address: "یزد، خیابان شهید صدوقی، پلاک ۱۲",
  },
  {
    id: 12,
    name: "محمد امیری",
    rating: 3.2,
    imgUrl: "/images/barber-img/12.jpg",
    address: "کرمان، خیابان شریعتی، پلاک ۴۰",
  },
  {
    id: 13,
    name: "سعید حسینی",
    rating: 2.6,
    imgUrl: "/images/barber-img/13.jpg",
    address: "بندرعباس، بلوار خلیج فارس، پلاک ۵۵",
  },
  {
    id: 14,
    name: "پیمان نوری",
    rating: 3.5,
    imgUrl: "/images/barber-img/14.jpg",
    address: "اهواز، خیابان نادری، پلاک ۳۳",
  },
  {
    id: 15,
    name: "کامران احمدی",
    rating: 4.0,
    imgUrl: "/images/barber-img/15.jpg",
    address: "بوشهر، بلوار امام علی، پلاک ۴۴",
  },
  {
    id: 16,
    name: "فرهاد مرادی",
    rating: 1.0,
    imgUrl: "/images/barber-img/16.jpg",
    address: "زنجان، خیابان سعدی، پلاک ۲۱",
  },
  {
    id: 17,
    name: "کیانوش عزتی",
    rating: 2.5,
    imgUrl: "/images/barber-img/17.jpg",
    address: "سنندج، خیابان استقلال، پلاک ۳۹",
  },
  {
    id: 18,
    name: "محسن صالحی",
    rating: 1.5,
    imgUrl: "/images/barber-img/18.jpg",
    address: "گرگان، خیابان ولیعصر، پلاک ۴۱",
  },
  {
    id: 19,
    name: "حسین آقایی",
    rating: 5.0,
    imgUrl: "/images/barber-img/19.jpg",
    address: "قزوین، خیابان بهشتی، پلاک ۱۳",
  },
  {
    id: 20,
    name: "علی جعفری",
    rating: 4.5,
    imgUrl: "/images/barber-img/20.jpg",
    address: "کاشان، خیابان امیرکبیر، پلاک ۵",
  },
];

function getTopBarbershops(data: BarberShop[], topN: number = 3): BarberShop[] {
  return data.sort((a, b) => b.rating - a.rating).slice(0, topN);
}

const top3Barbershops = getTopBarbershops(barberData);

export { top3Barbershops };
export type { BarberShop };
