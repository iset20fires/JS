let house;

let number = 100;

if (number > 90){
    house = "Grade A";
    console.log (house);
}

else if (number > 80){
    house = "Grade B"
    console.log (house);
}

else if (number > 70){
    house = "Grade C"
    console.log (house);
}

else {
    house ="Fail"
    console.log (house);
}






for(let i=1; i<=50; i++)
{
    console.log ("Harry");
}


let firstname = "cats and kittens";
console.log (firstname.length)


let hp = "Harry Potter";
console.log (hp[0])


let fn = "Harry";
let ln = "Potter";
console.log (`Hello, ${fn} ${ln}`)


let ic = "helado de bon";
console.log (ic.toUpperCase())


let word = "   miao";
console.log (word.trim())


let index = "guineo verde";
console.log (index.slice(0,6))


let wao = "guineo";
let hueso = "verde";
console.log (wao.concat(hueso))

let m = "guineo verde";
console.log (m.replace("verde", "maduro"))


let chara = "guineo verde";
console.log (chara.charAt(0))


let casa = ["platano", "guineo", "huevo", "coco"];
console.log(casa[0]);


let num = [10, 20, 30];
num.push(40)
console.log(num);


let numb = [1, 2, 3];
numb.pop()
console.log(numb);


let five = [10, 20, 30];
console.log(five.toString());


let six = [10, 20, 30];
let seven = [40, 50];
console.log(six.concat(seven));


let p = [10, 20, 30];
p.push(500);
console.log(p);


let s = [10, 20, 30, 40, 50];
console.log(s.slice(1,4));


let sp = [10, 20, 30, 40, 50];
sp.splice(1,1,200);
console.log(sp);