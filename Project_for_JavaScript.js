// // var JOURNAL = [
// //     { "events": ["carrot", "exercise", "weekend"], "squirrel": false },
// //     { "events": ["bread", "pudding", "brushed teeth", "weekend", "touched tree"], "squirrel": false },
// //     { "events": ["carrot", "nachos", "brushed teeth", "cycling", "weekend"], "squirrel": false },
// //     { "events": ["brussel sprouts", "ice cream", "brushed teeth", "computer", "weekend"], "squirrel": false },
// //     { "events": ["potatoes", "candy", "brushed teeth", "exercise", "weekend", "dentist"], "squirrel": false },
// //     { "events": ["brussel sprouts", "pudding", "brushed teeth", "running", "weekend"], "squirrel": false },
// //     { "events": ["pizza", "brushed teeth", "computer", "work", "touched tree"], "squirrel": false },
// //     { "events": ["bread", "beer", "brushed teeth", "cycling", "work"], "squirrel": false },
// //     { "events": ["cauliflower", "brushed teeth", "work"], "squirrel": false },
// //     { "events": ["pizza", "brushed teeth", "cycling", "work"], "squirrel": false },
// //     { "events": ["lasagna", "nachos", "brushed teeth", "work"], "squirrel": false },
// //     { "events": ["brushed teeth", "weekend", "touched tree"], "squirrel": false },
// //     { "events": ["lettuce", "brushed teeth", "television", "weekend"], "squirrel": false },
// //     { "events": ["spaghetti", "brushed teeth", "work"], "squirrel": false },
// //     { "events": ["brushed teeth", "computer", "work"], "squirrel": false },
// //     { "events": ["lettuce", "nachos", "brushed teeth", "work"], "squirrel": false },
// //     { "events": ["carrot", "brushed teeth", "running", "work"], "squirrel": false },
// //     { "events": ["brushed teeth", "work"], "squirrel": false },
// //     { "events": ["cauliflower", "reading", "weekend"], "squirrel": false },
// //     { "events": ["bread", "brushed teeth", "weekend"], "squirrel": false },
// //     { "events": ["lasagna", "brushed teeth", "exercise", "work"], "squirrel": false },
// //     { "events": ["spaghetti", "brushed teeth", "reading", "work"], "squirrel": false },
// //     { "events": ["carrot", "ice cream", "brushed teeth", "television", "work"], "squirrel": false },
// //     { "events": ["spaghetti", "nachos", "work"], "squirrel": false },
// //     { "events": ["cauliflower", "ice cream", "brushed teeth", "cycling", "work"], "squirrel": false },
// //     { "events": ["spaghetti", "peanuts", "computer", "weekend"], "squirrel": true },
// //     { "events": ["potatoes", "ice cream", "brushed teeth", "computer", "weekend"], "squirrel": false },
// //     { "events": ["potatoes", "ice cream", "brushed teeth", "work"], "squirrel": false },
// //     { "events": ["peanuts", "brushed teeth", "running", "work"], "squirrel": false },
// //     { "events": ["potatoes", "exercise", "work"], "squirrel": false },
// //     { "events": ["pizza", "ice cream", "computer", "work"], "squirrel": false },
// //     { "events": ["lasagna", "ice cream", "work"], "squirrel": false },
// //     { "events": ["cauliflower", "candy", "reading", "weekend"], "squirrel": false },
// //     { "events": ["lasagna", "nachos", "brushed teeth", "running", "weekend"], "squirrel": false },
// //     { "events": ["potatoes", "brushed teeth", "work"], "squirrel": false },
// //     { "events": ["carrot", "work"], "squirrel": false },
// //     { "events": ["pizza", "beer", "work", "dentist"], "squirrel": false },
// //     { "events": ["lasagna", "pudding", "cycling", "work"], "squirrel": false },
// //     { "events": ["spaghetti", "brushed teeth", "reading", "work"], "squirrel": false },
// //     { "events": ["spaghetti", "pudding", "television", "weekend"], "squirrel": false },
// //     { "events": ["bread", "brushed teeth", "exercise", "weekend"], "squirrel": false },
// //     { "events": ["lasagna", "peanuts", "work"], "squirrel": true },
// //     { "events": ["pizza", "work"], "squirrel": false },
// //     { "events": ["potatoes", "exercise", "work"], "squirrel": false },
// //     { "events": ["brushed teeth", "exercise", "work"], "squirrel": false },
// //     { "events": ["spaghetti", "brushed teeth", "television", "work"], "squirrel": false },
// //     { "events": ["pizza", "cycling", "weekend"], "squirrel": false },
// //     { "events": ["carrot", "brushed teeth", "weekend"], "squirrel": false },
// //     { "events": ["carrot", "beer", "brushed teeth", "work"], "squirrel": false },
// //     { "events": ["pizza", "peanuts", "candy", "work"], "squirrel": true },
// //     { "events": ["carrot", "peanuts", "brushed teeth", "reading", "work"], "squirrel": false },
// //     { "events": ["potatoes", "peanuts", "brushed teeth", "work"], "squirrel": false },
// //     { "events": ["carrot", "nachos", "brushed teeth", "exercise", "work"], "squirrel": false },
// //     { "events": ["pizza", "peanuts", "brushed teeth", "television", "weekend"], "squirrel": false },
// //     { "events": ["lasagna", "brushed teeth", "cycling", "weekend"], "squirrel": false },
// //     { "events": ["cauliflower", "peanuts", "brushed teeth", "computer", "work", "touched tree"], "squirrel": false },
// //     { "events": ["lettuce", "brushed teeth", "television", "work"], "squirrel": false },
// //     { "events": ["potatoes", "brushed teeth", "computer", "work"], "squirrel": false },
// //     { "events": ["bread", "candy", "work"], "squirrel": false },
// //     { "events": ["potatoes", "nachos", "work"], "squirrel": false },
// //     { "events": ["carrot", "pudding", "brushed teeth", "weekend"], "squirrel": false },
// //     { "events": ["carrot", "brushed teeth", "exercise", "weekend", "touched tree"], "squirrel": false },
// //     { "events": ["brussel sprouts", "running", "work"], "squirrel": false },
// //     { "events": ["brushed teeth", "work"], "squirrel": false },
// //     { "events": ["lettuce", "brushed teeth", "running", "work"], "squirrel": false },
// //     { "events": ["candy", "brushed teeth", "work"], "squirrel": false },
// //     { "events": ["brussel sprouts", "brushed teeth", "computer", "work"], "squirrel": false },
// //     { "events": ["bread", "brushed teeth", "weekend"], "squirrel": false },
// //     { "events": ["cauliflower", "brushed teeth", "weekend"], "squirrel": false },
// //     { "events": ["spaghetti", "candy", "television", "work", "touched tree"], "squirrel": false },
// //     { "events": ["carrot", "pudding", "brushed teeth", "work"], "squirrel": false },
// //     { "events": ["lettuce", "brushed teeth", "work"], "squirrel": false },
// //     { "events": ["carrot", "ice cream", "brushed teeth", "cycling", "work"], "squirrel": false },
// //     { "events": ["pizza", "brushed teeth", "work"], "squirrel": false },
// //     { "events": ["spaghetti", "peanuts", "exercise", "weekend"], "squirrel": true },
// //     { "events": ["bread", "beer", "computer", "weekend", "touched tree"], "squirrel": false },
// //     { "events": ["brushed teeth", "running", "work"], "squirrel": false },
// //     { "events": ["lettuce", "peanuts", "brushed teeth", "work", "touched tree"], "squirrel": false },
// //     { "events": ["lasagna", "brushed teeth", "television", "work"], "squirrel": false },
// //     { "events": ["cauliflower", "brushed teeth", "running", "work"], "squirrel": false },
// //     { "events": ["carrot", "brushed teeth", "running", "work"], "squirrel": false },
// //     { "events": ["carrot", "reading", "weekend"], "squirrel": false },
// //     { "events": ["carrot", "peanuts", "reading", "weekend"], "squirrel": true },
// //     { "events": ["potatoes", "brushed teeth", "running", "work"], "squirrel": false },
// //     { "events": ["lasagna", "ice cream", "work", "touched tree"], "squirrel": false },
// //     { "events": ["cauliflower", "peanuts", "brushed teeth", "cycling", "work"], "squirrel": false },
// //     { "events": ["pizza", "brushed teehh", "running", "work"], "squirrel": false },
// //     { "events": ["lettuce", "brushed teeth", "work"], "squirrel": false },
// //     { "events": ["bread", "brushed teeth", "television", "weekend"], "squirrel": false },
// //     { "events": ["cauliflower", "peanuts", "brushed teeth", "weekend"], "squirrel": false }
// // ];

// // for (let i = 0; i < JOURNAL.length; i++) {
// //     let entry = JOURNAL[i];
// //     console.log(i, entry)
// // }




// // let number = 0;
// // for (let entry of JOURNAL) {

// //     number = JOURNAL.slength;
// //     console.log(number, `${entry.events.length} events.`);
// // }



// // function tableFor(event, journal) {
// //     let table = [0, 0, 0, 0];
// //     for (let i = 0; i < journal.length; i++) {
// //         let entry = journal[i],
// //             index = 0;
// //         if (entry.events.includes(event)) index += 1;
// //         if (entry.squirrel) index += 2;
// //         table[index] += 1;
// //     }
// //     return table;
// // }
// // console.log(tableFor("pizza", JOURNAL));



// // function phi(table) {
// //     return (table[3] * table[0] - table[2] * table[1]) /
// //         Math.sqrt(
// //             (table[2] + table[3]) *
// //             (table[0] + table[1]) *
// //             (table[1] + table[3]) *
// //             (table[0] + table[2]));
// // }
// // console.log(phi([76, 9, 4, 1]));


// // function journalEvents(journal) {
// //     let eventss = [];
// //     for (let entry of journal) {
// //         for (let event of entry.events) {
// //             if (!eventss.includes(event)) {

// //                 eventss.push(event);
// //             }
// //         }
// //     }
// //     return eventss;
// // }
// // console.log(journalEvents(JOURNAL));



// // for (let event of journalEvents(JOURNAL)) {
// //     console.log(event + ":", phi(tableFor(event, JOURNAL)));

// // }
// // for (let entry of JOURNAL) {
// //     if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")) {
// //         entry.events.push("peanut teeth");
// //     }
// // }
// // console.log(phi(tableFor("peanut teeth", JOURNAL)));

// // let todoList = [];

// // function remember(task) {
// //     todoList.push(task);
// // }

// // function getTask() {
// //     return todoList.shift();
// // }

// // function remenberUrgently(task) {
// //     todoList.umshift(task);
// // }
// // console.log([1, 2, 3, 2, 1].indexOf(2));

// // console.log([1, 2, 3, 2, 1].lastIndexOf(2))
// // console.log([0, 1, 2, 3, 4].slice(2, 4));
// // console.log([0, 1, 2, 3, 4].slice(2));

// // function remove(array, index) {
// //     return array.slice(0, index).concat(array.slice(index + 1));
// // }
// // console.log(remove(["a", "b", "c", "d", "e"], 2));

// // let kim = "Kim";
// // kim.age = 88;
// // console.log(kim.age)

// // console.log("coconuts".slice(4, 7));
// // console.log("coconut".indexOf("u"));
// // console.log("one two three".indexOf("ee"));
// // console.log("okay \n ".trim());
// // console.log(String(6).padStart(4, "0"));

// // let sentence = "Secretarybirds specialize in stomping";
// // let words = sentence.split(" ");
// // console.log(words);
// // console.log(words.join(" - "));
// // console.log("LA".repeat(3));
// // let string = "abc"
// // console.log(string.length);
// // console.log(string[1]);

// // function max(...numbers) {
// //     let result = -Infinity;
// //     for (let number of numbers) {
// //         if (number > result) result = number;
// //     }
// //     return result;
// // }
// // console.log(max(4, 5, 2, 3, -1));

// // let numbers = [5, 1, 7];
// // console.log(max(...numbers))

// // let words = ["never", "fully"];
// // console.log(["will", ...words, "understand"]);

// // function randomPointOnCircle(radius) {
// //     let angle = Math.random() * 2 * Math.PI;
// //     return {
// //         x: radius * Math.cos(angle),
// //         y: radius * Math.sin(angle)
// //     };
// // }
// // console.log(randomPointOnCircle(2));

// // console.log(Math.floor(Math.random() * 10));

// // function phi([n00, n01, n10, n11]) {
// //     return (n11 * n00 - n10 * n01) /
// //         Math.sqrt((n10 + n11) * (n00 + n01) *
// //             (n01 + n11) * (n00 + n10));
// // }
// // console.log(phi([3, 5, 1, 6]));

// // let string = JSON.stringify({
// //     squirrel: false,
// //     events: ["weekend"]
// // });
// // console.log(string);
// // console.log(JSON.parse(string).squirrel);



// // // function range(start, end) {
// // //     let a = 0;
// // //     for (start; start <= end; start++) {
// // //         a += start;
// // //     }
// // //     return a;

// // // };
// // // console.log(range(1, 10));

// // function range(start, end, step = start < end ? 1 : -1) {
// //     let array = [];
// //     if (step > 0) {
// //         for (let i = start; i <= end; i++) array.push(i)
// //     } else { for (i = start; i >= end; i += step) array.push(i) }
// //     return array;
// // };

// // function sum(array) {
// //     let index = 0;
// //     for (let range of array) {
// //         index += range;
// //     }
// //     return index;
// // }

// // console.log(range(5, 2, -1));
// // console.log(sum(range(10, 1)));

// // function reverseArray(array) {
// //     reverse = []
// //     for (let i = array.length - 1; i >= 0; i--) {
// //         reverse.push(array[i])
// //     }
// //     return reverse;
// // }



// // function reverseArrayInPlace(Array) {
// //     for (let i = 0; i <= Math.floor(Array.length / 2); i++) {
// //         let old = Array[i]
// //         Array[i] = Array[Array.length - (i + 1)];
// //         Array[Array.length - (i + 1)] = old
// //     }
// //     return Array;
// // }
// // console.log(reverseArray(["a", "b", "c"]));
// // let arrayValue = [1, 2, 3, 4, 5];
// // reverseArrayInPlace(arrayValue);
// // console.log(arrayValue);



// // let list = {
// //     value: 1,
// //     rest: {
// //         value: 2,
// //         rest: {
// //             value: 3,
// //             rest: null
// //         }
// //     }
// // };
// // console.log(list)

// // function arrayToList(array) {
// //     let list = null;
// //     for (let i = array.length - 1; i >= 0; i--) {
// //         list = { value: array[i], rest: list };
// //     }
// //     return list;
// // }

// // function listToArray(list) {
// //     let array = [];
// //     for (let node = list; node; node = node.rest) {
// //         array.push(node.value);
// //     }
// //     return array;
// // }

// // function prepend(value, list) {
// //     return { value, rest: list };
// // }

// // function nth(list, n) {
// //     if (!list) return undefined;
// //     else if (n == 0) return list.value;
// //     else return nth(list.rest, n - 1);
// // }

// // function listToArray(arrayToList) {
// //     let showw = [];
// //     for (let show of arrayToList) {
// //         show.push(show.list(a, b, c))
// //     }
// //     return showw;

// // }
// // console.log(listToArray(arrayToList([10, 20, 30])));

// // console.log(arrayToList([10, 20]));
// // console.log(listToArray(arrayToList([10, 20, 30])));
// // console.log(prepend(10, prepend(20, null)));
// // console.log(nth(arrayToList([10, 20, 30]), 1));


// // const deepEqual = (a, b) => {
// //     if (a === b) {
// //         return true;
// //     }
// //     if (a == null || typeof a != "object" || b == null || typeof b != "object") return false;

// //     let keysA = Object.keys(a),
// //         keysB = Object.keys(b);

// //     if (keysA.length != keysB.length) return false;

// //     for (let key of keysA) {
// //         if (!keysB.includes(key) || !deepEqual(a[key], b[key]))
// //             return false;
// //     }
// //     return true;
// // };
// // let obj = { here: { is: "an" }, object: 2 };
// // console.log(deepEqual(obj, obj));
// // console.log(deepEqual(obj, { here: 1, object: 2 }));
// // console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));

// // let total = 0,
// //     count = 1;
// // while (count <= 10) {
// //     total += count;
// //     count += 1;
// // }
// // console.log(total);
// // // console.log(sum(range(1, 10)));

// // for (let i = 0; i <= 10; i++) {
// //     console.log(i);
// // }

// // function repeatlog(n) {
// //     for (let i = 0; i < n; i++) {
// //         console.log(i);
// //     }
// // }

// // function repeat(n, action) {
// //     for (let i = 0; i < n; i++) {
// //         action(i);
// //     }
// // }
// // repeat(3, console.log);

// // let labels = [];
// // repeat(5, i => {
// //     labels.push(`Unit ${i+1}`);
// // });
// // console.log(labels);




// // Generated from the Unicode 10 database and https: //en.wikipedia.org/wiki/Script_(Unicode)

// var SCRIPTS = [{
//         name: "Adlam",
//         ranges: [
//             [125184, 125259],
//             [125264, 125274],
//             [125278, 125280]
//         ],
//         direction: "rtl",
//         year: 1987,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Fula_alphabets#Adlam_alphabet"
//     },
//     {
//         name: "Caucasian Albanian",
//         ranges: [
//             [66864, 66916],
//             [66927, 66928]
//         ],
//         direction: "ltr",
//         year: 420,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Caucasian_Albanian_alphabet"
//     },
//     {
//         name: "Ahom",
//         ranges: [
//             [71424, 71450],
//             [71453, 71468],
//             [71472, 71488]
//         ],
//         direction: "ltr",
//         year: 1250,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Ahom_alphabet"
//     },
//     {
//         name: "Arabic",
//         ranges: [
//             [1536, 1541],
//             [1542, 1548],
//             [1549, 1563],
//             [1564, 1565],
//             [1566, 1567],
//             [1568, 1600],
//             [1601, 1611],
//             [1622, 1648],
//             [1649, 1757],
//             [1758, 1792],
//             [1872, 1920],
//             [2208, 2229],
//             [2230, 2238],
//             [2260, 2274],
//             [2275, 2304],
//             [64336, 64450],
//             [64467, 64830],
//             [64848, 64912],
//             [64914, 64968],
//             [65008, 65022],
//             [65136, 65141],
//             [65142, 65277],
//             [69216, 69247],
//             [126464, 126468],
//             [126469, 126496],
//             [126497, 126499],
//             [126500, 126501],
//             [126503, 126504],
//             [126505, 126515],
//             [126516, 126520],
//             [126521, 126522],
//             [126523, 126524],
//             [126530, 126531],
//             [126535, 126536],
//             [126537, 126538],
//             [126539, 126540],
//             [126541, 126544],
//             [126545, 126547],
//             [126548, 126549],
//             [126551, 126552],
//             [126553, 126554],
//             [126555, 126556],
//             [126557, 126558],
//             [126559, 126560],
//             [126561, 126563],
//             [126564, 126565],
//             [126567, 126571],
//             [126572, 126579],
//             [126580, 126584],
//             [126585, 126589],
//             [126590, 126591],
//             [126592, 126602],
//             [126603, 126620],
//             [126625, 126628],
//             [126629, 126634],
//             [126635, 126652],
//             [126704, 126706]
//         ],
//         direction: "rtl",
//         year: 400,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Arabic_script"
//     },
//     {
//         name: "Imperial Aramaic",
//         ranges: [
//             [67648, 67670],
//             [67671, 67680]
//         ],
//         direction: "rtl",
//         year: 800,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Aramaic_alphabet"
//     },
//     {
//         name: "Armenian",
//         ranges: [
//             [1329, 1367],
//             [1369, 1376],
//             [1377, 1416],
//             [1418, 1419],
//             [1421, 1424],
//             [64275, 64280]
//         ],
//         direction: "ltr",
//         year: 405,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Armenian_alphabet"
//     },
//     {
//         name: "Avestan",
//         ranges: [
//             [68352, 68406],
//             [68409, 68416]
//         ],
//         direction: "rtl",
//         year: 400,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Avestan_alphabet"
//     },
//     {
//         name: "Balinese",
//         ranges: [
//             [6912, 6988],
//             [6992, 7037]
//         ],
//         direction: "ltr",
//         year: 1000,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Balinese_script"
//     },
//     {
//         name: "Bamum",
//         ranges: [
//             [42656, 42744],
//             [92160, 92729]
//         ],
//         direction: "ltr",
//         year: 1896,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Bamum_script"
//     },
//     {
//         name: "Bassa Vah",
//         ranges: [
//             [92880, 92910],
//             [92912, 92918]
//         ],
//         direction: "ltr",
//         year: 1950,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Bassa_alphabet"
//     },
//     {
//         name: "Batak",
//         ranges: [
//             [7104, 7156],
//             [7164, 7168]
//         ],
//         direction: "ltr",
//         year: 1300,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Batak_alphabet"
//     },
//     {
//         name: "Bengali",
//         ranges: [
//             [2432, 2436],
//             [2437, 2445],
//             [2447, 2449],
//             [2451, 2473],
//             [2474, 2481],
//             [2482, 2483],
//             [2486, 2490],
//             [2492, 2501],
//             [2503, 2505],
//             [2507, 2511],
//             [2519, 2520],
//             [2524, 2526],
//             [2527, 2532],
//             [2534, 2558]
//         ],
//         direction: "ltr",
//         year: 1050,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Bengali_alphabet"
//     },
//     {
//         name: "Bhaiksuki",
//         ranges: [
//             [72704, 72713],
//             [72714, 72759],
//             [72760, 72774],
//             [72784, 72813]
//         ],
//         direction: "ltr",
//         year: 1050,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Bhaiksuki_alphabet"
//     },
//     {
//         name: "Bopomofo",
//         ranges: [
//             [746, 748],
//             [12549, 12591],
//             [12704, 12731]
//         ],
//         direction: "ltr",
//         year: 1918,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Bopomofo"
//     },
//     {
//         name: "Brahmi",
//         ranges: [
//             [69632, 69710],
//             [69714, 69744],
//             [69759, 69760]
//         ],
//         direction: "ltr",
//         year: -250,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Brahmi_script"
//     },
//     {
//         name: "Braille",
//         ranges: [
//             [10240, 10496]
//         ],
//         direction: "ltr",
//         year: 1824,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Braille"
//     },
//     {
//         name: "Buginese",
//         ranges: [
//             [6656, 6684],
//             [6686, 6688]
//         ],
//         direction: "ltr",
//         year: 1650,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Lontara_script"
//     },
//     {
//         name: "Buhid",
//         ranges: [
//             [5952, 5972]
//         ],
//         direction: "ltr",
//         year: 1300,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Buhid_alphabet"
//     },
//     {
//         name: "Chakma",
//         ranges: [
//             [69888, 69941],
//             [69942, 69956]
//         ],
//         direction: "ltr",
//         year: 1050,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Chakma_alphabet"
//     },
//     {
//         name: "Canadian Aboriginal",
//         ranges: [
//             [5120, 5760],
//             [6320, 6390]
//         ],
//         direction: "ltr",
//         year: 1840,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Canadian_Aboriginal_syllabics"
//     },
//     {
//         name: "Carian",
//         ranges: [
//             [66208, 66257]
//         ],
//         direction: "ltr",
//         year: -650,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Carian_alphabets"
//     },
//     {
//         name: "Cham",
//         ranges: [
//             [43520, 43575],
//             [43584, 43598],
//             [43600, 43610],
//             [43612, 43616]
//         ],
//         direction: "ltr",
//         year: 750,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Cham_alphabet"
//     },
//     {
//         name: "Cherokee",
//         ranges: [
//             [5024, 5110],
//             [5112, 5118],
//             [43888, 43968]
//         ],
//         direction: "ltr",
//         year: 1820,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Cherokee_syllabary"
//     },
//     {
//         name: "Coptic",
//         ranges: [
//             [994, 1008],
//             [11392, 11508],
//             [11513, 11520]
//         ],
//         direction: "ltr",
//         year: -200,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
//     },
//     {
//         name: "Cypriot",
//         ranges: [
//             [67584, 67590],
//             [67592, 67593],
//             [67594, 67638],
//             [67639, 67641],
//             [67644, 67645],
//             [67647, 67648]
//         ],
//         direction: "rtl",
//         year: -1100,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Cypriot_syllabary"
//     },
//     {
//         name: "Cyrillic",
//         ranges: [
//             [1024, 1157],
//             [1159, 1328],
//             [7296, 7305],
//             [7467, 7468],
//             [7544, 7545],
//             [11744, 11776],
//             [42560, 42656],
//             [65070, 65072]
//         ],
//         direction: "ltr",
//         year: 950,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Cyrillic_script"
//     },
//     {
//         name: "Devanagari",
//         ranges: [
//             [2304, 2385],
//             [2387, 2404],
//             [2406, 2432],
//             [43232, 43262]
//         ],
//         direction: "ltr",
//         year: 100,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Devanagari"
//     },
//     {
//         name: "Deseret",
//         ranges: [
//             [66560, 66640]
//         ],
//         direction: "ltr",
//         year: 1854,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Deseret_alphabet"
//     },
//     {
//         name: "Duployan",
//         ranges: [
//             [113664, 113771],
//             [113776, 113789],
//             [113792, 113801],
//             [113808, 113818],
//             [113820, 113824]
//         ],
//         direction: "ltr",
//         year: 1860,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Duployan_shorthand"
//     },
//     {
//         name: "Egyptian Hieroglyphs",
//         ranges: [
//             [77824, 78895]
//         ],
//         direction: "ltr",
//         year: -3200,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Egyptian_hieroglyphs"
//     },
//     {
//         name: "Elbasan",
//         ranges: [
//             [66816, 66856]
//         ],
//         direction: "ltr",
//         year: 1750,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Elbasan_alphabet"
//     },
//     {
//         name: "Ethiopic",
//         ranges: [
//             [4608, 4681],
//             [4682, 4686],
//             [4688, 4695],
//             [4696, 4697],
//             [4698, 4702],
//             [4704, 4745],
//             [4746, 4750],
//             [4752, 4785],
//             [4786, 4790],
//             [4792, 4799],
//             [4800, 4801],
//             [4802, 4806],
//             [4808, 4823],
//             [4824, 4881],
//             [4882, 4886],
//             [4888, 4955],
//             [4957, 4989],
//             [4992, 5018],
//             [11648, 11671],
//             [11680, 11687],
//             [11688, 11695],
//             [11696, 11703],
//             [11704, 11711],
//             [11712, 11719],
//             [11720, 11727],
//             [11728, 11735],
//             [11736, 11743],
//             [43777, 43783],
//             [43785, 43791],
//             [43793, 43799],
//             [43808, 43815],
//             [43816, 43823]
//         ],
//         direction: "ltr",
//         year: -900,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Ge%27ez_script"
//     },
//     {
//         name: "Georgian",
//         ranges: [
//             [4256, 4294],
//             [4295, 4296],
//             [4301, 4302],
//             [4304, 4347],
//             [4348, 4352],
//             [11520, 11558],
//             [11559, 11560],
//             [11565, 11566]
//         ],
//         direction: "ltr",
//         year: 430,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Georgian_scripts"
//     },
//     {
//         name: "Glagolitic",
//         ranges: [
//             [11264, 11311],
//             [11312, 11359],
//             [122880, 122887],
//             [122888, 122905],
//             [122907, 122914],
//             [122915, 122917],
//             [122918, 122923]
//         ],
//         direction: "ltr",
//         year: 862,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Glagolitic_script"
//     },
//     {
//         name: "Masaram Gondi",
//         ranges: [
//             [72960, 72967],
//             [72968, 72970],
//             [72971, 73015],
//             [73018, 73019],
//             [73020, 73022],
//             [73023, 73032],
//             [73040, 73050]
//         ],
//         direction: "ltr",
//         year: 1918,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Gondi_writing#Masaram"
//     },
//     {
//         name: "Gothic",
//         ranges: [
//             [66352, 66379]
//         ],
//         direction: "ltr",
//         year: 350,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Gothic_alphabet"
//     },
//     {
//         name: "Grantha",
//         ranges: [
//             [70400, 70404],
//             [70405, 70413],
//             [70415, 70417],
//             [70419, 70441],
//             [70442, 70449],
//             [70450, 70452],
//             [70453, 70458],
//             [70460, 70469],
//             [70471, 70473],
//             [70475, 70478],
//             [70480, 70481],
//             [70487, 70488],
//             [70493, 70500],
//             [70502, 70509],
//             [70512, 70517]
//         ],
//         direction: "ltr",
//         year: 550,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Grantha_alphabet"
//     },
//     {
//         name: "Greek",
//         ranges: [
//             [880, 884],
//             [885, 888],
//             [890, 894],
//             [895, 896],
//             [900, 901],
//             [902, 903],
//             [904, 907],
//             [908, 909],
//             [910, 930],
//             [931, 994],
//             [1008, 1024],
//             [7462, 7467],
//             [7517, 7522],
//             [7526, 7531],
//             [7615, 7616],
//             [7936, 7958],
//             [7960, 7966],
//             [7968, 8006],
//             [8008, 8014],
//             [8016, 8024],
//             [8025, 8026],
//             [8027, 8028],
//             [8029, 8030],
//             [8031, 8062],
//             [8064, 8117],
//             [8118, 8133],
//             [8134, 8148],
//             [8150, 8156],
//             [8157, 8176],
//             [8178, 8181],
//             [8182, 8191],
//             [8486, 8487],
//             [43877, 43878],
//             [65856, 65935],
//             [65952, 65953],
//             [119296, 119366]
//         ],
//         direction: "ltr",
//         year: -800,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Greek_alphabet"
//     },
//     {
//         name: "Gujarati",
//         ranges: [
//             [2689, 2692],
//             [2693, 2702],
//             [2703, 2706],
//             [2707, 2729],
//             [2730, 2737],
//             [2738, 2740],
//             [2741, 2746],
//             [2748, 2758],
//             [2759, 2762],
//             [2763, 2766],
//             [2768, 2769],
//             [2784, 2788],
//             [2790, 2802],
//             [2809, 2816]
//         ],
//         direction: "ltr",
//         year: 1592,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Gujarati_alphabet"
//     },
//     {
//         name: "Gurmukhi",
//         ranges: [
//             [2561, 2564],
//             [2565, 2571],
//             [2575, 2577],
//             [2579, 2601],
//             [2602, 2609],
//             [2610, 2612],
//             [2613, 2615],
//             [2616, 2618],
//             [2620, 2621],
//             [2622, 2627],
//             [2631, 2633],
//             [2635, 2638],
//             [2641, 2642],
//             [2649, 2653],
//             [2654, 2655],
//             [2662, 2678]
//         ],
//         direction: "ltr",
//         year: 1550,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Gurmukh%C4%AB_alphabet"
//     },
//     {
//         name: "Hangul",
//         ranges: [
//             [4352, 4608],
//             [12334, 12336],
//             [12593, 12687],
//             [12800, 12831],
//             [12896, 12927],
//             [43360, 43389],
//             [44032, 55204],
//             [55216, 55239],
//             [55243, 55292],
//             [65440, 65471],
//             [65474, 65480],
//             [65482, 65488],
//             [65490, 65496],
//             [65498, 65501]
//         ],
//         direction: "ltr",
//         year: 1443,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Hangul"
//     },
//     {
//         name: "Han",
//         ranges: [
//             [11904, 11930],
//             [11931, 12020],
//             [12032, 12246],
//             [12293, 12294],
//             [12295, 12296],
//             [12321, 12330],
//             [12344, 12348],
//             [13312, 19894],
//             [19968, 40939],
//             [63744, 64110],
//             [64112, 64218],
//             [131072, 173783],
//             [173824, 177973],
//             [177984, 178206],
//             [178208, 183970],
//             [183984, 191457],
//             [194560, 195102]
//         ],
//         direction: "ltr",
//         year: -1100,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Chinese_characters"
//     },
//     {
//         name: "Hanunoo",
//         ranges: [
//             [5920, 5941]
//         ],
//         direction: "ltr",
//         year: 1300,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Hanun%C3%B3%27o_alphabet"
//     },
//     {
//         name: "Hatran",
//         ranges: [
//             [67808, 67827],
//             [67828, 67830],
//             [67835, 67840]
//         ],
//         direction: "rtl",
//         year: -40,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Hatran_alphabet"
//     },
//     {
//         name: "Hebrew",
//         ranges: [
//             [1425, 1480],
//             [1488, 1515],
//             [1520, 1525],
//             [64285, 64311],
//             [64312, 64317],
//             [64318, 64319],
//             [64320, 64322],
//             [64323, 64325],
//             [64326, 64336]
//         ],
//         direction: "rtl",
//         year: -100,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Hebrew_alphabet"
//     },
//     {
//         name: "Hiragana",
//         ranges: [
//             [12353, 12439],
//             [12445, 12448],
//             [110593, 110879],
//             [127488, 127489]
//         ],
//         direction: "ltr",
//         year: 800,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Hiragana"
//     },
//     {
//         name: "Anatolian Hieroglyphs",
//         ranges: [
//             [82944, 83527]
//         ],
//         direction: "ltr",
//         year: -1400,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Anatolian_hieroglyphs"
//     },
//     {
//         name: "Pahawh Hmong",
//         ranges: [
//             [92928, 92998],
//             [93008, 93018],
//             [93019, 93026],
//             [93027, 93048],
//             [93053, 93072]
//         ],
//         direction: "ltr",
//         year: 1959,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Pahawh_Hmong"
//     },
//     {
//         name: "Old Hungarian",
//         ranges: [
//             [68736, 68787],
//             [68800, 68851],
//             [68858, 68864]
//         ],
//         direction: "rtl",
//         year: 1150,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Old_Hungarian_alphabet"
//     },
//     {
//         name: "Old Italic",
//         ranges: [
//             [66304, 66340],
//             [66349, 66352]
//         ],
//         direction: "ltr",
//         year: -750,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Old_Italic_script"
//     },
//     {
//         name: "Javanese",
//         ranges: [
//             [43392, 43470],
//             [43472, 43482],
//             [43486, 43488]
//         ],
//         direction: "ltr",
//         year: 1250,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Javanese_script"
//     },
//     {
//         name: "Kayah Li",
//         ranges: [
//             [43264, 43310],
//             [43311, 43312]
//         ],
//         direction: "ltr",
//         year: 1962,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Kayah_Li_alphabet"
//     },
//     {
//         name: "Katakana",
//         ranges: [
//             [12449, 12539],
//             [12541, 12544],
//             [12784, 12800],
//             [13008, 13055],
//             [13056, 13144],
//             [65382, 65392],
//             [65393, 65438],
//             [110592, 110593]
//         ],
//         direction: "ltr",
//         year: 800,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Katakana"
//     },
//     {
//         name: "Kharoshthi",
//         ranges: [
//             [68096, 68100],
//             [68101, 68103],
//             [68108, 68116],
//             [68117, 68120],
//             [68121, 68148],
//             [68152, 68155],
//             [68159, 68168],
//             [68176, 68185]
//         ],
//         direction: "rtl",
//         year: -400,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Kharosthi"
//     },
//     {
//         name: "Khmer",
//         ranges: [
//             [6016, 6110],
//             [6112, 6122],
//             [6128, 6138],
//             [6624, 6656]
//         ],
//         direction: "ltr",
//         year: 611,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Khmer_alphabet"
//     },
//     {
//         name: "Khojki",
//         ranges: [
//             [70144, 70162],
//             [70163, 70207]
//         ],
//         direction: "ltr",
//         year: 1520,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Khojki_script"
//     },
//     {
//         name: "Kannada",
//         ranges: [
//             [3200, 3204],
//             [3205, 3213],
//             [3214, 3217],
//             [3218, 3241],
//             [3242, 3252],
//             [3253, 3258],
//             [3260, 3269],
//             [3270, 3273],
//             [3274, 3278],
//             [3285, 3287],
//             [3294, 3295],
//             [3296, 3300],
//             [3302, 3312],
//             [3313, 3315]
//         ],
//         direction: "ltr",
//         year: 450,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Kannada_alphabet"
//     },
//     {
//         name: "Kaithi",
//         ranges: [
//             [69760, 69826]
//         ],
//         direction: "ltr",
//         year: 1550,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Kaithi"
//     },
//     {
//         name: "Tai Tham",
//         ranges: [
//             [6688, 6751],
//             [6752, 6781],
//             [6783, 6794],
//             [6800, 6810],
//             [6816, 6830]
//         ],
//         direction: "ltr",
//         year: 1300,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Tai_Tham_alphabet"
//     },
//     {
//         name: "Lao",
//         ranges: [
//             [3713, 3715],
//             [3716, 3717],
//             [3719, 3721],
//             [3722, 3723],
//             [3725, 3726],
//             [3732, 3736],
//             [3737, 3744],
//             [3745, 3748],
//             [3749, 3750],
//             [3751, 3752],
//             [3754, 3756],
//             [3757, 3770],
//             [3771, 3774],
//             [3776, 3781],
//             [3782, 3783],
//             [3784, 3790],
//             [3792, 3802],
//             [3804, 3808]
//         ],
//         direction: "ltr",
//         year: 1350,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Lao_alphabet"
//     },
//     {
//         name: "Latin",
//         ranges: [
//             [65, 91],
//             [97, 123],
//             [170, 171],
//             [186, 187],
//             [192, 215],
//             [216, 247],
//             [248, 697],
//             [736, 741],
//             [7424, 7462],
//             [7468, 7517],
//             [7522, 7526],
//             [7531, 7544],
//             [7545, 7615],
//             [7680, 7936],
//             [8305, 8306],
//             [8319, 8320],
//             [8336, 8349],
//             [8490, 8492],
//             [8498, 8499],
//             [8526, 8527],
//             [8544, 8585],
//             [11360, 11392],
//             [42786, 42888],
//             [42891, 42927],
//             [42928, 42936],
//             [42999, 43008],
//             [43824, 43867],
//             [43868, 43877],
//             [64256, 64263],
//             [65313, 65339],
//             [65345, 65371]
//         ],
//         direction: "ltr",
//         year: -700,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Latin_script"
//     },
//     {
//         name: "Lepcha",
//         ranges: [
//             [7168, 7224],
//             [7227, 7242],
//             [7245, 7248]
//         ],
//         direction: "ltr",
//         year: 1700,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Lepcha_alphabet"
//     },
//     {
//         name: "Limbu",
//         ranges: [
//             [6400, 6431],
//             [6432, 6444],
//             [6448, 6460],
//             [6464, 6465],
//             [6468, 6480]
//         ],
//         direction: "ltr",
//         year: 1740,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Limbu_alphabet"
//     },
//     {
//         name: "Linear A",
//         ranges: [
//             [67072, 67383],
//             [67392, 67414],
//             [67424, 67432]
//         ],
//         direction: "ltr",
//         year: -2500,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Linear_A"
//     },
//     {
//         name: "Linear B",
//         ranges: [
//             [65536, 65548],
//             [65549, 65575],
//             [65576, 65595],
//             [65596, 65598],
//             [65599, 65614],
//             [65616, 65630],
//             [65664, 65787]
//         ],
//         direction: "ltr",
//         year: -1450,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Linear_B"
//     },
//     {
//         name: "Lisu",
//         ranges: [
//             [42192, 42240]
//         ],
//         direction: "ltr",
//         year: 1915,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Fraser_alphabet"
//     },
//     {
//         name: "Lycian",
//         ranges: [
//             [66176, 66205]
//         ],
//         direction: "ltr",
//         year: -500,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Lycian_alphabet"
//     },
//     {
//         name: "Lydian",
//         ranges: [
//             [67872, 67898],
//             [67903, 67904]
//         ],
//         direction: "rtl",
//         year: -700,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Lydian_alphabet"
//     },
//     {
//         name: "Mahajani",
//         ranges: [
//             [69968, 70007]
//         ],
//         direction: "ltr",
//         year: 1150,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Mahajani"
//     },
//     {
//         name: "Mandaic",
//         ranges: [
//             [2112, 2140],
//             [2142, 2143]
//         ],
//         direction: "rtl",
//         year: 200,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Mandaic_alphabet"
//     },
//     {
//         name: "Manichaean",
//         ranges: [
//             [68288, 68327],
//             [68331, 68343]
//         ],
//         direction: "rtl",
//         year: 250,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Manichaean_alphabet"
//     },
//     {
//         name: "Marchen",
//         ranges: [
//             [72816, 72848],
//             [72850, 72872],
//             [72873, 72887]
//         ],
//         direction: "ltr",
//         year: 650,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Zhang-Zhung_language#Scripts"
//     },
//     {
//         name: "Mende Kikakui",
//         ranges: [
//             [124928, 125125],
//             [125127, 125143]
//         ],
//         direction: "rtl",
//         year: 1880,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Mende_Kikakui_script"
//     },
//     {
//         name: "Meroitic Cursive",
//         ranges: [
//             [68000, 68024],
//             [68028, 68048],
//             [68050, 68096]
//         ],
//         direction: "rtl",
//         year: -300,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Meroitic_alphabet"
//     },
//     {
//         name: "Meroitic Hieroglyphs",
//         ranges: [
//             [67968, 68000]
//         ],
//         direction: "rtl",
//         year: -300,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Meroitic_alphabet"
//     },
//     {
//         name: "Malayalam",
//         ranges: [
//             [3328, 3332],
//             [3333, 3341],
//             [3342, 3345],
//             [3346, 3397],
//             [3398, 3401],
//             [3402, 3408],
//             [3412, 3428],
//             [3430, 3456]
//         ],
//         direction: "ltr",
//         year: 830,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Malayalam_script"
//     },
//     {
//         name: "Modi",
//         ranges: [
//             [71168, 71237],
//             [71248, 71258]
//         ],
//         direction: "ltr",
//         year: 1200,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Modi_alphabet"
//     },
//     {
//         name: "Mongolian",
//         ranges: [
//             [6144, 6146],
//             [6148, 6149],
//             [6150, 6159],
//             [6160, 6170],
//             [6176, 6264],
//             [6272, 6315],
//             [71264, 71277]
//         ],
//         direction: "ttb",
//         year: 1204,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Mongolian_script"
//     },
//     {
//         name: "Mro",
//         ranges: [
//             [92736, 92767],
//             [92768, 92778],
//             [92782, 92784]
//         ],
//         direction: "ltr",
//         year: 1985,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Mru_language#Alphabet"
//     },
//     {
//         name: "Meetei Mayek",
//         ranges: [
//             [43744, 43767],
//             [43968, 44014],
//             [44016, 44026]
//         ],
//         direction: "ltr",
//         year: 200,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Meitei_script"
//     },
//     {
//         name: "Multani",
//         ranges: [
//             [70272, 70279],
//             [70280, 70281],
//             [70282, 70286],
//             [70287, 70302],
//             [70303, 70314]
//         ],
//         direction: "ltr",
//         year: 1750,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Multani_alphabet"
//     },
//     {
//         name: "Myanmar",
//         ranges: [
//             [4096, 4256],
//             [43488, 43519],
//             [43616, 43648]
//         ],
//         direction: "ltr",
//         year: 984,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Burmese_alphabet"
//     },
//     {
//         name: "Old North Arabian",
//         ranges: [
//             [68224, 68256]
//         ],
//         direction: "rtl",
//         year: 750,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Ancient_North_Arabian"
//     },
//     {
//         name: "Nabataean",
//         ranges: [
//             [67712, 67743],
//             [67751, 67760]
//         ],
//         direction: "rtl",
//         year: 150,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Nabataean_alphabet"
//     },
//     {
//         name: "Newa",
//         ranges: [
//             [70656, 70746],
//             [70747, 70748],
//             [70749, 70750]
//         ],
//         direction: "ltr",
//         year: 1000,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Prachalit_Nepal_alphabet"
//     },
//     {
//         name: "Nko",
//         ranges: [
//             [1984, 2043]
//         ],
//         direction: "rtl",
//         year: 1949,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/N%27Ko_alphabet"
//     },
//     {
//         name: "Nushu",
//         ranges: [
//             [94177, 94178],
//             [110960, 111356]
//         ],
//         direction: "ltr",
//         year: 1500,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/N%C3%BCshu_script"
//     },
//     {
//         name: "Ogham",
//         ranges: [
//             [5760, 5789]
//         ],
//         direction: "ltr",
//         year: 350,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Ogham"
//     },
//     {
//         name: "Ol Chiki",
//         ranges: [
//             [7248, 7296]
//         ],
//         direction: "ltr",
//         year: 1925,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Ol_Chiki_script"
//     },
//     {
//         name: "Old Turkic",
//         ranges: [
//             [68608, 68681]
//         ],
//         direction: "rtl",
//         year: 750,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Old_Turkic_alphabet"
//     },
//     {
//         name: "Oriya",
//         ranges: [
//             [2817, 2820],
//             [2821, 2829],
//             [2831, 2833],
//             [2835, 2857],
//             [2858, 2865],
//             [2866, 2868],
//             [2869, 2874],
//             [2876, 2885],
//             [2887, 2889],
//             [2891, 2894],
//             [2902, 2904],
//             [2908, 2910],
//             [2911, 2916],
//             [2918, 2936]
//         ],
//         direction: "ltr",
//         year: 1060,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Odia_alphabet"
//     },
//     {
//         name: "Osage",
//         ranges: [
//             [66736, 66772],
//             [66776, 66812]
//         ],
//         direction: "ltr",
//         year: 2006,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Osage_alphabet"
//     },
//     {
//         name: "Osmanya",
//         ranges: [
//             [66688, 66718],
//             [66720, 66730]
//         ],
//         direction: "ltr",
//         year: 1920,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Osmanya_alphabet"
//     },
//     {
//         name: "Palmyrene",
//         ranges: [
//             [67680, 67712]
//         ],
//         direction: "rtl",
//         year: -100,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Palmyrene_alphabet"
//     },
//     {
//         name: "Pau Cin Hau",
//         ranges: [
//             [72384, 72441]
//         ],
//         direction: "ltr",
//         year: 1900,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Pau_Cin_Hau"
//     },
//     {
//         name: "Old Permic",
//         ranges: [
//             [66384, 66427]
//         ],
//         direction: "ltr",
//         year: 1372,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Old_Permic_alphabet"
//     },
//     {
//         name: "Phags-pa",
//         ranges: [
//             [43072, 43123],
//             [43124, 43127]
//         ],
//         direction: "ttb",
//         year: 1269,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/%27Phags-pa_script"
//     },
//     {
//         name: "Inscriptional Pahlavi",
//         ranges: [
//             [68448, 68467],
//             [68472, 68480]
//         ],
//         direction: "rtl",
//         year: -171,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Inscriptional_Pahlavi"
//     },
//     {
//         name: "Psalter Pahlavi",
//         ranges: [
//             [68480, 68498],
//             [68505, 68509],
//             [68521, 68528]
//         ],
//         direction: "rtl",
//         year: 550,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Psalter_Pahlavi"
//     },
//     {
//         name: "Phoenician",
//         ranges: [
//             [67840, 67868],
//             [67871, 67872]
//         ],
//         direction: "rtl",
//         year: -1200,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Phoenician_alphabet"
//     },
//     {
//         name: "Miao",
//         ranges: [
//             [93952, 94021],
//             [94032, 94079],
//             [94095, 94112]
//         ],
//         direction: "ltr",
//         year: 1936,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Pollard_script"
//     },
//     {
//         name: "Inscriptional Parthian",
//         ranges: [
//             [68416, 68438],
//             [68440, 68448]
//         ],
//         direction: "rtl",
//         year: -250,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Inscriptional_Parthian"
//     },
//     {
//         name: "Rejang",
//         ranges: [
//             [43312, 43348],
//             [43359, 43360]
//         ],
//         direction: "ltr",
//         year: 1750,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Rejang_script"
//     },
//     {
//         name: "Runic",
//         ranges: [
//             [5792, 5867],
//             [5870, 5881]
//         ],
//         direction: "ltr",
//         year: 150,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Runes"
//     },
//     {
//         name: "Samaritan",
//         ranges: [
//             [2048, 2094],
//             [2096, 2111]
//         ],
//         direction: "rtl",
//         year: -600,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Samaritan_alphabet"
//     },
//     {
//         name: "Old South Arabian",
//         ranges: [
//             [68192, 68224]
//         ],
//         direction: "rtl",
//         year: -850,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Ancient_South_Arabian_script"
//     },
//     {
//         name: "Saurashtra",
//         ranges: [
//             [43136, 43206],
//             [43214, 43226]
//         ],
//         direction: "ltr",
//         year: 1920,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Saurashtra_alphabet"
//     },
//     {
//         name: "SignWriting",
//         ranges: [
//             [120832, 121484],
//             [121499, 121504],
//             [121505, 121520]
//         ],
//         direction: "ttb",
//         year: 1974,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/SignWriting"
//     },
//     {
//         name: "Shavian",
//         ranges: [
//             [66640, 66688]
//         ],
//         direction: "ltr",
//         year: 1960,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Shavian_alphabet"
//     },
//     {
//         name: "Sharada",
//         ranges: [
//             [70016, 70094],
//             [70096, 70112]
//         ],
//         direction: "ltr",
//         year: 800,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/%C5%9A%C4%81rad%C4%81_script"
//     },
//     {
//         name: "Siddham",
//         ranges: [
//             [71040, 71094],
//             [71096, 71134]
//         ],
//         direction: "ltr",
//         year: 550,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Siddha%E1%B9%83_script"
//     },
//     {
//         name: "Khudawadi",
//         ranges: [
//             [70320, 70379],
//             [70384, 70394]
//         ],
//         direction: "ltr",
//         year: 1550,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Khudabadi_script"
//     },
//     {
//         name: "Sinhala",
//         ranges: [
//             [3458, 3460],
//             [3461, 3479],
//             [3482, 3506],
//             [3507, 3516],
//             [3517, 3518],
//             [3520, 3527],
//             [3530, 3531],
//             [3535, 3541],
//             [3542, 3543],
//             [3544, 3552],
//             [3558, 3568],
//             [3570, 3573],
//             [70113, 70133]
//         ],
//         direction: "ltr",
//         year: 700,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Sinhalese_alphabet"
//     },
//     {
//         name: "Sora Sompeng",
//         ranges: [
//             [69840, 69865],
//             [69872, 69882]
//         ],
//         direction: "ltr",
//         year: 1936,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Sorang_Sompeng_alphabet"
//     },
//     {
//         name: "Soyombo",
//         ranges: [
//             [72272, 72324],
//             [72326, 72349],
//             [72350, 72355]
//         ],
//         direction: "ltr",
//         year: 1650,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Soyombo_alphabet"
//     },
//     {
//         name: "Sundanese",
//         ranges: [
//             [7040, 7104],
//             [7360, 7368]
//         ],
//         direction: "ltr",
//         year: 1350,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Sundanese_script"
//     },
//     {
//         name: "Syloti Nagri",
//         ranges: [
//             [43008, 43052]
//         ],
//         direction: "ltr",
//         year: 1303,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Sylheti_Nagari"
//     },
//     {
//         name: "Syriac",
//         ranges: [
//             [1792, 1806],
//             [1807, 1867],
//             [1869, 1872],
//             [2144, 2155]
//         ],
//         direction: "rtl",
//         year: -200,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Syriac_alphabet"
//     },
//     {
//         name: "Tagbanwa",
//         ranges: [
//             [5984, 5997],
//             [5998, 6001],
//             [6002, 6004]
//         ],
//         direction: "ltr",
//         year: 1300,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Tagbanwa_script"
//     },
//     {
//         name: "Takri",
//         ranges: [
//             [71296, 71352],
//             [71360, 71370]
//         ],
//         direction: "ltr",
//         year: 1550,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Takri_alphabet"
//     },
//     {
//         name: "Tai Le",
//         ranges: [
//             [6480, 6510],
//             [6512, 6517]
//         ],
//         direction: "ltr",
//         year: 1200,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Tai_Le_alphabet"
//     },
//     {
//         name: "New Tai Lue",
//         ranges: [
//             [6528, 6572],
//             [6576, 6602],
//             [6608, 6619],
//             [6622, 6624]
//         ],
//         direction: "ltr",
//         year: 1950,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/New_Tai_Lue_alphabet"
//     },
//     {
//         name: "Tamil",
//         ranges: [
//             [2946, 2948],
//             [2949, 2955],
//             [2958, 2961],
//             [2962, 2966],
//             [2969, 2971],
//             [2972, 2973],
//             [2974, 2976],
//             [2979, 2981],
//             [2984, 2987],
//             [2990, 3002],
//             [3006, 3011],
//             [3014, 3017],
//             [3018, 3022],
//             [3024, 3025],
//             [3031, 3032],
//             [3046, 3067]
//         ],
//         direction: "ltr",
//         year: 700,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Tamil_script"
//     },
//     {
//         name: "Tangut",
//         ranges: [
//             [94176, 94177],
//             [94208, 100333],
//             [100352, 101107]
//         ],
//         direction: "ltr",
//         year: 1036,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Tangut_script"
//     },
//     {
//         name: "Tai Viet",
//         ranges: [
//             [43648, 43715],
//             [43739, 43744]
//         ],
//         direction: "ltr",
//         year: 1200,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Tai_Dam_language#Writing_system"
//     },
//     {
//         name: "Telugu",
//         ranges: [
//             [3072, 3076],
//             [3077, 3085],
//             [3086, 3089],
//             [3090, 3113],
//             [3114, 3130],
//             [3133, 3141],
//             [3142, 3145],
//             [3146, 3150],
//             [3157, 3159],
//             [3160, 3163],
//             [3168, 3172],
//             [3174, 3184],
//             [3192, 3200]
//         ],
//         direction: "ltr",
//         year: -900,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Telugu_script"
//     },
//     {
//         name: "Tifinagh",
//         ranges: [
//             [11568, 11624],
//             [11631, 11633],
//             [11647, 11648]
//         ],
//         direction: "ltr",
//         year: -300,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Tifinagh"
//     },
//     {
//         name: "Tagalog",
//         ranges: [
//             [5888, 5901],
//             [5902, 5909]
//         ],
//         direction: "ltr",
//         year: 1250,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Baybayin"
//     },
//     {
//         name: "Thaana",
//         ranges: [
//             [1920, 1970]
//         ],
//         direction: "rtl",
//         year: 1599,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Thaana"
//     },
//     {
//         name: "Thai",
//         ranges: [
//             [3585, 3643],
//             [3648, 3676]
//         ],
//         direction: "ltr",
//         year: 1283,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Thai_alphabet"
//     },
//     {
//         name: "Tibetan",
//         ranges: [
//             [3840, 3912],
//             [3913, 3949],
//             [3953, 3992],
//             [3993, 4029],
//             [4030, 4045],
//             [4046, 4053],
//             [4057, 4059]
//         ],
//         direction: "ltr",
//         year: 650,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Tibetan_alphabet"
//     },
//     {
//         name: "Tirhuta",
//         ranges: [
//             [70784, 70856],
//             [70864, 70874]
//         ],
//         direction: "ltr",
//         year: 1450,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Tirhuta"
//     },
//     {
//         name: "Ugaritic",
//         ranges: [
//             [66432, 66462],
//             [66463, 66464]
//         ],
//         direction: "ltr",
//         year: -1400,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Ugaritic_alphabet"
//     },
//     {
//         name: "Vai",
//         ranges: [
//             [42240, 42540]
//         ],
//         direction: "ltr",
//         year: 1830,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Vai_syllabary"
//     },
//     {
//         name: "Warang Citi",
//         ranges: [
//             [71840, 71923],
//             [71935, 71936]
//         ],
//         direction: "ltr",
//         year: 1946,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Warang_Citi"
//     },
//     {
//         name: "Old Persian",
//         ranges: [
//             [66464, 66500],
//             [66504, 66518]
//         ],
//         direction: "ltr",
//         year: -525,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Old_Persian_cuneiform"
//     },
//     {
//         name: "Cuneiform",
//         ranges: [
//             [73728, 74650],
//             [74752, 74863],
//             [74864, 74869],
//             [74880, 75076]
//         ],
//         direction: "ltr",
//         year: -3050,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Cuneiform_script"
//     },
//     {
//         name: "Yi",
//         ranges: [
//             [40960, 42125],
//             [42128, 42183]
//         ],
//         direction: "ltr",
//         year: 1450,
//         living: true,
//         link: "https://en.wikipedia.org/wiki/Yi_script"
//     },
//     {
//         name: "Zanabazar Square",
//         ranges: [
//             [72192, 72264]
//         ],
//         direction: "ltr",
//         year: 1700,
//         living: false,
//         link: "https://en.wikipedia.org/wiki/Mongolian_writing_systems#Horizontal_square_script"
//     }
// ];

// // // This makes sure the data is exported in node.js —
// // // `require('./path/to/scripts.js')` will get you the array.

// // if (typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports))
// //     module.exports = SCRIPTS;
// // if (typeof global != "undefined" && !global.SCRIPTS)
// //     global.SCRIPTS = SCRIPTS;

// // function textScripts(text) {
// //     let scripts = countBy(text, char => {
// //         let script = characterScript(char.codePointAt(0));
// //         return script ? script.name : "none";
// //     }).filter(({ name }) => name != "none");

// //     let total = scripts.reduce((n, { count }) => n + count, 0);
// //     if (total == 0) return "No scripts found";

// //     return scripts.map(({ name, count }) => {
// //         return `${Math.round(count * 100 / total)}% ${name}`;
// //     }).join(", ");

// // }
// // console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));



// // function filter(array, test) {
// //     let passed = [];
// //     for (let element of array) {
// //         if (test(element)) {
// //             passed.push(element);
// //         }
// //     }
// //     return passed;
// // }
// // console.log(filter(SCRIPTS, script => script.living));
// // console.log(SCRIPTS.filter(s => s.direction == "ttb"));


// // function map(array, transform) {
// //     let mapped = [];
// //     for (let element of array) {
// //         mapped.push(transform(element));
// //     }
// //     return mapped;

// // }
// // let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
// // console.log(map(rtlScripts, s => s.name));

// // function reduce(array, combine, start) {
// //     let current = start;
// //     for (let element of array) {
// //         current = combine(current, element);
// //     }
// //     return current;
// // }
// // console.log(reduce([1, 2, 7, 4], (a, b) => a + b, 0));
// // console.log([1, 2, 9, 4].reduce((a, b) => a + b));

// // function characterCount(script) {
// //     return script.ranges.reduce((count, [from, to]) => { return count + (to - from) }, 0)
// // }
// // console.log(SCRIPTS.reduce((a, b) => {
// //     return characterCount(a) < characterCount(b) ? b : a;
// // }));

// // let biggest = null;
// // for (let script of SCRIPTS) {
// //     if (biggest == null ||
// //         characterCount(biggest) < characterCount(script)) {
// //         biggest = script;
// //     }
// // }
// // console.log(biggest);

// // function averlage(array) {
// //     return array.reduce((a, b) => a + b) / array.length;
// // }
// // console.log(Math.round(averlage(
// //     SCRIPTS.filter(s => s.living).map(s => s.year)
// // )));
// // console.log(Math.round(averlage(
// //     SCRIPTS.filter(s => !s.living).map(s => s.year)
// // )))


// let total = 0,
//     count = 0;
// for (let script of SCRIPTS) {
//     if (script.living) {
//         total += script.year;
//         count += 1;
//     }
// }
// console.log(Math.round(total / count));

// function characterScript(code) {
//     for (let script of SCRIPTS) {
//         if (script.ranges.some(([from, to]) => {
//                 return code >= from && code < to;
//             })) {
//             return script;
//         }

//     }
//     return null;
// }
// console.log(characterScript(121));

// let horseShone = "gdfg ";
// console.log(horseShone.length);
// console.log(horseShone[0]);
// console.log(horseShone.codePointAt)

// let roseDragon = "od";
// for (let char of roseDragon) {
//     console.log(char);
// }

// function countBy(items, groupName) {
//     let counts = [];
//     for (let item of items) {
//         let name = groupName(item);
//         let known = counts.findIndex(c => c.name == name);
//         if (known == -1) {
//             counts.push({ name, count: 1 });

//         } else { counts[known].count++; }
//     }
//     return counts;
// }
// console.log(countBy([1], n => n < 2));


// function textScripts(text) {
//     let scripts = countBy(text, char => {
//         let script = characterScript(char.codePointAt(0));
//         return script ? script.name : "none";
//     }).filter(({ name }) => name != "none");

//     let total = scripts.reduce((n, { count }) => n + count, 0);
//     if (total == 0) return "No scripts found";
//     return scripts.map(({ name, count }) => {
//         return `${Math.round(count * 100 / total)}% ${name}`;
//     }).join(", ")
// }
// console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// let arrays = [
//     [1, 2, 3],
//     [4, 5],
//     [6]
// ];
// let sum = arrays.reduce((a, b) => {
//     return a + b;
// }, 0);
// arr.push(sum);
// console.log(arr)

// let sum = arrays.concat((arrays))
// console.log(sum);
// console.log(combel(arrays))
// let arr = [];
// arrays.forEach((sum) => {

//     sum.forEach((sum2) => {
//         arr.push(sum2);

//     });
// });
// console.log(arr);

// console.log(arrays.reduce((flat, current) => flat.concat(current), []))


// function loop(start, test, update, body) {
//     for (let value = start; test(value); value = update(value)) {
//         body(value);
//     }
// }
// loop(3, n => n > 0, n => n - 1, console.log);


// function every(array, predicate) {
//     for (let element of array) {
//         if (!predicate(element)) return false;
//     }
//     return true;
// }

// function every2(array, predicate) {
//     return !array.some(element => !predicate(element))
// }
// console.log(every([1, 3, 5], n => n < 10));
// console.log(every([2, 4, 16], n => n < 10));
// console.log(every([], n => n < 10));


// function dominantDirection(text) {
//     let counted = countBy(text, char => {
//         let script = characterScript(char.codePointAt(0));
//         return script ? script.direction : "none";
//     }).filter(({}) => name != "none");
//     if (counted.length == 0) return "ltr";
//     return counted.reduce((a, b) => a.count > b.count ? a : b).name;
// }
// console.log(dominantDirection("Hello!"));
// console.log(dominantDirection("Hey", "nana"))


// let rabbit = {};
// rabbit.speak = function(line) {
//     console.log(`The rabbit says '${line}'`)
// }
// rabbit.speak("I'm alive");


// function speak(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
// }
// let whiteRebbit = { type: "white", speak };
// let hungryRabbit = { type: "hungry", speak };

// whiteRebbit.speak("Oh my ears and whiskers, " + "how late it's getting!");
// hungryRabbit.speak("I could use a carrot right now.");

// speak.call(hungryRabbit, "Burp!");

// function normalize() {
//     console.log(this.coords.map(n => n / this.length));
// }
// normalize.call({ coords: [0, 2, 3], length: 5 });

// let empty = {};
// console.log(empty.toString ``);
// console.log(empty.toString());

// console.log(Object.getPrototypeOf({}) == Object.prototype);
// console.log(Object.getPrototypeOf(Object.prototype));

// console.log(Object.getPrototypeOf(Math.max) ==
//     Function.prototype);
// console.log(Object.getPrototypeOf([]) == Array.prototype);



// let protoRabbit = {
//     speak(line) {
//         console.log(`The ${this.type} rabbit says '${line}'`)
//     }
// };
// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = "killer";
// killerRabbit.speak("SKREEEE!");

// function makeRabbit(type) {
//     let rabbit = Object.create(protoRabbit);
//     rabbit.type = type;
//     return rabbit;
// }

// function Rabbit(type) {
//     this.type = type;
// }
// Rabbit.prototype.speak = function(line) {
//     console.log(`The ${this.type} Rabbit says '${line}'`);
// };
// let weirdRabbit = new Rabbit("weird");
// console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
// console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);


// class Rabbit {
//     constructor(type) {
//         this.type = type;
//     }
//     speak(line) {
//         console.log(`The ${this.type} rabbit says'${line}'`);
//     }
// }

// let killerRabbit = new Rabbit("killer");
// let blackRabbit = new Rabbit("black");
// let blackRabbi = new Rabbit("black");
// let object = new class { getWord() { return "hello"; } };
// console.log(object.getWord());

// Rabbit.prototype.toString = function() {
//     return `a ${this.type} rabbit`;
// };
// console.log(String(blackRabbit));

// let sym = Symbol("name");
// console.log(sym == Symbol("name"));
// Rabbit.prototype[sym] = 55;
// console.log(blackRabbit[sym])

// const toStringSymbol = Symbol("toString");
// Array.prototype[toStringSymbol] = function() {
//     return `${this.length} cm of blue yarn`;
// };
// console.log([1, 2].toString());
// console.log([1, 2][toStringSymbol]())

// let stringObject = {
//     [toStringSymbol]() { return "a jute rope"; }
// };
// console.log(stringObject[toStringSymbol]());

// let okIterater = "OK" [Symbol.iterator]();
// console.log(okIterater.next());
// console.log(okIterater.next());
// console.log(okIterater.next());

class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.content[y * width + x] = element(x, y);
            }
        }
    }
    get(x, y) {
        return this.content[y * this.width + x];
    }
    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }
}

// class MatrixIterator {
//     constructor(matrix) {
//         this.x = 0;
//         this.y = 0;
//         this.matrix = matrix;
//     }
//     next() {
//         if (this.y == this.matrix.height) return {
//             done: true
//         };
//         let value = { x: this.x, y: this.y, value: this.matrix.get(this.x, this.y) };
//         this.x++;
//         if (this.x == this.matrix.width) {
//             this.x = 0;
//             this.y++;
//         }
//         return { value, done: false };
//     }
// }

// Matrix.prototype[Symbol.iterator] = function() {
//     return new MatrixIterator(this);
// };

// let matrix = new Matrix(5, 5, (x, y) => `value ${x}, ${y}`);
// for (let { x, y, value }
//     of matrix) {
//     console.log(x, y, value);
// }



// let varyingSize = {
//     get size() {
//         return Math.floor(Math.random() * 100);
//     }
// }
// console.log(varyingSize.size);
// console.log(varyingSize.size);

// class Temperature {
//     constructor(celsius) {
//         this.celsius = celsius;
//     }
//     get fahrenheit() {
//         return this.celsius * 1.8 + 32;
//     }
//     set fahrenheit(value) {
//         this.celsius = (value - 32) / 1.8;
//     }
//     static fromFahrenheit(value) {
//         return new Temperature((value - 30) / 1.8);
//     }
// }
// let temp = new Temperature(22);
// console.log(temp.fahrenheit);
// temp.fahrenheit = 86;
// console.log(temp.celsius);


// class SymmetricMatrix extends Matrix {
//     constructor(size, element = (x, y) => undefined) {
//         super(size, size, (x, y) => {
//             if (x < y) return element(y, x);
//             else return element(x, y);
//         });
//     }
//     set(x, y, value) {
//         super.set(x, y, value);
//         if (x != y) {
//             super.set(y, x, value);
//         }
//     }
// }
// let matrix = new SymmetricMatrix(5, (x, y) => `${x}, ${y}`);
// console.log(matrix.get(3, 2));


// console.log(
//     new SymmetricMatrix(2) instanceof SymmetricMatrix
// );
// console.log(new Matrix(2, 2) instanceof SymmetricMatrix);
// console.log([1] instanceof Array);


// class Vec {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     plus(v) {
//         return new Vec(this.x + v.x, this.y + v.y);
//     }
//     minus(v) {
//         return new Vec(this.x - v.x, this.y - v.y);
//     }
//     get length() {
//         return Math.sqrt(this.x ** 4 + this.y ** 4);
//     }
// }
// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// console.log(new Vec(3, 4).length);


// class Group {
//     constructor() {
//         this.members = [];
//     }
//     add(value) {
//         if (!this.has(value)) {
//             this.members.push(value);
//         }
//     }
//     delete(value) {
//         this.members = this.members.filter(v => v != value);
//     }
//     has(value) {
//         return this.members.includes(value)
//     }
//     static from(collection) {
//             let group = new Group;
//             for (let value of collection) {
//                 group.add(value)
//             }
//             return group
//         }
//         [Symbol.iterator]() {
//             return new GroupIterator(this);
//         }
// }
// let group = Group.from([1, 2]);
// console.log(group.has(1));
// console.log(group.has(3));
// group.add(1);
// group.delete(1);
// console.log(group.has(1));

// class GroupIterator {
//     constructor(group) {
//         this.group = group;
//         this.position = 0;
//     }
//     next() {
//         if (this.position >= this.group.members.length) {
//             return { done: true };
//         }
//         let result = { value: this.group.members[this.position], done: false };
//         this.position++;
//         return result;
//     }
// }
// for (let value of Group.from(["a", "b", "c"])) {
//     console.log(value);
// }

// let map = { one: true, two: true, hasOwnProperty: true };

// console.log(Object.prototype.hasOwnProperty.call(map, "two"));

// const roads = [
//     "Alice's House-Bob's House", "Alice's House-Cabin",
//     "Alice's House-Post Office", "Bob's House-Town Hall",
//     "Daria's House-Ernie's House", "Daria's House-Town Hall",
//     "Ernie's House-Grete's House", "Grete's House-Farm",
//     "Grete's House-Shop", "Marketplace-Farm",
//     "Marketplace-Post Office", "Marketplace-Shop",
//     "Marketplace-Town Hall", "Shop-Town Hall"
// ];

// function buildGraph(edges) {
//     let graph = Object.create(null);

//     function addEdge(from, to) {
//         if (graph[from] == null) {
//             graph[from] = [to];
//         } else {
//             graph[from].push(to);
//         }
//     }
//     for (let [from, to] of edges.map(r => r.split("-"))) {
//         addEdge(from, to);
//         addEdge(to, from);
//     }
//     return graph;
// }
// const roadGraph = buildGraph(roads);

// class VillageState {
//     constructor(place, parcels) {
//         this.place = place;
//         this.parcels = parcels;
//     }
//     move(destination) {
//         if (!roadGraph[this.place].includes(destination)) {
//             return this;
//         } else {
//             let parcels = this.parcels.map(p => {
//                 if (p.place != this.place) return p;
//                 return { place: destination, address: p.address };
//             }).filter(p => p.place != p.address);
//             return new VillageState(destination, parcels);
//         }
//     }
// }
// let first = new VillageState(
//     "Post Office", [{ place: "Post Office", address: "Alice's House" }]
// );
// let next = first.move("Alice's House");
// console.log(next.place);
// console.log(next.parcels);
// console.log(first.place);


// let object = Object.freeze({ value: 5 });
// object.value = 10;
// console.log(object.value);


// function runRobot(state, robot, memory) {
//     for (let turn = 0;; turn++) {
//         if (state.parcels.length == 0) {
//             console.log(`Done in ${turn} turns`);
//             break;
//         }
//         let action = robot(state, memory);
//         state = state.move(action.direction);
//         memory = action.memory;
//         console.log(`Moved to ${action.direction}`);
//     }
// }

// function randomPick(array) {
//     let choice = Math.floor(Math.random() * array.length);
//     return array[choice];
// }

// function randomRobot(state) {
//     return { direction: randomPick(roadGraph[state.place]) };
// }

// VillageState.random = function(parcelCount = 5) {
//     let parcels = [];
//     for (let i = 0; i < parcelCount; i++) {
//         let address = randomPick(Object.keys(roadGraph));
//         let place;
//         do {
//             place = randomPick(Object.keys(roadGraph));
//         } while (place == address);
//         parcels.push({ place, address });
//     }
//     return new VillageState("Post Office", parcels);
// };
// runRobot(VillageState.random(), randomRobot);

// const mailRoute = [
//     "Alice's House", "Cabin", "Alice's House", "Bob's House",
//     "Town Hall", "Daria's House", "Ernie's House", "Grete's House", "Shop", "Grete's House", "Farm",
//     "Marketplace", "Post Office"
// ];

// function routeRobot(state, memory) {
//     if (memory.length == 0) {
//         memory = mailRoute;
//     }
//     return { direction: memory[0], memory: memory.slice(1) };
// }

// function findRoute(graph, from, to) {
//     let work = [{ at: from, route: [] }];
//     for (let i = 0; i < work.length; i++) {
//         let { at, route } = work[i];
//         for (let place of graph[at]) {
//             if (place == to) return route.concat(place);
//             if (!work.some(w => w.at == place)) {
//                 work.push({ at: place, route: route.concat(place) });
//             }
//         }
//     }
// }

// function goalOrientadRobot({ place, parcels }, route) {
//     if (route.length == 0) {
//         let parcel = parcels[0];
//         if (parcel.place != place) {
//             route = findRoute(roadGraph, place, parcel.place)
//         } else {
//             route = findRoute(roadGraph, place, parcel.address);
//         }
//     }
//     return { direction: route[0], memory: route.slice(1) };
// }

// function countSteps(state, robot, memory) {
//     for (let steps = 0;; steps++) {
//         if (state.parcels.length == 0) return steps;
//         let action = robot(state, memory);
//         state = state.move(action.direction);
//         memory = action.memory;
//     }
// }

// function compareRobots(robot1, memory1, robot2, memory2) {
//     let total1 = 0,
//         total2 = 0;
//     for (let i = 0; i < 100; i++); {
//         let state = VillageState.random();
//         total1 += countSteps(state, robot1, memory1);
//         total2 += countSteps(state, robot2, memory2);
//     }
//     console.log(`Robot 1 needed ${total1 / 100} steps per task`);
//     console.log(`Robot 2 needed ${total2 / 100}`)
// }
// compareRobots(routeRobot, [], goalOrientadRobot, []);


// function lazyRobot({ place, parcels }, route) {
//     if (route.length == 0) {
//         let routes = parcels.map(parcel => {
//             if (parcel.place != place) {
//                 return { route: findRoute(roadGraph, place, parcel.place), pickUp: true };
//             } else {
//                 return { route: findRoute(roadGraph, place, parcel.address), pickUp: false };
//             }
//         });

//         function score({ route, pickUp }) {
//             return (pickUp ? 0.5 : 0) - route.length;
//         }
//         route = routes.reduce((a, b) => score(a) > score(b) ? a : b).route;
//     }
//     return { direction: route[0], memory: route.slice(1) };
// }
// runRobotAnimation(VillageState.random(), lazyRobot, []);

// class PGroup {
//     constructor(members) {
//         this.members = members;
//     }
//     add(value) {
//         if (this.has(value)) return this;
//         return new PGroup(this.members.concat([value]));
//     }
//     delete(value) {
//         if (!this.has(value)) return this;
//         return new PGroup(this.members.filter(m => m !== value));
//     }
//     has(value) {
//         return this.members.includes(value);
//     }
// }
// PGroup.empty = new PGroup([]);
// let a = PGroup.empty.add(0);
// let ab = a.add(1);
// let b = ab.delete(0);

// console.log(b.has(1));
// console.log(a.has(1));
// console.log(b.has(0));


// function canYouSportTheProblem() {
//     "use strict";
//     for (counter = 0; counter < 10; counter++) {
//         console.log("Happy happy");
//     }
// }

// canYouSportTheProblem();

// function Person(name) { this.name = name; }
// let ferdinand = Person("Ferdinand");
// console.log(name);

// "use strict";

// function Person(name) {
//     this.name = name;
// }
// let ferdinand = Person("Ferdinand");

// function test(label, boby) {
//     if (!body()) console.log(`Faile: ${label}`);
// }
// test("convert Latin text to uppercase", () => {
//     return "hello".toUpperCase() == "HELLO";
// });
// test("convert Greek text to uppercase", () => {
//     return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ"
// });
// test("don't convert case-less characters", () => {
//     return "ࢩࡑߣడఒ".toUpperCaseCase() == "ࢩࡑߣడఒ";
// });

// function numberToString(n, base = 10) {
//     let result = "",
//         sign = "";
//     if (n < 0) {
//         sign = "-";
//         n = -n;
//     }
//     do {
//         result = String(n % base) + result;
//         n /= base;
//     } while (n > 0);
//     return sign + result;
// }
// console.log(numberToString(13, 10));

// function promptNumber(question) {
//     let result = Number(prompt(question));
//     if (Number.isNaN(result)) return null;
//     else return result;
// }
// console.log(promptNumber("How many trees do you see?"));

// function lastElement(array) {
//     if (array.length == 0) {
//         return { failed: true };
//     } else {
//         return { element: array[array.length - 1] };
//     }
// }

// function promptDirection(question) {
//     let result = prompt(question);
//     if (result.toLowerCase() == "left") return "L";
//     if (result.toLowerCase() == "right") return "R";
//     throw new Error("Invalid direction: " + result);
// }

// function look() {
//     if (promptDirection("Which way?") == "L") {
//         return "a house";
//     } else {
//         return "two angry bears";
//     }
// }
// try {
//     console.log("You see", look());
// } catch (error) {
//     console.log("Something went wrong: " + error);
// }


// const accounts = {
//     a: 100,
//     b: 0,
//     c: 20
// };

// function getAccount() {
//     let accountName = prompt("Enter an account name");
//     if (!accounts.hasOwnProperty(accountName)) {
//         throw new Error(`No such account: ${accountName}`);
//     }
//     return accountName;
// }

// function transfer(from, amount) {
//     if (accounts[from] < amount) return;
//     accounts[from] -= amount;
//     accounts[getAccount()] += amount;
// }

// function transfer(from, amount) {
//     if (accounts[from] < amount) return;
//     let progress = 0;
//     try {
//         accounts[from] -= amount;
//         progress = 1;
//         accounts[getAccount()] += amount;
//         progress = 2;
//     } finally {
//         if (progress == 1) {
//             accounts[from] += amount;
//         }
//     }
// }

// for (let i = 0; i < 3; i++) {
//     try {
//         let dir = promptDirection("Where?");
//         console.log("You chose ", dir);
//         break;
//     } catch (e) {
//         console.log("No a valid direction. Try again");
//     }
// }

// class InputError {}

// function promptDirection(question) {
//     let result = prompt(question);
//     if (result.toLowerCase() == "left") return "L";
//     if (result.toLowerCase() == "rigth") return "R";
//     throw new InputError("Invalid direction: " + result);
// }

// for (;;) {
//     try {
//         let dir = promptDirection("Where?");
//         console.log("You chose ", dir);
//         break;
//     } catch (e) {
//         if (e instanceof InputError) {
//             console.log("Not a valid direction. Try again.");
//         } else {
//             throw e;
//         }
//     }
// }

// function firstElement(array) {
//     if (array.length == 0) {
//         throw new Err("firstElement called with []");
//     }
//     return array[0];
// }

class MultiplivatorUnitfailure extends Error {}

// function primitiveMultiply(a, b) {
//     if (Math.random() > 0.8) {
//         return a * b;
//     } else {
//         throw new MultiplivatorUnitfailure("Klunk");
//     }
// }

// function reliableMultiply(a, b) {
//     for (;;) {
//         try {
//             return primitiveMultiply(a, b);
//         } catch (e) {
//             if (!(e instanceof MultiplivatorUnitfailure))
//                 throw e;
//         }
//     }
// }
// console.log(reliableMultiply(2, 7));

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(body) {
    let locked = box.locked;
    if (!locked) {
        return body();
    }
    box.unlock();
    try {
        return body();
    } finally {
        box.lock();
    }
}
withBoxUnlocked(function() {
    box.content.push("gold piece")
});
try {
    withBoxUnlocked(function() {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raisde: " + e);
}
console.log(box.locked);

console.log(/abc/.test("abcde"));
console.log(/abc/.test("abxde"));

console.log(/[0123456789]/.test("in 1992"));
console.log(/idan/.test("in 1992"));

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
console.log(dateTime.test("30-40-2003 15:20"));

let notBinary = /[01]/;
console.log(notBinary.test("1100100010100110"))
console.log(notBinary.test("1100100010100110"))

console.log(/'\d+'/.test("'123'"));
console.log(/'\d+'/.test("''"));
console.log(/'\d*'/.test("'123'"));
console.log(/'\d*'/.test("''"));

let neighbor = /neighbo?ur/;
console.log(neighbor.test("neighbour"));
console.log(neighbor.test("neighbur"));

let dateTim = /\w{1,2}-\d{1,3}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTim.test("hj-408-2073 8:45"));

let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.exec("Boohoooohoohooo"));

let match = /\d+/.exec("one two 100");
console.log(match);
console.log(match.index);

console.log("one two 100".match(/\d+/));

let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));

console.log(/bad(ly)?/.exec("bad"));
console.log(/(\d)+/.exec("12345"));

console.log(new Date());
console.log(new Date(2009, 11, 9));
console.log(new Date(2009, 11, 9, 12, 59, 89, 999));

console.log(new Date(2013, 11, 19).getTime());
console.log(new Date(1387407600000))

function getDate(string) {
    let [_, month, day, year] =
    /(\d{1,2})-(\d{1})-(\d{4})/.exec(string);
    return new Date(year, month - 1, day);
}

console.log(getDate("1-3-2003"));

console.log(/cat/.test("concatenate"));
console.log(/\bcat\b/.test("concatente"));

let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));
console.log(animalCount.test("15 pigchickens"));