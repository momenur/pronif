import {
  Briefcase,
  Facebook,
  Home,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  User,
} from "react-feather";

export const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Contact", href: "/contact", icon: Mail },
];

export const footerLinks = {
  discover: [
    { name: "Buy & Sell", href: "#" },
    { name: "Merchant", href: "#" },
    { name: "Giving back", href: "#" },
    { name: "Help & Support", href: "#" },
  ],
  about: [
    { name: "Staff", href: "#" },
    { name: "Team", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
  ],
  resources: [
    { name: "Security", href: "#" },
    { name: "Global", href: "#" },
    { name: "Charts", href: "#" },
    { name: "Privacy", href: "#" },
  ],
  social: [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "LinkedIn", href: "#", icon: Linkedin },
  ],
};

export const partners = [
  "COMPANY 01",
  "COMPANY 02",
  "COMPANY 03",
  "COMPANY 04",
  "COMPANY 05",
  "COMPANY 06",
];
