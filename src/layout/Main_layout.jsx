import Header from "/src/header/header.jsx";

function Main_layout({ children }) {
  return (
    <>
      <Header></Header>
      <div>{children}</div>
    </>
  );
}

export default Main_layout;
