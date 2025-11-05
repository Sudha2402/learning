#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *next;
};

void traverseLinkedlist(struct node *head)
{
    struct node *ptr = head;
    while (ptr != NULL)
    {
        printf("%d\n", ptr->data);
        ptr = ptr->next;
    }
}

// Insertion at first
struct node *insertAtFirst(struct node *head, int element)
{
    struct node *ptr;
    ptr = (struct node *)malloc(sizeof(struct node));
    ptr->data = element;
    ptr->next = head;
    head = ptr;
    return head;
}

// Insertion at last
struct node *insertAtLast(struct node *head, int element)
{
    struct node *ptr;
    ptr = (struct node *)malloc(sizeof(struct node));
    ptr->data = element;

    struct node *p = head;
    while (p->next != NULL)
    {
        p = p->next;
    }
    p->next = ptr;
    ptr->next = NULL;

    return head;
}

// insert at index
struct node *insertAtIndex(struct node *head, int element, int index)
{
    struct node *ptr;
    ptr = (struct node *)malloc(sizeof(struct node));
    ptr->data = element;
    struct node *p = head;
    for (int i = 0; i < index; i++)
    {
        p = p->next;
    }
    ptr->next = p->next;
    p->next = ptr;

    return head;
}

struct node *insertBeforeNodeData(struct node *head, int element, int node)
{
    struct node *ptr;
    ptr = (struct node *)malloc(sizeof(struct node));
    ptr->data = element;
    struct node *p = head;
    while (p->next->data != node)
    {
        p = p->next;
    }

    ptr->next = p->next;
    p->next = ptr;

    return head;
}


//insertAfterNode
struct node *insertAfterNode(struct node *head, int element,struct node *prevnode )
{
    struct node *ptr;
    ptr = (struct node *)malloc(sizeof(struct node));
    ptr->data = element;
    ptr->next = prevnode->next;
    prevnode->next = ptr;
    return head;
}


// delete at index
struct node *deleteAtIndex(struct node *head, int index)
{
    struct node *p = head;
    for (int i = 0; i < index; i++)
    {
        p = p->next;
    }

    printf("deleted data at %d is : %d \n", index, p->next->data);
    struct node *temp = p->next; // if this temp is not used then it would have created infinite loop and never terminated as ptr->next would have been free
    //free(p->next); 
    p->next = p->next->next;
    free(temp);

    return head;
}

int main()
{
    struct node *head;
    head = (struct node *)malloc(sizeof(struct node));
    struct node *second;
    second = (struct node *)malloc(sizeof(struct node));
    struct node *third;
    third = (struct node *)malloc(sizeof(struct node));
    struct node *fourth;
    fourth = (struct node *)malloc(sizeof(struct node));
    head->data = 12;
    head->next = second;
    second->data = 14;
    second->next = third;
    third->data = 17;
    third->next = fourth;
    fourth->data = 10;
    fourth->next = NULL;

printf("traverseLinkedlist\n");
    traverseLinkedlist(head);

    printf("\n\nInsertion at first\n");

    /*
    linkedlistTry.c:21:27: warning: incompatible implicit declaration of built-in function 'malloc'
    linkedlistTry.c:21:27: note: include '<stdlib.h>' or provide a declaration of 'malloc'
    12
    14
    17
    10
    */

    // Insertion at first
    head = insertAtFirst(head, 10);
    traverseLinkedlist(head);

    /*
10
12
14
17
10
    */
    printf("\n\nInsertion at first\n");

    insertAtFirst(head, 20); // the return value has to get stored in head in mains to update globally , hence head= is necessary
    traverseLinkedlist(head);
    /*
10
12
14
17
10
    */
    printf("\n\nInsertion at last\n");

    // Insertion at last
    head = insertAtLast(head, 20); // the return value has to get stored in head in mains to update globally , hence head= is necessary
    traverseLinkedlist(head);
    /*
10
12
14
17
10
20
    */
 printf("\n\n insert at index\n");
    // insert at index
    head = insertAtIndex(head, 20, 3);
    traverseLinkedlist(head);

    /*
    10
    12
    14
    17
    20
    10
    20
    */

    printf("\n\ninsert before node data\n");

    // insert before node data
    int node;
    head = insertBeforeNodeData(head, 30, 17);
    traverseLinkedlist(head);

    /*
    10
    12
    14
    30
    17
    20
    10
    20
    */

 printf("\n\ninsert after node like head, second , third etc\n");
   // insert after node like head, second , third etc
   head = insertAfterNode(head, 24, third);
traverseLinkedlist(head);

/*
insert after node like head, second , third etc
10
12
14
30
17
24//it is inserted here beacuse third node is not updated due to all above insertion because all value gets stored in head, to get coorect result pass the index
20
10
20

*/


 printf("\n\ndelete at index\n");
    // delete at index
    head = deleteAtIndex(head, 4);
    traverseLinkedlist(head);

/*

delete at index
deleted data at 4 is : 24
10
12
14
30
17
20
10
20
*/

}
