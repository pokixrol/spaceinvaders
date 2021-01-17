function detectCollisionRectRect(rect1, rect2) {
    return rect1.x < rect2.x + rect2.a && rect1.x + rect1.a > rect2.x && rect1.y + rect1.b > rect2.y && rect1.y < rect2.y + rect2.b;
}