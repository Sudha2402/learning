#include <stdio.h>
#include <stdbool.h>

#define V 4  // Number of vertices in the graph

// Function to print the solution (color assignments)
void printSolution(int color[]) {
    printf("Vertex colors:\n");
    for (int i = 0; i < V; i++)
        printf("Vertex %d -> Color %d\n", i, color[i]);
}

// Check if it's safe to color the vertex with the given color
bool isSafe(int v, bool graph[V][V], int color[], int c) {
    for (int i = 0; i < V; i++)
        if (graph[v][i] && c == color[i])
            return false;
    return true;
}

// Main backtracking function to color the graph
bool graphColoringUtil(bool graph[V][V], int m, int color[], int v) {
    // Base case: All vertices are colored
    if (v == V)
        return true;

    // Try different colors for vertex v
    for (int c = 1; c <= m; c++) {
        // Check if color c can be assigned to vertex v
        if (isSafe(v, graph, color, c)) {
            color[v] = c;

            // Recur to assign colors to the rest of the vertices
            if (graphColoringUtil(graph, m, color, v + 1))
                return true;

            // Backtrack: If coloring doesn't lead to a solution
            color[v] = 0;
        }
    }

    // If no color can be assigned to this vertex
    return false;
}

// Wrapper function for graph coloring
bool graphColoring(bool graph[V][V], int m) {
    int color[V];
    for (int i = 0; i < V; i++)
        color[i] = 0;  // Initialize all colors as 0 (uncolored)

    // Start coloring from vertex 0
    if (!graphColoringUtil(graph, m, color, 0)) {
        printf("Solution does not exist with %d colors\n", m);
        return false;
    }

    // Print the solution
    printf("Graph can be colored with %d colors:\n", m);
    printSolution(color);
    return true;
}

int main() {
    /* Create the following graph:
       (3)---(2)
        |   / |
        |  /  |
        | /   |
       (0)---(1)
    */
    bool graph[V][V] = {
        {0, 1, 1, 1},
        {1, 0, 1, 0},
        {1, 1, 0, 1},
        {1, 0, 1, 0}
    };
    int m = 3;  // Number of colors

    graphColoring(graph, m);

    return 0;
}