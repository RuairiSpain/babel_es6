/**
 *
 *
 * @returns generator
 */
function* simple() {
  yield 10;
  yield 20;
  return 30;
}

const gen = simple();

console.log(gen.next().value);

console.log(gen.next().value);

console.log(gen.next().value);
