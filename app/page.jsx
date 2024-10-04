import React from "react";

import Form from "@/app/addTodoForm";
import { TodoItem } from "@/components/Server";

const Home = () => {
  return (
    <div className="container">
      <section className="todosContainer">
        <TodoItem
          title={"Sample Task"}
          description={"dasfoipfjqp sdfijpweo"}
          id={"sampleId"}
          completed={false}
        />
      </section>
    </div>
  );
};

export default Home;
