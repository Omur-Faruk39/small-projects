export function chackPosition(num, position) {
  if (num.length === 2) {
    const div1YPosition = position[0][1];
    const div2YPosition = position[1][1];
    const div1XPosition = position[0][0];
    const div2XPosition = position[1][0];

    let positionY = div1YPosition - div2YPosition;
    let positionX = div1XPosition - div2XPosition;

    if (positionY < 0) {
      positionY = Math.abs(positionY);
    } else if (positionX < 0) {
      positionX = Math.abs(positionX);
    }

    const distence = Math.sqrt(positionX * positionX + positionY * positionY);
    const crossOver = distence - num[0] - num[1];

    return crossOver;
  }
}


export function randomNum() {
  return Math.trunc(Math.random() * 150 + 10);
}


export const crossOverCheck = (num, result) => {
  if (num.length === 2) {
    if (result < 0) {
      if (num[0] * 2 < Math.abs(result)) {
        return true;
      } else if (num[1] * 2 < Math.abs(result)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
};