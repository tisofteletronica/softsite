import Image from "next/image";
import Link from "next/link";
import imgLogo from "../../../../public/logo-footer.png";

interface LogoProps {
  className?: string;
}

export function LogoFooter({ className }: LogoProps) {
  return (
    <Link href="/">
      <Image src={imgLogo} alt="Logo Soft" className={className} />
    </Link>
  )
}
