import React from "react";

function MobileFooter1({ darkMode }) {
  const typeFormFunc = () => {
    var js,
      q,
      d = document,
      gi = d.getElementById,
      ce = d.createElement,
      gt = d.getElementsByTagName,
      id = "typef_orm_share",
      b = "https://embed.typeform.com/";
    if (!gi.call(d, id)) {
      js = ce.call(d, "script");
      js.id = id;
      js.src = b + "embed.js";
      q = gt.call(d, "script")[0];
      q.parentNode.insertBefore(js, q);
    }
  };
  return (
    <div style={{ paddingBottom: "30px", textAlign: "center" }}>
      <h2
        style={{ color: darkMode ? "#ffffff" : "#474646", paddingTop: "5px" }}
      >
        Let's get started
      </h2>
      <p style={{ color: darkMode ? "#ffffff" : "#474646", paddingTop: "5px" }}>
        Let us show you what responsive, reliable and accountable software
        support looks like in today's world, as well as give you a glimpse of
        future
      </p>
      <a
        className="typeform-share button"
        href="https://form.typeform.com/to/DEo6Wu47?typeform-medium=embed-snippet"
        data-mode="popup"
        data-size="100"
        target="_blank"
        rel="noopener noreferrer"
        onClick={typeFormFunc}
        style={{
          color: darkMode ? "#000000" : "#ffffff",
          backgroundColor: darkMode ? "yellow" : "#db4437",
        }}
      >
        Start a Project
      </a>
    </div>
  );
}

export default MobileFooter1;
