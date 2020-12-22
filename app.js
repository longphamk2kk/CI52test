let a1 = prompt("nhap mang 1").split(",")
let a2 = prompt('nhap mang 2').split(",")

function phan_tu(a1, a2) {

    let a = [],
        a3 = []

    for (let i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }

    for (let i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (let k in a) {
        a3.push(k);
    }

    return a3;
}
phan_tu(a1, a2)
console.log(phan_tu(a1, a2));