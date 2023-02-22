import React, { useState } from "react";
import { Col, Row, Card } from "antd";

interface authI {
  signin: string;
  signup: string;
}

const authTypes: authI = {
  signin: "SIGNIN",
  signup: "SIGNUP",
};

const Auth: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(authTypes.signin);

  return (
    <Row>
      <Col span={9} offset={3}>
        col-12 col-offset-6
      </Col>
      <Col span={9} offset={3}>
        <Card>
          <Row>
            <Col span={11} offset={1}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              ea minus, debitis voluptate nobis eligendi soluta suscipit
              incidunt sunt accusantium alias nostrum at iure nesciunt corrupti.
              Quidem ipsa corporis voluptates corrupti iure accusantium in rerum
              quos, accusamus error sapiente animi ad. Doloribus rerum
              necessitatibus, vel rem animi impedit sequi quibusdam pariatur.
              Cumque distinctio hic voluptatem aperiam obcaecati sequi libero
              iusto. Atque nostrum molestias voluptatibus recusandae
              necessitatibus provident. Quia ipsam cupiditate sit deserunt
              molestias eos facilis. Neque delectus reiciendis eum, quia quaerat
              unde odio cupiditate veniam nemo facere qui quod error omnis ipsa
              at culpa, saepe ipsam. Repudiandae vero omnis labore.
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Auth;
