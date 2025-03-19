#include <stdio.h>
#include <stdlib.h>

void bubbleSort(int *arr, int size)
{
    int i, j, temp;
    for (i = 0; i < size - 1; i++)
    {
        for (j = 0; j < size - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])//swap
            {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return;
}

void printArray(int *arr, int size){
    for(int i=0;i<size-1;i++){
        printf("%d ",arr[i]);

    }
    printf("\n");
    return;
}

int main()
{
    printf("Hello bubble sort...\n");
    int arr[] = {64, 34, 25, 12, 22,11, 90, 50, 41, 35};
    
    int n = sizeof(arr) / sizeof(arr[0]);
    printf("Original array: \n");
    printArray(arr, n);
    bubbleSort(arr, n);
    printf("Sorted array: \n");
    printArray(arr, n);

    printf("\n");

    return 0;
}

/*
Original array: 
64 34 25 12 22 11 90 50 41
Sorted array:
11 12 22 25 34 35 41 50 64
*/