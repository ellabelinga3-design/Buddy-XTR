// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Buddy;;;H4sIAAAAAAAAA61Ua4+iSBT9K5v6qllBeRQmnSzyUFQQxRdu9kMBBZbysigVeuJ/32B370wyszO9yfKpqMe955x77v0C8oJUeIYbMPwCSkpuiOF2yZoSgyEYXeMYU9AFEWIIDIE6FrzpvnAgT2hyDnTNnuUX6F8G1qav5KtL59WgUaFGk771Ah5dUF6DlIQ/CdjjeqZ5M+6eVmdEvAvJgbujYiesE2mW0rwuMygH9Sbqn/0X8GgjIkJJnhjlEWeYonSGGxcR+jn4y0UyF05y35zOo9dUvB03/ohuN53+HfOn/ZEcUDDr3DYsN4vPwT/l6n7LIcMwYQFtJNthNjc6U8vZK9M6r49SZJ/pq+9a3v0NfkWSHEdWhHNGWPNp3cOpeFxIvd02NXWPBD5d8Pqh4KxXZN223tZcr3znzDdwZPifA26lWW+l66K+omwe2NRGB0WFm4gny31udVRpvSLldT7dJ8m3wF364ZXzf9HdH/VcNfEDp2ALu5+d07UlG1fPVCIvkUJrFcr1zPVh6ubh5+CbTjWJgmO0O4uQp1s30e9ltRrbl4uqVgvteApfl4RzRhfu/BU+Ylf6M5TNkeiWV6RjvFpo534kp5dOfErL0j9OtmVs9mbFDEZpuiNywIt6aS8Xpryp1/t9wt/Pu5Isrs2iIVoxus/Mg2Ko60OmJi9PRmfcWBEY8o8uoDghFaOIkSJv9wZCF6Do5uGQYvZUF/gXd43kuaSYl43eGMnGretAk8WZI86o2U+QutidpvZrL4AvoAtKWoS4qnA0IRUraGPjqkIJrsDwz2ehWs4UZwXDUxKBIegPZAnKECp8X/ij+v1+RKxCZfl7jhnogpgWmY3BkNEr7oLnA5Mz+pw6MhROlRXJ5DlBHcimBCHPi3AkwZZh9pZ0TTJcMZSVYMjL4oAbKIosPbr/Dw5O6humrkmcNoJ93dBkQYUiFHh9YBoGNH+BA/KPv7ogxzV7s/FTfL4LYkIrtsmvZVqg6MPjH4coDItrzrwmD7V2gSkYfrONGSN5UrXMrjmi4ZHcsNbyAMMYpRX+p96Y4uiDy/sM04qotSF0dei56zlosbeBvtNmKAy+lyd9XuOFQZ+XeChDToHyoL3ZHnRBjtpgYGusPFUzfvMNdWysWn3ekbeJIswQSSswBNp0IrGePTEcZCmhPR6rRqJqiQq+Mv1ooDeHOp0jU7f00OHSy7zm9+J8sPUqe9cMBvpY4BZn51SLU0PlT9XLD4KAIWDmnFqT5rLIJ447EnrJYeoelHuYeHEn5EztwNuTke1Ptq6jkxmKPXqTBtdjz9Gdq7GuRFkjXIHinXGe6cvNRVZInY2WL222CN9IiL9NxtWBElwU9eaLdFRdjJ12S2eKYvN7bmzAciLs5YnBzy7zSszERsTh62Fh10d/p8hSHK+XWWMIjeSWG85NaDANBuJyqr+39nO0pO8jnbx3HXn+xgQ/J+R7MX5Z0zfgrfW4R/ebGO8z91/m1mgdF8HSRP2YTRGB0bbjKfyG6mbFlHt9dfRS9yH2Vqrjy+DR9kCZIhYXNANDgPKIFk/H0OLaetnK4+InyTTVsjT1jXmKKqZ+7Y8ftJwkvd1yaVFOUHVsRRgLanZtzd6oZekxxD7aDajtZ01c8Pgb0TwJqpgIAAA=",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT !== undefined ? process.env.AUTO_STATUS_REACT === 'true' : true, 
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : true,
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'false' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'false' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'false' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'false' : true, 
  ANTI_WORD: process.env.ANTI_WORD !== undefined ? process.env.ANTI_WORD === 'false' : true,
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "Versace",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "237687889124",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'false' : false, 
};


module.exports = config;
