/**
 * Fonction qui renvoie une couleur selon value comparé à limit sur une partie ou tout "l'arc en ciel"
 * qui est découpé en 6 parties
 *
 * @param Double value : valeur à comparer, valeur allant de 0 à limit
 * @param Double limit : maximum de value
 * @param Integer start : détermine la couleur de début du dégradé dans l'arc en ciel
 * @param Integer range : détermine la partie de l'arc en ciel utilisée par le dégradé (start + range <= 6)
 * @return color : couleur déterminée par la comparaison sur une partie ou tout "l'arc en ciel"
 */
function calculateRVB(value, limit, start, range) {
  let red = 0;
  let green = 0;
  let blue = 0;

  if ((start + range) <= 6) {
    let x = start + range * value / limit;

    if (x >= 0 && x < 1) {
      red = 255;
    } else if (x >= 1 && x < 2) {
      red = (int)(255 - (x - 1)*255);
    } else if (x >= 2 && x < 4) {
      red = 0;
    } else if (x >= 4 && x < 5) {
      red = (int) ((x - 4)*255);
    } else if (x >= 5 && x <= 6) {
      red = 255;
    }

    if (x >= 0 && x < 1) {
      green = (int) (x*255);
    } else if (x >= 1 && x < 3) {
      green = 255;
    } else if (x >= 3 && x < 4) {
      green = (int)(255 - (x - 3)*255);
    } else if (x >= 4 && x <= 6) {
      green = 0;
    }

    if (x >= 0 && x < 2) {
      blue = 0;
    } else if (x >= 2 && x < 3) {
      blue = (int) ((x - 2)*255);
    } else if (x >= 3 && x < 5) {
      blue = 255;
    } else if (x >= 5 && x <= 6) {
      blue = (int)(255 - (x - 5)*255);
    }
  }
  return color(red, green, blue);
}
