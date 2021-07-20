const initialState = {
  data: [
    {
      body: "We are a remote company, we are project managers, we outsource our developers to join your team but we still remain the project managers. Project can be web, mobile and enterprise (we decide which tool to use)",
      info: "More about us",
      // path: "/about",
    },
    {
      body: "Once you have a brilliant idea, we can work with you on a game plan, create a gorgeous logo and style guide, design a beautiful, functional app, turn it into high-performance code and then help people find out about it.",
      info: "Our Capabilities",
      // path: "/services",
    },
  ],
};

export default function about(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
