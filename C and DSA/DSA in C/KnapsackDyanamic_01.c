// here it is generally sorted array with used for knapsack hence we not used any ration method. Knapsack fractional is proper implemention 







// The 0-1 Knapsack Problem is a classic dynamic programming problem where the goal is to maximize the total value of ( N ) items, each having a weight and a value, that can be included in a knapsack with a maximum weight capacity ( W ) without exceeding its capacity. It differs from the fractional knapsack problem, where we can take fractions of items. In the 0-1 knapsack problem, we can either take an item completely or leave it.

// problem, we can either take an item completely or leave it.

// Example

// Input:
// N = 4       // number of items
// W = 8     // maximum capacity of the knapsack
// values[] = {3, 4, 5, 6}    // values of the items
// weight[] = {2, 3, 4, 5}   // weights of the items

// Output:
// 10

// Explanation: In the above example, items with weights 3 and 5 were included in the knapsack to get a maximum value of 10.

// Recursion Approach for 0/1 Knapsack Problem
// The recursive approach is based on a idea of exploring all the combinations of items possible by including and excluding each item at every step and then decide to pick the subset having maximum value among all these subsets. To solve the 0-1 Knapsack problem using recursion we can follow the below approach:

// Approach:
// Define a function that takes knapsack capacity W, number of items N, array of item weights and array of values as it's parameters.
// If there are no items left i.e if n==0 or it the knapsack capacity is 0 i.e if W==0 then return 0. This will be the base case for the recursive function.
// If the weight of the current item is greater than the knapsack capacity, skip it and recursively call the function with remaining n-1 items.
// If the weight of the current item is less than or equal to the knapsack capacity, make two recursive calls:
// In the first one include the value of n-1th item and recursively call the function with reduced capacity W-weight[n-1] and n-1 items.
// In the second one exclude the current item and recursively call the function with unchanged capacity W and n-1 items.
// Return the maximum value obtained from the above recursive calls.

// C Program for 0-1 KnapSack Problem using Recursion
#include <stdio.h>

// Function to find maximum between two numbers
int max(int a, int b)
{
    if (a > b)
        return a;
    return b;
}

// Returns the maximum value that can be put in a knapsack of capacity W //use this to write in exam

int knapsackRecursive(int W, int wt[], int val[], int n)
{
    // Base Case
    if (n == 0 || W == 0)
        return 0;

    if (wt[n - 1] > W) //if in start any weight greater than the capicity then we have to move to next weight element.
        return knapsackRecursive(W, wt, val, n - 1);

    else
        return max(val[n - 1] + knapsackRecursive(W - wt[n - 1],
                                                  wt, val, n - 1),
                   knapsackRecursive(W, wt, val, n - 1));//recursive calling same as calling inside for loop from 0 to i that is number of objects
}

// Memoization Approach for 0/1 Knapsack Problem
// The recursion + memorization is a dynamic programming problem solving technique which is also known as Top-Down DP in which we optimize the recursive version of our solutions using an array to store the result of repeated subproblems from our recursive solution. To solve the 0-1 Knapsack problem using recursion+ memoization we can follow the below approach:

// Create a 2-D array named dp with number of rows= maximum number of items and number of columns = maximum capacity of knapsack.
// Initialize the dp array with -1.
// If the value for any subproblem(n,w) is already computed that is if dp[n][w]!=-1 return dp[n][w].
// Otherwise solve the problem using the recursive solution and store the result in dp[n][w].

// C Program for 0-1 Knapsack Problem Using Memoization

// C Program for 0-1 KnapSack Problem using Recursion +
// Memoization
#include <stdio.h>

// Maximum number of items and maximum capacity of the
// knapsack
#define MAX_ITEMS 100
#define MAX_CAPACITY 100

// Memoization table
int dp[MAX_ITEMS][MAX_CAPACITY];

// Function that returns maximum of two integers//used above
// int max(int a, int b)
// {
//     if (a > b)
//         return a;
//     return b;
// }

// Recursive function with memoization
int knapSackMemo(int W, int wt[], int val[], int n)
{
    // Base Case
    if (n == 0 || W == 0)
        return 0;

    // If value is already calculated, return it
    if (dp[n][W] != -1)
        return dp[n][W];

    if (wt[n - 1] > W)
        return dp[n][W] = knapSackMemo(W, wt, val, n - 1);

    else
        return dp[n][W] = max(val[n - 1] + knapSackMemo(W - wt[n - 1], wt,
                                                        val, n - 1),
                              knapSackMemo(W, wt, val, n - 1));
}

// Time Complexity: O(N*W), where N is the total number of items and W is the maximum capacity of the knapsack.
// Auxiliary Space: O(N*W)

// Note: The code for this approach almost remains same as the recursive approach, only a 2D array is added to optimize the code.

// Tabulation or Bottom-up Approach for 0/1 Knapsack Problem

// The tabulation method is also a dynamic programming technique which is also known as Bottom-Up DP where we store the results of smaller subproblems into a table and then use the result of the smaller subproblems iteratively to solve the larger subproblems and find the actual result. To solve the 0-1 Knapsack problem using tabulation we can follow the below approach:

// Approach
// Create a 2D array dp of size (n+1)x(w+1), where dp[i][j] will store the maximum result for i items and j capacity of the knapsack.
// Initialize the dp[0][j] and dp[i][0] with 0 as the maximum profit will be 0 when either there are no items or the capacity of the knapsack is zero.
// For each item i from 1 to n and for each capacity w from 1 to j.
// If the weight of the current item wt[i-1] is less than or equal to w, then:
// dp[i][w] = max(val[i-1] + dp[i-1][w - wt[i-1]], dp[i-1][j])
// Otherwise, if the weight of the current item is more than w, then:
// dp[i][j] = dp[i-1][j] (same value as without considering the current item)
// Return the value of dp[n][w] that will contain the maximum value that can be achieved with the full capacity W using all n items.

// C Program for 0-1 Knapsack Problem Using Tabulation

// C Program for 0-1 KnapSack Problem using Tabulation
// #include <stdio.h>

// Maximum number of items and maximum capacity of the
// knapsack
#define MAX_ITEMS 100
#define MAX_CAPACITY 100

// Function that returns maximum of two integers
// int max(int a, int b)
// {
//     if (a > b)
//         return a;
//     return b;
// }

// Tabulation function for 0-1 Knapsack
int knapSackTabulation(int W, int wt[], int val[], int n)
{
    // Create a DP table
    int dp[n + 1][W + 1];

    // Initialize DP table (base cases)
    for (int i = 0; i <= n; ++i)
    {
        for (int w = 0; w <= W; ++w)
        {
            if (i == 0 || w == 0)
                dp[i][w] = 0;
            else if (wt[i - 1] <= w)
                dp[i][w] = max(
                    val[i - 1] + dp[i - 1][w - wt[i - 1]],
                    dp[i - 1][w]);
            else
                dp[i][w] = dp[i - 1][w];
        }
    }

    // Return the maximum value that can be put in the
    // knapsack of capacity W
    return dp[n][W];
}

// Time Complexity: O(N*W), where N is the total number of items and W is the maximum capacity of the knapsack.
// Auxiliary Space: O(N*W)


















// Driver Code
int main()
{
    // int values[] = {3, 4, 5, 6};
    // int weight[] = {2, 3, 4, 5};
    // int W = 8;


     int values[] = {10,5,15,7,6,18,3};
    int weight[] = {2, 3, 5,7,1,4,1};
    int W = 15;
// The maximum profit is 54, achieved by selecting items 1, 2, 3, 5, 6.


    // Find the number of items
    int n = sizeof(values) / sizeof(values[0]);//4

    // Output the maximum profit for the knapSack using recursion
    printf(
        "Maximum value that can be put in knapsack: %d\n",
        knapsackRecursive(W, weight, values, n));



// using method 2
    for (int i = 0; i <= n; ++i)
    {
        for (int j = 0; j <= W; ++j)
        {
            dp[i][j] = -1;
        }
    }

    // Output the maximum profit of the knapSack using method 3
    printf(
        "Maximum value that can be put in knapsack: %d\n",
        knapSackMemo(W, weight, values, n));

    printf(
        "Maximum value that can be put in knapsack: %d\n",
        knapSackTabulation(W, weight, values, n));

    return 0;
}