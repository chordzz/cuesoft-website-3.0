import React from "react";

export const TypeformButton = () => {
  const typeFormFunc = () => {
    var q,
      d = document,
      gi = d.getElementById,
      gt = d.getElementsByTagName,
      id = "typef_orm_share",
      b = "https://embed.typeform.com/";
    if (!gi.call(d, id)) {
      const js = document.createElement("script");
      js.id = id;
      js.src = b + "embed.js";
      q = gt.call(d, "script")[0];
      q.parentNode?.insertBefore(js, q);
    }
  };

  return (
    <button className="a-btn hidden md:block">
      <a
        className="typeform-share button"
        href="https://form.typeform.com/to/DEo6Wu47?typeform-medium=embed-snippet"
        data-mode="popup"
        data-size="100"
        target="_blank"
        rel="noopener noreferrer"
        onClick={typeFormFunc}
      >
        Start a Project
      </a>
    </button>
  );
};
