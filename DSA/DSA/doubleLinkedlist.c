#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *next;
    struct node *prev;
};

void traverseDoubleLinkedlist(struct node *head)
{
    struct node *ptr = head;
    while (ptr != NULL)
    {
        printf("%d\n", ptr->data);
        ptr = ptr->next;
    }
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
    head->prev=NULL;
    second->data = 14;
    second->next = third;
    second->prev = head;
    third->data = 17;
    third->next = fourth;
    third->prev = second;
    fourth->data = 10;
    fourth->next = NULL;
    fourth->prev=third;

    printf("traverseLinkedlist\n");
    traverseDoubleLinkedlist(head);

    printf("\n\nInsertion at first\n");
    

}
