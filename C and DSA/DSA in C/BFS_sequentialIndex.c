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
    int numVertices;
};

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

// Add an edge to the graph
void addEdge(struct Graph* graph, int src, int dest) {
    graph->adjMatrix[src][dest] = 1;
    graph->adjMatrix[dest][src] = 1; // For undirected graph
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
    struct Graph* graph = createGraph(6);
    addEdge(graph, 0, 1);
    addEdge(graph, 0, 2);
    addEdge(graph, 1, 2);
    addEdge(graph, 1, 4);
    addEdge(graph, 2, 3);
    addEdge(graph, 3, 4);
    
    printf("BFS Traversal starting from vertex 0:\n");
    bfs(graph, 0);
    
    return 0;
}



/*

1. Queue Implementation
c
struct Queue {
    int items[MAX_VERTICES];  // Array to store queue elements
    int front;               // Front index
    int rear;                // Rear index
};
Defines a queue structure using an array with MAX_VERTICES capacity

Uses front and rear pointers to track positions

c
struct Queue* createQueue() {
    struct Queue* q = (struct Queue*)malloc(sizeof(struct Queue));
    q->front = -1;  // Initialize front as -1 (empty)
    q->rear = -1;   // Initialize rear as -1 (empty)
    return q;
}
Allocates memory for a new queue

Initializes both front and rear to -1 (empty state)

c
int isEmpty(struct Queue* q) {
    return (q->rear == -1);  // Queue is empty if rear is -1
}
Returns 1 (true) if queue is empty, 0 otherwise

c
void enqueue(struct Queue* q, int value) {
    if (q->rear == MAX_VERTICES - 1) {
        printf("Queue is full\n");
    } else {
        if (q->front == -1) {  // If queue was empty
            q->front = 0;      // Set front to 0
        }
        q->rear++;             // Increment rear
        q->items[q->rear] = value;  // Add value at rear
    }
}
Adds an element to the rear of the queue

Handles queue full condition

Adjusts front pointer if adding first element

c
int dequeue(struct Queue* q) {
    int item;
    if (isEmpty(q)) {
        printf("Queue is empty\n");
        item = -1;
    } else {
        item = q->items[q->front];  // Get front element
        q->front++;                // Move front forward
        if (q->front > q->rear) {  // If queue becomes empty
            q->front = q->rear = -1; // Reset pointers
        }
    }
    return item;
}
Removes and returns front element

Handles empty queue case

Resets pointers when queue becomes empty

2. Graph Implementation
c
struct Graph {
    int adjMatrix[MAX_VERTICES][MAX_VERTICES];  // Adjacency matrix
    int numVertices;                           // Number of vertices
};
Represents graph using adjacency matrix

Tracks number of vertices

c
struct Graph* createGraph(int vertices) {
    struct Graph* graph = (struct Graph*)malloc(sizeof(struct Graph));
    graph->numVertices = vertices;
    
    for (int i = 0; i < vertices; i++) {
        for (int j = 0; j < vertices; j++) {
            graph->adjMatrix[i][j] = 0;  // Initialize all to 0 (no edges)
        }
    }
    return graph;
}
Creates graph with specified number of vertices

Initializes adjacency matrix with all zeros (no edges)

c
void addEdge(struct Graph* graph, int src, int dest) {
    graph->adjMatrix[src][dest] = 1;  // Add edge from src to dest
    graph->adjMatrix[dest][src] = 1;  // For undirected graph
}
Adds edge between two vertices (both directions for undirected graph)

Sets matrix entries to 1 to indicate edge presence

3. BFS Algorithm
c
void bfs(struct Graph* graph, int startVertex) {
    struct Queue* q = createQueue();          // Create queue for BFS
    int visited[MAX_VERTICES] = {0};         // Initialize visited array
    
    visited[startVertex] = 1;                // Mark start vertex as visited
    enqueue(q, startVertex);                 // Enqueue starting vertex
    
    while (!isEmpty(q)) {                    // Continue until queue is empty//as this quesue is the exploration queue from where elements are popped once all coonected is put in visited array
        int currentVertex = dequeue(q);      // Dequeue a vertex
        printf("Visited %d\n", currentVertex); // Process the vertex
        
        // Visit all adjacent vertices
        for (int i = 0; i < graph->numVertices; i++) {
            // If adjacent and not visited
            if (graph->adjMatrix[currentVertex][i] == 1 && !visited[i]) {
                visited[i] = 1;             // Mark as visited
                enqueue(q, i);               // Enqueue for later processing
            }
        }
    }
    free(q);  // Free queue memory
}
BFS Execution Flow:
Initialization:

Creates empty queue

Initializes visited array (all 0/false)

Start Processing:

Marks starting vertex as visited

Enqueues starting vertex

Main Loop:

Dequeues vertex (current vertex)

Processes it (prints in this case)

Finds all unvisited adjacent vertices:

Marks them as visited

Enqueues them for later processing

Termination:

When queue is empty, BFS completes

Frees queue memory

Visualization Example
For the graph created in main():

text
0
/ \
1   2
|   |
4   3
BFS starting at 0 would visit nodes in this order:

Dequeue 0 → visit 0 → enqueue 1, 2

Dequeue 1 → visit 1 → enqueue 4

Dequeue 2 → visit 2 → enqueue 3

Dequeue 4 → visit 4

Dequeue 3 → visit 3

Output:

text
Visited 0
Visited 1
Visited 2
Visited 4
Visited 3
This implementation shows the classic level-order traversal characteristic of BFS, where all nodes at depth k are visited before nodes at depth k+1.

*/



/*
Understanding Queue Operations and Graph Indexing in BFS
Let me clarify how the queue operations work and how they relate to the graph adjacency matrix in the BFS implementation.

Queue Dequeue Operation
c
int currentVertex = dequeue(q);
What dequeue() Returns:
The dequeue() function returns the value (not index) of the item that was at the front of the queue

In our BFS implementation, this value represents a vertex number (e.g., 0, 1, 2, etc.)

These vertex numbers serve as indices into our graph's adjacency matrix

Graph Adjacency Matrix Indexing
c
graph->adjMatrix[currentVertex][i] == 1 && !visited[i]
How This Works:
currentVertex is the vertex we're currently processing (dequeued from the queue)

We scan through all possible adjacent vertices (i from 0 to numVertices-1)

graph->adjMatrix[currentVertex][i] == 1 checks if there's an edge from currentVertex to vertex i

!visited[i] checks if vertex i hasn't been visited yet

Example Visualization
Consider this graph (adjacency matrix representation):

text
Vertices: 0, 1, 2, 3

Edges:
0-1
0-2
1-3
Adjacency Matrix:

text
   0 1 2 3
0 [0 1 1 0]
1 [1 0 0 1]
2 [1 0 0 0]
3 [0 1 0 0]
BFS Execution Steps:
Initial State:

Queue: [0]

Visited: [1, 0, 0, 0] (only vertex 0 visited)

First Dequeue:

currentVertex = dequeue(q) → returns 0

Now check all possible adjacent vertices (i = 0 to 3):

graph->adjMatrix[0][0] = 0 → skip

graph->adjMatrix[0][1] = 1 and !visited[1] → visit 1

graph->adjMatrix[0][2] = 1 and !visited[2] → visit 2

graph->adjMatrix[0][3] = 0 → skip

Enqueue 1 and 2

Queue: [1, 2]

Visited: [1, 1, 1, 0]

Second Dequeue:

currentVertex = dequeue(q) → returns 1

Check adjacent vertices:

graph->adjMatrix[1][0] = 1 but visited[0] → skip

graph->adjMatrix[1][1] = 0 → skip

graph->adjMatrix[1][2] = 0 → skip

graph->adjMatrix[1][3] = 1 and !visited[3] → visit 3

Enqueue 3

Queue: [2, 3]

Visited: [1, 1, 1, 1]

Key Points
Vertex Numbers as Indices:

The vertex numbers (0, 1, 2, etc.) directly correspond to matrix indices

currentVertex is both:

The value stored in the queue

The row index in the adjacency matrix

Adjacency Matrix Interpretation:

graph->adjMatrix[i][j] == 1 means there's an edge from vertex i to vertex j

The diagonal (i == j) is typically 0 (no self-loops)

Queue Contents:

The queue always contains vertex numbers (not their positions in the queue)

These numbers remain meaningful even after dequeueing

Visited Array:

The visited array is indexed by vertex numbers

visited[i] corresponds to whether vertex i has been visited

Why This Design Works
Direct Addressing:

Vertex numbers serve as perfect array indices

No need for additional mapping structures

Efficiency:

O(1) access to adjacency information

Simple integer comparisons for visited checks

Clarity:

The relationship between vertex numbers and matrix indices is intuitive

Makes the code easier to understand and debug

This implementation leverages the fact that in C, array indices are integers starting from 0, which aligns perfectly with our vertex numbering system. The queue stores and retrieves these vertex numbers, which are then used to directly access the graph's adjacency information.
*/