import Image from "next/image";
import mascotImage from "../../../../public/supersoft.png";

export function Mascot() {
  return(
    <Image src={mascotImage} alt="Super Soft" />
  )
}
