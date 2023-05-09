import React from "react";

function Popularity({ count }) {
  let result = null;

  if (count === 0) {
    result = <p>Будь первым. Поделись впечатлениями</p>;
  }

  if (count > 2) {
    result = <p style={{ color: "#00FA9A" }}>Проверенный товар</p>;
  }
  return result;
}

export default Popularity;
