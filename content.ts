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
  privacyPolicy: {
    content: string;
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
      { title: "email", content: "magda@bnmagnum.pl" },
      { title: "telefon", content: "+48 666 098 777" },
      { title: "nip", content: "8271403139" },
      { title: "regon", content: "731027929" },
    ],
  },
  privacyPolicy: {
    content: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quaerat? Eveniet mollitia voluptate exercitationem recusandae doloremque, sit deleniti assumenda incidunt architecto officia placeat accusamus quis soluta consequuntur unde est non nulla sapiente rerum, reprehenderit beatae. Dolorem repudiandae vel corporis molestiae cum. Et ullam nulla eaque quos nostrum minima illo libero, necessitatibus natus magnam consequuntur iste? Adipisci aliquam accusamus sunt vitae quaerat recusandae sint quo at cum dolore tenetur, ad neque? Expedita, optio quia. Est, dolorem! Nobis, quod dolorem nihil asperiores commodi, aliquid incidunt porro explicabo illum expedita odit magni sed fuga at velit enim iure? Impedit, itaque atque? Quod nesciunt soluta voluptatum ipsa beatae alias deleniti fugit aliquid ea consectetur magnam, nostrum quibusdam necessitatibus optio ipsum placeat reiciendis. Cumque illo perspiciatis quam eveniet libero consequuntur aliquid? Corrupti dicta sequi quaerat deleniti recusandae aperiam illo numquam exercitationem doloribus consectetur consequatur, alias laborum nostrum, modi illum excepturi sunt praesentium iusto necessitatibus deserunt ipsa cumque vitae dignissimos nemo. Nemo minima aliquid, quis dolorum modi eius. Harum aut qui aperiam alias iste sit, nam, ab quia soluta totam unde, architecto deserunt? Fugiat, earum. Corporis assumenda aut laboriosam voluptas a dolor, ab ullam dolore libero, autem laborum quibusdam! Maiores incidunt quam dolore nostrum cupiditate. Iste numquam sint culpa pariatur veritatis nam dicta rerum aliquam accusamus harum fugit, porro ipsam similique sunt dolorum animi ducimus asperiores hic aliquid nihil suscipit? Eius tempora praesentium dignissimos natus esse distinctio, delectus ipsam voluptate labore pariatur libero dolorum adipisci laboriosam, placeat dolorem fugit ad? Eaque nam quaerat excepturi corporis est tempore, accusamus iusto temporibus explicabo reiciendis provident. Obcaecati pariatur itaque, maiores ad suscipit sit harum adipisci distinctio? Blanditiis voluptatem adipisci repudiandae a, odit, dolore, officiis eius corrupti delectus quisquam natus similique aspernatur dolorum cumque. Dolores, ab. Esse deleniti voluptatibus labore, officia atque corporis reiciendis nulla veritatis recusandae sunt! Perspiciatis dicta amet deleniti similique modi? Nobis quidem illum ipsum nesciunt sunt molestias voluptates dolores iusto, ratione iure suscipit nemo nam laborum numquam. Placeat ipsum a impedit nam alias eligendi cupiditate dolores, natus sed fugit porro asperiores facilis harum unde repellendus dicta saepe hic quo laboriosam quia adipisci provident. Architecto sit fugiat vitae cupiditate delectus. Eveniet nihil molestiae quibusdam, qui deleniti ut. Itaque ducimus delectus adipisci et, temporibus quas esse quae a possimus vitae ratione? Laborum eum ea minus vero atque cum eveniet sint facilis sequi, veritatis sit qui architecto quidem odio provident delectus dicta aliquid possimus fugiat quos minima quo! Exercitationem tempora natus quaerat libero corporis consectetur et non vitae consequuntur! Quos molestiae quibusdam, blanditiis hic modi, harum minus eveniet autem voluptatibus commodi animi iure pariatur, consequuntur at ex rerum culpa! Culpa voluptatum adipisci impedit saepe ea fuga reiciendis, magnam sequi cupiditate amet earum ad quis consequatur fugit hic. Placeat temporibus quae repudiandae nisi illum, quasi sequi alias voluptates eveniet. Similique, quidem, necessitatibus nihil corrupti possimus quae quam ex, magni suscipit sed delectus. Provident repellat nostrum, et odit facilis exercitationem sit vitae facere aperiam saepe quo nemo similique est cumque distinctio autem non ex incidunt magni. Perspiciatis impedit reprehenderit ex deleniti ipsam, neque molestias odio. Molestias ut quo debitis ullam, neque nisi obcaecati dicta nostrum totam sint pariatur eius dignissimos mollitia magni quasi quibusdam in deserunt at natus adipisci eos. Perspiciatis dicta quo sit dolorum eaque rem sunt similique sequi asperiores debitis, voluptates libero dolores eius, unde consectetur eos natus ea ratione magni facere, ut fugiat aliquam molestias aspernatur. Exercitationem suscipit, tempore quas atque non ratione nostrum temporibus. Consequatur aspernatur culpa molestias, atque recusandae voluptas soluta corrupti pariatur repudiandae exercitationem, vel nemo unde quisquam veniam architecto. Ullam, aliquid odio nam ipsum aspernatur eveniet fugit! Neque doloribus sed aliquam in molestiae. Distinctio voluptatum necessitatibus delectus magni, maxime doloremque vel earum error laudantium expedita? Magni accusantium pariatur exercitationem veniam consequatur recusandae neque tempore animi eum, voluptas expedita, natus rerum. Beatae dignissimos accusantium, voluptates asperiores nobis pariatur quos cumque in sed ratione nihil officia? Dolores quod voluptas ea, at, cum quo quas asperiores placeat odio ipsum praesentium quaerat reprehenderit voluptates. Vel, molestiae distinctio dignissimos quisquam aperiam repellat ipsa eum, molestias, numquam qui vero ex dicta! Aperiam suscipit maiores nemo perspiciatis eligendi, in beatae temporibus odit expedita! Asperiores minus error amet magni qui debitis facilis eius ab quae adipisci perferendis similique temporibus, ex nulla? Quia quod nihil corporis reprehenderit dolorem autem dolor soluta inventore! Eligendi id impedit sunt, iusto aliquam autem incidunt, similique, odio magni error provident praesentium perferendis officia minus velit atque tempora ipsum ad deleniti reprehenderit tempore adipisci accusantium omnis? Corporis repellendus ullam deleniti itaque vel ut nam explicabo ipsam eveniet laudantium iusto distinctio voluptatum eius quis quam nemo, error illo dolorem libero necessitatibus tenetur deserunt maxime? Quia pariatur officia nobis modi laborum beatae tempore saepe error dolorum magni laudantium molestiae inventore aut ullam, accusantium aspernatur quo. Saepe necessitatibus nam, animi ipsa delectus modi molestiae facere, similique excepturi, voluptate ut facilis incidunt asperiores explicabo perferendis dignissimos perspiciatis voluptatum quisquam commodi porro ab corrupti accusantium cum. Voluptatem exercitationem sunt sapiente ea ratione inventore error facere. At nisi nemo amet id minus quo cupiditate, assumenda incidunt, adipisci eum voluptas officiis ducimus temporibus alias et sit vel nam numquam error deleniti non? Totam autem nam voluptatem culpa, nemo facere quia, architecto facilis nihil accusamus obcaecati consectetur quos? Quidem molestias beatae neque voluptates? Quos ab atque totam iste labore quasi illum dolore aut voluptatem tempore, accusamus distinctio at. Distinctio iure assumenda quos quisquam nam velit soluta libero non corrupti amet sed, ducimus quas alias placeat fuga at deserunt illum ad. Ipsam sed aliquid iusto dignissimos expedita assumenda!`,
  },
  error: {
    not_found: "Nie znaleziono strony.",
  },
};
