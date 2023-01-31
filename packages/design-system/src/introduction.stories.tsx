import React from "react";

export default {
  title: "Introduction",
};

export function Introduction() {
  return (
    <div
      style={{
        display: "flex",
        "flex-direction": "column",
        "font-family": "var(--ads-v2-font-family)",
      }}
    >
      <h1>Appsmith Design System</h1>
      <p>
        You've reached the page of a trimmed, improved, more consistent design
        system. The components you see here are not yet available on the
        appsmith product, but will be by the end of February.
      </p>
      <p>
        If you're looking for components currently used in production, they are
        available at
        <br />
        <a target="_blank" href="https://design-system.appsmith.com/old">
          design-system.appsmith.com/old
        </a>
        <br /> Please be warned that these components will be{" "}
        <strong>deprecated started March 1st, 2023</strong>. If you're looking
        for a components for use in a project that goes live after that, please
        contact the design-system pod and we will see what we can do for you!
      </p>
    </div>
  );
}
