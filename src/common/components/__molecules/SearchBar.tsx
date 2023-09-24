import SearchIcon from "@/common/icons/searchIcon";
import { useTheme } from "next-themes";
import { useGlobalContext } from "@/common/context/store";
import { useState } from "react";
import { citiesArray } from "@/common/languageCases/arrays";

interface SearchProps {
  handleSearchClose: () => void;
}

const SearchBar = ({ handleSearchClose }: SearchProps) => {
  const { resolvedTheme } = useTheme();
  const { language } = useGlobalContext();
  const [search, setSearch] = useState("");
  const { setActiveCity } = useGlobalContext();
  const handleOptionClick = (cityEnValue: string) => {
    setSearch(cityEnValue);
    handleSearchClose();
    window.history.pushState({}, "", `/prognozi/${cityEnValue}`);
    setActiveCity(cityEnValue);
  };

  return (
    <div>
      <div
        className="fixed top-0 left-0 w-[100%] h-full z-10 bg-[#000000b4] "
        style={{ backdropFilter: "blur(2px)" }}
        onClick={handleSearchClose}
      />
      <div className="flex flex-col gap-[18px] fixed top-[10vh] left-[30%] w-[39.8%] min-h-[200px] z-50 overflow-hidden">
        <div className="w-full h-[69px] bg-white dark:bg-black rounded-[34.5px] relative">
          <button className="absolute top-[22px] left-[16.4px]">
            <SearchIcon
              width={0}
              height={0}
              className="md:w-[28px] md:h-[28px] xxl:w-[36px] xxl:h-[36px] left-0 top-0"
              stroke={resolvedTheme === "light" ? "black" : "white"}
            />
          </button>
          <input
            className="w-[80%] h-[100%] bg-white dark:bg-black border-[0px] absolute left-[60px] outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div
          className={`w-full h-[70vh] bg-white dark:bg-black rounded-[34.5px]  ${
            resolvedTheme === "light" ? "search-scroll-dark" : "search-scroll"
          }  `}
        >
          <ul className="pt-[30px] cursor-pointer">
            {citiesArray
              .filter((city) => {
                return search.toLowerCase() === ""
                  ? city
                  : language === "ka"
                  ? city.Ge.toLowerCase().includes(search)
                  : city.En.toLowerCase().includes(search);
              })
              .map((city, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center h-[53px] dark:hover:bg-[#ffffff59] hover:bg-[#d7d5d5]"
                    onClick={() => handleOptionClick(city.En)}
                  >
                    <span className="ml-[37px] xxl:ml-[77px]">
                      {language === "ka" ? city.Ge : city.En}
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
