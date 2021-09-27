const initialState = {
  data: [
    {
      Address:
        "39 Alfred Rewane Road, 3rd & 7th Floors, Mulliner Towers, Lagos, 101233, Nigeria",
      Phone: "+234 902 650 9478",
      Tel: "+1 408 495 2909",
      Email: "hello@cuesoft.io",
    },
  ],
};

export default function footerDetails(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
