
//Binary strings with no consecutive 1s.
function All_Binary_Strings(str, num) {
    let len = str.length;
    if (len == num) {
        console.log(str, " ");
        return;
    }
    else if (str[len - 1] == '1')
        All_Binary_Strings(str + '0', num);
    else {
        All_Binary_Strings(str + '0', num);
        All_Binary_Strings(str + '1', num);
    }
}

function print(num) {
    let word = "";
    word += '0';
    All_Binary_Strings(word, num);
    word = '1';
    All_Binary_Strings(word, num);
}

// driver's code

let n = 3;
print(n);

