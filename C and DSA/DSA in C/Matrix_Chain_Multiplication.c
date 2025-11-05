#include <stdio.h>
#include <limits.h>

void matrixChainOrder(int p[], int n) {
    int m[n][n];  // DP table for min multiplications
    int s[n][n];  // For storing split positions (parenthesization)

    // Initialize cost as 0 when multiplying one matrix
    for (int i = 1; i < n; i++) {
        m[i][i] = 0;
    }

    // l is the chain length (from 2 to n-1)
    for (int l = 2; l < n; l++) {
        for (int i = 1; i < n - l + 1; i++) {
            int j = i + l - 1; //i<j //after reordering the  i < n - l + 1 => i+l-1< n => j < n 
            m[i][j] = INT_MAX;  // Initialize to infinity

            // Try all possible splits between i and j
            for (int k = i; k < j; k++) { // i <= k < j
                int cost = m[i][k] + m[k+1][j] + p[i-1] * p[k] * p[j];
                if (cost < m[i][j]) {
                    m[i][j] = cost;
                    s[i][j] = k;  // Store the split position
                }
            }
        }
    }

    printf("Minimum number of multiplications: %d\n", m[1][n-1]);
    // (Optional: Print optimal parenthesization)
}

int main() {
    // Example: Matrices of dimensions 10x20, 20x30, 30x40, 40x30
    int p[] = {10, 20, 30, 40, 30};
    int n = sizeof(p) / sizeof(p[0]);

    matrixChainOrder(p, n);
    return 0;
}