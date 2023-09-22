export function translateToLanguage(word : string, languageArray : any, targetLanguage : string , dataLang : string) {
    for (let i = 0; i < languageArray?.length; i++) {
      const entry = languageArray[i];
      if (dataLang === "english") {
        if (entry.En === word) {
            switch(targetLanguage){
                case  "ka" :
                    return entry.Ge
                case  "en" :
                    return entry.En 
            }
          }
      } else if(dataLang === "georgian") {
        if (entry.Ge === word) {
            switch(targetLanguage){
                case  "ka" :
                    return entry.Ge
                case  "en" :
                    return entry.En 
            }
          }
      }
      
    }
  
    return ""
}  