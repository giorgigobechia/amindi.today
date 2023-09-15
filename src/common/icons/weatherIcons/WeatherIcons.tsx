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
  IconSize?: number;
};

export function WeatherIcons({
  iconName,
  IconSize,
  fill,
  className,
  style,
}: Props) {
  let IconComponent = null;

  switch (iconName) {
    case "წვიმა":
    case "rainy":
      IconComponent = <Rainy width={IconSize} height={IconSize} />;
      break;
    case "მზიანი":
    case "მოწმენდილი":
    case "sunny":
    case "clear":
      IconComponent = <Sunny width={IconSize} height={IconSize} />;
      break;
    case "ნაწილობრივ მზიანი":
    case "ნაწილობრივ ღრუბლიანი":
    case "ძლიერი მოღრუბლულობა":
    case "პერიოდულად ღრუბლიანი":
    case "უმეტესად ღრუბლიანი":
    case "partly sunny":
    case "heavy cloudiness":
    case "intermittently cloudy":
    case "mostly cloudy":
      IconComponent = <PartlySunny width={IconSize} height={IconSize} />;
      break;
    case "უმეტესად მზიანი":
    case "mostly sunny":
      IconComponent = <MostlySunny width={IconSize} height={IconSize} />;
      break;
    case "უმეტესად ღრუბლიანი":
    case "mostly cloudy":
      IconComponent = <MostlyCloudy width={IconSize} height={IconSize} />;
      break;
    case "ნაწილობრივ მზიანი, სუსტი თოვლი":
    case "სუსტი თოვლი":
    case "უმეტესად ღრუბლიანი, სუსტი თოვლი":
    case "უმეტესად ღრუბლიანი, თოვლი":
    case "თოვლი":
    case "partly sunny, light snow":
    case "light snow":
    case "mostly cloudy, light snow":
    case "mostly cloudy, snowy":
    case "snow":
      IconComponent = <LightSnow width={IconSize} height={IconSize} />;
      break;
    case "კოკისპირული წვიმა":
    case "pouring rain":
      IconComponent = <PouringRain width={IconSize} height={IconSize} />;
      break;
    case "კოკისპირული წვიმა, უმეტესად ღრუბლიანი":
    case "pouring rain, mostly cloudy":
      IconComponent = (
        <PouringRainMostlyCloudy width={IconSize} height={IconSize} />
      );
      break;
    case "ღრუბლიანი":
    case "ცვალებადი მოღრუბლულობა":
    case "cloudy":
    case "changeable cloudyw":
      IconComponent = <Cloudy width={IconSize} height={IconSize} />;
      break;
    case "ბურუსი":
    case "mist":
      IconComponent = <Mist width={IconSize} height={IconSize} />;
      break;
    case "ნაწილობრივ მზიანი კოკისპირული წვიმით":
    case "partly sunny, pouring rain":
      IconComponent = (
        <PartlySunnyPouringRain width={IconSize} height={IconSize} />
      );
      break;
    case "ნაწილობრივ ღრუბლიანი, კოკისპირული წვიმა":
    case "partly cloudy, pouring rain":
      IconComponent = (
        <PartlyCloudyPouringRain width={IconSize} height={IconSize} />
      );
      break;
    case "უმეტესად ღრუბლიანი, კოკისპირული წვიმა":
    case "mostly cloudy, pouring rain":
      IconComponent = (
        <MostlyCloudyPouringRain width={IconSize} height={IconSize} />
      );
      break;
    case "ჭექა-ქუხილი":
    case "thunderstorm":
      IconComponent = <Thunderstorm width={IconSize} height={IconSize} />;
      break;
    case "უმეტესად მზიანი, ნაწილობრივ წვიმა":
    case "ნაწილობრივ მზიანი, უმეტესად წვიმა":
    case "mostly sunny, partly rain":
    case "partly sunny, mostly rain":
      IconComponent = (
        <MostlySunnyPartlyRainy width={IconSize} height={IconSize} />
      );
      break;
    case "ყინვა":
    case "frost":
      IconComponent = <Frost width={IconSize} height={IconSize} />;
      break;
    case "ნაწილობრივ ღრუბლიანი, ჯექა-ქუხილი":
    case "ნაწილობრივ ღრუბლიანი, ჭექა-ქუხილი":
    case "partly cloudy, thunderstorm":
      IconComponent = (
        <PartlyCloudyThunderstorm width={IconSize} height={IconSize} />
      );
      break;
    default:
      break;
  }

  return IconComponent;
}
