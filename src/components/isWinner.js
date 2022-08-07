const isWinner = (values) => {
  if (
    // first row
    (values.at(0) === values.at(1) &&
      values.at(1) === values.at(2) &&
      values.at(0) !== null) ||
    // second row
    (values.at(3) === values.at(4) &&
      values.at(4) === values.at(5) &&
      values.at(3) !== null) ||
    // third row
    (values.at(6) === values.at(7) &&
      values.at(7) === values.at(8) &&
      values.at(6) !== null) ||
    //first kolumn
    (values.at(0) === values.at(3) &&
      values.at(3) === values.at(6) &&
      values.at(6) !== null) ||
    //second kolumn
    (values.at(1) === values.at(4) &&
      values.at(4) === values.at(7) &&
      values.at(7) !== null) ||
    //third kolumn
    (values.at(2) === values.at(5) &&
      values.at(5) === values.at(8) &&
      values.at(8) !== null) ||
    // diagonal_1
    (values.at(0) === values.at(4) &&
      values.at(4) === values.at(8) &&
      values.at(0) !== null) ||
    // diagonal_2
    (values.at(2) === values.at(4) &&
      values.at(4) === values.at(6) &&
      values.at(2) !== null)
  )
    return true;
};

export default isWinner;
