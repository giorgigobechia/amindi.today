import Image from "next/image";

export type IconName = "წვიმა" | "მზიანი";
type Props = {
  iconName: IconName | string | undefined;
  fill?: string;
  className?: string;
  style?: React.CSSProperties;
  IconSize?: number;
};

export function MoonPhasesImg({
  iconName,
  IconSize,
  fill,
  className,
  style,
}: Props) {
  let IconComponent = null;

  switch (iconName) {
    case "Waxing Crescent":
      IconComponent = (
        <Image
          width={140}
          height={140}
          src={"/images/waxing-crescent.png"}
          alt=""
        />
      );
      break;
    case "First Quarter Waxing Crescent":
      IconComponent = (
        <Image
          width={140}
          height={140}
          src={"/images/first-quarter.png"}
          alt=""
        />
      );
      break;
    case "First Quarter Half Moon":
      IconComponent = (
        <Image
          width={140}
          height={140}
          src={"/images/waxing-crescent.png"}
          alt=""
        />
      );
      break;
    case "Waxing Gibbous":
      IconComponent = (
        <Image
          width={140}
          height={140}
          src={"/images/waxing-crescent.png"}
          alt=""
        />
      );
      break;
    case "Last Quarter Waxing Gibbous":
      IconComponent = (
        <Image
          width={140}
          height={140}
          src={"/images/waxing-crescent.png"}
          alt=""
        />
      );
      break;
    case "Last Quarter Half Moon":
      IconComponent = (
        <Image
          width={140}
          height={140}
          src={"/images/waxing-crescent.png"}
          alt=""
        />
      );
      break;
    case "Full Moon":
      IconComponent = (
        <Image width={140} height={140} src={"/images/full-moon.png"} alt="" />
      );
      break;

    default:
      break;
  }

  return IconComponent;
}
