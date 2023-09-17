import { useGlobalContext } from "../context/store";

export type day =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

type Props = {
  dayResponse: day | string;
};

export function DayCases({ dayResponse }: Props) {
  const { language } = useGlobalContext();

  let day;

  switch (dayResponse) {
    case "Sunday":
      day =
        language === "ka"
          ? "კვირა"
          : language === "ru"
          ? "воскресенье"
          : dayResponse;
      break;
    case "კვირა":
      day =
        language === "en"
          ? "Sunday"
          : language === "ru"
          ? "воскресенье"
          : dayResponse;
      break;
    case "Monday":
      day =
        language === "ka"
          ? "ორშაბათი"
          : language === "ru"
          ? "понедельник"
          : dayResponse;
      break;
    case "ორშაბათი":
      day =
        language === "en"
          ? "Monday"
          : language === "ru"
          ? "понедельник"
          : dayResponse;
      break;
    case "Tuesday":
      day =
        language === "ka"
          ? "სამშაბათი"
          : language === "ru"
          ? "вторник"
          : dayResponse;
      break;
    case "სამშაბათი":
      day =
        language === "en"
          ? "Tuesday"
          : language === "ru"
          ? "вторник"
          : dayResponse;
      break;
    case "Wednesday":
      day =
        language === "ka"
          ? "ოთხშაბათი"
          : language === "ru"
          ? "среда"
          : dayResponse;
      break;
    case "ოთხშაბათი":
      day =
        language === "en"
          ? "Wednesday"
          : language === "ru"
          ? "среда"
          : dayResponse;
      break;
    case "Thursday":
      day =
        language === "ka"
          ? "ხუთშაბათი"
          : language === "ru"
          ? "четверг"
          : dayResponse;
      break;
    case "ხუთშაბათი":
      day =
        language === "en"
          ? "Thursday"
          : language === "ru"
          ? "четверг"
          : dayResponse;
      break;
    case "Friday":
      day =
        language === "ka"
          ? "პარასკევი"
          : language === "ru"
          ? "пятница"
          : dayResponse;
      break;
    case "პარასკევი":
      day =
        language === "en"
          ? "Friday"
          : language === "ru"
          ? "пятница"
          : dayResponse;
      break;
    case "Saturday":
      day =
        language === "ka"
          ? "შაბათი"
          : language === "ru"
          ? "суббота"
          : dayResponse;
      break;
    case "შაბათი":
      day =
        language === "en"
          ? "Saturday"
          : language === "ru"
          ? "суббота"
          : dayResponse;
      break;
    default:
      day = dayResponse;
      break;
  }

  return day;
}
