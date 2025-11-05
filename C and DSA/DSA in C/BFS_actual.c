#include <stdio.h>
#include <stdlib.h>
#define MAX_VERTICES 100

// Queue implementation for BFS
struct Queue {
    int items[MAX_VERTICES];
    int front;
    int rear;
};

// Graph representation (Adjacency Matrix)
struct Graph {
    int adjMatrix[MAX_VERTICES][MAX_VERTICES];
    int vertexValues[MAX_VERTICES];  // Stores actual vertex values
    int numVertices;
};


// Create mapping function
int getVertexIndex(struct Graph* graph, int value) {
    for (int i = 0; i < graph->numVertices; i++) {
        if (graph->vertexValues[i] == value) {
            return i;
        }
    }
    return -1;  // Vertex not found
}



// Function prototypes
struct Queue* createQueue();
void enqueue(struct Queue* q, int value);
int dequeue(struct Queue* q);
int isEmpty(struct Queue* q);
struct Graph* createGraph(int vertices);
void addEdge(struct Graph* graph, int src, int dest);
void bfs(struct Graph* graph, int startVertex);


// Create a queue
struct Queue* createQueue() {
    struct Queue* q = (struct Queue*)malloc(sizeof(struct Queue));
    q->front = -1;
    q->rear = -1;
    return q;
}

// Check if queue is empty
int isEmpty(struct Queue* q) {
    return (q->rear == -1);
}

// Add element to queue
void enqueue(struct Queue* q, int value) {
    if (q->rear == MAX_VERTICES - 1) {
        printf("Queue is full\n");
    } else {
        if (q->front == -1) {
            q->front = 0;
        }
        q->rear++;
        q->items[q->rear] = value;
    }
}

// Remove element from queue
int dequeue(struct Queue* q) {
    int item;
    if (isEmpty(q)) {
        printf("Queue is empty\n");
        item = -1;
    } else {
        item = q->items[q->front];
        q->front++;
        if (q->front > q->rear) {
            q->front = q->rear = -1;
        }
    }
    return item;
}

// Create a graph with given number of vertices
struct Graph* createGraph(int vertices) {
    struct Graph* graph = (struct Graph*)malloc(sizeof(struct Graph));
    graph->numVertices = vertices;
    
    for (int i = 0; i < vertices; i++) {
        for (int j = 0; j < vertices; j++) {
            graph->adjMatrix[i][j] = 0;
        }
    }
    return graph;
}






struct Graph* createGraph(int vertices, int values[]) {
    struct Graph* graph = (struct Graph*)malloc(sizeof(struct Graph));
    graph->numVertices = vertices;
    
    // Initialize vertex values
    for (int i = 0; i < vertices; i++) {
        graph->vertexValues[i] = values[i];
    }
    
    // Initialize adjacency matrix
    for (int i = 0; i < vertices; i++) {
        for (int j = 0; j < vertices; j++) {
            graph->adjMatrix[i][j] = 0;
        }
    }
    return graph;
}






// Add an edge to the graph
void addEdge(struct Graph* graph, int srcValue, int destValue) {
    int srcIndex = getVertexIndex(graph, srcValue);
    int destIndex = getVertexIndex(graph, destValue);
    
    if (srcIndex == -1 || destIndex == -1) {
        printf("Error: Vertex not found\n");
        return;
    }
    
    graph->adjMatrix[srcIndex][destIndex] = 1;
    graph->adjMatrix[destIndex][srcIndex] = 1;  // For undirected graph
}


// BFS algorithm implementation
void bfs(struct Graph* graph, int startVertex) {
    struct Queue* q = createQueue();
    int visited[MAX_VERTICES] = {0}; // Initialize all as not visited
    
    visited[startVertex] = 1; // Mark start vertex as visited
    enqueue(q, startVertex);   // Enqueue the start vertex
    
    while (!isEmpty(q)) {
        int currentVertex = dequeue(q);
        printf("Visited %d\n", currentVertex);
        
        // Visit all adjacent vertices
        for (int i = 0; i < graph->numVertices; i++) {
            if (graph->adjMatrix[currentVertex][i] == 1 && !visited[i]) {
                visited[i] = 1;
                enqueue(q, i);
            }
        }
    }

    free(q); // Free the queue memory
}







int main() {
    int vertexValues[] = {6, 0, 4, 2, 9, 14};
    int numVertices = sizeof(vertexValues)/sizeof(vertexValues[0]);
    
    struct Graph* graph = createGraph(numVertices, vertexValues);
    
    // Add edges using actual vertex values
    addEdge(graph, 6, 0);   // Edge between vertex 6 and 0
    addEdge(graph, 0, 4);   // Edge between vertex 0 and 4
    addEdge(graph, 4, 2);   // Edge between vertex 4 and 2
    addEdge(graph, 0, 9);   // Edge between vertex 0 and 9
    addEdge(graph, 2, 14);  // Edge between vertex 2 and 14
    addEdge(graph, 9, 14);  // Edge between vertex 9 and 14
    
    // BFS would also need to be modified to use vertex values
    // bfs(graph, 6); // Start BFS from vertex 6
    
    return 0;
}





/*
Handling Vertex Values vs. Indices in Graph Implementation
When your vertices have actual values (like 6, 0, 4, 2, 9, 14) rather than sequential indices (0, 1, 2, 3, 4, 5), you need to modify your approach to properly handle the mapping between vertex values and matrix indices.

Solution: Vertex-to-Index Mapping
Here's how to implement a graph that works with actual vertex values:

1. Modified Graph Structure
c
#include <stdio.h>
#include <stdlib.h>
#define MAX_VERTICES 100

struct Graph {
    int adjMatrix[MAX_VERTICES][MAX_VERTICES];
    int vertexValues[MAX_VERTICES];  // Stores actual vertex values
    int numVertices;
};

// Create mapping function
int getVertexIndex(struct Graph* graph, int value) {
    for (int i = 0; i < graph->numVertices; i++) {
        if (graph->vertexValues[i] == value) {
            return i;
        }
    }
    return -1;  // Vertex not found
}
2. Modified Add Edge Function
c
void addEdge(struct Graph* graph, int srcValue, int destValue) {
    int srcIndex = getVertexIndex(graph, srcValue);
    int destIndex = getVertexIndex(graph, destValue);
    
    if (srcIndex == -1 || destIndex == -1) {
        printf("Error: Vertex not found\n");
        return;
    }
    
    graph->adjMatrix[srcIndex][destIndex] = 1;
    graph->adjMatrix[destIndex][srcIndex] = 1;  // For undirected graph
}
3. Complete Implementation Example
c
struct Graph* createGraph(int vertices, int values[]) {
    struct Graph* graph = (struct Graph*)malloc(sizeof(struct Graph));
    graph->numVertices = vertices;
    
    // Initialize vertex values
    for (int i = 0; i < vertices; i++) {
        graph->vertexValues[i] = values[i];
    }
    
    // Initialize adjacency matrix
    for (int i = 0; i < vertices; i++) {
        for (int j = 0; j < vertices; j++) {
            graph->adjMatrix[i][j] = 0;
        }
    }
    return graph;
}

int main() {
    int vertexValues[] = {6, 0, 4, 2, 9, 14};
    int numVertices = sizeof(vertexValues)/sizeof(vertexValues[0]);
    
    struct Graph* graph = createGraph(numVertices, vertexValues);
    
    // Add edges using actual vertex values
    addEdge(graph, 6, 0);   // Edge between vertex 6 and 0
    addEdge(graph, 0, 4);   // Edge between vertex 0 and 4
    addEdge(graph, 4, 2);   // Edge between vertex 4 and 2
    addEdge(graph, 0, 9);   // Edge between vertex 0 and 9
    addEdge(graph, 2, 14);  // Edge between vertex 2 and 14
    addEdge(graph, 9, 14);  // Edge between vertex 9 and 14
    
    // BFS would also need to be modified to use vertex values
    // bfs(graph, 6); // Start BFS from vertex 6
    
    return 0;
}
How This Works
Vertex Storage:

vertexValues array stores the actual vertex numbers (6, 0, 4, etc.)

The adjacency matrix uses sequential indices (0 to 5) internally

Mapping:

getVertexIndex() converts vertex values to matrix indices

Example: Vertex 6 → index 0, Vertex 0 → index 1, etc.

Edge Addition:

When calling addEdge(graph, 6, 0), it:

Finds index of 6 (0)

Finds index of 0 (1)

Sets adjMatrix[0][1] and adjMatrix[1][0] to 1

Visualization
For vertices {6, 0, 4, 2, 9, 14}:

Vertex-to-Index Mapping:
text
Value: 6 → Index 0
Value: 0 → Index 1
Value: 4 → Index 2
Value: 2 → Index 3
Value: 9 → Index 4
Value: 14 → Index 5
Adjacency Matrix After Adding Edges:
text
     0(6) 1(0) 2(4) 3(2) 4(9) 5(14)
0(6) [0    1    0    0    0    0]
1(0) [1    0    1    0    1    0]
2(4) [0    1    0    1    0    0]
3(2) [0    0    1    0    0    1]
4(9) [0    1    0    0    0    1]
5(14)[0    0    0    1    1    0]
Modified BFS Implementation
c
void bfs(struct Graph* graph, int startValue) {
    int startIndex = getVertexIndex(graph, startValue);
    if (startIndex == -1) return;
    
    int visited[MAX_VERTICES] = {0};
    struct Queue* q = createQueue();
    
    visited[startIndex] = 1;
    enqueue(q, startValue);  // Store actual value in queue
    
    while (!isEmpty(q)) {
        int currentValue = dequeue(q);
        int currentIndex = getVertexIndex(graph, currentValue);
        printf("Visited %d\n", currentValue);
        
        for (int i = 0; i < graph->numVertices; i++) {
            if (graph->adjMatrix[currentIndex][i] == 1 && !visited[i]) {
                visited[i] = 1;
                enqueue(q, graph->vertexValues[i]);  // Enqueue actual value
            }
        }
    }
    free(q);
}
Key Points
Separation of Concerns:

Internal representation uses indices (0 to n-1)

External interface uses vertex values

Conversion at Boundaries:

Convert vertex values to indices when accessing the matrix

Convert back to values when returning results

Flexibility:

Works with any integer vertex values

Maintains efficient O(1) edge lookups

Error Handling:

Check for invalid vertex values

Handle cases where vertices don't exist

This approach gives you the best of both worlds - the efficiency of matrix representation while supporting arbitrary vertex values.
*/
