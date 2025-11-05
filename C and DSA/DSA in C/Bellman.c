#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <limits.h>

#define MAX_VERTICES 100
#define INF INT_MAX

typedef struct {
    int adj_matrix[MAX_VERTICES][MAX_VERTICES];
    char vertex_data[MAX_VERTICES][20]; // Assuming vertex names are up to 20 chars
    int size;
} Graph;

void init_graph(Graph* g, int size) {
    g->size = size;
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size; j++) {
            g->adj_matrix[i][j] = 0;
        }
        strcpy(g->vertex_data[i], "");
    }
}

void add_edge(Graph* g, int u, int v, int weight) {
    if (u >= 0 && u < g->size && v >= 0 && v < g->size) {
        g->adj_matrix[u][v] = weight;
    }
}

void add_vertex_data(Graph* g, int vertex, const char* data) {
    if (vertex >= 0 && vertex < g->size) {
        strcpy(g->vertex_data[vertex], data);
    }
}

int find_vertex_index(Graph* g, const char* data) {
    for (int i = 0; i < g->size; i++) {
        if (strcmp(g->vertex_data[i], data) == 0) {
            return i;
        }
    }
    return -1;
}

int bellman_ford(Graph* g, const char* start_vertex_data, int* distances, int* predecessors) {
    int start_vertex = find_vertex_index(g, start_vertex_data);
    if (start_vertex == -1) return -1;

    for (int i = 0; i < g->size; i++) {
        distances[i] = INF;
        predecessors[i] = -1;
    }
    distances[start_vertex] = 0;

    // Relax all edges |V| - 1 times
    for (int i = 0; i < g->size - 1; i++) {
        for (int u = 0; u < g->size; u++) {
            for (int v = 0; v < g->size; v++) {
                if (g->adj_matrix[u][v] != 0) {
                    if (distances[u] != INF && distances[u] + g->adj_matrix[u][v] < distances[v]) {
                        distances[v] = distances[u] + g->adj_matrix[u][v];
                        predecessors[v] = u;
                        printf("Relaxing edge %s->%s, Updated distance to %s: %d\n",
                               g->vertex_data[u], g->vertex_data[v], g->vertex_data[v], distances[v]);
                    }
                }
            }
        }
    }

    // Check for negative cycles
    for (int u = 0; u < g->size; u++) {
        for (int v = 0; v < g->size; v++) {
            if (g->adj_matrix[u][v] != 0) {
                if (distances[u] != INF && distances[u] + g->adj_matrix[u][v] < distances[v]) {
                    return 1; // Negative cycle found
                }
            }
        }
    }

    return 0; // No negative cycle
}

void get_path(Graph* g, int* predecessors, const char* start_vertex, const char* end_vertex, char* path) {
    int current = find_vertex_index(g, end_vertex);
    int start_idx = find_vertex_index(g, start_vertex);
    char temp_path[MAX_VERTICES * 40] = ""; // Buffer for path construction
    
    while (current != -1) {
        char node[40];
        sprintf(node, "%s", g->vertex_data[current]);
        
        if (strlen(temp_path) == 0) {
            strcpy(temp_path, node);
        } else {
            char new_path[80];
            sprintf(new_path, "%s->%s", node, temp_path);
            strcpy(temp_path, new_path);
        }
        
        current = predecessors[current];
        if (current == start_idx) {
            char new_path[80];
            sprintf(new_path, "%s->%s", start_vertex, temp_path);
            strcpy(temp_path, new_path);
            break;
        }
    }
    
    strcpy(path, temp_path);
}

int main() {
    Graph g;
    init_graph(&g, 5);

    add_vertex_data(&g, 0, "A");
    add_vertex_data(&g, 1, "B");
    add_vertex_data(&g, 2, "C");
    add_vertex_data(&g, 3, "D");
    add_vertex_data(&g, 4, "E");

    add_edge(&g, 3, 0, 4);   // D -> A, weight 4
    add_edge(&g, 3, 2, 7);    // D -> C, weight 7
    add_edge(&g, 3, 4, 3);    // D -> E, weight 3
    add_edge(&g, 0, 2, 4);    // A -> C, weight 4
    add_edge(&g, 2, 0, -3);   // C -> A, weight -3
    add_edge(&g, 0, 4, 5);    // A -> E, weight 5
    add_edge(&g, 4, 2, 3);    // E -> C, weight 3
    add_edge(&g, 1, 2, -4);   // B -> C, weight -4
    add_edge(&g, 4, 1, 2);    // E -> B, weight 2

    printf("\nThe Bellman-Ford Algorithm starting from vertex D:\n");
    
    int distances[MAX_VERTICES];
    int predecessors[MAX_VERTICES];
    int has_negative_cycle = bellman_ford(&g, "D", distances, predecessors);

    if (!has_negative_cycle) {
        for (int i = 0; i < g.size; i++) {
            if (distances[i] != INF) {
                char path[MAX_VERTICES * 40];
                get_path(&g, predecessors, "D", g.vertex_data[i], path);
                printf("%s, Distance: %d\n", path, distances[i]);
            } else {
                printf("No path from D to %s, Distance: Infinity\n", g.vertex_data[i]);
            }
        }
    } else {
        printf("Negative weight cycle detected. Cannot compute shortest paths.\n");
    }

    return 0;
}