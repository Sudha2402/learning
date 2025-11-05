#include <stdio.h>
#include <stdlib.h>
#define MAX_VERTICES 100

// Graph structure using adjacency matrix
struct Graph {
    int adjMatrix[MAX_VERTICES][MAX_VERTICES];
    int numVertices;
};

// Function prototypes
struct Graph* createGraph(int vertices);
void addEdge(struct Graph* graph, int src, int dest);
void DFS(struct Graph* graph, int vertex, int visited[]);
void DFSTraversal(struct Graph* graph, int startVertex);

int main() {
    // Create a graph with 5 vertices (0-4)
    struct Graph* graph = createGraph(5);
    
    // Add edges
    addEdge(graph, 0, 1);
    addEdge(graph, 0, 2);
    addEdge(graph, 1, 3);
    addEdge(graph, 2, 4);
    addEdge(graph, 3, 4);
    
    printf("DFS Traversal starting from vertex 0:\n");
    DFSTraversal(graph, 0);
    
    return 0;
}

// Create a graph with given number of vertices
struct Graph* createGraph(int vertices) {
    // Allocate memory for graph structure
    struct Graph* graph = (struct Graph*)malloc(sizeof(struct Graph));
    graph->numVertices = vertices;
    
    // Initialize adjacency matrix with all zeros (no edges)
    for (int i = 0; i < vertices; i++) {
        for (int j = 0; j < vertices; j++) {
            graph->adjMatrix[i][j] = 0;
        }
    }
    return graph;
}

// Add an edge between two vertices
void addEdge(struct Graph* graph, int src, int dest) {
    // For undirected graph, add both directions
    graph->adjMatrix[src][dest] = 1;
    graph->adjMatrix[dest][src] = 1;
}

// Recursive DFS function
void DFS(struct Graph* graph, int vertex, int visited[]) {
    // Mark the current vertex as visited
    visited[vertex] = 1;
    printf("Visited %d\n", vertex);
    
    // Visit all adjacent vertices
    for (int i = 0; i < graph->numVertices; i++) {
        // If there's an edge and the vertex isn't visited
        if (graph->adjMatrix[vertex][i] == 1 && !visited[i]) {
            DFS(graph, i, visited); // Recursive call
        }
    }
}

// Initialize DFS traversal
void DFSTraversal(struct Graph* graph, int startVertex) {
    // Create visited array to track visited vertices
    int visited[MAX_VERTICES] = {0}; // Initialize all to 0 (not visited)
    
    // Start DFS from the given vertex
    DFS(graph, startVertex, visited);
}