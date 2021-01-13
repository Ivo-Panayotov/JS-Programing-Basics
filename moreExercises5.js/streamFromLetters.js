function letters(input) {
    let char = input.shift();
    let singleWord = ``;
    let counterC = 0;
    let counterO = 0;
    let counterN = 0;
    let finalQuote = ``
    let latinCheck = false;
   
    while (char !== `End`) {
        if (char === `a` || char === `b` || char === `c` || char === `d` || char === `e` || char === `f` || char === `g` || char === `h`
        || char === `j` || char === `i` || char === `k` || char === `l` || char === `m` || char === `n` || char === `o` || char === `p` || char === `q`
        || char === `r` || char === `s` || char === `t` || char === `u` || char === `v` || char === `w` || char === `x` || char === `y` || char === `z`
        || char === `A` || char === `B` || char === `C` || char === `D` || char === `E` || char === `F` || char === `G` || char === `H`
        || char === `J` || char === `I` || char === `K` || char === `L` || char === `M` || char === `N` || char === `O` || char === `P` || char === `Q`
        || char === `R` || char === `S` || char === `T` || char === `U` || char === `V` || char === `W` || char === `X` || char === `Y` || char === `Z`) {
        latinCheck = true;
    } else {
        latinCheck = false;
    }
        if (char === `c`) {
            if (counterC > 0) {
                singleWord += char;
            }
            counterC++;
        }
        if (char === `o`) {
            if (counterO > 0) {
                singleWord += char;
            }
            counterO++;
        }
        if (char === `n`) {
            if (counterN > 0) {
                singleWord += char;
            }
            counterN++;
        }
        if (char !== `o` && char !== `c` && char !== `n`) {
            if (latinCheck) {
                singleWord += char;
            } 

        }
        if (counterC > 0 && counterN > 0 && counterO > 0) {
            singleWord += ` `;
            counterC = 0;
            counterO = 0;
            counterN = 0;
            finalQuote = singleWord;
        }
        char = input.shift();
    }

    console.log(finalQuote);
}
letters([
    `S`,
    `%`,
    `o`,
    `l`,
    `^`,
    `v`,
    `e`,
    `c`,
    `n`,
    `&`,
    `m`,
    `e`,
    `c`,
    `o`,
    `n`,
    `End`]);