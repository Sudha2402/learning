#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *next;
};

void linkedListTraversal(struct node *head)
{
    struct node *ptr = head;

    // OR directly ptr can be given in parameters as below

    // void linkedListTraversal(struct node *ptr){
    while (ptr != NULL)
    {
        printf("%d\t", ptr->data);
        ptr = ptr->next;
    }

    return;

    /*
3       6       2       20
    */
}





// insertion 4 cases

// Case 1
struct node *insertAtFirst(struct node *head, int data)
{
    struct node *ptr = (struct node *)malloc(sizeof(struct node));
    ptr->data = data;

    ptr->next = head;
    return ptr;
}

// Case 2
struct node *insertAtIndex(struct node *head, int data, int index)
{
    struct node *ptr = (struct node *)malloc(sizeof(struct node));
    struct node *p = head;
    int i = 0;

    while (i != index - 1)
    {
        p = p->next;
        i++;
    }
    ptr->data = data;
    ptr->next = p->next;
    p->next = ptr;
    return head;
}

// Case 3
struct node *insertAtEnd(struct node *head, int data)
{
    struct node *ptr = (struct node *)malloc(sizeof(struct node));
    ptr->data = data;
    struct node *p = head;

    while (p->next != NULL)
    {
        p = p->next;
    }
    p->next = ptr;
    ptr->next = NULL;
    return head;
}

// Case 4
struct node *insertAfternode(struct node *head, struct node *prevnode, int data)
{
    struct node *ptr = (struct node *)malloc(sizeof(struct node));
    ptr->data = data;

    ptr->next = prevnode->next;
    prevnode->next = ptr;

    return head;
}


// deletion 4 cases
// Case 1: Deleting the first element from the linked list
struct node * deleteFirst(struct node * head){
    struct node * ptr = head;
    head = head->next;
    free(ptr);
    return head;
}

// Case 2: Deleting the element at a given index from the linked list
struct node * deleteAtIndex(struct node * head, int index){
    struct node *p = head;
    struct node *q = head->next;
    for (int i = 0; i < index-1; i++)
    {
        p = p->next;
        q = q->next;
    }
    
    p->next = q->next;
    free(q);
    return head;
}

// Case 3: Deleting the last element
struct node * deleteAtLast(struct node * head){
    struct node *p = head;
    struct node *q = head->next;
    while(q->next !=NULL)
    {
        p = p->next;
        q = q->next;
    }
    
    p->next = NULL;
    free(q);
    return head;
}


// Case 4: Deleting the element with a given value from the linked list
struct node * deleteValue(struct node * head, int value){
    struct node *p = head;
    struct node *q = head->next;
    while(q->data!=value && q->next!= NULL)
    {
        p = p->next;
        q = q->next;
    }
    
    if(q->data == value){
        p->next = q->next;
        free(q);
    }
    return head;
}

int main()
{
    struct node *head;
    struct node *second;
    struct node *third;
    struct node *fourth;
    struct node *fifth;

    // creating space for all pointers
    head = (struct node *)malloc(sizeof(struct node));
    second = (struct node *)malloc(sizeof(struct node));
    third = (struct node *)malloc(sizeof(struct node));
    fourth = (struct node *)malloc(sizeof(struct node));
    fifth = (struct node *)malloc(sizeof(struct node));

    head->data = 3;
    head->next = second;
    second->data = 6;
    second->next = third;
    third->data = 2;
    third->next = fourth;
    fourth->data = 20;
    fourth->next = NULL;

    linkedListTraversal(head);
  printf("\n\n");

    // insertion

    printf("Linked list before insertion\n");
    linkedListTraversal(head);
    head = insertAtFirst(head, 56);
    printf("\nLinked list after insertAtFirst\n");
    linkedListTraversal(head);

    head = insertAtIndex(head, 56, 1);
    printf("\nLinked list after insertAtIndex\n");
    linkedListTraversal(head);

    head = insertAtEnd(head, 56);
    printf("\nLinked list after insertAtEnd\n");
    linkedListTraversal(head);

    head = insertAfternode(head, third, 45);
    printf("\nLinked list after insertAfternode\n");
    linkedListTraversal(head);

    

    /*
3       6       2       20
Linked list before insertion
3       6       2       20
Linked list after insertAtFirst
56      3       6       2       20
Linked list after insertAtIndex
56      56      3       6       2       20
Linked list after insertAtEnd
56      56      3       6       2       20      56
Linked list after insertAfternode
56      56      3       6       2       45      20      56   
PS C:\Sudhadocuments\DSA\DSA>
    */


   printf("\n\n");


   //deletion
   printf("Linked list before deletion\n");
    linkedListTraversal(head);

    head = deleteFirst(head); // For deleting first element of the linked list
     printf("Linked list after deleteFirst\n");
    linkedListTraversal(head);

    head = deleteAtIndex(head, 2);
     printf("Linked list after deleteAtIndex\n");
    linkedListTraversal(head);

    head = deleteAtLast(head);
    printf("Linked list after deleteAtLast\n");
    linkedListTraversal(head);

/*
Linked list before deletion
56      56      3       6       2       45      20      56  Linked list after deleteFirst
56      3       6       2       45      20      56      Linked list after deleteAtIndex
56      3       2       45      20      56      Linked list after deleteAtLast
56      3       2       45      20
PS C:\Sudhadocuments\DSA\DSA>
*/

    return 0;
}