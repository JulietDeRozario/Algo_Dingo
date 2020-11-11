/*
Sujet 1:
Avec une liste de nombres entiers relatifs et un nombre k, 
créé une méthode retournant un booléen qui affiche si deux 
nombres de cette liste ont k comme résultat de leur somme.
Par exemple, si je te donne la liste [10, 15, 3, 7] et k = 17, 
la fonction devra sortir true car 10 + 7 = 17. Si je te donne
la liste [1, 8, 10, 21] et k = 19, la fonction devra sortir 
false car il n'y a pas deux nombres ayant 19 comme résultat de
leur addition.

Sujet 2:
Nous allons te donner une liste contenant la hauteur (en étages) 
d'immeubles appartenant à une rue, d'est en ouest. Un agent 
immobilier voudrait que tu écrives un algorithme qui retourne 
combien de bâtiments de cette rue ont au moins un appartement avec 
une vue sur le soleil couchant (à l'ouest), afin de bien évaluer la 
valeur des bâtiments de la rue.
Par exemple, avec la liste [3, 7, 8, 3, 6, 1], la fonction devrait 
retourner 3, puisque l'étage le plus haut des immeubles ayant comme 
taille 8, 6, et 1 ont tous une vue à l'ouest. Ou autre exemple la 
liste [1, 4, 5, 8] devrait te retourner 1 puisque seul le dernier 
bâtiment a au moins un appartement avec une vue à l'ouest.
*/


/* ===== EXERCICE 1 ==========================================
Qu°:
Résous le sujet 1 avec une complexité algorithmique de O(n²), 
c'est à dire que ton programme devra comparer chaque élements 
entre eux à l'aide de 2 boucles imbriquées.
*/

const doubleLoop = (array, k) => {
  if(typeof k != "number" || k < 0 || k%1 != 0){
    return "incorrect entrees";
  }
  for (i = 0; i < array.length - 1; i++) {
    if(typeof array[i] != "number" || array[i] < 0 || array[i]%1 != 0){
      return "incorrect entrees";
    }
    for (j = 0; j < array.length; j++) {
      if( i != j && array[i] + array[j] == k){
        return true;
      }
    }
  }
  return false;
}

console.log("Exercice 1: " + doubleLoop([1, 8, 10, 21], 18));



/* ===== EXERCICE 2 ==================================
Qu°:
Résous le sujet 2 avec une complexité algorithmique de O(n²), c'est 
à dire que ton programme devra comparer chaque élements entre eux à 
l'aide de 2 boucles imbriquées.
*/

const howManyHasView = (array) => {
  let sunsetView = 1;
  let noView = false;

  for(i = 0; i < array.length - 1; i ++){
    if(typeof array[i] != "number" || array[i] < 0 || array[i]%1 != 0){
      return "incorrect entrees";
    }
    for(j = i + 1; j < array.length; j ++){
      if(array[j] >= array[i]){
        noView = true;
        break
      } 
    }
    if(noView === false){
      sunsetView += 1;
    }else {
      noView = false;
    }
  }
  return sunsetView;
}

console.log("Exercice 2: " + howManyHasView([3, 7, 8, 3, 6, 1]));



/* ===== EXERCICE 3 ========================================
Qu°:
Résous le sujet 1 avec une complexité algorithmique de O(n), 
c'est à dire que ton programme pourra parcourir plusieurs fois 
chaque élements du tableau (mais pas de boucle imbriquée !).
*/

const exo3 = (array, k) => {
  array = [...new Set(array)];
  if(array.length < 1) return false;

  for(i = 1; i < array.length; i ++) {
    if(array[0] + array[i] === k){
      return true;
    }
  }
  array = array.slice(1);;
  return exo3(array, k);
}

console.log("Exercice 3: " + exo3([1, 8, 10, 21], 19));


/* ===== EXERCICE 4 ==========================================
Qu°:
Résous le sujet 2 avec une complexité algorithmique de O(n), 
c'est à dire que ton programme pourra parcourir plusieurs fois 
chaque élements du tableau (mais pas de boucle imbriquée !).
*/

const exo4 = (array, sunsetView = 1) => {
  let noView = false;
  if(array.length <= 1) return sunsetView;

  for(i = 1; i < array.length; i ++){
    if(typeof array[i] != "number" || array[i] < 0 || array[i]%1 != 0){
      return "incorrect entrees";
    }
    if(array[0] < array[i]){
      noView = true;
      break
    } 
  }
  if(noView === false) sunsetView ++;
  array = array.slice(1);
  return exo4(array, sunsetView);
}

console.log("Exercice 4: " + exo4([1, 4, 5, 8]));


/* ===== EXERCICE 5 ========================================
Résous le sujet 1 en ne faisant qu'un seul passage sur ta liste.
Si tu réussis cet exercice, sache que ce dernier a été posé en 
entretien par Google. Tu peux postuler à Google. La classe, non ? */





/* ===== EXERCICE 6 ==========================================
Résous le sujet 2 en ne faisant qu'un seul passage sur ta liste.
Si tu réussis cet exercice, sache que ce dernier a été posé en 
entretien par Mailchimp. Tu peux postuler à Mailchimp. La classe, non ?*/