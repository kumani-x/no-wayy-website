

// 2.1
const cfgDegree = ["Software & Data Engineering" , "Data Science", "Full-stack Development", "Product Management"];

cfgDegree.shift();

console.log(cfgDegree);

// Output: [ 'Data Science', 'Full-stack Development', 'Product Management' ]

cfgDegree.unshift("Software & Data Engineering");

console.log(cfgDegree);

// Output: [ 'Software & Data Engineering', 'Data Science', 'Full-stack Development', 'Product Management' ]

let cfgDegreeString = "Software & Data Engineering , Data Science, Full-stack Development, Product Management";

let cfgDegreeArray = cfgDegreeString.split(" &");

console.log(cfgDegreeArray);

// Output: [ 'Software', 'Data Engineering , Data Science, Full-stack Development, Product Management' ]

cfgDegreeArray = cfgDegreeString.split(",");

console.log(cfgDegreeArray);

// Output: [ 'Software & Data Engineering ', ' Data Science', ' Full-stack Development', ' Product Management' ]


// 2.2

const codingLang = {
    name: "Python",
    type: "object-oriented programming language",
    isCaseSensitive: "Python is case sensitive",
    yearCreated: 1991,
    creator: "Guido van Rossum",
    use: "Software Development, Web Development, Mathematics, System scripting. ",

     
    introduce(){
        console.log(`${this.name} is a ${this.type} that was created in ${this.yearCreated} by ${this.creator}.`);
        console.log(`${this.isCaseSensitive} and is mainly used for ${this.use.split(", ")}`)
            
    }

    
}

codingLang.introduce();
// Output: Python is a object-oriented programming language that was created in 1991 by Guido van Rossum.
// Output: Python is case sensitive and is mainly used for Software Development,Web Development,Mathematics,System scripting. 