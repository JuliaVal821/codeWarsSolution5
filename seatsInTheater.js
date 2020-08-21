https://www.codewars.com/kata/588417e576933b0ec9000045/train/javascript

    function seatsInTheater(nCols, nRows, col, row) {
        let peoplepR;
        let peoplepC;
        let total;
        { peoplepR = nRows - row;
            peoplepC = (nCols - col) + 1;
            total = peoplepR * peoplepC;  }
        return total;

    }