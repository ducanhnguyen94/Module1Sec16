let word = prompt('Nhap tu can kiem tra');

const isPalindrome = word => {
    let wordReverse = word.split('').reverse().join('');
    if (word === wordReverse) {
        console.log(true);
    } else { console.log(false) };
};

// isPalindrome(word);

const isPalindrome2 = word => {
    let confirm = true;
    for (let i = 1; i < word.length - 1; i++) {
        if (word[i] !== word[word.length - i - 1]) {
            confirm = false;
            break;
        } else {
            confirm = true;
        };
    };
    console.log(confirm);
};

isPalindrome2(word);