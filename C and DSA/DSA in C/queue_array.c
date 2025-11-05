#include <stdio.h>
#include <stdlib.h>

struct queue
{
    int size;
    int f;
    int r;
    int *arr;
};

int isEmpty(struct queue *q)
{
    if (q->r == q->f)
    {
        return 1;
    }
    return 0;
}

int isFull(struct queue *q)
{
    // if ((q->r == q->size - 1) && ((q->r) - (q->f) == q->size))//not gives full coorectly even after 4 elements
    if (((q->r) - (q->f) == q->size)) // ok to satisfy
    {
        return 1;
    }
    return 0;
}

void enqueue(struct queue *q, int val)
{
    if (isFull(q))
    {
        printf("This Queue is full and we can't enqueue %d\n", val);
    }
    else
    {
        q->r++;
        q->arr[q->r] = val;
        printf("Enqued element: %d\n", val);
    }
}

int dequeue(struct queue *q)
{

    // following deque only dequeue the elemnt and shift front position due to which rear value will not have any change and it will remain at its's index and gives "full" even if deque creates space
    /*
Queue:
15      1       2
This Queue is full
    */
    // printf("q->r :%d\n", q->r);

    int a = -1;
    if (isEmpty(q))
    {
        printf("This Queue is empty\n");
    }
    else
    {

        q->f++; // f increased by 1 from -1 as per start and now it becomes 0 and 0 index element is the element to delete and as front points it , it is nomore counted in queue element
        a = q->arr[q->f];

        // below are stupid logic only isfull is to be handled correctly with condition (rear-front==size)
        //  q->f=-1;
        //  q->r--;
        //  q->r++; // to balance the full after dequeue
        //  q->arr[q->r] = NULL;
    }
    // printf("q->r :%d\n", q->r);
    // printf("q->f :%d\n", q->f);
    // printf("q->size:%d\n", q->size);
    return a; // new element at front //if it is empty then it returns -1

    /*
    in case of calling dequeue when it is empty
    This Queue is empty
    Dequeuing element -1
    */
}

void show(struct queue *q)
{
    if (isEmpty(q))
    {
        printf("This Queue is empty\n");
    }
    else
    {
        printf("Queue:\n");
        for (int i = q->f + 1; i <= q->r; i++)
        {
            printf("%d\t", q->arr[i]);
        }
        printf("\n");
    }
}

int main()
{
    struct queue q; // if it would have been a pointer struct queue *q; than only q have been passed in functions like enqueue(&q, 12);
    // q.size = 4;
    q.size = 3;
    q.f = q.r = -1; // f and r holds indexes
    q.arr = (int *)malloc(q.size * sizeof(int));

    // Enqueue few elements
    enqueue(&q, 12);
    enqueue(&q, 15);
    enqueue(&q, 1);
    enqueue(&q, 2);
    show(&q);
    enqueue(&q, 7);

    printf("Dequeuing element %d\n", dequeue(&q));
    show(&q);
    enqueue(&q, 6);
    show(&q);
    enqueue(&q, 4);
    show(&q);
    printf("Dequeuing element %d\n", dequeue(&q));
    show(&q);
    printf("Dequeuing element %d\n", dequeue(&q));
    show(&q);
    printf("Dequeuing element %d\n", dequeue(&q));
    show(&q);
    printf("Dequeuing element %d\n", dequeue(&q)); // Dequeuing element -1
    show(&q);                                      // This Queue is empty
    enqueue(&q, 45);
    show(&q);
    enqueue(&q, 54);
    show(&q);
    enqueue(&q, 95);
    show(&q);

    return 0;
}

/*

Enqued element: 12
Enqued element: 15
Enqued element: 1
Enqued element: 2
Queue:
12      15      1       2
This Queue is full and we can't enqueue 7
Dequeuing element 12
Queue:
15      1       2
Enqued element: 6
Queue:
15      1       2       6
This Queue is full and we can't enqueue 4
Queue:
15      1       2       6
Dequeuing element 15
Queue:
1       2       6
Dequeuing element 1
Queue:
2       6
Dequeuing element 2
Queue:
6
Dequeuing element 6
This Queue is empty
Enqued element: 45
Queue:
45
Enqued element: 54
Queue:
45      54
Enqued element: 95
Queue:
45      54      95
PS C:\Sudhadocuments\DSA\DSA>

*/