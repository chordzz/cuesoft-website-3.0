import LocationLight from "../assets/icons/location1.svg";
import LocationDark from "../assets/icons/location2.svg";
import MailLight from "../assets/icons/mail1.svg";
import MailDark from "../assets/icons/mail2.svg";
import QuestionLight from "../assets/icons/question1.svg";
import QuestionDark from "../assets/icons/question2.svg";
import { ContactAction, ContactState } from "../types/reducerTypes";

const initialState = {
  data: [
    {
      lightImg: LocationLight,
      darkImage: LocationDark,
      title: "Address",
      body: "Address: 26A Lewis Street, Asiwaju House, 1st Floor, Lagos Island, Lagos NG.",
    },
    {
      lightImg: MailLight,
      darkImage: MailDark,
      title: "Get in touch",
      body: [
        "Give us a call: +234 9026509478",
        "Opening Hours: 9am - 5pm",
        "Email us: support@cuesoft.io",
      ],
    },
    {
      lightImg: QuestionLight,
      darkImage: QuestionDark,
      title: "Have questions?",
      body: "Being a software development company, we understand that every enterprise has a different software requirement and therefore, we provide custom software development services to meet their expectations.",
    },
  ],
};

export default function locationData(
  state: ContactState = initialState,
  action: ContactAction
) {
  switch (action.type) {
    default:
      return state;
  }
}
