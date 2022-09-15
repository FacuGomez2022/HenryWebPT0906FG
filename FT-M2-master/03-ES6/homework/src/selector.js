//$('#id') => debería retornar un elemento con id: "id".
// var $ = function (selector) {
//   var elements;
//   var selectorMatchFunc = matchFunctionMaker(selector);
//   elements = traverseDomAndCollectElements(selectorMatchFunc);
//   return elements;
// };


var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
   }
  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) resultSet.push(startEl);
  for (let i= 0; i < startEl.children.length; i++){
    let child = startEl.children[i];
    let collectedElements = traverseDomAndCollectElements(matchFunc, child);
    resultSet = resultSet.concat(collectedElements);
  }
  return resultSet;
};

//console.log($('body');
// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí:
  if (!selector) {
    return false;
  }
  if (selector[0] === "#") {
    return "id";
  }
  if (selector[0] === ".") {
    return "class";
  }
  if (selector.includes(".")) {
    return "tag.class";
  }
  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  console.log(selectorType);
  var matchFunction = function (info2) {
    if (selectorType === "id") {      // let selector2 = selector.slice(1);
      // if (selector2 === info2.id) {
      //   return true;
      // }
      // return false;
      return info2 && (selector.slice(1) === info2.id)
    } else if (selectorType === "class") {
      let selector2 = selector.slice(1);
      let prueba1 = info2.className.split(" ");
      for (let i = 0; i < prueba1.length; i++) {
        if (prueba1[i] === selector2) {
          return true;
        }
      }
      return false;
    } else if (selectorType === "tag.class") {
      let selector2 = selector.split(".");
      if (info2.tagName.toLowerCase() === selector2[0]) {
        let prueba1 = info2.className.split(" ");
        for (let i = 0; i < prueba1.length; i++) {
          if (prueba1[i] === selector2[1]) {
            return true;
          }
          return false;
        }
      }
      return false;
    } 
    else if (selectorType === "tag") {
      if (info2.tagName.toLowerCase() === selector){
      return true;
    }
    
  };
  // else if (selectorType === "tag") {
  //   return (info2.tagName.toLowerCase() === selector)
  // };
  };
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

