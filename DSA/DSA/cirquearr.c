#include <stdio.h>
#include <stdlib.h>

// here front points the very first element of queue

int MAXQ = 5;
int front = -1, rear = -1;

int items[10];//just an array created but it fills only Maxq size as rear%maxq used

int Isempty();
int Isfull();
void Insert(int); // void Insert(int x) here x will be not defiende
int Delete();
void Display();

int Isempty()
{
	if (front == -1)
		return 1;
	else
		return 0;
}

int Isfull()
{
	if (front == (rear + 1) % MAXQ) //if front have pointed one index behind the element then front==rear % MAXQ have been used 
		return 1;
	else
		return 0;
}

void Insert(int x)
{
	if (Isfull())
	{
		printf("\n Queue full");
		return;
	}
	if (front == -1)
	{
		front = 0;
		rear = 0;//this can be directly included in rear = (rear + 1) % MAXQ; if this is outside else and above items[rear]
	}
	else{
		rear = (rear + 1) % MAXQ;
	}

	items[rear] = x;
}

int Delete()
{
	int x;
	if (Isempty())
	{
		printf("\n Queue is empty");
		exit(0);
	}
	x = items[front];
	if (front == rear)//here at this moment queue has very first element but as delete is called hence it will pop this very first element
	{ // when all elements are popped
		front = -1;
		rear = -1;
	}
	else
		front = (front + 1) % MAXQ;
	return x;
}

void Display()
{

	int i, n;
	if (Isempty())
	{
		printf("\n Queue is empty");
		return;
	}

	printf("\nElements in the Queue are :\n");

	if (front <= rear)
	{
		for (i = front; i <= rear; i++)
			printf("%d\t", items[i]);
	}
	else
	{
		for (i = front; i <= MAXQ - 1; i++)
			printf("%d\t", items[i]);
		for (i = 0; i <= rear; i++)
			printf("%d\t", items[i]);
	}
}

void main()
{
	int x;
	char ch = '1';

	printf("\n 1-INSERT");
	printf("\n 2-DELETE");
	printf("\n 3-DISPLAY");
	printf("\n 4-QUIT");

	while (ch != '4')
	{
		// printf("\n 1-INSERT");
		// printf("\n 2-DELETE");
		// printf("\n 3-DISPLAY");
		// printf("\n 4-QUIT");

		printf("\n Enter your choice:");
		fflush(stdin);//flush all the previously white space acceptable text if possible ( necessary as there is getchar() which creates buffer data and it is needed to be flushed for next iteration for valid choice to be entered)
		ch = getchar(); // let you to write or type a character , this gets will create a buffer and it will be by default accepted in next while loop as choice and keep using this buffer data in scanf
		switch (ch)
		{
		case '1':
			printf(" Enter the element to be inserted:");
			scanf("%d", &x);
			Insert(x);
			break;
		case '2':
			x = Delete();
			printf("\n Deleted element is %d\n:", x);
			break;
		case '3':
			Display();
			break;
		case '4':
			break;
		default:
			printf("\n Wrong choice!Try again:");
		}
	}
}

/*
 1-INSERT
 2-DELETE
 3-DISPLAY
 4-QUIT
 Enter your choice:1
 Enter the element to be inserted:4

 Enter your choice:      (it doesnot let to type because it has taken values from buffer due to getchar() and no fflush and showing this wrong choice)
 Wrong choice!Try again:
 Enter your choice:1
 Enter the element to be inserted:3

 Enter your choice:
 Wrong choice!Try again:
 Enter your choice:1
 Enter the element to be inserted:6

 Enter your choice:
 Wrong choice!Try again:
 Enter your choice:2

 Deleted element is 4
:
 Enter your choice:
 Wrong choice!Try again:
 Enter your choice:1
 Enter the element to be inserted:4

 Enter your choice:
 Wrong choice!Try again:
 Enter your choice:

*/