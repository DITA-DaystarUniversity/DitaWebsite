import Header from "/src/header/homepage_header.jsx";

function homepage_layout({ children }) {
  return (
    <>
      <Header></Header>
      <div>{children}</div>
    </>
  );
}

export default homepage_layout;
