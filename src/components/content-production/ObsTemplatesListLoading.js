import React from "react";

function ObsTemplatesListLoading(Component) {
  return function ObsTemplatesListLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: "center", fontSize: "30px" }}>
        Fetching template data... This may take some time...
      </p>
    );
  };
}
export default ObsTemplatesListLoading;
