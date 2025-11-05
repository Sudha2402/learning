#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *next;
};

void circularlinkedListTraversal(struct node *head)
{
    struct node *ptr = head;
    do
    {
        printf("Element is %d\n", ptr->data);
        ptr = ptr->next;
    } while (ptr != head); // very first head gets printed in do at first and update it hence only head at last will be terminate at
}

// Insertion at first
struct node *insertAtFirst(struct node *head, int element)
{
    struct node *ptr;
    ptr = (struct node *)malloc(sizeof(struct node));
    ptr->data = element;
    ptr->next = head;
    struct node *p = head;
    // struct node *p = head->next;
    
    while (p->next != head)
    {
        p = p->next;
    }
 // At this point p points to the last node of this circular linked list
    head = ptr;
    p->next = head;

    //OR
    //  p->next = ptr;
    // ptr->next = head;
    // head = ptr;
    
    return head;
}

int main()
{

    struct node *head;
    struct node *second;
    struct node *third;
    struct node *fourth;

    // Allocate memory for nodes in the linked list in Heap
    head = (struct node *)malloc(sizeof(struct node));
    second = (struct node *)malloc(sizeof(struct node));
    third = (struct node *)malloc(sizeof(struct node));
    fourth = (struct node *)malloc(sizeof(struct node));

    // Link first and second nodes
    head->data = 4;
    head->next = second;

    // Link second and third nodes
    second->data = 3;
    second->next = third;

    // Link third and fourth nodes
    third->data = 6;
    third->next = fourth;

    // Terminate the list at the fourth node
    fourth->data = 1;
    fourth->next = head;

    circularlinkedListTraversal(head);
    /*
    Element is 4
    Element is 3
    Element is 6
    Element is 1
    */
printf("\n\nInsertion at first in circular linkedlist\n");
   head=insertAtFirst(head,12);
   circularlinkedListTraversal(head);

   /*
   Insertion at first in circular linkedlist
Element is 12
Element is 4
Element is 3
Element is 6
Element is 1
   */

    return 0;
}
