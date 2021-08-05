import React, { useState } from "react";
import { searchDropdown } from "../../utils/dropdown";

function Index() {
  const [view, setView] = useState(false);
  const [vertical, setVertical] = useState("All verticals");

  return (
    <React.Fragment>
      <section className="space-wrap brand-head">
        <div className="brand-logo">
          <img src="./asset/img/woozeee.png" alt="Brand logo" />
        </div>
        <div className="search-wrap">
          <div className="w-dropdown">
            <button onClick={(e) => setView(!view)}>{vertical}</button>
            {view && (
              <div id="verticals" className="w-dropdown-content">
                {searchDropdown.map((e, i) => (
                  <a href="#" key={i}>
                    e
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
export default Index;
