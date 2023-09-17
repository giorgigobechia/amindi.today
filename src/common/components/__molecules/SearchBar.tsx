import SearchIcon from "@/common/icons/searchIcon";
import { useTheme } from "next-themes";
import { useGlobalContext } from "@/common/context/store";
import { useState } from "react";

interface SearchProps {
  handleSearchClose: () => void;
}

const SearchBar = ({ handleSearchClose }: SearchProps) => {
  let citiesArray = [
    { cityEn: "tbilisi", cityGe: "თბილისი" },
    { cityEn: "abastumani", cityGe: "აბასთუმანი" },
    { cityEn: "kutaisi", cityGe: "ქუთაისი" },
    { cityEn: "batumi", cityGe: "ბათუმი" },
    { cityEn: "bakuriani", cityGe: "ბაკურიანი" },
    { cityEn: "zestafoni", cityGe: "ზესტაფონი" },
    { cityEn: "zugdidi", cityGe: "ზუგდიდი" },
    { cityEn: "chiatura", cityGe: "ჭიათურა" },
    { cityEn: "ozurgeti", cityGe: "ოზურგეთი" },
    { cityEn: "kobuleti", cityGe: "ქობულეთი" },
    { cityEn: "gori", cityGe: "გორი" },
    { cityEn: "gudauri", cityGe: "გუდაური" },
    { cityEn: "sachkhere", cityGe: "საჩხერე" },
    { cityEn: "signagi", cityGe: "სიღნაღი" },
    { cityEn: "senaki", cityGe: "სენაკი" },
    { cityEn: "samtredia", cityGe: "სამტრედია" },
    { cityEn: "akhaltsikhe", cityGe: "ახალციხე" },
    { cityEn: "mestia", cityGe: "მესტია" },
    { cityEn: "gurjaani", cityGe: "გურჯაანი" },
    { cityEn: "khashuri", cityGe: "ხაშური" },
    { cityEn: "chokhatauri", cityGe: "ჩოხატაური" },
    { cityEn: "borjomi", cityGe: "ბორჯომი" },
    { cityEn: "sagarejo", cityGe: "საგარეჯო" },
    { cityEn: "lagodekhi", cityGe: "ლაგოდეხი" },
    { cityEn: "tianeti", cityGe: "თიანეთი" },
    { cityEn: "kharagauli", cityGe: "ხარაგაული" },
    { cityEn: "cxinvali", cityGe: "ცხინვალი" },
    { cityEn: "rustavi", cityGe: "რუსთავი" },
    { cityEn: "ureki", cityGe: "ურეკი" },
    { cityEn: "lanchkhuti", cityGe: "ლანჩხუთი" },
    { cityEn: "surami", cityGe: "სურამი" },
    { cityEn: "poti", cityGe: "ფოთი" },
    { cityEn: "oni", cityGe: "ონი" },
    { cityEn: "shekvetili", cityGe: "შეკვეთილი" },
    { cityEn: "marneuli", cityGe: "მარნეული" },
    { cityEn: "bolnisi", cityGe: "ბოლნისი" },
    { cityEn: "manglisi", cityGe: "მანგლისი" },
    { cityEn: "mcxeta", cityGe: "მცხეთა" },
    { cityEn: "gonio", cityGe: "გონიო" },
    { cityEn: "shatili", cityGe: "შატილი" },
    { cityEn: "shovi", cityGe: "შოვი" },
    { cityEn: "tsinandali", cityGe: "წინანდალი" },
    { cityEn: "khobi", cityGe: "ხობი" },
    { cityEn: "tskneti", cityGe: "წყნეთი" },
    { cityEn: "sioni", cityGe: "სიონი" },
    { cityEn: "sokhumi", cityGe: "სოხუმი" },
    { cityEn: "ushguli", cityGe: "უშგული" },
    { cityEn: "davit-gareji", cityGe: "დავით-გარეჯი" },
    { cityEn: "omalo", cityGe: "ომალო" },
    { cityEn: "axalkalaki", cityGe: "ახალქალაქი" },
    { cityEn: "martvili", cityGe: "მარტვილი" },
    { cityEn: "khoni", cityGe: "ხონი" },
    { cityEn: "anaklia", cityGe: "ანაკლია" },
    { cityEn: "adigeni", cityGe: "ადიგენი" },
  ];
  const { resolvedTheme } = useTheme();
  const { language } = useGlobalContext();
  const [search, setSearch] = useState("");
  const handleOptionClick = (cityEnValue: string) => {
    setSearch(cityEnValue);
    handleSearchClose();
    window.history.pushState({}, "", encodeURIComponent(cityEnValue));
  };

  return (
    <div>
      <div
        className="fixed top-0 left-0 w-[100%] h-full z-10 bg-[#000000b4]"
        style={{ backdropFilter: "blur(2px)" }}
        onClick={handleSearchClose}
      />
      <div className="flex flex-col gap-[18px] fixed top-[10vh] left-[40%] w-[39.8%] min-h-[200px z-50 overflow-hidden">
        <div className="w-full h-[69px] bg-[#000] rounded-[34.5px] relative">
          <button className="absolute top-[22px] left-[16.4px]">
            <SearchIcon
              width={0}
              height={0}
              className="md:w-[28px] md:h-[28px] xxl:w-[36px] xxl:h-[36px] left-0 top-0"
              stroke={resolvedTheme === "light" ? "black" : "white"}
            />
          </button>
          <input
            className="w-[80%] h-[100%] bg-[#000] border-[0px] absolute left-[60px] outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="w-full h-[70vh] bg-[#000] rounded-[34.5px] search-scroll">
          <ul className="pt-[30px]">
            {citiesArray
              .filter((city) => {
                return search.toLowerCase() === ""
                  ? city
                  : language === "ka"
                  ? city.cityGe.toLowerCase().includes(search)
                  : city.cityEn.toLowerCase().includes(search);
              })
              .map((city, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center h-[53px] hover:bg-[#ffffff59]"
                    onClick={() => handleOptionClick(city.cityEn)}
                  >
                    <span className="ml-[77px]">
                      {language === "ka" ? city.cityGe : city.cityEn}
                    </span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
