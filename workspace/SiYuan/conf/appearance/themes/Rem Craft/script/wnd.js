import { getFolumn } from "../util/layout.js";

function setWnd(folumn, directionLR, directionTB) {
  let wnd =
    directionTB === "top" ? folumn.firstElementChild : folumn.lastElementChild;
  wnd.style.transformOrigin = directionTB + " " + directionLR;
}

function setFolumn(direction) {
  let folumn = getFolumn(direction);
  setWnd(folumn, direction, "top");
  setWnd(folumn, direction, "bottom");
}

export function wndMain() {
  setFolumn("left");
  setFolumn("right");
}
