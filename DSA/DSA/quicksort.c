#include <stdio.h>

void printArray(int *arr, int size)
{
    for (int i = 0; i < size - 1; i++)
    {
        printf("%d ", arr[i]);
    }
    printf("\n");
    return;
}


int partition(int arr[], int low, int high)
{
    int pivot = arr[low];
    int i = low + 1, j = high;
    while (i <= j) // keep trap here until i>j , when i>j then it will exit the while loop and swap pivot to the A[j] data at the end after j updated by this while loop
    {
        while (i <= j && arr[i] <= pivot) // i <= j need as i gets updated inside , so it will create problem and condition i <= j above will be afected only after next iteration
            i++;
        while (i <= j && arr[j] > pivot) // if arr[j] = pivot then this while loop will exit
            j--;
        if (i <= j) // internal swapping of arr[i] and arr[j]//swapping of a[j] and pivot is done outside the while loop ad return j at last
        {
            // only value is swapped but not the index i and j
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++; // used to restart the while (i <= j) loop
            j--;
        }
    }
    // int temp = arr[low];
    int temp = pivot;
    arr[low] = arr[j];
    // pivot = arr[j];//this will not work as it will update pivot value not the arr[low] index value
    arr[j] = temp;
    return j;
}

// void quicksort(int *arr, int low, int high)
void quicksort(int arr[], int low, int high)
{
    if (low < high)
    {
        int partitionIndex = partition(arr, low, high);
        quicksort(arr, low, partitionIndex - 1);
        quicksort(arr, partitionIndex + 1, high);
    }

    return;
}



int partition2(int arr[], int low, int high)
{
    int pivot2 = arr[low];
    int i = low + 1, j = high, temp;

    do
    {
        while (arr[i] <= pivot2)
        {
            i++;
        }
        while (arr[j] > pivot2)
        {
            j--;
        }
        // if(i<=j){//swapping with equal will be just extra and productiveless hence as same position swap with itself
        if (i < j)
        {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            // i++;//it will be automatically affected by  while (i <= j),hence no need to do this in array as array is affected globally
            // j--;
        }

        // i++; // it will be automatically affected by  while (i <= j). hence no need to do this in array as array is affected globally
        // j--;

        // }while(i<=j);//it will be traped in while when i=j and this will create problem
    } while (i < j);

    temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;

    return j;
}

void quicksort2(int *arr, int low, int high)
{
    if (low < high)
    {
        int partitionIndex = partition2(arr, low, high);
        quicksort2(arr, low, partitionIndex - 1);
        quicksort2(arr, partitionIndex + 1, high);
    }
}

int main()
{
    printf("Hello Quicksort\n");
    int arr[] = {2, 5, 1, 9, 0, 3, 10, 10, 40, 15, 28};
    int n = sizeof(arr) / sizeof(arr[0]);
    printf("Original array is: ");
    printArray(arr, n);

    printf("\n");
    int low, high;
    low = 0;
    high = n - 1;
    quicksort(arr, low, high);
    printf("Sorted array is: ");
    printArray(arr, n);

    printf("\n");

    int arr2[] = {2, 5, 1, 9, 0, 3, 10, 10, 40, 15, 28};
    int n2 = sizeof(arr) / sizeof(arr[0]);
    printf("Original array is: ");
    printArray(arr2, n2);
    low = 0;
    high = n2 - 1;
    quicksort2(arr2, low, high);
    printf("Sorted array is: ");
    printArray(arr2, n2);
    printf("\n");

    return 0;
}

/*
Hello Quicksort
Original array is: 2 5 1 9 0 3 10 10 40 15 

Sorted array is: 0 1 2 3 5 9 10 10 15 28

Original array is: 2 5 1 9 0 3 10 10 40 15
Sorted array is: 0 1 2 3 5 9 10 10 15 28

PS C:\Sudhadocuments\DSA\DSA> 
*/