import { EmployeeProps } from "./components/pages/index/Sections/OurEmployees/Employee/Employee";
interface ContentType {
  navigation: {
    logo_text: string;
  };
  home: {
    welcome: string;
    subtitle: string;
    call_to_action: string;
  };
  content: {
    title: string;
    content: string;
  };
  ourEmployees: {
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
  navigation: {
    logo_text: "nieruchomosci-waw.com",
  },
  home: {
    welcome: "Witaj!",
    subtitle:
      "Poszukujesz domu lub mieszkania? Dobrze trafiłeś! Kliknij przycisk poniżej i wybierz, gdzie będziesz mieszkał.",
    call_to_action: "Przejdź do wyszukiwarki",
  },
  content: {
    title: "O firmie",
    content: `
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam nulla, accumsan nec augue
			ultrices, aliquam malesuada nibh. Fusce arcu ante, blandit ut hendrerit vitae, eleifend vel
			lorem.
		`,
  },
  ourEmployees: {
    title: "Nasi pracownicy",
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
      {
        title: "Jan Kowalski 2",
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
  footer: {
    companyData: "Dane firmy",
    informations: [
      { title: "email", content: "biuro@nieruchomosci-waw.com" },
      { title: "telefon", content: "+48 123 456 789" },
      { title: "adres firmy", content: "ul. Marszałkowska 1, 00-026 Warszawa" },
      { title: "nip", content: "5213849986" },
      { title: "regon", content: "382028956" },
      { title: "krs", content: "0000745671" },
    ],
  },
  error: {
    not_found: "Nie znaleziono strony.",
  },
};
