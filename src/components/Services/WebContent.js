import React from "react";

function WebContent({ darkMode }) {
  return (
    <div
      style={{
        paddingTop: "50px",
      }}
    >
      <h3
        style={{
          color: darkMode ? "#F4B400" : "#db4437",
        }}
      >
        Web Development
      </h3>
      <p>
        Cuesoft does not just help you curate your website to perfection, we
        stay on top of the latest standards to ensure that your website remains
        current and relevant as well as provide you with updates and maintenance
        as new devices and browsers change how sites are accessed and displayed.
      </p>
      <p>
        Our experts have complete mastery of parsing and rendering - or the way
        that browsers translate code and display it on your screen. They know
        that these browser differences can make it tricky for you to create a
        website that provides a great experience for everyone. Thier experience
        comprehensively covers HTML and CSS standards, browser issues and the
        ways to work around potential hurdles
      </p>
      <p>
        We also recognize that the beauty of your website does not guarantee
        that anyone is going to look at it, so we code in such a way that your
        website reaches the majority of the relevant audience a lot more easily.
        We do this by adhering to coding best practices and ensuring that the
        foundation of your site is in good standing with search engines.
      </p>
      <p>
        When it comes to multimedia content, we understand that it can either
        engage visitors or drive them away, so in preparing your website, we use
        images and videos that are optimized to suit your website, thereby
        ensuring rich multimedia content and speed
      </p>
      <p>
        Cuesoft also help you create a responsive design that enables great
        flexibility. Your website would be able to resize and reflow their
        layout based on the visitor's screen size and gives them a consistent
        experience. From large screen, high resolution monitors, all the way to
        the smallest smartphone touch screens, we provide you with an experience
        that is suited to each of those individual devices.
      </p>
    </div>
  );
}

export default WebContent;
