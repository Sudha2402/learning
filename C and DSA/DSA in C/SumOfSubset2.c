#include <stdio.h>
#include <stdbool.h>

// Returns true if there's a subset of set[] with sum equal to given sum
bool isSubsetSum(int set[], int n, int sum) {
    // The value of dp[i][j] will be true if there's a subset of set[0..i-1] with sum j
    bool dp[n+1][sum+1];

    // Base Case 1: If sum is 0, empty subset always exists
    for (int i = 0; i <= n; i++)
        dp[i][0] = true;

    // Base Case 2: If sum is not 0 but set is empty
    for (int j = 1; j <= sum; j++)
        dp[0][j] = false;

    // Fill the DP table bottom-up
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= sum; j++) {
            // Case 3: If current element is greater than sum, exclude it
            if (set[i-1] > j)
                dp[i][j] = dp[i-1][j];
            // Case 4: Else check if sum can be obtained by either including or excluding
            else
                dp[i][j] = dp[i-1][j] || dp[i-1][j - set[i-1]];
        }
    }

    return dp[n][sum];
}

// Function to print the subset that sums to the target
void printSubset(int set[], int n, int sum, bool dp[n+1][sum+1]) {
    if (sum == 0) {
        printf("Empty subset\n");
        return;
    }
    
    if (n == 0 || !dp[n][sum]) {
        printf("No subset found\n");
        return;
    }

    // If current element is not part of the subset
    if (dp[n-1][sum]) {
        printSubset(set, n-1, sum, dp);
        return;
    }
    // If current element is part of the subset
    else if (sum >= set[n-1] && dp[n-1][sum - set[n-1]]) {
        printf("%d ", set[n-1]);
        printSubset(set, n-1, sum - set[n-1], dp);
    }
}

int main() {
    int set[] = {3, 4, 5, 2};
    int sum = 9;
    int n = sizeof(set)/sizeof(set[0]);

    if (isSubsetSum(set, n, sum)) {
        printf("Found a subset with given sum\n");
        
        // Reconstruct the DP table to print the subset
        bool dp[n+1][sum+1];
        for (int i = 0; i <= n; i++)
            dp[i][0] = true;
        for (int j = 1; j <= sum; j++)
            dp[0][j] = false;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= sum; j++) {
                if (set[i-1] > j)
                    dp[i][j] = dp[i-1][j];
                else
                    dp[i][j] = dp[i-1][j] || dp[i-1][j - set[i-1]];
            }
        }
        
        printf("Subset: ");
        printSubset(set, n, sum, dp);
        printf("\n");
    }
    else {
        printf("No subset with given sum\n");
    }

    return 0;
}