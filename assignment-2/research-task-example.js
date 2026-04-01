

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
    name: "JavaScript",
    type: "scripting language",
    isCaseSensitive: "JavaScript is case sensitive",
    yearCreated: 1995,
    creator: "Brendan Eich",
    use: "Web Development ,Mobile Development ,Game Development ,Server Applications ,AI and Machine Learning",

     
    introduce(){
        console.log(`${this.name} is a ${this.type} that was created in ${this.yearCreated} by ${this.creator}.`);
        console.log(`${this.isCaseSensitive} and is mainly used for ${this.use.split(", ")}`)
            
    }

    
}

codingLang.introduce();
// Output: JavaScript is a scripting language that was created in 1995 by Brendan Eich.
// JavaScript is case sensitive and is mainly used for Web Development, Mobile Development, Game Development, Server Applications, AI and Machine Learning.