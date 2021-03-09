const initialState = {
  data: [
    {
      para1: `You agree that all matters relating to or use of the site, including all disputes, will be governed by the laws of the
            federation of Nigeria without regards to its conflict of law.`,
    },
  ],
};

export default function terms(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
