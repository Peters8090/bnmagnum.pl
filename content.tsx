import FacebookLogo from "./assets/images/facebook.png";
import Favicon from "./assets/images/favicon3.png";
import HouseAbout from "./assets/images/house-about.jpg";
import InstagramLogo from "./assets/images/instagram.png";
import NavLogo from "./assets/images/nav_logo.png";
import OtodomLogo from "./assets/images/otodom.png";
import { EmployeeProps } from "./components/pages/index/Sections/OurEmployees/Employee/Employee";
import { RouteOnlyProps } from "./interfaces and types/RouteType";
interface ContentType {
  siteName: string;
  head: { description: string; logo: string };
  navigation: { logoImage?: string };
  utils: { next: string; back: string; reset: string };
  hero: {
    route: RouteOnlyProps;
    welcome: string;
    subtitle: string;
    call_to_action: string;
  };
  about: { route: RouteOnlyProps; content: string; image: string };
  guideForSellers: {
    route: RouteOnlyProps;
    steps: Record<string, string | JSX.Element>;
  };
  guideForBuyers: {
    route: RouteOnlyProps;
    steps: Record<string, string | JSX.Element>;
  };
  ourEmployees: { route: RouteOnlyProps; employees: EmployeeProps[] };
  footer: {
    route: RouteOnlyProps;
    sectionTitle: string;
    companyData: string;
    contactForm: string;
    privacyPolicyConsent: [string, string];
    informations: { title: string; content: string }[];
    socialLinks: { image: string; alt: string; href: string }[];
    madeBy: { text: string; link: string };
  };
  privacyPolicy: { route: RouteOnlyProps; content: JSX.Element };
  offers: { route: RouteOnlyProps };
  error: { not_found: string };
}
export const Content: ContentType = {
  siteName: "Biuro Nieruchomości Libretto",
  head: {
    description:
      "Jesteśmy profesjonalnym biurem nieruchomości. W ofercie posiadamy domy, mieszkania, działki i lokale.",
    logo: Favicon,
  },
  navigation: { logoImage: NavLogo },
  utils: { next: "Dalej", back: "Wróć", reset: "Od nowa" },
  hero: {
    route: { routeName: "/", displayName: "Home" },
    welcome: "Witaj!",
    subtitle:
      "Poszukujesz domu lub mieszkania? Dobrze trafiłeś! Kliknij przycisk poniżej i wybierz, gdzie będziesz mieszkał.",
    call_to_action: "Przejdź do wyszukiwarki",
  },
  offers: {
    route: { displayName: "Oferty", routeName: "/oferty/[[...offerName]]" },
  },
  guideForSellers: {
    route: {
      routeName: "/#dla-sprzedajacych",
      displayName: "Dla sprzedających",
    },
    steps: {
      "Przebieg spotkania": (
        <>
          {" "}
          Powiedz, jaką nieruchomość posiadasz do sprzedania i umów się na
          spotkanie. Przyjedzie do Ciebie Agent działający w Twojej okolicy.
          Będziesz mieć pewność, że nie trafisz na przypadkowego doradcę, ale na
          specjalistę znającego dobrze rejon swojego działania.{" "}
          <div className="no-break-after">
            {" "}
            <br /> Doradca: <br />{" "}
          </div>{" "}
          <ul>
            {" "}
            <li>
              {" "}
              zaproponuje przedział cenowy, dzięki któremu dowiesz się, ile
              naprawdę może być warta Twoja nieruchomość{" "}
            </li>{" "}
            <li>ustali z Tobą realną cenę wyjściową sprzedaży</li>{" "}
            <li>
              {" "}
              przedstawi Ci plan marketingowy sprzedaży Twojej nieruchomości{" "}
            </li>{" "}
            <li>
              {" "}
              zrobi zdjęcia nieruchomości lub przedyskutuje temat home stagingu
              (czyli profesjonalnego przygotowania nieruchomości do zdjęć i
              sprzedaży) i ew. umówi profesjonalną sesję zdjęciową{" "}
            </li>{" "}
            <li>podpisze z Tobą umowę pośrednictwa</li>{" "}
            <li>
              {" "}
              zapyta o stan prawny nieruchomości oraz zbierze jak najwięcej
              informacji o nieruchomości, by móc jak najlepiej przedstawić ją
              przyszłym klientom.{" "}
            </li>{" "}
          </ul>{" "}
        </>
      ),
      "Współpraca na wyłączność": (
        <>
          {" "}
          Najbardziej skuteczną formą współpracy z agencją nieruchomości jest
          powierzenie sprzedaży nieruchomości tylko jednemu pośrednikowi. Dzięki
          temu masz pełną kontrolę nad sprzedażą i masz pewność, że pośrednik
          dokona wszelkich starań, by pomóc ci w sprzedaży. Dodatkowo zakres
          czynności proponowany przez pośrednika jest znacznie szerszy niż w
          przypadku umowy otwartej. <br /> Dla przykładu: <br /> Jeśli
          decydujemy się na zawarcie związku małżeńskiego, to ślubu udziela
          tylko jeden ksiądz, bądź jeden urzędnik stanu cywilnego. Wybieramy
          tylko jeden lokal na przyjęcie. Jeśli decydujemy się na przyjęcie to
          mamy jednego DJ'a lub jeden zespół muzyczny. Po ślubie, mamy jednego
          współmałżonka. Jeśli nam się nie ułoży i podejmujemy decyzję o
          rozstaniu, to doradza nam jeden adwokat. <br /> To dlaczego pozwalamy,
          żeby kilkunastu agentów sprzedawało naszą nieruchomość, wiedząc, że
          tylko jednemu z nich się uda. Druga strona medalu wygląda następująco;
          żaden z agentów nie bierze zupełnej odpowiedzialności za sprzedaż
          Państwa nieruchomości, bo wie, że sprzedający podpisał już wiele
          otwartych umów z innymi biurami nieruchomości, czyli starają się
          wszyscy, a tak naprawdę jest brak efektów. <br /> W przypadku ofert
          wyłącznych, macie Państwo gwarancję, że będzie rzetelnie wprowadzona i
          bardzo dobrze promowana. <br /> Dzięki temu, klienci zainteresowani
          przed spotkaniem z Agentem będą mogli poznać dokładną lokalizację, aby
          sprawdzić, czy na pewno będzie dla nich odpowiednia. Dlatego warto
          rozważyć zaufanie tylko jednemu agentowi. Jesteśmy po to, abyście
          Państwo podjęli właściwa decyzję.{" "}
        </>
      ),
    },
  },
  guideForBuyers: {
    route: { routeName: "/#dla-kupujacych", displayName: "Dla kupujących" },
    steps: {
      Wstęp: (
        <>
          {" "}
          Współpraca z naszym biurem nieruchomości przy zakupie, to
          bezpieczeństwo i pewność dokonania transakcji zgodnej z przepisami
          prawa. <br /> Decyzja kupującego (poszukującego) o współpracy z biurem
          nieruchomości, będzie miała swoje potwierdzenie na papierze. Przyjmie
          ona formę umowy, w której zawarte będą szczegółowe parametry
          poszukiwanej nieruchomości, zakres pracy biura nieruchomości oraz
          wysokość prowizji. <br /> Opowiadając nam o swoich potrzebach i
          oczekiwaniach względem poszukiwanej nieruchomości, będziesz miał
          pewność, że wybierzemy tylko te oferty, które odpowiadają Twoim
          wymaganiom. Posiadamy oferty zarówno z rynku pierwotnego
          (deweloperskiego), jak i rynku wtórnego.{" "}
        </>
      ),
      Prezentacja: (
        <>
          {" "}
          Rozpoczynamy poszukiwania idealnej nieruchomości dla klienta, a
          następnie przedstawiamy wyselekcjonowane oferty spełniające określone
          przez klienta wymogi. <br /> Prezentacja klientowi wybranych ofert
          odbywa się w czasie dostosowanym do jego indywidualnego kalendarza. W
          trakcie prezentacji informujemy klienta zarówno o zaletach, jak i
          potencjalnych wadach danej nieruchomości. <br /> Zapewnimy naszym
          klientom możliwie najlepsze wsparcie zarówno przy negocjacji ceny, jak
          i procesie zakupu nieruchomości od początku do końca. Naszym celem
          jest zadowolenie klienta na najkorzystniejszych dla niego warunkach.{" "}
        </>
      ),
      "Rodzaje nieruchomości": (
        <ul>
          {" "}
          <li>
            {" "}
            Mieszkanie{" "}
            <ul>
              {" "}
              <li>Czy na osiedlu zamkniętym</li>{" "}
              <li>Do którego piętra bez windy</li>{" "}
              <li>W bloku / w apartamentowcu</li>{" "}
            </ul>{" "}
          </li>{" "}
          <li>
            {" "}
            Dom{" "}
            <ul>
              {" "}
              <li>W mieście</li> <li>Poza miastem</li> <li>Na wsi</li>{" "}
              <li>Z małą działką</li> <li>Z dużą działką np. 2000 m²</li>{" "}
              <li>Dom 2-rodzinny</li> <li>Jednorodzinny </li> <li>Parterowy</li>{" "}
              <li>Wolnostojący</li> <li>1/2 bliźniaka</li> <li>Segment</li>{" "}
            </ul>{" "}
          </li>{" "}
          <li>
            {" "}
            Działka{" "}
            <ul>
              {" "}
              <li>Budowlana</li> <li>Pod zabudowę bliźniaczą</li> <li>Rolna</li>{" "}
            </ul>{" "}
          </li>{" "}
        </ul>
      ),
      "Ważne informacje - kryteria": (
        <ul>
          {" "}
          <li>
            Z rynku pierwotnego, czyli stan deweloperski do wykończenia{" "}
          </li>{" "}
          <li>
            {" "}
            Jeśli z rynku wtórnego to czy: do wprowadzenia się / odświeżenia /
            do remontu{" "}
          </li>{" "}
          <li>W jakim budżecie</li>{" "}
          <li>
            {" "}
            Lokalizacja, najlepiej w odniesieniu do jakiegoś punktu, podana w
            odległości np. (od PKP 1 km lub 20 min na pieszo){" "}
          </li>{" "}
          <li>Ile powinno być pokoi (w tym ile sypialni)</li>{" "}
          <li>Jaka powinna być powierzchnia np. domu i działki przy domu</li>{" "}
          <li>
            {" "}
            Jaka jest preferowana odległość od komunikacji, szkoły, sklepów
            spożywczych czy galerii handlowych{" "}
          </li>{" "}
          <li>Czego nie chciałbyś w okolicy swojej nieruchomości </li>{" "}
          <li>
            {" "}
            Czy okolica powinna dynamicznie się rozwijać, czy też powinna być
            oazą spokoju.{" "}
          </li>{" "}
        </ul>
      ),
    },
  },
  ourEmployees: {
    route: { routeName: "/#nasi-pracownicy", displayName: "Nasi pracownicy" },
    employees: [
      {
        title: "Jan Kowalski",
        description: [
          "Właściciel firmy",
          "Pośrednik nieruchomości od wielu lat",
          "Telefon: +48 123 456 789",
        ],
        image:
          "https://icon-library.com/images/profile-png-icon/profile-png-icon-24.jpg",
      },
    ],
  },
  about: {
    route: { routeName: "/#o-firmie", displayName: "O firmie" },
    content: ` Jesteśmy profesjonalnym biurem nieruchomości. Każda z naszych ofert jest rzetelnie sprawdzana, aby zapenić Państwu pełne bezpieczeństwo i wygodę. Mamy doświadczenie w branży nieruchomości, odpowiednią wiedzę oraz zamiłowanie do pomagania ludziom. `,
    image: HouseAbout,
  },
  footer: {
    route: { routeName: "/#kontakt", displayName: "Kontakt" },
    sectionTitle: "Kontakt z nami",
    companyData: "Dane firmy",
    contactForm: "Formularz kontaktowy",
    privacyPolicyConsent: ["Akceptuję", "Politykę Prywatności"],
    informations: [
      { title: "email", content: "magdacz1967@gmail.com" },
      { title: "telefon", content: "+48 661 826 920" },
      { title: "nip", content: "8271403139" },
      { title: "regon", content: "731027929" },
    ],
    socialLinks: [
      {
        image: OtodomLogo,
        alt: "otodom",
        href: "https://www.otodom.pl/shop/magnum-nieruchomosci-IDvkUH/",
      },
      {
        image: FacebookLogo,
        alt: "facebook",
        href: "https://www.facebook.com/Magnum-Nieruchomości-103080614954683",
      },
      {
        image: InstagramLogo,
        alt: "instagram",
        href: "https://www.instagram.com/magnum.nieruchomosci/",
      },
    ],
    madeBy: {
      text: "Made by Piotr Bartoszewski",
      link: "https://www.linkedin.com/in/piotr-bartoszewski-5280a6199/",
    },
  },
  privacyPolicy: {
    route: {
      displayName: "Polityka Prywatności",
      routeName: "/polityka-prywatnosci",
    },
    content: (
      <>
        {" "}
        Polityka prywatności jest realizowana zgodnie z Rozporządzeniem
        Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r.
        w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
        osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia
        dyrektywy 95/46/WE (określane jako „RODO”). <br />{" "}
        <strong>Administrator danych osobowych</strong>{" "}
        <br className="no-space" /> Administratorem Państwa danych osobowych,
        jest Libretto Nieruchomości Magdalena Czyściakow, NIP 8271403139. <br />{" "}
        <strong>
          {" "}
          Dane kontaktowe w sprawie przetwarzania danych osobowych{" "}
        </strong>{" "}
        <br className="no-space" />W sprawach związanych z przetwarzaniem
        Państwa danych osobowych prosimy skontaktować się z Administratorem:{" "}
        <ul>
          {" "}
          <li>mailowo: magdacz1967@gmail.com</li>{" "}
          <li>telefonicznie: 661 826 920</li>{" "}
        </ul>{" "}
        <br /> Rodzaj przetwarzanych danych osobowych:{" "}
        <ul>
          {" "}
          <li>imię</li> <li>nazwisko</li> <li>adres e-mail</li>{" "}
          <li>numer telefonu</li>{" "}
        </ul>{" "}
        <br /> Jeżeli zostaną nam udostępnione, będziemy przetwarzali Państwa
        następujące dane osobowe (są to dane które podali Państwo w formularzu
        kontaktowym zawartym na naszej stronie internetowej){" "}
        <ul>
          {" "}
          <li>imię</li> <li>nazwisko</li> <li>adres e-mail</li>{" "}
          <li>numer telefonu</li>{" "}
        </ul>{" "}
        <br /> <strong>Źródło pozyskania danych osobowych</strong>{" "}
        <br className="no-space" /> Państwa dane osobowe otrzymaliśmy od Państwa
        w momencie skorzystania przez Państwa z formularza zapytania na naszej
        stronie internetowej lub zapisania się na Newsletter. <br />{" "}
        <strong>
          {" "}
          Cel przetwarzania danych, podstawa prawna oraz prawnie uzasadnione
          interesy{" "}
        </strong>{" "}
        <br className="no-space" /> Państwa dane osobowe są przetwarzane w celu:{" "}
        <ul>
          {" "}
          <li>
            {" "}
            kontaktu z Państwem i przekazaniu Państwu wnioskowanych informacji w
            związku z naszą działalnością oraz skorzystaniem przez Państwa z
            formularza kontaktowego zawartego na naszej witrynie, w tym
            informowania Państwa o naszej ofercie (art. 6 ust. 1 lit a RODO){" "}
          </li>{" "}
          <li>
            {" "}
            marketingu bezpośredniego usług, ponieważ przetwarzanie jest
            niezbędne do realizacji naszego prawnie uzasadnionego interesu (art.
            6 ust 1 lit f RODO), którym jest możliwość realizacji marketingu
            bezpośredniego, dodatkowo podstawą prawną przetwarzania danych
            osobowych w tym celu jest Państwa zgoda na to przetwarzanie (art. 6
            ust. 1 lit a RODO) udzielona przed tym przetwarzaniem.{" "}
          </li>{" "}
          <li>
            {" "}
            przesyłania informacji handlowej drogą elektroniczną, w tym
            przypadku podstawą prawną przetwarzania danych osobowych w tym celu
            jest Państwa zgoda na to przetwarzanie danych osobowych w tym celu
            (art. 6 ust. 1 lit a RODO) udzielona przed tym przetwarzaniem.{" "}
          </li>{" "}
          <li>
            {" "}
            przesyłania Państwu zamówionego Newslettera - w tym przypadku
            podstawą prawną przetwarzania danych osobowych w tym celu jest
            Państwa zgoda na to przetwarzanie (art. 6 ust. 1 lit a RODO)
            udzielona przed tym przetwarzaniem{" "}
          </li>{" "}
          <li>
            {" "}
            badania preferencji odnośnie zapotrzebowania na usługi w zakresie
            naszego przedmiotu działalności - ponieważ przetwarzanie jest
            niezbędne do realizacji naszego prawnie uzasadnionego interesu (art.
            6 ust 1 lit f RODO), którym jest możliwość ustalenia katalogu usług
            dla Państwa interesujących,{" "}
          </li>{" "}
          <li>
            {" "}
            ustalenia, dochodzenia lub obrony przed roszczeniami, związanymi z
            zawartą z Państwem umową lub z przetwarzaniem Państwa danych
            osobowych - ponieważ przetwarzanie jest niezbędne do realizacji
            naszego prawnie uzasadnionego interesu (art. 6 ust 1 lit f RODO),
            którym jest możliwość ustalenia, dochodzenia lub obrony przed
            roszczeniami,{" "}
          </li>{" "}
        </ul>{" "}
        <br /> Przetwarzanie danych osobowych nie jest związane ze
        zautomatyzowanym podejmowaniem decyzji, w tym profilowaniu. <br />{" "}
        <strong>
          Kategorie odbiorców danych
        </strong> <br className="no-space" /> Odbiorcami Państwa danych mogą być
        podmioty z następujących kategorii:{" "}
        <ul>
          {" "}
          <li>zaufane biura nieruchomości, z którymi współpracujemy,</li>{" "}
          <li>
            {" "}
            świadczące usługi:{" "}
            <ul>
              {" "}
              <li>
                {" "}
                informatyczne np. w zakresie prowadzenia strony internetowej i
                dostępu do systemu wspomagającego zarzadzanie biurem
                nieruchomości,{" "}
              </li>{" "}
              <li>obsługi telefonicznej i elektronicznej</li>{" "}
              <li>marketingowe</li>{" "}
              <li>
                {" "}
                instytucje upoważnione na podstawie przepisów prawa np. sądy i
                organy państwowe{" "}
              </li>{" "}
            </ul>{" "}
          </li>{" "}
        </ul>{" "}
        <br />{" "}
        <strong>
          Przekazywanie danych poza Europejski Obszar Gospodarczy
        </strong>{" "}
        <br className="no-space" /> Państwa dane osobowe nie będą przekazywane
        poza Europejski Obszar Gospodarczy <br />{" "}
        <strong>Okres przechowywania danych</strong> <br className="no-space" />{" "}
        Państwa dane osobowe przechowywane będą w celu:{" "}
        <ul>
          {" "}
          <li>
            {" "}
            kontaktu z Państwem w odpowiedzi i w związku ze skorzystaniem z
            formularza kontaktowego zawartego na naszej stronie lub
            skontaktowania się z nami w inny sposób – do momentu wycofania zgody
            na przetwarzanie danych osobowych w tym celu lub zawarcia z nami
            umowy w zakresie pośrednictwa sprzedaży nieruchomości.{" "}
          </li>{" "}
          <li>
            {" "}
            ustalenia, dochodzenia lub obrony przed roszczeniami – do momentu
            przedawnienia roszczeń z tytułu umowy lub roszczeń związanych z
            przetwarzaniem danych osobowych{" "}
          </li>{" "}
          <li> marketingu bezpośredniego usług</li>{" "}
          <li>do momentu wycofania zgody na przetwarzanie danych osobowych</li>{" "}
          <li>
            {" "}
            przesyłania informacji handlowych drogą elektroniczną lub w inny
            sposób – do momentu wycofania zgody na przetwarzanie danych
            osobowych.{" "}
          </li>{" "}
          <li>
            {" "}
            przesyłania zamówionego Newslettera – do momentu wycofania zgody na
            przetwarzanie danych osobowych.{" "}
          </li>{" "}
          <li>
            {" "}
            badania preferencji odnośnie do zapotrzebowania na usługi – do
            momentu wycofania zgody na przetwarzanie danych osobowych,{" "}
          </li>{" "}
        </ul>{" "}
        <br /> <strong>Przysługujące Państwu prawa</strong>{" "}
        <ul>
          {" "}
          <li>
            {" "}
            prawo do żądania od administratora dostępu do Państwa danych
            osobowych, ich sprostowania, usunięcia lub ograniczenia
            przetwarzania.{" "}
          </li>{" "}
          <li>
            {" "}
            prawo do wniesienia sprzeciwu wobec przetwarzania, a także do
            przenoszenia danych.{" "}
          </li>{" "}
          <li>
            {" "}
            jeżeli przetwarzanie odbywa się na podstawie art. 6 ust. 1 lit. a)
            lub art. 9 ust. 2 lit. a) RODO mają Państwo prawo do cofnięcia zgody
            w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania,
            którego dokonano na podstawie zgody przed jej cofnięciem.{" "}
          </li>{" "}
          <li>
            {" "}
            jeżeli Państwa dane osobowe są przetwarzane na potrzeby marketingu
            bezpośredniego mają Państwo prawo w dowolnym momencie wnieść
            sprzeciw wobec przetwarzania dotyczących Państwa danych osobowych na
            potrzeby takiego marketingu, w tym profilowania, w zakresie, w jakim
            przetwarzanie jest związane z takim marketingiem bezpośrednim.{" "}
          </li>{" "}
          <li>
            {" "}
            prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych
            Osobowych w przypadku uznania, że przetwarzanie Państwa danych
            osobowych narusza RODO.{" "}
          </li>{" "}
        </ul>{" "}
        <br />{" "}
        <strong>
          Informacja o wymogu lub dobrowolności podania danych
        </strong>{" "}
        <br className="no-space" /> Podanie danych osobowych było/jest
        dobrowolne. Podanie wskazanie danych osobowych nie jest obowiązkiem
        ustawowym ani umownym. Brak podania danych w zakresie kontaktu z
        Państwem uniemożliwi nam kontakt zwrotny z Państwem i odpowiedź na
        zadane pytania. W przypadku braku podania numeru telefonu lub adres
        poczty elektronicznej nie będziemy mieli możliwości wysyłania Państwu
        zamówionych informacji handlowych, Newslettera lub opowiedzieć Państwu o
        naszej ofercie.{" "}
      </>
    ),
  },
  error: { not_found: "Nie znaleziono strony." },
};
