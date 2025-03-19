#include <stdio.h>
#include <stdlib.h>

// Traversing the graph

// Breath first search

/*
function bfs(graph, root)
{
    let visited = new Set();
    let queue = [root];
    while (queue.length > 0)
    {
        let node = queue.shift();
        if (!visited.has(node))
        {
            visited.add(node);
            console.log(node);
            for (let neighbor of graph[node])
            {
                if (!visited.has(neighbor))
                {
                    queue.push(neighbor);
                }
            }
        }
    }
}
// Depth first search
function dfs(graph, root)
{
    let visited = new Set();
    dfsHelper(graph, root, visited);
}
function dfsHelper(graph, node, visited)
{
    visited.add(node);
    console.log(node);
    for (let neighbor of graph[node])
    {
        if (!visited.has(neighbor))
        {
            dfsHelper(graph, neighbor, visited);

        }
    }

    */

/*
int size = 10;
int queue[size]={};
int front = -1, rear = -1;
int enqueue(int item)
{
    if (rear == size - 1)
    {
        printf("Queue is full\n");
    }
    */
/*
else if(front==-1 && rear==-1){
    front = -1;
    rear=0;
    queue[rear]=item;
}
*/
/*
 else
 {
     rear++;
     queue[rear] = item;
 }
 return front;
}
int dequeue()
{
 if (front == -1)
 {
     printf("Queue is empty\n");
 }
 else if (front == rear)
 {
     front = -1;
     rear = -1;
 }
 else
 {
     front++;
 }
 return front;
}
void traverseQueue(int queueT){
 int i = 0;
 for (i=front;i<=rear;i++){
     printf("Queue Traverse : %d ",queueT[i]);

 }
}

int main(){
*/
/*
int choice, item;
while(1){
    printf("1. Enqueue\n2. Dequeue\n3. Traverse\n");
   scanf("%d",&choice);
}

*/

/*
front=enqueue(20);
front=enqueue(30);
front=enqueue(40);
traverseQueue(queue);



}
*/

int visited[7] = {0, 0, 0, 0, 0, 0, 0};
int visitedDFS[7] = {0, 0, 0, 0, 0, 0, 0};
int a[7][7] = {
    {0, 1, 1, 1, 0, 0, 0},
    {1, 0, 1, 0, 0, 0, 0},
    {1, 1, 0, 1, 1, 0, 0},
    {1, 0, 1, 0, 1, 0, 0},
    {0, 0, 1, 1, 0, 1, 1},
    {0, 0, 0, 0, 1, 0, 0},
    {0, 0, 0, 0, 1, 0, 0}}; // adjacency matrix

struct queue // exploration queue from which elements will be dequeued after choosing in the visited and enqueued in visited after writing all connected in exploration//exploration se pop karo aur popped ke coonected node enqueue karo exploration me
{
    int front, rear, size;
    int *arr;
};
void enqueue(struct queue *q, int value)
{
    if (q->rear == q->size - 1)
    {
        printf("Queue is full\n");
    }
    else
    {
        q->rear++;
        q->arr[q->rear] = value;
    }
}

int isEmpty(struct queue *q)
{
    if (q->front == q->rear)
    {
        // printf("Queue is empty\n");
        return 1;
    }
    return 0;
}

int dequeue(struct queue *q)
{
    if (q->front == q->rear)
    {
        printf("Queue is empty\n");
    }
    else
    {
        q->front++;
        return q->arr[q->front]; // front element of the queue
    }
    return q->arr[q->front];
}

// depth first search
void DFS(int i)
{
    printf("visited using DFS :%d\n", i);
    visitedDFS[i] = 1;
    for (int j = 0; j < 7; j++)
    {
        if (a[i][j] == 1 && !visitedDFS[j])
        {
            DFS(j);
        }
    }
}

int main()
{
    struct queue q;
    q.size = 500;
    q.front = -1;
    q.rear = -1;
    q.arr = (int *)malloc(q.size * sizeof(int)); // creating dynamic array//space is reserved

    /* //general queue implimentation to enqueue and dequeue
        enqueue(&q, 10);
        enqueue(&q, 20);
        enqueue(&q, 30);
        enqueue(&q, 40);
        enqueue(&q, 50);
        printf("%d\n",dequeue(&q));//10 is dequeued at index 0

        printf("%d\n",dequeue(&q));
    */

    int node;
    int i = 1;      // starting node of graph choosen by you for traversal
    visited[i] = 1; // since i=1 is chhosed means it is visited
    enqueue(&q, i);
    printf("first visisted node :%d \n", i);

    while (!isEmpty(&q))
    {
        node = dequeue(&q);
        printf("Dequeued node from exploration :%d \n", node);
        for (int j = 0; j < 7; j++)
        {
            if (a[node][j] == 1 && visited[j] == 0)
            {
                printf("visited node : %d\n", j);

                enqueue(&q, j);
                visited[j] = 1; // enqueued and visited are done similtanously or together because both array and queue holds same sequence hence donot affect the order
                // printf("visited node : %d\n", j);
            }
        }
    }

    printf("\n\n");

    // DFS
    DFS(1);

    return 0;
}

/*
first visisted node :1 
Dequeued node from exploration :1 
visited node : 0
visited node : 2
Dequeued node from exploration :0
visited node : 3
Dequeued node from exploration :2
visited node : 4
Dequeued node from exploration :3
Dequeued node from exploration :4
visited node : 5
visited node : 6
Dequeued node from exploration :5
Dequeued node from exploration :6


visited using DFS :1
visited using DFS :0
visited using DFS :2
visited using DFS :3
visited using DFS :4
visited using DFS :5
visited using DFS :6
PS C:\Sudhadocuments\DSA\DSA> 
*/