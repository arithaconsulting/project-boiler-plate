import React from "react";

function HomeComponent() {
  return (
    <div className="App">
      <React.Suspense fallback="Loading Layout">
        <section>Home component</section>
      </React.Suspense>
    </div>
  );
}

export default HomeComponent;
