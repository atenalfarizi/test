

function tambah(variabel1, variabel2)
{
    return variabel1 + variabel2;
}

let hasil2 = tambah(5, 5);
let hasil3 = 10;

if (hasil2 >= 10 && hasil3 >= 10) {
    if (hasil2 >= 10){
        console.log ("hasilnya dah sesuai")
    } else {
        console.log("hasil sesuai hanya 1")
    }
} else {
    console.log("hasil tidak sesuai")
}

let z = true;

if (!z) {
    console.log("hasilnya true")
}

let orang = "udin";

switch (orang) {
    case "uhing":
    console.log("bukan");
    break;
    case "udin":
    console.log("iya")
    break;
    default:
    console.log("askdksa")
}
