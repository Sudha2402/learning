#include<stdio.h>
#include<stdlib.h>
 
struct queue
{
    int size;
    int f;
    int r;
    int* arr;
};
 
 
int isEmpty(struct queue *q){
    if(q->r==q->f){
        return 1;
    }
    return 0;
}
 
int isFull(struct queue *q){
    if(q->r==q->size-1){
        return 1;
    }
    return 0;
}
 
void enqueue(struct queue *q, int val){
    if(isFull(q)){
        printf("This Queue is full\n");
    }
    else{
        q->r++;
        q->arr[q->r] = val;
        printf("Enqued element: %d\n", val);
    }
}
 
int dequeue(struct queue *q){
    int a = -1;
    if(isEmpty(q)){
        printf("This Queue is empty\n");
    }
    else{
        q->f++;
        a = q->arr[q->f]; 
    }
    return a;
}

void show(struct queue *q){
    if(isEmpty(q)){
        printf("This Queue is empty\n");
    }
    else{
        printf("Queue:\n");
        for(int i=q->f+1; i<=q->r; i++){
            printf("%d\t",q->arr[i]);
        }
        printf("\n");
    }

}
 
int main(){
    struct queue q;
    q.size = 4;
    q.f = q.r = -1;
    q.arr = (int*) malloc(q.size*sizeof(int));
    
    // Enqueue few elements
    enqueue(&q, 12);
    enqueue(&q, 15);
    enqueue(&q, 1); 
    enqueue(&q, 2); 
    show(&q);
    enqueue(&q, 1); 
    
   // printf("Dequeuing element %d\n", dequeue(&q));
 //   printf("Dequeuing element %d\n", dequeue(&q));
 //   printf("Dequeuing element %d\n", dequeue(&q)); 
 //   printf("Dequeuing element %d\n", dequeue(&q)); 
 //   printf("Dequeuing element %d\n", dequeue(&q)); 
 //   enqueue(&q, 45);
   // enqueue(&q, 45);
   // enqueue(&q, 45);

 
    
 
    return 0;
}
