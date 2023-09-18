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
    case "weather.წვიმა":
    case "weather.rainy":
      IconComponent = <Rainy width={IconSize} height={IconSize} />;
      break;
    case "მზიანი":
    case "მოწმენდილი":
    case "sunny":
    case "clear":
    case "weather.მზიანი":
    case "weather.მოწმენდილი":
    case "weather.sunny":
    case "weather.clear":
      IconComponent = <Sunny width={IconSize} height={IconSize} />;
      break;
    case "ნაწილობრივ მზიანი":
    case "ნაწილობრივ ღრუბლიანი":
    case "ძლიერი მოღრუბლულობა":
    case "პერიოდულად ღრუბლიანი":
    case "უმეტესად ღრუბლიანი":
    case "მეტესად ღრუბლიანი":
    case "partly sunny":
    case "heavy cloudiness":
    case "intermittently cloudy":
    case "mostly cloudy":
    case "weather.ნაწილობრივ მზიანი":
    case "weather.ნაწილობრივ ღრუბლიანი":
    case "weather.ძლიერი მოღრუბლულობა":
    case "weather.პერიოდულად ღრუბლიანი":
    case "weather.უმეტესად ღრუბლიანი":
    case "weather.partly sunny":
    case "weather.heavy cloudiness":
    case "weather.intermittently cloudy":
    case "weather.mostly cloudy":
      IconComponent = <PartlySunny width={IconSize} height={IconSize} />;
      break;
    case "უმეტესად მზიანი":
    case "mostly sunny":
    case "weather.უმეტესად მზიანი":
    case "weather.mostly sunny":
      IconComponent = <MostlySunny width={IconSize} height={IconSize} />;
      break;
    case "უმეტესად ღრუბლიანი":
    case "mostly cloudy":
    case "weather.უმეტესად ღრუბლიანი":
    case "weather.mostly cloudy":
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
    case "weather.ნაწილობრივ მზიანი, სუსტი თოვლი":
    case "weather.სუსტი თოვლი":
    case "weather.უმეტესად ღრუბლიანი, სუსტი თოვლი":
    case "weather.უმეტესად ღრუბლიანი, თოვლი":
    case "weather.თოვლი":
    case "weather.partly sunny, light snow":
    case "weather.light snow":
    case "weather.mostly cloudy, light snow":
    case "weather.mostly cloudy, snowy":
    case "weather.snow":
      IconComponent = <LightSnow width={IconSize} height={IconSize} />;
      break;
    case "კოკისპირული წვიმა":
    case "pouring rain":
    case "weather.კოკისპირული წვიმა":
    case "weather.pouring rain":
      IconComponent = <PouringRain width={IconSize} height={IconSize} />;
      break;
    case "კოკისპირული წვიმა, უმეტესად ღრუბლიანი":
    case "pouring rain, mostly cloudy":
    case "weather.კოკისპირული წვიმა, უმეტესად ღრუბლიანი":
    case "weather.pouring rain, mostly cloudy":
      IconComponent = (
        <PouringRainMostlyCloudy width={IconSize} height={IconSize} />
      );
      break;
    case "ღრუბლიანი":
    case "ცვალებადი მოღრუბლულობა":
    case "ნაწილობრივ ღრუბლიანი":
    case "ერიოდულად ღრუბლიანი":
    case "პერიოდულად ღრუბლიანი":
    case "cloudy":
    case "changeable cloudyw":
    case "partly cloudy":
    case "weather.ღრუბლიანი":
    case "weather.ცვალებადი მოღრუბლულობა":
    case "weather.ნაწილობრივ ღრუბლიანი":
    case "weather.ერიოდულად ღრუბლიანი":
    case "weather.პერიოდულად ღრუბლიანი":
    case "weather.cloudy":
    case "weather.changeable cloudyw":
    case "weather.partly cloudy":
      IconComponent = <Cloudy width={IconSize} height={IconSize} />;
      break;
    case "ბურუსი":
    case "mist":
    case "weather.ბურუსი":
    case "weather.mist":
      IconComponent = <Mist width={IconSize} height={IconSize} />;
      break;
    case "ნაწილობრივ მზიანი კოკისპირული წვიმით":
    case "partly sunny, pouring rain":
    case "weather.ნაწილობრივ მზიანი კოკისპირული წვიმით":
    case "weather.partly sunny, pouring rain":
      IconComponent = (
        <PartlySunnyPouringRain width={IconSize} height={IconSize} />
      );
      break;
    case "ნაწილობრივ ღრუბლიანი, კოკისპირული წვიმა":
    case "partly cloudy, pouring rain":
    case "weather.ნაწილობრივ ღრუბლიანი, კოკისპირული წვიმა":
    case "weather.partly cloudy, pouring rain":
      IconComponent = (
        <PartlyCloudyPouringRain width={IconSize} height={IconSize} />
      );
      break;
    case "უმეტესად ღრუბლიანი, კოკისპირული წვიმა":
    case "mostly cloudy, pouring rain":
    case "weather.უმეტესად ღრუბლიანი, კოკისპირული წვიმა":
    case "weather.mostly cloudy, pouring rain":
      IconComponent = (
        <MostlyCloudyPouringRain width={IconSize} height={IconSize} />
      );
      break;
    case "ჭექა-ქუხილი":
    case "thunderstorm":
    case "weather.ჭექა-ქუხილი":
    case "weather.thunderstorm":
      IconComponent = <Thunderstorm width={IconSize} height={IconSize} />;
      break;
    case "უმეტესად მზიანი, ნაწილობრივ წვიმა":
    case "ნაწილობრივ მზიანი, უმეტესად წვიმა":
    case "mostly sunny, partly rain":
    case "partly sunny, mostly rain":
    case "weather.უმეტესად მზიანი, ნაწილობრივ წვიმა":
    case "weather.ნაწილობრივ მზიანი, უმეტესად წვიმა":
    case "weather.mostly sunny, partly rain":
    case "weather.partly sunny, mostly rain":
      IconComponent = (
        <MostlySunnyPartlyRainy width={IconSize} height={IconSize} />
      );
      break;
    case "ყინვა":
    case "frost":
    case "weather.ყინვა":
    case "weather.frost":
      IconComponent = <Frost width={IconSize} height={IconSize} />;
      break;
    case "ნაწილობრივ ღრუბლიანი, ჯექა-ქუხილი":
    case "ნაწილობრივ ღრუბლიანი, ჭექა-ქუხილი":
    case "partly cloudy, thunderstorm":
    case "weather.ნაწილობრივ ღრუბლიანი, ჯექა-ქუხილი":
    case "weather.ნაწილობრივ ღრუბლიანი, ჭექა-ქუხილი":
    case "weather.partly cloudy, thunderstorm":
      IconComponent = (
        <PartlyCloudyThunderstorm width={IconSize} height={IconSize} />
      );
      break;
    default:
      break;
  }

  return IconComponent;
}
