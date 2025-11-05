// Bucket sort in C

#include <stdio.h>
#include <stdlib.h>

// https://www.programiz.com/dsa/bucket-sort

#define NARRAY 7    // Array size
#define NBUCKET 6   // Number of buckets
#define INTERVAL 10 // Each bucket capacity //as indexing is also 0 to 9

struct Node
{
    int data;
    struct Node *next;
};

void BucketSort(int arr[]);

struct Node *InsertionSort(struct Node *list);

void print(int arr[]);

void printBuckets(struct Node *list);

int getBucketIndex(int value);

// Sorting function
void BucketSort(int arr[])
{
    int i, j;
    struct Node **buckets;
// double pointers are those pointers which stores the address of another pointer. The first pointer is used to store the address of the variable, and the second pointer is used to store the address of the first pointer. That is why they are also known as a pointer to pointer.



printf("-------------\n");
// A variable
    int var = 10;
  
    // Pointer to int
    int *ptr1 = &var;
  
    // Pointer to pointer (double pointer)
    int **ptr2 = &ptr1;  

    printf("var: %d\n", var);          
    printf("*ptr1: %d\n", *ptr1);
    printf("**ptr2: %d\n", **ptr2);
    printf("-------------\n");


    // Create buckets and allocate memory size
    buckets = (struct Node **)malloc(sizeof(struct Node *) * NBUCKET);

    // Initialize empty buckets
    for (i = 0; i < NBUCKET; ++i)
    {
        buckets[i] = NULL;
    }

    // Fill the buckets with respective elements
    for (i = 0; i < NARRAY; ++i)
    {
        struct Node *current;
        int pos = getBucketIndex(arr[i]);
        current = (struct Node *)malloc(sizeof(struct Node));
        current->data = arr[i];
        current->next = buckets[pos];
        buckets[pos] = current;
    }

    // Print the buckets along with their elements
    for (i = 0; i < NBUCKET; i++)
    {
        printf("Bucket[%d]: ", i);
        printBuckets(buckets[i]);
        printf("\n");
    }

    // Sort the elements of each bucket
    for (i = 0; i < NBUCKET; ++i)
    {
        buckets[i] = InsertionSort(buckets[i]);
    }

    printf("-------------\n");
    printf("Bucktets after sorting\n");
    for (i = 0; i < NBUCKET; i++)
    {
        printf("Bucket[%d]: ", i);
        printBuckets(buckets[i]);
        printf("\n");
    }

    // Put sorted elements on arr
    for (j = 0, i = 0; i < NBUCKET; ++i)
    {
        struct Node *node;
        node = buckets[i];
        while (node)
        {
            arr[j++] = node->data;
            node = node->next;
        }
    }

    return;
}

// Function to sort the elements of each bucket
struct Node *InsertionSort(struct Node *list)
{
    struct Node *k, *nodeList;
    if (list == 0 || list->next == 0)
    {
        return list;
    }

    nodeList = list;
    k = list->next;
    nodeList->next = 0;
    while (k != 0)
    {
        struct Node *ptr;
        if (nodeList->data > k->data)
        {
            struct Node *tmp;
            tmp = k;
            k = k->next;
            tmp->next = nodeList;
            nodeList = tmp;
            continue;
        }

        for (ptr = nodeList; ptr->next != 0; ptr = ptr->next)
        {
            if (ptr->next->data > k->data)
                break;
        }

        if (ptr->next != 0)
        {
            struct Node *tmp;
            tmp = k;
            k = k->next;
            tmp->next = ptr->next;
            ptr->next = tmp;
            continue;
        }
        else
        {
            ptr->next = k;
            k = k->next;
            ptr->next->next = 0;
            continue;
        }
    }
    return nodeList;
}

int getBucketIndex(int value)
{
    return value / INTERVAL;
}

void print(int ar[])
{
    int i;
    for (i = 0; i < NARRAY; ++i)
    {
        printf("%d ", ar[i]);
    }
    printf("\n");
}

// Print buckets
void printBuckets(struct Node *list)
{
    struct Node *cur = list;
    while (cur)
    {
        printf("%d ", cur->data);
        cur = cur->next;
    }
}

// Driver code
int main(void)
{
    int array[NARRAY] = {42, 32, 33, 52, 37, 47, 51};

    printf("Initial array: ");
    print(array);
    printf("-------------\n");

    BucketSort(array);
    printf("-------------\n");
    printf("Sorted array: ");
    print(array);
    return 0;
}