import HomeIcon from "../HomeIcon";
import OrderIcon from "../OrderIcon";
import ProductIcon from "../ProductIcon";
import SettingsIcon from "../SettingsIcon";
import StoreIcon from "../StoreIcon";
import WalletIcon from "../WalletIcon";

 export const navLinks = [
    {
      name: "Home",
      to: "/home",
      mobile: true,
      icon: (props:any) => <HomeIcon {...props} />,
    },
    {
      name: "Product",
      to: "/products",
      mobile: true,
      icon: (props:any) => <ProductIcon {...props} />,
    },
    {
      name: "Wallet",
      to: "/wallet",
      mobile: true,
      icon: (props:any) => <WalletIcon {...props} />,
    },

    {
      name: "Store",
      to: "/store",
      mobile: true,
      icon: (props:any) => <StoreIcon {...props} />,
    },
    {
      name: "Orders",
      to: "/orders",
      mobile: true,
      icon: (props:any) => <OrderIcon {...props} />,
    },
    {
      name: "Settings",
      to: "/settings",
      mobile: false,
      icon: (props:any) => <SettingsIcon {...props} />,
    },
  ];