import { AboutAction, AboutState } from "../types/reducerTypes";

const initialState = {
  data: [
    {
      body: "We are dedicated to the community that we serve, helping our clients and shareholders grow their capital by committing people and innovative ideas to help them get much more out of life. We built Cuesoft for you to get much more.",
      info: "More about us",
    },
    {
      body: "We work hard to continually produce quality and insist on it from others. We never compromise on high standards because we believe people will appreciate you for it, and you will become the domain expert on whom your team and others can rely.",
      info: "Our Capabilities",
    },
  ],
};

export default function about(
  state: AboutState = initialState,
  action: AboutAction
) {
  switch (action.type) {
    default:
      return state;
  }
}
