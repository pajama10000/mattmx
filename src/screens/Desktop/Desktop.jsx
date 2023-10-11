import React from "react";
import { LogosJavascript } from "../../components/LogosJavascript";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <img className="image" alt="Image" src="/img/image-48.png" />
      <div className="group">
        <div className="overlap-group">
          <div className="text-wrapper">Who AM I?</div>
          <div className="div">About me!</div>
        </div>
      </div>
      <p className="hey-i-m-mattmx-a">
        <span className="span">
          Hey! I&#39;m MattMX, a developer fluent in Java, Kotlin, JS, and more. I mainly focus on Minecraft libraries
          and plugins, alongside small general projects. I&#39;m currently learning Rust in the hopes to add to my
          collection of known languages.You can check out my projects{" "}
        </span>
        <span className="text-wrapper-2">Here</span>
        <span className="text-wrapper-3">.</span>
      </p>
      <div className="group">
        <div className="overlap-group">
          <div className="text-wrapper">PROJECTS</div>
          <div className="text-wrapper-4">MY WORK</div>
        </div>
      </div>
      <div className="group-2">
        <div className="overlap-group-wrapper">
          <div className="overlap-group-2">
            <p className="pvphub-owner-pvphub">
              PvPHub Owner
              <br />
              <br />
              PvPHub is a 1.17+ Minecraft PvP server aimed at providing a playerbase with the best experiencethat
              Vanilla pvp can offer.
            </p>
            <img className="img" alt="Image" src="/img/image-30.png" />
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-group-2">
            <p className="cloaksplus-developer">
              CloaksPlus Developer
              <br />
              <br />
              The ultimate character customization tool for Minecraft. Flex on the noobs like never before.
            </p>
            <img className="image-2" alt="Image" src="/img/image-12.png" />
          </div>
        </div>
      </div>
      <div className="text-wrapper-5">CONTACT ME</div>
      <img
        className="please-contact-me"
        alt="Please contact me"
        src="/img/please-contact-me-via-email-for-any-business-enquiries-you-can.svg"
      />
      <div className="text-wrapper-6">Contact</div>
      <div className="group-3">
        <LogosJavascript className="logos-javascript-original" />
        <img className="group-4" alt="Group" src="/img/group-155.png" />
        <img className="frame" alt="Frame" src="/img/frame.svg" />
        <img className="frame-2" alt="Frame" src="/img/frame-1.svg" />
      </div>
    </div>
  );
};
