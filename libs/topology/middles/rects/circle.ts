import { Node } from '../../models/node';
import { Rect } from '../../models/rect';

export function circleIconRect(node: Node) {
  let w = node.width / 2;
  let h = node.height / 2;
  if (w > h) {
    w = h;
  } else {
    h = w;
  }
  let top = node.height / 10;
  if (top < 10) {
    top = 10;
  }
  node.iconRect = new Rect(node.x + (node.width - w) / 2, node.y + top, w, h);
}

export function circleTextRect(node: Node) {
  if (node.icon || node.image) {
    let bottom = node.height / 20;
    if (bottom < 5) {
      bottom = 0;
    }
    node.textRect = new Rect(
      node.x + node.width / 4,
      node.y + (node.height * 2) / 3 - bottom,
      node.width / 2,
      node.height / 3 - 5
    );
  } else {
    const w = (node.width * 5) / 7;
    const h = (node.height * 5) / 7;
    node.textRect = new Rect(node.x + (node.width - w) / 2, node.y + (node.height - h) / 2, w, h);
  }
}