const flags = [
  ["-44px", "United States", "+1"],
  ["-2311px", "Afghanistan (‫افغانستان‬‎)", "+93"],
  ["-1034px", "Albania (Shqipëri)", "+355"],
  ["-528px", "Algeria", "+213"],
  ["-1562px", "American Samoa", "+1684"],
  ["-594px", "Andorra", "+376"],
  ["-1947px", "Angola", "+244"],
  ["-1980px", "Anguilla", "+1264"],
  ["-869px", "Antigua & Barbuda", "+1268"],
  ["-2377px", "Argentina", "+54"],
  ["-176px", "Armenia (Հայաստան)", "+374"],
  ["-792px", "Aruba", "+297"],
  ["-55px", "Ascension Island", "+247"],
  ["-1716px", "Australia", "+61"],
  ["-1331px", "Austria (Österreich)", "+43"],
  ["-1243px", "Azerbaijan (Azərbaycan)", "+994"],
  ["-363px", "Bahamas", "+1242"],
  ["-1496px", "Bahrain (‫البحرين‬‎)", "+973"],
  ["-1771px", "Bangladesh (বাংলাদেশ)", "+880"],
  ["-1573px", "Barbados", "+1246"],
  ["-1100px", "Belarus (Беларусь)", "+375"],
  ["0px", "Belgium", "+32"],
  ["-484px", "Belize", "+501"],
  ["-1298px", "Benin (Bénin)", "+229"],
  ["-1914px", "Bermuda", "+1441"],
  ["-1848px", "Bhutan (འབྲུག)", "+975"],
  ["-1650px", "Bolivia", "+591"],
  ["-1584px", "Bosnia & Herzegovina (Босна и Херцеговина)", "+387"],
  ["-2707px", "Botswana", "+267"],
  ["-770px", "Brazil (Brasil)", "+55"],
  ["-55px", "British Indian Ocean Territory", "+246"],
  ["-1408px", "British Virgin Islands", "+1284"],
  ["-1683px", "Brunei", "+673"],
  ["-2586px", "Bulgaria (България)", "+359"],
  ["-726px", "Burkina Faso", "+226"],
  ["-1892px", "Burundi (Uburundi)", "+257"],
  ["-242px", "Cambodia (កម្ពុជា)", "+855"],
  ["-2057px", "Cameroon (Cameroun)", "+237"],
  ["-1375px", "Canada", "+1"],
  ["-2652px", "Cape Verde (Kabu Verdi)", "+238"],
  ["-2719px", "Caribbean Netherlands", "+599"],
  ["-308px", "Cayman Islands", "+1345"],
  ["-1837px", "Central African Republic (République centrafricaine)", "+236"],
  ["-814px", "Chad (Tchad)", "+235"],
  ["-1342px", "Chile", "+56"],
  ["-825px", "China (中国)", "+86"],
  ["-330px", "Colombia", "+57"],
  ["-1430px", "Comoros (‫جزر القمر‬‎)", "+269"],
  ["-1518px", "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "+243"],
  ["-1793px", "Congo (Republic) (Congo-Brazzaville)", "+242"],
  ["-2267px", "Cook Islands", "+682"],
  ["-2090px", "Costa Rica", "+506"],
  ["-1661px", "Côte d’Ivoire", "+225"],
  ["-902px", "Croatia (Hrvatska)", "+385"],
  ["-748px", "Cuba", "+53"],
  ["-2729px", "Curaçao", "+599"],
  ["-561px", "Cyprus (Κύπρος)", "+357"],
  ["-2256px", "Czech Republic (Česká republika)", "+420"],
  ["-1386px", "Denmark (Danmark)", "+45"],
  ["-2101px", "Djibouti", "+253"],
  ["-2432px", "Dominica", "+1767"],
  ["-1529px", "Dominican Republic (República Dominicana)", "+1809"],
  ["-1188px", "Ecuador", "+593"],
  ["-2201px", "Egypt (‫مصر‬‎)", "+20"],
  ["-1639px", "El Salvador", "+503"],
  ["-1507px", "Equatorial Guinea (Guinea Ecuatorial)", "+240"],
  ["-715px", "Eritrea", "+291"],
  ["-2410px", "Estonia (Eesti)", "+372"],
  ["-2443px", "Ethiopia", "+251"],
  ["-2762px", "Falkland Islands (Islas Malvinas)", "+500"],
  ["-1111px", "Faroe Islands (Føroyar)", "+298"],
  ["-1859px", "Fiji", "+679"],
  ["-1903px", "Finland (Suomi)", "+358"],
  ["-1012px", "France", "+33"],
  ["-2234px", "French Guiana (Guyane française)", "+594"],
  ["-1705px", "French Polynesia (Polynésie française)", "+689"],
  ["-880px", "Gabon", "+241"],
  ["-627px", "Gambia", "+220"],
  ["-858px", "Georgia (საქართველო)", "+995"],
  ["-2509px", "Germany (Deutschland)", "+49"],
  ["-2112px", "Ghana (Gaana)", "+233"],
  ["-275px", "Gibraltar", "+350"],
  ["-165px", "Greece (Ελλάδα)", "+30"],
  ["-1760px", "Greenland (Kalaallit Nunaat)", "+299"],
  ["-2399px", "Grenada", "+1473"],
  ["-407px", "Guadeloupe", "+590"],
  ["-2366px", "Guam", "+1671"],
  ["-935px", "Guatemala", "+502"],
  ["-2575px", "Guinea (Guinée)", "+224"],
  ["-1925px", "Guinea-Bissau (Guiné-Bissau)", "+245"],
  ["-803px", "Guyana", "+592"],
  ["-319px", "Haiti", "+509"],
  ["-2156px", "Honduras", "+504"],
  ["-2696px", "Hong Kong (香港)", "+852"],
  ["-682px", "Hungary (Magyarország)", "+36"],
  ["-1991px", "Iceland (Ísland)", "+354"],
  ["-1694px", "India (भारत)", "+91"],
  ["-1958px", "Indonesia", "+62"],
  ["-2013px", "Iran (‫ایران‬‎)", "+98"],
  ["-649px", "Iraq (‫العراق‬‎)", "+964"],
  ["-1969px", "Ireland", "+353"],
  ["-341px", "Israel (‫ישראל‬‎)", "+972"],
  ["-143px", "Italy (Italia)", "+39"],
  ["-1727px", "Jamaica", "+1876"],
  ["-429px", "Japan (日本)", "+81"],
  ["-1463px", "Jordan (‫الأردن‬‎)", "+962"],
  ["-1210px", "Kazakhstan (Казахстан)", "+7"],
  ["-2630px", "Kenya", "+254"],
  ["-374px", "Kiribati", "+686"],
  ["-2487px", "Kuwait (‫الكويت‬‎)", "+965"],
  ["-1617px", "Kyrgyzstan (Кыргызстан)", "+996"],
  ["-451px", "Laos (ລາວ)", "+856"],
  ["-1936px", "Latvia (Latvija)", "+371"],
  ["-1254px", "Lebanon (‫لبنان‬‎)", "+961"],
  ["-2190px", "Lesotho", "+266"],
  ["-2068px", "Liberia", "+231"],
  ["-132px", "Libya (‫ليبيا‬‎)", "+218"],
  ["-979px", "Liechtenstein", "+423"],
  ["-1122px", "Lithuania (Lietuva)", "+370"],
  ["-1474px", "Luxembourg", "+352"],
  ["-2597px", "Macau (澳門)", "+853"],
  ["-1353px", "Macedonia (FYROM) (Македонија)", "+389"],
  ["-1287px", "Madagascar (Madagasikara)", "+261"],
  ["-2145px", "Malawi", "+265"],
  ["-1870px", "Malaysia", "+60"],
  ["-616px", "Maldives", "+960"],
  ["-2520px", "Mali", "+223"],
  ["-1551px", "Malta", "+356"],
  ["-1144px", "Marshall Islands", "+692"],
  ["-198px", "Martinique", "+596"],
  ["-253px", "Mauritania (‫موريتانيا‬‎)", "+222"],
  ["-2179px", "Mauritius (Moris)", "+230"],
  ["-2024px", "Mexico (México)", "+52"],
  ["-1738px", "Micronesia", "+691"],
  ["-2685px", "Moldova (Republica Moldova)", "+373"],
  ["-913px", "Monaco", "+377"],
  ["-2553px", "Mongolia (Монгол)", "+976"],
  ["-2167px", "Montenegro (Crna Gora)", "+382"],
  ["-583px", "Montserrat", "+1664"],
  ["-2333px", "Morocco", "+212"],
  ["-638px", "Mozambique (Moçambique)", "+258"],
  ["-11px", "Myanmar (Burma) (မြန်မာ)", "+95"],
  ["-1881px", "Namibia (Namibië)", "+264"],
  ["-1749px", "Nauru", "+674"],
  ["-110px", "Nepal (नेपाल)", "+977"],
  ["-1441px", "Netherlands (Nederland)", "+31"],
  ["-1276px", "New Caledonia (Nouvelle-Calédonie)", "+687"],
  ["-1540px", "New Zealand", "+64"],
  ["-154px", "Nicaragua", "+505"],
  ["-550px", "Niger (Nijar)", "+227"],
  ["-2476px", "Nigeria", "+234"],
  ["-2079px", "Niue", "+683"],
  ["-209px", "Norfolk Island", "+6723"],
  ["-704px", "Northern Mariana Islands", "+1"],
  ["-1804px", "North Korea (북한)", "+850"],
  ["-836px", "Norway (Norge)", "+47"],
  ["-2454px", "Oman (‫عُمان‬‎)", "+968"],
  ["-2035px", "Pakistan (‫پاکستان‬‎)", "+92"],
  ["-231px", "Palau", "+680"],
  ["-1199px", "Palestine (‫فلسطين‬‎)", "+970"],
  ["-847px", "Panama (Panamá)", "+507"],
  ["-1485px", "Papua New Guinea", "+675"],
  ["-2344px", "Paraguay", "+595"],
  ["-946px", "Peru (Perú)", "+51"],
  ["-1815px", "Philippines", "+63"],
  ["-1177px", "Poland (Polska)", "+48"],
  ["-517px", "Portugal", "+351"],
  ["-473px", "Puerto Rico", "+1787"],
  ["-462px", "Qatar (‫قطر‬‎)", "+974"],
  ["-264px", "Réunion (La Réunion)", "+262"],
  ["-671px", "Romania (România)", "+40"],
  ["-660px", "Russia (Россия)", "+7"],
  ["-2674px", "Rwanda", "+250"],
  ["-2300px", "Samoa", "+685"],
  ["-2123px", "San Marino", "+378"],
  ["-2388px", "São Tomé & Príncipe (São Tomé e Príncipe)", "+239"],
  ["-33px", "Saudi Arabia (‫المملكة العربية السعودية‬‎)", "+966"],
  ["-2134px", "Senegal", "+221"],
  ["-2465px", "Serbia (Србија)", "+381"],
  ["-1045px", "Seychelles", "+248"],
  ["-737px", "Sierra Leone", "+232"],
  ["-22px", "Singapore", "+65"],
  ["-2773px", "Sint Maarten", "+1721"],
  ["-2212px", "Slovakia (Slovensko)", "+421"],
  ["-1221px", "Slovenia (Slovenija)", "+386"],
  ["-1067px", "Solomon Islands", "+677"],
  ["-1364px", "Somalia (Soomaaliya)", "+252"],
  ["-2355px", "South Africa", "+27"],
  ["-2245px", "South Korea (대한민국)", "+82"],
  ["-2741px", "South Sudan (‫جنوب السودان‬‎)", "+211"],
  ["-1155px", "Spain (España)", "+34"],
  ["-2641px", "Sri Lanka (ශ්‍රී ලංකාව)", "+94"],
  ["-1012px", "St. Barthélemy (Saint-Barthélemy)", "+590"],
  ["-495px", "St. Helena", "+290"],
  ["-99px", "St. Kitts & Nevis", "+1869"],
  ["-1397px", "St. Lucia", "+1758"],
  ["-55px", "St. Martin (Saint-Martin)", "+590"],
  ["-1078px", "St. Pierre & Miquelon (Saint-Pierre-et-Miquelon)", "+508"],
  ["-2619px", "St. Vincent & Grenadines", "+1784"],
  ["-352px", "Sudan (‫السودان‬‎)", "+249"],
  ["-2663px", "Suriname", "+597"],
  ["-2278px", "Swaziland", "+268"],
  ["-385px", "Sweden (Sverige)", "+46"],
  ["-1320px", "Switzerland (Schweiz)", "+41"],
  ["-1826px", "Syria (‫سوريا‬‎)", "+963"],
  ["-506px", "Taiwan (台灣)", "+886"],
  ["-187px", "Tajikistan", "+992"],
  ["-2289px", "Tanzania", "+255"],
  ["-957px", "Thailand (ไทย)", "+66"],
  ["-2784px", "Timor-Leste", "+670"],
  ["-605px", "Togo", "+228"],
  ["-2751px", "Tokelau", "+690"],
  ["-1089px", "Tonga", "+676"],
  ["-440px", "Trinidad & Tobago", "+1868"],
  ["-539px", "Tunisia", "+216"],
  ["-1606px", "Turkey (Türkiye)", "+90"],
  ["-2542px", "Turkmenistan", "+993"],
  ["-1309px", "Turks & Caicos Islands", "+1649"],
  ["-286px", "Tuvalu", "+688"],
  ["-1782px", "U.S. Virgin Islands", "+1340"],
  ["-1166px", "Uganda", "+256"],
  ["-2002px", "Ukraine (Україна)", "+380"],
  ["-2223px", "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "+971"],
  ["-55px", "United Kingdom", "+44"],
  ["-2608px", "Uruguay", "+598"],
  ["-1001px", "Uzbekistan (Oʻzbekiston)", "+998"],
  ["-1265px", "Vanuatu", "+678"],
  ["-2322px", "Vatican City (Città del Vaticano)", "+379"],
  ["-1056px", "Venezuela", "+58"],
  ["-968px", "Vietnam (Việt Nam)", "+84"],
  ["-1012px", "Wallis & Futuna", "+681"],
  ["-1672px", "Yemen (‫اليمن‬‎)", "+967"],
  ["-1595px", "Zambia", "+260"],
  ["-2046px", "Zimbabwe", "+263"]
];

export default flags;