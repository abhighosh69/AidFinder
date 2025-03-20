import donner_banner from "./donner_banner.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./logo.svg";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";
import doc12 from "./doc12.png";
import doc13 from "./doc13.png";
import doc14 from "./doc14.png";
import doc15 from "./doc15.png";
import Dermatologist from "./Dermatologist.svg";
import Gastroenterologist from "./Gastroenterologist.svg";
import General_physician from "./General_physician.svg";
import Gynecologist from "./Gynecologist.svg";
import Neurologist from "./Neurologist.svg";
import Pediatricians from "./Pediatricians.svg";

export const assets = {
  donner_banner,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

export const specialityData = [
  {
    speciality: "General physician",
    image: General_physician,
  },
  {
    speciality: "Gynecologist",
    image: Gynecologist,
  },
  {
    speciality: "Dermatologist",
    image: Dermatologist,
  },
  {
    speciality: "Pediatrician",
    image: Pediatricians,
  },
  {
    speciality: "Neurologist",
    image: Neurologist,
  },
  {
    speciality: "Gastroenterologist",
    image: Gastroenterologist,
  },
];

export const doctors = [
  {
    _id: "doc1",
    name: "Dr. Aarav Singh",
    image: doc1,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    registration_no: "WBMC-2021-04567",
    about:
      "Dr. Aarav Singh is a dedicated general physician with over four years of experience in providing comprehensive medical care. He is passionate about promoting preventive health measures and emphasizes the importance of early diagnosis in achieving optimal health outcomes.",
    fees: 500,
    address: {
      line1: "12A, Park Street",
      line2: "Kolkata, West Bengal 700016",
    },
  },
  {
    _id: "doc2",
    name: "Dr. Meera Desai",
    image: doc2,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    registration_no: "WBMC-2022-03890",
    about:
      "Dr. Desai specializes in women's health, focusing on preventive care, early diagnosis, and effective treatment strategies.",
    fees: 600,
    address: {
      line1: "56, Sarat Bose Road",
      line2: "Kolkata, West Bengal 700025",
    },
  },
  {
    _id: "doc3",
    name: "Dr. Rajesh Kumar",
    image: doc3,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Year",
    registration_no: "WBMC-2023-05432",
    about:
      "Dr. Kumar is committed to delivering comprehensive skin care, focusing on preventive measures and early treatment of dermatological conditions. He believes in a patient-centered approach, taking the time to understand each patient's unique concerns and tailoring treatments to their individual needs.",
    fees: 300,
    address: {
      line1: "34, Salt Lake Sector V",
      line2: "Kolkata, West Bengal 700091",
    },
  },
  {
    _id: "doc4",
    name: "Dr. Rohan Kumar",
    image: doc4,
    speciality: "Pediatrician",
    degree: "MBBS",
    experience: "2 Years",
    registration_no: "WBMC-2022-04231",
    about:
      "Dr. Kumar is focused on delivering quality healthcare to children, ensuring preventive and effective treatment.",
    fees: 400,
    address: {
      line1: "78, Hill Cart Road",
      line2: "Siliguri, West Bengal 734001",
    },
  },
  {
    _id: "doc5",
    name: "Dr. Kavya Gupta",
    image: doc5,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    registration_no: "WBMC-2021-04678",
    about:
      "Dr. Gupta is committed to neurological care, with a focus on early diagnosis and treatment strategies.",
    fees: 500,
    address: {
      line1: "15, Burdwan Road",
      line2: "Darjeeling, West Bengal 734101",
    },
  },
  {
    _id: "doc6",
    name: "Dr. Aditya Mehta",
    image: doc6,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    registration_no: "WBMC-2021-04680",
    about:
      "Dr. Mehta provides comprehensive neurological care, focusing on early intervention and effective treatment.",
    fees: 500,
    address: {
      line1: "98, Kalyani Expressway",
      line2: "Kalyani, West Bengal 741235",
    },
  },
  {
    _id: "doc7",
    name: "Dr. Ishaan Raj",
    image: doc7,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    registration_no: "WBMC-2021-04591",
    about:
      "Dr. Raj has a commitment to preventive healthcare and offers a range of medical services for early diagnosis.",
    fees: 500,
    address: {
      line1: "120, Grand Trunk Road",
      line2: "Howrah, West Bengal 711101",
    },
  },
  {
    _id: "doc8",
    name: "Dr. Sameer Patil",
    image: doc8,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    registration_no: "WBMC-2022-03878",
    about:
      "Dr. Patil provides dedicated gynecological care, focusing on preventive health and effective treatment strategies. He is passionate about educating women on health issues and reproductive rights, aiming to empower his patients through knowledge.",
    fees: 600,
    address: {
      line1: "234, Rashbehari Avenue",
      line2: "Kolkata, West Bengal 700029",
    },
  },
  {
    _id: "doc9",
    name: "Dr. Aanya Patel",
    image: doc9,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Year",
    registration_no: "WBMC-2023-05412",
    about:
      "Dr. Patel is focused on skin care and preventive treatment strategies for early diagnosis.",
    fees: 300,
    address: {
      line1: "67, Baghajatin Main Road",
      line2: "Kolkata, West Bengal 700086",
    },
  },
  {
    _id: "doc10",
    name: "Dr. Aniket Joshi",
    image: doc10,
    speciality: "Pediatrician",
    degree: "MBBS",
    experience: "2 Years",
    registration_no: "WBMC-2022-04245",
    about:
      "Dr. Joshi is dedicated to providing quality healthcare for children, focusing on preventive care.",
    fees: 400,
    address: {
      line1: "32, Deshbandhu Road",
      line2: "Midnapore, West Bengal 721101",
    },
  },
  {
    _id: "doc11",
    name: "Dr. Zara Khan",
    image: doc11,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    registration_no: "WBMC-2021-04700",
    about:
      "Dr. Khan specializes in neurological care with an emphasis on early diagnosis and patient well-being.",
    fees: 500,
    address: {
      line1: "88, GT Road",
      line2: "Asansol, West Bengal 713301",
    },
  },
  {
    _id: "doc12",
    name: "Dr. Arjun Rao",
    image: doc12,
    speciality: "Gastroenterologist",
    degree: "MBBS",
    experience: "4 Years",
    registration_no: "WBMC-2021-04650",
    about:
      "Dr. Rao is a specialist in gastroenterology, providing comprehensive care and preventive treatment.",
    fees: 500,
    address: {
      line1: "54, Station Road",
      line2: "Durgapur, West Bengal 713204",
    },
  },
  {
    _id: "doc13",
    name: "Dr. Tanvi Iyer",
    image: doc13,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    registration_no: "WBMC-2021-04585",
    about:
      "Dr. Iyer is dedicated to general health, focusing on preventive and early treatment methods.",
    fees: 500,
    address: {
      line1: "9, College Street",
      line2: "Kolkata, West Bengal 700073",
    },
  },
  {
    _id: "doc14",
    name: "Dr. Rakesh Menon",
    image: doc14,
    speciality: "Gastroenterologist",
    degree: "MBBS",
    experience: "3 Years",
    registration_no: "WBMC-2022-03987",
    about:
      "Dr. Menon specializes in gastroenterology, focusing on preventive care and effective treatment strategies. He emphasizes the importance of digestive health and advocates for lifestyle modifications to enhance patient outcomes.",
    fees: 600,
    address: {
      line1: "21, Sevoke Road",
      line2: "Siliguri, West Bengal 734005",
    },
  },
  {
    _id: "doc15",
    name: "Dr. Ananya Naik",
    image: doc15,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Year",
    registration_no: "WBMC-2023-05445",
    about:
      "Dr. Naik provides dermatological care with a focus on preventive and effective treatment.",
    fees: 300,
    address: {
      line1: "45, Raghunathganj Road",
      line2: "Murshidabad, West Bengal 742225",
    },
  },
];

