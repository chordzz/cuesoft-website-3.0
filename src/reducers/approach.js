const initialState = {
  data: [
    {
      title: "01. Analyse",
      body:
        "Our design approach is to simplify. We embrace the joy that comes from making something that was complicated easy.",
    },
    {
      title: "02. Design",
      body:
        "Our design approach is to simplify. We embrace the joy that comes from making something that was complicated easy.",
    },
    {
      title: "03. Build",
      body:
        "Our design approach is to simplify. We embrace the joy that comes from making something that was complicated easy.",
    },
    {
      title: "04. Evolve",
      body:
        "Our design approach is to simplify. We embrace the joy that comes from making something that was complicated easy.",
    },
  ],
};

export default function approachData(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
