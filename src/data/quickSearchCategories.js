import {
  HiOutlineComputerDesktop,
  HiOutlineDevicePhoneMobile,
  HiOutlineTv,
  HiOutlineSpeakerWave,
} from "react-icons/hi2";

import { LuShirt } from "react-icons/lu";
import { GiRunningShoe } from "react-icons/gi";

export const quickSearchCategories = [
  {
    id: 1,
    title: "لپتاپ",
    icon: HiOutlineComputerDesktop,
    link: "/category/laptop",
  },
  {
    id: 2,
    title: "موبایل",
    icon: HiOutlineDevicePhoneMobile,
    link: "/category/mobile",
  },
  {
    id: 3,
    title: "تلویزیون",
    icon: HiOutlineTv,
    link: "/category/tv",
  },
  {
    id: 4,
    title: "هدفون",
    icon: HiOutlineSpeakerWave,
    link: "/category/headphone",
  },
  {
    id: 5,
    title: "لباس",
    icon: LuShirt,
    link: "/category/clothes",
  },
  {
    id: 6,
    title: "کفش",
    icon: GiRunningShoe,
    link: "/category/shoes",
  },
];