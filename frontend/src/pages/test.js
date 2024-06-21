import books from "../assets/UpdatedDatasetSOI.json" assert { type: "json" };

const dep = [];
//const unq=[];
async function test() {
  books.map(function(book) {
    dep.push(book.department);
  });
  //console.log(dep);
  const unq=[...new Set(dep)];
  console.log(unq);

}

test();
