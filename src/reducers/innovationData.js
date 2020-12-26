const initialState = {
  data: [
    {
      body: `We are a remote company, we are project managers, we outsource our developers to join your tea
        but we still remain the project managers. Project can be web, mobile and enterprise (we decide which tool to use)`,
      info: `More about us`,
    },
    {
      body: `Once you have a brilliant idea, we can work with you on a gameplan, create a gorgeous logo and styleguide,
        design a beautiful, functional app, turn it into high-performance code and then help people find out about it.`,
      info: `Our Capabilities`,
    },
  ],
};

export default function innovationData(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
