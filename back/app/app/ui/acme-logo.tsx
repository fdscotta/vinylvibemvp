import Image from "next/image";
import logo from "@/vinyl-logo.png";

export default function AcmeLogo() {
  return (
    <div>
      <Image
        src={logo}
        alt="Vinyl Logo"
        width={338}
        height={246}
      />
    </div>
  );
}
