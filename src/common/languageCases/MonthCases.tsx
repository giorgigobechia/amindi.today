import { useGlobalContext } from "../context/store";

export type months =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

type Props = {
  monthResponse: months | string;
};

export function MonthCases({ monthResponse }: Props) {
  const { language } = useGlobalContext();

  let month;

  switch (monthResponse) {
    case "January":
      month =
        language === "ka"
          ? "იანვარი"
          : language === "ru"
          ? "январь"
          : monthResponse;
      break;
    case "February":
      month =
        language === "ka"
          ? "თებერვალი"
          : language === "ru"
          ? "февраль"
          : monthResponse;
      break;
    case "March":
      month =
        language === "ka"
          ? "მარტი"
          : language === "ru"
          ? "март"
          : monthResponse;
      break;
    case "April":
      month =
        language === "ka"
          ? "აპრილი"
          : language === "ru"
          ? "апрель"
          : monthResponse;
      break;
    case "May":
      month =
        language === "ka" ? "მაისი" : language === "ru" ? "май" : monthResponse;
      break;
    case "June":
      month =
        language === "ka"
          ? "ივნისი"
          : language === "ru"
          ? "июнь"
          : monthResponse;
      break;
    case "July":
      month =
        language === "ka"
          ? "ივლისი"
          : language === "ru"
          ? "июль"
          : monthResponse;
      break;
    case "August":
      month =
        language === "ka"
          ? "აგვისტო"
          : language === "ru"
          ? "август"
          : monthResponse;
      break;
    case "September":
      month =
        language === "ka"
          ? "სექტემბერი"
          : language === "ru"
          ? "сентябрь"
          : monthResponse;
      break;
    case "October":
      month =
        language === "ka"
          ? "ოქტომბერი"
          : language === "ru"
          ? "октябрь"
          : monthResponse;
      break;
    case "November":
      month =
        language === "ka"
          ? "ნოემბერი"
          : language === "ru"
          ? "ноябрь"
          : monthResponse;
      break;
    case "December":
      month =
        language === "ka"
          ? "დეკემბერი"
          : language === "ru"
          ? "декабрь"
          : monthResponse;
      break;
    default:
      month = monthResponse;
      break;
  }

  return month;
}
