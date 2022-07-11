import { Image } from "semantic-ui-react";
import Logo from "../../../assets/icons/LogoWeb.svg";
import Logo2 from "../../../assets/icons/LogoWebDark.svg";
import { Footer1Props } from "../../../types/componentTypes";
import { MailchimpModal } from "../../MailchimpForm/index"

function Footer1({ darkMode }: Footer1Props) {
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
    <div style={{ paddingBottom: "30px" }}>
      <Image
        className="brand"
        src={darkMode ? Logo2 : Logo}
        alt="logo"
        size="small"
        inline
      />
      <h3
        style={{
          color: darkMode ? "#ffffff" : "#474646",
        }}
      >
        Let's get started
      </h3>
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
        Hire Experts
      </a>
      <MailchimpModal />
    </div>
  );
}

export default Footer1;
