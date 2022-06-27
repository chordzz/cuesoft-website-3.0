import { ApproachAction, ApproachState } from "../types/reducerTypes";

const initialState = {
  data: [
    {
      title: "01. Analyse",
      summary:
        "Our design approach is to simplify. We embrace the joy that comes from making something that was complicated easy.",
      body: "According to Investopedia, 90% of startups have failed and more than half have failed within the first two years. The growing need for costly advanced technology and the lack of access to the right technology needed to manage the various business processes that SMEs need to meet the needs of today`s connected world.",
      image_type: "Analyse",
    },
    {
      title: "02. Design",
      summary:
        "Our design approach is to simplify. We embrace the joy that comes from making something that was complicated easy.",
      body: "Our design approach is to simplify. We embrace the joy that comes from making something that was complicated, easy. We like to take your brand back to its absolute essence. What are the questions you like to ask, and why? We like to peel back the onion, and pick your brain for a while. Bold ideas take commitment, so we tailor every message and interaction to assure consistency.",

      image_type: "Design",
    },
    {
      title: "03. Build",
      summary:
        "Our design approach is to simplify. We embrace the joy that comes from making something that was complicated easy.",
      body: "By partnering with startups to build MVPs at low cost, and by providing technical services and building tools for companies to use them, there are two ways to go about the problem, costly advanced technology, and the right business. Work on access to the tool of the 21st century. Cuesoft has full control over this SaaS platform and reduces maintenance costs.",

      image_type: "Build",
    },
    {
      title: "04. Evolve",
      summary:
        "Our design approach is to simplify. We embrace the joy that comes from making something that was complicated easy.",
      body: "Cuesoft Cloud Limited works with small businesses and startups to develop the right and affordable technology for their needs, resulting in overall success, and we are committed to assisting at least 1000 businesses and startups in our first year of operation.",

      image_type: "Evolve",
    },
  ],
};

export default function approach(
  state: ApproachState = initialState,
  action: ApproachAction
) {
  switch (action.type) {
    default:
      return state;
  }
}
