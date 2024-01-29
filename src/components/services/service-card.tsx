import { Button } from "@/components/ui/button";
import Link from "next/link";

interface IProps {
  title: string;
  link: string;
  isService?: boolean;
}
export const ServiceCard = ({ title, link, isService }: IProps) => {
  return (
    <Link href={link}>
      <Button
        className={`w-full rounded-md font-bold  ${
          isService
            ? "relative after:content-[''] after:absolute after:w-3 after:h-[2px] after:bg-black after:top-2 after:right-[32%] before:content-[''] before:absolute before:w-[2px] before:h-3 before:bg-black before:top-2 before:right-[32%]"
            : ""
        }`}
      >
        {title}
      </Button>
    </Link>
  );
};
