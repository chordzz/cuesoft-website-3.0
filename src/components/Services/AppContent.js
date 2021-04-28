import React from "react";

function AppContent({ darkMode }) {
  return (
    <div>
      <h3
        style={{
          color: darkMode ? "#F4B400" : null,
        }}
      >
        Mobile App Development
      </h3>
      <p>
        With the exploding popularity of smartphones and tablets, mobile
        application development is becoming an increasingly popular medium of
        software creation. This prolific and growing industry is attracting
        businesses from every corner of the marketplace looking for returns, and
        we at Cuesoft are willing, able and ready to bring your perfect mobile
        app to life.
      </p>
      <p>
        At Cuesoft, we understand that mobile applications are intended to
        utilize the unique features and hardware of mobile devices and we design
        your mobile apps to be supremely functional in tandem with the full
        range of device features. All kinds of devices.
      </p>
      <p>
        With us, you need not worry about the performance or device nativity, as
        our team of experts have all it takes to provide you premium
        satisfaction as well as an efficient and seamless user experience. Be
        they native apps, hybrid apps, HTML5 apps, we've got you covered.
      </p>
      <p>
        Mobile application development is changing constantly. Typically, every
        six months or so, a new version of an operating system rolls out with
        unique features that mobile apps can utilize. At Cuesoft, our developers
        would gladly try multiple solutions to find the one that suits your
        needs, as well as help you to keep up with development updates.
      </p>
    </div>
  );
}

export default AppContent;
