import FacebookLogo from "./assets/images/facebook.png";
import Favicon from "./assets/images/favicon.png";
import InstagramLogo from "./assets/images/instagram.png";
import NavLogo from "./assets/images/nav_logo.png";
import OtodomLogo from "./assets/images/otodom.png";
import { EmployeeProps } from "./components/pages/index/Sections/OurEmployees/Employee/Employee";
import { RouteOnlyProps } from "./interfaces and types/RouteType";

interface ContentType {
  siteName: string;
  head: {
    description: string;
    logo: string;
  };
  navigation: {
    logoImage?: string;
  };
  utils: {
    next: string;
    back: string;
    reset: string;
  };
  home: {
    route: RouteOnlyProps;
    welcome: string;
    subtitle: string;
    call_to_action: string;
  };
  about: {
    route: RouteOnlyProps;
    content: string;
    image: string;
  };
  guideForSellers: {
    route: RouteOnlyProps;
    steps: Record<string, string | JSX.Element>;
  };
  ourEmployees: {
    route: RouteOnlyProps;
    employees: EmployeeProps[];
  };
  footer: {
    route: RouteOnlyProps;
    sectionTitle: string;
    companyData: string;
    contactForm: string;
    privacyPolicyConsent: [string, string];
    informations: { title: string; content: string }[];
    socialLinks: { image: string; alt: string; href: string }[];
  };
  privacyPolicy: {
    route: RouteOnlyProps;
    content: string;
  };
  offers: {
    route: RouteOnlyProps;
  };
  error: {
    not_found: string;
  };
}

export const Content: ContentType = {
  siteName: "Biuro Nieruchomości Magnum",
  head: {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing el",
    logo: Favicon,
  },
  navigation: {
    logoImage: NavLogo,
  },
  utils: {
    next: "Następny",
    back: "Poprzedni",
    reset: "Od nowa",
  },
  home: {
    route: {
      routeName: "/",
      displayName: "Home",
    },
    welcome: "Witaj!",
    subtitle:
      "Poszukujesz domu lub mieszkania? Dobrze trafiłeś! Kliknij przycisk poniżej i wybierz, gdzie będziesz mieszkał.",
    call_to_action: "Przejdź do wyszukiwarki",
  },
  offers: {
    route: {
      displayName: "Oferty",
      routeName: "/wyszukiwarka-ofert/[[...offerName]]",
    },
  },
  guideForSellers: {
    route: {
      routeName: "/#dla-sprzedajacych",
      displayName: "Dla sprzedających",
    },
    steps: {
      "Skontaktuj się z nami":
        "Powiedz jaką nieruchomość posiadasz do sprzedania i umów się na spotkanie. Przyjedzie do Ciebie Agent działający w Twojej okolicy. Będziesz mieć pewność, że nie trafisz na przypadkowego doradcę, ale na specjalistę znającego dobrze rejon swojego działania.",
      "Przebieg spotkania": (
        <>
          Doradca:
          <ul>
            <li>
              przedstawi Ci raport na temat cen transakcyjnych oraz zaproponuje
              przedział cenowy, dzięki któremu dowiesz się, ile naprawdę może
              być warta Twoja nieruchomość
            </li>
            <li>ustali z Tobą realną cenę wyjściową sprzedaży</li>
            <li>
              przedstawi Ci plan marketingowy sprzedaży Twojej nieruchomości
            </li>
            <li>
              zrobi zdjęcia nieruchomości lub przedyskutuje temat home stagingu
              (czyli profesjonalnego przygotowania nieruchomości do zdjęć i
              sprzedaży) i umówi profesjonalną sesję zdjęciową
            </li>
            <li>podpisze z Tobą umowę pośrednictwa</li>
            <li>
              zapyta o stan prawny nieruchomości oraz zbierze jak najwięcej
              informacji o nieruchomości, by móc jak najlepiej przedstawić ją
              przyszłym klientom.
            </li>
          </ul>
        </>
      ),
      "Współpraca na wyłączność":
        "Najbardziej skuteczną formą współpracy z agencją nieruchomości jest powierzenie sprzedaży nieruchomości tylko jednemu pośrednikowi. Dzięki temu masz pełną kontrolę nad sprzedażą i masz pewność, że pośrednik dokona wszelkich starań, by pomóc ci w sprzedaży. Dodatkowo zakres czynności proponowany przez pośrednika jest znacznie szerszy niż w przypadku umowy otwartej.",
    },
  },
  ourEmployees: {
    route: {
      routeName: "/#nasi-pracownicy",
      displayName: "Nasi pracownicy",
    },
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
    route: {
      routeName: "/#o-firmie",
      displayName: "O firmie",
    },
    content: `
      Jesteśmy profesjonalnym biurem nieruchomości. Każda z naszych ofert jest rzetelnie sprawdzana, aby zapenić Państwu pełne bezpieczeństwo i wygodę. Mamy doświadczenie w branży nieruchomości, odpowiednią wiedzę oraz zamiłowanie do pomagania ludziom.
    `,
    image:
      "https://dompp.pl/wp-content/uploads/2018/07/Projekt-domu-House-21-DomPP.pl-1.jpg",
  },
  footer: {
    route: {
      routeName: "/#kontakt",
      displayName: "Kontakt",
    },
    sectionTitle: "Kontakt z nami",
    companyData: "Dane firmy",
    contactForm: "Formularz kontaktowy",
    privacyPolicyConsent: ["Akceptuję", "Politykę Prywatności"],
    informations: [
      { title: "email", content: "magda@bnmagnum.pl" },
      { title: "telefon", content: "+48 666 098 777" },
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
  },
  privacyPolicy: {
    route: {
      displayName: "Polityka Prywatności",
      routeName: "/polityka-prywatnosci",
    },
    content: `Polityka prywatności jest realizowana zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (określane jako „RODO”).

<strong>Administrator danych osobowych</strong>
Administratorem Państwa danych osobowych, jest Magnum Nieruchomości Magdalena Czyściakow, NIP 8271403139.

<strong>Dane kontaktowe w sprawie przetwarzania danych osobowych</strong>
W sprawach związanych z przetwarzaniem Państwa danych osobowych prosimy skontaktować się z Administratorem:
- mailowo: magda@bnmagnum.pl
- telefonicznie: 666 098 777

Rodzaj przetwarzanych danych osobowych:
- imię
- nazwisko
- adres e-mail
- numer telefonu

Jeżeli zostaną nam udostępnione, będziemy przetwarzali Państwa następujące dane osobowe (są to dane które podali Państwo w formularzu kontaktowym zawartym na naszej stronie internetowej)
- imię
- nazwisko
- adres e-mail
- numer telefonu

<strong>Źródło pozyskania danych osobowych</strong>
Państwa dane osobowe otrzymaliśmy od Państwa w momencie skorzystania przez Państwa z formularza zapytania na naszej stronie internetowej lub zapisania się na Newsletter.

<strong>Cel przetwarzania danych, podstawa prawna oraz prawnie uzasadnione interesy</strong>
Państwa dane osobowe są przetwarzane w celu:
- kontaktu z Państwem i przekazaniu Państwu wnioskowanych informacji w związku z naszą działalnością oraz skorzystaniem przez Państwa z formularza kontaktowego zawartego na naszej witrynie, w tym informowania Państwa o naszej ofercie (art. 6 ust. 1 lit a RODO)
- marketingu bezpośredniego usług, ponieważ przetwarzanie jest niezbędne do realizacji naszego prawnie uzasadnionego interesu (art. 6 ust 1 lit f RODO), którym jest możliwość realizacji marketingu bezpośredniego, dodatkowo podstawą prawną przetwarzania danych osobowych w tym celu jest Państwa zgoda na to przetwarzanie (art. 6 ust. 1 lit a RODO) udzielona przed tym przetwarzaniem.
- przesyłania informacji handlowej drogą elektroniczną, w tym przypadku podstawą prawną przetwarzania danych osobowych w tym celu jest Państwa zgoda na to przetwarzanie danych osobowych w tym celu (art. 6 ust. 1 lit a RODO) udzielona przed tym przetwarzaniem.
- przesyłania Państwu zamówionego Newslettera - w tym przypadku podstawą prawną przetwarzania danych osobowych w tym celu jest Państwa zgoda na to przetwarzanie (art. 6 ust. 1 lit a RODO) udzielona przed tym przetwarzaniem
- badania preferencji odnośnie zapotrzebowania na usługi w zakresie naszego przedmiotu działalności - ponieważ przetwarzanie jest niezbędne do realizacji naszego prawnie uzasadnionego interesu (art. 6 ust 1 lit f RODO), którym jest możliwość ustalenia katalogu usług dla Państwa interesujących,
- ustalenia, dochodzenia lub obrony przed roszczeniami, związanymi z zawartą z Państwem umową lub z przetwarzaniem Państwa danych osobowych - ponieważ przetwarzanie jest niezbędne do realizacji naszego prawnie uzasadnionego interesu (art. 6 ust 1 lit f RODO), którym jest możliwość ustalenia, dochodzenia lub obrony przed roszczeniami,

Przetwarzanie danych osobowych nie jest związane ze zautomatyzowanym podejmowaniem decyzji, w tym profilowaniu.

<strong>Kategorie odbiorców danych</strong>
Odbiorcami Państwa danych mogą być podmioty z następujących kategorii:
- zaufane biura nieruchomości, z którymi współpracujemy,
- świadczące usługi:
  - informatyczne np. w zakresie prowadzenia strony internetowej i dostępu do systemu wspomagającego zarzadzanie biurem nieruchomości,
  - obsługi telefonicznej i elektronicznej
  - marketingowe,
  - instytucje upoważnione na podstawie przepisów prawa np. sądy i organy państwowe

<strong>Przekazywanie danych poza Europejski Obszar Gospodarczy</strong>
Państwa dane osobowe nie będą przekazywane poza Europejski Obszar Gospodarczy

<strong>Okres przechowywania danych</strong>
Państwa dane osobowe przechowywane będą w celu:
- kontaktu z Państwem w odpowiedzi i w związku ze skorzystaniem z formularza kontaktowego zawartego na naszej stronie lub skontaktowania się z nami w inny sposób – do momentu wycofania zgody na przetwarzanie danych osobowych w tym celu lub zawarcia z nami umowy w zakresie pośrednictwa sprzedaży nieruchomości.
- ustalenia, dochodzenia lub obrony przed roszczeniami – do momentu przedawnienia roszczeń z tytułu umowy lub roszczeń związanych z przetwarzaniem danych osobowych
- marketingu bezpośredniego usług
– do momentu wycofania zgody na przetwarzanie danych osobowych,
- przesyłania informacji handlowych drogą elektroniczną lub w inny sposób – do momentu wycofania zgody na przetwarzanie danych osobowych.
- przesyłania zamówionego Newslettera – do momentu wycofania zgody na przetwarzanie danych osobowych.
- badania preferencji odnośnie do zapotrzebowania na usługi – do momentu wycofania zgody na przetwarzanie danych osobowych,

<strong>Przysługujące Państwu prawa</strong>
- prawo do żądania od administratora dostępu do Państwa danych osobowych, ich sprostowania, usunięcia lub ograniczenia przetwarzania.
- prawo do wniesienia sprzeciwu wobec przetwarzania, a także do przenoszenia danych.
- jeżeli przetwarzanie odbywa się na podstawie art. 6 ust. 1 lit. a) lub art. 9 ust. 2 lit. a) RODO mają Państwo prawo do cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem.
- jeżeli Państwa dane osobowe są przetwarzane na potrzeby marketingu bezpośredniego mają Państwo prawo w dowolnym momencie wnieść sprzeciw wobec przetwarzania dotyczących Państwa danych osobowych na potrzeby takiego marketingu, w tym profilowania, w zakresie, w jakim przetwarzanie jest związane z takim marketingiem bezpośrednim.
- prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych w przypadku uznania, że przetwarzanie Państwa danych osobowych narusza RODO.

<strong>Informacja o wymogu lub dobrowolności podania danych</strong>
Podanie danych osobowych było/jest dobrowolne. Podanie wskazanie danych osobowych nie jest obowiązkiem ustawowym ani umownym. Brak podania danych w zakresie kontaktu z Państwem uniemożliwi nam kontakt zwrotny z Państwem i odpowiedź na zadane pytania. W przypadku braku podania numeru telefonu lub adres poczty elektronicznej nie będziemy mieli możliwości wysyłania Państwu zamówionych informacji handlowych, Newslettera lub opowiedzieć Państwu o naszej ofercie.
`,
  },
  error: {
    not_found: "Nie znaleziono strony.",
  },
};
