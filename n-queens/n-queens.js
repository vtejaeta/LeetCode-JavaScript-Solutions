/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let board = new Array(n), left = new Array(n).fill(0), upDiag = new Array(2*n - 1).fill(0), bottomDiag = new Array(2*n - 1).fill(0), ans = [];
    
    
    for(let i = 0; i < n; i++){
        for(let j = 0; j<n;j++){
            board[i] = new Array(n).fill('.');
        }
    }
    
    NQueens(board, 0, ans, n, left, upDiag, bottomDiag);
    return ans;
};

function NQueens(board, col, ans, n, left, upDiag, bottomDiag){
    if(col == n){
        const newBoard = board.map(a => {
            let s = '';
            a.forEach(b => {
                s = s+b
            });
            return s;
        })
        ans.push(newBoard);
        return;
    }
    
    for(let row = 0; row < n; row++){
        if(left[row] == 0 && upDiag[n-1 + col-row] == 0 && bottomDiag[row+col] == 0){
            left[row] = 1;
            upDiag[n-1 +  col-row] = 1;
            bottomDiag[row + col] = 1;
            board[row][col] = 'Q';
            NQueens(board, col+1,ans,n,left,upDiag,bottomDiag);
            left[row] = 0;
            upDiag[n-1 +  col-row] = 0;
            bottomDiag[row + col] = 0;
            board[row][col] = '.';
        }
    }
}