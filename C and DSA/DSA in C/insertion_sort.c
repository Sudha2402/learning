#include <stdio.h>

void insertionSort(int *arr, int size)
{
    int i, j, temp;
    for (i = 1; i < size - 1; i++)
    {
        for (j = i - 1; j >= 0; j--)
        {
            if (arr[j] > arr[i]) // swap with actual value not emptying it's plae and replace at last
            {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
                i--; // important to decrement i
            }
        }
    }
    return;
}

// void insertionSort2(int *arr, int size)//pointer is used if no [] bracket
void insertionSort2(int arr[], int size)//either way is fine//[] square bracket is used
{
    int i, j;
    int key;
    for (i = 1; i < size - 1; i++)
    {
        key = arr[i];
        
        j = i - 1;
        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return;
}


void insertionSort3(int arr[], int size)//either way is fine//[] square bracket is used
{
    int i, j;
    int key;
    for (i = 1; i < size - 1; i++)
    {
        key = arr[i];

        
        for (j = i-1; j >= 0; j--)
        {
            if (arr[j] > key)//swap
            {
                arr[j+1]=arr[j];//just like shifting all the numbers right as thinking if A[i] stored in key has also blanked it space and in this for loop , shifthing of elements to the right until key finds the appropriate position to insert
            }
            //this will always move the j to the very first position of iteration that is 0 and then at outside this will be inserted at j=0 position not at the position where key is smaller. hence use conditions to decrements j by using while loop //an we can also use this with else statement to break.

            else {
                break;
            }
        }
        arr[j+1]=key;//this arr[j] is emptied by shifting all to right to let key to be inserted


    }
    return;
}


void printArray(int *arr, int size)
{
    for (int i = 0; i < size - 1; i++)
    {
        printf("%d ", arr[i]);
    }
    printf("\n");
    return;
}

int main()
{
    printf("hello Insertion sort...\n");
    int arr[] = {64, 34, 25, 12, 22, 11, 90, 43, 56, 78};
    int n = sizeof(arr) / sizeof(arr[0]);
    printf("Original array: \n");
    printArray(arr, n);
    insertionSort(arr, n);
    printf("Sorted array: \n");
    printArray(arr, n);
    int arr2[] = {64, 34, 25, 12, 22, 11, 90, 43, 56, 78};

    int n2 = sizeof(arr2) / sizeof(arr2[0]);
    printf("Original array: \n");
    printArray(arr2, n);

    
    insertionSort2(arr2, n);
    printf("Sorted array: \n");
    printArray(arr2, n);
    

     insertionSort3(arr2, n);
    printf("Sorted array3: \n");
    printArray(arr2, n);

   

    printf("\n");

    return 0;
}

/*
hello Insertion sort...
Original array:
64 34 25 12 22 11 90 43 56
Sorted array:
11 12 22 25 34 43 56 64 90
Original array:
64 34 25 12 22 11 90 43 56
Sorted array:
64 34 25 12 22 11 90 43 56 //incorrect

PS C:\Sudhadocuments\DSA\DSA>
*/

/*
hello Insertion sort...
Original array: 
64 34 25 12 22 11 90 43 56
Sorted array:
11 12 22 25 34 43 56 64 90
Original array:
64 34 25 12 22 11 90 43 56
Sorted array:
11 12 22 25 34 43 56 64 90 //after using while with condition in insertionSort2


PS C:\Sudhadocuments\DSA\DSA> 
*/