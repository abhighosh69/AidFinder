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
    about:
    "Dr. Aarav Singh is a dedicated general physician with over four years of experience in providing comprehensive medical care. He is passionate about promoting preventive health measures and emphasizes the importance of early diagnosis in achieving optimal health outcomes.",
    fees: 500,
    address: {
      line1: "123 Lajpat Nagar",
      line2: "New Delhi, Delhi 110024",
    },
  },
  {
    _id: "doc2",
    name: "Dr. Meera Desai",
    image: doc2,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Desai specializes in women's health, focusing on preventive care, early diagnosis, and effective treatment strategies.",
    fees: 600,
    address: {
      line1: "456 Andheri West",
      line2: "Mumbai, Maharashtra 400053",
    },
  },
  {
    _id: "doc3",
    name: "Dr. Rajesh Kumar",
    image: doc3,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Year",
    about:
      "Dr. Kumar is committed to delivering comprehensive skin care, focusing on preventive measures and early treatment of dermatological conditions. He believes in a patient-centered approach, taking the time to understand each patient's unique concerns and tailoring treatments to their individual needs.",
    fees: 300,
    address: {
      line1: "789 Koramangala 4th Block",
      line2: "Bengaluru, Karnataka 560034",
    },
  },
  {
    _id: "doc4",
    name: "Dr. Rohan Kumar",
    image: doc4,
    speciality: "Pediatrician",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Kumar is focused on delivering quality healthcare to children, ensuring preventive and effective treatment.",
    fees: 400,
    address: {
      line1: "23 Anna Nagar West",
      line2: "Chennai, Tamil Nadu 600040",
    },
  },
  {
    _id: "doc5",
    name: "Dr. Kavya Gupta",
    image: doc5,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Gupta is committed to neurological care, with a focus on early diagnosis and treatment strategies.",
    fees: 500,
    address: {
      line1: "10 Park Street",
      line2: "Kolkata, West Bengal 700016",
    },
  },
  {
    _id: "doc6",
    name: "Dr. Aditya Mehta",
    image: doc6,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Mehta provides comprehensive neurological care, focusing on early intervention and effective treatment.",
    fees: 500,
    address: {
      line1: "75 MG Road",
      line2: "Pune, Maharashtra 411001",
    },
  },
  {
    _id: "doc7",
    name: "Dr. Ishaan Raj",
    image: doc7,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Raj has a commitment to preventive healthcare and offers a range of medical services for early diagnosis.",
    fees: 500,
    address: {
      line1: "12 Janpath",
      line2: "New Delhi, Delhi 110001",
    },
  },
  {
    _id: "doc8",
    name: "Dr. Sameer Patil",
    image: doc8,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Patil provides dedicated gynecological care, focusing on preventive health and effective treatment strategies. He is passionate about educating women on health issues and reproductive rights, aiming to empower his patients through knowledge.",
    fees: 600,
    address: {
      line1: "304 Bandra East",
      line2: "Mumbai, Maharashtra 400051",
    },
  },
  {
    _id: "doc9",
    name: "Dr. Aanya Patel",
    image: doc9,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Year",
    about:
      "Dr. Patel is focused on skin care and preventive treatment strategies for early diagnosis.",
    fees: 300,
    address: {
      line1: "234 HSR Layout",
      line2: "Bengaluru, Karnataka 560102",
    },
  },
  {
    _id: "doc10",
    name: "Dr. Aniket Joshi",
    image: doc10,
    speciality: "Pediatrician",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Joshi is dedicated to providing quality healthcare for children, focusing on preventive care.",
    fees: 400,
    address: {
      line1: "56 T Nagar",
      line2: "Chennai, Tamil Nadu 600017",
    },
  },
  {
    _id: "doc11",
    name: "Dr. Zara Khan",
    image: doc11,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Khan specializes in neurological care with an emphasis on early diagnosis and patient well-being.",
    fees: 500,
    address: {
      line1: "24 Banjara Hills",
      line2: "Hyderabad, Telangana 500034",
    },
  },
  {
    _id: "doc12",
    name: "Dr. Arjun Rao",
    image: doc12,
    speciality: "Gastroenterologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Rao is a specialist in gastroenterology, providing comprehensive care and preventive treatment.",
    fees: 500,
    address: {
      line1: "98 Satellite Road",
      line2: "Ahmedabad, Gujarat 380015",
    },
  },
  {
    _id: "doc13",
    name: "Dr. Tanvi Iyer",
    image: doc13,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Iyer is dedicated to general health, focusing on preventive and early treatment methods.",
    fees: 500,
    address: {
      line1: "123 Connaught Place",
      line2: "New Delhi, Delhi 110001",
    },
  },
  {
    _id: "doc14",
    name: "Dr. Rakesh Menon",
    image: doc14,
    speciality: "Gastroenterologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Menon specializes in gastroenterology, focusing on preventive care and effective treatment strategies. He emphasizes the importance of digestive health and advocates for lifestyle modifications to enhance patient outcomes.",
    fees: 600,
    address: {
      line1: "67 Marine Drive",
      line2: "Cochin, Kerala 682016",
    },
  },
  {
    _id: "doc15",
    name: "Dr. Ananya Naik",
    image: doc15,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Year",
    about:
      "Dr. Naik provides dermatological care with a focus on preventive and effective treatment.",
    fees: 300,
    address: {
      line1: "456 Indiranagar",
      line2: "Bengaluru, Karnataka 560038",
    },
  },
];

