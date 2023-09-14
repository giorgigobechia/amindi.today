import Cloudy from "./Cloudy";
import Frost from "./Frost";
import LightSnow from "./LightSnow";
import Mist from "./Mist";
import MostlyCloudy from "./MostlyCloudy";
import MostlyCloudyPouringRain from "./MostlyCloudyPouringRain";
import MostlySunny from "./MostlySunny";
import MostlySunnyPartlyRainy from "./MostlySunnyPartlyRainy";
import PartlyCloudyPouringRain from "./PartlyCloudyPouringRain";
import PartlyCloudyThunderstorm from "./PartlyCloudyThunderstorm";
import PartlySunny from "./PartlySunny";
import PartlySunnyPouringRain from "./PartlySunnyPouringRain";
import PouringRain from "./PouringRain";
import PouringRainMostlyCloudy from "./PouringRainMostlyCloudy";
import Rainy from "./Rainy";
import Sunny from "./Sunny";
import Thunderstorm from "./Thunderstorm";

export type IconName =
  | "წვიმა"
  | "მზიანი"
  | "უმეტესად მზიანი"
  | "ნაწილობრივ მზიანი"
  | "მოწმენდილი"
  | "უმეტესად ღრუბლიანი"
  | "ნაწილობრივ მზიანი, სუსტი თოვლი"
  | "კოკისპირული წვიმა"
  | "კოკისპირული წვიმა, უმეტესად ღრუბლიანი"
  | "ნაწილობრივ ღრუბლიანი"
  | "ღრუბლიანი"
  | "ძლიერი მოღრუბლულობა"
  | "პერიოდულად ღრუბლიანი"
  | "უმეტესად ღრუბლიანი"
  | "ბურუსი"
  | "ნაწილობრივ მზიანი კოკისპირული წვიმით"
  | "ნაწილობრივ ღრუბლიანი, კოკისპირული წვიმა"
  | "უმეტესად ღრუბლიანი, კოკისპირული წვიმა"
  | "ჭექა-ქუხილი"
  | "უმეტესად მზიანი, ნაწილობრივ წვიმა"
  | "ნაწილობრივ მზიანი, უმეტესად წვიმა"
  | "სუსტი თოვლი"
  | "უმეტესად ღრუბლიანი, სუსტი თოვლი"
  | "უმეტესად ღრუბლიანი, თოვლი"
  | "თოვლი"
  | "ყინვა"
  | "ნაწილობრივ ღრუბლიანი, ჯექა-ქუხილი"
  | "ნაწილობრივ ღრუბლიანი, ჭექა-ქუხილი";

type Props = {
  iconName: IconName | string;
  fill?: string;
  className?: string;
  style?: React.CSSProperties;
};

export function WeatherIcons({ iconName, fill, className, style }: Props) {
  let IconComponent = null;

  switch (iconName) {
    case "წვიმა":
      IconComponent = <Rainy width={50} height={50} />;
      break;
    case "მზიანი":
    case "მოწმენდილი":
      IconComponent = <Sunny width={50} height={50} />;
      break;
    case "ნაწილობრივ მზიანი":
    case "ნაწილობრივ ღრუბლიანი":
    case "ძლიერი მოღრუბლულობა":
    case "პერიოდულად ღრუბლიანი":
    case "უმეტესად ღრუბლიანი":
      IconComponent = <PartlySunny width={50} height={50} />;
      break;
    case "უმეტესად მზიანი":
      IconComponent = <MostlySunny width={50} height={50} />;
      break;
    case "უმეტესად ღრუბლიანი":
      IconComponent = <MostlyCloudy width={50} height={50} />;
      break;
    case "ნაწილობრივ მზიანი, სუსტი თოვლი":
    case "სუსტი თოვლი":
    case "უმეტესად ღრუბლიანი, სუსტი თოვლი":
    case "უმეტესად ღრუბლიანი, თოვლი":
    case "თოვლი":
      IconComponent = <LightSnow width={50} height={50} />;
      break;
    case "კოკისპირული წვიმა":
      IconComponent = <PouringRain width={50} height={50} />;
      break;
    case "კოკისპირული წვიმა, უმეტესად ღრუბლიანი":
      IconComponent = <PouringRainMostlyCloudy width={50} height={50} />;
      break;
    case "ღრუბლიანი":
    case "ცვალებადი მოღრუბლულობა":
      IconComponent = <Cloudy width={50} height={50} />;
      break;
    case "ბურუსი":
      IconComponent = <Mist width={50} height={50} />;
      break;
    case "ნაწილობრივ მზიანი კოკისპირული წვიმით":
      IconComponent = <PartlySunnyPouringRain width={50} height={50} />;
      break;
    case "ნაწილობრივ ღრუბლიანი, კოკისპირული წვიმა":
      IconComponent = <PartlyCloudyPouringRain width={50} height={50} />;
      break;
    case "უმეტესად ღრუბლიანი, კოკისპირული წვიმა":
      IconComponent = <MostlyCloudyPouringRain width={50} height={50} />;
      break;
    case "ჭექა-ქუხილი":
      IconComponent = <Thunderstorm width={50} height={50} />;
      break;
    case "უმეტესად მზიანი, ნაწილობრივ წვიმა":
    case "ნაწილობრივ მზიანი, უმეტესად წვიმა":
      IconComponent = <MostlySunnyPartlyRainy width={50} height={50} />;
      break;
    case "ყინვა":
      IconComponent = <Frost width={50} height={50} />;
      break;
    case "ნაწილობრივ ღრუბლიანი, ჯექა-ქუხილი":
    case "ნაწილობრივ ღრუბლიანი, ჭექა-ქუხილი":
      IconComponent = <PartlyCloudyThunderstorm width={50} height={50} />;
      break;
    default:
      break;
  }

  return IconComponent;
}
