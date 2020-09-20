import React from "react";
import "./Widgets.css";

//an iframe provided by facebook for rendering adverts,your own website snaps in
// small columns on fb site
function Widgets() {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/rolex&
        tabs=timeline&
        width=340&
        height=1500&
        small_header=false&
        adapt_container_width=true&
        hide_cover=false&
        show_facepile=true&
        appId"
        title="Adverts"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Widgets;
