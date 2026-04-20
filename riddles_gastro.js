const riddlesData = {
  easy: [
    {
      title: "Podstawa Zupy",
      text: "Jestem przejrzystym wywarem z kości, mięsa i warzyw, długo gotowanym na wolnym ogniu. Stanowię bazę wielu zup i sosów w kuchni restauracyjnej. Bez mnie nie powstanie dobry rosół ani consommé. Co to jestem?",
      answers: ["Bulion / Fond", "Roux", "Béchamel", "Fumet"],
      correct: 0,
      hint: "Wyróżniamy mnie biały, brązowy i rybny — w zależności od surowców.",
      success: "Bulion (fond) — podstawa kuchni klasycznej, punkt wyjścia dla sosów i zup."
    },
    {
      title: "Tajna Temperatura",
      text: "Jestem strefą temperatur między 5°C a 65°C. W tej przestrzeni bakterie namnażają się najszybciej. Każdy technik żywienia musi mnie znać na pamięć, by zachować bezpieczeństwo żywności. Czym jestem?",
      answers: ["Zona Maillarda", "Strefa zagrożenia mikrobiologicznego", "Pasmo pasteryzacji", "Zakres kriogeniczny"],
      correct: 1,
      hint: "HACCP nakazuje unikać przetrzymywania żywności w tym zakresie dłużej niż 2 godziny.",
      success: "Strefa zagrożenia (danger zone) — fundament bezpieczeństwa żywności w każdej kuchni."
    },
    {
      title: "Biały Sos Matka",
      text: "Jestem jednym z pięciu sosów-matek kuchni klasycznej. Powstaję z białej zasmażki i gorącego mleka. Stali bywalcy restauracji znają mnie jako podstawę lasagne i gratinów. Jak mnie nazywają?",
      answers: ["Velouté", "Hollandaise", "Béchamel", "Espagnole"],
      correct: 2,
      hint: "Wymyślił mnie Louis de Béchameil, marszałek dworu Ludwika XIV.",
      success: "Béchamel — jeden z klasycznych sosów-matek, fundament europejskiej kuchni."
    },
    {
      title: "Król Kuchni",
      text: "Jestem stanowiskiem kierowniczym w hierarchii brygady kuchennej. Odpowiadam za organizację pracy, jakość potraw i zarządzanie zespołem. Auguste Escoffier stworzył system, w którym to ja stoję na szczycie. Kim jestem?",
      answers: ["Sous-chef", "Chef de cuisine", "Commis", "Garde manger"],
      correct: 1,
      hint: "Po polsku nazywam się szef kuchni lub kucharz kierowniczy.",
      success: "Chef de cuisine — głowa brygady kuchennej, odpowiedzialna za całą kuchnię."
    },
    {
      title: "Metoda Cieplna",
      text: "Przyrządzam potrawy w naczyniu, zanurzone w środowisku wodnym o temperaturze 100°C. Używam mnie do jajek, klusek i warzyw. Jestem metodą łagodną — nie wysuszam produktów tak jak pieczenie. Co to za metoda?",
      answers: ["Smażenie", "Gotowanie", "Grillowanie", "Duszenie"],
      correct: 1,
      hint: "Może odbywać się w wodzie, bulionie lub na parze.",
      success: "Gotowanie — jedna z podstawowych technik obróbki cieplnej w gastronomii."
    }
  ],

  medium: [
    {
      title: "Reakcja Brązowienia",
      text: "Jestem reakcją chemiczną między aminokwasami a cukrami redukującymi, zachodzącą w temperaturze powyżej 140°C. Nadaję potrawom złocistą skórkę i charakterystyczny aromat. Bez mnie stek byłby blady i bez smaku. Jak mnie nazywają?",
      answers: ["Karmelizacja", "Reakcja Maillarda", "Hydroliza", "Denaturacja"],
      correct: 1,
      hint: "Opisał mnie francuski chemik Louis-Camille Maillard w 1912 roku.",
      success: "Reakcja Maillarda — odpowiedzialna za złocisty kolor i bogaty smak pieczonych i smażonych potraw."
    },
    {
      title: "System Kontroli",
      text: "Jestem systemem zarządzania bezpieczeństwem żywności, obowiązkowym w każdym zakładzie gastronomicznym w UE. Analizuję zagrożenia i wskazuję krytyczne punkty kontroli w procesie produkcji. Jak mnie nazywają?",
      answers: ["ISO 9001", "GMP", "HACCP", "BRC"],
      correct: 2,
      hint: "Skrót pochodzi od angielskiej nazwy: Hazard Analysis and Critical Control Points.",
      success: "HACCP — obowiązkowy system bezpieczeństwa żywności, wymagany przepisami UE."
    },
    {
      title: "Technika Sous Vide",
      text: "Jestem nowoczesną techniką kulinarną, polegającą na gotowaniu próżniowo zapakowanej żywności w kąpieli wodnej o precyzyjnie kontrolowanej, niskiej temperaturze. Zachowuję soki i aromaty, których tradycyjne gotowanie nie potrafi utrzymać. Co to za metoda?",
      answers: ["Blanszowanie", "Sous vide", "Braising", "Confit"],
      correct: 1,
      hint: "Temperatura wody zazwyczaj wynosi 55–85°C, a czas gotowania może trwać wiele godzin.",
      success: "Sous vide — precyzyjna technika gotowania w próżni, popularna w kuchni nowoczesnej."
    },
    {
      title: "Wskaźnik Wartości",
      text: "Jestem miarą wyrażającą stosunek wartości odżywczej białka do jego zawartości w produkcie. Ocenia mnie się pod kątem strawności i składu aminokwasowego. Jajko kurze uznawane jest za wzorzec i ma moje wartości równe 100. Czym jestem?",
      answers: ["Wskaźnik BMI", "Biologiczna wartość białka (BV)", "Współczynnik Atwatera", "Indeks glikemiczny"],
      correct: 1,
      hint: "Im wyższa moja wartość, tym lepiej białko jest wykorzystywane przez organizm.",
      success: "Biologiczna wartość białka (BV) — kluczowy parametr przy ocenie jakości żywieniowej produktów."
    },
    {
      title: "Karta Dań",
      text: "Jestem oficjalnym dokumentem gastronomicznym, który określa nazwy potraw, ich skład, gramatury i ceny. Muszę być zgodna z przepisami o informacji dla konsumenta dotyczącymi alergenów. Wisi na mnie wizerunek restauracji. Czym jestem?",
      answers: ["Normatyw surowcowy", "Menu / Jadłospis", "Karta HACCP", "Receptura gastronomiczna"],
      correct: 1,
      hint: "Może być stałe, sezonowe, bankietowe lub degustacyjne.",
      success: "Menu — wizytówka każdej restauracji i dokument prawny regulowany przepisami UE."
    }
  ],

  hard: [
    {
      title: "Emulgator Natury",
      text: "Jestem substancją naturalnie obecną w żółtku jaja, która pozwala łączyć tłuszcz z wodą w stabilną emulsję. Dzięki mnie powstaje majonez i sos hollandaise. Chemicznie jestem fosfolipidową cząsteczką o dwóch różnych końcach. Jak mnie nazywają?",
      answers: ["Gluten", "Lecytyna", "Pektyna", "Karagen"],
      correct: 1,
      hint: "Mam koniec hydrofilowy i hydrofobowy — to pozwala mi stabilizować emulsje.",
      success: "Lecytyna — naturalny emulgator z żółtka jaja, klucz do stabilnych emulsji kulinarnych."
    },
    {
      title: "Fermentacja Mlekowa",
      text: "Jestem procesem beztlenowego rozkładu laktozy przez bakterie z rodzaju Lactobacillus. Obniżam pH mleka, powodując koagulację kazeiny. Dzięki mnie powstają jogurty, kefiry, sery i kiszonki. Czym jestem?",
      answers: ["Fermentacja octowa", "Fermentacja mlekowa (homofermentacja)", "Hydroliza enzymatyczna", "Proteoliza"],
      correct: 1,
      hint: "Produktem końcowym jest kwas mlekowy — stąd kwaśny smak fermentowanych produktów.",
      success: "Fermentacja mlekowa — biologiczny proces konserwacji i produkcji żywności fermentowanej."
    },
    {
      title: "Metoda Kalkulacji",
      text: "Jestem wskaźnikiem gastronomicznym wyrażonym w procentach, mówiącym jaki procent ceny sprzedaży potrawy stanowi koszt surowców użytych do jej przygotowania. Szef kuchni analizuje mnie, by ocenić rentowność menu. Czym jestem?",
      answers: ["Marża brutto", "Food cost", "Wskaźnik rotacji", "Narzut gastronomiczny"],
      correct: 1,
      hint: "Obliczam się: (koszt surowców / cena sprzedaży) × 100%. W restauracjach fine dining wynoszę zwykle 25–35%.",
      success: "Food cost — kluczowy wskaźnik rentowności w zarządzaniu gastronomicznym."
    },
    {
      title: "Sieć Glutenowa",
      text: "Jestem białkową siatką powstającą podczas mieszania mąki z wodą — glitenina i gliadyna łączą się tworząc moją strukturę. Nadaję ciastu elastyczność i zdolność do zatrzymywania CO₂ podczas fermentacji. Co to jestem?",
      answers: ["Skrobia żelatynizowana", "Gluten", "Albumina", "Kolagen"],
      correct: 1,
      hint: "Moja ilość i jakość zależą od rodzaju mąki — twarda pszenica daje mnie więcej niż miękka.",
      success: "Gluten — białkowa sieć nadająca ciastu strukturę, kluczowa w piekarstwie i cukiernictwie."
    },
    {
      title: "Norma Żywieniowa",
      text: "Jestem dokumentem opracowanym przez Instytut Żywności i Żywienia, który określa zalecane dzienne spożycie energii, białek, tłuszczów, węglowodanów i mikroskładników dla różnych grup ludności. Podstawa programowa technikum żywienia wymaga mojej znajomości. Czym jestem?",
      answers: ["Piramida żywieniowa WHO", "Normy żywienia dla populacji Polski (IŻŻ)", "Rozporządzenie 1169/2011 UE", "Tablice Atwatera"],
      correct: 1,
      hint: "Publikuje mnie Instytut Żywności i Żywienia w Warszawie, ostatnia aktualizacja 2020 r.",
      success: "Normy żywienia IŻŻ — oficjalne zalecenia żywieniowe dla populacji polskiej, podstawa planowania jadłospisów."
    }
  ]
};
