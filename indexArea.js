function getArea(l, w, unit) {
    area = l * w;
  //  return area;  --> Because we can only return one value, we have to make a template string literal to collect both the area, and the string value of the unit.
  return `${area} ${unit}`;
}

getArea(500, 10, "Sq fts");