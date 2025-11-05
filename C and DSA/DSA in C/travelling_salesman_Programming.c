#include <stdio.h>
#include <limits.h>

#define MAX_CITIES 20
#define INF INT_MAX

int n; // Number of cities
int dist[MAX_CITIES][MAX_CITIES]; // Distance matrix
int dp[1 << MAX_CITIES][MAX_CITIES]; // DP table

int min(int a, int b) {
    return (a < b) ? a : b;
}

int tsp(int mask, int pos) {
    // If all cities visited, return to start (city 0)
    if (mask == (1 << n) - 1) {
        return dist[pos][0];
    }

    // If already computed, return memoized value
    if (dp[mask][pos] != -1) {
        return dp[mask][pos];
    }

    int min_cost = INF;

    // Try visiting each unvisited city
    for (int city = 0; city < n; city++) {
        if (!(mask & (1 << city))) {
            int new_mask = mask | (1 << city);
            int new_cost = dist[pos][city] + tsp(new_mask, city);
            min_cost = min(min_cost, new_cost);
        }
    }

    return dp[mask][pos] = min_cost;
}

int main() {
    printf("Enter number of cities (max %d): ", MAX_CITIES);
    scanf("%d", &n);

    printf("Enter distance matrix (n x n):\n");
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            scanf("%d", &dist[i][j]);
        }
    }

    // Initialize DP table with -1 (uncomputed)
    for (int i = 0; i < (1 << n); i++) {
        for (int j = 0; j < n; j++) {
            dp[i][j] = -1;
        }
    }

    int min_tour_cost = tsp(1, 0); // Start at city 0 (mask = 0001)

    printf("Minimum TSP cost: %d\n", min_tour_cost);
    return 0;
}