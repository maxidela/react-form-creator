import React from "react";

const Home = () => {
  return (
    <>
      <h1 className="bd-title">Welcome to the Form Admin</h1>
      <p>In this admin you can manage custom forms using React</p>
      <p>
          Forms List<br />
            -> delete Form<br />
Form preview<br />
Form creator<br />
 -> form name<br />
 -> dnd fields<br />
 -> field status (fields needs to have its data completed or it will be marked as red, completed fields will be green)<br />
 -> set label, name and values (values, will depend on type, dropdowns, checkboxes, range)<br />
 -> delete fields<br />
 -> form status (if all fields are valid then you can save)</p>
    </>
  );
};

export default Home;
