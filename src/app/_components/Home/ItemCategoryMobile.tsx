import Link from "next/link";

interface ItemCategoryMobileProps {
  link: string;
  text: string;
}

export function ItemCategoryMobile({ link, text }: ItemCategoryMobileProps) {
  return (
    <Link href={link} className="bg-orange rounded-lg block text-center py-4">
      <h3 className="text-white text-2xl font-medium">{text}</h3>
    </Link>
  )
}
