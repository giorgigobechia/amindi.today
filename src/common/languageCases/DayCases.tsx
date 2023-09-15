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
    case "Monday":
      day =
        language === "ka"
          ? "ორშაბათი"
          : language === "ru"
          ? "понедельник"
          : dayResponse;
      break;
    case "tuesday":
      day =
        language === "ka"
          ? "სამშაბათი"
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
    case "Thursday":
      day =
        language === "ka"
          ? "ხუთშაბათი"
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
    case "Saturday":
      day =
        language === "ka"
          ? "შაბათი"
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
