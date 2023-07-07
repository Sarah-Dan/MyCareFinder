import { FooterType } from "@/shared/types";
//
export const services = [
  {
    img: "./assets/hospital.png",
    title: "Find a Hospital",
    description: "Effortlessly Find the Best Hospitals Near You",
  },
  {
    img: "./assets/doctoricon.png",
    title: "Find a Doctor",
    description: "Find the Best Doctors Near You",
  },
  {
    img: "./assets/saveline.png",
    title: "Export Hospital Details",
    description: "Export Hospital Details for Your Records",
  },
  {
    img: "./assets/share.png",
    title: "Share Hospitals",
    description: "Share Hospitals with Others",
  },
];

// footer links
export const footerLinks: Array<FooterType> = [
  {
    heading: "About Us",
    links: [
      { title: "About Us", url: "/about-us" },
      { title: "Contact Us", url: "/contact-us" },
      { title: "Privacy Policy", url: "/privacy-policy" },
      { title: "FAQ", url: "/faq" },
    ],
  },
  {
    heading: "For Patients",
    links: [
      { title: "My Account", url: "/my-account" },
      { title: "How it Works", url: "/find-a-clinic" },
      { title: "Find a Hospital", url: "/find-a-hospital" },
      { title: "Find a Pharmacy", url: "/find-a-pharmacy" },
    ],
  },
  {
    heading: "For Providers",
    links: [
      { title: "Join CareFinder", url: "/join-carefinder" },
      { title: "Login", url: "/login" },
      { title: "Register", url: "/register" },
      { title: "Become a Partner", url: "/become-a-partner" },
    ],
  },
];

// sidebar links
export const sidebarLinks = [
  {
    icon: "home",
    title: "Home",
    url: "/",
  },
  {
    icon: "hospital",
    title: "Find Hospitals",
    url: "/find-hospitals",
  },
  {
    icon: " user",
    title: "Edit Profile",
    url: "/edit-profile",
  },
  {
    icon: "user",
    title: "Saved Hospitals",
    url: "/saved-hospitals",
  },
  {
    icon: "hospital",
    title: "Add Hospital",
    url: "/add-hospital",
  },
  {
    icon: "user",
    title: "Settings",
    url: "/settings",
  }
];

