import Favicon from "./assets/images/favicon.png";
import NavLogo from "./assets/images/nav_logo.png";
import { EmployeeProps } from "./components/pages/index/Sections/OurEmployees/Employee/Employee";

interface ContentType {
  siteName: string;
  head: {
    description: string;
    logo: string;
  };
  navigation: {
    logoImage?: string;
  };
  home: {
    welcome: string;
    subtitle: string;
    call_to_action: string;
  };
  about: {
    title: string;
    content: string;
    image: string;
  };
  ourEmployees?: {
    title: string;
    employees: EmployeeProps[];
  };
  footer: {
    companyData: string;
    informations: { title: string; content: string }[];
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
  home: {
    welcome: "Witaj!",
    subtitle:
      "Poszukujesz domu lub mieszkania? Dobrze trafiłeś! Kliknij przycisk poniżej i wybierz, gdzie będziesz mieszkał.",
    call_to_action: "Przejdź do wyszukiwarki",
  },
  about: {
    title: "O firmie",
    content: `
      Jesteśmy profesjonalnym biurem nieruchomości. Każda z naszych ofert jest rzetelnie sprawdzana, aby zapenić Państwu pełne bezpieczeństwo i wygodę. Mamy doświadczenie w branży nieruchomości, odpowiednią wiedzę oraz zamiłowanie do pomagania ludziom.
    `,
    image:
      "https://dompp.pl/wp-content/uploads/2018/07/Projekt-domu-House-21-DomPP.pl-1.jpg",
  },
  footer: {
    companyData: "Dane firmy",
    informations: [
      { title: "email", content: "biuro@nieruchomosci-waw.com" },
      { title: "telefon", content: "+48 666 098 777" },
      { title: "nip", content: "8271403139" },
      { title: "regon", content: "731027929" },
    ],
  },
  error: {
    not_found: "Nie znaleziono strony.",
  },
};
